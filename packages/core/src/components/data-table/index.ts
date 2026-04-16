/**
 * Data Table components
 */

export { DataTableBulkActions, BulkDeleteButton, BulkExportButton } from "./bulk-actions"
export { DataTableColumnHeader } from "./column-header"
export { DataTableFacetedFilter, type FacetedFilterOption, type FacetedFilterConfig } from "./faceted-filter"
export { createSelectionColumn } from "./selection-column"
export { SortProvider, useSortContext } from "./sort-context"
export { DataTableToggleFilter, type ToggleFilterConfig } from "./toggle-filter"
export { DataTableViewOptions } from "./view-options"

// Union type for all filter configs
import type { ToggleFilterConfig } from "./toggle-filter"
import type { FacetedFilterConfig } from "./faceted-filter"
export type FilterConfig = ToggleFilterConfig | FacetedFilterConfig
