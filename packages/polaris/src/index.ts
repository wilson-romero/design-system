/**
 * @wilson-romero/polaris — Shopify Polaris Design System
 *
 * Drop-in replacement for @wilson-romero/tigo.
 * Swap the CSS import in your Next.js layout to apply Polaris tokens:
 *
 *   import "@wilson-romero/polaris/styles"   // instead of @wilson-romero/tigo/styles
 *   import { Button, ShopifyLogo } from "@wilson-romero/polaris"
 *
 * All shadcn/ui components come from @wilson-romero/tigo —
 * only tokens (colors, radius, typography) differ.
 */

// Re-export everything from the shared component layer
export * from "@wilson-romero/tigo"

// Shopify brand components
export { ShopifyLogo } from "./components/polaris/ShopifyLogo"
export type { ShopifyLogoProps, ShopifyLogoVariant } from "./components/polaris/ShopifyLogo"
