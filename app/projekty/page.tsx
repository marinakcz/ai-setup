import type { Metadata } from "next"
import { SiteFooter } from "@/components/site-footer"

export const metadata: Metadata = {
  title: "Projekty",
  description: "Co se chystá a jaké máme aktuálně kapacity.",
}

const UPDATES = [
  {
    date: "Březen 2026",
    status: "active" as const,
    title: "Spouštíme studio",
    desc: "Připravujeme první projekty a ladíme procesy. Kapacity jsou otevřené — ideální čas se ozvat.",
  },
]

const STATUS_MAP = {
  active: { label: "Aktivní", color: "bg-primary" },
  planned: { label: "Plánované", color: "bg-muted-foreground" },
  done: { label: "Hotovo", color: "bg-green-500" },
}

export default function ProjectsPage() {
  return (
    <div className="relative min-h-screen flex flex-col">
      <main className="relative z-10 max-w-5xl mx-auto px-6 pt-32 pb-24">
        <p className="font-mono text-xs tracking-[0.2em] text-primary mb-2">/ PROJEKTY</p>
        <h1 className="font-body font-extrabold text-[clamp(1.5rem,2.8vw,2.5rem)] leading-[1.6] tracking-[0.06em] text-foreground mb-4">
          Co se děje
        </h1>
        <p className="font-body font-normal text-[clamp(0.875rem,1.1vw,1.125rem)] leading-[1.7] text-muted-foreground mb-16 max-w-xl">
          Krátké zprávy o tom, na čem pracujeme a jaké máme aktuálně kapacity.
        </p>

        {/* Kapacity */}
        <div className="mb-16 p-6 rounded-xl border border-primary/20 bg-primary/[0.03]">
          <div className="flex items-center gap-3 mb-2">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="font-mono text-xs tracking-[0.15em] text-primary">KAPACITY</span>
          </div>
          <p className="font-body text-foreground">
            Aktuálně máme volné kapacity pro nové projekty.
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-8">
          {UPDATES.map((update, i) => {
            const status = STATUS_MAP[update.status]
            return (
              <div key={i} className="relative pl-8 border-l border-border">
                <div className={`absolute left-0 top-1.5 w-2.5 h-2.5 rounded-full -translate-x-[5.5px] ${status.color}`} />
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-mono text-xs text-muted-foreground">{update.date}</span>
                  <span className="font-mono text-[10px] tracking-[0.1em] text-primary/80 px-2 py-0.5 rounded-full border border-primary/20">
                    {status.label}
                  </span>
                </div>
                <h2 className="font-body font-semibold text-lg text-foreground mb-1">
                  {update.title}
                </h2>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {update.desc}
                </p>
              </div>
            )
          })}
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
