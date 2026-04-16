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
} from "@wilson-romero/pajamas"
import { GitLabLogo } from "@wilson-romero/pajamas"
import Link from "next/link"
import { useState } from "react"

// GitLab Pajamas color ramp — key palette tokens
const BRAND = [
  { name: "Brand Purple", hex: "#6B4FBB", role: "UI theme / Primary" },
  { name: "Brand Orange", hex: "#FC6D26", role: "Brand accent" },
  { name: "Action Blue",  hex: "#1F75CB", role: "CTA / Action" },
  { name: "Danger Red",   hex: "#DD2B0E", role: "Error / Danger" },
  { name: "Success",      hex: "#108548", role: "Positive" },
  { name: "Warning",      hex: "#A87D00", role: "Warning" },
]

export default function PajamasShowcasePage() {
  const [progress, setProgress] = useState(65)
  const [checked, setChecked] = useState(false)
  const [switched, setSwitched] = useState(false)

  return (
    <TooltipProvider>
      <Toaster />

      {/* Header */}
      <header className="border-b border-border bg-card px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <GitLabLogo variant="color" width={64} />
          <div>
            <p className="text-sm font-medium text-foreground">Pajamas Design System</p>
            <p className="text-xs text-muted-foreground">@wilson-romero/pajamas · GitLab</p>
          </div>
        </div>
        <nav className="flex gap-2 text-sm">
          <Link href="/primer" className="text-muted-foreground hover:text-foreground px-3 py-1">
            Primer
          </Link>
          <span className="text-primary font-medium px-3 py-1 border-b-2 border-primary">Pajamas</span>
          <Link href="/antd" className="text-muted-foreground hover:text-foreground px-3 py-1">
            Ant Design
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
            Pajamas Design System
          </h1>
          <p className="text-muted-foreground max-w-2xl">
            Sistema open source de GitLab. Issue tracker público y colaboración comunitaria.
            Guías exhaustivas con anatomía de componentes y ejemplos de código. Componentes
            en Vue.js y Rails.
          </p>
          <div className="flex flex-wrap gap-2 pt-1">
            {["Open Source", "Tokens", "A11y"].map((t) => (
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
            Pajamas buttons use 4px radius — practical, open-source aesthetic.
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
                Pajamas uses semantic status colors. Purple for brand, orange as accent, blue for actions.
              </AlertDescription>
            </Alert>
            <Alert variant="destructive">
              <AlertTitle>Error — Danger Red</AlertTitle>
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
              <Label htmlFor="pajamas-name">Full name</Label>
              <Input id="pajamas-name" placeholder="John Doe" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="pajamas-role">Role</Label>
              <Select>
                <SelectTrigger id="pajamas-role">
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
              <Label htmlFor="pajamas-notes">Notes</Label>
              <Textarea id="pajamas-notes" placeholder="Additional context..." rows={3} />
            </div>
            <div className="flex items-center gap-2">
              <Checkbox
                id="pajamas-terms"
                checked={checked}
                onCheckedChange={(v) => setChecked(!!v)}
              />
              <Label htmlFor="pajamas-terms" className="text-sm">
                Accept terms and conditions
              </Label>
            </div>
            <div className="flex items-center gap-2">
              <Switch
                id="pajamas-notify"
                checked={switched}
                onCheckedChange={setSwitched}
              />
              <Label htmlFor="pajamas-notify" className="text-sm">
                Enable notifications
              </Label>
            </div>
          </div>
          <Button className="mt-2">Submit form</Button>
        </section>

        <Separator />

        {/* Cards / Elevation */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Elevation — surface layers</h2>
          <p className="text-sm text-muted-foreground">
            Pajamas uses subtle background shifts and borders to define surface hierarchy.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { layer: "default",  bg: "#FFFFFF", label: "Default surface" },
              { layer: "subtle",   bg: "#F9F9F9", label: "Subtle surface" },
              { layer: "overlay",  bg: "#FFFFFF", label: "Overlay / Modal" },
            ].map(({ layer, bg, label }) => (
              <Card key={layer} style={{ backgroundColor: bg }}>
                <CardHeader>
                  <CardTitle className="text-sm">{label}</CardTitle>
                  <CardDescription className="text-xs">{bg}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-muted-foreground">
                    Borders and backgrounds define depth.
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
                Vue.js components with Rails ViewComponent counterparts. Issue tracker for community feedback.
              </p>
            </TabsContent>
            <TabsContent value="tokens" className="pt-4">
              <p className="text-sm text-muted-foreground">
                Design tokens across color, spacing, typography, and motion. Distributed as CSS variables.
              </p>
            </TabsContent>
            <TabsContent value="a11y" className="pt-4">
              <p className="text-sm text-muted-foreground">
                WCAG AA compliant. Anatomical documentation includes accessibility guidance per component.
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
              <RadioGroupItem value="option-1" id="pj-r1" />
              <Label htmlFor="pj-r1">Standard plan</Label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="option-2" id="pj-r2" />
              <Label htmlFor="pj-r2">Professional plan</Label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="option-3" id="pj-r3" />
              <Label htmlFor="pj-r3">Enterprise plan</Label>
            </div>
          </RadioGroup>
        </section>

        {/* Footer nav */}
        <div className="pt-6 flex gap-4 text-sm border-t border-border">
          <Link href="/" className="text-primary hover:underline">← Comparar</Link>
          <Link href="/antd" className="text-primary hover:underline">Ant Design →</Link>
        </div>

      </main>
    </TooltipProvider>
  )
}
