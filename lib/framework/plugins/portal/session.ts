import type { FreshContext } from "netzo/deps/$fresh/src/server/mod.ts";
import type { PluginMiddleware } from "netzo/deps/$fresh/src/server/types.ts";
import { getSessionId } from "netzo/deps/deno_kv_oauth/mod.ts";
import { getUserBySession } from "netzo/framework/plugins/portal/utils/db.ts";
import { createHttpError } from "netzo/deps/std/http/http_errors.ts";
import { Status } from "netzo/deps/std/http/http_status.ts";
import type { NetzoState } from "../../framework/mod.ts";

export function assertSignedIn(state: NetzoState) {
  if (state.portal?.sessionUser === undefined) {
    throw createHttpError(Status.Unauthorized, "User must be signed in");
  }
}

async function setSessionState(
  req: Request,
  ctx: FreshContext<NetzoState>,
) {
  if (!["route"].includes(ctx.destination)) return await ctx.next();

  const sessionId = await getSessionId(req);
  ctx.state.portal = {
    ...ctx.state.portal,
    sessionId,
    sessionUser: undefined, // reset each request (before next())
  };

  if (sessionId === undefined) return await ctx.next();
  const user = await getUserBySession(sessionId);
  if (!user) return await ctx.next();

  ctx.state.portal.sessionUser = user;

  return await ctx.next();
}

// async function ensureSignedIn(
//   _req: Request,
//   ctx: FreshContext<NetzoState>,
// ) {
//   assertSignedIn(ctx.state);
//   return await ctx.next();
// }

export async function ensureSignedIn(
  req: Request,
  ctx: FreshContext<NetzoState>,
) {
  const url = new URL(req.url);
  if (!["route"].includes(ctx.destination)) return await ctx.next();

  if (url.pathname.startsWith("/oauth/")) return await ctx.next();

  // check portal state
  const { sessionId } = ctx.state.portal;
  const isAuthenticated = sessionId !== undefined;

  // redirect to /auth if not authenticated or to / if authenticated
  if (url.pathname !== "/auth" && !isAuthenticated) {
    console.debug("[portal] User logged out, redirecting to /auth");
    url.pathname = "/auth";
    return Response.redirect(url.href, 302);
  } else if (url.pathname === "/auth" && isAuthenticated) {
    console.debug("[portal] User logged in, redirecting to /");
    url.pathname = "/";
    return Response.redirect(url.href, 302);
  }

  return await ctx.next();
}

/**
 * Middleware that ensures the client is signed-in before proceeding.
 * The {@linkcode ensureSignedIn} middleware throws an error equivalent to the
 * {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/401|HTTP 401 Unauthorized}
 * error if `ctx.state.portal.sessionUser` is `undefined`.
 *
 * The thrown error is then handled by {@linkcode handleWebPageErrors}, or
 * {@linkcode handleRestApiErrors}, if the request is made to a REST API endpoint.
 *
 * @see {@link https://fresh.deno.dev/docs/concepts/plugins|Plugins documentation}
 * for more information on Fresh's plugin functionality.
 */
export const sessionMiddlewares: PluginMiddleware<NetzoState>[] = [
  {
    path: "/",
    middleware: { handler: setSessionState },
  },
  {
    path: "/",
    middleware: { handler: ensureSignedIn },
  },
];
