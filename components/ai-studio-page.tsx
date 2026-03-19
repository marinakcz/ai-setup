"use client"

import { SiteFooter } from "@/components/site-footer"

// ─── Data ───────────────────────────────────────────────────────────────────

const ICON_MAP: Record<string, string> = {
  "Claude": "/icons/claude.svg",
  "Next.js": "/icons/nodejs.svg",
  "Vercel": "/icons/vercel.svg",
  "GitHub": "/icons/github.svg",
  "Figma": "/icons/figma.svg",
  "Playwright": "/icons/playwright.svg",
  "Supabase": "/icons/supabase.svg",
  "Resend": "/icons/resend.svg",
  "Docker": "/icons/docker.svg",
  "Sentry": "/icons/sentry.svg",
}

// ─── Main page ──────────────────────────────────────────────────────────────

export default function AiStudioPage() {
  return (
    <div className="relative min-h-screen flex flex-col">

      <main>

      {/* ── HERO ── */}
      <section className="relative z-10 pt-32 pb-24">
        <div className="max-w-[1408px] mx-auto px-6 w-full">
          <div className="text-center mb-16">
            <p className="font-mono text-xs tracking-[0.2em] text-primary mb-2">/ POD KAPOTOU</p>
            <h1 className="font-body font-extrabold text-[clamp(1.5rem,2.8vw,2.5rem)] leading-[1.6] tracking-[0.06em] text-foreground mb-4">
              Jak to celé funguje
            </h1>
            <p className="font-body font-light text-[clamp(0.875rem,1.1vw,1.125rem)] leading-[1.7] text-muted-foreground max-w-xl mx-auto">
              Designér, AI agenti a sada nástrojů. Od nápadu po hotový produkt. Weby, aplikace, prototypy, experimenty.
            </p>
          </div>
        </div>
      </section>

      <div className="w-screen relative left-1/2 -translate-x-1/2 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      {/* ── PROCESS — 3 pillars like HP ── */}
      <section className="relative z-10 py-24 md:py-32">
        <div className="max-w-[1408px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-24">
            {[
              {
                tag: "POCHOPENÍ",
                title: "Nejdřív problém",
                desc: "Každý projekt začíná otázkou proč. Research, rozhovory, wireframy. Bez pochopení problému nemá smysl nic stavět.",
              },
              {
                tag: "TVORBA",
                title: "AI agenti tvoří",
                desc: "Specializovaní AI agenti generují kód, testují, analyzují a nasazují. Člověk řídí směr a kontroluje kvalitu.",
              },
              {
                tag: "NASAZENÍ",
                title: "Rychle ven",
                desc: "Automatický build, testy a deploy. Místo měsíců plánování iterace po dnech. Zpětná vazba od prvního dne.",
              },
            ].map((item, i) => (
              <div key={i}>
                <p className="font-mono text-xs tracking-[0.2em] text-primary mb-2">/ {item.tag}</p>
                <h2 className="font-body font-semibold text-[clamp(1.25rem,1.6vw,1.75rem)] leading-snug text-foreground mb-3">
                  {item.title}
                </h2>
                <p className="font-body font-light text-[clamp(0.875rem,1.1vw,1.125rem)] leading-[1.7] text-muted-foreground">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="w-screen relative left-1/2 -translate-x-1/2 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      {/* ── STACK — now vs future ── */}
      <section className="relative z-10 py-24 md:py-32">
        <div className="max-w-[1408px] mx-auto px-6">
          <div className="text-center mb-16">
            <p className="font-mono text-xs tracking-[0.2em] text-primary mb-2">/ NÁSTROJE</p>
            <h2 className="font-body font-extrabold text-[clamp(1.5rem,2.8vw,2.5rem)] leading-[1.6] tracking-[0.06em] text-foreground">
              S čím pracuji
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-8 md:gap-0 max-w-4xl mx-auto items-start">
            {/* NOW */}
            <div className="p-8 rounded-2xl border border-primary/30 bg-primary/[0.02]">
              <div className="flex items-center gap-3 mb-8">
                <span className="w-2.5 h-2.5 rounded-full bg-primary" />
                <span className="font-mono text-xs tracking-[0.15em] text-primary font-medium">ZÁKLAD</span>
              </div>
              <div className="space-y-4">
                {[
                  { icon: "Claude", label: "AI agenti", note: "Kód, analýza, testy" },
                  { icon: "Figma", label: "Design", note: "Wireframy, prototypy" },
                  { icon: "Next.js", label: "Framework", note: "React, SSR, API" },
                  { icon: "Vercel", label: "Deploy", note: "Hosting, preview, CDN" },
                  { icon: "GitHub", label: "Kód", note: "Verzování, CI/CD" },
                  { icon: "Supabase", label: "Data", note: "Databáze, auth" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <img src={ICON_MAP[item.icon]} alt="" className="w-5 h-5 shrink-0" />
                    <span className="font-mono text-xs text-foreground">{item.label}</span>
                    <span className="font-mono text-[10px] text-muted-foreground ml-auto">{item.note}</span>
                  </div>
                ))}
              </div>
              <p className="font-mono text-[10px] text-muted-foreground mt-6 pt-4 border-t border-border/40">
                Člověk navrhuje, AI agenti realizují
              </p>
            </div>

            {/* Arrow */}
            <div className="hidden md:flex items-center justify-center px-6 pt-20">
              <svg viewBox="0 0 60 24" className="w-14 h-6 text-muted-foreground/30" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M0 12h54M46 5l8 7-8 7" />
              </svg>
            </div>
            <div className="flex md:hidden items-center justify-center">
              <svg viewBox="0 0 24 40" className="w-6 h-10 text-muted-foreground/30" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 0v34M5 26l7 8 7-8" />
              </svg>
            </div>

            {/* FUTURE */}
            <div className="p-8 rounded-2xl border border-border border-dashed">
              <div className="flex items-center gap-3 mb-8">
                <span className="w-2.5 h-2.5 rounded-full border-2 border-muted-foreground" />
                <span className="font-mono text-xs tracking-[0.15em] text-muted-foreground">ROZŠIŘUJEME</span>
              </div>
              <div className="space-y-4">
                {[
                  { icon: "Docker", label: "Sandbox", note: "Izolované prostředí" },
                  { icon: "Playwright", label: "Auto-testy", note: "QA bez zásahu" },
                  { icon: "Sentry", label: "Monitoring", note: "Hlídání 24/7" },
                  { icon: "GitHub", label: "Orchestrace", note: "Úkol → plán → výsledek" },
                  { icon: "Vercel", label: "Trvalé workflow", note: "Přežijí výpadek" },
                  { icon: "Supabase", label: "Multi-model AI", note: "Nezávislost na poskytovateli" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 opacity-50">
                    <img src={ICON_MAP[item.icon]} alt="" className="w-5 h-5 shrink-0" />
                    <span className="font-mono text-xs text-foreground">{item.label}</span>
                    <span className="font-mono text-[10px] text-muted-foreground ml-auto">{item.note}</span>
                  </div>
                ))}
              </div>
              <p className="font-mono text-[10px] text-muted-foreground mt-6 pt-4 border-t border-border/40">
                Víc autonomie, víc prostoru pro tvůrčí práci
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="w-screen relative left-1/2 -translate-x-1/2 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      {/* ── HARDWARE ── */}
      <section className="relative z-10 py-24">
        <div className="max-w-[1408px] mx-auto px-6">
          <div className="text-center mb-14">
            <p className="font-mono text-xs tracking-[0.2em] text-primary mb-2">/ HARDWARE</p>
            <h2 className="font-body font-extrabold text-[clamp(1.5rem,2.8vw,2.5rem)] leading-[1.6] tracking-[0.06em] text-foreground">
              Tady bydlí AI studio.
            </h2>
            <p className="font-body font-light text-[clamp(0.875rem,1.1vw,1.125rem)] leading-[1.7] text-muted-foreground mt-2">
              Malý. Ale maká jako ďas, pane profesore.
            </p>
          </div>

          <div className="max-w-xs mx-auto mb-4">
            <img src="/mac-mini.png" alt="Mac mini M4" className="w-full h-auto" loading="lazy" />
          </div>
          <p className="text-center font-mono text-xs text-muted-foreground mb-6">+ NAS Synology pro zálohy</p>
        </div>
      </section>

      <div className="w-screen relative left-1/2 -translate-x-1/2 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      {/* ── PRINCIPLES ── */}
      <section className="relative z-10 py-24 md:py-32">
        <div className="max-w-[1408px] mx-auto px-6">
          <div className="text-center mb-16">
            <p className="font-mono text-xs tracking-[0.2em] text-primary mb-2">/ PRINCIPY</p>
            <h2 className="font-body font-extrabold text-[clamp(1.5rem,2.8vw,2.5rem)] leading-[1.6] tracking-[0.06em] text-foreground">
              Na čem to stojí
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {[
              { title: "Nezávislost", desc: "Žádný vendor lock-in. AI model, hosting i databáze jdou kdykoliv vyměnit." },
              { title: "Transparentnost", desc: "Každý krok je sledovatelný a vysvětlitelný. Žádná černá skříňka." },
              { title: "Člověk rozhoduje", desc: "AI agenti navrhují a realizují. Směr a finální slovo má vždy člověk." },
              { title: "Iterace", desc: "Malé kroky, rychlá zpětná vazba. Funkční prototyp za dny, ne za měsíce." },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                <div>
                  <h3 className="font-body font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="font-body font-light text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      </main>

      <SiteFooter />
    </div>
  )
}
