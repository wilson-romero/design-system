import Link from "next/link"

export function GlobalNav() {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-zinc-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <Link href="/" className="font-bold text-zinc-900 text-sm hover:text-zinc-600 transition-colors">
          Design Systems
        </Link>
        <div className="flex items-center gap-1">
          <Link
            href="/"
            className="text-sm px-3 py-1.5 rounded-md text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 transition-colors"
          >
            Home
          </Link>
          <Link
            href="/compare"
            className="text-sm px-3 py-1.5 rounded-md text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 transition-colors"
          >
            Compare
          </Link>
          <Link
            href="/docs"
            className="text-sm px-3 py-1.5 rounded-md text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 transition-colors"
          >
            Docs
          </Link>
        </div>
      </div>
    </nav>
  )
}
