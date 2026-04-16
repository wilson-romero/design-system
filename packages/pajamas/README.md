# @wilson-romero/pajamas

GitLab Pajamas Design System tokens for Next.js — drop-in replacement for `@wilson-romero/tigo`.

Brand colors: Purple `#6B4FBB` · Orange `#FC6D26` · Blue `#1F75CB` · Red `#DD2B0E`.  
Typography: GitLab Sans · Subtle corners (0.125rem–0.375rem radius).

## Installation

### Install

```bash
npm install @wilson-romero/pajamas
# or
pnpm add @wilson-romero/pajamas
```

## Setup in Next.js

### 1. Tailwind preset — `tailwind.config.ts`

```ts
import pajamasPreset from "@wilson-romero/pajamas/tailwind"
import type { Config } from "tailwindcss"

const config: Config = {
  presets: [pajamasPreset],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./node_modules/@wilson-romero/pajamas/dist/**/*.js",
    "./node_modules/@wilson-romero/tigo/dist/**/*.js",
  ],
}
export default config
```

### 2. Global styles — `app/layout.tsx`

```tsx
import "@wilson-romero/pajamas/styles"

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
import { Button, Input, DataTable } from "@wilson-romero/pajamas"
import { GitLabLogo } from "@wilson-romero/pajamas"
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
