# @wilson-romero/tigo

TIGO Design System — React components + Tailwind CSS v4 design tokens for Next.js.

Built on [shadcn/ui](https://ui.shadcn.com/) with TIGO brand colors: Azul `#5060BA` · Amarillo `#FFD700` · Rojo `#E61950` · Verde `#41C800`.

## Installation

```bash
npm install @wilson-romero/tigo
# or
pnpm add @wilson-romero/tigo
```

## Setup in Next.js

### 1. Tailwind preset — `tailwind.config.ts`

```ts
import tigoPreset from "@wilson-romero/tigo/tailwind"
import type { Config } from "tailwindcss"

const config: Config = {
  presets: [tigoPreset],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./node_modules/@wilson-romero/tigo/dist/**/*.js",
  ],
}
export default config
```

### 2. Global styles — `app/layout.tsx`

```tsx
import "@wilson-romero/tigo/styles"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
```

### 3. Use components

```tsx
import { Button, Input, Card, CardContent, Badge } from "@wilson-romero/tigo"

export default function Page() {
  return (
    <Card>
      <CardContent className="flex gap-2 p-4">
        <Input placeholder="Search..." />
        <Button>Submit</Button>
        <Badge variant="secondary">New</Badge>
      </CardContent>
    </Card>
  )
}
```

## Available Components

| Category | Components |
|----------|-----------|
| Forms | Button, Input, Textarea, Checkbox, RadioGroup, Switch, Select, Label |
| Dialogs | Dialog, AlertDialog, Sheet, ConfirmDialog |
| Data | DataTable, DataTableToolbar, DataTablePagination, TreeTable |
| Navigation | Sidebar, Tabs, Breadcrumb, Pagination |
| Feedback | Alert, Progress, Toaster, Tooltip |
| Display | Card, Badge, Avatar, Skeleton, Separator |
| Overlay | Popover, DropdownMenu, Command |
| Advanced forms | Calendar, InputOTP, Field |
| Layout | PageHeader, ModuleHeader |
| Brand | TigoLogo |

## Utilities & Hooks

```tsx
import { cn, useIsMobile, useEntitySheet, useDataTablePreferences } from "@wilson-romero/tigo"
import { buildTree, flattenTree, findNodeById } from "@wilson-romero/tigo"
```

## Peer Dependencies

```json
{
  "react": "^19.0.0",
  "react-dom": "^19.0.0",
  "next": ">=16.0.0",
  "tailwindcss": "^4.0.0"
}
```

## License

MIT
