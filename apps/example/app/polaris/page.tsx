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
} from "@wilson-romero/polaris"
import { ShopifyLogo } from "@wilson-romero/polaris"
import Link from "next/link"
import { useState } from "react"

// Shopify Polaris color tokens
const BRAND = [
  { name: "Green",       hex: "#008060", role: "Primary interactive" },
  { name: "Green Dark",  hex: "#004c3f", role: "Interactive hover" },
  { name: "Ink",         hex: "#202223", role: "Text primary" },
  { name: "Sky",         hex: "#f6f6f7", role: "Surface default" },
  { name: "Critical",    hex: "#d72c0d", role: "Error / Danger" },
  { name: "Warning",     hex: "#ffc453", role: "Warning state" },
]

export default function PolarisShowcasePage() {
  const [progress, setProgress] = useState(72)
  const [checked, setChecked] = useState(true)
  const [switched, setSwitched] = useState(true)

  return (
    <TooltipProvider>
      <Toaster />

      {/* Header */}
      <header className="border-b border-border bg-card px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <ShopifyLogo variant="color" width={110} />
          <div>
            <p className="text-sm font-medium text-foreground">Polaris Design System</p>
            <p className="text-xs text-muted-foreground">@wilson-romero/polaris · Shopify Commerce</p>
          </div>
        </div>
        <nav className="flex gap-2 text-sm">
          <Link href="/tigo" className="text-muted-foreground hover:text-foreground px-3 py-1">
            TIGO
          </Link>
          <Link href="/carbon" className="text-muted-foreground hover:text-foreground px-3 py-1">
            Carbon
          </Link>
          <span className="text-primary font-medium px-3 py-1 border-b-2 border-primary">Polaris</span>
          <Link href="/" className="text-muted-foreground hover:text-foreground px-3 py-1">
            Comparar ↔
          </Link>
        </nav>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-10 space-y-12">

        {/* Hero */}
        <section className="space-y-3">
          <h1 className="text-3xl font-bold tracking-tight">
            Shopify Polaris Design System
          </h1>
          <p className="text-muted-foreground max-w-2xl">
            Documentación estructurada para cómo los diseñadores realmente trabajan.
            Tokens que permiten white-label sin romper patrones de interacción. 90+ componentes React.
          </p>
          <div className="flex flex-wrap gap-2 pt-1">
            {["React", "Tokens", "Figma", "A11y", "Open Source", "White-label"].map((t) => (
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
                  className="h-14 w-full rounded-md border border-border"
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
            Polaris buttons use moderate rounding (0.5rem). Semantic token approach enables white-label.
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
          <h2 className="text-xl font-semibold">Badges — status indicators</h2>
          <div className="flex flex-wrap gap-2">
            <Badge>Active</Badge>
            <Badge variant="secondary">Draft</Badge>
            <Badge variant="outline">Pending</Badge>
            <Badge variant="destructive">Error</Badge>
          </div>
        </section>

        <Separator />

        {/* Alerts */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Banners</h2>
          <div className="space-y-3">
            <Alert>
              <AlertTitle>Success</AlertTitle>
              <AlertDescription>
                Your product was published to the Shopify store. Changes are live.
              </AlertDescription>
            </Alert>
            <Alert variant="destructive">
              <AlertTitle>Critical — payment failed</AlertTitle>
              <AlertDescription>
                Transaction declined. Please update your payment method.
              </AlertDescription>
            </Alert>
          </div>
        </section>

        <Separator />

        {/* Form */}
        <section className="space-y-6">
          <h2 className="text-xl font-semibold">Form patterns</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl">
            <div className="space-y-2">
              <Label htmlFor="polaris-product">Product title</Label>
              <Input id="polaris-product" placeholder="e.g. Winter jacket" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="polaris-status">Status</Label>
              <Select>
                <SelectTrigger id="polaris-status">
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="draft">Draft</SelectItem>
                  <SelectItem value="archived">Archived</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="polaris-desc">Description</Label>
              <Textarea id="polaris-desc" placeholder="Product description..." rows={3} />
            </div>
            <div className="flex items-center gap-2">
              <Checkbox
                id="polaris-seo"
                checked={checked}
                onCheckedChange={(v) => setChecked(!!v)}
              />
              <Label htmlFor="polaris-seo" className="text-sm">
                Enable SEO optimization
              </Label>
            </div>
            <div className="flex items-center gap-2">
              <Switch
                id="polaris-featured"
                checked={switched}
                onCheckedChange={setSwitched}
              />
              <Label htmlFor="polaris-featured" className="text-sm">
                Featured product
              </Label>
            </div>
          </div>
          <Button className="mt-2">Save product</Button>
        </section>

        <Separator />

        {/* Cards */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Cards — resource list</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { title: "Online store", revenue: "$12,430", orders: 84 },
              { title: "Point of Sale", revenue: "$5,210", orders: 31 },
              { title: "Buy Button", revenue: "$1,820", orders: 12 },
            ].map(({ title, revenue, orders }) => (
              <Card key={title}>
                <CardHeader>
                  <CardTitle className="text-sm">{title}</CardTitle>
                  <CardDescription className="text-xs">Sales channel</CardDescription>
                </CardHeader>
                <CardContent className="space-y-1">
                  <p className="text-2xl font-bold">{revenue}</p>
                  <p className="text-xs text-muted-foreground">{orders} orders</p>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" size="sm" className="w-full">View details</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        <Separator />

        {/* Tabs */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Tabs</h2>
          <Tabs defaultValue="all">
            <TabsList>
              <TabsTrigger value="all">All products</TabsTrigger>
              <TabsTrigger value="active">Active</TabsTrigger>
              <TabsTrigger value="draft">Draft</TabsTrigger>
              <TabsTrigger value="archived">Archived</TabsTrigger>
            </TabsList>
            <TabsContent value="all" className="pt-4">
              <p className="text-sm text-muted-foreground">
                90+ components follow consistent Polaris token naming for white-label customisation.
              </p>
            </TabsContent>
            <TabsContent value="active" className="pt-4">
              <p className="text-sm text-muted-foreground">Active products visible in your storefront.</p>
            </TabsContent>
            <TabsContent value="draft" className="pt-4">
              <p className="text-sm text-muted-foreground">Draft products not yet published.</p>
            </TabsContent>
            <TabsContent value="archived" className="pt-4">
              <p className="text-sm text-muted-foreground">Archived products hidden from storefront.</p>
            </TabsContent>
          </Tabs>
        </section>

        <Separator />

        {/* Progress */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Progress</h2>
          <div className="max-w-sm space-y-3">
            <div className="flex justify-between text-sm">
              <span>Store setup</span>
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
          <h2 className="text-xl font-semibold">Skeleton</h2>
          <div className="space-y-2 max-w-sm">
            <Skeleton className="h-4 w-3/4 rounded-md" />
            <Skeleton className="h-4 w-1/2 rounded-md" />
            <Skeleton className="h-4 w-2/3 rounded-md" />
          </div>
        </section>

        {/* Radio */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Radio group</h2>
          <RadioGroup defaultValue="shopify-basic">
            <div className="flex items-center gap-2">
              <RadioGroupItem value="shopify-basic" id="p-r1" />
              <Label htmlFor="p-r1">Basic Shopify — $29/mo</Label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="shopify" id="p-r2" />
              <Label htmlFor="p-r2">Shopify — $79/mo</Label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="advanced" id="p-r3" />
              <Label htmlFor="p-r3">Advanced Shopify — $299/mo</Label>
            </div>
          </RadioGroup>
        </section>

        {/* Footer nav */}
        <div className="pt-6 flex gap-4 text-sm border-t border-border">
          <Link href="/" className="text-primary hover:underline">← Comparar</Link>
          <Link href="/carbon" className="text-primary hover:underline">Carbon (IBM)</Link>
          <Link href="/tigo" className="text-primary hover:underline">TIGO →</Link>
        </div>

      </main>
    </TooltipProvider>
  )
}
