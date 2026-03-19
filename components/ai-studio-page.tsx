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

          {/* Flow diagram */}
          <div className="max-w-4xl mx-auto">

            {/* Main flow: Designér → Studio → Produkt */}
            <div className="flex flex-col md:flex-row items-stretch gap-6 mb-6">

              {/* Designér */}
              <div className="flex-1 p-6 rounded-xl border border-border text-center">
                <p className="font-mono text-xs tracking-[0.15em] text-primary mb-2">VSTUP</p>
                <h3 className="font-body font-semibold text-lg text-foreground mb-2">Designér</h3>
                <p className="font-mono text-xs text-muted-foreground">Brief, směr, schválení</p>
              </div>

              {/* Arrow */}
              <div className="hidden md:flex items-center">
                <svg viewBox="0 0 40 24" className="w-8 h-5 text-primary/30" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"><path d="M0 12h34M26 5l8 7-8 7" /></svg>
              </div>
              <div className="flex md:hidden justify-center">
                <svg viewBox="0 0 24 30" className="w-5 h-6 text-primary/30" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"><path d="M12 0v24M6 18l6 6 6-6" /></svg>
              </div>

              {/* Studio */}
              <div className="flex-[2] p-6 rounded-xl border border-primary/25 bg-primary/[0.02]">
                <p className="font-mono text-xs tracking-[0.15em] text-primary mb-4 text-center">AI STUDIO</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {[
                    { label: "Orchestrátor", tip: "Plánuje, deleguje, rozhoduje" },
                    { label: "Agenti", tip: "Izolovaní specialisté v kontejnerech" },
                    { label: "Paměť", tip: "Databáze, vektory, naučené znalosti" },
                    { label: "Nástroje", tip: "Figma, GitHub, Playwright, Vercel..." },
                    { label: "Pipeline", tip: "Build, test, deploy" },
                    { label: "Učení", tip: "Zpětná vazba a optimalizace" },
                  ].map((item, i) => (
                    <div key={i} className="group relative px-3 py-2.5 rounded-lg border border-border/50 hover:border-primary/40 transition-colors cursor-default text-center">
                      <span className="font-mono text-xs text-foreground group-hover:text-primary transition-colors">{item.label}</span>
                      <span className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 z-50 px-3 py-1.5 rounded-lg bg-foreground text-background text-[10px] font-mono whitespace-nowrap opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200">
                        {item.tip}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Arrow */}
              <div className="hidden md:flex items-center">
                <svg viewBox="0 0 40 24" className="w-8 h-5 text-primary/30" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"><path d="M0 12h34M26 5l8 7-8 7" /></svg>
              </div>
              <div className="flex md:hidden justify-center">
                <svg viewBox="0 0 24 30" className="w-5 h-6 text-primary/30" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"><path d="M12 0v24M6 18l6 6 6-6" /></svg>
              </div>

              {/* Produkt */}
              <div className="flex-1 p-6 rounded-xl border border-border text-center">
                <p className="font-mono text-xs tracking-[0.15em] text-primary mb-2">VÝSTUP</p>
                <h3 className="font-body font-semibold text-lg text-foreground mb-2">Produkt</h3>
                <p className="font-mono text-xs text-muted-foreground">Web, aplikace, prototyp</p>
              </div>
            </div>

            {/* Feedback loop — visible */}
            <div className="rounded-xl border border-dashed border-primary/20 p-4 flex items-center justify-center gap-4">
              <svg viewBox="0 0 20 12" className="w-4 h-3 text-primary/40 rotate-180 shrink-0" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"><path d="M0 6h16M10 1l6 5-6 5" /></svg>
              <div className="text-center">
                <p className="font-mono text-xs text-foreground">Zpětná smyčka</p>
                <p className="font-mono text-[10px] text-muted-foreground mt-0.5">Monitoring, učení, vylepšování. Produkt se zlepšuje sám.</p>
              </div>
              <svg viewBox="0 0 20 12" className="w-4 h-3 text-primary/40 shrink-0" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"><path d="M0 6h16M10 1l6 5-6 5" /></svg>
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

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[
              { icon: "AI modely", note: "Claude, GPT, Gemini..." },
              { icon: "Coding assistant", note: "Claude Code, Codex..." },
              { icon: "Design", note: "Figma" },
              { icon: "Framework", note: "Next.js, React" },
              { icon: "Deploy", note: "Vercel, Netlify..." },
              { icon: "Kód", note: "GitHub, GitLab..." },
              { icon: "Data", note: "Supabase, Neon..." },
              { icon: "Kontejnery", note: "Docker" },
              { icon: "Testy", note: "Playwright" },
              { icon: "Monitoring", note: "Sentry" },
              { icon: "E-maily", note: "Resend" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 p-4 rounded-xl border border-border hover:border-primary/30 transition-colors">
                <img src={ICON_MAP[item.icon]} alt="" className="w-5 h-5 shrink-0" />
                <div>
                  <div className="font-mono text-xs font-medium text-foreground">{item.icon}</div>
                  <div className="font-mono text-[10px] text-muted-foreground">{item.note}</div>
                </div>
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
              Běží lokálně.
            </h2>
            <p className="font-body font-light text-[clamp(0.875rem,1.1vw,1.125rem)] leading-[1.7] text-muted-foreground mt-2">
              Dedikovaný Mac mini. Cloud jen pro deploy a databázi.
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
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
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
