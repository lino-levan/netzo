import { defineRoute } from "$fresh/server.ts";
import type { TableProps } from "netzo/components/blocks/table/use-table.ts";
import {
  I18N,
  type Interaction,
  interactionSchema,
} from "@/resources/interactions.ts";
import { Table } from "@/islands/interactions/Table.tsx";
import { FormInteraction } from "@/islands/interactions/Form.tsx";
import { netzo } from "@/netzo.ts";

export const getTableOptions = (
  data: Interaction[],
): TableProps<Interaction, unknown>["options"] => {
  return {
    resource: "interactions",
    search: {
      column: "name",
      placeholder: "Search by name...",
    },
    filters: [
      {
        column: "type",
        title: I18N.type,
        options: [...new Set(data.map((item) => item.type))].sort().map((
          value,
        ) => (value ? { label: value, value } : { label: "*no data", value })),
      },
    ],
    layouts: ["grid"],
    forms: {
      create: interactionSchema,
      update: interactionSchema,
    },
  };
};

export default defineRoute(async (req, ctx) => {
  const data = await netzo.resource("interactions").find<Interaction>();

  const options = getTableOptions(data);

  return (
    <div className="h-full p-4">
      {/* NOTE: cannot pass functions (columns) as props from server to client */}
      <Table
        data={data}
        options={options}
        formCreate={FormInteraction}
      />
    </div>
  );
});
