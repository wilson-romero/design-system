/**
 * @wilson-romero/base — Uber Base Design System
 *
 * Drop-in replacement for @wilson-romero/tigo.
 * Swap the CSS import in your Next.js layout to apply Base tokens:
 *
 *   import "@wilson-romero/base/styles"   // instead of @wilson-romero/tigo/styles
 *   import { Button, UberLogo } from "@wilson-romero/base"
 *
 * All shadcn/ui components come from @wilson-romero/tigo —
 * only tokens (colors, radius, typography) differ.
 */

// Re-export everything from the shared component layer
export * from "@wilson-romero/tigo"

// Uber brand components
export { UberLogo } from "./components/base/UberLogo"
export type { UberLogoProps, UberLogoVariant } from "./components/base/UberLogo"
