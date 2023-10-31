import type { Plugin } from "$fresh/server.ts";
import type { NetzoConfig } from "netzo/config.ts";

/*
The following lists the possible header combinations when
making a request to a project/deployment from any source:

[app] allow all requests coming from app.netzo.io
  [app:iframe] allow embedding as <iframe src /> in app (e.g. in /projects/:uid page)
    • host: "app-launcher-fresh-131374.netzo.io"
    • origin: null
    • referer: "https://app.netzo.io/"
  [app:anchor-tag] allow navigating from an <a href /> (e.g. "open in new tab")
    • host: "app-launcher-fresh-131374.netzo.io"
    • origin: null
    • referer: "https://app.netzo.io/"
  [app:fetch] allow invoking from app (e.g. in /workspace/:workspaceId/projects/:id/requests page)
    • host: "6486ed1c1d0eaf9d649719ec.netzo.io" (NOTE: sends request to {deploymentId}.netzo.io for better latency)
    • origin: "https://app.netzo.io"
    • referer: "https://app.netzo.io/"
[external] from external HTTP clients (e.g. browser tab, curl, postman, hoppscotch)
  • host: "app-launcher-fresh-131374.netzo.io"
  • origin: null
  • referer: null | "https://hoppscotch.io/"
*/

export type VisibilityOptions = {
  level: "private" | "public";
};

export type VisibilityState = {};

/**
 * A fresh plugin that registers middleware to handle
 * visibility of projects based on the `visibility` option.
 */
export const visibilityPlugins = (): Plugin[] => {
  return [
    {
      name: "visibility-plugin",
      middlewares: [
        {
          path: "/",
          middleware: {
            handler: async (req, ctx) => {
              if (!Deno.env.get("DENO_REGION")) return await ctx.next(); // skip in development

              if (!["route"].includes(ctx.destination)) return await ctx.next();

              const { level } = ctx.state.config.visibility!;

              // const host = req.headers.get("host"); // e.g. my-project-906698.netzo.io
              const origin = req.headers.get("origin"); // e.g. https://my-project-906698.netzo.io
              const referer = req.headers.get("referer"); // SOMETIMES SET e.g. https://app.netzo.io/some-path

              // simple heuristics to determine source of request:
              const isApp = (url: string) =>
                !!url && new URL(url).host.endsWith("netzo.io");
              const is = { app: isApp(origin!) || isApp(referer!) };

              // console.debug({ destination: ctx.destination, origin, referer, is });

              switch (level) {
                case "private": {
                  if (!is.app) {
                    throw new Error(
                      "Private deployments cannot be accessed externally",
                    );
                  }
                  return await ctx.next();
                }
                case "public":
                default: {
                  return await ctx.next();
                }
              }
            },
          },
        },
      ],
    },
  ];
};
