"use client"

import { SiteFooter } from "@/components/site-footer"
import { ScrambleTag } from "@/components/scramble-tag"

const ICON_MAP: Record<string, string> = {
  "AI modely": "/icons/claude.svg",
  "Coding assistant": "/icons/claude.svg",
  "Framework": "/icons/nodejs.svg",
  "Deploy": "/icons/vercel.svg",
  "Kód": "/icons/github.svg",
  "Design": "/icons/figma.svg",
  "Testy": "/icons/playwright.svg",
  "Data": "/icons/supabase.svg",
  "E-maily": "/icons/resend.svg",
  "Kontejnery": "/icons/docker.svg",
  "Monitoring": "/icons/sentry.svg",
  "Scraping": "/icons/nodejs.svg",
  "Poznámky": "/icons/obsidian.svg",
  "Notifikace": "/icons/telegram.svg",
  "Lokální AI": "/icons/openai.svg",
}

export default function AiStudioPage() {
  return (
    <div className="relative min-h-screen flex flex-col">
      <main>

      {/* ── HERO ── */}
      <section className="relative z-10 pt-32 pb-24">
        <div className="max-w-[1408px] mx-auto px-6 w-full">
          <div className="text-center mb-16">
            <p className="font-mono text-xs tracking-[0.2em] text-primary mb-2">
              <ScrambleTag text="/ POD KAPOTOU" delay={200} />
            </p>
            <h1 className="font-body font-extrabold text-[clamp(1.5rem,2.8vw,2.5rem)] leading-[1.6] tracking-[0.06em] text-foreground mb-4">
              AI studio / Levou zadní
            </h1>
            <p className="font-body font-light text-[clamp(0.875rem,1.1vw,1.125rem)] leading-[1.7] text-muted-foreground max-w-2xl mx-auto">
              Modulární systém AI agentů, paměti a nástrojů. Zadáte záměr, systém naplánuje postup, sestaví tým agentů a vytvoří funkční produkt. Weby, aplikace, prototypy, experimenty.
            </p>
          </div>
        </div>
      </section>

      <div className="w-screen relative left-1/2 -translate-x-1/2 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      {/* ── HOW IT WORKS ── */}
      <section className="relative z-10 py-24 md:py-32">
        <div className="max-w-[1408px] mx-auto px-6">
          <div className="text-center mb-16">
            <p className="font-mono text-xs tracking-[0.2em] text-primary mb-2">
              <ScrambleTag text="/ JAK TO FUNGUJE" delay={400} />
            </p>
            <h2 className="font-body font-extrabold text-[clamp(1.5rem,2.8vw,2.5rem)] leading-[1.6] tracking-[0.06em] text-foreground">
              Zázraky na počkání. Doslova.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-24">
            {[
              {
                tag: "ZADÁNÍ",
                title: "Popíšete co potřebujete",
                desc: "Brief v přirozené řeči. Cíl, představa, podklady, omezení. Orchestrátor vytvoří strukturovaný plán a navrhne postup.",
              },
              {
                tag: "TVORBA",
                title: "AI agenti realizují",
                desc: "Specializovaní agenti pracují paralelně. Každý má svou roli, své nástroje a běží izolovaně. Výstupy se průběžně testují.",
              },
              {
                tag: "VÝSLEDEK",
                title: "Funkční produkt",
                desc: "Automatický build, testy a deploy. Systém produkt dále sleduje, učí se a navrhuje vylepšení.",
              },
            ].map((item, i) => (
              <div key={i}>
                <p className="font-mono text-xs tracking-[0.2em] text-primary mb-2">
                  <ScrambleTag text={`/ ${item.tag}`} delay={600 + i * 200} />
                </p>
                <h3 className="font-body font-semibold text-[clamp(1.25rem,1.6vw,1.75rem)] leading-snug text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="font-body font-light text-[clamp(0.875rem,1.1vw,1.125rem)] leading-[1.7] text-muted-foreground">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="w-screen relative left-1/2 -translate-x-1/2 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      {/* ── ARCHITECTURE — clean boxes ── */}
      <section className="relative z-10 py-24 md:py-32">
        <div className="max-w-[1408px] mx-auto px-6">
          <div className="text-center mb-16">
            <p className="font-mono text-xs tracking-[0.2em] text-primary mb-2">
              <ScrambleTag text="/ ARCHITEKTURA" delay={300} />
            </p>
            <h2 className="font-body font-extrabold text-[clamp(1.5rem,2.8vw,2.5rem)] leading-[1.6] tracking-[0.06em] text-foreground">
              Jak to spolupracuje
            </h2>
          </div>

          {/* Static flow diagram */}
          <div className="max-w-4xl mx-auto">

            {/* Main horizontal flow */}
            <div className="flex flex-col items-center gap-3">

              {/* Row 1: Designér → Orchestrátor */}
              <div className="flex items-center gap-4 w-full justify-center">
                <div className="group relative px-5 py-3 rounded-xl border border-border/60 bg-card/30 cursor-default">
                  <span className="font-mono text-xs text-muted-foreground">Designér</span>
                  <span className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 z-50 px-3 py-1.5 rounded-lg bg-foreground text-background text-xs font-mono whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity hidden md:block">Zadá brief, schválí plán, řídí směr</span>
                </div>
                <span className="font-mono text-xs text-primary/40">→</span>
                <div className="group relative px-5 py-3 rounded-xl border border-primary/30 bg-primary/[0.03] cursor-default">
                  <span className="font-mono text-xs text-primary font-medium">Orchestrátor</span>
                  <span className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 z-50 px-3 py-1.5 rounded-lg bg-foreground text-background text-xs font-mono whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity hidden md:block">Rozloží úkol, vybere agenty, koordinuje</span>
                </div>
              </div>

              <span className="font-mono text-primary/30">↓</span>

              {/* Row 2: Agenti + Paměť + Nástroje */}
              <div className="flex items-center gap-3 w-full justify-center flex-wrap">
                <div className="group relative px-5 py-3 rounded-xl border border-primary/30 bg-primary/[0.03] cursor-default">
                  <span className="font-mono text-xs text-foreground">Agenti</span>
                  <span className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 z-50 px-3 py-1.5 rounded-lg bg-foreground text-background text-xs font-mono whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity hidden md:block">Izolovaní specialisté na kód, design, testy</span>
                </div>
                <span className="font-mono text-xs text-muted-foreground/30">+</span>
                <div className="group relative px-5 py-3 rounded-xl border border-border/40 cursor-default">
                  <span className="font-mono text-xs text-muted-foreground">Paměť</span>
                  <span className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 z-50 px-3 py-1.5 rounded-lg bg-foreground text-background text-xs font-mono whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity hidden md:block">Databáze, vektory, naučené znalosti</span>
                </div>
                <span className="font-mono text-xs text-muted-foreground/30">+</span>
                <div className="group relative px-5 py-3 rounded-xl border border-border/40 cursor-default">
                  <span className="font-mono text-xs text-muted-foreground">Nástroje</span>
                  <span className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 z-50 px-3 py-1.5 rounded-lg bg-foreground text-background text-xs font-mono whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity hidden md:block">MCP servery, Figma, GitHub, Playwright...</span>
                </div>
              </div>

              <span className="font-mono text-primary/30">↓</span>

              {/* Row 3: Pipeline → Produkt */}
              <div className="flex items-center gap-4 w-full justify-center">
                <div className="group relative px-5 py-3 rounded-xl border border-primary/30 bg-primary/[0.03] cursor-default">
                  <span className="font-mono text-xs text-foreground">Pipeline</span>
                  <span className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 z-50 px-3 py-1.5 rounded-lg bg-foreground text-background text-xs font-mono whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity hidden md:block">Build, test, deploy bez zásahu</span>
                </div>
                <span className="font-mono text-xs text-primary/40">→</span>
                <div className="group relative px-5 py-3 rounded-xl border border-border/60 bg-card/30 cursor-default">
                  <span className="font-mono text-xs text-muted-foreground">Produkt</span>
                  <span className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 z-50 px-3 py-1.5 rounded-lg bg-foreground text-background text-xs font-mono whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity hidden md:block">Web, aplikace, prototyp. Nasazený a živý.</span>
                </div>
              </div>

              {/* Feedback loop */}
              <div className="mt-2 px-4 py-2 rounded-lg border border-dashed border-border/40">
                <span className="font-mono text-xs text-muted-foreground">↻ zpětná smyčka · monitoring · učení</span>
              </div>

              {/* Human note */}
              <div className="mt-4 text-center">
                <span className="font-mono text-xs text-primary/60">Člověk je součástí každého kroku. Schvaluje, směřuje, rozhoduje.</span>
              </div>
            </div>

            {/* Descriptions — mobile only */}
            <div className="grid grid-cols-2 gap-6 mt-12 md:hidden">
              {[
                { label: "Orchestrátor", desc: "Rozloží úkol, vybere agenty, koordinuje" },
                { label: "Agenti", desc: "Izolovaní specialisté na kód, design, testy" },
                { label: "Paměť + Nástroje", desc: "Databáze, vektory, MCP servery" },
                { label: "Pipeline", desc: "Build, test, deploy bez zásahu" },
                { label: "Zpětná smyčka", desc: "Monitoring, učení, vylepšování" },
                { label: "Produkt", desc: "Nasazený a sledovaný" },
              ].map((item, i) => (
                <div key={i}>
                  <p className="font-mono text-xs text-foreground font-medium mb-1">{item.label}</p>
                  <p className="font-mono text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="w-screen relative left-1/2 -translate-x-1/2 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      {/* ── TOOLS ── */}
      <section className="relative z-10 py-24">
        <div className="max-w-[1408px] mx-auto px-6">
          <div className="text-center mb-14">
            <p className="font-mono text-xs tracking-[0.2em] text-primary mb-2">
              <ScrambleTag text="/ NÁSTROJE" delay={300} />
            </p>
            <h2 className="font-body font-extrabold text-[clamp(1.5rem,2.8vw,2.5rem)] leading-[1.6] tracking-[0.06em] text-foreground">
              Bez závislostí
            </h2>
            <p className="font-body font-light text-[clamp(0.875rem,1.1vw,1.125rem)] leading-[1.7] text-muted-foreground mt-3 max-w-xl mx-auto">
              Každý nástroj jde vyměnit. Nic nás nezamkne k jednomu dodavateli.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {[
              { icon: "AI modely", note: "Claude, GPT, Gemini..." },
              { icon: "Coding assistant", note: "Claude Code, Codex..." },
              { icon: "Design", note: "Figma" },
              { icon: "Framework", note: "Next.js" },
              { icon: "Deploy", note: "Vercel, Netlify..." },
              { icon: "Kód", note: "GitHub" },
              { icon: "Data", note: "Supabase, Neon..." },
              { icon: "Kontejnery", note: "Docker" },
              { icon: "Testy", note: "Playwright" },
              { icon: "Monitoring", note: "Sentry" },
              { icon: "E-maily", note: "Resend" },
              { icon: "Scraping", note: "Firecrawl" },
              { icon: "Poznámky", note: "Obsidian" },
              { icon: "Notifikace", note: "Telegram" },
              { icon: "Lokální AI", note: "Qwen, Llama..." },
            ].map((item, i) => (
              <div key={i} className="group relative flex items-center gap-2.5 px-4 py-2.5 rounded-xl border border-border hover:border-primary/30 transition-colors cursor-default">
                <img src={ICON_MAP[item.icon]} alt="" className="w-4 h-4 shrink-0" />
                <span className="font-mono text-xs text-foreground">{item.icon}</span>
                <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 z-50 px-3 py-1.5 rounded-lg bg-foreground text-background text-xs font-mono whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity hidden md:block">{item.note}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="w-screen relative left-1/2 -translate-x-1/2 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      {/* ── HARDWARE ── */}
      <section className="relative z-10 py-24">
        <div className="max-w-[1408px] mx-auto px-6">
          <div className="text-center mb-14">
            <p className="font-mono text-xs tracking-[0.2em] text-primary mb-2">
              <ScrambleTag text="/ HARDWARE" delay={300} />
            </p>
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
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { num: "01", title: "Nezávislost", desc: "Každou část jde vyměnit. AI model, hosting, databáze, coding assistant." },
              { num: "02", title: "Transparentnost", desc: "Každý krok zalogovaný a vysvětlitelný. Žádná černá skříňka." },
              { num: "03", title: "Člověk rozhoduje", desc: "Systém navrhuje a realizuje. Směr a finální slovo má člověk." },
              { num: "04", title: "Klonovatelný", desc: "Celý systém na jiný stroj jedním příkazem. Git + Docker." },
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-xl border border-border hover:border-primary/30 transition-colors group">
                <span className="font-mono text-xs text-primary/50 group-hover:text-primary transition-colors">{item.num}</span>
                <h3 className="font-body font-semibold text-foreground mt-3 mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                <p className="font-body font-light text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
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
