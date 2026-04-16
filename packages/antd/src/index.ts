/**
 * @wilson-romero/antd — Ant Design System (Alibaba / Ant Group)
 *
 * Drop-in replacement for @wilson-romero/tigo.
 * Swap the CSS import in your Next.js layout to apply Ant Design tokens:
 *
 *   import "@wilson-romero/antd/styles"   // instead of @wilson-romero/tigo/styles
 *   import { Button, AntDesignLogo } from "@wilson-romero/antd"
 *
 * All shadcn/ui components come from @wilson-romero/tigo —
 * only tokens (colors, radius, typography) differ.
 */

// Re-export everything from the shared component layer
export * from "@wilson-romero/tigo"

// Ant Design brand components
export { AntDesignLogo } from "./components/antd/AntDesignLogo"
export type { AntDesignLogoProps, AntDesignLogoVariant } from "./components/antd/AntDesignLogo"
