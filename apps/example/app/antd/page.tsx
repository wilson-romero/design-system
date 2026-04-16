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
} from "@wilson-romero/antd"
import { AntDesignLogo } from "@wilson-romero/antd"
import Link from "next/link"
import { useState } from "react"

// Ant Design color ramp — key palette tokens
const BRAND = [
  { name: "Daybreak Blue",  hex: "#1677FF", role: "Primary / colorPrimary" },
  { name: "Neutral",        hex: "#141414", role: "Text default" },
  { name: "Dust Red",       hex: "#FF4D4F", role: "Error / colorError" },
  { name: "Polar Green",    hex: "#52C41A", role: "Success / colorSuccess" },
  { name: "Sunset Orange",  hex: "#FA8C16", role: "Warning / colorWarning" },
  { name: "Purple",         hex: "#722ED1", role: "Golden Purple" },
]

export default function AntdShowcasePage() {
  const [progress, setProgress] = useState(65)
  const [checked, setChecked] = useState(false)
  const [switched, setSwitched] = useState(false)

  return (
    <TooltipProvider>
      <Toaster />

      {/* Header */}
      <header className="border-b border-border bg-card px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <AntDesignLogo variant="color" width={64} />
          <div>
            <p className="text-sm font-medium text-foreground">Ant Design</p>
            <p className="text-xs text-muted-foreground">@wilson-romero/antd · Alibaba / Ant Group</p>
          </div>
        </div>
        <nav className="flex gap-2 text-sm">
          <Link href="/pajamas" className="text-muted-foreground hover:text-foreground px-3 py-1">
            Pajamas
          </Link>
          <span className="text-primary font-medium px-3 py-1 border-b-2 border-primary">Ant Design</span>
          <Link href="/spectrum" className="text-muted-foreground hover:text-foreground px-3 py-1">
            Spectrum
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
            Ant Design
          </h1>
          <p className="text-muted-foreground max-w-2xl">
            Sistema enterprise muy popular para aplicaciones React. Principios de simplicidad,
            consistencia y eficiencia. Gran ecosistema de componentes, excelente documentación
            en inglés y chino.
          </p>
          <div className="flex flex-wrap gap-2 pt-1">
            {["React", "Figma", "Open Source", "Enterprise"].map((t) => (
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
            Ant Design buttons use 6px radius — consistent enterprise curve.
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
                Ant Design uses a 6-level color palette per hue. Daybreak Blue is the primary brand color driving interactive states.
              </AlertDescription>
            </Alert>
            <Alert variant="destructive">
              <AlertTitle>Error — Dust Red</AlertTitle>
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
              <Label htmlFor="antd-name">Full name</Label>
              <Input id="antd-name" placeholder="John Doe" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="antd-role">Role</Label>
              <Select>
                <SelectTrigger id="antd-role">
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
              <Label htmlFor="antd-notes">Notes</Label>
              <Textarea id="antd-notes" placeholder="Additional context..." rows={3} />
            </div>
            <div className="flex items-center gap-2">
              <Checkbox
                id="antd-terms"
                checked={checked}
                onCheckedChange={(v) => setChecked(!!v)}
              />
              <Label htmlFor="antd-terms" className="text-sm">
                Accept terms and conditions
              </Label>
            </div>
            <div className="flex items-center gap-2">
              <Switch
                id="antd-notify"
                checked={switched}
                onCheckedChange={setSwitched}
              />
              <Label htmlFor="antd-notify" className="text-sm">
                Enable notifications
              </Label>
            </div>
          </div>
          <Button className="mt-2">Submit form</Button>
        </section>

        <Separator />

        {/* Cards / Elevation */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Elevation — shadow system</h2>
          <p className="text-sm text-muted-foreground">
            Ant Design uses a three-level shadow system to indicate interactive depth.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { layer: "base",   bg: "#FFFFFF", label: "Base card" },
              { layer: "raised", bg: "#FAFAFA", label: "Raised card" },
              { layer: "high",   bg: "#FFFFFF", label: "Floating overlay" },
            ].map(({ layer, bg, label }) => (
              <Card key={layer} style={{ backgroundColor: bg }}>
                <CardHeader>
                  <CardTitle className="text-sm">{label}</CardTitle>
                  <CardDescription className="text-xs">{bg}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-muted-foreground">
                    Three shadow levels: base, raised, floating.
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
                60+ React components. Used by thousands of enterprise products worldwide.
              </p>
            </TabsContent>
            <TabsContent value="tokens" className="pt-4">
              <p className="text-sm text-muted-foreground">
                Design token system with CSS-in-JS and Figma integration. Supports theming via ConfigProvider.
              </p>
            </TabsContent>
            <TabsContent value="a11y" className="pt-4">
              <p className="text-sm text-muted-foreground">
                WCAG AA compliant. Keyboard navigation and screen reader tested components.
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
              <RadioGroupItem value="option-1" id="a-r1" />
              <Label htmlFor="a-r1">Standard plan</Label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="option-2" id="a-r2" />
              <Label htmlFor="a-r2">Professional plan</Label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="option-3" id="a-r3" />
              <Label htmlFor="a-r3">Enterprise plan</Label>
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
