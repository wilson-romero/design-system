/**
 * @wilson-romero/carbon — IBM Carbon Design System
 *
 * Drop-in replacement for @wilson-romero/tigo.
 * Swap the CSS import in your Next.js layout to apply Carbon tokens:
 *
 *   import "@wilson-romero/carbon/styles"   // instead of @wilson-romero/tigo/styles
 *   import { Button, IBMLogo } from "@wilson-romero/carbon"
 *
 * All shadcn/ui components come from @wilson-romero/tigo —
 * only tokens (colors, radius, typography) differ.
 */

// Re-export everything from the shared component layer
export * from "@wilson-romero/tigo"

// IBM brand components
export { IBMLogo } from "./components/carbon/IBMLogo"
export type { IBMLogoProps, IBMLogoVariant } from "./components/carbon/IBMLogo"
