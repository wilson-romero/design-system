"use client"

import * as React from "react"
import { useMemo, useState, useCallback } from "react"
import {
  type ColumnDef,
  type ExpandedState,
  type Row,
  flexRender,
  getCoreRowModel,
  getExpandedRowModel,
  useReactTable,
} from "@tanstack/react-table"

import { cn } from "../../lib/utils"
import { flattenTree, getExpandableIds, getChildCount } from "../../lib/tree-utils"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table"
import { Badge } from "../ui/badge"
import { TreeTableToolbar, TreeTableExpandButton } from "./tree-table-toolbar"
import { TreeTableSkeleton } from "./tree-table-skeleton"
import type { TreeNode, TreeTableProps, TreeLevelConfig } from "./tree-table.types"

// Internal interface for flattened tree rows
interface FlattenedRow<T> {
  original: T
  depth: number
  parentId: string | null
}

/**
 * Generic TreeTable component for hierarchical data display
 *
 * @template T - The type of data items, must extend TreeNode<T>
 *
 * @example
 * ```tsx
 * interface Department extends TreeNode<Department> {
 *   id: string
 *   name: string
 *   code: string
 *   children?: Department[]
 * }
 *
 * <TreeTable
 *   data={departments}
 *   columns={columns}
 *   primaryField="name"
 *   primaryColumnHeader="Department"
 *   levelConfig={[
 *     { icon: Building2, iconClassName: "text-blue-500" },
 *     { icon: Briefcase, iconClassName: "text-emerald-500" },
 *   ]}
 * />
 * ```
 */
