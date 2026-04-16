import type { Metadata } from "next"
import "./base-theme.css"

export const metadata: Metadata = {
  title: "Base Design System — @wilson-romero/base",
  description: "Uber Base Design System showcase — accessibility-first, tokens, React",
}

export default function BaseLayout({
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
