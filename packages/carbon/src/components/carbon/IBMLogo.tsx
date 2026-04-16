import * as React from "react"

type IBMLogoVariant = "color" | "white" | "black"

interface IBMLogoProps {
  /** Color variant */
  variant?: IBMLogoVariant
  /** Width in pixels — height scales proportionally (viewBox 60×24) */
  width?: number
  className?: string
  "aria-label"?: string
}

/**
 * IBM logotype — classic 8-bar horizontal stripe wordmark.
 *
 * variant="color"  → IBM Blue #0f62fe on transparent  (default)
 * variant="white"  → White #ffffff on transparent
 * variant="black"  → Black #161616 on transparent
 *
 * Reference: ibm.com/brand/experience-guides/developer/ibm-logo
 */
function IBMLogo({
  variant = "color",
  width = 80,
  className,
  "aria-label": ariaLabel = "IBM",
}: IBMLogoProps) {
  const fills: Record<IBMLogoVariant, string> = {
    color: "#0f62fe",
    white: "#ffffff",
    black: "#161616",
  }

  const fill = fills[variant]
  // Original viewBox: 60 × 24 (IBM 8-bar logo proportions)
  const height = Math.round((width * 24) / 60)

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 60 24"
      width={width}
      height={height}
      aria-label={ariaLabel}
      role="img"
      className={className}
    >
      {/* IBM 8-bar horizontal stripe wordmark (simplified path representation) */}
      {/* I */}
      <rect x="0"   y="0"  width="8" height="2.4" fill={fill} />
      <rect x="0"   y="4"  width="8" height="2.4" fill={fill} />
      <rect x="2"   y="8"  width="4" height="2.4" fill={fill} />
      <rect x="2"   y="12" width="4" height="2.4" fill={fill} />
      <rect x="0"   y="16" width="8" height="2.4" fill={fill} />
      <rect x="0"   y="20" width="8" height="2.4" fill={fill} />
      {/* B */}
      <rect x="11"  y="0"  width="10" height="2.4" fill={fill} />
      <rect x="11"  y="4"  width="12" height="2.4" fill={fill} />
      <rect x="11"  y="8"  width="10" height="2.4" fill={fill} />
      <rect x="11"  y="12" width="12" height="2.4" fill={fill} />
      <rect x="11"  y="16" width="10" height="2.4" fill={fill} />
      <rect x="11"  y="20" width="12" height="2.4" fill={fill} />
      {/* M */}
      <rect x="26"  y="0"  width="7"  height="2.4" fill={fill} />
      <rect x="26"  y="4"  width="4"  height="2.4" fill={fill} />
      <rect x="30"  y="4"  width="4"  height="2.4" fill={fill} />
      <rect x="26"  y="8"  width="8"  height="2.4" fill={fill} />
      <rect x="26"  y="12" width="8"  height="2.4" fill={fill} />
      <rect x="26"  y="16" width="4"  height="2.4" fill={fill} />
      <rect x="32"  y="16" width="4"  height="2.4" fill={fill} />
      <rect x="26"  y="20" width="11" height="2.4" fill={fill} />
    </svg>
  )
}

export { IBMLogo }
export type { IBMLogoProps, IBMLogoVariant }
