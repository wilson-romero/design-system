/**
 * Lightning UI — Tailwind CSS preset
 * Salesforce Lightning Design System tokens
 */
import type { Config } from "tailwindcss"

const lightningPreset: Partial<Config> = {
  theme: {
    extend: {
      colors: {
        salesforce: {
          blue:    "#0176D3", // Interactive / Primary
          navy:    "#032D60", // Text primary / Dark
          sky:     "#1B96FF", // Light blue action
          indigo:  "#3A3976", // Indigo
          red:     "#EA001E", // Error / Danger
          orange:  "#DD7A01", // Warning
          yellow:  "#FFE089", // Alert
          green:   "#2E844A", // Success
          teal:    "#0B827C", // Teal
        },
      },
      fontFamily: {
        sans: ["Salesforce Sans", "system-ui", "sans-serif"],
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

export default lightningPreset
