/**
 * TreeTable components for hierarchical data display
 *
 * @example
 * ```tsx
 * import { TreeTable, type TreeNode, type TreeLevelConfig } from "@e-yellow/ui/components/tree-table"
 *
 * interface Department extends TreeNode<Department> {
 *   id: string
 *   name: string
 *   code: string
 *   children?: Department[]
 * }
 *
 * const levelConfig: TreeLevelConfig[] = [
 *   { icon: Building2, iconClassName: "text-blue-500" },
 *   { icon: Briefcase, iconClassName: "text-emerald-500" },
 * ]
 *
 * <TreeTable
 *   data={departments}
 *   columns={columns}
 *   primaryField="name"
 *   levelConfig={levelConfig}
 * />
 * ```
 */

// Main component
export { TreeTable } from "./tree-table"

// Supporting components
export { TreeTableToolbar, TreeTableExpandButton } from "./tree-table-toolbar"
export { TreeTableSkeleton } from "./tree-table-skeleton"

// Types
export type {
  TreeNode,
  TreeLevelConfig,
  TreeTableProps,
  TreeTablePrimaryCellProps,
  TreeTableContextValue,
} from "./tree-table.types"
