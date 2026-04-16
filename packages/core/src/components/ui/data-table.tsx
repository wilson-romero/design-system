"use client"

import { useState } from "react"
import {
  type ColumnDef,
  type RowSelectionState,
  type VisibilityState,
  type Table as TanstackTable,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  useReactTable,
} from "@tanstack/react-table"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./table"

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
  initialColumnVisibility?: VisibilityState
  onColumnVisibilityChange?: (state: VisibilityState) => void
  onRowSelectionChange?: (state: RowSelectionState) => void
  toolbar?: (table: TanstackTable<TData>) => React.ReactNode
  bulkActions?: (table: TanstackTable<TData>) => React.ReactNode
}

export function DataTable<TData, TValue>({
  columns,
  data,
  initialColumnVisibility,
  onColumnVisibilityChange,
  onRowSelectionChange,
  toolbar,
  bulkActions,
}: DataTableProps<TData, TValue>) {
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>(
    initialColumnVisibility ?? {}
  )
  const [rowSelection, setRowSelection] = useState<RowSelectionState>({})

  // Ensure data is always an array
  const safeData = data ?? []

  const table = useReactTable({
    data: safeData,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    enableRowSelection: true,
    state: {
      columnVisibility,
      rowSelection,
    },
    onColumnVisibilityChange: (updater) => {
      const newState = typeof updater === "function" ? updater(columnVisibility) : updater
      setColumnVisibility(newState)
      onColumnVisibilityChange?.(newState)
    },
    onRowSelectionChange: (updater) => {
      const newState = typeof updater === "function" ? updater(rowSelection) : updater
      setRowSelection(newState)
      onRowSelectionChange?.(newState)
    },
  })

  const rows = table.getRowModel().rows
  const headerGroups = table.getHeaderGroups()

  return (
    <>
      {bulkActions?.(table)}
      <div className="space-y-4">
        {toolbar?.(table)}
        <div className="overflow-hidden rounded-md border">
        <Table>
          <TableHeader>
            {headerGroups.map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead
                    key={header.id}
                    style={{ width: header.getSize() !== 150 ? header.getSize() : undefined }}
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {rows.length ? (
              rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell
                      key={cell.id}
                      style={{ width: cell.column.getSize() !== 150 ? cell.column.getSize() : undefined }}
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
        </div>
      </div>
    </>
  )
}
