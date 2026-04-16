"use client"

import {
  TigoLogo,
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
import Link from "next/link"
import { useState } from "react"

const BRAND = [
  { name: "Azul TIGO",     hex: "#5060BA", pantone: "2726", role: "Principal"  },
  { name: "Amarillo TIGO", hex: "#FFD700", pantone: "123",  role: "Secundario" },
  { name: "Rojo TIGO",     hex: "#E61950", pantone: "199",  role: "Terciario"  },
  { name: "Verde TIGO",    hex: "#41C800", pantone: "368",  role: "Terciario"  },
]

export default function TigoShowcasePage() {
  const [progress, setProgress] = useState(65)
  const [checked, setChecked] = useState(false)
  const [switched, setSwitched] = useState(false)

  return (
    <TooltipProvider>
      <Toaster />
      <div className="min-h-screen bg-background">

        {/* Header */}
        <header className="bg-primary text-primary-foreground px-8 py-5 flex items-center justify-between">
          <TigoLogo variant="negative" background="blue" width={100} />
          <div className="text-center">
            <h1 className="text-2xl font-bold">Design System</h1>
            <p className="text-sm opacity-80">@wilson-romero/tigo — v0.1.0</p>
          </div>
          <nav className="flex gap-1 text-sm">
            <span className="bg-white/20 text-white px-3 py-1 rounded font-medium">TIGO</span>
            <Link href="/carbon" className="text-white/70 hover:text-white px-3 py-1 rounded hover:bg-white/10 transition-colors">
              Carbon
            </Link>
            <Link href="/polaris" className="text-white/70 hover:text-white px-3 py-1 rounded hover:bg-white/10 transition-colors">
              Polaris
            </Link>
            <Link href="/" className="text-white/70 hover:text-white px-3 py-1 rounded hover:bg-white/10 transition-colors">
              Comparar →
            </Link>
          </nav>
        </header>

        <main className="max-w-6xl mx-auto px-8 py-10 space-y-16">

          {/* Marca & Logo */}
          <section>
            <h2 className="text-2xl font-bold mb-6 text-primary">Marca &amp; Logo</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="flex flex-col items-center gap-3 p-6 rounded-lg border">
                <TigoLogo variant="color" width={120} />
                <span className="text-xs text-muted-foreground">color</span>
              </div>
              <div className="flex flex-col items-center gap-3 p-6 rounded-lg" style={{ backgroundColor: "#5060BA" }}>
                <TigoLogo variant="negative" background="blue" width={120} />
                <span className="text-xs text-white/70">negative / azul</span>
              </div>
              <div className="flex flex-col items-center gap-3 p-6 rounded-lg" style={{ backgroundColor: "#E61950" }}>
                <TigoLogo variant="negative" background="red" width={120} />
                <span className="text-xs text-white/70">negative / rojo</span>
              </div>
              <div className="flex flex-col items-center gap-3 p-6 rounded-lg" style={{ backgroundColor: "#FFD700" }}>
                <TigoLogo variant="negative" background="yellow" width={120} />
                <span className="text-xs" style={{ color: "#5060BA" }}>negative / amarillo</span>
              </div>
            </div>
          </section>

          {/* Paleta de colores */}
          <section>
            <h2 className="text-2xl font-bold mb-6 text-primary">Paleta de Colores</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {BRAND.map((c) => (
                <div key={c.hex} className="rounded-lg overflow-hidden border">
                  <div className="h-24 w-full" style={{ backgroundColor: c.hex }} />
                  <div className="p-3">
                    <p className="font-bold text-sm">{c.name}</p>
                    <p className="text-xs text-muted-foreground font-mono">{c.hex}</p>
                    <p className="text-xs text-muted-foreground">Pantone {c.pantone}</p>
                    <Badge variant="outline" className="mt-1 text-xs">{c.role}</Badge>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Botones */}
          <section>
            <h2 className="text-2xl font-bold mb-6 text-primary">Botones</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-wrap gap-3">
                  <Button>Default (Azul TIGO)</Button>
                  <Button variant="secondary">Secondary (Amarillo)</Button>
                  <Button variant="destructive">Destructive (Rojo)</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="link">Link</Button>
                  <Button size="sm">Small</Button>
                  <Button size="lg">Large</Button>
                  <Button disabled>Disabled</Button>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Badges */}
          <section>
            <h2 className="text-2xl font-bold mb-6 text-primary">Badges</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-wrap gap-3">
                  <Badge>Default</Badge>
                  <Badge variant="secondary">Secondary</Badge>
                  <Badge variant="destructive">Destructive</Badge>
                  <Badge variant="outline">Outline</Badge>
                  <Badge className="bg-tigo-green text-white">Verde TIGO</Badge>
                  <Badge className="bg-tigo-blue text-white">Azul TIGO</Badge>
                  <Badge className="bg-tigo-yellow text-tigo-blue font-bold">Amarillo</Badge>
                  <Badge className="bg-tigo-red text-white">Rojo</Badge>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Cards */}
          <section>
            <h2 className="text-2xl font-bold mb-6 text-primary">Cards</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle>Plan Básico</CardTitle>
                  <CardDescription>Conectividad esencial TIGO</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold text-primary">$25.000</p>
                  <p className="text-sm text-muted-foreground">/ mes</p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Contratar</Button>
                </CardFooter>
              </Card>
              <Card className="border-2 border-primary">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle>Plan Pro</CardTitle>
                    <Badge>Popular</Badge>
                  </div>
                  <CardDescription>Mayor velocidad y beneficios</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold text-primary">$45.000</p>
                  <p className="text-sm text-muted-foreground">/ mes</p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Contratar</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Plan Empresarial</CardTitle>
                  <CardDescription>Soluciones corporativas TIGO</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold text-primary">$85.000</p>
                  <p className="text-sm text-muted-foreground">/ mes</p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Contratar</Button>
                </CardFooter>
              </Card>
            </div>
          </section>

          {/* Formularios */}
          <section>
            <h2 className="text-2xl font-bold mb-6 text-primary">Formularios</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader><CardTitle>Datos de contacto</CardTitle></CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nombre completo</Label>
                    <Input id="name" placeholder="Wilson Romero" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Correo electrónico</Label>
                    <Input id="email" type="email" placeholder="wilson@tigo.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="msg">Mensaje</Label>
                    <Textarea id="msg" placeholder="Escribe tu mensaje..." rows={3} />
                  </div>
                  <div className="flex items-center gap-2">
                    <Checkbox id="terms" checked={checked} onCheckedChange={(v) => setChecked(!!v)} />
                    <Label htmlFor="terms">Acepto los términos y condiciones</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Switch id="notif" checked={switched} onCheckedChange={setSwitched} />
                    <Label htmlFor="notif">Recibir notificaciones</Label>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Enviar</Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader><CardTitle>Selecciones</CardTitle></CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label>Plan de servicio</Label>
                    <Select>
                      <SelectTrigger><SelectValue placeholder="Selecciona un plan" /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="basic">Plan Básico</SelectItem>
                        <SelectItem value="pro">Plan Pro</SelectItem>
                        <SelectItem value="enterprise">Plan Empresarial</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-3">
                    <Label>Tipo de contrato</Label>
                    <RadioGroup defaultValue="monthly">
                      <div className="flex items-center gap-2">
                        <RadioGroupItem value="monthly" id="monthly" />
                        <Label htmlFor="monthly">Mensual</Label>
                      </div>
                      <div className="flex items-center gap-2">
                        <RadioGroupItem value="annual" id="annual" />
                        <Label htmlFor="annual">Anual (20% descuento)</Label>
                      </div>
                    </RadioGroup>
                  </div>
                  <Separator />
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <Label>Cobertura de red</Label>
                      <span className="text-primary font-bold">{progress}%</span>
                    </div>
                    <Progress value={progress} />
                    <div className="flex gap-2 mt-2">
                      <Button size="sm" variant="outline" onClick={() => setProgress(Math.max(0, progress - 10))}>-10</Button>
                      <Button size="sm" variant="outline" onClick={() => setProgress(Math.min(100, progress + 10))}>+10</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Alerts */}
          <section>
            <h2 className="text-2xl font-bold mb-6 text-primary">Alertas</h2>
            <div className="space-y-3">
              <Alert>
                <AlertTitle>Información</AlertTitle>
                <AlertDescription>Tu plan TIGO Pro se renueva automáticamente el próximo 30 de abril.</AlertDescription>
              </Alert>
              <Alert variant="destructive">
                <AlertTitle>Error de conexión</AlertTitle>
                <AlertDescription>No se pudo establecer conexión. Verifica tu línea TIGO e intenta de nuevo.</AlertDescription>
              </Alert>
            </div>
          </section>

          {/* Tabs */}
          <section>
            <h2 className="text-2xl font-bold mb-6 text-primary">Tabs</h2>
            <Tabs defaultValue="mobile">
              <TabsList>
                <TabsTrigger value="mobile">Móvil</TabsTrigger>
                <TabsTrigger value="internet">Internet</TabsTrigger>
                <TabsTrigger value="tv">TV</TabsTrigger>
              </TabsList>
              <TabsContent value="mobile">
                <Card><CardContent className="pt-4"><p>Planes móviles TIGO con la mejor cobertura en Colombia.</p></CardContent></Card>
              </TabsContent>
              <TabsContent value="internet">
                <Card><CardContent className="pt-4"><p>Internet de alta velocidad para tu hogar o empresa.</p></CardContent></Card>
              </TabsContent>
              <TabsContent value="tv">
                <Card><CardContent className="pt-4"><p>TIGO TV con más de 200 canales HD y contenido premium.</p></CardContent></Card>
              </TabsContent>
            </Tabs>
          </section>

          {/* Avatars & Tooltips */}
          <section>
            <h2 className="text-2xl font-bold mb-6 text-primary">Avatars &amp; Tooltips</h2>
            <div className="flex items-center gap-4">
              {["WR", "JD", "AM", "TS"].map((initials) => (
                <Tooltip key={initials}>
                  <TooltipTrigger>
                    <Avatar>
                      <AvatarFallback className="bg-primary text-primary-foreground">{initials}</AvatarFallback>
                    </Avatar>
                  </TooltipTrigger>
                  <TooltipContent>Usuario {initials}</TooltipContent>
                </Tooltip>
              ))}
            </div>
          </section>

          {/* Skeletons */}
          <section>
            <h2 className="text-2xl font-bold mb-6 text-primary">Skeletons</h2>
            <div className="space-y-3 max-w-sm">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-4 w-1/2" />
              <Skeleton className="h-10 w-full rounded-md" />
            </div>
          </section>

          {/* Tipografía */}
          <section>
            <h2 className="text-2xl font-bold mb-6 text-primary">Tipografía — Cronos Pro</h2>
            <Card>
              <CardContent className="pt-6 space-y-4">
                <p className="text-4xl font-bold">Cronos Pro Bold — TIGO</p>
                <p className="text-2xl font-normal">Cronos Pro Regular — the world's telecom</p>
                <p className="text-xl italic">Cronos Pro Italic — conectividad para todos</p>
                <Separator />
                <p className="text-sm text-muted-foreground">
                  ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz 0123456789 !@#$%^&amp;*()
                </p>
              </CardContent>
            </Card>
          </section>

        </main>

        {/* Footer */}
        <footer className="mt-16 bg-muted border-t py-6 px-8 flex items-center justify-between">
          <TigoLogo variant="color" width={70} />
          <p className="text-sm text-muted-foreground">
            @wilson-romero/tigo — Design System basado en el Manual de Normas de Identidad Visual TIGO
          </p>
          <div className="flex gap-1">
            {["#5060BA", "#FFD700", "#E61950", "#41C800"].map((c) => (
              <div key={c} className="w-4 h-4 rounded-full" style={{ backgroundColor: c }} />
            ))}
          </div>
        </footer>
      </div>
    </TooltipProvider>
  )
}
