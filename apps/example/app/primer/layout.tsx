import type { Metadata } from "next"
import "./primer-theme.css"

export const metadata: Metadata = {
  title: "Primer Design System — @wilson-romero/primer",
  description: "GitHub Primer Design System showcase — developer-first, open source, tokens",
}

export default function PrimerLayout({
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
