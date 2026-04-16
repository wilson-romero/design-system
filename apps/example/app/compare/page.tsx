"use client"

import {
  Button,
  Badge,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  Input,
  Label,
  Textarea,
  Checkbox,
  Switch,
  Progress,
  Separator,
  Alert,
  AlertTitle,
  AlertDescription,
  Avatar,
  AvatarFallback,
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
  Skeleton,
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
  TooltipContent,
  RadioGroup,
  RadioGroupItem,
  Toaster,
} from "@wilson-romero/tigo"
import { TigoLogo } from "@wilson-romero/tigo"
import { IBMLogo } from "@wilson-romero/carbon"
import { ShopifyLogo } from "@wilson-romero/polaris"
import { SalesforceLogo } from "@wilson-romero/lightning"
import { GitHubLogo } from "@wilson-romero/primer"
import { GitLabLogo } from "@wilson-romero/pajamas"
import { AntDesignLogo } from "@wilson-romero/antd"
import { AdobeLogo } from "@wilson-romero/spectrum"
import { UberLogo } from "@wilson-romero/base"
import Link from "next/link"
import { useState } from "react"

// ─── System metadata ──────────────────────────────────────────────────────────
const SYSTEMS = [
  {
    id: "tigo",
    href: "/tigo",
    theme: "theme-tigo",
    name: "TIGO",
    label: "@wilson-romero/tigo",
    accent: "#5060BA",
    tags: ["Next.js 16", "Tailwind v4", "shadcn/ui"],
    typefaceNote: "Cronos Pro — fuente propietaria TIGO, cargada vía CDN",
    radiusNote: "--radius: 0.5rem · rounded corners",
    logo: <TigoLogo variant="color" width={72} />,
  },
  {
    id: "carbon",
    href: "/carbon",
    theme: "theme-carbon",
    name: "IBM Carbon",
    label: "@wilson-romero/carbon",
    accent: "#0f62fe",
    tags: ["React", "Tokens", "A11y", "Enterprise"],
    typefaceNote: "IBM Plex Sans — libre y open source, cargada vía Google Fonts",
    radiusNote: "--radius: 0rem · sharp, no rounding",
    logo: <IBMLogo variant="color" width={64} />,
  },
  {
    id: "polaris",
    href: "/polaris",
    theme: "theme-polaris",
    name: "Shopify Polaris",
    label: "@wilson-romero/polaris",
    accent: "#008060",
    tags: ["React", "Tokens", "Figma", "White-label"],
    typefaceNote: "Inter — libre y open source, cargada vía Google Fonts",
    radiusNote: "--radius: 0.5rem · moderate rounding",
    logo: <ShopifyLogo variant="color" width={100} />,
  },
  {
    id: "lightning",
    href: "/lightning",
    theme: "theme-lightning",
    name: "Lightning DS",
    label: "@wilson-romero/lightning",
    accent: "#0176D3",
    tags: ["Tokens", "A11y", "Enterprise"],
    typefaceNote: "Salesforce Sans — propietaria (no pública), usa system-ui",
    radiusNote: "--radius: 0.25rem · minimal rounding (4px)",
    logo: <SalesforceLogo variant="color" width={72} />,
  },
  {
    id: "primer",
    href: "/primer",
    theme: "theme-primer",
    name: "Primer",
    label: "@wilson-romero/primer",
    accent: "#0969DA",
    tags: ["React", "Open Source", "Tokens"],
    typefaceNote: "System font stack — GitHub Primer usa system-ui intencionalmente",
    radiusNote: "--radius: 0.375rem · 6px developer-clean",
    logo: <GitHubLogo variant="color" width={80} />,
  },
  {
    id: "pajamas",
    href: "/pajamas",
    theme: "theme-pajamas",
    name: "Pajamas",
    label: "@wilson-romero/pajamas",
    accent: "#6B4FBB",
    tags: ["Open Source", "Tokens", "A11y"],
    typefaceNote: "GitLab Sans — open source, cargada desde CDN de GitLab",
    radiusNote: "--radius: 0.25rem · minimal rounding (4px)",
    logo: <GitLabLogo variant="color" width={80} />,
  },
  {
    id: "antd",
    href: "/antd",
    theme: "theme-antd",
    name: "Ant Design",
    label: "@wilson-romero/antd",
    accent: "#1677FF",
    tags: ["React", "Figma", "Open Source", "Enterprise"],
    typefaceNote: "-apple-system + PingFang SC — stack system bilingüe (correcto)",
    radiusNote: "--radius: 0.375rem · 6px balanced enterprise",
    logo: <AntDesignLogo variant="color" width={88} />,
  },
  {
    id: "spectrum",
    href: "/spectrum",
    theme: "theme-spectrum",
    name: "Spectrum",
    label: "@wilson-romero/spectrum",
    accent: "#0265DC",
    tags: ["React", "Tokens", "A11y", "Open Source"],
    typefaceNote: "Adobe Clean propietaria → Source Sans 3 (Google Fonts, creada por Adobe)",
    radiusNote: "--radius: 0.5rem · rounded creative aesthetic",
    logo: <AdobeLogo variant="color" width={88} />,
  },
  {
    id: "base",
    href: "/base",
    theme: "theme-base",
    name: "Base",
    label: "@wilson-romero/base",
    accent: "#276EF1",
    tags: ["React", "A11y", "Tokens"],
    typefaceNote: "UberMove — propietaria (no pública), usa system-ui",
    radiusNote: "--radius: 0.25rem · clean functional (4px)",
    logo: <UberLogo variant="color" width={72} />,
  },
]

