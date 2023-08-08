import { createApi } from "../_create-api/mod.ts";
import { auth } from "../_create-api/auth/mod.ts";
export type {
  Charges,
  Customers,
  Invoices,
  Plans,
  QueryCharges,
  QueryCustomers,
  QueryInvoices,
  QueryPlans,
  QuerySubscriptionItems,
  QuerySubscriptions,
  QueryTransactions,
  SubscriptionItems,
  Subscriptions,
  Transactions,
} from "./types.ts";

export interface StripeOptions {
  apiKey: string;
}

/**
 * SDK constructor function for the Stripe API
 *
 * @see https://netzo.io/docs/netzo/apis/stripe
 *
 * @param {string} apiKey - the API key to use for authentication
 * @returns {object} - an object of multiple utilities for the API
 */
export const stripe = ({
  apiKey = Deno.env.get("STRIPE_API_KEY")!,
}: StripeOptions) => {
  const api = createApi({
    baseURL: "https://api.stripe.com/v1",
    headers: {
      "content-type": "application/json",
    },
    async onRequest(ctx) {
      await auth({
        type: "apiKey",
        in: "header",
        name: "apiKey",
        value: apiKey,
      }, ctx);
    },
  });

  return { api };
};
