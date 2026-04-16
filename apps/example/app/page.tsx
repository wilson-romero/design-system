import Link from "next/link"
import { GlobalNav } from "./components/nav"

const PACKAGES = [
  { id: "tigo",      pkg: "@wilson-romero/tigo",      name: "TIGO",           version: "0.1.0", accent: "#5060BA", desc: "TIGO brand design system — Azul, Amarillo, Rojo, Verde" },
  { id: "base",      pkg: "@wilson-romero/base",       name: "Base",           version: "0.1.0", accent: "#276EF1", desc: "Inspired by Uber Base Web design tokens" },
  { id: "carbon",    pkg: "@wilson-romero/carbon",     name: "IBM Carbon",     version: "0.1.0", accent: "#0f62fe", desc: "Inspired by IBM Carbon design language" },
  { id: "polaris",   pkg: "@wilson-romero/polaris",    name: "Shopify Polaris",version: "0.1.0", accent: "#008060", desc: "Inspired by Shopify Polaris design tokens" },
  { id: "spectrum",  pkg: "@wilson-romero/spectrum",   name: "Adobe Spectrum", version: "0.1.0", accent: "#0265DC", desc: "Inspired by Adobe Spectrum design system" },
  { id: "primer",    pkg: "@wilson-romero/primer",     name: "GitHub Primer",  version: "0.1.0", accent: "#0969DA", desc: "Inspired by GitHub Primer design tokens" },
  { id: "pajamas",   pkg: "@wilson-romero/pajamas",    name: "GitLab Pajamas", version: "0.1.0", accent: "#6B4FBB", desc: "Inspired by GitLab Pajamas design system" },
  { id: "lightning", pkg: "@wilson-romero/lightning",  name: "Lightning DS",   version: "0.1.0", accent: "#0176D3", desc: "Inspired by Salesforce Lightning Design System" },
  { id: "antd",      pkg: "@wilson-romero/antd",       name: "Ant Design",     version: "0.1.0", accent: "#1677FF", desc: "Inspired by Ant Design token system" },
]

export default function LandingPage() {
  return (
    <>
      <GlobalNav />

      <main className="max-w-5xl mx-auto px-6 py-16 space-y-16">

        {/* Hero */}
        <section className="text-center space-y-6">
          <h1 className="text-5xl font-bold text-zinc-900 leading-tight">
            Design System Monorepo
          </h1>
          <p className="text-xl text-zinc-500 max-w-2xl mx-auto">
            9 npm packages — each a drop-in React component library with Tailwind CSS v4 tokens.
            Compare them side by side or follow per-package installation guides.
          </p>
          <div className="flex items-center justify-center gap-4 pt-2">
            <Link
              href="/compare"
              className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-900 text-white text-sm font-medium rounded-lg hover:bg-zinc-700 transition-colors"
            >
              Compare all systems
            </Link>
            <Link
              href="/docs"
              className="inline-flex items-center gap-2 px-6 py-3 border border-zinc-300 text-zinc-700 text-sm font-medium rounded-lg hover:bg-zinc-50 transition-colors"
            >
              Installation docs
            </Link>
          </div>
        </section>

        {/* Packages grid */}
        <section>
          <h2 className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-6">
            Available packages
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {PACKAGES.map((pkg) => (
              <Link
                key={pkg.id}
                href={`/docs/${pkg.id}`}
                className="group border border-zinc-200 rounded-lg p-5 hover:border-zinc-400 hover:shadow-md transition-all"
              >
                <div className="flex items-center justify-between mb-3">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: pkg.accent }}
                  />
                  <span className="text-xs font-mono text-zinc-400">v{pkg.version}</span>
                </div>
                <p className="font-semibold text-zinc-900 text-sm group-hover:underline">
                  {pkg.name}
                </p>
                <p className="text-xs font-mono text-zinc-500 mb-2">{pkg.pkg}</p>
                <p className="text-xs text-zinc-500 leading-relaxed">{pkg.desc}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* Quick start */}
        <section className="border border-zinc-200 rounded-lg p-8 bg-zinc-50">
          <h2 className="text-sm font-bold text-zinc-900 mb-4">Quick start</h2>
          <pre className="text-sm font-mono text-zinc-700 space-y-1 overflow-x-auto">
            <code>{`npm install @wilson-romero/tigo`}</code>
          </pre>
          <p className="text-xs text-zinc-500 mt-4">
            Then import the styles in your{" "}
            <code className="font-mono bg-zinc-200 px-1 rounded">layout.tsx</code>:
          </p>
          <pre className="mt-2 text-sm font-mono text-zinc-700 overflow-x-auto">
            <code>{`import "@wilson-romero/tigo/styles"`}</code>
          </pre>
        </section>

      </main>

      <footer className="border-t border-zinc-200 py-8 mt-8">
        <p className="text-center text-xs text-zinc-400">
          Design System Monorepo — {PACKAGES.map((p) => p.name).join(" · ")}
        </p>
      </footer>
    </>
  )
}
