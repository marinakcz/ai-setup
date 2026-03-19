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

          {/* Layered diagram — top to bottom */}
          <div className="max-w-2xl mx-auto space-y-0">

            {/* Layer 1: Designér */}
            <div className="p-5 rounded-t-2xl border border-border/60 bg-card/20 text-center">
              <p className="font-mono text-xs text-muted-foreground/60 mb-1">VRSTVA 1</p>
              <p className="font-body font-semibold text-foreground">Designér</p>
              <p className="font-mono text-xs text-muted-foreground mt-1">Brief, směr, schválení. Člověk rozhoduje.</p>
            </div>

            {/* Connector */}
            <div className="flex justify-center"><div className="w-px h-4 bg-primary/30" /></div>

            {/* Layer 2: Orchestrátor */}
            <div className="p-5 border border-primary/30 bg-primary/[0.03] text-center">
              <p className="font-mono text-xs text-primary/60 mb-1">VRSTVA 2</p>
              <p className="font-body font-semibold text-primary">Orchestrátor</p>
              <p className="font-mono text-xs text-muted-foreground mt-1">Rozloží úkol na kroky. Vybere agenty. Koordinuje.</p>
            </div>

            {/* Connector */}
            <div className="flex justify-center"><div className="w-px h-4 bg-primary/30" /></div>

            {/* Layer 3: Agenti + podpora */}
            <div className="p-5 border border-primary/20 bg-primary/[0.02] text-center">
              <p className="font-mono text-xs text-primary/60 mb-1">VRSTVA 3</p>
              <div className="flex flex-wrap justify-center gap-3 mb-2">
                <span className="font-body font-semibold text-foreground">Agenti</span>
                <span className="text-border">·</span>
                <span className="font-body text-muted-foreground">Paměť</span>
                <span className="text-border">·</span>
                <span className="font-body text-muted-foreground">Nástroje</span>
              </div>
              <p className="font-mono text-xs text-muted-foreground">Izolovaní specialisté + databáze + MCP servery</p>
            </div>

            {/* Connector */}
            <div className="flex justify-center"><div className="w-px h-4 bg-primary/30" /></div>

            {/* Layer 4: Pipeline */}
            <div className="p-5 border border-primary/20 bg-primary/[0.02] text-center">
              <p className="font-mono text-xs text-primary/60 mb-1">VRSTVA 4</p>
              <p className="font-body font-semibold text-foreground">Pipeline</p>
              <p className="font-mono text-xs text-muted-foreground mt-1">Build, test, deploy. Automaticky.</p>
            </div>

            {/* Connector */}
            <div className="flex justify-center"><div className="w-px h-4 bg-primary/30" /></div>

            {/* Layer 5: Produkt */}
            <div className="p-5 rounded-b-2xl border border-border/60 bg-card/20 text-center">
              <p className="font-mono text-xs text-muted-foreground/60 mb-1">VRSTVA 5</p>
              <p className="font-body font-semibold text-foreground">Produkt</p>
              <p className="font-mono text-xs text-muted-foreground mt-1">Nasazený, sledovaný, vylepšovaný.</p>
            </div>

            {/* Feedback */}
            <div className="flex justify-center pt-4">
              <div className="px-5 py-2.5 rounded-xl border border-dashed border-primary/20 text-center">
                <p className="font-mono text-xs text-muted-foreground">↻ zpětná smyčka — monitoring, učení, optimalizace</p>
              </div>
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
