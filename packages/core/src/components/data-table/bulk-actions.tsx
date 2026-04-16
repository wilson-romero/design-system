"use client"

import { useRef, useEffect, useState } from "react"
import { X, Trash2, Download } from "lucide-react"
import { cn } from "../../lib/utils"
import { Badge } from "../ui/badge"
import { Button } from "../ui/button"
import { Separator } from "../ui/separator"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "../ui/tooltip"

interface DataTableBulkActionsProps {
  selectedCount: number
  onClearSelection: () => void
  entityName: string
  children: React.ReactNode
}

/**
 * A floating toolbar for displaying bulk actions when table rows are selected.
 * Appears at the bottom center of the screen with animation.
 */
export function DataTableBulkActions({
  selectedCount,
  onClearSelection,
  entityName,
  children,
}: DataTableBulkActionsProps): React.ReactNode | null {
  const toolbarRef = useRef<HTMLDivElement>(null)
  const [announcement, setAnnouncement] = useState("")

  // Announce selection changes to screen readers
  useEffect(() => {
    if (selectedCount > 0) {
      const message = `${selectedCount} ${entityName}${selectedCount > 1 ? "s" : ""} selected. Bulk actions toolbar is available.`

      queueMicrotask(() => {
        setAnnouncement(message)
      })

      const timer = setTimeout(() => setAnnouncement(""), 3000)
      return () => clearTimeout(timer)
    }
  }, [selectedCount, entityName])

  const handleClearSelection = () => {
    onClearSelection()
  }

  const handleKeyDown = (event: React.KeyboardEvent) => {
    const buttons = toolbarRef.current?.querySelectorAll("button")
    if (!buttons) return

    const currentIndex = Array.from(buttons).findIndex(
      (button) => button === document.activeElement
    )

    switch (event.key) {
      case "ArrowRight": {
        event.preventDefault()
        const nextIndex = (currentIndex + 1) % buttons.length
        buttons[nextIndex]?.focus()
        break
      }
      case "ArrowLeft": {
        event.preventDefault()
        const prevIndex =
          currentIndex === 0 ? buttons.length - 1 : currentIndex - 1
        buttons[prevIndex]?.focus()
        break
      }
      case "Home":
        event.preventDefault()
        buttons[0]?.focus()
        break
      case "End":
        event.preventDefault()
        buttons[buttons.length - 1]?.focus()
        break
      case "Escape": {
        const target = event.target as HTMLElement
        const activeElement = document.activeElement as HTMLElement

        const isFromDropdownTrigger =
          target?.getAttribute("data-slot") === "dropdown-menu-trigger" ||
          activeElement?.getAttribute("data-slot") === "dropdown-menu-trigger" ||
          target?.closest("[data-slot='dropdown-menu-trigger']") ||
          activeElement?.closest("[data-slot='dropdown-menu-trigger']")

        const isFromDropdownContent =
          activeElement?.closest("[data-slot='dropdown-menu-content']") ||
          target?.closest("[data-slot='dropdown-menu-content']")

        if (isFromDropdownTrigger || isFromDropdownContent) {
          return
        }

        event.preventDefault()
        handleClearSelection()
        break
      }
    }
  }

  if (selectedCount === 0) {
    return null
  }

  return (
    <>
      {/* Live region for screen reader announcements */}
      <div
        aria-live="polite"
        aria-atomic="true"
        className="sr-only"
        role="status"
      >
        {announcement}
      </div>

      <div
        ref={toolbarRef}
        role="toolbar"
        aria-label={`Bulk actions for ${selectedCount} selected ${entityName}${selectedCount > 1 ? "s" : ""}`}
        aria-describedby="bulk-actions-description"
        tabIndex={-1}
        onKeyDown={handleKeyDown}
        className={cn(
          "fixed bottom-6 left-1/2 z-50 -translate-x-1/2 rounded-xl",
          "transition-all delay-100 duration-300 ease-out hover:scale-105",
          "focus-visible:ring-ring/50 focus-visible:ring-2 focus-visible:outline-none"
        )}
      >
        <div
          className={cn(
            "p-2 shadow-xl",
            "rounded-xl border",
            "bg-background/95 supports-[backdrop-filter]:bg-background/60 backdrop-blur-lg",
            "flex items-center gap-x-2"
          )}
        >
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                onClick={handleClearSelection}
                className="size-6 rounded-full"
                aria-label="Clear selection"
              >
                <X className="size-3" />
                <span className="sr-only">Clear selection</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Clear selection</p>
            </TooltipContent>
          </Tooltip>

          <Separator className="h-5" orientation="vertical" aria-hidden="true" />

          <div
            className="flex items-center gap-x-1 text-sm"
            id="bulk-actions-description"
          >
            <Badge
              variant="default"
              className="min-w-6 rounded-lg"
              aria-label={`${selectedCount} selected`}
            >
              {selectedCount}
            </Badge>{" "}
            <span className="hidden sm:inline">
              {entityName}
              {selectedCount > 1 ? "s" : ""}
            </span>{" "}
            selected
          </div>

          <Separator className="h-5" orientation="vertical" aria-hidden="true" />

          {children}
        </div>
      </div>
    </>
  )
}

// Helper component for delete action button
export function BulkDeleteButton({
  onClick,
  disabled,
}: {
  onClick: () => void
  disabled?: boolean
}) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          variant="destructive"
          size="icon"
          onClick={onClick}
          disabled={disabled}
          className="size-8"
          aria-label="Delete selected"
        >
          <Trash2 className="size-4" />
          <span className="sr-only">Delete selected</span>
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>Delete selected</p>
      </TooltipContent>
    </Tooltip>
  )
}

// Helper component for export action button
export function BulkExportButton({
  onClick,
  disabled,
}: {
  onClick: () => void
  disabled?: boolean
}) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          onClick={onClick}
          disabled={disabled}
          className="size-8"
          aria-label="Export selected"
        >
          <Download className="size-4" />
          <span className="sr-only">Export selected</span>
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>Export selected</p>
      </TooltipContent>
    </Tooltip>
  )
}
