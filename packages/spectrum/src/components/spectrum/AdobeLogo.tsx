import * as React from "react"

type AdobeLogoVariant = "color" | "white" | "black"

interface AdobeLogoProps {
  variant?: AdobeLogoVariant
  width?: number
  className?: string
  "aria-label"?: string
}

/**
 * Adobe Spectrum Design System — Adobe mark + wordmark.
 *
 * variant="color"  → Adobe Red #FA0F00 mark + Blue #0265DC text (default)
 * variant="white"  → White on transparent
 * variant="black"  → Black on transparent
 */
function AdobeLogo({
  variant = "color",
  width = 88,
  className,
  "aria-label": ariaLabel = "Adobe Spectrum Design System",
}: AdobeLogoProps) {
  const markFill: Record<AdobeLogoVariant, string> = {
    color: "#FA0F00",
    white: "#ffffff",
    black: "#000000",
  }

  const textFill: Record<AdobeLogoVariant, string> = {
    color: "#222222",
    white: "#ffffff",
    black: "#000000",
  }

  const mark = markFill[variant]
  const text = textFill[variant]

  // viewBox 88 × 24
  const height = Math.round((width * 24) / 88)

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 88 24"
      width={width}
      height={height}
      aria-label={ariaLabel}
      role="img"
      className={className}
    >
      {/* Adobe "A" triangle mark */}
      <polygon points="12,2 22,22 2,22" fill={mark} />
      <polygon points="12,8 17,22 7,22" fill="white" opacity="0.25" />
      {/* "Spectrum" wordmark */}
      <text
        x="30"
        y="17"
        fontSize="12"
        fontFamily="'Adobe Clean', 'Source Sans Pro', system-ui, sans-serif"
        fontWeight="600"
        fill={text}
        letterSpacing="-0.2"
      >
        Spectrum
      </text>
    </svg>
  )
}

export { AdobeLogo }
export type { AdobeLogoProps, AdobeLogoVariant }
