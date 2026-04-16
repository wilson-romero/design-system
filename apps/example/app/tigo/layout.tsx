import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "TIGO Design System — @wilson-romero/tigo",
  description: "Showcase de componentes del Design System de TIGO",
}

export default function TigoLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
