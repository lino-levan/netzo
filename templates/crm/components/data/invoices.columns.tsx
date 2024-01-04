import type { ColumnDef } from "netzo/deps/@tanstack/react-table.ts";
import { Checkbox } from "netzo/components/ui/checkbox.tsx";
import { Badge } from "netzo/components/ui/badge.tsx";
import { Invoice } from "@/components/data/invoices.ts";
import { CopyId } from "netzo/components/blocks/shared/copy-id.tsx";
import { ALIASES } from "@/components/data/invoices.ts";
import { Button } from "netzo/components/ui/button.tsx";
import {
  renderCell,
  renderCellCheckbox,
  renderHeader,
  toDate,
  toDateTime,
  toEuro,
  toFixed,
  toInteger,
  toMxn,
  toPercent,
} from "@/utils.tsx";

export const columns: ColumnDef<Invoice>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        className="mx-2"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="mr-2"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    header: "General",
    columns: [
      {
        accessorKey: "invoiceNumber",
        header: renderHeader(ALIASES.invoiceNumber),
        cell: ({ row }) => {
          const { id, invoiceNumber } = row.original;
          return (
            <div className="flex">
              <a
                href={`/invoices/${id}`}
                className="whitespace-nowrap text-center font-medium text-[hsl(var(--primary))] hover:underline"
              >
                {name}
              </a>
              <CopyId id={id} />
            </div>
          );
        },
      },
      {
        accessorKey: "status",
        header: renderHeader(ALIASES.status),
        cell: ({ row }) => {
          const { status } = row.original;
          const colors = {
            pending: "red",
            paid: "blue",
            cancelled: "gray",
          };
          return status
            ? (
              <Badge
                variant="outline"
                className={`bg-${colors[status]}-500 bg-opacity-80 text-white`}
              >
                {status}
              </Badge>
            )
            : <></>;
        },
        filterFn: (row, id, value) => value.includes(row.getValue(id)),
      },
      {
        accessorKey: "description",
        header: renderHeader(ALIASES.description),
        cell: renderCell(),
      },
      {
        accessorKey: "dueDate",
        header: renderHeader(ALIASES.dueDate),
        cell: ({ row }) => {
          const { dueDate } = row.original;
          return <div>{dueDate ? toDate(dueDate) : undefined}</div>;
        },
      },
      {
        accessorKey: "accountId",
        header: renderHeader(ALIASES.accountId),
        cell: ({ row }) => {
          const { accountId, account } = row.original;
          return (
            <a
              href={`/accounts/${accountId}`}
              className="whitespace-nowrap text-center font-medium text-[hsl(var(--primary))] hover:underline"
            >
              {account?.name ? account.name : accountId}
            </a>
          );
        },
      },
    ],
  },
  {
    header: "Amount",
    columns: [
      {
        accessorKey: "subtotal",
        header: renderHeader(ALIASES.subtotal),
        cell: renderCell(),
      },
      {
        accessorKey: "tax",
        header: renderHeader(ALIASES.tax),
        cell: renderCell(),
      },
      {
        accessorKey: "total",
        header: renderHeader(ALIASES.total),
        cell: renderCell(),
      },
    ],
  },
  {
    header: "Other",
    columns: [
      {
        accessorKey: "createdAt",
        header: renderHeader(ALIASES.createdAt),
        cell: ({ row }) => {
          const { createdAt } = row.original;
          return <div>{toDateTime(createdAt)}</div>;
        },
      },
      {
        accessorKey: "updatedAt",
        header: renderHeader(ALIASES.updatedAt),
        cell: ({ row }) => {
          const { updatedAt } = row.original;
          return <div>{toDateTime(updatedAt)}</div>;
        },
      },
    ],
  },
];