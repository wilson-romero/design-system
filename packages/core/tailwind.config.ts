/**
 * TIGO UI — Tailwind CSS preset
 * Import in your consumer project:
 *   import tigoPreset from "@wilson-romero/tigo/tailwind"
 */
import type { Config } from "tailwindcss"

const tigoPreset: Partial<Config> = {
  theme: {
    extend: {
      colors: {
        tigo: {
          blue: "#5060BA",
          yellow: "#FFD700",
          red: "#E61950",
          green: "#41C800",
        },
      },
      fontFamily: {
        sans: ["Cronos Pro", "system-ui", "sans-serif"],
        display: ["Cocon", "Cronos Pro", "sans-serif"],
      },
    },
  },
}

export default tigoPreset
