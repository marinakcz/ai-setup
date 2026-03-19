"use client"

import { SiteFooter } from "@/components/site-footer"

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
            <p className="font-mono text-xs tracking-[0.2em] text-primary mb-2">/ POD KAPOTOU</p>
            <h1 className="font-body font-extrabold text-[clamp(1.5rem,2.8vw,2.5rem)] leading-[1.6] tracking-[0.06em] text-foreground mb-4">
              Autonomní AI studio
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
            <p className="font-mono text-xs tracking-[0.2em] text-primary mb-2">/ JAK TO FUNGUJE</p>
            <h2 className="font-body font-extrabold text-[clamp(1.5rem,2.8vw,2.5rem)] leading-[1.6] tracking-[0.06em] text-foreground">
              Od briefu k produktu
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
                <p className="font-mono text-xs tracking-[0.2em] text-primary mb-2">/ {item.tag}</p>
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

      {/* ── ARCHITECTURE ── */}
      <section className="relative z-10 py-24 md:py-32">
        <div className="max-w-[1408px] mx-auto px-6">
          <div className="text-center mb-16">
            <p className="font-mono text-xs tracking-[0.2em] text-primary mb-2">/ ARCHITEKTURA</p>
            <h2 className="font-body font-extrabold text-[clamp(1.5rem,2.8vw,2.5rem)] leading-[1.6] tracking-[0.06em] text-foreground">
              Pět vrstev
            </h2>
          </div>

          <div className="max-w-md mx-auto">
            {[
              { label: "Orchestrátor", desc: "Plánuje, deleguje, rozhoduje", num: "01" },
              { label: "Agenti", desc: "Izolovaní specialisté v kontejnerech", num: "02" },
              { label: "Paměť", desc: "Databáze, vektory, naučené znalosti", num: "03" },
              { label: "Nástroje", desc: "Figma, GitHub, Playwright, Vercel...", num: "04" },
              { label: "Pipeline", desc: "Automatický build, test, deploy", num: "05" },
            ].map((item, i, arr) => (
              <div key={i}>
                <div className="group flex items-center gap-5 p-5 rounded-xl border border-border hover:border-primary/40 hover:bg-primary/[0.02] transition-all duration-300 relative">
                  <span className="font-mono text-xs text-primary/60 w-10 text-center shrink-0 group-hover:text-primary transition-colors duration-300">{item.num}</span>
                  <div>
                    <div className="font-body font-semibold text-foreground group-hover:text-primary transition-colors duration-300">{item.label}</div>
                    <div className="font-mono text-xs text-muted-foreground mt-0.5">{item.desc}</div>
                  </div>
                </div>
                {i < arr.length - 1 && (
                  <div className="flex justify-center py-1">
                    <div className="w-px h-6 bg-gradient-to-b from-border to-border/30" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="w-screen relative left-1/2 -translate-x-1/2 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      {/* ── TOOLS ── */}
      <section className="relative z-10 py-24">
        <div className="max-w-[1408px] mx-auto px-6">
          <div className="text-center mb-14">
            <p className="font-mono text-xs tracking-[0.2em] text-primary mb-2">/ NÁSTROJE</p>
            <h2 className="font-body font-extrabold text-[clamp(1.5rem,2.8vw,2.5rem)] leading-[1.6] tracking-[0.06em] text-foreground">
              Vendor-agnostic
            </h2>
            <p className="font-body font-light text-[clamp(0.875rem,1.1vw,1.125rem)] leading-[1.7] text-muted-foreground mt-3 max-w-xl mx-auto">
              Každý nástroj jde vyměnit. Žádná závislost na jednom poskytovateli.
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
            <p className="font-mono text-xs tracking-[0.2em] text-primary mb-2">/ HARDWARE</p>
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {[
              { title: "Nezávislost", desc: "AI model, hosting, databáze, coding assistant. Vše jde vyměnit bez dopadu na zbytek." },
              { title: "Transparentnost", desc: "Každý krok je zalogovaný a vysvětlitelný. Žádná černá skříňka." },
              { title: "Člověk rozhoduje", desc: "Systém navrhuje a realizuje. Směr a finální slovo má vždy člověk." },
              { title: "Klonovatelný", desc: "Celý systém jde naklonovat na jiný stroj jedním příkazem." },
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
