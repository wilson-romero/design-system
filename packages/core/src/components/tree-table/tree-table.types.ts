import type { ColumnDef, ExpandedState } from "@tanstack/react-table"

/**
 * Base interface for tree-structured data
 * Any type used with TreeTable must extend this interface
 */
export interface TreeNode<TNode = unknown> {
  id: string
  children?: TNode[]
}

/**
 * Configuration for visual styling at each tree level
 * Allows different icons and styles per hierarchy depth
 */
export interface TreeLevelConfig {
  /** Icon component to display at this level */
  icon?: React.ComponentType<{ className?: string }>
  /** Additional classes for the icon */
  iconClassName?: string
  /** Additional classes for the row at this level */
  rowClassName?: string
  /** Additional classes for the primary text at this level */
  textClassName?: string
}

/**
 * Props for the TreeTable component
 * @template T - The type of data items, must extend TreeNode<T>
 */
export interface TreeTableProps<T extends TreeNode<T>> {
  /** Tree-structured data to display */
  data: T[]
  /** Column definitions (excluding the primary column which is auto-generated) */
  columns: ColumnDef<T, unknown>[]
  /** Field to display in the primary column with expand/collapse functionality */
  primaryField: Extract<keyof T, string>
  /** Header text for the primary column */
  primaryColumnHeader?: string
  /** Visual configuration per tree level (index = depth) */
  levelConfig?: TreeLevelConfig[]
  /** IDs of nodes that should be expanded by default */
  defaultExpanded?: string[]
  /** Show expand/collapse all button in toolbar */
  showExpandAllButton?: boolean
  /** Show child count badge next to expandable nodes */
  showChildCount?: boolean
  /** Callback when expanded state changes */
  onExpandedChange?: (expanded: ExpandedState) => void
  /** Callback when a row is clicked */
  onRowClick?: (row: T) => void
  /** Show loading skeleton */
  isLoading?: boolean
  /** Message to show when data is empty */
  emptyMessage?: string
  /** Title for the table header */
  title?: string
  /** Description text below the title */
  description?: string
  /** Additional actions to render in the toolbar */
  toolbarActions?: React.ReactNode
  /** Indentation size per level in pixels (default: 24) */
  indentSize?: number
  /** Enable keyboard navigation for accessibility */
  enableKeyboardNavigation?: boolean
}

/**
 * Internal props passed to the primary cell renderer
 */
export interface TreeTablePrimaryCellProps<T extends TreeNode<T>> {
  row: T
  depth: number
  isExpanded: boolean
  hasChildren: boolean
  onToggle: () => void
  primaryField: Extract<keyof T, string>
  levelConfig?: TreeLevelConfig[]
  indentSize: number
  showChildCount?: boolean
}

/**
 * Context value for tree state management
 */
export interface TreeTableContextValue {
  expandAll: () => void
  collapseAll: () => void
  expandedCount: number
  totalExpandable: number
}
