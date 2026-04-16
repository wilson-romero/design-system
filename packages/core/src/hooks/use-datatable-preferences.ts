"use client"

import { useCallback, useEffect, useState, useRef } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import type { VisibilityState } from "@tanstack/react-table"

const STORAGE_KEY_PREFIX = "datatable-prefs-"
const MAX_SORT_COLUMNS = 3

/**
 * Sort column specification
 */
export interface SortColumn {
  field: string
  order: "asc" | "desc"
}

/**
 * Filter configuration for DataTable
 */
export interface FilterConfig {
  key: string
  defaultValue: string
}

/**
 * Consolidated preferences for a DataTable
 * Persists: limit, columns, sortColumns, filters
 * Does NOT persist: page, search
 */
export interface DataTablePreferences {
  limit: number
  columns: string[]
  sortColumns: SortColumn[]
  filters: Record<string, string>
}

interface UseDataTablePreferencesOptions {
  tableId: string
  defaults: {
    limit: number
    columns: string[]
    sortColumns?: SortColumn[]
  }
  /** All available column IDs for this table (needed to mark hidden columns as false) */
  allColumns: string[]
  validSortColumns: string[]
  validPageSizes?: number[]
  /** Filter configurations to persist (e.g., active_only) */
  filterConfigs?: FilterConfig[]
}

interface UseDataTablePreferencesReturn {
  // Current values
  preferences: DataTablePreferences
  columnVisibility: VisibilityState

  // Handlers
  setPageSize: (size: number) => void
  setColumnVisibility: (visibility: VisibilityState) => void
  /** Add a sort column (Shift+click behavior) */
  addSortColumn: (field: string, order: "asc" | "desc") => void
  /** Set sorting to a single column (regular click behavior) */
  setSortColumn: (field: string, order: "asc" | "desc") => void
  /** Remove a sort column */
  removeSortColumn: (field: string) => void
  /** Clear all sorting */
  clearSorting: () => void
  /** Toggle sort order for a column, or add if not sorted */
  toggleSortColumn: (field: string, addToExisting: boolean) => void
  setFilter: (key: string, value: string) => void
  /** Reset all preferences to defaults and clear localStorage */
  resetToDefaults: () => void
  /** Reset only filters and sorting, keep columns and page size */
  resetFilters: () => void

  // Helper to check sort state
  getSortIndex: (field: string) => number
  getSortOrder: (field: string) => "asc" | "desc" | null

  // Loading state
  isLoading: boolean
}

/**
 * Parse sort columns from URL params
 * Format: sort=field1,field2&order=asc,desc
 */
function parseSortColumnsFromUrl(
  sortParam: string | null,
  orderParam: string | null,
  validColumns: string[]
): SortColumn[] {
  if (!sortParam) return []

  const fields = sortParam.split(",").filter(Boolean)
  const orders = (orderParam || "desc").split(",").filter(Boolean)

  const result: SortColumn[] = []
  for (let i = 0; i < fields.length && i < MAX_SORT_COLUMNS; i++) {
    const field = fields[i]
    if (validColumns.includes(field)) {
      const order = orders[i] === "asc" || orders[i] === "desc" ? orders[i] : "desc"
      result.push({ field, order: order as "asc" | "desc" })
    }
  }

  return result
}

/**
 * Serialize sort columns to URL params
 */
function serializeSortColumns(sortColumns: SortColumn[]): { sort: string; order: string } | null {
  if (sortColumns.length === 0) return null

  return {
    sort: sortColumns.map(s => s.field).join(","),
    order: sortColumns.map(s => s.order).join(","),
  }
}

/**
 * Consolidated hook for DataTable preferences with localStorage persistence
 *
 * Solves the race condition problem by handling ALL preferences in a single hook
 * with a single router.replace() call.
 *
 * Priority:
 * 1. URL params (if any preference param exists) - highest priority
 * 2. localStorage (if URL has no preference params)
 * 3. Defaults
 */
