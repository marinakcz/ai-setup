"use client"

import { SiteFooter } from "@/components/site-footer"


const ICON_MAP: Record<string, string> = {
  "AI modely": "/icons/claude.svg",
  "Claude Code": "/icons/claude.svg",
  "Gemini": "/icons/gemini.svg",
  "Design": "/icons/figma.svg",
  "Framework": "/icons/nodejs.svg",
  "Deploy": "/icons/vercel.svg",
  "Edge & DNS": "/icons/cloudflare.svg",
  "Kód": "/icons/github.svg",
  "Data": "/icons/supabase.svg",
  "Backend": "/icons/convex.svg",
  "Kontejnery": "/icons/docker.svg",
  "Testy": "/icons/playwright.svg",
  "Performance": "/icons/lighthouse.svg",
  "Monitoring": "/icons/sentry.svg",
  "E-maily": "/icons/resend.svg",
  "Scraping": "/icons/firecrawl.svg",
  "Automatizace": "/icons/n8n.svg",
  "Poznámky": "/icons/obsidian.svg",
  "Notifikace": "/icons/telegram.svg",
  "Lokální AI": "/icons/qwen.svg",
  "Přístupnost": "/icons/a11y.svg",
  "Analytika": "/icons/posthog.svg",
}

export default function AiStudioPage() {
  return (
    <div className="relative min-h-screen flex flex-col">
      <main>

      {/* ── HERO ── */}
      <section className="relative z-10 pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="max-w-[1408px] mx-auto px-6 w-full">
          <div className="text-center mb-12 md:mb-16">
            <p className="font-mono text-xs tracking-[0.2em] text-primary mb-2">
              / POD KAPOTOU
            </p>
            <h1 className="font-body font-extrabold text-[clamp(1.5rem,2.8vw,2.5rem)] leading-[1.6] tracking-[0.06em] text-foreground mb-4">
              AI studio / Levou zadní
            </h1>
            <p className="font-body font-light text-[clamp(0.875rem,1.1vw,1.125rem)] leading-[1.7] text-muted-foreground max-w-2xl mx-auto">
              Modulární systém AI agentů, paměti a nástrojů. Zadáte záměr, systém naplánuje postup, sestaví tým agentů a vytvoří funkční produkt. Weby, aplikace, prototypy, experimenty.
            </p>
            <div className="mt-4">
              <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-emerald-500/40 bg-emerald-500/[0.08] font-mono text-sm text-emerald-400">
                <span className="w-2 h-2 shrink-0 rounded-full bg-emerald-500 animate-pulse" />
                Stav: První projekty v produkci
              </span>
            </div>
          </div>
        </div>
      </section>

      <div className="w-screen relative left-1/2 -translate-x-1/2 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      {/* ── HOW IT WORKS ── */}
      <section className="relative z-10 py-24 md:py-32">
        <div className="max-w-[1408px] mx-auto px-6">
          <div className="text-center mb-12 md:mb-16">
            <p className="font-mono text-xs tracking-[0.2em] text-primary mb-2">
              / JAK TO FUNGUJE
            </p>
            <h2 className="font-body font-extrabold text-[clamp(1.5rem,2.8vw,2.5rem)] leading-[1.6] tracking-[0.06em] text-foreground">
              Zázraky na počkání. Doslova.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-24">
            {[
              {
                tag: "ZADÁNÍ",
                title: "Popíšete, co potřebujete",
                desc: "Brief v přirozené řeči. Cíl, představa, podklady, omezení. Orchestrátor vytvoří strukturovaný plán a navrhne postup.",
              },
              {
                tag: "TVORBA",
                title: "AI agenti realizují",
                desc: "Pipeline agent řídí celý cyklus: plán, kód, review, testy, deploy. Specializovaní agenti pracují paralelně, každý se svými nástroji. Výstupy se průběžně testují.",
              },
              {
                tag: "VÝSLEDEK",
                title: "Funkční produkt",
                desc: "Automatický build, testy a deploy. Systém produkt dále sleduje, učí se a navrhuje vylepšení.",
              },
            ].map((item, i) => (
              <div key={i}>
                <p className="font-mono text-xs tracking-[0.2em] text-primary mb-2">
                  {`/ ${item.tag}`}
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
          <div className="text-center mb-12 md:mb-16">
            <p className="font-mono text-xs tracking-[0.2em] text-primary mb-2">
              / ARCHITEKTURA
            </p>
            <h2 className="font-body font-extrabold text-[clamp(1.5rem,2.8vw,2.5rem)] leading-[1.3] tracking-[0.06em] text-foreground">
              Vyladěná rovnice.<br />
              <span className="text-muted-foreground">Designér × AI = skvělé produkty.</span>
            </h2>
          </div>

          {/* Layered diagram — top to bottom */}
          <div className="max-w-2xl mx-auto space-y-0">

            {/* Designér */}
            <div className="p-6 rounded-t-2xl border-2 border-border bg-card/30 text-center hover:border-primary/30 transition-colors">
              <p className="font-body font-semibold text-lg text-foreground">Designér</p>
              <p className="font-mono text-xs text-muted-foreground mt-1">Zadá brief. Schválí plán. Řídí směr.</p>
            </div>

            <div className="flex justify-center relative">
              <div className="w-px h-5 bg-border" />
              <div className="absolute w-1.5 h-1.5 rounded-full bg-primary animate-pulse left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2" />
            </div>

            {/* Projektový kontext */}
            <div className="p-6 border-2 border-border bg-card/30 hover:border-primary/30 transition-colors">
              <p className="font-body font-semibold text-lg text-foreground text-center">Projektový kontext</p>
              <p className="font-mono text-xs text-muted-foreground mt-1 text-center mb-4">Agent negeneruje naslepo. Pracuje s kontextem projektu.</p>
              <div className="grid grid-cols-3 gap-3">
                <div className="px-3 py-2 rounded-lg border border-border/50 text-center">
                  <p className="font-mono text-[11px] text-primary font-medium">Technický</p>
                  <p className="font-mono text-[10px] text-muted-foreground mt-0.5">Pravidla, stack, vzory</p>
                </div>
                <div className="px-3 py-2 rounded-lg border border-border/50 text-center">
                  <p className="font-mono text-[11px] text-primary font-medium">Vizuální</p>
                  <p className="font-mono text-[10px] text-muted-foreground mt-0.5">Design systém, komponenty</p>
                </div>
                <div className="px-3 py-2 rounded-lg border border-border/50 text-center">
                  <p className="font-mono text-[11px] text-primary font-medium">Obsahový</p>
                  <p className="font-mono text-[10px] text-muted-foreground mt-0.5">Tón, cílová skupina, brand</p>
                </div>
              </div>
            </div>

            <div className="flex justify-center relative">
              <div className="w-px h-5 bg-border" />
              <div className="absolute w-1.5 h-1.5 rounded-full bg-primary animate-pulse left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2" />
            </div>

            {/* Orchestrátor */}
            <div className="p-6 border-2 border-border bg-card/30 text-center hover:border-primary/30 transition-colors">
              <p className="font-body font-semibold text-lg text-foreground">Orchestrátor</p>
              <p className="font-mono text-xs text-muted-foreground mt-1">Rozloží úkol. Vybere agenty. Koordinuje celý proces.</p>
            </div>

            <div className="flex justify-center relative">
              <div className="w-px h-5 bg-border" />
              <div className="absolute w-1.5 h-1.5 rounded-full bg-primary animate-pulse left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2" />
            </div>

            {/* Agenti + MCP + Zkušenosti */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-2 border-border bg-card/30 hover:border-primary/30 transition-colors">
              <div className="p-5 text-center border-b md:border-b-0 md:border-r border-border">
                <p className="font-body font-semibold text-lg text-foreground">Agenti</p>
                <p className="font-mono text-xs text-muted-foreground mt-1">Planner, Reviewer, QA, Ops...</p>
              </div>
              <div className="p-5 text-center border-b md:border-b-0 md:border-r border-border">
                <p className="font-body font-semibold text-lg text-foreground">MCP</p>
                <p className="font-mono text-xs text-muted-foreground mt-1">30+ serverů, napojení na svět</p>
              </div>
              <div className="p-5 text-center">
                <p className="font-body font-semibold text-lg text-foreground">Zkušenosti</p>
                <p className="font-mono text-xs text-muted-foreground mt-1">Co fungovalo, rozhodnutí, historie</p>
              </div>
            </div>

            <div className="flex justify-center relative">
              <div className="w-px h-5 bg-border" />
              <div className="absolute w-1.5 h-1.5 rounded-full bg-primary animate-pulse left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2" />
            </div>

            {/* Produkt */}
            <div className="p-6 rounded-b-2xl border-2 border-border bg-card/30 text-center hover:border-primary/30 transition-colors">
              <p className="font-body font-semibold text-lg text-foreground">Produkt</p>
              <p className="font-mono text-xs text-muted-foreground mt-1">Build, test, deploy. Web, aplikace, prototyp.</p>
            </div>

            {/* Feedback */}
            <div className="flex justify-center pt-5">
              <div className="px-6 py-3 rounded-xl border-2 border-dashed border-border/50 text-center">
                <p className="font-mono text-xs text-muted-foreground">↻ zpětná smyčka · monitoring · učení · optimalizace</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="w-screen relative left-1/2 -translate-x-1/2 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      {/* ── TOOLS ── */}
      <section className="relative z-10 py-24 md:py-32">
        <div className="max-w-[1408px] mx-auto px-6">
          <div className="text-center mb-14">
            <p className="font-mono text-xs tracking-[0.2em] text-primary mb-2">
              / NÁSTROJE
            </p>
            <h2 className="font-body font-extrabold text-[clamp(1.5rem,2.8vw,2.5rem)] leading-[1.6] tracking-[0.06em] text-foreground">
              Na čem to stavíme
            </h2>
            <p className="font-body font-light text-[clamp(0.875rem,1.1vw,1.125rem)] leading-[1.7] text-muted-foreground mt-3 max-w-xl mx-auto">
              Nejlepší nástroje, které dnes existují. Otevřené, flexibilní, prověřené.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {[
              { icon: "AI modely", note: "Claude, GPT, Gemini..." },
              { icon: "Claude Code", note: "Coding agent + MCP" },
              { icon: "Gemini", note: "Second opinion, multimodální" },
              { icon: "Lokální AI", note: "Qwen, Llama..." },
              { icon: "Design", note: "Figma" },
              { icon: "Framework", note: "Next.js, React" },
              { icon: "Kód", note: "GitHub" },
              { icon: "Data", note: "Supabase, Postgres" },
              { icon: "Backend", note: "Convex" },
              { icon: "Deploy", note: "Vercel" },
              { icon: "Edge & DNS", note: "Cloudflare Workers, KV, R2" },
              { icon: "Kontejnery", note: "Docker" },
              { icon: "Automatizace", note: "n8n workflows" },
              { icon: "Testy", note: "Playwright, Vitest" },
              { icon: "Performance", note: "Lighthouse, Core Web Vitals" },
              { icon: "Monitoring", note: "Sentry" },
              { icon: "Přístupnost", note: "A11y audit" },
              { icon: "Analytika", note: "PostHog" },
              { icon: "E-maily", note: "Resend" },
              { icon: "Scraping", note: "Firecrawl" },
              { icon: "Poznámky", note: "Obsidian" },
              { icon: "Notifikace", note: "Telegram" },
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
      <section className="relative z-10 py-24 md:py-32">
        <div className="max-w-[1408px] mx-auto px-6">
          <div className="text-center mb-14">
            <p className="font-mono text-xs tracking-[0.2em] text-primary mb-2">
              / HARDWARE
            </p>
            <h2 className="font-body font-extrabold text-[clamp(1.5rem,2.8vw,2.5rem)] leading-[1.6] tracking-[0.06em] text-foreground">
              Tady bydlí AI studio.
            </h2>
            <p className="font-body font-light text-[clamp(0.875rem,1.1vw,1.125rem)] leading-[1.7] text-muted-foreground mt-2">
              Malý. Ale maká jako ďas, pane profesore.
            </p>
          </div>

          <div
            className="max-w-xs mx-auto mb-4 relative group cursor-default"
            onMouseEnter={(e) => { const t = e.currentTarget.querySelector('[role=tooltip]') as HTMLElement; if (t) { t.style.opacity = '1'; t.style.transform = 'scale(1)' } }}
            onMouseLeave={(e) => { const t = e.currentTarget.querySelector('[role=tooltip]') as HTMLElement; if (t) { t.style.opacity = '0'; t.style.transform = 'scale(0.95)' } }}
          >
            <img src="/mac-mini.png" alt="Mac mini M4" className="w-full h-auto" loading="lazy" />
            <span
              role="tooltip"
              className="pointer-events-none absolute -top-12 left-1/2 -translate-x-1/2 z-50 px-4 py-2 rounded-xl bg-card border border-border shadow-xl transition-all duration-200 whitespace-nowrap"
              style={{ opacity: 0, transform: 'scale(0.95)' }}
            >
              <span className="font-mono text-xs text-muted-foreground">Až jednou vyrostu, budu </span>
              <span className="font-mono text-xs text-primary font-medium">Mac Studio</span>
              <span className="inline-block animate-wave ml-1">🤞</span>
            </span>
          </div>
          <p className="text-center font-mono text-xs text-muted-foreground mb-6">+ NAS Synology pro zálohy</p>
        </div>
      </section>

      <div className="w-screen relative left-1/2 -translate-x-1/2 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      {/* ── PRINCIPLES ── */}
      <section className="relative z-10 py-24 md:py-32">
        <div className="max-w-[1408px] mx-auto px-6">
          <div className="text-center mb-12">
            <p className="font-mono text-xs tracking-[0.2em] text-primary mb-2">
              / CÍLE
            </p>
            <h2 className="font-body font-extrabold text-[clamp(1.5rem,2.8vw,2.5rem)] leading-[1.6] tracking-[0.06em] text-foreground">
              Kam to směřujeme
            </h2>
            <p className="font-body font-light text-[clamp(0.875rem,1.1vw,1.125rem)] leading-[1.7] text-muted-foreground mt-3 max-w-xl mx-auto">
              Principy, kam to chceme dostat.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { num: "01", title: "Nezávislost", desc: "Každou část jde vyměnit. AI model, hosting, databáze, coding assistant." },
              { num: "02", title: "Transparentnost", desc: "Každý krok zalogovaný a vysvětlitelný. Žádná černá skříňka." },
              { num: "03", title: "Člověk rozhoduje", desc: "Systém navrhuje a realizuje. Směr a finální slovo má člověk." },
              { num: "04", title: "Přenositelný", desc: "Celý systém na jiný stroj. Git, Docker, MCP konfigurace." },
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
