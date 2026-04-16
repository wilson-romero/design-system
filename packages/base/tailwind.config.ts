/**
 * Base UI — Tailwind CSS preset
 * Uber Base Design System tokens
 */
import type { Config } from "tailwindcss"

const basePreset: Partial<Config> = {
  theme: {
    extend: {
      colors: {
        uber: {
          blue:    "#276EF1", // Blue 400 — Primary
          navy:    "#1B51B0", // Blue 500 — Hover
          dark:    "#1E1E1E", // Black 100 — Text
          gray:    "#8F8F8F", // Gray 500 — Secondary text
          surface: "#F6F6F6", // Gray 50 — Background
          red:     "#E11900", // Red 400 — Negative
          orange:  "#FFC043", // Yellow 400 — Warning
          green:   "#03703C", // Green 500 — Positive
          teal:    "#088F60", // Green 400
        },
      },
      fontFamily: {
        sans: ["UberMove", "UberMoveText", "system-ui", "sans-serif"],
        mono: ["UberMoveMono", "monospace"],
      },
      borderRadius: {
        sm:  "0.125rem",
        DEFAULT: "0.25rem",
        md:  "0.25rem",
        lg:  "0.375rem",
      },
    },
  },
}

export default basePreset
