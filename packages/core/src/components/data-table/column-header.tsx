"use client"

import { ArrowDown, ArrowUp, ChevronsUpDown, EyeOff, Plus } from "lucide-react"
import { type Column } from "@tanstack/react-table"
import { cn } from "../../lib/utils"
import { Button } from "../ui/button"
import { Badge } from "../ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
} from "../ui/dropdown-menu"
import { useSortContext } from "./sort-context"

interface DataTableColumnHeaderProps<TData, TValue>
  extends React.HTMLAttributes<HTMLDivElement> {
  column: Column<TData, TValue>
  title: string
  sortKey?: string // URL param key for sorting (defaults to column.id)
}

export function DataTableColumnHeader<TData, TValue>({
  column,
  title,
  sortKey,
  className,
}: DataTableColumnHeaderProps<TData, TValue>) {
  const sortContext = useSortContext()

  // Use sortKey if provided, otherwise column.id
  const key = sortKey || column.id

  // Get sort state from context (if available)
  const sortIndex = sortContext?.getSortIndex(key) ?? 0
  const sortOrder = sortContext?.getSortOrder(key) ?? null

  const isSorted = sortIndex > 0
  const isAsc = sortOrder === "asc"
  const isDesc = sortOrder === "desc"

  if (!column.getCanSort()) {
    return <div className={cn(className)}>{title}</div>
  }

  // If no sort context, render without sorting functionality
  if (!sortContext) {
    return (
      <div className={cn("flex items-center space-x-2", className)}>
        <Button variant="ghost" size="sm" className="-ml-3 h-8" disabled>
          <span>{title}</span>
          <ChevronsUpDown className="ml-2 size-4" />
        </Button>
      </div>
    )
  }

  // Single sort (replaces all sorting)
  const handleSortAsc = () => {
    sortContext.setSortOrder(key, "asc")
  }

  const handleSortDesc = () => {
    sortContext.setSortOrder(key, "desc")
  }

  // Multi-sort (adds to existing with specific order)
  const handleAddSortAsc = () => {
    sortContext.addSort(key, "asc")
  }

  const handleAddSortDesc = () => {
    sortContext.addSort(key, "desc")
  }

  const handleRemoveSort = () => {
    sortContext.removeSort(key)
  }

  const handleClearAll = () => {
    sortContext.clearSort()
  }

  const handleHide = () => {
    column.toggleVisibility(false)
  }

  return (
    <div className={cn("flex items-center space-x-2", className)}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            size="sm"
            className="-ml-3 h-8 data-[state=open]:bg-accent"
          >
            <span>{title}</span>
            {isDesc ? (
              <ArrowDown className="ml-2 size-4" />
            ) : isAsc ? (
              <ArrowUp className="ml-2 size-4" />
            ) : (
              <ChevronsUpDown className="ml-2 size-4" />
            )}
            {isSorted && (
              <Badge
                variant="secondary"
                className="ml-1 size-5 rounded-full p-0 text-xs flex items-center justify-center"
              >
                {sortIndex}
              </Badge>
            )}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start">
          {/* Single sort options (replaces existing) */}
          <DropdownMenuItem onClick={handleSortAsc}>
            <ArrowUp className="mr-2 size-3.5 text-muted-foreground/70" />
            Sort Asc
            {isAsc && <span className="ml-auto text-xs text-muted-foreground">(active)</span>}
          </DropdownMenuItem>
          <DropdownMenuItem onClick={handleSortDesc}>
            <ArrowDown className="mr-2 size-3.5 text-muted-foreground/70" />
            Sort Desc
            {isDesc && <span className="ml-auto text-xs text-muted-foreground">(active)</span>}
          </DropdownMenuItem>

          {/* Multi-sort submenu (adds to existing) */}
          {!isSorted && (
            <>
              <DropdownMenuSeparator />
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>
                  <Plus className="mr-2 size-3.5 text-muted-foreground/70" />
                  Add to sort
                </DropdownMenuSubTrigger>
                <DropdownMenuSubContent>
                  <DropdownMenuItem onClick={handleAddSortDesc}>
                    <ArrowDown className="mr-2 size-3.5 text-muted-foreground/70" />
                    Desc (default)
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={handleAddSortAsc}>
                    <ArrowUp className="mr-2 size-3.5 text-muted-foreground/70" />
                    Asc
                  </DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuSub>
            </>
          )}

          {/* Remove/Clear options when sorted */}
          {isSorted && (
            <>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={handleRemoveSort}>
                <ChevronsUpDown className="mr-2 size-3.5 text-muted-foreground/70" />
                Remove from sort
              </DropdownMenuItem>
              <DropdownMenuItem onClick={handleClearAll}>
                <ChevronsUpDown className="mr-2 size-3.5 text-muted-foreground/70" />
                Clear all sorting
              </DropdownMenuItem>
            </>
          )}

          {/* Hide column option */}
          {column.getCanHide() && (
            <>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={handleHide}>
                <EyeOff className="mr-2 size-3.5 text-muted-foreground/70" />
                Hide column
              </DropdownMenuItem>
            </>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
