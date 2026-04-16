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
} from "@wilson-romero/primer"
import { GitHubLogo } from "@wilson-romero/primer"
import Link from "next/link"
import { useState } from "react"

// GitHub Primer color ramp — key palette tokens
const BRAND = [
  { name: "Accent Blue",    hex: "#0969DA", role: "Interactive / Primary" },
  { name: "Foreground",     hex: "#24292F", role: "Text default" },
  { name: "Canvas Subtle",  hex: "#F6F8FA", role: "Background surface" },
  { name: "Danger",         hex: "#CF222E", role: "Error / Danger" },
  { name: "Success",        hex: "#1A7F37", role: "Success" },
  { name: "Attention",      hex: "#9A6700", role: "Warning" },
]

export default function PrimerShowcasePage() {
  const [progress, setProgress] = useState(65)
  const [checked, setChecked] = useState(false)
  const [switched, setSwitched] = useState(false)

  return (
    <TooltipProvider>
      <Toaster />

      {/* Header */}
      <header className="border-b border-border bg-card px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <GitHubLogo variant="color" width={64} />
          <div>
            <p className="text-sm font-medium text-foreground">Primer Design System</p>
            <p className="text-xs text-muted-foreground">@wilson-romero/primer · GitHub</p>
          </div>
        </div>
        <nav className="flex gap-2 text-sm">
          <Link href="/lightning" className="text-muted-foreground hover:text-foreground px-3 py-1">
            Lightning
          </Link>
          <span className="text-primary font-medium px-3 py-1 border-b-2 border-primary">Primer</span>
          <Link href="/pajamas" className="text-muted-foreground hover:text-foreground px-3 py-1">
            Pajamas
          </Link>
          <Link href="/" className="text-muted-foreground hover:text-foreground px-3 py-1">
            Comparar ↔
          </Link>
        </nav>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-10 space-y-12">

        {/* Hero */}
        <section className="space-y-3">
          <h1 className="text-3xl font-bold tracking-tight">
            Primer Design System
          </h1>
          <p className="text-muted-foreground max-w-2xl">
            Sistema developer-first de GitHub. Documentación completa para desarrolladores.
            Componentes en CSS, React/JS y ViewComponents/Ruby-on-Rails. Open source con
            colaboración comunitaria activa.
          </p>
          <div className="flex flex-wrap gap-2 pt-1">
            {["React", "Open Source", "Tokens"].map((t) => (
              <Badge key={t} variant="secondary">{t}</Badge>
            ))}
          </div>
        </section>

        {/* Color Tokens */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Color tokens</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
            {BRAND.map(({ name, hex, role }) => (
              <div key={name} className="space-y-2">
                <div
                  className="h-14 w-full border border-border"
                  style={{ backgroundColor: hex }}
                  aria-label={name}
                />
                <div>
                  <p className="text-xs font-semibold">{name}</p>
                  <p className="text-xs text-muted-foreground">{hex}</p>
                  <p className="text-xs text-muted-foreground">{role}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <Separator />

        {/* Buttons */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Buttons</h2>
          <p className="text-sm text-muted-foreground">
            Primer buttons use 6px radius — clean, developer-focused aesthetic.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button>Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="destructive">Destructive</Button>
            <Button disabled>Disabled</Button>
          </div>
        </section>

        <Separator />

        {/* Badges */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Badges</h2>
          <div className="flex flex-wrap gap-2">
            <Badge>Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="outline">Outline</Badge>
            <Badge variant="destructive">Destructive</Badge>
          </div>
        </section>

        <Separator />

        {/* Alerts */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Notifications</h2>
          <div className="space-y-3">
            <Alert>
              <AlertTitle>Information</AlertTitle>
              <AlertDescription>
                Primer uses semantic color roles. Canvas colors for backgrounds, foreground for text, accent for interactions.
              </AlertDescription>
            </Alert>
            <Alert variant="destructive">
              <AlertTitle>Error — Danger</AlertTitle>
              <AlertDescription>Validation failed. Check required fields before submitting.</AlertDescription>
            </Alert>
          </div>
        </section>

        <Separator />

        {/* Form */}
        <section className="space-y-6">
          <h2 className="text-xl font-semibold">Form patterns</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl">
            <div className="space-y-2">
              <Label htmlFor="primer-name">Full name</Label>
              <Input id="primer-name" placeholder="John Doe" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="primer-role">Role</Label>
              <Select>
                <SelectTrigger id="primer-role">
                  <SelectValue placeholder="Select role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="engineer">Software Engineer</SelectItem>
                  <SelectItem value="designer">Product Designer</SelectItem>
                  <SelectItem value="pm">Product Manager</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="primer-notes">Notes</Label>
              <Textarea id="primer-notes" placeholder="Additional context..." rows={3} />
            </div>
            <div className="flex items-center gap-2">
              <Checkbox
                id="primer-terms"
                checked={checked}
                onCheckedChange={(v) => setChecked(!!v)}
              />
              <Label htmlFor="primer-terms" className="text-sm">
                Accept terms and conditions
              </Label>
            </div>
            <div className="flex items-center gap-2">
              <Switch
                id="primer-notify"
                checked={switched}
                onCheckedChange={setSwitched}
              />
              <Label htmlFor="primer-notify" className="text-sm">
                Enable notifications
              </Label>
            </div>
          </div>
          <Button className="mt-2">Submit form</Button>
        </section>

        <Separator />

        {/* Cards / Elevation */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Elevation — canvas layers</h2>
          <p className="text-sm text-muted-foreground">
            Primer uses canvas color roles to communicate depth without heavy shadows.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { layer: "canvas-default", bg: "#FFFFFF", label: "Canvas Default" },
              { layer: "canvas-subtle",  bg: "#F6F8FA", label: "Canvas Subtle" },
              { layer: "canvas-inset",   bg: "#EAEEF2", label: "Canvas Inset" },
            ].map(({ layer, bg, label }) => (
              <Card key={layer} style={{ backgroundColor: bg }}>
                <CardHeader>
                  <CardTitle className="text-sm">{label}</CardTitle>
                  <CardDescription className="text-xs">{bg}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-muted-foreground">
                    Semantic roles drive depth perception.
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <Separator />

        {/* Tabs */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Tabs</h2>
          <Tabs defaultValue="components">
            <TabsList>
              <TabsTrigger value="components">Components</TabsTrigger>
              <TabsTrigger value="tokens">Tokens</TabsTrigger>
              <TabsTrigger value="a11y">Accessibility</TabsTrigger>
            </TabsList>
            <TabsContent value="components" className="pt-4">
              <p className="text-sm text-muted-foreground">
                Components available in CSS, React, and ViewComponent (Ruby on Rails).
              </p>
            </TabsContent>
            <TabsContent value="tokens" className="pt-4">
              <p className="text-sm text-muted-foreground">
                Functional and component-level tokens. Theme-aware with dark mode support.
              </p>
            </TabsContent>
            <TabsContent value="a11y" className="pt-4">
              <p className="text-sm text-muted-foreground">
                WCAG AA compliant. Focus management and keyboard navigation built in.
              </p>
            </TabsContent>
          </Tabs>
        </section>

        <Separator />

        {/* Progress */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Progress indicator</h2>
          <div className="max-w-sm space-y-3">
            <div className="flex justify-between text-sm">
              <span>Loading model</span>
              <span className="text-muted-foreground">{progress}%</span>
            </div>
            <Progress value={progress} />
            <div className="flex gap-2">
              <Button size="sm" variant="outline" onClick={() => setProgress(Math.max(0, progress - 10))}>−10</Button>
              <Button size="sm" variant="outline" onClick={() => setProgress(Math.min(100, progress + 10))}>+10</Button>
            </div>
          </div>
        </section>

        <Separator />

        {/* Skeletons */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Skeleton — loading state</h2>
          <div className="space-y-2 max-w-sm">
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-4 w-1/2" />
            <Skeleton className="h-4 w-2/3" />
          </div>
        </section>

        {/* Radio */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Radio group</h2>
          <RadioGroup defaultValue="option-1">
            <div className="flex items-center gap-2">
              <RadioGroupItem value="option-1" id="p-r1" />
              <Label htmlFor="p-r1">Standard plan</Label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="option-2" id="p-r2" />
              <Label htmlFor="p-r2">Professional plan</Label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="option-3" id="p-r3" />
              <Label htmlFor="p-r3">Enterprise plan</Label>
            </div>
          </RadioGroup>
        </section>

        {/* Footer nav */}
        <div className="pt-6 flex gap-4 text-sm border-t border-border">
          <Link href="/" className="text-primary hover:underline">← Comparar</Link>
          <Link href="/pajamas" className="text-primary hover:underline">Pajamas →</Link>
        </div>

      </main>
    </TooltipProvider>
  )
}
