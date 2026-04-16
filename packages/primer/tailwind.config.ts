/**
 * Primer UI — Tailwind CSS preset
 * GitHub Primer Design System tokens
 */
import type { Config } from "tailwindcss"

const primerPreset: Partial<Config> = {
  theme: {
    extend: {
      colors: {
        github: {
          blue:    "#0969DA", // Interactive / Primary
          dark:    "#24292F", // Text primary
          gray:    "#57606A", // Text secondary
          canvas:  "#F6F8FA", // Background / Canvas default
          border:  "#D0D7DE", // Border default
          red:     "#CF222E", // Danger
          green:   "#1A7F37", // Success
          yellow:  "#9A6700", // Warning
          purple:  "#6639BA", // Done / Accent
        },
      },
      fontFamily: {
        sans: ["-apple-system", "BlinkMacSystemFont", "Segoe UI", "system-ui", "sans-serif"],
        mono: ["SFMono-Regular", "Consolas", "Liberation Mono", "monospace"],
      },
      borderRadius: {
        sm:  "0.1875rem",
        DEFAULT: "0.375rem",
        md:  "0.375rem",
        lg:  "0.5rem",
      },
    },
  },
}

export default primerPreset
