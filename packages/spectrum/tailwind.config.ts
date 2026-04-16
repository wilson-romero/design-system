/**
 * Spectrum UI — Tailwind CSS preset
 * Adobe Spectrum Design System tokens
 */
import type { Config } from "tailwindcss"

const spectrumPreset: Partial<Config> = {
  theme: {
    extend: {
      colors: {
        adobe: {
          blue:    "#0265DC", // Blue 600 — Interactive
          red:     "#D7373F", // Red 600 — Brand / Negative
          orange:  "#E68619", // Orange 700 — Notice
          yellow:  "#DFBF00", // Yellow 700 — Notice alt
          green:   "#268E6C", // Green 600 — Positive
          teal:    "#00A0A0", // Seafoam 600
          purple:  "#7326D3", // Purple 700
          fuchsia: "#CE2783", // Fuchsia 700
        },
      },
      fontFamily: {
        sans: ["Adobe Clean", "Source Sans Pro", "system-ui", "sans-serif"],
      },
      borderRadius: {
        sm:  "0.25rem",
        DEFAULT: "0.5rem",
        md:  "0.5rem",
        lg:  "0.75rem",
      },
    },
  },
}

export default spectrumPreset
