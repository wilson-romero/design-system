"use client"

import { createContext, useContext, type ReactNode } from "react"

interface SortContextValue {
  /** Get sort index (1-based) for a field, 0 if not sorted */
  getSortIndex: (field: string) => number
  /** Get sort order for a field */
  getSortOrder: (field: string) => "asc" | "desc" | null
  /** Toggle sort for a field (Shift key determines if adding to existing) */
  toggleSort: (field: string, addToExisting: boolean) => void
  /** Set specific sort order for a field (replaces all sorting) */
  setSortOrder: (field: string, order: "asc" | "desc") => void
  /** Add sort column with specific order (multi-sort) */
  addSort: (field: string, order: "asc" | "desc") => void
  /** Remove sort from a field */
  removeSort: (field: string) => void
  /** Clear all sorting */
  clearSort: () => void
}

const SortContext = createContext<SortContextValue | null>(null)

interface SortProviderProps {
  children: ReactNode
  getSortIndex: (field: string) => number
  getSortOrder: (field: string) => "asc" | "desc" | null
  toggleSort: (field: string, addToExisting: boolean) => void
  setSortOrder: (field: string, order: "asc" | "desc") => void
  addSort: (field: string, order: "asc" | "desc") => void
  removeSort: (field: string) => void
  clearSort: () => void
}

export function SortProvider({
  children,
  getSortIndex,
  getSortOrder,
  toggleSort,
  setSortOrder,
  addSort,
  removeSort,
  clearSort,
}: SortProviderProps) {
  return (
    <SortContext.Provider
      value={{
        getSortIndex,
        getSortOrder,
        toggleSort,
        setSortOrder,
        addSort,
        removeSort,
        clearSort,
      }}
    >
      {children}
    </SortContext.Provider>
  )
}

export function useSortContext(): SortContextValue | null {
  return useContext(SortContext)
}
