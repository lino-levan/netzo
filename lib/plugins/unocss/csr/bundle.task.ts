import {
  bundle,
  type BundleOptions,
} from "https://deno.land/x/emit@0.32.0/mod.ts";

const options: BundleOptions = {
  type: "module",
  minify: true,
  "compilerOptions": {
    "jsx": "jsx",
    "jsxFactory": "h",
    "jsxFragmentFactory": "Fragment",
    // "jsxImportSource": "preact",
  },
  importMap: {
    imports: {
      "@/": "./",
      "netzo/": "https://deno.land/x/netzo@0.4.32/",
      "$fresh/": "https://deno.land/x/fresh@1.6.3/",
      "preact": "https://esm.sh/v135/preact@10.19.3",
      "preact/": "https://esm.sh/v135/preact@10.19.3/",
      "@preact/signals": "https://esm.sh/v135/*@preact/signals@1.2.2",
      "@preact/signals-core": "https://esm.sh/v135/*@preact/signals-core@1.5.1",
      "std/": "https://deno.land/std@0.208.0/",
      "react": "https://esm.sh/v135/preact@10.19.3/compat",
      "react-dom": "https://esm.sh/v135/preact@10.19.3/compat",
      "react/jsx-runtime": "https://esm.sh/v135/preact@10.19.3/compat",
    },
  },
};

const { code } = await bundle(
  new URL("./uno.config.ts", import.meta.url),
  options,
);

const { href } = new URL("./uno.config.js", import.meta.url);
await Deno.writeTextFile(href.replace("file://", ""), code);
