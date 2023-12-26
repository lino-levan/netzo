import { netzo as createApi } from "../apis/netzo/mod.ts";
import { createCron } from "./cron.ts";
import { createDatabase } from "./database.ts";
import { createNotification } from "./notification.ts";

export type NetzoOptions = {
  apiKey: string;
  baseURL?: string;
  databaseURL?: string;
};

/**
 * SDK constructor function for Netzo
 *
 * @param {string} apiKey - the API key to use for authentication
 * @param {string} baseURL - (internal) the base URL to use for the API
 * @returns {object} - an object of multiple utilities core to Netzo
 */
export const Netzo = async ({
  apiKey = Deno.env.get("NETZO_API_KEY")!,
  baseURL = Deno.env.get("NETZO_API_URL") || "https://api.netzo.io",
  databaseURL = Deno.env.get("NETZO_DATABASE_URL"),
}: NetzoOptions = {} as NetzoOptions) => {
  const { api } = createApi({ apiKey, baseURL });

  const cron = createCron(api);

  // DISABLED: cannot pass 'databaseURL' for now since Subhosting
  // throws "TypeError: Non-default databases are not supported"
  const kv = await Deno.openKv(databaseURL); // databaseURL undefined in production

  const db = createDatabase(kv);

  const notification = createNotification(api);

  return { api, cron, kv, db, notification };
};
