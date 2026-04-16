/**
 * Ant Design UI — Tailwind CSS preset
 * Alibaba / Ant Group Design System tokens
 */
import type { Config } from "tailwindcss"

const antdPreset: Partial<Config> = {
  theme: {
    extend: {
      colors: {
        ant: {
          blue:    "#1677FF", // Daybreak Blue — Primary
          red:     "#FF4D4F", // Dust Red — Error
          orange:  "#FA8C16", // Sunset Orange — Warning
          yellow:  "#FADB14", // Calendula Gold
          green:   "#52C41A", // Polar Green — Success
          teal:    "#13C2C2", // Cyan
          purple:  "#722ED1", // Golden Purple
          magenta: "#EB2F96", // Magenta
          gray:    "#8C8C8C", // Gray 7
        },
      },
      fontFamily: {
        sans: ["-apple-system", "BlinkMacSystemFont", "Segoe UI", "PingFang SC", "Helvetica Neue", "system-ui", "sans-serif"],
      },
      borderRadius: {
        sm:  "0.25rem",
        DEFAULT: "0.375rem",
        md:  "0.375rem",
        lg:  "0.5rem",
      },
    },
  },
}

export default antdPreset