export function TreeTable<T extends TreeNode<T>>({
  data,
  columns,
  primaryField,
  primaryColumnHeader = "Name",
  levelConfig,
  defaultExpanded,
  showExpandAllButton = true,
  showChildCount = true,
  onExpandedChange,
  onRowClick,
  isLoading = false,
  emptyMessage = "No data available.",
  title,
  description,
  toolbarActions,
  indentSize = 24,
  enableKeyboardNavigation = true,
}: TreeTableProps<T>) {
  // Calculate initial expanded state from defaultExpanded prop
  const initialExpanded = useMemo(() => {
    if (!defaultExpanded || defaultExpanded.length === 0) {
      return {} as ExpandedState
    }
    const state: Record<string, boolean> = {}
    defaultExpanded.forEach((id) => {
      state[id] = true
    })
    return state
  }, [defaultExpanded])

  const [expanded, setExpanded] = useState<ExpandedState>(initialExpanded)

  // Flatten tree data with depth information for TanStack Table
  const { flattenedData, depthMap, parentMap } = useMemo(() => {
    const depthMap = new Map<string, number>()
    const parentMap = new Map<string, string | null>()
    const result: T[] = []

    function traverse(nodes: T[], depth: number, parentId: string | null) {
      for (const node of nodes) {
        result.push(node)
        depthMap.set(node.id, depth)
        parentMap.set(node.id, parentId)
        if (node.children && node.children.length > 0) {
          traverse(node.children, depth + 1, node.id)
        }
      }
    }

    traverse(data, 0, null)
    return { flattenedData: result, depthMap, parentMap }
  }, [data])

  // Get all expandable node IDs
  const expandableIds = useMemo(() => getExpandableIds(data), [data])

  // Count currently expanded nodes
  const expandedCount = useMemo(() => {
    if (typeof expanded === "boolean") {
      return expanded ? expandableIds.length : 0
    }
    return Object.values(expanded).filter(Boolean).length
  }, [expanded, expandableIds])

  // Handle expand state changes
  const handleExpandedChange = useCallback(
    (updater: ExpandedState | ((old: ExpandedState) => ExpandedState)) => {
      setExpanded((prev) => {
        const next = typeof updater === "function" ? updater(prev) : updater
        onExpandedChange?.(next)
        return next
      })
    },
    [onExpandedChange]
  )

  // Expand all nodes
  const expandAll = useCallback(() => {
    const allExpanded: Record<string, boolean> = {}
    expandableIds.forEach((id) => {
      allExpanded[id] = true
    })
    handleExpandedChange(allExpanded)
  }, [expandableIds, handleExpandedChange])

  // Collapse all nodes
  const collapseAll = useCallback(() => {
    handleExpandedChange({})
  }, [handleExpandedChange])

  // Create the primary column with expand/collapse functionality
  const primaryColumn: ColumnDef<T, unknown> = useMemo(
    () => ({
      id: "__primary__",
      accessorKey: primaryField,
      header: primaryColumnHeader,
      cell: ({ row }) => {
        const depth = depthMap.get(row.original.id) ?? 0
        const hasChildren = (row.original.children?.length ?? 0) > 0
        const childCount = getChildCount(row.original)
        const isExpanded = row.getIsExpanded()

        // Get level config for this depth
        const config = levelConfig?.[Math.min(depth, (levelConfig?.length ?? 1) - 1)]
        const Icon = config?.icon

        return (
          <div
            className="flex items-center gap-2"
            style={{ paddingLeft: depth * indentSize }}
          >
            <TreeTableExpandButton
              isExpanded={isExpanded}
              hasChildren={hasChildren}
              onClick={() => row.toggleExpanded()}
            />

            {Icon && (
              <Icon
                className={cn("size-4 shrink-0", config?.iconClassName)}
                aria-hidden="true"
              />
            )}

            <span className={cn("truncate", config?.textClassName)}>
              {String(row.original[primaryField] ?? "")}
            </span>

            {showChildCount && hasChildren && (
              <Badge
                variant="secondary"
                className="ml-1 h-5 px-1.5 text-xs font-normal"
              >
                {childCount}
              </Badge>
            )}
          </div>
        )
      },
    }),
    [primaryField, primaryColumnHeader, depthMap, levelConfig, indentSize, showChildCount]
  )

  // Combine primary column with provided columns
  const allColumns = useMemo(
    () => [primaryColumn, ...columns],
    [primaryColumn, columns]
  )

  // Determine if a row should be visible based on expanded state
  const getRowCanExpand = useCallback(
    (row: Row<T>) => {
      return (row.original.children?.length ?? 0) > 0
    },
    []
  )

  // Check if a row should be visible (all ancestors expanded)
  const isRowVisible = useCallback(
    (rowId: string): boolean => {
      const parentId = parentMap.get(rowId)
      // Root nodes (parentId is null) or unknown nodes (parentId is undefined) are visible
      if (parentId === null || parentId === undefined) return true

      // Check if parent is expanded
      const parentExpanded =
        typeof expanded === "boolean"
          ? expanded
          : (expanded as Record<string, boolean>)[parentId] ?? false

      if (!parentExpanded) return false

      // Recursively check parent's visibility
      return isRowVisible(parentId)
    },
    [expanded, parentMap]
  )

  // Filter visible rows
  const visibleData = useMemo(
    () => flattenedData.filter((row) => isRowVisible(row.id)),
    [flattenedData, isRowVisible]
  )

  // TanStack Table instance
  // Note: We don't use getSubRows because we manually flatten the tree
  // and control visibility via isRowVisible. Using getSubRows would cause
  // duplicate rows since children are already in visibleData.
  const table = useReactTable({
    data: visibleData,
    columns: allColumns,
    state: {
      expanded,
    },
    onExpandedChange: handleExpandedChange,
    getCoreRowModel: getCoreRowModel(),
    getExpandedRowModel: getExpandedRowModel(),
    getRowCanExpand,
    getRowId: (row) => row.id,
  })

  // Handle keyboard navigation
  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent, row: Row<T>) => {
      if (!enableKeyboardNavigation) return

      switch (event.key) {
        case "ArrowRight":
          if (row.getCanExpand() && !row.getIsExpanded()) {
            event.preventDefault()
            row.toggleExpanded()
          }
          break
        case "ArrowLeft":
          if (row.getIsExpanded()) {
            event.preventDefault()
            row.toggleExpanded()
          }
          break
        case "Enter":
        case " ":
          if (onRowClick) {
            event.preventDefault()
            onRowClick(row.original)
          }
          break
      }
    },
    [enableKeyboardNavigation, onRowClick]
  )

  // Show loading skeleton
  if (isLoading) {
    return (
      <TreeTableSkeleton
        rowCount={8}
        columnCount={allColumns.length}
        showHierarchy
        title={title}
        description={description}
      />
    )
  }

  const rows = table.getRowModel().rows
  const headerGroups = table.getHeaderGroups()

  return (
    <div className="space-y-4">
      <TreeTableToolbar
        title={title}
        description={description}
        expandedCount={expandedCount}
        totalExpandable={expandableIds.length}
        showExpandAllButton={showExpandAllButton}
        onExpandAll={expandAll}
        onCollapseAll={collapseAll}
        actions={toolbarActions}
      />

      <div className="overflow-hidden rounded-md border">
        <Table>
          <TableHeader>
            {headerGroups.map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead
                    key={header.id}
                    style={{
                      width:
                        header.getSize() !== 150 ? header.getSize() : undefined,
                    }}
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
              rows.map((row) => {
                const depth = depthMap.get(row.original.id) ?? 0
                const config =
                  levelConfig?.[Math.min(depth, (levelConfig?.length ?? 1) - 1)]

                return (
                  <TableRow
                    key={row.id}
                    data-state={row.getIsSelected() && "selected"}
                    className={cn(
                      onRowClick && "cursor-pointer",
                      config?.rowClassName
                    )}
                    onClick={() => onRowClick?.(row.original)}
                    onKeyDown={(e) => handleKeyDown(e, row)}
                    tabIndex={enableKeyboardNavigation ? 0 : undefined}
                    role={onRowClick ? "button" : undefined}
                    aria-expanded={
                      row.getCanExpand() ? row.getIsExpanded() : undefined
                    }
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell
                        key={cell.id}
                        style={{
                          width:
                            cell.column.getSize() !== 150
                              ? cell.column.getSize()
                              : undefined,
                        }}
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                )
              })
            ) : (
              <TableRow>
                <TableCell
                  colSpan={allColumns.length}
                  className="h-24 text-center text-muted-foreground"
                >
                  {emptyMessage}
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
