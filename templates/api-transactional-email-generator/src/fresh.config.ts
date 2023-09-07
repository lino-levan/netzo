import "std/dotenv/load.ts";
import { defineConfig } from "$fresh/server.ts";
import { flowbite } from "netzo/ui/plugins/flowbite/mod.ts";
import { unocss } from "netzo/ui/plugins/unocss/mod.ts";
import unoConfig from "./uno.config.ts";

export default defineConfig({
  plugins: [
    unocss(unoConfig),
    flowbite(),
  ],
});
