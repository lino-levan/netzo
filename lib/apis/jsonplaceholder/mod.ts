import { createApi } from '../create-api/mod.ts'
import { auth } from '../create-api/auth/mod.ts'

/**
 * SDK constructor function for the JSONPlaceholder API
 *
 * @returns {object} - an object of multiple utilities for the API
 */
export const jsonplaceholder = () => {
  const api = createApi({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {
      'content-type': 'application/json',
    },
    async onRequest(ctx) {
      await auth({ type: 'none' }, ctx)
    },
  })

  return { api }
}