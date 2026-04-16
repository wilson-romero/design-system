import * as React from "react"

type GitLabLogoVariant = "color" | "white" | "black"

interface GitLabLogoProps {
  variant?: GitLabLogoVariant
  width?: number
  className?: string
  "aria-label"?: string
}

/**
 * GitLab Pajamas Design System — tanuki (fox) mark.
 *
 * variant="color"  → GitLab orange #FC6D26 (default)
 * variant="white"  → White on transparent
 * variant="black"  → Black on transparent
 */
function GitLabLogo({
  variant = "color",
  width = 80,
  className,
  "aria-label": ariaLabel = "GitLab Pajamas Design System",
}: GitLabLogoProps) {
  const fills: Record<GitLabLogoVariant, string> = {
    color: "#FC6D26",
    white: "#ffffff",
    black: "#000000",
  }

  const darkFill: Record<GitLabLogoVariant, string> = {
    color: "#E24329",
    white: "#cccccc",
    black: "#222222",
  }

  const lightFill: Record<GitLabLogoVariant, string> = {
    color: "#FCA326",
    white: "#eeeeee",
    black: "#444444",
  }

  const fill = fills[variant]
  const dark = darkFill[variant]
  const light = lightFill[variant]

  // viewBox 64 × 24
  const height = Math.round((width * 24) / 64)

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 24"
      width={width}
      height={height}
      aria-label={ariaLabel}
      role="img"
      className={className}
    >
      {/* GitLab tanuki — simplified geometric fox mark */}
      {/* Main body */}
      <path d="M12 22L7 8l5 3 3-9 3 9 5-3z" fill={fill} />
      {/* Left ear */}
      <path d="M7 8L4 2 2 8 7 8z" fill={dark} />
      {/* Right ear */}
      <path d="M17 8l3-6 2 6z" fill={dark} />
      {/* Left cheek */}
      <path d="M7 8L2 8 7 14z" fill={light} />
      {/* Right cheek */}
      <path d="M17 8l5 0-5 6z" fill={light} />
      {/* "GitLab" wordmark */}
      <text
        x="28"
        y="17"
        fontSize="11"
        fontFamily="'GitLab Sans', system-ui, sans-serif"
        fontWeight="700"
        fill={variant === "color" ? "#303030" : fill}
        letterSpacing="-0.1"
      >
        GitLab
      </text>
    </svg>
  )
}

export { GitLabLogo }
export type { GitLabLogoProps, GitLabLogoVariant }
