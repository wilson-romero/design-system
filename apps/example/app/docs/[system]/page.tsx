import Link from "next/link"
import { notFound } from "next/navigation"
import { GlobalNav } from "../../components/nav"

const SYSTEMS: Record<string, {
  pkg: string
  name: string
  version: string
  accent: string
  desc: string
  colors: { token: string; value: string; usage: string }[]
  typefaceNote: string
  radiusNote: string
}> = {
  tigo: {
    pkg: "@wilson-romero/tigo",
    name: "TIGO",
    version: "0.1.0",
    accent: "#5060BA",
    desc: "TIGO brand design system built with Next.js 16, Tailwind CSS v4, and shadcn/ui. Brand: Azul #5060BA · Amarillo #FFD700 · Rojo #E61950 · Verde #41C800",
    colors: [
      { token: "--color-primary-500",   value: "#5060BA", usage: "Azul TIGO — primary brand" },
      { token: "--color-secondary-500", value: "#FFD700", usage: "Amarillo TIGO" },
      { token: "--color-success-500",   value: "#41C800", usage: "Verde TIGO" },
      { token: "--color-danger-500",    value: "#E61950", usage: "Rojo TIGO" },
    ],
    typefaceNote: "Cronos Pro (TIGO brand typeface, loaded via CDN)",
    radiusNote: "--radius: 0.5rem (8px rounded corners)",
  },
  base: {
    pkg: "@wilson-romero/base",
    name: "Base",
    version: "0.1.0",
    accent: "#276EF1",
    desc: "Inspired by Uber Base Web design tokens. Blue primary, functional layout.",
    colors: [
      { token: "--primary",    value: "hsl(219 88% 55%)", usage: "Blue 400 — interactive" },
      { token: "--destructive", value: "hsl(7 100% 44%)",  usage: "Red 400 — negative" },
      { token: "--success",    value: "hsl(148 96% 23%)", usage: "Green 500 — positive" },
    ],
    typefaceNote: "system-ui (UberMove is proprietary)",
    radiusNote: "--radius: 0.25rem (4px — clean functional)",
  },
  carbon: {
    pkg: "@wilson-romero/carbon",
    name: "IBM Carbon",
    version: "0.1.0",
    accent: "#0f62fe",
    desc: "Inspired by IBM Carbon design language. Sharp corners, IBM Blue, enterprise typography.",
    colors: [
      { token: "--primary",    value: "hsl(222 100% 40%)", usage: "Blue 60 — interactive" },
      { token: "--destructive", value: "hsl(355 75% 50%)",  usage: "Red 60 — error" },
      { token: "--success",    value: "hsl(136 65% 34%)",  usage: "Green 60 — success" },
    ],
    typefaceNote: "IBM Plex Sans (Google Fonts — open source)",
    radiusNote: "--radius: 0rem (sharp corners, no rounding)",
  },
  polaris: {
    pkg: "@wilson-romero/polaris",
    name: "Shopify Polaris",
    version: "0.1.0",
    accent: "#008060",
    desc: "Inspired by Shopify Polaris design tokens. Green primary, merchant-focused.",
    colors: [
      { token: "--primary",    value: "hsl(160 100% 25%)", usage: "Green — interactive" },
      { token: "--destructive", value: "hsl(12 83% 45%)",   usage: "Red — critical" },
      { token: "--warning",    value: "hsl(38 100% 66%)",  usage: "Yellow — warning" },
    ],
    typefaceNote: "Inter (Google Fonts — open source)",
    radiusNote: "--radius: 0.5rem (moderate rounding)",
  },
  spectrum: {
    pkg: "@wilson-romero/spectrum",
    name: "Adobe Spectrum",
    version: "0.1.0",
    accent: "#0265DC",
    desc: "Inspired by Adobe Spectrum design system. Blue primary, creative aesthetic.",
    colors: [
      { token: "--primary",    value: "hsl(240 96% 57%)", usage: "Blue 500 — interactive" },
      { token: "--destructive", value: "hsl(357 73% 59%)", usage: "Red 500 — negative" },
      { token: "--success",    value: "hsl(161 56% 40%)", usage: "Green 500 — positive" },
    ],
    typefaceNote: "Source Sans 3 (Google Fonts — created by Adobe)",
    radiusNote: "--radius: 0.5rem (rounded, creative aesthetic)",
  },
  primer: {
    pkg: "@wilson-romero/primer",
    name: "GitHub Primer",
    version: "0.1.0",
    accent: "#0969DA",
    desc: "Inspired by GitHub Primer design tokens. Developer-clean, system font stack.",
    colors: [
      { token: "--primary",    value: "hsl(212 92% 45%)", usage: "Blue — interactive" },
      { token: "--destructive", value: "hsl(357 82% 47%)", usage: "Red — danger" },
      { token: "--success",    value: "hsl(137 55% 36%)", usage: "Green — success" },
    ],
    typefaceNote: "system-ui (intentional — Primer uses system fonts)",
    radiusNote: "--radius: 0.375rem (6px — developer-clean)",
  },
  pajamas: {
    pkg: "@wilson-romero/pajamas",
    name: "GitLab Pajamas",
    version: "0.1.0",
    accent: "#6B4FBB",
    desc: "Inspired by GitLab Pajamas design system. Purple primary, open source focused.",
    colors: [
      { token: "--primary",    value: "hsl(264 44% 52%)", usage: "Purple — interactive" },
      { token: "--secondary",  value: "hsl(22 97% 58%)",  usage: "Orange — brand accent" },
      { token: "--destructive", value: "hsl(0 77% 49%)",   usage: "Red — danger" },
    ],
    typefaceNote: "GitLab Sans (open source, loaded from GitLab CDN)",
    radiusNote: "--radius: 0.25rem (4px — minimal rounding)",
  },
  lightning: {
    pkg: "@wilson-romero/lightning",
    name: "Lightning DS",
    version: "0.1.0",
    accent: "#0176D3",
    desc: "Inspired by Salesforce Lightning Design System. Blue primary, enterprise grade.",
    colors: [
      { token: "--primary",    value: "hsl(208 100% 41%)", usage: "Blue — interactive" },
      { token: "--destructive", value: "hsl(2 56% 48%)",    usage: "Red — error" },
      { token: "--success",    value: "hsl(150 96% 27%)",  usage: "Green — success" },
    ],
    typefaceNote: "system-ui (Salesforce Sans is proprietary)",
    radiusNote: "--radius: 0.25rem (4px — minimal rounding)",
  },
  antd: {
    pkg: "@wilson-romero/antd",
    name: "Ant Design",
    version: "0.1.0",
    accent: "#1677FF",
    desc: "Inspired by Ant Design token system. Blue primary, enterprise-grade Chinese design language.",
    colors: [
      { token: "--primary",    value: "hsl(215 100% 55%)", usage: "Blue — interactive" },
      { token: "--destructive", value: "hsl(358 100% 65%)", usage: "Red — error" },
      { token: "--success",    value: "hsl(100 68% 44%)",  usage: "Green — success" },
    ],
    typefaceNote: "-apple-system + PingFang SC (bilingual system stack)",
    radiusNote: "--radius: 0.375rem (6px — balanced enterprise)",
  },
}

