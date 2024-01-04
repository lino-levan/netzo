import type { ColumnDef } from "netzo/deps/@tanstack/react-table.ts";
import { Checkbox } from "netzo/components/ui/checkbox.tsx";
import { Contact } from "@/components/data/contacts.ts";
import { CopyId } from "netzo/components/blocks/shared/copy-id.tsx";
import { ALIASES } from "@/components/data/contacts.ts";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "netzo/components/ui/avatar.tsx";
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

export const columns: ColumnDef<Contact>[] = [
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
        accessorKey: "avatar",
        header: renderHeader(ALIASES.avatar),
        cell: ({ row }) => {
          const { name, avatar } = row.original;
          const [first, last] = name.split(" ");
          const initials = `${first[0]}${last[0]}`?.toUpperCase();
          return (
            <Avatar className="h-9 w-9">
              <AvatarImage src={avatar} />
              <AvatarFallback>{initials}</AvatarFallback>
            </Avatar>
          );
        },
      },
      {
        accessorKey: "name",
        header: renderHeader(ALIASES.name),
        cell: ({ row }) => {
          const { id, name } = row.original;
          return (
            <div className="flex">
              <a
                href={`/contacts/${id}`}
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
    header: "Contact",
    columns: [
      {
        accessorKey: "email",
        header: renderHeader(ALIASES.email),
        cell: renderCell(),
      },
      {
        accessorKey: "phone",
        header: renderHeader(ALIASES.phone),
        cell: renderCell(),
      },
    ],
  },
  {
    header: "Notificaciones",
    columns: [
      {
        accessorKey: "notifications.new",
        header: renderHeader(ALIASES.notifications.new),
        cell: renderCellCheckbox(),
      },
      {
        accessorKey: "notifications.promotions",
        header: renderHeader(ALIASES.notifications.promotions),
        cell: renderCellCheckbox(),
      },
      {
        accessorKey: "notifications.marketing",
        header: renderHeader(ALIASES.notifications.marketing),
        cell: renderCellCheckbox(),
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