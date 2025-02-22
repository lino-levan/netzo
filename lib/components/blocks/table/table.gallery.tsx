import { flexRender } from "../../../deps/@tanstack/react-table.ts";
import { Card, CardContent, CardHeader } from "../../card.tsx";
import type { Table, TableProps } from "./use-table.ts";

export type GalleryProps<
  TData = unknown,
  TValue = unknown,
> = TableProps<TData, TValue> & { table: Table<TData> };

export function Gallery<TData, TValue>(
  { options, table }: GalleryProps<TData, TValue>,
) {
  const Header = ({ id, row }: { id: string; row: Table<TData>["row"] }) => {
    const cell = row?.getVisibleCells().find((cell) => cell.column.id === id);
    if (!cell) return null;
    // return simple header instead of header component via flexRender
    const header = cell.column?.id ?? cell.column?.accessorKey;
    return header ? `${header}:` : null;
  };
  const Cell = ({ id, row }: { id: string; row: Table<TData>["row"] }) => {
    const cell = row?.getVisibleCells().find((cell) => cell.column.id === id);
    if (!cell) return null;
    return flexRender(
      cell.column.columnDef.cell,
      cell.getContext(),
    );
  };
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {table.getRowModel().rows.map((row) => (
        <Card key={row.id}>
          <CardHeader className="flex flex-row items-center justify-between">
            <div className="flex-1 truncate">
              <Cell id="name" row={row} />
            </div>
            <Cell id="actions" row={row} />
          </CardHeader>
          <CardContent>
            {row.getVisibleCells().filter((cell) =>
              !["actions", "name"].includes(cell.column.id)
            ).map((cell) => (
              <div key={cell.column.id}>
                <div className="grid grid-cols-2 gap-1 text-sm">
                  <div className="text-muted-secondary truncate">
                    <Header id={cell.column.id} row={row} />
                  </div>
                  <div className="text-right truncate">
                    <Cell id={cell.column.id} row={row} />
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
