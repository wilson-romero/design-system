"use client"

import { useRef } from "react"
import { X } from "lucide-react"
import { type Table } from "@tanstack/react-table"
import { useRouter, useSearchParams } from "next/navigation"
import { useDebouncedCallback } from "use-debounce"
import { Button } from "./button"
import { Input } from "./input"
import {
  DataTableToggleFilter,
  DataTableFacetedFilter,
  DataTableViewOptions,
  type FilterConfig,
} from "../data-table"

interface DataTableToolbarProps<TData> {
  table: Table<TData>
  searchPlaceholder?: string
  filters?: FilterConfig[]
  /** Optional callback for reset - if provided, will be called instead of default reset behavior */
  onReset?: () => void
}

export function DataTableToolbar<TData>({
  table,
  searchPlaceholder = "Search...",
  filters = [],
  onReset,
}: DataTableToolbarProps<TData>) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const inputRef = useRef<HTMLInputElement>(null)

  const handleSearch = useDebouncedCallback((value: string) => {
    const params = new URLSearchParams(searchParams.toString())
    if (value) {
      params.set("search", value)
    } else {
      params.delete("search")
    }
    params.set("page", "1")
    router.replace(`?${params.toString()}`)
  }, 300)

  // Check if any filters are active (excluding defaults)
  const hasActiveFilters = filters.some((filter) => {
    const paramValue = searchParams.get(filter.paramKey)
    if (filter.type === "toggle") {
      // Toggle is active if param explicitly set to non-default
      return paramValue !== null
    }
    // Faceted is active if any values selected
    return paramValue !== null && paramValue !== ""
  })

  const hasSearchValue = searchParams.get("search")
  const isFiltered = hasActiveFilters || hasSearchValue

  const handleReset = () => {
    // Clear the input field
    if (inputRef.current) {
      inputRef.current.value = ""
    }

    // Use custom reset if provided (clears localStorage too)
    if (onReset) {
      onReset()
      return
    }

    // Default behavior: just reset URL
    const params = new URLSearchParams()
    params.set("page", "1")
    router.replace(`?${params.toString()}`)
  }

  const handleClearSearch = () => {
    if (inputRef.current) {
      inputRef.current.value = ""
    }
    handleSearch("")
  }

  return (
    <div className="space-y-3 sm:space-y-0 sm:flex sm:items-center sm:justify-between">
      {/* Search input - Full width on mobile, first element */}
      <div className="relative w-full sm:w-auto sm:flex-1 sm:max-w-sm">
        <Input
          ref={inputRef}
          placeholder={searchPlaceholder}
          defaultValue={searchParams.get("search") ?? ""}
          onChange={(e) => handleSearch(e.target.value)}
          className="h-8 w-full pr-8"
        />
        {hasSearchValue && (
          <button
            type="button"
            onClick={handleClearSearch}
            className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
            aria-label="Clear search"
          >
            <X className="size-4" />
          </button>
        )}
      </div>

      {/* Filters, Reset and View - Second row on mobile */}
      <div className="flex items-center gap-2">
        {filters.map((filter) => {
          if (filter.type === "toggle") {
            return (
              <DataTableToggleFilter key={filter.paramKey} config={filter} />
            )
          }
          if (filter.type === "faceted") {
            return (
              <DataTableFacetedFilter key={filter.paramKey} config={filter} />
            )
          }
          return null
        })}
        {isFiltered && (
          <Button
            variant="ghost"
            onClick={handleReset}
            className="h-8 px-2 lg:px-3"
          >
            Reset
            <X className="ml-2 size-4" />
          </Button>
        )}
        <DataTableViewOptions table={table} />
      </div>
    </div>
  )
}
