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
} from "@wilson-romero/base"
import { UberLogo } from "@wilson-romero/base"
import Link from "next/link"
import { useState } from "react"

// Uber Base color ramp — key palette tokens
const BRAND = [
  { name: "Blue 400",  hex: "#276EF1", role: "Primary / Interactive" },
  { name: "Black",     hex: "#1E1E1E", role: "Text primary" },
  { name: "Red 400",   hex: "#E11900", role: "Negative / Error" },
  { name: "Green 500", hex: "#03703C", role: "Positive / Success" },
  { name: "Yellow 400",hex: "#FFC043", role: "Warning" },
  { name: "Gray 50",   hex: "#F6F6F6", role: "Background surface" },
]

export default function BaseShowcasePage() {
  const [progress, setProgress] = useState(65)
  const [checked, setChecked] = useState(false)
  const [switched, setSwitched] = useState(false)

  return (
    <TooltipProvider>
      <Toaster />

      {/* Header */}
      <header className="border-b border-border bg-card px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <UberLogo variant="color" width={64} />
          <div>
            <p className="text-sm font-medium text-foreground">Base Design System</p>
            <p className="text-xs text-muted-foreground">@wilson-romero/base · Uber</p>
          </div>
        </div>
        <nav className="flex gap-2 text-sm">
          <Link href="/spectrum" className="text-muted-foreground hover:text-foreground px-3 py-1">
            Spectrum
          </Link>
          <span className="text-primary font-medium px-3 py-1 border-b-2 border-primary">Base</span>
          <Link href="/" className="text-muted-foreground hover:text-foreground px-3 py-1">
            Comparar ↔
          </Link>
        </nav>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-10 space-y-12">

        {/* Hero */}
        <section className="space-y-3">
          <h1 className="text-3xl font-bold tracking-tight">
            Base Design System
          </h1>
          <p className="text-muted-foreground max-w-2xl">
            Sistema de diseño de Uber (Eats, Driver, Freight). Accesibilidad integrada desde
            los cimientos. Cada color, patrón y componente probado con usuarios de tecnologías
            asistivas antes de publicarse.
          </p>
          <div className="flex flex-wrap gap-2 pt-1">
            {["React", "A11y", "Tokens"].map((t) => (
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
            Base buttons use 4px radius — clean, functional, accessibility-first.
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
                Base uses a functional color palette: blue for primary actions, yellow for warnings, red for errors, green for success.
              </AlertDescription>
            </Alert>
            <Alert variant="destructive">
              <AlertTitle>Error — Red 400</AlertTitle>
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
              <Label htmlFor="base-name">Full name</Label>
              <Input id="base-name" placeholder="John Doe" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="base-role">Role</Label>
              <Select>
                <SelectTrigger id="base-role">
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
              <Label htmlFor="base-notes">Notes</Label>
              <Textarea id="base-notes" placeholder="Additional context..." rows={3} />
            </div>
            <div className="flex items-center gap-2">
              <Checkbox
                id="base-terms"
                checked={checked}
                onCheckedChange={(v) => setChecked(!!v)}
              />
              <Label htmlFor="base-terms" className="text-sm">
                Accept terms and conditions
              </Label>
            </div>
            <div className="flex items-center gap-2">
              <Switch
                id="base-notify"
                checked={switched}
                onCheckedChange={setSwitched}
              />
              <Label htmlFor="base-notify" className="text-sm">
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
            Base uses a clean background + border system. Accessibility drives every visual decision.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { layer: "default",  bg: "#FFFFFF", label: "Default surface" },
              { layer: "subtle",   bg: "#F6F6F6", label: "Subtle surface" },
              { layer: "overlay",  bg: "#FFFFFF", label: "Overlay / Dialog" },
            ].map(({ layer, bg, label }) => (
              <Card key={layer} style={{ backgroundColor: bg }}>
                <CardHeader>
                  <CardTitle className="text-sm">{label}</CardTitle>
                  <CardDescription className="text-xs">{bg}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-muted-foreground">
                    Accessible contrast at every elevation level.
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
                React components used across Uber, Eats, Driver, and Freight products.
              </p>
            </TabsContent>
            <TabsContent value="tokens" className="pt-4">
              <p className="text-sm text-muted-foreground">
                Token system covering color, spacing, typography, and motion. Rigorously contrast-tested.
              </p>
            </TabsContent>
            <TabsContent value="a11y" className="pt-4">
              <p className="text-sm text-muted-foreground">
                Every component tested with assistive technology users before release. WCAG AA+.
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
              <RadioGroupItem value="option-1" id="b-r1" />
              <Label htmlFor="b-r1">Standard plan</Label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="option-2" id="b-r2" />
              <Label htmlFor="b-r2">Professional plan</Label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="option-3" id="b-r3" />
              <Label htmlFor="b-r3">Enterprise plan</Label>
            </div>
          </RadioGroup>
        </section>

        {/* Footer nav */}
        <div className="pt-6 flex gap-4 text-sm border-t border-border">
          <Link href="/" className="text-primary hover:underline">← Comparar</Link>
          <Link href="/spectrum" className="text-primary hover:underline">Spectrum →</Link>
        </div>

      </main>
    </TooltipProvider>
  )
}
