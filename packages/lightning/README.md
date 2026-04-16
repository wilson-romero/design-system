# @wilson-romero/lightning

Salesforce Lightning Design System tokens for Next.js — drop-in replacement for `@wilson-romero/tigo`.

Brand colors: Blue `#0176D3` · Navy `#032D60` · Red `#BA0517` · Green `#2E844A`.  
Typography: Salesforce Sans · Subtle corners (0.125rem–0.375rem radius).

## Installation

### Install

```bash
npm install @wilson-romero/lightning
# or
pnpm add @wilson-romero/lightning
```

## Setup in Next.js

### 1. Tailwind preset — `tailwind.config.ts`

```ts
import lightningPreset from "@wilson-romero/lightning/tailwind"
import type { Config } from "tailwindcss"

const config: Config = {
  presets: [lightningPreset],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./node_modules/@wilson-romero/lightning/dist/**/*.js",
    "./node_modules/@wilson-romero/tigo/dist/**/*.js",
  ],
}
export default config
```

### 2. Global styles — `app/layout.tsx`

```tsx
import "@wilson-romero/lightning/styles"

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
import { Button, Input, DataTable } from "@wilson-romero/lightning"
import { SalesforceLogo } from "@wilson-romero/lightning"
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
