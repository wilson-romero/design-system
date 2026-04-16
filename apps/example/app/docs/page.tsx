import Link from "next/link"
import { GlobalNav } from "../components/nav"

const PACKAGES = [
  { id: "tigo",      pkg: "@wilson-romero/tigo",      name: "TIGO",           version: "0.1.0", accent: "#5060BA", desc: "TIGO brand design system — Azul, Amarillo, Rojo, Verde" },
  { id: "base",      pkg: "@wilson-romero/base",       name: "Base",           version: "0.1.0", accent: "#276EF1", desc: "Inspired by Uber Base Web" },
  { id: "carbon",    pkg: "@wilson-romero/carbon",     name: "IBM Carbon",     version: "0.1.0", accent: "#0f62fe", desc: "Inspired by IBM Carbon" },
  { id: "polaris",   pkg: "@wilson-romero/polaris",    name: "Shopify Polaris",version: "0.1.0", accent: "#008060", desc: "Inspired by Shopify Polaris" },
  { id: "spectrum",  pkg: "@wilson-romero/spectrum",   name: "Adobe Spectrum", version: "0.1.0", accent: "#0265DC", desc: "Inspired by Adobe Spectrum" },
  { id: "primer",    pkg: "@wilson-romero/primer",     name: "GitHub Primer",  version: "0.1.0", accent: "#0969DA", desc: "Inspired by GitHub Primer" },
  { id: "pajamas",   pkg: "@wilson-romero/pajamas",    name: "GitLab Pajamas", version: "0.1.0", accent: "#6B4FBB", desc: "Inspired by GitLab Pajamas" },
  { id: "lightning", pkg: "@wilson-romero/lightning",  name: "Lightning DS",   version: "0.1.0", accent: "#0176D3", desc: "Inspired by Salesforce Lightning" },
  { id: "antd",      pkg: "@wilson-romero/antd",       name: "Ant Design",     version: "0.1.0", accent: "#1677FF", desc: "Inspired by Ant Design" },
]

export default function DocsIndexPage() {
  return (
    <>
      <GlobalNav />

      <main className="max-w-5xl mx-auto px-6 py-16 space-y-12">

        <div>
          <h1 className="text-3xl font-bold text-zinc-900 mb-2">Documentation</h1>
          <p className="text-zinc-500">
            Installation and setup guide for each of the 9 design system packages.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {PACKAGES.map((pkg) => (
            <Link
              key={pkg.id}
              href={`/docs/${pkg.id}`}
              className="group border border-zinc-200 rounded-lg p-6 hover:border-zinc-400 hover:shadow-md transition-all"
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-8 h-8 rounded-md flex-shrink-0"
                  style={{ backgroundColor: pkg.accent }}
                />
                <div>
                  <p className="font-semibold text-zinc-900 text-sm group-hover:underline">
                    {pkg.name}
                  </p>
                  <p className="text-xs font-mono text-zinc-400">v{pkg.version}</p>
                </div>
              </div>
              <p className="text-xs font-mono text-zinc-500 mb-2">{pkg.pkg}</p>
              <p className="text-xs text-zinc-500 leading-relaxed">{pkg.desc}</p>
              <p className="mt-4 text-xs text-zinc-400 group-hover:text-zinc-600 transition-colors">
                View installation guide →
              </p>
            </Link>
          ))}
        </div>

      </main>

      <footer className="border-t border-zinc-200 py-8 mt-8">
        <p className="text-center text-xs text-zinc-400">
          Design System Monorepo — 9 packages · MIT License
        </p>
      </footer>
    </>
  )
}
