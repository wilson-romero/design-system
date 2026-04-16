import * as React from "react"

type AntDesignLogoVariant = "color" | "white" | "black"

interface AntDesignLogoProps {
  variant?: AntDesignLogoVariant
  width?: number
  className?: string
  "aria-label"?: string
}

/**
 * Ant Design — Alibaba / Ant Group
 * Simplified ant mark + wordmark.
 *
 * variant="color"  → Daybreak Blue #1677FF (default)
 * variant="white"  → White on transparent
 * variant="black"  → Black on transparent
 */
function AntDesignLogo({
  variant = "color",
  width = 80,
  className,
  "aria-label": ariaLabel = "Ant Design System",
}: AntDesignLogoProps) {
  const fills: Record<AntDesignLogoVariant, string> = {
    color: "#1677FF",
    white: "#ffffff",
    black: "#000000",
  }

  const fill = fills[variant]
  // viewBox 80 × 26
  const height = Math.round((width * 26) / 80)

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 80 26"
      width={width}
      height={height}
      aria-label={ariaLabel}
      role="img"
      className={className}
    >
      {/* Ant mark — stylized ant silhouette */}
      {/* Head */}
      <circle cx="13" cy="5" r="3.5" fill={fill} />
      {/* Thorax */}
      <circle cx="13" cy="12" r="3" fill={fill} />
      {/* Abdomen */}
      <ellipse cx="13" cy="20" rx="3.5" ry="4.5" fill={fill} />
      {/* Antennae */}
      <line x1="13" y1="2" x2="9" y2="0" stroke={fill} strokeWidth="1.5" strokeLinecap="round" />
      <line x1="13" y1="2" x2="17" y2="0" stroke={fill} strokeWidth="1.5" strokeLinecap="round" />
      {/* Legs — 3 pairs */}
      <line x1="10.5" y1="11" x2="6" y2="9"  stroke={fill} strokeWidth="1.2" strokeLinecap="round" />
      <line x1="10.5" y1="13" x2="6" y2="14" stroke={fill} strokeWidth="1.2" strokeLinecap="round" />
      <line x1="10.5" y1="15" x2="6" y2="17" stroke={fill} strokeWidth="1.2" strokeLinecap="round" />
      <line x1="15.5" y1="11" x2="20" y2="9"  stroke={fill} strokeWidth="1.2" strokeLinecap="round" />
      <line x1="15.5" y1="13" x2="20" y2="14" stroke={fill} strokeWidth="1.2" strokeLinecap="round" />
      <line x1="15.5" y1="15" x2="20" y2="17" stroke={fill} strokeWidth="1.2" strokeLinecap="round" />
      {/* "Ant Design" text */}
      <text
        x="27"
        y="15"
        fontSize="10"
        fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif"
        fontWeight="600"
        fill={fill}
      >
        Ant Design
      </text>
    </svg>
  )
}

export { AntDesignLogo }
export type { AntDesignLogoProps, AntDesignLogoVariant }
