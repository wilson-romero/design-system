"use client"

import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react"
import { useRouter, useSearchParams } from "next/navigation"
import { Button } from "./button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./select"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "./tooltip"

interface DataTablePaginationProps {
  page: number
  totalPages: number
  totalRecords: number
  pageSize: number
  onPageSizeChange: (size: number) => void
  pageSizeOptions?: number[]
}

export function DataTablePagination({
  page,
  totalPages,
  totalRecords,
  pageSize,
  onPageSizeChange,
  pageSizeOptions = [10, 20, 30, 50, 100],
}: DataTablePaginationProps) {
  const router = useRouter()
  const searchParams = useSearchParams()

  const navigate = (newPage: number) => {
    const params = new URLSearchParams(searchParams.toString())
    params.set("page", String(newPage))
    router.replace(`?${params.toString()}`)
  }

  // Generate page numbers to display
  const getPageNumbers = (): (number | "...")[] => {
    const pages: (number | "...")[] = []

    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i)
      }
    } else {
      pages.push(1)

      if (page > 3) {
        pages.push("...")
      }

      const start = Math.max(2, page - 1)
      const end = Math.min(totalPages - 1, page + 1)

      for (let i = start; i <= end; i++) {
        pages.push(i)
      }

      if (page < totalPages - 2) {
        pages.push("...")
      }

      pages.push(totalPages)
    }

    return pages
  }

  const canGoPrevious = page > 1
  const canGoNext = page < totalPages

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-4">
      {/* Left: Total records indicator */}
      <div className="text-sm font-normal text-muted-foreground">
        {totalRecords > 0 ? (
          <>
            {"Showing "}
            <span className="font-medium text-foreground">{page}</span>
            {" out of "}
            <span className="font-medium text-foreground">{totalRecords}</span>
            {" entries"}
          </>
        ) : (
          "No entries"
        )}
      </div>

      {/* Right: Page size + Navigation */}
      <div className="flex items-center gap-4">
        {/* Page indicator (desktop only) - only show when there are pages */}
        {totalPages > 0 && (
          <div className="hidden lg:block text-sm font-medium">
            Page {page} of {totalPages}
          </div>
        )}

        {/* Navigation buttons */}
        <div className="flex items-center gap-1">
          {/* First page */}
          <Button
            variant="outline"
            size="icon"
            className="hidden size-8 lg:flex"
            onClick={() => navigate(1)}
            disabled={!canGoPrevious}
          >
            <span className="sr-only">Go to first page</span>
            <ChevronsLeft className="size-4" />
          </Button>

          {/* Previous page */}
          <Button
            variant="outline"
            size="icon"
            className="size-8"
            onClick={() => navigate(page - 1)}
            disabled={!canGoPrevious}
          >
            <span className="sr-only">Go to previous page</span>
            <ChevronLeft className="size-4" />
          </Button>

          {/* Page number buttons (hidden on mobile) */}
          <div className="hidden items-center gap-1 sm:flex">
            {getPageNumbers().map((pageNum, idx) =>
              pageNum === "..." ? (
                <span
                  key={`ellipsis-${idx}`}
                  className="px-2 text-sm font-normal text-muted-foreground"
                >
                  ...
                </span>
              ) : (
                <Button
                  key={`page-${pageNum}`}
                  variant={pageNum === page ? "default" : "outline"}
                  size="icon"
                  className="size-8"
                  onClick={() => navigate(pageNum)}
                >
                  {pageNum}
                </Button>
              )
            )}
          </div>

          {/* Next page */}
          <Button
            variant="outline"
            size="icon"
            className="size-8"
            onClick={() => navigate(page + 1)}
            disabled={!canGoNext}
          >
            <span className="sr-only">Go to next page</span>
            <ChevronRight className="size-4" />
          </Button>

          {/* Last page */}
          <Button
            variant="outline"
            size="icon"
            className="hidden size-8 lg:flex"
            onClick={() => navigate(totalPages)}
            disabled={!canGoNext}
          >
            <span className="sr-only">Go to last page</span>
            <ChevronsRight className="size-4" />
          </Button>
        </div>

        {/* Page size selector */}
        <div className="flex items-center gap-2">
          <p className="hidden sm:block text-sm font-normal text-muted-foreground">Rows per page</p>
          <Select
            value={String(pageSize)}
            onValueChange={(value) => onPageSizeChange(Number(value))}
          >
            <Tooltip>
              <TooltipTrigger asChild>
                <SelectTrigger className="h-8 w-18" aria-label="Rows per page">
                  <SelectValue placeholder={pageSize} />
                </SelectTrigger>
              </TooltipTrigger>
              <TooltipContent className="sm:hidden">
                <p>Rows per page</p>
              </TooltipContent>
            </Tooltip>
            <SelectContent side="top">
              {pageSizeOptions.map((size) => (
                <SelectItem key={size} value={String(size)}>
                  {size}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  )
}
