import type { Metadata } from "next"
import "./spectrum-theme.css"

export const metadata: Metadata = {
  title: "Spectrum Design System — @wilson-romero/spectrum",
  description: "Adobe Spectrum Design System showcase — creative, tokens, A11y, multi-platform",
}

export default function SpectrumLayout({
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
