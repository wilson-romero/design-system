/**
 * @wilson-romero/tigo — TIGO Design System
 *
 * Usage in Next.js 16:
 *   import "@wilson-romero/tigo/styles"          // globals + TIGO theme
 *   import { Button, TigoLogo } from "@wilson-romero/tigo"
 */

// Utilities
export { cn, getErrorMessage } from "./lib/utils"
export {
  buildTree,
  flattenTree,
  findNodeById,
  getAncestorIds,
  filterTree,
  countNodes,
  countExpandableNodes,
  getExpandableIds,
  getNodeDepth,
  getChildCount,
  getDescendantCount,
} from "./lib/tree-utils"

// Hooks
export { useIsMobile } from "./hooks/use-mobile"
export { useEntitySheet } from "./hooks/use-entity-sheet"
export { useDataTablePreferences } from "./hooks/use-datatable-preferences"

// UI Components (shadcn/ui base)
export { Alert, AlertTitle, AlertDescription } from "./components/ui/alert"
export {
  AlertDialog,
  AlertDialogPortal,
  AlertDialogOverlay,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
} from "./components/ui/alert-dialog"
export { Avatar, AvatarImage, AvatarFallback } from "./components/ui/avatar"
export { Badge, badgeVariants } from "./components/ui/badge"
export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
} from "./components/ui/breadcrumb"
export { Button, buttonVariants } from "./components/ui/button"
export { Calendar } from "./components/ui/calendar"
export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
} from "./components/ui/card"
export { Checkbox } from "./components/ui/checkbox"
export {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "./components/ui/collapsible"
export {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator,
} from "./components/ui/command"
export { ConfirmDialog } from "./components/ui/confirm-dialog"
export { DataTable } from "./components/ui/data-table"
export { DataTablePagination } from "./components/ui/data-table-pagination"
export { DataTableToolbar } from "./components/ui/data-table-toolbar"
export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogTrigger,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
} from "./components/ui/dialog"
export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup,
} from "./components/ui/dropdown-menu"
export {
  Field,
  FieldLabel,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldContent,
  FieldTitle,
} from "./components/ui/field"
export { Input } from "./components/ui/input"
export {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator,
} from "./components/ui/input-otp"
export { Label } from "./components/ui/label"
export { PageHeader } from "./components/ui/page-header"
export {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "./components/ui/pagination"
export {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverAnchor,
} from "./components/ui/popover"
export { Progress } from "./components/ui/progress"
export { RadioGroup, RadioGroupItem } from "./components/ui/radio-group"
export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
  SelectScrollUpButton,
  SelectScrollDownButton,
} from "./components/ui/select"
export { Separator } from "./components/ui/separator"
export {
  Sheet,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
} from "./components/ui/sheet"
export {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
  SidebarInset,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSkeleton,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
  SidebarSeparator,
  SidebarTrigger,
  useSidebar,
} from "./components/ui/sidebar"
export { Skeleton } from "./components/ui/skeleton"
export { Toaster } from "./components/ui/sonner"
export { Switch } from "./components/ui/switch"
export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
} from "./components/ui/table"
export { Tabs, TabsList, TabsTrigger, TabsContent } from "./components/ui/tabs"
export { Textarea } from "./components/ui/textarea"
export { Toggle, toggleVariants } from "./components/ui/toggle"
export {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "./components/ui/tooltip"

// Data Table advanced components
export {
  DataTableBulkActions,
  BulkDeleteButton,
  BulkExportButton,
} from "./components/data-table/bulk-actions"
export { DataTableColumnHeader } from "./components/data-table/column-header"
export {
  DataTableFacetedFilter,
  type FacetedFilterOption,
  type FacetedFilterConfig,
} from "./components/data-table/faceted-filter"
export { createSelectionColumn } from "./components/data-table/selection-column"
export { SortProvider, useSortContext } from "./components/data-table/sort-context"
export {
  DataTableToggleFilter,
  type ToggleFilterConfig,
} from "./components/data-table/toggle-filter"
export { DataTableViewOptions } from "./components/data-table/view-options"
export type { FilterConfig } from "./components/data-table"

// Tree Table components
export { TreeTable } from "./components/tree-table/tree-table"
export {
  TreeTableToolbar,
  TreeTableExpandButton,
} from "./components/tree-table/tree-table-toolbar"
export { TreeTableSkeleton } from "./components/tree-table/tree-table-skeleton"
export type {
  TreeNode,
  TreeLevelConfig,
  TreeTableProps,
  TreeTablePrimaryCellProps,
  TreeTableContextValue,
} from "./components/tree-table/tree-table.types"

// Layout components
export { ModuleHeader } from "./components/layout/module-header"

// TIGO brand components
export { TigoLogo } from "./components/tigo/TigoLogo"
export type {
  TigoLogoProps,
  TigoLogoVariant,
  TigoLogoBackground,
} from "./components/tigo/TigoLogo"

// Types
export type { EntityActionResult, ServerActionState } from "./types"
