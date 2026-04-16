"use client"

import { ChevronDown, ChevronRight, ChevronsDownUp, ChevronsUpDown } from "lucide-react"
import { Button } from "../ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip"

interface TreeTableToolbarProps {
  /** Title for the table section */
  title?: string
  /** Description text below the title */
  description?: string
  /** Number of currently expanded nodes */
  expandedCount: number
  /** Total number of expandable nodes */
  totalExpandable: number
  /** Show the expand/collapse all button */
  showExpandAllButton?: boolean
  /** Handler for expand all */
  onExpandAll: () => void
  /** Handler for collapse all */
  onCollapseAll: () => void
  /** Additional actions to render on the right side */
  actions?: React.ReactNode
}

/**
 * Toolbar component for TreeTable
 * Provides expand/collapse all functionality and custom actions
 */
export function TreeTableToolbar({
  title,
  description,
  expandedCount,
  totalExpandable,
  showExpandAllButton = true,
  onExpandAll,
  onCollapseAll,
  actions,
}: TreeTableToolbarProps) {
  const isAllExpanded = totalExpandable > 0 && expandedCount >= totalExpandable
  const isAllCollapsed = expandedCount === 0
  const hasExpandableNodes = totalExpandable > 0

  return (
    <div className="space-y-4">
      {/* Title and description */}
      {(title || description) && (
        <div className="space-y-1">
          {title && (
            <h3 className="text-lg font-semibold leading-none tracking-tight">
              {title}
            </h3>
          )}
          {description && (
            <p className="text-sm text-muted-foreground">{description}</p>
          )}
        </div>
      )}

      {/* Toolbar controls */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          {showExpandAllButton && hasExpandableNodes && (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={isAllExpanded ? onCollapseAll : onExpandAll}
                    aria-label={isAllExpanded ? "Collapse all" : "Expand all"}
                    className="h-8 px-2"
                  >
                    {isAllExpanded ? (
                      <ChevronsDownUp className="size-4" />
                    ) : (
                      <ChevronsUpDown className="size-4" />
                    )}
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{isAllExpanded ? "Collapse all" : "Expand all"}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          )}

          {hasExpandableNodes && (
            <span className="text-sm text-muted-foreground">
              {expandedCount} of {totalExpandable} expanded
            </span>
          )}
        </div>

        {/* Custom actions */}
        {actions && <div className="flex items-center gap-2">{actions}</div>}
      </div>
    </div>
  )
}

/**
 * Expand/collapse toggle button for individual rows
 */
interface TreeTableExpandButtonProps {
  isExpanded: boolean
  hasChildren: boolean
  onClick: () => void
  className?: string
}

export function TreeTableExpandButton({
  isExpanded,
  hasChildren,
  onClick,
  className,
}: TreeTableExpandButtonProps) {
  if (!hasChildren) {
    // Spacer for alignment when no children
    return <span className="inline-block size-4 shrink-0" />
  }

  return (
    <button
      type="button"
      onClick={(e) => {
        e.stopPropagation()
        onClick()
      }}
      className={`inline-flex size-4 shrink-0 items-center justify-center rounded hover:bg-muted ${className}`}
      aria-expanded={isExpanded}
      aria-label={isExpanded ? "Collapse" : "Expand"}
    >
      {isExpanded ? (
        <ChevronDown className="size-3.5 text-muted-foreground" />
      ) : (
        <ChevronRight className="size-3.5 text-muted-foreground" />
      )}
    </button>
  )
}
