/**
 * Pajamas UI — Tailwind CSS preset
 * GitLab Pajamas Design System tokens
 */
import type { Config } from "tailwindcss"

const pajamasPreset: Partial<Config> = {
  theme: {
    extend: {
      colors: {
        gitlab: {
          purple:  "#6B4FBB", // UI primary / theme
          orange:  "#FC6D26", // Brand / accent
          blue:    "#1F75CB", // Action blue
          dark:    "#303030", // Text primary
          gray:    "#737278", // Text secondary
          surface: "#EBEBEF", // Background
          red:     "#DD2B0E", // Danger
          green:   "#108548", // Success
          yellow:  "#A87D00", // Warning
        },
      },
      fontFamily: {
        sans: ["GitLab Sans", "system-ui", "sans-serif"],
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

export default pajamasPreset
