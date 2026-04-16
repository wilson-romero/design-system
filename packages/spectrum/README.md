# @wilson-romero/spectrum

Adobe Spectrum Design System tokens for Next.js — drop-in replacement for `@wilson-romero/tigo`.

Brand colors: Blue `#0265DC` · Red `#E83636` · Orange `#E68619` · Green `#15864A`.  
Typography: Adobe Clean · Rounded corners (0.25rem–0.75rem radius).

## Installation

### Install

```bash
npm install @wilson-romero/spectrum
# or
pnpm add @wilson-romero/spectrum
```

## Setup in Next.js

### 1. Tailwind preset — `tailwind.config.ts`

```ts
import spectrumPreset from "@wilson-romero/spectrum/tailwind"
import type { Config } from "tailwindcss"

const config: Config = {
  presets: [spectrumPreset],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./node_modules/@wilson-romero/spectrum/dist/**/*.js",
    "./node_modules/@wilson-romero/tigo/dist/**/*.js",
  ],
}
export default config
```

### 2. Global styles — `app/layout.tsx`

```tsx
import "@wilson-romero/spectrum/styles"

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
import { Button, Input, DataTable } from "@wilson-romero/spectrum"
import { AdobeLogo } from "@wilson-romero/spectrum"
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