const FONT_SCALE = [
  { token: "--font-size-tiny",    value: "12px" },
  { token: "--font-size-regular", value: "16px" },
  { token: "--font-size-large",   value: "20px" },
  { token: "--font-size-xl",      value: "24px" },
  { token: "--font-size-2xl",     value: "32px" },
  { token: "--font-size-3xl",     value: "40px" },
  { token: "--font-size-4xl",     value: "48px" },
  { token: "--font-size-5xl",     value: "56px" },
]

export default async function SystemDocsPage({
  params,
}: {
  params: Promise<{ system: string }>
}) {
  const { system } = await params
  const data = SYSTEMS[system]
  if (!data) notFound()

  return (
    <>
      <GlobalNav />

      <main className="max-w-3xl mx-auto px-6 py-16 space-y-12">

        {/* Header */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div
              className="w-10 h-10 rounded-lg flex-shrink-0"
              style={{ backgroundColor: data.accent }}
            />
            <div>
              <h1 className="text-2xl font-bold text-zinc-900">{data.name}</h1>
              <p className="text-sm font-mono text-zinc-500">{data.pkg} · v{data.version}</p>
            </div>
          </div>
          <p className="text-zinc-500 leading-relaxed">{data.desc}</p>
        </div>

        {/* Step 1: Install */}
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-zinc-900">1. Install</h2>
          <pre className="bg-zinc-900 text-zinc-100 rounded-lg px-5 py-4 text-sm font-mono overflow-x-auto">
            <code>{`npm install ${data.pkg}`}</code>
          </pre>
          <p className="text-xs text-zinc-400">Or with pnpm: <code className="font-mono">pnpm add {data.pkg}</code></p>
        </section>

        {/* Step 2: Setup */}
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-zinc-900">2. Setup</h2>
          <p className="text-sm text-zinc-500">Import global styles in your <code className="font-mono bg-zinc-100 px-1 rounded">layout.tsx</code>:</p>
          <pre className="bg-zinc-900 text-zinc-100 rounded-lg px-5 py-4 text-sm font-mono overflow-x-auto">
            <code>{`import "${data.pkg}/styles"`}</code>
          </pre>
          <p className="text-sm text-zinc-500">Or in your CSS entry file:</p>
          <pre className="bg-zinc-900 text-zinc-100 rounded-lg px-5 py-4 text-sm font-mono overflow-x-auto">
            <code>{`@import "tailwindcss";\n@import "${data.pkg}/styles";`}</code>
          </pre>
        </section>

        {/* Step 3: Usage */}
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-zinc-900">3. Use components</h2>
          <pre className="bg-zinc-900 text-zinc-100 rounded-lg px-5 py-4 text-sm font-mono overflow-x-auto">
            <code>{`import { Button, Input, Card, CardContent } from "${data.pkg}"

export default function Example() {
  return (
    <Card>
      <CardContent className="pt-6 space-y-4">
        <Input placeholder="Enter text..." />
        <Button>Submit</Button>
      </CardContent>
    </Card>
  )
}`}</code>
          </pre>
        </section>

        {/* Color tokens */}
        <section className="space-y-4">
          <h2 className="text-lg font-bold text-zinc-900">Color tokens</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-zinc-200 rounded-lg overflow-hidden">
              <thead className="bg-zinc-50 border-b border-zinc-200">
                <tr>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-zinc-500 uppercase tracking-wide">Token</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-zinc-500 uppercase tracking-wide">Value</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-zinc-500 uppercase tracking-wide">Usage</th>
                </tr>
              </thead>
              <tbody>
                {data.colors.map((c, i) => (
                  <tr key={c.token} className={i % 2 === 0 ? "bg-white" : "bg-zinc-50"}>
                    <td className="px-4 py-3 font-mono text-xs text-zinc-700">{c.token}</td>
                    <td className="px-4 py-3 font-mono text-xs text-zinc-500">{c.value}</td>
                    <td className="px-4 py-3 text-xs text-zinc-500">{c.usage}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Font scale */}
        <section className="space-y-4">
          <h2 className="text-lg font-bold text-zinc-900">Font size scale</h2>
          <p className="text-sm text-zinc-500">
            All packages inherit the 8-step scale from <code className="font-mono bg-zinc-100 px-1 rounded">@wilson-romero/tigo</code> — multiples of 4px.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-zinc-200 rounded-lg overflow-hidden">
              <thead className="bg-zinc-50 border-b border-zinc-200">
                <tr>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-zinc-500 uppercase tracking-wide">Token</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-zinc-500 uppercase tracking-wide">Value</th>
                  <th className="px-4 py-3 text-xs font-semibold text-zinc-500 uppercase tracking-wide text-left">Preview</th>
                </tr>
              </thead>
              <tbody>
                {FONT_SCALE.map((f, i) => (
                  <tr key={f.token} className={i % 2 === 0 ? "bg-white" : "bg-zinc-50"}>
                    <td className="px-4 py-3 font-mono text-xs text-zinc-700">{f.token}</td>
                    <td className="px-4 py-3 font-mono text-xs text-zinc-500">{f.value}</td>
                    <td className="px-4 py-2 text-zinc-800" style={{ fontSize: f.value, lineHeight: 1.2 }}>Aa</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Extra info */}
        <section className="border border-zinc-200 rounded-lg p-6 bg-zinc-50 space-y-2">
          <h2 className="text-sm font-bold text-zinc-900">System details</h2>
          <p className="text-xs text-zinc-500">
            <span className="font-semibold">Typeface:</span> {data.typefaceNote}
          </p>
          <p className="text-xs text-zinc-500">
            <span className="font-semibold">Border radius:</span> {data.radiusNote}
          </p>
          <p className="text-xs text-zinc-500">
            <span className="font-semibold">Component height:</span> 40px default (h-10 · 8-point grid)
          </p>
        </section>

        {/* Navigation */}
        <div className="flex items-center justify-between pt-4 border-t border-zinc-200">
          <Link href="/docs" className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors">
            ← All packages
          </Link>
          <Link
            href={`/${system}`}
            className="text-sm px-4 py-2 rounded-lg text-white font-medium hover:opacity-90 transition-opacity"
            style={{ backgroundColor: data.accent }}
          >
            View live showcase →
          </Link>
        </div>

      </main>
    </>
  )
}

export function generateStaticParams() {
  return Object.keys(SYSTEMS).map((system) => ({ system }))
}
