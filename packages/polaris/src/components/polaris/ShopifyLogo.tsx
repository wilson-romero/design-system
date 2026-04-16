import * as React from "react"

type ShopifyLogoVariant = "color" | "white" | "black" | "icon"

interface ShopifyLogoProps {
  /** Visual variant */
  variant?: ShopifyLogoVariant
  /** Width in pixels — height scales proportionally */
  width?: number
  className?: string
  "aria-label"?: string
}

/**
 * Shopify logotype — shopping bag icon + wordmark.
 *
 * variant="color"  → Shopify Green #96bf48 bag + dark #202223 text (default)
 * variant="white"  → All white
 * variant="black"  → All black / dark
 * variant="icon"   → Bag icon only (square)
 *
 * Reference: shopify.com/brand-assets
 */
function ShopifyLogo({
  variant = "color",
  width = 120,
  className,
  "aria-label": ariaLabel = "Shopify",
}: ShopifyLogoProps) {
  if (variant === "icon") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 109 124"
        width={width}
        height={width}
        aria-label={ariaLabel}
        role="img"
        className={className}
      >
        <ShopifyBag fill="#96bf48" />
      </svg>
    )
  }

  const bagFill =
    variant === "color" ? "#96bf48" :
    variant === "white" ? "#ffffff" : "#202223"

  const textFill =
    variant === "white" ? "#ffffff" : "#202223"

  // viewBox: 300 × 56 (bag ~56×56 + wordmark ~240×56)
  const height = Math.round((width * 56) / 300)

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 300 56"
      width={width}
      height={height}
      aria-label={ariaLabel}
      role="img"
      className={className}
    >
      {/* Shopping bag icon scaled to 56×56 */}
      <g transform="scale(0.51)">
        <ShopifyBag fill={bagFill} />
      </g>

      {/* "Shopify" wordmark — rendered as text with correct font */}
      <text
        x="66"
        y="40"
        fontFamily="'Helvetica Neue', Arial, sans-serif"
        fontWeight="500"
        fontSize="38"
        fill={textFill}
        letterSpacing="-0.5"
      >
        Shopify
      </text>
    </svg>
  )
}

/** Internal: Shopify bag SVG paths (viewBox 0 0 109 124) */
function ShopifyBag({ fill }: { fill: string }) {
  return (
    <>
      {/* Bag handle */}
      <path
        fill={fill}
        d="M74.7 14.8C72.9 6.3 67.1 0 60.1 0c-.4 0-.8 0-1.2.1-.2-.3-.5-.5-.8-.8C56.3-.9 53.6-.3 51.4 1.8c-4 3.7-5.9 9.5-6.6 15-.1.7-.1 1.4-.1 2.1h-.3c-3.7 0-7.3 2.6-8.7 6.2L23.4 111c-1.2 3.2.8 6.2 4.1 6.2h65c3.3 0 5.3-3 4.1-6.2L84.3 25.1c-1.4-3.6-5-6.2-8.7-6.2h-.3c-.2-1.5-.3-2.8-.6-4.1zm-18.1-11c1.2-1.1 2.4-1.5 3.2-1.2.2.1.4.2.5.4-2.2 1.2-4.3 3.2-5.9 5.9-.5-1.9-.2-3.8 2.2-5.1zm4.6 3.4c-1.9 3.4-3 8-3.4 12.8h-.7c.4-5 1.6-9.5 4.1-12.8zm-8.2 12.8c.5-5.9 2.2-11.4 5.5-14.9 1.5-1.6 3.3-2.6 5.1-2.9 1.4 3.1 2.3 7.1 2.7 11.7.1.7.1 1.5.1 2.2.4 1.2.5 2.5.5 3.9H53z"
      />
      {/* Bag body */}
      <path
        fill={fill}
        d="M76.4 22.5H32.6c-2.8 0-5.3 2-6.1 4.8L14.3 107c-.5 1.9.9 3.7 2.8 3.7h75c1.9 0 3.3-1.8 2.8-3.7L82.5 27.3c-.8-2.8-3.3-4.8-6.1-4.8z"
        opacity="0.5"
      />
    </>
  )
}

export { ShopifyLogo }
export type { ShopifyLogoProps, ShopifyLogoVariant }
