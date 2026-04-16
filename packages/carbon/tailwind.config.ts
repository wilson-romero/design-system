/**
 * Carbon UI — Tailwind CSS preset
 * Import in your consumer project:
 *   import carbonPreset from "@wilson-romero/carbon/tailwind"
 */
import type { Config } from "tailwindcss"

const carbonPreset: Partial<Config> = {
  theme: {
    extend: {
      colors: {
        ibm: {
          blue:    "#0f62fe", // Blue 60 — Interactive
          cyan:    "#1192e8", // Cyan 50
          teal:    "#009d9a", // Teal 50
          green:   "#198038", // Green 60
          yellow:  "#f1c21b", // Yellow 30 — Warning
          orange:  "#ff832b", // Orange 40
          red:     "#da1e28", // Red 60 — Error
          magenta: "#9f1853", // Magenta 70
          purple:  "#6929c4", // Purple 70
          gray:    "#161616", // Gray 100 — Text primary
        },
      },
      fontFamily: {
        sans: ["IBM Plex Sans", "system-ui", "sans-serif"],
        mono: ["IBM Plex Mono", "monospace"],
      },
      borderRadius: {
        none: "0",
        sm:   "0",
        DEFAULT: "0",
        md:   "0",
        lg:   "0",
        xl:   "0",
        "2xl": "0",
      },
    },
  },
}

export default carbonPreset
