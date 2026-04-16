"use client"

import { Skeleton } from "../ui/skeleton"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table"

interface TreeTableSkeletonProps {
  /** Number of skeleton rows to show */
  rowCount?: number
  /** Number of columns including the primary column */
  columnCount?: number
  /** Show hierarchy with indentation */
  showHierarchy?: boolean
  /** Title for the loading state */
  title?: string
  /** Description for the loading state */
  description?: string
}

/**
 * Loading skeleton for TreeTable
 * Shows a realistic loading state with hierarchy visualization
 */
export function TreeTableSkeleton({
  rowCount = 8,
  columnCount = 5,
  showHierarchy = true,
  title,
  description,
}: TreeTableSkeletonProps) {
  // Generate hierarchy pattern for realistic loading display
  // Simulates: 0, 1, 1, 2, 2, 1, 0, 1 pattern
  const getIndentLevel = (index: number): number => {
    if (!showHierarchy) return 0
    const pattern = [0, 1, 1, 2, 2, 1, 0, 1]
    return pattern[index % pattern.length]
  }

  return (
    <div className="space-y-4">
      {/* Header skeleton */}
      {(title || description) && (
        <div className="space-y-1">
          {title && <Skeleton className="h-7 w-48" />}
          {description && <Skeleton className="h-4 w-72" />}
        </div>
      )}

      {/* Toolbar skeleton */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Skeleton className="h-8 w-8" /> {/* Expand/collapse button */}
          <Skeleton className="h-4 w-24" /> {/* Counter text */}
        </div>
        <Skeleton className="h-8 w-32" /> {/* Action button */}
      </div>

      {/* Table skeleton */}
      <div className="overflow-hidden rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              {Array.from({ length: columnCount }).map((_, i) => (
                <TableHead key={i}>
                  <Skeleton className={`h-4 ${i === 0 ? "w-32" : "w-20"}`} />
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {Array.from({ length: rowCount }).map((_, rowIndex) => {
              const indent = getIndentLevel(rowIndex)
              return (
                <TableRow key={rowIndex}>
                  {Array.from({ length: columnCount }).map((_, colIndex) => (
                    <TableCell key={colIndex}>
                      {colIndex === 0 ? (
                        // Primary column with hierarchy
                        <div
                          className="flex items-center gap-2"
                          style={{ paddingLeft: indent * 24 }}
                        >
                          {/* Expand/collapse chevron */}
                          <Skeleton className="size-4 shrink-0" />
                          {/* Icon */}
                          <Skeleton className="size-4 shrink-0 rounded" />
                          {/* Text - varied widths */}
                          <Skeleton
                            className="h-4"
                            style={{
                              width: `${80 + Math.random() * 60}px`,
                            }}
                          />
                        </div>
                      ) : colIndex === columnCount - 1 ? (
                        // Actions column
                        <Skeleton className="size-8" />
                      ) : (
                        // Regular columns
                        <Skeleton
                          className="h-4"
                          style={{
                            width: `${40 + Math.random() * 40}px`,
                          }}
                        />
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
