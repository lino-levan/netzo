<img src="https://raw.githubusercontent.com/netzo/netzo/main/assets/apis/holded.svg" alt="netzo/apis/holded" class="mb-5 w-75px">

# Holded

Holded is a business management software that helps you manage your business from sales and purchases to accounting and taxes.

- **labels:** `sales`, `accounting/finance`
- **authentication:** `apiKey`

## Usage

```ts
import { holded } from 'https://deno.land/x/netzo/apis/holded/mod.ts'
const { api } = holded({
  apiKey: Deno.env.get('HOLDED_API_KEY')
})
```

## Configuration

The `holded` factory function expects an object with the following, and returns an object with an HTTP client `api`.

| Param    | Type   | Default                          | Description                           |
|----------|--------|----------------------------------|---------------------------------------|
| `apiKey` | string | `Deno.env.get('HOLDED_API_KEY')` | the api key to use for authentication |

::: tip Refer to the [API documentation](https://developers.holded.com/reference/api-key) to get the required information.
:::

## Examples

The following examples assume you have [created an api client instance](#usage). Refer to the [type definitions](https://deno.land/x/netzo/apis/holded/types.ts) for all exported types to pass to the `api` client for typed responses.

### Find contacts

Find all contacts that match the query.

```ts
import type { Contact, QueryContacts } from 'netzo/apis/holded/mod.ts'

const query: QueryContacts = {}
const data = await api.invoicing.v1.contacts.get<Contact[]>(query)
```

### Get contact

Get a contact by id.

```ts
import type { Contact } from 'netzo/apis/holded/mod.ts'

const data = await api.invoicing.v1.contacts[CONTACT_ID].get<Contact>()
```

### Add contact

Add a new contact.

```ts
import type { ContactResponse, QueryAddContact } from 'netzo/apis/holded/mod.ts'

const payload: QueryAddContact = { name: 'New contact name' }
const data = await api.invoicing.v1.contacts.post<ContactResponse>(payload)
```

### Update contact

Update a contact by id.

```ts
import type { ContactResponse, QueryUpdateContact } from 'netzo/apis/holded/mod.ts'

const payload: QueryUpdateContact = { name: 'Updated contact name' }
const data = await api.invoicing.v1.contacts[CONTACT_ID].put<ContactResponse>(payload)
```

### Delete contact

Delete a contact by id.

```ts
import type { ContactResponse } from 'netzo/apis/holded/mod.ts'

const data = await api.invoicing.v1.contacts[CONTACT_ID].delete<ContactResponse>()
```

- [API Documentation](https://developers.holded.com/reference/api-key)
- [Website](https://www.holded.com/)