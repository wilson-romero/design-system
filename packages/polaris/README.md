# @wilson-romero/polaris

Shopify Polaris Design System tokens for Next.js — drop-in replacement for `@wilson-romero/tigo`.

Brand colors: Green `#008060` · Purple `#5C6AC4` · Red `#DE3618` · Yellow `#F49342`.  
Typography: Inter · Rounded corners (0.5rem–1.25rem radius).

## Installation

### 1. Configure the GitHub Packages registry

Add a `.npmrc` file at the root of your project with a [GitHub token](https://github.com/settings/tokens) (scope: `read:packages`):

```
@wilson-romero:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=YOUR_GITHUB_TOKEN
```

### 2. Install the package

```bash
npm install @wilson-romero/polaris
# or
pnpm add @wilson-romero/polaris
```

## Setup in Next.js

### 1. Tailwind preset — `tailwind.config.ts`

```ts
import polarisPreset from "@wilson-romero/polaris/tailwind"
import type { Config } from "tailwindcss"

const config: Config = {
  presets: [polarisPreset],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./node_modules/@wilson-romero/polaris/dist/**/*.js",
    "./node_modules/@wilson-romero/tigo/dist/**/*.js",
  ],
}
export default config
```

### 2. Global styles — `app/layout.tsx`

```tsx
import "@wilson-romero/polaris/styles"

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
import { Button, Input, DataTable } from "@wilson-romero/polaris"
import { ShopifyLogo } from "@wilson-romero/polaris"
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
