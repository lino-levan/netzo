import type { Plugin } from "$fresh/server.ts";
import type { OAuth2ClientConfig } from "deno_kv_oauth/mod.ts";
import kvOAuthPlugin from "./plugins/kv-oauth.ts";
import sessionPlugin from "./plugins/session.ts";
import errorHandling from "./plugins/error-handling.ts";
import securityHeaders from "./plugins/security-headers.ts";
import welcomePlugin from "./plugins/welcome.ts";

export type AuthOptions = {
  // email: EmailClientConfig;
  oauth2: OAuth2ClientConfig;
};

/**
 * A fresh plugin that registers middleware and handlers to
 * handle Authentication with multiple OAuth2 providers and
 * a configurable sign-in page.
 *
 * - `GET /auth` for the authentication page
 * - `GET /oauth/signin` for the sign-in page
 * - `GET /oauth/callback` for the callback page
 * - `GET /oauth/signout` for the sign-out page
 */
export const authPlugins = (
  options: AuthOptions,
): Plugin[] => {
  return [
    welcomePlugin(options),
    kvOAuthPlugin(options),
    sessionPlugin(options),
    errorHandling(options),
    securityHeaders(options),
  ];
};