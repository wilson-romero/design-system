import type { Metadata } from "next"
import "./polaris-theme.css"

export const metadata: Metadata = {
  title: "Polaris Design System — @wilson-romero/polaris",
  description: "Shopify Polaris Design System showcase — tokens, components, A11y",
}

export default function PolarisLayout({
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
