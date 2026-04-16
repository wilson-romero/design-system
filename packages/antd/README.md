# @wilson-romero/antd

Ant Design token system for Next.js — drop-in replacement for `@wilson-romero/tigo`.

Brand colors: Blue `#1677FF` · Red `#FF4D4F` · Orange `#FA8C16` · Green `#52C41A`.  
Typography: Ant Design system fonts · Standard corners (0.25rem–0.5rem radius).

## Installation

### Install

```bash
npm install @wilson-romero/antd
# or
pnpm add @wilson-romero/antd
```

## Setup in Next.js

### 1. Tailwind preset — `tailwind.config.ts`

```ts
import antdPreset from "@wilson-romero/antd/tailwind"
import type { Config } from "tailwindcss"

const config: Config = {
  presets: [antdPreset],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./node_modules/@wilson-romero/antd/dist/**/*.js",
    "./node_modules/@wilson-romero/tigo/dist/**/*.js",
  ],
}
export default config
```

### 2. Global styles — `app/layout.tsx`

```tsx
import "@wilson-romero/antd/styles"

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
import { Button, Input, DataTable } from "@wilson-romero/antd"
import { AntDesignLogo } from "@wilson-romero/antd"
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
