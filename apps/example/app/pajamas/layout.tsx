import type { Metadata } from "next"
import "./pajamas-theme.css"

export const metadata: Metadata = {
  title: "Pajamas Design System — @wilson-romero/pajamas",
  description: "GitLab Pajamas Design System showcase — open source, community, tokens",
}

export default function PajamasLayout({
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
