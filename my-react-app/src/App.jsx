import {
  ArrowRight,
  Cloud,
  LayoutDashboard,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react"

import { Badge } from "./components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./components/ui/card"
import { Button } from "./components/ui/button"

const features = [
  {
    title: "Composable building blocks",
    description:
      "Mix sections, cards, and interactions without fighting CSS. Just use the primitives and ship.",
    icon: LayoutDashboard,
  },
  {
    title: "Thoughtful defaults",
    description:
      "Tokens, typography, and spacing are tuned for modern marketing sites so you start in the right place.",
    icon: ShieldCheck,
  },
  {
    title: "Production ready",
    description:
      "Responsive out of the box, accessible by design, and powered by Tailwind + Radix.",
    icon: Cloud,
  },
]

const testimonials = [
  {
    quote:
      "We rebuilt our launch page in a single afternoon and it already looks better than anything we had before.",
    name: "Avery Kim",
    role: "Product Lead, Orbit Labs",
  },
  {
    quote:
      "The components are so composable that tweaking the layout felt more like playing than working.",
    name: "Leo Kramer",
    role: "Design Engineer, Fieldset",
  },
]

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="absolute inset-x-0 top-0 -z-10 h-[420px] bg-gradient-to-b from-primary/15 via-primary/5 to-transparent blur-3xl" />
      <header className="border-b border-border/70 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Sparkles className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                Introducing
              </p>
              <p className="text-lg font-semibold">Lumen UI</p>
            </div>
          </div>
          <nav className="hidden items-center gap-8 text-sm font-medium text-muted-foreground md:flex">
            <a className="transition-colors hover:text-foreground" href="#features">
              Features
            </a>
            <a className="transition-colors hover:text-foreground" href="#showcase">
              Showcase
            </a>
            <a className="transition-colors hover:text-foreground" href="#pricing">
              Pricing
            </a>
            <a className="transition-colors hover:text-foreground" href="#contact">
              Contact
            </a>
          </nav>
          <div className="flex items-center gap-3">
            <Button variant="ghost">Sign in</Button>
            <Button>
              Start building
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>

      <main className="mx-auto flex max-w-6xl flex-col gap-24 px-6 pb-24 pt-16 md:pt-24">
        <section className="grid gap-12 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <div className="space-y-6">
            <Badge className="w-fit bg-primary/10 text-primary">
              Crafted with shadcn/ui
            </Badge>
            <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">
              Build beautiful landing pages without leaving your flow.
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              We combined the precision of shadcn/ui with purposeful marketing
              sections so you can launch faster and iterate without friction.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button size="lg" className="gap-2">
                Explore components
                <Zap className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                View live demo
              </Button>
            </div>
            <div className="flex items-center gap-6 pt-2 text-sm text-muted-foreground">
              <div className="flex -space-x-3">
                {["AK", "LK", "MS", "JT"].map((initials) => (
                  <div
                    key={initials}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-xs font-semibold uppercase shadow-sm"
                  >
                    {initials}
                  </div>
                ))}
              </div>
              Trusted by design teams shipping weekly.
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-primary/20 via-secondary/20 to-transparent blur-2xl" />
            <Card className="relative overflow-hidden border-primary/10 bg-white/70 p-0 shadow-xl dark:bg-secondary/20">
              <CardHeader className="gap-3 border-b border-border/50 bg-gradient-to-r from-primary/15 to-primary/5 p-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">Campaign overview</CardTitle>
                    <CardDescription>
                      Real-time engagement for your next launch.
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6 p-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-lg border border-border/70 p-4">
                    <p className="text-sm text-muted-foreground">Newsletter</p>
                    <p className="mt-2 text-2xl font-semibold">58% open rate</p>
                    <p className="text-xs text-muted-foreground">
                      +12% vs last week
                    </p>
                  </div>
                  <div className="rounded-lg border border-border/70 p-4">
                    <p className="text-sm text-muted-foreground">Waitlist</p>
                    <p className="mt-2 text-2xl font-semibold">4,126 signups</p>
                    <p className="text-xs text-muted-foreground">
                      Conversion top 3%
                    </p>
                  </div>
                </div>
                <div className="rounded-xl border border-dashed border-primary/40 p-5">
                  <p className="text-sm font-medium text-primary">
                    A new milestone unlocked ✨
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Automations, analytics, and a polished brand system packaged
                    in one elegant starter kit.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section
          id="features"
          className="grid gap-6 md:grid-cols-3 md:gap-8"
        >
          {features.map(({ title, description, icon: Icon }) => (
            <Card key={title} className="h-full border-border/60 bg-card/80">
              <CardHeader className="flex flex-row items-start gap-4 space-y-0">
                <div className="rounded-full border border-primary/30 bg-primary/10 p-2 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="space-y-1">
                  <CardTitle>{title}</CardTitle>
                  <CardDescription>{description}</CardDescription>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Fully responsive layouts</li>
                  <li>• Consistent theming with tokens</li>
                  <li>• Copy-paste friendly snippets</li>
                </ul>
              </CardContent>
            </Card>
          ))}
        </section>

        <section
          id="showcase"
          className="grid gap-6 rounded-3xl border border-border/70 bg-card/80 p-8 md:grid-cols-[1fr_1.1fr]"
        >
          <div className="space-y-4">
            <Badge variant="secondary" className="w-fit">
              Customers love it
            </Badge>
            <h2 className="text-3xl font-semibold md:text-4xl">
              Crafted for designers, engineered for velocity.
            </h2>
            <p className="text-lg text-muted-foreground">
              Lumen’s sections and components work together so you can focus on
              storytelling, not scaffolding. Edit content, swap modules, and go
              live with confidence.
            </p>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="rounded-full border border-border bg-background px-4 py-2 font-medium">
                No design debt
              </div>
              <div className="rounded-full border border-border bg-background px-4 py-2 font-medium">
                Copy-friendly
              </div>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {testimonials.map(({ quote, name, role }) => (
              <Card key={name} className="border-border/60 bg-background/80">
                <CardContent className="flex h-full flex-col justify-between gap-6 p-6">
                  <p className="text-base leading-relaxed">&ldquo;{quote}&rdquo;</p>
                  <div>
                    <p className="text-sm font-semibold">{name}</p>
                    <p className="text-xs text-muted-foreground">{role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section
          id="pricing"
          className="flex flex-col gap-6 rounded-3xl border border-border/70 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent p-10 text-center md:p-16"
        >
          <div className="mx-auto max-w-2xl space-y-4">
            <h2 className="text-3xl font-semibold md:text-4xl">
              Pricing that scales with your launches.
            </h2>
            <p className="text-lg text-muted-foreground">
              Start for free, upgrade when you need unlimited projects and
              collaboration tools.
            </p>
          </div>
          <div className="flex flex-col items-center gap-3 md:flex-row md:justify-center">
            <div className="rounded-full border border-border/80 bg-background px-6 py-2 text-sm font-medium text-muted-foreground">
              Early adopter launch pricing
            </div>
            <div className="text-3xl font-semibold text-primary">$29</div>
            <span className="text-sm text-muted-foreground">per project</span>
          </div>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <Button size="lg" className="gap-2">
              Claim your seat
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button size="lg" variant="ghost">
              Compare plans
            </Button>
          </div>
        </section>

        <section
          id="contact"
          className="rounded-3xl border border-border/60 bg-card/80 p-10 md:p-14"
        >
          <div className="flex flex-col gap-6 text-center md:grid md:grid-cols-[1fr_auto] md:items-center md:text-left">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold md:text-4xl">
                Ready to launch your next story?
              </h2>
              <p className="text-lg text-muted-foreground">
                Drop into our inbox and we will send you the starter kit, sample
                copy, and a quick Loom walkthrough.
              </p>
            </div>
            <Button size="lg">
              Talk to us
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </section>
      </main>

      <footer className="border-t border-border/70 bg-background/80">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-4 px-6 py-6 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-2 font-medium text-foreground">
            <Sparkles className="h-4 w-4" />
            Lumen
          </div>
          <div className="flex gap-6">
            <a className="hover:text-foreground" href="#features">
              Features
            </a>
            <a className="hover:text-foreground" href="#pricing">
              Pricing
            </a>
            <a className="hover:text-foreground" href="#contact">
              Contact
            </a>
          </div>
          <p>© {new Date().getFullYear()} Lumen. Crafted with shadcn/ui.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
