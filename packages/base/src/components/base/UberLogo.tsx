import * as React from "react"

type UberLogoVariant = "color" | "white" | "black"

interface UberLogoProps {
  variant?: UberLogoVariant
  width?: number
  className?: string
  "aria-label"?: string
}

/**
 * Uber Base Design System — Uber wordmark.
 *
 * variant="color"  → Uber dark #1E1E1E (default)
 * variant="white"  → White on transparent
 * variant="black"  → Black on transparent
 */
function UberLogo({
  variant = "color",
  width = 72,
  className,
  "aria-label": ariaLabel = "Uber Base Design System",
}: UberLogoProps) {
  const fills: Record<UberLogoVariant, string> = {
    color: "#1E1E1E",
    white: "#ffffff",
    black: "#000000",
  }

  const accentFills: Record<UberLogoVariant, string> = {
    color: "#276EF1",
    white: "#aaccff",
    black: "#333333",
  }

  const fill = fills[variant]
  const accent = accentFills[variant]

  // viewBox 72 × 24
  const height = Math.round((width * 24) / 72)

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 72 24"
      width={width}
      height={height}
      aria-label={ariaLabel}
      role="img"
      className={className}
    >
      {/* Uber hexagonal badge */}
      <polygon
        points="12,2 20,6 20,18 12,22 4,18 4,6"
        fill={accent}
      />
      <text
        x="8"
        y="16.5"
        fontSize="9"
        fontFamily="'UberMove', system-ui, sans-serif"
        fontWeight="700"
        fill="white"
      >
        U
      </text>
      {/* "Base" wordmark */}
      <text
        x="27"
        y="17"
        fontSize="13"
        fontFamily="'UberMove', 'UberMoveText', system-ui, sans-serif"
        fontWeight="700"
        fill={fill}
        letterSpacing="0.5"
      >
        Base
      </text>
    </svg>
  )
}

export { UberLogo }
export type { UberLogoProps, UberLogoVariant }
