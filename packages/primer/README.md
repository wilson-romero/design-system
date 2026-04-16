# @wilson-romero/primer

GitHub Primer Design System tokens for Next.js — drop-in replacement for `@wilson-romero/tigo`.

Brand colors: Blue `#0969DA` · Dark `#24292F` · Red `#CF222E` · Green `#1A7F37`.  
Typography: System UI (-apple-system, BlinkMacSystemFont) · Medium corners (0.1875rem–0.5rem radius).

## Installation

### Install

```bash
npm install @wilson-romero/primer
# or
pnpm add @wilson-romero/primer
```

## Setup in Next.js

### 1. Tailwind preset — `tailwind.config.ts`

```ts
import primerPreset from "@wilson-romero/primer/tailwind"
import type { Config } from "tailwindcss"

const config: Config = {
  presets: [primerPreset],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./node_modules/@wilson-romero/primer/dist/**/*.js",
    "./node_modules/@wilson-romero/tigo/dist/**/*.js",
  ],
}
export default config
```

### 2. Global styles — `app/layout.tsx`

```tsx
import "@wilson-romero/primer/styles"

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
import { Button, Input, DataTable } from "@wilson-romero/primer"
import { GitHubLogo } from "@wilson-romero/primer"
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
