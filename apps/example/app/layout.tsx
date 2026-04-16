import type { Metadata } from "next"
import { IBM_Plex_Sans, IBM_Plex_Mono, Inter, Source_Sans_3 } from "next/font/google"
import "./globals.css"

// IBM Plex Sans — IBM Carbon Design System (free, open source)
const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-ibm-plex-sans",
  display: "swap",
})

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
})

// Inter — Shopify Polaris (free, Google Fonts)
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

// Source Sans 3 — Adobe Spectrum substitute (Adobe's own open-source font)
const sourceSans3 = Source_Sans_3({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-source-sans-3",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Design System Compare",
  description: "Showcase de componentes del Design System de TIGO",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="es"
      className={[
        "h-full antialiased",
        ibmPlexSans.variable,
        ibmPlexMono.variable,
        inter.variable,
        sourceSans3.variable,
      ].join(" ")}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  )
}
