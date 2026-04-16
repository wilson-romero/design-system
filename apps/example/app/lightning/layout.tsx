import type { Metadata } from "next"
import "./lightning-theme.css"

export const metadata: Metadata = {
  title: "Lightning Design System — @wilson-romero/lightning",
  description: "Salesforce Lightning Design System showcase — enterprise, tokens, A11y",
}

export default function LightningLayout({
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
