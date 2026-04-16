/**
 * @wilson-romero/pajamas — GitLab Pajamas Design System
 *
 * Drop-in replacement for @wilson-romero/tigo.
 * Swap the CSS import in your Next.js layout to apply Pajamas tokens:
 *
 *   import "@wilson-romero/pajamas/styles"   // instead of @wilson-romero/tigo/styles
 *   import { Button, GitLabLogo } from "@wilson-romero/pajamas"
 *
 * All shadcn/ui components come from @wilson-romero/tigo —
 * only tokens (colors, radius, typography) differ.
 */

// Re-export everything from the shared component layer
export * from "@wilson-romero/tigo"

// GitLab brand components
export { GitLabLogo } from "./components/pajamas/GitLabLogo"
export type { GitLabLogoProps, GitLabLogoVariant } from "./components/pajamas/GitLabLogo"
