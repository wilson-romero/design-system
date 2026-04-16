import type { Metadata } from "next"
import "./carbon-theme.css"

export const metadata: Metadata = {
  title: "Carbon Design System — @wilson-romero/carbon",
  description: "IBM Carbon Design System showcase — tokens, components, A11y",
}

export default function CarbonLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {children}
    </div>
  )
}
