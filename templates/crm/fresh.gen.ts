// DO NOT EDIT. This file is generated by Fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $_ui_layout from "./routes/(ui)/_layout.tsx";
import * as $_ui_clients_id_ from "./routes/(ui)/clients/[id].tsx";
import * as $_ui_clients_index from "./routes/(ui)/clients/index.tsx";
import * as $_ui_contacts_id_ from "./routes/(ui)/contacts/[id].tsx";
import * as $_ui_contacts_index from "./routes/(ui)/contacts/index.tsx";
import * as $_ui_invoices_id_ from "./routes/(ui)/invoices/[id].tsx";
import * as $_ui_invoices_index from "./routes/(ui)/invoices/index.tsx";
import * as $_middleware from "./routes/_middleware.ts";
import * as $api_clients_id_ from "./routes/api/clients/[id].tsx";
import * as $api_clients_index from "./routes/api/clients/index.tsx";
import * as $api_contacts_id_ from "./routes/api/contacts/[id].tsx";
import * as $api_contacts_index from "./routes/api/contacts/index.tsx";
import * as $api_invoices_id_ from "./routes/api/invoices/[id].tsx";
import * as $api_invoices_index from "./routes/api/invoices/index.tsx";
import * as $Clients from "./islands/Clients.tsx";
import * as $Contacts from "./islands/Contacts.tsx";
import * as $Invoices from "./islands/Invoices.tsx";
import { type Manifest } from "$fresh/server.ts";

const manifest = {
  routes: {
    "./routes/(ui)/_layout.tsx": $_ui_layout,
    "./routes/(ui)/clients/[id].tsx": $_ui_clients_id_,
    "./routes/(ui)/clients/index.tsx": $_ui_clients_index,
    "./routes/(ui)/contacts/[id].tsx": $_ui_contacts_id_,
    "./routes/(ui)/contacts/index.tsx": $_ui_contacts_index,
    "./routes/(ui)/invoices/[id].tsx": $_ui_invoices_id_,
    "./routes/(ui)/invoices/index.tsx": $_ui_invoices_index,
    "./routes/_middleware.ts": $_middleware,
    "./routes/api/clients/[id].tsx": $api_clients_id_,
    "./routes/api/clients/index.tsx": $api_clients_index,
    "./routes/api/contacts/[id].tsx": $api_contacts_id_,
    "./routes/api/contacts/index.tsx": $api_contacts_index,
    "./routes/api/invoices/[id].tsx": $api_invoices_id_,
    "./routes/api/invoices/index.tsx": $api_invoices_index,
  },
  islands: {
    "./islands/Clients.tsx": $Clients,
    "./islands/Contacts.tsx": $Contacts,
    "./islands/Invoices.tsx": $Invoices,
  },
  baseUrl: import.meta.url,
} satisfies Manifest;

export default manifest;