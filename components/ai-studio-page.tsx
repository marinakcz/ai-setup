"use client"

import { useState, useEffect, useRef } from "react"
import { SiteFooter } from "@/components/site-footer"

// ─── Data ───────────────────────────────────────────────────────────────────

const ICON_MAP: Record<string, string> = {
  "Claude Code": "/icons/claude.svg",
  "Claude Sonnet": "/icons/claude.svg",
  "Next.js": "/icons/nodejs.svg",
  "Vercel": "/icons/vercel.svg",
  "GitHub": "/icons/github.svg",
  "Figma": "/icons/figma.svg",
  "Playwright": "/icons/playwright.svg",
  "Lighthouse": "/icons/nodejs.svg",
  "Supabase": "/icons/supabase.svg",
  "Resend": "/icons/resend.svg",
}

const TOOLS = [
  { name: "Claude Code", desc: "AI asistent — kód, analýza, nasazení" },
  { name: "Claude Sonnet", desc: "AI model pro generování a rozhodování" },
  { name: "Next.js", desc: "Framework pro web" },
  { name: "Vercel", desc: "Hosting a deploy" },
  { name: "GitHub", desc: "Verzování a spolupráce" },
  { name: "Figma", desc: "Design a prototypy" },
  { name: "Supabase", desc: "Databáze a auth" },
  { name: "Resend", desc: "E-maily" },
]

const MCP_SERVERS = ["Figma", "GitHub", "Playwright", "Lighthouse", "Supabase", "Vercel"]

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
              Jak to funguje
            </h1>
            <p className="font-body font-light text-[clamp(0.875rem,1.1vw,1.125rem)] leading-[1.7] text-muted-foreground max-w-xl mx-auto">
              Designér + AI. Používám nástroje, které mi umožňují pracovat rychleji a lépe — od návrhu přes kód až po nasazení.
            </p>
          </div>
        </div>
      </section>

      <div className="w-screen relative left-1/2 -translate-x-1/2 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      {/* ── APPROACH ── */}
      <section className="relative z-10 py-24">
        <div className="max-w-[1408px] mx-auto px-6">
          <div className="text-center mb-14">
            <p className="font-mono text-xs tracking-[0.2em] text-primary mb-2">/ PŘÍSTUP</p>
            <h2 className="font-body font-extrabold text-[clamp(1.5rem,2.8vw,2.5rem)] leading-[1.6] tracking-[0.06em] text-foreground">
              Člověk řídí, AI zrychluje
            </h2>
            <p className="font-body font-light text-[clamp(0.875rem,1.1vw,1.125rem)] leading-[1.7] text-muted-foreground mt-3 max-w-2xl mx-auto">
              Každý projekt začíná pochopením problému. AI pomáhá s realizací — generuje kód, testuje, nasazuje. Ale rozhodnutí a směr je vždy na mně.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-20 max-w-4xl mx-auto">
            {[
              { tag: "NÁVRH", title: "Pochopím problém", desc: "UX research, wireframy, prototypy. Než se napíše řádek kódu, musí být jasné co a proč." },
              { tag: "REALIZACE", title: "AI generuje", desc: "Claude Code píše kód, testuje, opravuje. Já kontroluji kvalitu a směr." },
              { tag: "NASAZENÍ", title: "Rychle ven", desc: "GitHub → Vercel → živý web. Iterace místo měsíců plánování." },
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

      {/* ── TOOLS ── */}
      <section className="relative z-10 py-24">
        <div className="max-w-[1408px] mx-auto px-6">
          <div className="text-center mb-14">
            <p className="font-mono text-xs tracking-[0.2em] text-primary mb-2">/ NÁSTROJE</p>
            <h2 className="font-body font-extrabold text-[clamp(1.5rem,2.8vw,2.5rem)] leading-[1.6] tracking-[0.06em] text-foreground">
              S čím pracuji
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-12">
            {TOOLS.map((tool, i) => {
              const iconSrc = ICON_MAP[tool.name]
              return (
                <div key={i} className="flex items-center gap-3 p-4 rounded-xl border border-border hover:border-primary/30 transition-colors">
                  {iconSrc && <img src={iconSrc} alt="" className="w-6 h-6 shrink-0" />}
                  <div>
                    <div className="font-mono text-xs font-medium text-foreground">{tool.name}</div>
                    <div className="font-mono text-[10px] text-muted-foreground mt-0.5">{tool.desc}</div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* MCP */}
          <div className="max-w-3xl mx-auto text-center">
            <p className="font-mono text-xs text-muted-foreground">
              <span className="text-foreground font-medium">MCP servery</span>{" — "}
              {MCP_SERVERS.join(", ")}
            </p>
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
          <p className="text-center font-mono text-xs text-muted-foreground mb-6">+ NAS Synology — zálohy</p>
        </div>
      </section>

      </main>

      <SiteFooter />
    </div>
  )
}