export function useDataTablePreferences({
  tableId,
  defaults,
  allColumns,
  validSortColumns,
  validPageSizes = [10, 20, 30, 50, 100],
  filterConfigs = [],
}: UseDataTablePreferencesOptions): UseDataTablePreferencesReturn {
  const router = useRouter()
  const searchParams = useSearchParams()
  const storageKey = `${STORAGE_KEY_PREFIX}${tableId}`

  // Parse URL params
  const urlLimit = searchParams.get("limit")
  const urlColumns = searchParams.get("columns")
  const urlSort = searchParams.get("sort")
  const urlOrder = searchParams.get("order")

  // Parse filter params from URL
  const getUrlFilters = (): Record<string, string> => {
    const filters: Record<string, string> = {}
    for (const config of filterConfigs) {
      const value = searchParams.get(config.key)
      filters[config.key] = value ?? config.defaultValue
    }
    return filters
  }

  // Check if URL has ANY preference params (including filters)
  const hasAnyFilterInUrl = filterConfigs.some(c => searchParams.get(c.key) !== null)
  const hasUrlPrefs = urlLimit !== null || urlColumns !== null || urlSort !== null || hasAnyFilterInUrl

  // Parse initial values from URL or defaults
  const getInitialPreferences = (): DataTablePreferences => {
    const limit = urlLimit ? parseInt(urlLimit, 10) : defaults.limit
    const columns = urlColumns ? urlColumns.split(",").filter(Boolean) : defaults.columns
    const sortColumns = parseSortColumnsFromUrl(urlSort, urlOrder, validSortColumns)
    const filters = getUrlFilters()

    return {
      limit: validPageSizes.includes(limit) ? limit : defaults.limit,
      columns,
      sortColumns: sortColumns.length > 0 ? sortColumns : (defaults.sortColumns ?? []),
      filters,
    }
  }

  const [preferences, setPreferences] = useState<DataTablePreferences>(getInitialPreferences)
  // Only show loading when there are no URL preferences (need to load from localStorage)
  // When URL has preferences, data is already available via Suspense
  const [isLoading, setIsLoading] = useState(!hasUrlPrefs)
  const [isHydrated, setIsHydrated] = useState(false)
  // Ref to prevent re-sync when we programmatically update URL (no re-render needed)
  const skipNextUrlSyncRef = useRef(false)

  // Convert columns array to VisibilityState
  // Must include ALL columns with explicit true/false values
  // TanStack Table treats missing columns as visible by default
  const columnVisibility: VisibilityState = allColumns.reduce(
    (acc, col) => ({
      ...acc,
      [col]: preferences.columns.includes(col),
    }),
    {} as VisibilityState
  )

  // Load from localStorage on mount (only if URL has no prefs)
  useEffect(() => {
    setIsHydrated(true)

    if (hasUrlPrefs) {
      // URL has prefs - save them to localStorage
      localStorage.setItem(storageKey, JSON.stringify(preferences))
      setIsLoading(false)
      return
    }

    // Try to load from localStorage
    const stored = localStorage.getItem(storageKey)
    if (stored) {
      try {
        const storedPrefs = JSON.parse(stored) as Partial<DataTablePreferences>

        // Build default filters
        const defaultFilters: Record<string, string> = {}
        for (const config of filterConfigs) {
          defaultFilters[config.key] = config.defaultValue
        }

        // Validate stored sortColumns (handle migration from old format)
        let validatedSortColumns: SortColumn[] = []
        if (Array.isArray(storedPrefs.sortColumns)) {
          validatedSortColumns = storedPrefs.sortColumns.filter(
            (sc): sc is SortColumn =>
              typeof sc === "object" &&
              sc !== null &&
              validSortColumns.includes(sc.field) &&
              (sc.order === "asc" || sc.order === "desc")
          ).slice(0, MAX_SORT_COLUMNS)
        }

        // Validate and merge with defaults
        const validatedPrefs: DataTablePreferences = {
          limit: storedPrefs.limit && validPageSizes.includes(storedPrefs.limit)
            ? storedPrefs.limit
            : defaults.limit,
          columns: Array.isArray(storedPrefs.columns) && storedPrefs.columns.length > 0
            ? storedPrefs.columns
            : defaults.columns,
          sortColumns: validatedSortColumns,
          filters: storedPrefs.filters && typeof storedPrefs.filters === "object"
            ? { ...defaultFilters, ...storedPrefs.filters }
            : defaultFilters,
        }

        setPreferences(validatedPrefs)

        // Update URL with ALL preferences in a single call
        const params = new URLSearchParams(searchParams.toString())
        params.set("limit", String(validatedPrefs.limit))
        params.set("columns", validatedPrefs.columns.join(","))
        params.set("page", "1") // Always reset page

        const sortParams = serializeSortColumns(validatedPrefs.sortColumns)
        if (sortParams) {
          params.set("sort", sortParams.sort)
          params.set("order", sortParams.order)
        }

        // Set filter params
        for (const [key, value] of Object.entries(validatedPrefs.filters)) {
          params.set(key, value)
        }

        router.replace(`?${params.toString()}`, { scroll: false })
      } catch {
        // Invalid JSON, ignore
      }
    }

    setIsLoading(false)
    /**
     * eslint-disable-next-line react-hooks/exhaustive-deps
     *
     * This effect MUST run only once on mount to load initial preferences from localStorage.
     * Adding dependencies would cause infinite loops because this effect updates URL params,
     * which triggers other effects that sync with URL changes.
     *
     * The empty dependency array is intentional and correct for this one-time initialization.
     */
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []) // Only run once on mount

  // Get filter values as dependency array for useEffect
  const urlFilterValues = filterConfigs.map(c => searchParams.get(c.key)).join(",")

  // Sync state when URL changes (after initial load)
  // Skip sync if the change came from our own programmatic update
  useEffect(() => {
    if (!isHydrated) return
    if (skipNextUrlSyncRef.current) {
      skipNextUrlSyncRef.current = false
      return
    }
    if (hasUrlPrefs) {
      const newPrefs = getInitialPreferences()
      setPreferences(newPrefs)
      localStorage.setItem(storageKey, JSON.stringify(newPrefs))
    }
    /**
     * eslint-disable-next-line react-hooks/exhaustive-deps
     *
     * This effect syncs state when URL params change (navigation or browser back/forward).
     * Dependencies are intentionally limited to URL param values to avoid infinite loops.
     * Other values like storageKey, validPageSizes, etc. are stable and don't need tracking.
     */
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [urlLimit, urlColumns, urlSort, urlOrder, urlFilterValues])

  // Update URL helper - preserves other params (search, etc.)
  const updateUrl = useCallback(
    (newPrefs: DataTablePreferences) => {
      // Skip the next URL sync since we're updating programmatically
      skipNextUrlSyncRef.current = true

      const params = new URLSearchParams(searchParams.toString())

      params.set("limit", String(newPrefs.limit))
      params.set("columns", newPrefs.columns.join(","))
      params.set("page", "1") // Reset page on preference change

      const sortParams = serializeSortColumns(newPrefs.sortColumns)
      if (sortParams) {
        params.set("sort", sortParams.sort)
        params.set("order", sortParams.order)
      } else {
        params.delete("sort")
        params.delete("order")
      }

      // Set filter params
      for (const [key, value] of Object.entries(newPrefs.filters)) {
        params.set(key, value)
      }

      router.push(`?${params.toString()}`, { scroll: false })
    },
    [router, searchParams]
  )

  // Handlers
  const setPageSize = useCallback(
    (size: number) => {
      if (!validPageSizes.includes(size)) return

      const newPrefs = { ...preferences, limit: size }
      setPreferences(newPrefs)
      localStorage.setItem(storageKey, JSON.stringify(newPrefs))
      updateUrl(newPrefs)
    },
    [preferences, storageKey, updateUrl, validPageSizes]
  )

  const setColumnVisibility = useCallback(
    (visibility: VisibilityState) => {
      const columns = Object.entries(visibility)
        .filter(([, isVisible]) => isVisible)
        .map(([col]) => col)

      const newPrefs = { ...preferences, columns }
      setPreferences(newPrefs)
      localStorage.setItem(storageKey, JSON.stringify(newPrefs))
      updateUrl(newPrefs)
    },
    [preferences, storageKey, updateUrl]
  )

  // Add a sort column (Shift+click behavior) - appends to existing sorts
  const addSortColumn = useCallback(
    (field: string, order: "asc" | "desc") => {
      if (!validSortColumns.includes(field)) return

      // Check if already sorted
      const existingIndex = preferences.sortColumns.findIndex(s => s.field === field)
      let newSortColumns: SortColumn[]

      if (existingIndex >= 0) {
        // Update existing sort order
        newSortColumns = [...preferences.sortColumns]
        newSortColumns[existingIndex] = { field, order }
      } else if (preferences.sortColumns.length < MAX_SORT_COLUMNS) {
        // Add new sort column
        newSortColumns = [...preferences.sortColumns, { field, order }]
      } else {
        // Already at max, replace last
        newSortColumns = [...preferences.sortColumns.slice(0, -1), { field, order }]
      }

      const newPrefs = { ...preferences, sortColumns: newSortColumns }
      setPreferences(newPrefs)
      localStorage.setItem(storageKey, JSON.stringify(newPrefs))
      updateUrl(newPrefs)
    },
    [preferences, storageKey, updateUrl, validSortColumns]
  )

  // Set sorting to a single column (regular click behavior)
  const setSortColumn = useCallback(
    (field: string, order: "asc" | "desc") => {
      if (!validSortColumns.includes(field)) return

      const newPrefs = { ...preferences, sortColumns: [{ field, order }] }
      setPreferences(newPrefs)
      localStorage.setItem(storageKey, JSON.stringify(newPrefs))
      updateUrl(newPrefs)
    },
    [preferences, storageKey, updateUrl, validSortColumns]
  )

  // Remove a sort column
  const removeSortColumn = useCallback(
    (field: string) => {
      const newSortColumns = preferences.sortColumns.filter(s => s.field !== field)
      const newPrefs = { ...preferences, sortColumns: newSortColumns }
      setPreferences(newPrefs)
      localStorage.setItem(storageKey, JSON.stringify(newPrefs))
      updateUrl(newPrefs)
    },
    [preferences, storageKey, updateUrl]
  )

  // Clear all sorting
  const clearSorting = useCallback(() => {
    const newPrefs = { ...preferences, sortColumns: [] }
    setPreferences(newPrefs)
    localStorage.setItem(storageKey, JSON.stringify(newPrefs))
    updateUrl(newPrefs)
  }, [preferences, storageKey, updateUrl])

  // Toggle sort order for a column, or add if not sorted
  const toggleSortColumn = useCallback(
    (field: string, addToExisting: boolean) => {
      if (!validSortColumns.includes(field)) return

      const existingIndex = preferences.sortColumns.findIndex(s => s.field === field)

      if (existingIndex >= 0) {
        // Column is already sorted - toggle order or remove
        const current = preferences.sortColumns[existingIndex]
        if (current.order === "asc") {
          // asc -> desc
          const newSortColumns = [...preferences.sortColumns]
          newSortColumns[existingIndex] = { field, order: "desc" }
          const newPrefs = { ...preferences, sortColumns: newSortColumns }
          setPreferences(newPrefs)
          localStorage.setItem(storageKey, JSON.stringify(newPrefs))
          updateUrl(newPrefs)
        } else {
          // desc -> remove (if multiple) or asc (if single)
          if (preferences.sortColumns.length > 1 && addToExisting) {
            // Remove this column from multi-sort
            removeSortColumn(field)
          } else {
            // Single sort - cycle back to asc
            const newSortColumns = [{ field, order: "asc" as const }]
            const newPrefs = { ...preferences, sortColumns: newSortColumns }
            setPreferences(newPrefs)
            localStorage.setItem(storageKey, JSON.stringify(newPrefs))
            updateUrl(newPrefs)
          }
        }
      } else {
        // Not sorted yet - add with desc order
        if (addToExisting) {
          addSortColumn(field, "desc")
        } else {
          setSortColumn(field, "desc")
        }
      }
    },
    [preferences, storageKey, updateUrl, validSortColumns, addSortColumn, setSortColumn, removeSortColumn]
  )

  const setFilter = useCallback(
    (key: string, value: string) => {
      const newFilters = { ...preferences.filters, [key]: value }
      const newPrefs = { ...preferences, filters: newFilters }
      setPreferences(newPrefs)
      localStorage.setItem(storageKey, JSON.stringify(newPrefs))
      updateUrl(newPrefs)
    },
    [preferences, storageKey, updateUrl]
  )

  // Reset all preferences to defaults and clear localStorage
  const resetToDefaults = useCallback(() => {
    // Build default filters
    const defaultFilters: Record<string, string> = {}
    for (const config of filterConfigs) {
      defaultFilters[config.key] = config.defaultValue
    }

    const defaultPrefs: DataTablePreferences = {
      limit: defaults.limit,
      columns: defaults.columns,
      sortColumns: defaults.sortColumns ?? [],
      filters: defaultFilters,
    }

    // Clear localStorage
    localStorage.removeItem(storageKey)

    // Update state
    setPreferences(defaultPrefs)

    // Skip next URL sync
    skipNextUrlSyncRef.current = true

    // Reset URL to just page=1 (clean state)
    const params = new URLSearchParams()
    params.set("page", "1")
    router.push(`?${params.toString()}`, { scroll: false })
  }, [defaults, filterConfigs, storageKey, router])

  // Reset only filters and sorting, keep columns and page size
  const resetFilters = useCallback(() => {
    // Build default filters
    const defaultFilters: Record<string, string> = {}
    for (const config of filterConfigs) {
      defaultFilters[config.key] = config.defaultValue
    }

    // Keep current columns and limit, only reset filters and sorting
    const newPrefs: DataTablePreferences = {
      limit: preferences.limit,
      columns: preferences.columns,
      sortColumns: [],  // Clear sorting
      filters: defaultFilters,  // Reset filters to defaults
    }

    // Update localStorage
    localStorage.setItem(storageKey, JSON.stringify(newPrefs))

    // Update state
    setPreferences(newPrefs)

    // Skip next URL sync
    skipNextUrlSyncRef.current = true

    // Update URL - keep columns and limit, clear filters and sorting
    // Do NOT put default filter values in URL (they are handled by component defaults)
    const params = new URLSearchParams()
    params.set("page", "1")
    params.set("limit", String(newPrefs.limit))
    params.set("columns", newPrefs.columns.join(","))
    // Filters are NOT added to URL - default values apply automatically
    router.push(`?${params.toString()}`, { scroll: false })
  }, [preferences.limit, preferences.columns, filterConfigs, storageKey, router])

  // Helper to get sort index (1-based for display, 0 if not sorted)
  const getSortIndex = useCallback(
    (field: string): number => {
      const index = preferences.sortColumns.findIndex(s => s.field === field)
      return index >= 0 ? index + 1 : 0
    },
    [preferences.sortColumns]
  )

  // Helper to get sort order for a field
  const getSortOrder = useCallback(
    (field: string): "asc" | "desc" | null => {
      const sortCol = preferences.sortColumns.find(s => s.field === field)
      return sortCol?.order ?? null
    },
    [preferences.sortColumns]
  )

  return {
    preferences,
    columnVisibility,
    setPageSize,
    setColumnVisibility,
    addSortColumn,
    setSortColumn,
    removeSortColumn,
    clearSorting,
    toggleSortColumn,
    setFilter,
    resetToDefaults,
    resetFilters,
    getSortIndex,
    getSortOrder,
    isLoading,
  }
}
