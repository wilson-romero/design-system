/**
 * @wilson-romero/lightning — Salesforce Lightning Design System
 *
 * Drop-in replacement for @wilson-romero/tigo.
 * Swap the CSS import in your Next.js layout to apply Lightning tokens:
 *
 *   import "@wilson-romero/lightning/styles"   // instead of @wilson-romero/tigo/styles
 *   import { Button, SalesforceLogo } from "@wilson-romero/lightning"
 *
 * All shadcn/ui components come from @wilson-romero/tigo —
 * only tokens (colors, radius, typography) differ.
 */

// Re-export everything from the shared component layer
export * from "@wilson-romero/tigo"

// Salesforce brand components
export { SalesforceLogo } from "./components/lightning/SalesforceLogo"
export type { SalesforceLogoProps, SalesforceLogoVariant } from "./components/lightning/SalesforceLogo"
