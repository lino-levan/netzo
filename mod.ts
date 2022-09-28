import type { INetzoOptions, } from "./types.ts";
import {
  _services,
  http,
  // sse,
  // websocket
} from "./src/mod.ts";

/**
 * Constructor function for the Netzo SDK.
 *
 * This is the main entry point for the Netzo SDK. It is used to create
 * a new instance of the SDK. It handles authentication internaly.
 *
 * @example const netzo = new Netzo({ apiKey: Deno.env.get('API_KEY) })
 *
 * @param {string} options.apiKey - the API key to use for authentication.
 * @param {string} options.baseURL - (optional) the base URL to use for the API.
 *
 * @returns {INetzo} - a new instance of the Netzo SDK
 */
export const Netzo = (options: INetzoOptions) => {
  const { apiKey, baseURL = "https://api.netzo.io" } = options;

  const api = http({
    baseURL,
    headers: {
      'accept': 'application/json',
      'content-type': 'application/json',
      'x-api-key': options.apiKey
    }
  })

  return {
    api,
    baseURL,
    getApiKey: () => apiKey,
    services: _services(api),
    http,
  };
};