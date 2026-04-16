# Publishing Guide

## How to release a new version

### 1. Make your changes

Edit components, tokens, styles, etc. in `packages/`.

### 2. Bump version numbers

**Option A — bump all packages at once (recommended)**
```bash
# Edit root package.json if needed, then bump all packages
pnpm -r --filter './packages/**' exec npm version patch   # 1.0.1 → 1.0.2
pnpm -r --filter './packages/**' exec npm version minor   # 1.0.1 → 1.1.0
pnpm -r --filter './packages/**' exec npm version major   # 1.0.1 → 2.0.0
```

**Option B — bump manually**

Edit `version` in each `packages/*/package.json` you changed.

> Keep `@wilson-romero/tigo` and the 8 derived packages on the same version to avoid confusion.

### 3. Build

```bash
pnpm build
```

Verify there are no TypeScript errors before publishing.

### 4. Commit and push

```bash
git add .
git commit -m "🔖 Release vX.Y.Z"
git push origin main
```

### 5. Tag and publish automatically via GitHub Actions

```bash
git tag vX.Y.Z
git push origin vX.Y.Z
```

GitHub Actions (`.github/workflows/publish.yml`) will:
1. Install dependencies
2. Build all 9 packages
3. Publish to npmjs.com automatically

Monitor the run at: https://github.com/wilson-romero/design-system/actions

---

## Manual publish (fallback)

If GitHub Actions fails, publish locally:

```bash
# Must be logged in to npm
npm whoami   # should show: wilson-romero

# Publish all packages
pnpm -r --filter './packages/**' publish --access public --no-git-checks
```

npm will open a browser URL to verify your 2FA — complete it and the publish will continue.

---

## Publish only one package

```bash
# Example: only update tigo
pnpm --filter @wilson-romero/tigo publish --access public --no-git-checks
```

---

## Verify a publish succeeded

```bash
npm view @wilson-romero/tigo version
npm view @wilson-romero/carbon version
# etc.
```

Or check: https://www.npmjs.com/~wilson-romero

---

## Current versions

| Package | Latest |
|---------|--------|
| `@wilson-romero/tigo` | `1.0.0` |
| `@wilson-romero/carbon` | `1.0.1` |
| `@wilson-romero/polaris` | `1.0.1` |
| `@wilson-romero/base` | `1.0.1` |
| `@wilson-romero/lightning` | `1.0.1` |
| `@wilson-romero/pajamas` | `1.0.1` |
| `@wilson-romero/primer` | `1.0.1` |
| `@wilson-romero/spectrum` | `1.0.1` |
| `@wilson-romero/antd` | `1.0.1` |

---

## NPM token info

- **Token name**: `NPM_TOKEN_CI`
- **Stored in**: GitHub repo → Settings → Secrets → Actions → `NPM_TOKEN`
- **Expires**: May 16, 2026
- **Bypass 2FA**: Yes (for CI use)

When the token expires, create a new one at https://www.npmjs.com/settings/wilson-romero/tokens with:
- Type: Granular access token
- Bypass 2FA: checked
- Packages: All packages
- Permission: Read and write

Then update the `NPM_TOKEN` secret at:
https://github.com/wilson-romero/design-system/settings/secrets/actions
