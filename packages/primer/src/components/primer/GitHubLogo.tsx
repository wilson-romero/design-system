import * as React from "react"

type GitHubLogoVariant = "color" | "white" | "black"

interface GitHubLogoProps {
  variant?: GitHubLogoVariant
  width?: number
  className?: string
  "aria-label"?: string
}

/**
 * GitHub Primer Design System — octocat mark + wordmark.
 *
 * variant="color"  → GitHub dark #24292F (default)
 * variant="white"  → White on transparent
 * variant="black"  → Black on transparent
 */
function GitHubLogo({
  variant = "color",
  width = 80,
  className,
  "aria-label": ariaLabel = "GitHub Primer Design System",
}: GitHubLogoProps) {
  const fills: Record<GitHubLogoVariant, string> = {
    color: "#24292F",
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
      {/* GitHub octocat mark — simplified */}
      <path
        d="M13 1C6.37 1 1 6.37 1 13c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58
           0-.28-.01-1.04-.01-2.03-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76
           -1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.49.99
           .11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22
           -.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4
           c1.02 0 2.04.14 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.65.24 2.87.12 3.17
           .77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.93.43.37.81 1.1.81 2.22
           0 1.6-.01 2.9-.01 3.29 0 .32.22.69.83.58A12.01 12.01 0 0 0 25 13
           C25 6.37 19.63 1 13 1z"
        fill={fill}
      />
      {/* "Primer" text */}
      <text
        x="32"
        y="18"
        fontSize="13"
        fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif"
        fontWeight="600"
        fill={fill}
        letterSpacing="-0.2"
      >
        Primer
      </text>
    </svg>
  )
}

export { GitHubLogo }
export type { GitHubLogoProps, GitHubLogoVariant }
