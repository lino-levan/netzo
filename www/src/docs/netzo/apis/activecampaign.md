<img src="https://raw.githubusercontent.com/netzo/netzo/main/assets/apis/activecampaign.svg" alt="netzo/apis/activecampaign" class="mb-5 w-75px">

# ActiveCampaign

ActiveCampaign is a marketing automation platform that helps you create personalized experiences for your customers across every channel.

- **labels:** `sales`, `marketing`, `communication/email`, `customer-service`
- **authentication:** `apiKey`

## Usage

```ts
import { activecampaign } from 'https://deno.land/x/netzo/apis/activecampaign/mod.ts'
const { api } = activecampaign({
  accountName: Deno.env.get('ACTIVECAMPAIGN_ACCOUNT_NAME'),
  apiKey: Deno.env.get('ACTIVECAMPAIGN_API_KEY'),
})
```

## Configuration

The `activecampaign` factory function expects an object with the following, and returns an object with an HTTP client `api`.

| Param         | Type   | Default                                       | Description                           |
|---------------|--------|-----------------------------------------------|---------------------------------------|
| `apiKey`      | string | `Deno.env.get('ACTIVECAMPAIGN_API_KEY')`      | the api key to use for authentication |
| `accountName` | string | `Deno.env.get('ACTIVECAMPAIGN_ACCOUNT_NAME')` | the name of the account               |


::: tip Refer to the [API documentation](https://developers.activecampaign.com/reference/overview) to get the required information.
:::

## Examples

The following examples assume you have [created an api client instance](#usage). Refer to the [type definitions](https://deno.land/x/netzo/apis/activecampaign/types.ts) for all exported types to pass to the `api` client for typed responses.

### Find contacts

Find all contacts that match the query.

```ts
import type { Contacts, QueryContacts } from 'netzo/apis/activecampaign/mod.ts'

const query: QueryContacts = {}
const result = await api.contacts.get<Contacts>(query)
const data = result.contacts
```

### Get contact

Get a contact by id.

```ts
import type { Contact } from 'netzo/apis/activecampaign/mod.ts'

const data = await api.contacts[CONTACT_ID].get<Contact>()
```

### Add contact

Add a new contact.

```ts
import type { AddOrUpdateContactResponse, QueryAddContact } from 'netzo/apis/activecampaign/mod.ts'

const payload: QueryAddContact = {
  contact: {
    email: 'example@email.com'
  }
}
const data = await api.contacts.post<AddOrUpdateContactResponse>(payload)
```

### Update contact

Update a contact by id.

```ts
import type { AddOrUpdateContactResponse, QueryUpdateContact } from 'netzo/apis/activecampaign/mod.ts'

const payload: QueryUpdateContact = {
  contact: {
    email: 'updated-email@email.com'
  }
}
const data = await api.contacts[CONTACT_ID].put<AddOrUpdateContactResponse>(payload)
```

### Delete contact

Delete a contact by id.

```ts
const data = await api.contacts[CONTACT_ID].delete<{}>()
```

### Find deals

Find all deals with optional filtering.

```ts
import type { Deals, FilterDeals } from 'netzo/apis/activecampaign/mod.ts'

const query: FilterDeals = {}
const result = await api.deals.get<Deals>(query)
const data = result.deals
```

### Find accounts

Find all accounts, or specify a name in the search field.

```ts
import type { Accounts, QueryAccounts } from 'netzo/apis/activecampaign/mod.ts'

const query: QueryAccounts = {}
const result = await api.accounts.get<Accounts>(query)
const data = result.accounts
```

### Find users

Find all users of the account.

```ts
import type { Users } from 'netzo/apis/activecampaign/mod.ts'

const result = await api.users.get<Users>()
const data = result.users
```

### Add user

Add a new user to the account.

```ts
import type { AddUserResponse, QueryAddUser } from 'netzo/apis/activecampaign/mod.ts'

const payload: QueryAddUser = {
  user: {
    username: 'jsmith'
  }
}
const result = await api.users.post<AddUserResponse>(payload)
const data = result.user
```

## References

- [API documentation](https://developers.activecampaign.com/reference/overview)
- [Website](https://www.activecampaign.com)