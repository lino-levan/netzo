import { z } from "zod/mod.ts";
import type { Handlers } from "$fresh/server.ts";
import type { PluginRoute } from "$fresh/src/server/types.ts";
import type { DatabaseOptions, DatabaseServiceOptions } from "./mod.ts";
import { createDatabase } from "../mod.ts";

const kv = await Deno.openKv();
const db = createDatabase(kv);

const METHODS = ["find", "get", "create", "update", "patch", "remove"];
const notAllowed = () => new Response("Method not allowed", { status: 405 });

export const generateRoutes = (options: DatabaseOptions) => {
  const { prefix: _, ...serviceOptionDefaults } = options;
  options = {
    ...options,
    services: options.services.map(({ name, ...serviceOptions }) => ({
      ...serviceOptionDefaults,
      name: name.toLowerCase().replace(/\s/g, "-"), // convert to kebab-case
      ...serviceOptions,
    })),
  };

  const generateHandlerConfig = (): Handlers => {
    return {
      GET(_req, _ctx) {
        return Response.json(options);
      },
    };
  };

  const generateHandler = <T>(
    service: DatabaseServiceOptions,
  ): Handlers<T | null> => {
    const {
      name,
      idField = options.idField || "id",
      methods = options.methods ?? METHODS,
    } = service;
    return {
      async GET(_req, _ctx) {
        if (!methods.includes("find")) return notAllowed();
        const result = await db.find<T>(name, {});
        return Response.json(result);
      },
      async POST(req, _ctx) {
        if (!methods.includes("create")) return notAllowed();
        const data = await req.json();
        const result = await db.create<T>(name, data, idField as keyof T);
        return Response.json(result);
      },
    };
  };

  const generateHandlerWithId = <T>(
    service: DatabaseServiceOptions,
  ): Handlers<T | null> => {
    const {
      name,
      idField = options.idField || "id",
      methods = options.methods ?? METHODS,
    } = service;
    return {
      async GET(_req, ctx) {
        if (!methods.includes("get")) return notAllowed();
        const id = ctx.params[idField];
        const result = await db.get(name, id);
        return Response.json(result);
      },
      async PUT(req, ctx) {
        if (!methods.includes("update")) return notAllowed();
        const id = ctx.params[idField];
        const data = (await req.json()) as T;
        const result = await db.update<T>(name, id, data);
        return Response.json(result);
      },
      async PATCH(req, ctx) {
        if (!methods.includes("patch")) return notAllowed();
        const id = ctx.params[idField];
        const data = (await req.json()) as T;
        const result = await db.patch<T>(name, id, data);
        return Response.json(result);
      },
      async DELETE(_req, ctx) {
        if (!methods.includes("remove")) return notAllowed();
        const id = ctx.params[idField];
        await db.remove<T>(name, id);
        return new Response(`Deleted ${id}`, { status: 200 });
      },
    };
  };

  const routes = options.services.flatMap(
    (service: DatabaseServiceOptions): PluginRoute[] => {
      return [
        {
          path: `/${options.prefix}/${service.name}`,
          handler: generateHandler<z.infer<typeof service.schema>>(service),
        },
        {
          path: `/${options.prefix}/${service.name}/:id`,
          handler: generateHandlerWithId<z.infer<typeof service.schema>>(
            service,
          ),
        },
      ];
    },
  );

  return [
    {
      path: `/${options.prefix}/__config`,
      handler: generateHandlerConfig(),
    },
    ...routes,
  ];
};