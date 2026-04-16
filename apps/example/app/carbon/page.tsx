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
} from "@wilson-romero/carbon"
import { IBMLogo } from "@wilson-romero/carbon"
import Link from "next/link"
import { useState } from "react"

// IBM Carbon color ramp — key palette tokens
const BRAND = [
  { name: "Blue 60",  hex: "#0f62fe", role: "Interactive / Primary" },
  { name: "Gray 100", hex: "#161616", role: "Text primary" },
  { name: "Gray 10",  hex: "#f4f4f4", role: "Background layer-01" },
  { name: "Red 60",   hex: "#da1e28", role: "Error / Danger" },
  { name: "Green 60", hex: "#198038", role: "Success" },
  { name: "Yellow 30",hex: "#f1c21b", role: "Warning" },
]

export default function CarbonShowcasePage() {
  const [progress, setProgress] = useState(65)
  const [checked, setChecked] = useState(false)
  const [switched, setSwitched] = useState(false)

  return (
    <TooltipProvider>
      <Toaster />

      {/* Header */}
      <header className="border-b border-border bg-card px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <IBMLogo variant="color" width={64} />
          <div>
            <p className="text-sm font-medium text-foreground">Carbon Design System</p>
            <p className="text-xs text-muted-foreground">@wilson-romero/carbon · IBM Enterprise</p>
          </div>
        </div>
        <nav className="flex gap-2 text-sm">
          <Link href="/tigo" className="text-muted-foreground hover:text-foreground px-3 py-1">
            TIGO
          </Link>
          <span className="text-primary font-medium px-3 py-1 border-b-2 border-primary">Carbon</span>
          <Link href="/polaris" className="text-muted-foreground hover:text-foreground px-3 py-1">
            Polaris
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
            IBM Carbon Design System
          </h1>
          <p className="text-muted-foreground max-w-2xl">
            Referente enterprise en documentación de patrones complejos. Elevación por color
            (no sombras). Bordes angulares — sin border-radius. A11y probado con usuarios reales.
          </p>
          <div className="flex flex-wrap gap-2 pt-1">
            {["React", "Tokens", "A11y", "Open Source", "Enterprise"].map((t) => (
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
            Carbon buttons have zero radius — sharp, rectangular, enterprise-grade.
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
                Carbon elevation uses color layers, not box-shadows. Gray 10 → Gray 20 → Gray 30.
              </AlertDescription>
            </Alert>
            <Alert variant="destructive">
              <AlertTitle>Error — Red 60</AlertTitle>
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
              <Label htmlFor="carbon-name">Full name</Label>
              <Input id="carbon-name" placeholder="John Doe" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="carbon-role">Role</Label>
              <Select>
                <SelectTrigger id="carbon-role">
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
              <Label htmlFor="carbon-notes">Notes</Label>
              <Textarea id="carbon-notes" placeholder="Additional context..." rows={3} />
            </div>
            <div className="flex items-center gap-2">
              <Checkbox
                id="carbon-terms"
                checked={checked}
                onCheckedChange={(v) => setChecked(!!v)}
              />
              <Label htmlFor="carbon-terms" className="text-sm">
                Accept terms and conditions
              </Label>
            </div>
            <div className="flex items-center gap-2">
              <Switch
                id="carbon-notify"
                checked={switched}
                onCheckedChange={setSwitched}
              />
              <Label htmlFor="carbon-notify" className="text-sm">
                Enable notifications
              </Label>
            </div>
          </div>
          <Button className="mt-2">Submit form</Button>
        </section>

        <Separator />

        {/* Cards / Elevation */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Elevation — color layers</h2>
          <p className="text-sm text-muted-foreground">
            Carbon uses background color steps (not shadows) to communicate depth.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { layer: "layer-01", bg: "#f4f4f4", label: "Card / layer-01" },
              { layer: "layer-02", bg: "#e0e0e0", label: "Nested / layer-02" },
              { layer: "layer-03", bg: "#c6c6c6", label: "Raised / layer-03" },
            ].map(({ layer, bg, label }) => (
              <Card key={layer} style={{ backgroundColor: bg }}>
                <CardHeader>
                  <CardTitle className="text-sm">{label}</CardTitle>
                  <CardDescription className="text-xs">{bg}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-muted-foreground">
                    No shadows. Depth through gray steps.
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
                90+ components built on Radix UI primitives with Carbon tokens applied.
              </p>
            </TabsContent>
            <TabsContent value="tokens" className="pt-4">
              <p className="text-sm text-muted-foreground">
                Design tokens mapped from Carbon's official token spec. CSS custom properties.
              </p>
            </TabsContent>
            <TabsContent value="a11y" className="pt-4">
              <p className="text-sm text-muted-foreground">
                Tested with real users. WCAG AA compliant. Focus rings visible at 0px offset.
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
              <RadioGroupItem value="option-1" id="c-r1" />
              <Label htmlFor="c-r1">Standard plan</Label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="option-2" id="c-r2" />
              <Label htmlFor="c-r2">Professional plan</Label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="option-3" id="c-r3" />
              <Label htmlFor="c-r3">Enterprise plan</Label>
            </div>
          </RadioGroup>
        </section>

        {/* Footer nav */}
        <div className="pt-6 flex gap-4 text-sm border-t border-border">
          <Link href="/" className="text-primary hover:underline">← Comparar</Link>
          <Link href="/tigo" className="text-primary hover:underline">TIGO</Link>
          <Link href="/polaris" className="text-primary hover:underline">Polaris →</Link>
        </div>

      </main>
    </TooltipProvider>
  )
}
