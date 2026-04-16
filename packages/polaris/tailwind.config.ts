/**
 * Polaris UI — Tailwind CSS preset
 * Import in your consumer project:
 *   import polarisPreset from "@wilson-romero/polaris/tailwind"
 */
import type { Config } from "tailwindcss"

const polarisPreset: Partial<Config> = {
  theme: {
    extend: {
      colors: {
        shopify: {
          green:   "#008060", // Primary interactive
          greenDark: "#004c3f",
          purple:  "#5c6ac4", // Highlight
          indigo:  "#202e78",
          teal:    "#47c1bf",
          yellow:  "#ffc453", // Warning
          orange:  "#f49342",
          red:     "#d72c0d", // Critical
          ink:     "#202223", // Text primary
          sky:     "#f6f6f7", // Surface default
        },
      },
      fontFamily: {
        sans: ["Inter", "-apple-system", "BlinkMacSystemFont", "system-ui", "sans-serif"],
      },
      borderRadius: {
        none: "0",
        sm:   "0.25rem",
        DEFAULT: "0.5rem",
        md:   "0.5rem",
        lg:   "0.75rem",
        xl:   "1rem",
        "2xl": "1.25rem",
      },
    },
  },
}

export default polarisPreset
