# @wilson-romero Design System Monorepo

9 enterprise design systems implemented as swappable React component libraries — all sharing the same shadcn/ui component API with different visual tokens (colors, typography, border radius).

Published on [GitHub Packages](https://github.com/wilson-romero?tab=packages).

## Packages

| Package | Design System | Primary Color |
|---------|--------------|---------------|
| `@wilson-romero/tigo` | TIGO | `#5060BA` |
| `@wilson-romero/carbon` | IBM Carbon | `#0f62fe` |
| `@wilson-romero/polaris` | Shopify Polaris | `#008060` |
| `@wilson-romero/base` | Uber Base | `#276EF1` |
| `@wilson-romero/lightning` | Salesforce Lightning | `#0176D3` |
| `@wilson-romero/pajamas` | GitLab Pajamas | `#6B4FBB` |
| `@wilson-romero/primer` | GitHub Primer | `#0969DA` |
| `@wilson-romero/spectrum` | Adobe Spectrum | `#0265DC` |
| `@wilson-romero/antd` | Ant Design | `#1677FF` |

## Quick Start

### Step 1 — Configure the GitHub Packages registry

Packages are hosted on GitHub Packages, not the public npm registry. You need a [GitHub Personal Access Token](https://github.com/settings/tokens) with the `read:packages` scope.

Add a `.npmrc` file at the root of your project:

```
@wilson-romero:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=YOUR_GITHUB_TOKEN
```

> You can also set the token as an environment variable and reference it:
> `//npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}`

### Step 2 — Install

```bash
# Pick one — they all expose the same component API
npm install @wilson-romero/tigo        # TIGO brand
npm install @wilson-romero/carbon      # IBM Carbon
npm install @wilson-romero/polaris     # Shopify Polaris
npm install @wilson-romero/base        # Uber Base
npm install @wilson-romero/lightning   # Salesforce Lightning
npm install @wilson-romero/pajamas     # GitLab Pajamas
npm install @wilson-romero/primer      # GitHub Primer
npm install @wilson-romero/spectrum    # Adobe Spectrum
npm install @wilson-romero/antd        # Ant Design
```

### Step 3 — Setup in Next.js (example with TIGO)

**`tailwind.config.ts`**
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

**`app/layout.tsx`**
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

**`app/page.tsx`**
```tsx
import { Button, Input, Card, CardContent } from "@wilson-romero/tigo"

export default function Page() {
  return (
    <Card>
      <CardContent className="flex gap-2 p-4">
        <Input placeholder="Search..." />
        <Button>Submit</Button>
      </CardContent>
    </Card>
  )
}
```

### Switch design systems

Swap two lines to change the entire visual language — all components stay identical:

```diff
- import "@wilson-romero/tigo/styles"
+ import "@wilson-romero/carbon/styles"

- import { Button } from "@wilson-romero/tigo"
+ import { Button } from "@wilson-romero/carbon"
```

## Architecture

```
packages/
  tigo/        # Base layer: all 38+ components, hooks, utilities
  carbon/      # Re-exports tigo + IBM Carbon tokens + IBMLogo
  polaris/     # Re-exports tigo + Shopify Polaris tokens + ShopifyLogo
  base/        # Re-exports tigo + Uber Base tokens + UberLogo
  lightning/   # Re-exports tigo + Salesforce Lightning tokens + SalesforceLogo
  pajamas/     # Re-exports tigo + GitLab Pajamas tokens + GitLabLogo
  primer/      # Re-exports tigo + GitHub Primer tokens + GitHubLogo
  spectrum/    # Re-exports tigo + Adobe Spectrum tokens + AdobeLogo
  antd/        # Re-exports tigo + Ant Design tokens + AntDesignLogo
apps/
  example/     # Next.js 16 showcase comparing all 9 systems side-by-side
```

Each derived package adds only:
- A `tailwind.config.ts` preset with brand-specific tokens
- A `src/styles/globals.css` with CSS variables
- A brand logo component

## Development

```bash
# Install dependencies
pnpm install

# Build all packages (tigo first, then derivatives)
pnpm build

# Run the showcase app
pnpm dev

# Build a specific system
pnpm build:tigo
pnpm build:carbon
```

## Publishing

Packages are published automatically to GitHub Packages when a version tag is pushed:

```bash
git tag v1.2.0 && git push origin v1.2.0
```

The GitHub Actions workflow (`.github/workflows/publish.yml`) handles build + publish.

## Tech Stack

- **React 19** + **Next.js 16**
- **Tailwind CSS v4** (token-based theming via presets)
- **shadcn/ui** (component foundation)
- **Radix UI** primitives
- **TanStack Table** (DataTable)
- **tsup** (build: ESM + CJS + TypeScript declarations)
- **pnpm workspaces** (monorepo)

## License

MIT