const N = SYSTEMS.length
const MIN_COL_W = 280

// ─── Reusable section header ──────────────────────────────────────────────────
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="col-span-full pt-10 pb-2 border-b border-zinc-200">
      <h2 className="text-xs font-bold uppercase tracking-widest text-zinc-400">{children}</h2>
    </div>
  )
}

// ─── Per-theme panel ──────────────────────────────────────────────────────────
function ThemePanel({
  theme,
  children,
}: {
  theme: string
  children: React.ReactNode
}) {
  return (
    <div className={`${theme} bg-[hsl(var(--background))] text-[hsl(var(--foreground))] rounded-lg border border-[hsl(var(--border))] p-5 space-y-5`}>
      {children}
    </div>
  )
}

// ─── Main page ────────────────────────────────────────────────────────────────
export default function ComparePage() {
  const [progress, setProgress] = useState(65)
  const [checked, setChecked] = useState(false)
  const [switched, setSwitched] = useState(true)

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: `repeat(${N}, minmax(${MIN_COL_W}px, 1fr))`,
  }

  return (
    <TooltipProvider>
      <Toaster />

      {/* ── Top bar ── */}
      <header className="sticky top-0 z-50 bg-white border-b border-zinc-200 px-6 py-3 flex items-center justify-between shadow-sm">
        <div>
          <p className="font-bold text-zinc-900 text-sm">Design System Compare</p>
          <p className="text-xs text-zinc-400">
            {SYSTEMS.map((s) => s.name).join(" · ")}
          </p>
        </div>
        <div className="flex flex-wrap gap-2 justify-end max-w-2xl">
          {SYSTEMS.map((s) => (
            <span
              key={s.id}
              className="text-xs px-2 py-1 rounded-full font-mono text-white"
              style={{ backgroundColor: s.accent }}
            >
              {s.label}
            </span>
          ))}
        </div>
      </header>

      <main className="px-6 py-8">

        {/* ── Scrollable comparison area ── */}
        <div className="overflow-x-auto pb-8" style={{ minWidth: "100%" }}>
          <div style={{ minWidth: `${N * MIN_COL_W}px` }}>

            {/* ── Column headers — clickable, navigate to each system's showcase ── */}
            <div className="gap-5 mb-2" style={gridStyle}>
              {SYSTEMS.map((s) => (
                <Link
                  key={s.id}
                  href={s.href}
                  className={`${s.theme} bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-lg p-5 block group transition-shadow hover:shadow-md`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    {s.logo}
                  </div>
                  <p className="font-semibold text-[hsl(var(--foreground))] text-sm group-hover:underline">
                    {s.name}
                  </p>
                  <p className="text-xs text-[hsl(var(--muted-foreground))] mb-3 flex items-center gap-1">
                    {s.label}
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {s.tags.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] px-2 py-0.5 rounded-full border border-[hsl(var(--border))] text-[hsl(var(--muted-foreground))]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </Link>
              ))}
            </div>

            {/* ════════════════════════════════════════════════════════════════════
                Sections — each rendered as N-col grid using the system's theme
            ════════════════════════════════════════════════════════════════════ */}
            <div className="gap-5" style={gridStyle}>

              {/* ── Buttons ── */}
              <SectionLabel>Buttons</SectionLabel>
              {SYSTEMS.map((s) => (
                <ThemePanel key={s.id} theme={s.theme}>
                  <div className="flex flex-col gap-2">
                    <Button className="w-full">Primary</Button>
                    <Button variant="secondary" className="w-full">Secondary</Button>
                    <Button variant="outline" className="w-full">Outline</Button>
                    <Button variant="destructive" className="w-full">Destructive</Button>
                    <Button variant="ghost" className="w-full">Ghost</Button>
                    <Button disabled className="w-full">Disabled</Button>
                  </div>
                  <div className="flex gap-2 pt-1">
                    <Button size="sm">Small</Button>
                    <Button size="default">Default</Button>
                    <Button size="lg">Large</Button>
                  </div>
                </ThemePanel>
              ))}

              {/* ── Badges ── */}
              <SectionLabel>Badges</SectionLabel>
              {SYSTEMS.map((s) => (
                <ThemePanel key={s.id} theme={s.theme}>
                  <div className="flex flex-wrap gap-2">
                    <Badge>Default</Badge>
                    <Badge variant="secondary">Secondary</Badge>
                    <Badge variant="outline">Outline</Badge>
                    <Badge variant="destructive">Error</Badge>
                  </div>
                </ThemePanel>
              ))}

              {/* ── Alerts ── */}
              <SectionLabel>Alerts / Banners</SectionLabel>
              {SYSTEMS.map((s) => (
                <ThemePanel key={s.id} theme={s.theme}>
                  <Alert>
                    <AlertTitle>Information</AlertTitle>
                    <AlertDescription>
                      Your changes have been saved successfully.
                    </AlertDescription>
                  </Alert>
                  <Alert variant="destructive">
                    <AlertTitle>Error</AlertTitle>
                    <AlertDescription>
                      Action failed. Please try again.
                    </AlertDescription>
                  </Alert>
                </ThemePanel>
              ))}

              {/* ── Cards ── */}
              <SectionLabel>Cards</SectionLabel>
              {SYSTEMS.map((s) => (
                <ThemePanel key={s.id} theme={s.theme}>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-sm">Pro Plan</CardTitle>
                      <CardDescription className="text-xs">Best value for teams</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-2xl font-bold text-[hsl(var(--primary))]">$79</p>
                      <p className="text-xs text-[hsl(var(--muted-foreground))]">per month</p>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full" size="sm">Get started</Button>
                    </CardFooter>
                  </Card>
                </ThemePanel>
              ))}

              {/* ── Form inputs ── */}
              <SectionLabel>Form inputs</SectionLabel>
              {SYSTEMS.map((s) => (
                <ThemePanel key={s.id} theme={s.theme}>
                  <div className="space-y-3">
                    <div className="space-y-1">
                      <Label className="text-xs">Full name</Label>
                      <Input placeholder="John Doe" />
                    </div>
                    <div className="space-y-1">
                      <Label className="text-xs">Role</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select role…" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="eng">Engineer</SelectItem>
                          <SelectItem value="design">Designer</SelectItem>
                          <SelectItem value="pm">Product Manager</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-1">
                      <Label className="text-xs">Notes</Label>
                      <Textarea placeholder="Additional context…" rows={2} />
                    </div>
                    <div className="flex items-center gap-2">
                      <Checkbox
                        id={`chk-${s.id}`}
                        checked={checked}
                        onCheckedChange={(v) => setChecked(!!v)}
                      />
                      <Label htmlFor={`chk-${s.id}`} className="text-xs">Accept terms</Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <Switch
                        id={`sw-${s.id}`}
                        checked={switched}
                        onCheckedChange={setSwitched}
                      />
                      <Label htmlFor={`sw-${s.id}`} className="text-xs">Notifications</Label>
                    </div>
                  </div>
                </ThemePanel>
              ))}

              {/* ── Radio group ── */}
              <SectionLabel>Radio group</SectionLabel>
              {SYSTEMS.map((s) => (
                <ThemePanel key={s.id} theme={s.theme}>
                  <RadioGroup defaultValue="opt-a">
                    {["Option A", "Option B", "Option C"].map((opt) => (
                      <div key={opt} className="flex items-center gap-2">
                        <RadioGroupItem value={opt} id={`${s.id}-${opt}`} />
                        <Label htmlFor={`${s.id}-${opt}`} className="text-sm">{opt}</Label>
                      </div>
                    ))}
                  </RadioGroup>
                </ThemePanel>
              ))}

              {/* ── Progress & skeleton ── */}
              <SectionLabel>Progress · Skeleton</SectionLabel>
              {SYSTEMS.map((s) => (
                <ThemePanel key={s.id} theme={s.theme}>
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs text-[hsl(var(--muted-foreground))]">
                      <span>Loading…</span><span>{progress}%</span>
                    </div>
                    <Progress value={progress} />
                    <div className="flex gap-2 pt-1">
                      <Button size="sm" variant="outline" onClick={() => setProgress(Math.max(0, progress - 10))}>−</Button>
                      <Button size="sm" variant="outline" onClick={() => setProgress(Math.min(100, progress + 10))}>+</Button>
                    </div>
                  </div>
                  <Separator />
                  <div className="space-y-2">
                    <Skeleton className="h-3 w-3/4" />
                    <Skeleton className="h-3 w-1/2" />
                    <Skeleton className="h-3 w-2/3" />
                  </div>
                </ThemePanel>
              ))}

              {/* ── Tabs ── */}
              <SectionLabel>Tabs</SectionLabel>
              {SYSTEMS.map((s) => (
                <ThemePanel key={s.id} theme={s.theme}>
                  <Tabs defaultValue="one">
                    <TabsList className="w-full">
                      <TabsTrigger value="one" className="flex-1">Overview</TabsTrigger>
                      <TabsTrigger value="two" className="flex-1">Details</TabsTrigger>
                      <TabsTrigger value="three" className="flex-1">Settings</TabsTrigger>
                    </TabsList>
                    <TabsContent value="one" className="pt-3 text-sm text-[hsl(var(--muted-foreground))]">
                      Overview content goes here.
                    </TabsContent>
                    <TabsContent value="two" className="pt-3 text-sm text-[hsl(var(--muted-foreground))]">
                      Detailed information here.
                    </TabsContent>
                    <TabsContent value="three" className="pt-3 text-sm text-[hsl(var(--muted-foreground))]">
                      Configuration options.
                    </TabsContent>
                  </Tabs>
                </ThemePanel>
              ))}

              {/* ── Avatars & Tooltips ── */}
              <SectionLabel>Avatars · Tooltips</SectionLabel>
              {SYSTEMS.map((s) => (
                <ThemePanel key={s.id} theme={s.theme}>
                  <div className="flex items-center gap-3">
                    {["WR", "JD", "AM", "TS"].map((ini) => (
                      <Tooltip key={ini}>
                        <TooltipTrigger asChild>
                          <Avatar className="cursor-default">
                            <AvatarFallback className="bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] text-xs">
                              {ini}
                            </AvatarFallback>
                          </Avatar>
                        </TooltipTrigger>
                        <TooltipContent>User {ini}</TooltipContent>
                      </Tooltip>
                    ))}
                  </div>
                </ThemePanel>
              ))}

              {/* ── Typography ── */}
              <SectionLabel>Typography</SectionLabel>
              {SYSTEMS.map((s) => (
                <ThemePanel key={s.id} theme={s.theme}>
                  <div className="space-y-1">
                    <p className="text-2xl font-bold text-[hsl(var(--foreground))]">Heading Bold</p>
                    <p className="text-base text-[hsl(var(--foreground))]">Body regular text</p>
                    <p className="text-sm text-[hsl(var(--muted-foreground))]">Muted / secondary text</p>
                    <p className="text-xs text-[hsl(var(--muted-foreground))]">Caption · metadata · labels</p>
                  </div>
                  <Separator />
                  <p className="text-xs text-[hsl(var(--muted-foreground))] font-mono">
                    {s.typefaceNote}
                  </p>
                </ThemePanel>
              ))}

              {/* ── Border radius ── */}
              <SectionLabel>Border radius · Elevation</SectionLabel>
              {SYSTEMS.map((s) => (
                <ThemePanel key={s.id} theme={s.theme}>
                  <div className="flex gap-3 items-end">
                    {[
                      { label: "sm",  size: "h-10 w-10" },
                      { label: "md",  size: "h-12 w-12" },
                      { label: "lg",  size: "h-14 w-14" },
                    ].map(({ label, size }) => (
                      <div key={label} className="flex flex-col items-center gap-1">
                        <div
                          className={`${size} bg-[hsl(var(--primary))]`}
                          style={{ borderRadius: `var(--radius-${label}, var(--radius))` }}
                        />
                        <span className="text-[10px] text-[hsl(var(--muted-foreground))]">{label}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-[hsl(var(--muted-foreground))]">
                    {s.radiusNote}
                  </p>
                </ThemePanel>
              ))}

            </div>
          </div>
        </div>
      </main>

      {/* ── Footer ── */}
      <footer className="mt-8 border-t border-zinc-200 bg-zinc-50 py-6 px-8">
        <div className="flex items-center justify-between">
          <p className="text-xs text-zinc-400">
            Design System monorepo — {SYSTEMS.map((s) => s.name).join(" · ")}
          </p>
          <div className="flex gap-2 flex-wrap justify-end">
            {SYSTEMS.map((s) => (
              <span
                key={s.id}
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: s.accent }}
                title={s.name}
              />
            ))}
          </div>
        </div>
      </footer>
    </TooltipProvider>
  )
}
