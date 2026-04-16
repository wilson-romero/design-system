import type { Metadata } from "next"
import "./antd-theme.css"

export const metadata: Metadata = {
  title: "Ant Design — @wilson-romero/antd",
  description: "Ant Design System showcase — enterprise, React, Figma, open source",
}

export default function AntdLayout({
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
