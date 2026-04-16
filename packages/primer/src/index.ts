/**
 * @wilson-romero/primer — GitHub Primer Design System
 *
 * Drop-in replacement for @wilson-romero/tigo.
 * Swap the CSS import in your Next.js layout to apply Primer tokens:
 *
 *   import "@wilson-romero/primer/styles"   // instead of @wilson-romero/tigo/styles
 *   import { Button, GitHubLogo } from "@wilson-romero/primer"
 *
 * All shadcn/ui components come from @wilson-romero/tigo —
 * only tokens (colors, radius, typography) differ.
 */

// Re-export everything from the shared component layer
export * from "@wilson-romero/tigo"

// GitHub brand components
export { GitHubLogo } from "./components/primer/GitHubLogo"
export type { GitHubLogoProps, GitHubLogoVariant } from "./components/primer/GitHubLogo"
