import * as React from "react"

type SalesforceLogoVariant = "color" | "white" | "black"

interface SalesforceLogoProps {
  variant?: SalesforceLogoVariant
  width?: number
  className?: string
  "aria-label"?: string
}

/**
 * Salesforce Lightning Design System — cloud wordmark logo.
 *
 * variant="color"  → Salesforce Blue #0176D3 (default)
 * variant="white"  → White on transparent
 * variant="black"  → Black on transparent
 */
function SalesforceLogo({
  variant = "color",
  width = 80,
  className,
  "aria-label": ariaLabel = "Salesforce Lightning Design System",
}: SalesforceLogoProps) {
  const fills: Record<SalesforceLogoVariant, string> = {
    color: "#0176D3",
    white: "#ffffff",
    black: "#000000",
  }

  const fill = fills[variant]
  // viewBox 80 × 52
  const height = Math.round((width * 52) / 80)

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 80 52"
      width={width}
      height={height}
      aria-label={ariaLabel}
      role="img"
      className={className}
    >
      {/* Cloud shape — simplified Salesforce cloud mark */}
      <path
        d="M33 8c3.5-4 8.5-6.5 14-6.5 7 0 13 4 16 10
           3-1.5 6.5-2.5 10-2.5 10 0 18 8 18 18s-8 18-18 18c-1 0-2-.1-3-.3
           -2.5 3.2-6.5 5.3-11 5.3-2.5 0-4.8-.7-6.8-1.8
           -2.8 3.5-7 5.8-11.7 5.8-7 0-12.8-4.8-14.2-11.2
           -1-.2-2-.3-3-.3C7 43 1 37 1 30c0-6 4-11 9.5-12.5
           C11 10 18.5 4 27 4c2.2 0 4.3.5 6 1.4z"
        fill={fill}
        opacity="0.15"
      />
      <path
        d="M35 11c3-3.5 7.5-5.5 12.5-5.5 6.5 0 12 3.8 14.8 9.3
           2.8-1.4 6-2.3 9.4-2.3 9.2 0 16.3 7.2 16.3 16S80.9 44.5 71.7 44.5c-.8 0-1.7-.1-2.5-.2
           -2.4 3-6 5-10.2 5-2.3 0-4.5-.6-6.3-1.7
           -2.6 3.2-6.5 5.2-10.8 5.2-6.5 0-11.8-4.4-13.2-10.4
           -1-.2-2-.3-3.1-.3C10.4 42 5 36.6 5 30c0-5.6 3.8-10.3 9-11.8
           C15.3 11.3 22 6 30 6c2 0 3.8.4 5.5 1.1"
        fill="none"
        stroke={fill}
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Lightning bolt */}
      <polygon
        points="37,20 31,32 39,30 33,44 49,26 40,28"
        fill={fill}
      />
    </svg>
  )
}

export { SalesforceLogo }
export type { SalesforceLogoProps, SalesforceLogoVariant }
