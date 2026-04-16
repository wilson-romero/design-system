# @wilson-romero/carbon

IBM Carbon Design System tokens for Next.js — drop-in replacement for `@wilson-romero/tigo`.

Brand colors: Blue 60 `#0043CE` · Gray 100 `#161616` · Red 60 `#DA1E28` · Green 60 `#198038`.  
Typography: IBM Plex Sans · Sharp square corners (0rem radius).

## Installation

### Install

```bash
npm install @wilson-romero/carbon
# or
pnpm add @wilson-romero/carbon
```

## Setup in Next.js

### 1. Tailwind preset — `tailwind.config.ts`

```ts
import carbonPreset from "@wilson-romero/carbon/tailwind"
import type { Config } from "tailwindcss"

const config: Config = {
  presets: [carbonPreset],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./node_modules/@wilson-romero/carbon/dist/**/*.js",
    "./node_modules/@wilson-romero/tigo/dist/**/*.js",
  ],
}
export default config
```

### 2. Global styles — `app/layout.tsx`

```tsx
import "@wilson-romero/carbon/styles"

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
import { Button, Input, DataTable } from "@wilson-romero/carbon"
import { IBMLogo } from "@wilson-romero/carbon"
```

> All 38+ shadcn/ui components are available — same API as `@wilson-romero/tigo`, only the visual tokens change.

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
