/**
 * @wilson-romero/spectrum — Adobe Spectrum Design System
 *
 * Drop-in replacement for @wilson-romero/tigo.
 * Swap the CSS import in your Next.js layout to apply Spectrum tokens:
 *
 *   import "@wilson-romero/spectrum/styles"   // instead of @wilson-romero/tigo/styles
 *   import { Button, AdobeLogo } from "@wilson-romero/spectrum"
 *
 * All shadcn/ui components come from @wilson-romero/tigo —
 * only tokens (colors, radius, typography) differ.
 */

// Re-export everything from the shared component layer
export * from "@wilson-romero/tigo"

// Adobe brand components
export { AdobeLogo } from "./components/spectrum/AdobeLogo"
export type { AdobeLogoProps, AdobeLogoVariant } from "./components/spectrum/AdobeLogo"
