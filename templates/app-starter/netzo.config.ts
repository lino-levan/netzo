import "std/dotenv/load.ts";
import { defineNetzoConfig } from "netzo/config.ts";
import { createGitHubOAuthConfig } from "deno_kv_oauth/mod.ts";
import { authenticationPlugin } from "netzo/authentication/fresh.ts";
import twindPlugin from "$fresh/plugins/twindv1.ts";
import twindConfig from "./twind.config.ts";

export default defineNetzoConfig({
  project: "sheer-marlin-436696",
  entrypoint: "main.ts",
  modules: {
    authentication: {},
  },
  plugins: [
    authenticationPlugin(createGitHubOAuthConfig()),
    twindPlugin(twindConfig),
  ],
});
