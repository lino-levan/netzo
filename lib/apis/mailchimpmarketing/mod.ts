import { createApi } from "../_create-api/mod.ts";
import { auth } from "../_create-api/auth/mod.ts";

export interface MailchimpOptions {
  marketingApiKey: string;
  dataCenter: string;
}

/**
 * SDK constructor function for the Mailchimp API
 *
 * @see https://netzo.io/docs/netzo/apis/mailchimp
 *
 * @param {string} marketingApiKey - the marketing API key to use for authentication
 * @param {string} dataCenter - the data center to construct the base URL
 * @returns {object} - an object of multiple utilities for the API
 */
export const mailchimp = ({
  marketingApiKey = Deno.env.get("MAILCHIMP_MARKETING_API_KEY")!,
  dataCenter = Deno.env.get("MAILCHIMP_MARKETING_DATA_CENTER")!,
}: MailchimpOptions) => {
  const api = createApi({
    baseURL: ` https://${dataCenter}.api.mailchimp.com/3.0`,
    headers: {
      "content-type": "application/json",
    },
    async onRequest(ctx) {
      await auth({
        type: "bearer",
        token: marketingApiKey,
      }, ctx);
    },
  });

  return { api };
};