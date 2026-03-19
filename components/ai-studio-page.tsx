"use client"

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
  "Supabase": "/icons/supabase.svg",
  "Resend": "/icons/resend.svg",
}

const TOOLS = [
  { name: "Claude Code", desc: "AI asistent pro kód, analýzu a nasazení" },
  { name: "Claude Sonnet", desc: "AI model pro generování a rozhodování" },
  { name: "Next.js", desc: "Framework pro web" },
  { name: "Vercel", desc: "Hosting a deploy" },
  { name: "GitHub", desc: "Verzování a spolupráce" },
  { name: "Figma", desc: "Design a prototypy" },
  { name: "Supabase", desc: "Databáze a autentizace" },
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
              Designér + AI. Nástroje, které mi umožňují pracovat rychleji a lépe. Od návrhu přes kód až po nasazení.
            </p>
          </div>
        </div>
      </section>

      <div className="w-screen relative left-1/2 -translate-x-1/2 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      {/* ── APPROACH — same layout as HP pillars ── */}
      <section className="relative z-10 py-24 md:py-32">
        <div className="max-w-[1408px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-24">
            {[
              { tag: "NÁVRH", title: "Pochopím problém", desc: "UX research, wireframy, prototypy. Než se napíše řádek kódu, musí být jasné co a proč." },
              { tag: "REALIZACE", title: "AI pomáhá tvořit", desc: "Claude Code píše kód, testuje, opravuje. Kontroluji kvalitu a směr." },
              { tag: "NASAZENÍ", title: "Rychle ven", desc: "GitHub, Vercel, živý web. Iterace místo měsíců plánování." },
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

          <div className="max-w-3xl mx-auto text-center">
            <p className="font-mono text-xs text-muted-foreground">
              <span className="text-foreground font-medium">MCP servery</span>
              {" · "}
              {MCP_SERVERS.join(" · ")}
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
          <p className="text-center font-mono text-xs text-muted-foreground mb-6">+ NAS Synology pro zálohy</p>
        </div>
      </section>

      <div className="w-screen relative left-1/2 -translate-x-1/2 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      {/* ── FUTURE ── */}
      <section className="relative z-10 py-24 md:py-32">
        <div className="max-w-[1408px] mx-auto px-6">
          <div className="text-center mb-16">
            <p className="font-mono text-xs tracking-[0.2em] text-primary mb-2">/ CO CHYSTÁME</p>
            <h2 className="font-body font-extrabold text-[clamp(1.5rem,2.8vw,2.5rem)] leading-[1.6] tracking-[0.06em] text-foreground">
              Kam to směřuje
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-8 md:gap-0 max-w-4xl mx-auto items-start">
            {/* NOW */}
            <div className="p-8 rounded-2xl border border-primary/30 bg-primary/[0.02]">
              <div className="flex items-center gap-3 mb-8">
                <span className="w-2.5 h-2.5 rounded-full bg-primary" />
                <span className="font-mono text-xs tracking-[0.15em] text-primary font-medium">AKTUÁLNÍ SETUP</span>
              </div>
              <div className="space-y-4">
                {[
                  { icon: "/icons/claude.svg", label: "Claude Code + Sonnet", note: "AI asistent a model" },
                  { icon: "/icons/figma.svg", label: "Figma", note: "Design" },
                  { icon: "/icons/nodejs.svg", label: "Next.js", note: "Framework" },
                  { icon: "/icons/vercel.svg", label: "Vercel", note: "Deploy" },
                  { icon: "/icons/github.svg", label: "GitHub", note: "Kód" },
                  { icon: "/icons/supabase.svg", label: "Supabase", note: "Data" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <img src={item.icon} alt="" className="w-5 h-5 shrink-0" />
                    <span className="font-mono text-xs text-foreground">{item.label}</span>
                    <span className="font-mono text-[10px] text-muted-foreground ml-auto">{item.note}</span>
                  </div>
                ))}
              </div>
              <p className="font-mono text-[10px] text-muted-foreground mt-6 pt-4 border-t border-border/40">
                Člověk řídí, AI zrychluje
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
                <span className="font-mono text-xs tracking-[0.15em] text-muted-foreground">PŘIPRAVUJEME</span>
              </div>
              <div className="space-y-4">
                {[
                  { icon: "/icons/claude.svg", label: "Agent SDK", note: "Orchestrace" },
                  { icon: "/icons/docker.svg", label: "Docker", note: "Sandbox" },
                  { icon: "/icons/playwright.svg", label: "Auto-testing", note: "QA" },
                  { icon: "/icons/vercel.svg", label: "Workflow DevKit", note: "Durable tasks" },
                  { icon: "/icons/nodejs.svg", label: "Monitoring", note: "24/7" },
                  { icon: "/icons/claude.svg", label: "Více agentů", note: "Autonomie" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 opacity-50">
                    <img src={item.icon} alt="" className="w-5 h-5 shrink-0" />
                    <span className="font-mono text-xs text-foreground">{item.label}</span>
                    <span className="font-mono text-[10px] text-muted-foreground ml-auto">{item.note}</span>
                  </div>
                ))}
              </div>
              <p className="font-mono text-[10px] text-muted-foreground mt-6 pt-4 border-t border-border/40">
                Víc automatizace, víc prostoru na člověka
              </p>
            </div>
          </div>
        </div>
      </section>

      </main>

      <SiteFooter />
    </div>
  )
}
