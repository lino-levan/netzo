import { JSX } from "preact";
import type { Plugin } from "../deps.ts";
import AppLayout from "./AppLayout.tsx";

export interface NetzoAppLayoutOptions {
  title?: string;
  description?: string;
  favicon?: string;
  image?: JSX.HTMLAttributes<HTMLImageElement>;
}

export const netzoAppLayout = (
  options: NetzoAppLayoutOptions = {
    title: "Built with Netzo",
    favicon: "/favicon.svg",
  },
): Plugin => {
  return {
    name: "netzoAppLayout",
    routes: [
      { path: "/_app", component: AppLayout(options) },
    ],
  };
};