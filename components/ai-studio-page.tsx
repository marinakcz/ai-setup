"use client"

import { useState } from "react"
import { SiteFooter } from "@/components/site-footer"

// ─── Data ───────────────────────────────────────────────────────────────────

// Legacy SVG logo components below — no longer referenced, kept for reference
function _REMOVED_NodejsLogo() {
  return (
    <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" aria-hidden="true">
      <path d="M12 2l9.2 5.3v10.6L12 23.2 2.8 17.9V7.3L12 2z" fill="currentColor" opacity={0.12} />
      <path d="M12 2l9.2 5.3v10.6L12 23.2 2.8 17.9V7.3L12 2z" stroke="currentColor" strokeWidth={1.2} fill="none" />
      <text x="12" y="14.5" textAnchor="middle" fill="currentColor" fontSize="7" fontFamily="monospace" fontWeight="bold">JS</text>
    </svg>
  )
}
function DockerLogo() {
  return (
    <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" aria-hidden="true">
      <path d="M4 11h3v3H4zM8 11h3v3H8zM12 11h3v3h-3zM8 7h3v3H8zM12 7h3v3h-3zM16 11h3v3h-3zM12 3h3v3h-3z" fill="currentColor" opacity={0.15} stroke="currentColor" strokeWidth={0.8} />
      <path d="M1.5 13.5c0 0 1.5 6 10.5 6s11-4 11-4-1-3-4-3.5" stroke="currentColor" strokeWidth={1.2} strokeLinecap="round" />
    </svg>
  )
}
function AgentSdkLogo() {
  return (
    <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" aria-hidden="true">
      <circle cx="12" cy="7" r="3" stroke="currentColor" strokeWidth={1.2} fill="currentColor" opacity={0.12} />
      <circle cx="5" cy="18" r="2.5" stroke="currentColor" strokeWidth={1.2} fill="currentColor" opacity={0.12} />
      <circle cx="12" cy="18" r="2.5" stroke="currentColor" strokeWidth={1.2} fill="currentColor" opacity={0.12} />
      <circle cx="19" cy="18" r="2.5" stroke="currentColor" strokeWidth={1.2} fill="currentColor" opacity={0.12} />
      <path d="M12 10v5.5M9.5 16l-3 0M14.5 16l3 0" stroke="currentColor" strokeWidth={1.2} strokeLinecap="round" />
    </svg>
  )
}
function ClaudeLogo() {
  return (
    <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" aria-hidden="true">
      <path d="M12 3C7 3 3 7 3 12s4 9 9 9 9-4 9-9-4-9-9-9z" fill="currentColor" opacity={0.1} stroke="currentColor" strokeWidth={1.2} />
      <path d="M9 10c0-1.5 1.3-3 3-3s3 1.5 3 3" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" />
      <circle cx="9.5" cy="13" r="1" fill="currentColor" />
      <circle cx="14.5" cy="13" r="1" fill="currentColor" />
    </svg>
  )
}
function OpenAILogo() {
  return (
    <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" aria-hidden="true">
      <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z" fill="currentColor" opacity={0.1} stroke="currentColor" strokeWidth={1.2} />
      <path d="M8 12l2.5-4h3L16 12l-2.5 4h-3L8 12z" stroke="currentColor" strokeWidth={1.3} strokeLinejoin="round" />
    </svg>
  )
}
function SupabaseLogo() {
  return (
    <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" aria-hidden="true">
      <path d="M13.5 21.5c-.4.5-1.3.1-1.3-.6V14h7.3c1 0 1.5-1.1.9-1.8L11.5 2.5c-.4-.5-1.3-.1-1.3.6V10H3c-1 0-1.5 1.1-.9 1.8l8.9 9.7z" fill="currentColor" opacity={0.12} stroke="currentColor" strokeWidth={1} />
    </svg>
  )
}
function GitHubLogo() {
  return (
    <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" aria-hidden="true">
      <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69C6.73 19.91 6.14 18 6.14 18c-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.1.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.58 9.58 0 0112 6.8c.85 0 1.7.11 2.5.34 1.9-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.75c0 .27.16.59.67.5A10.01 10.01 0 0022 12c0-5.52-4.48-10-10-10z" fill="currentColor" opacity={0.7} />
    </svg>
  )
}
function VercelLogo() {
  return (
    <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" aria-hidden="true">
      <path d="M12 3l10 18H2L12 3z" fill="currentColor" opacity={0.7} />
    </svg>
  )
}

function GeminiLogo() {
  return (
    <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" aria-hidden="true">
      <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z" fill="currentColor" opacity={0.1} stroke="currentColor" strokeWidth={1.2} />
      <path d="M12 6v12M6 12h12M8.5 8.5l7 7M15.5 8.5l-7 7" stroke="currentColor" strokeWidth={1} strokeLinecap="round" opacity={0.6} />
    </svg>
  )
}
function FirecrawlLogo() {
  return (
    <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" aria-hidden="true">
      <path d="M12 2c-1 4-4 6-4 10a4 4 0 008 0c0-4-3-6-4-10z" fill="currentColor" opacity={0.12} stroke="currentColor" strokeWidth={1.2} />
      <path d="M12 22v-4" stroke="currentColor" strokeWidth={1.2} strokeLinecap="round" />
    </svg>
  )
}
function ResendLogo() {
  return (
    <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth={1.2} />
      <path d="M3 7l9 5 9-5" stroke="currentColor" strokeWidth={1.2} opacity={0.5} />
    </svg>
  )
}
function QwenLogo() {
  return (
    <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="4" stroke="currentColor" strokeWidth={1.2} fill="currentColor" opacity={0.1} />
      <path d="M8 12h8M12 8v8" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" />
    </svg>
  )
}
function ObsidianLogo() {
  return (
    <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" aria-hidden="true">
      <path d="M12 2L6 7v10l6 5 6-5V7l-6-5z" fill="currentColor" opacity={0.1} stroke="currentColor" strokeWidth={1.2} strokeLinejoin="round" />
      <path d="M12 8v8M9 11l3 3 3-3" stroke="currentColor" strokeWidth={1.2} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
function TelegramLogo() {
  return (
    <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="10" fill="currentColor" opacity={0.1} stroke="currentColor" strokeWidth={1.2} />
      <path d="M5 12l3.5 2L10 18l2-5 7-6" stroke="currentColor" strokeWidth={1.3} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8.5 14L10 18" stroke="currentColor" strokeWidth={1.3} strokeLinecap="round" />
    </svg>
  )
}

function FigmaLogo() {
  return (
    <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" aria-hidden="true">
      <rect x="7" y="2" width="5" height="7" rx="2.5" fill="currentColor" opacity={0.15} stroke="currentColor" strokeWidth={1} />
      <rect x="12" y="2" width="5" height="7" rx="2.5" fill="currentColor" opacity={0.1} stroke="currentColor" strokeWidth={1} />
      <rect x="7" y="9" width="5" height="7" rx="2.5" fill="currentColor" opacity={0.1} stroke="currentColor" strokeWidth={1} />
      <circle cx="14.5" cy="12.5" r="2.5" fill="currentColor" opacity={0.15} stroke="currentColor" strokeWidth={1} />
      <rect x="7" y="16" width="5" height="7" rx="2.5" fill="currentColor" opacity={0.1} stroke="currentColor" strokeWidth={1} />
    </svg>
  )
}
function PlaywrightLogo() {
  return (
    <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth={1.2} fill="currentColor" opacity={0.1} />
      <path d="M8 9v6M11 8v8M14 10v4M17 9v6" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" />
    </svg>
  )
}
function LighthouseLogo() {
  return (
    <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" aria-hidden="true">
      <path d="M12 2L8 10h3v6l4-8h-3V2z" fill="currentColor" opacity={0.15} stroke="currentColor" strokeWidth={1.2} strokeLinejoin="round" />
      <path d="M6 20h12" stroke="currentColor" strokeWidth={1.2} strokeLinecap="round" />
    </svg>
  )
}
function A11yLogo() {
  return (
    <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth={1.2} fill="currentColor" opacity={0.1} />
      <circle cx="12" cy="7" r="1.5" fill="currentColor" opacity={0.5} />
      <path d="M8 10.5h8M12 10.5v5M10 18l2-2.5 2 2.5" stroke="currentColor" strokeWidth={1.3} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
function SentryLogo() {
  return (
    <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" aria-hidden="true">
      <path d="M12 3l8 14H14.5M12 3L4 17h5.5M12 3v8" stroke="currentColor" strokeWidth={1.3} strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="17" r="3" stroke="currentColor" strokeWidth={1.2} fill="currentColor" opacity={0.1} />
    </svg>
  )
}

const ICON_MAP: Record<string, string> = {
  "Node.js": "/icons/nodejs.svg",
  "Docker": "/icons/docker.svg",
  "Claude Agent SDK": "/icons/claude.svg",
  "Claude Sonnet 4": "/icons/claude.svg",
  "Claude Code CLI": "/icons/claude.svg",
  "Gemini 2.0 Flash": "/icons/gemini.svg",
  "GPT-4o-mini": "/icons/openai.svg",
  "Firecrawl": "/icons/nodejs.svg",
  "Supabase": "/icons/supabase.svg",
  "Resend": "/icons/resend.svg",
  "GitHub CLI": "/icons/github.svg",
  "Vercel CLI": "/icons/vercel.svg",
  "Qwen3-8B": "/icons/openai.svg",
  "Obsidian": "/icons/obsidian.svg",
  "Telegram Bot": "/icons/telegram.svg",
  "Figma": "/icons/figma.svg",
  "Playwright": "/icons/playwright.svg",
  "Lighthouse": "/icons/nodejs.svg",
  "A11y": "/icons/playwright.svg",
  "Sentry": "/icons/sentry.svg",
  "GitHub": "/icons/github.svg",
  "Vercel": "/icons/vercel.svg",
}

function SvglIcon({ name }: { name: string }) {
  const src = ICON_MAP[name]
  if (!src) return null
  return <img src={src} alt="" className="w-5 h-5" />
}

const SOFTWARE_CATEGORIES = [
  {
    label: "Orchestrace",
    items: [
      { name: "Claude Agent SDK", version: "0.2", desc: "Multi-agent orchestrace — query(), subagenti, MCP tools" },
      { name: "Node.js", version: "v25.8", desc: "Runtime pro orchestrátor i agenty" },
    ],
  },
  {
    label: "AI modely",
    items: [
      { name: "Claude Sonnet 4", version: "", desc: "Subagenti — Domain operator, Builder, General executor" },
      { name: "Claude Code CLI", version: "", desc: "Subprocess — Builder agent generuje kód" },
      { name: "Qwen3-8B", version: "", desc: "Lokální LLM — klasifikace, SEO, triage, překlady (zdarma)" },
      { name: "Gemini 2.0 Flash", version: "", desc: "Bulk analýza, content gaps, competitor watch" },
      { name: "GPT-4o-mini", version: "", desc: "Generování obrázků (DALL-E 3), textové úkoly" },
    ],
  },
  {
    label: "Infrastruktura",
    items: [
      { name: "Docker", version: "29.2", desc: "Izolovaný sandbox pro buildy" },
      { name: "GitHub CLI", version: "", desc: "Vytváření repozitářů a push" },
      { name: "Vercel CLI", version: "50.32", desc: "Production deploy" },
    ],
  },
  {
    label: "Služby",
    items: [
      { name: "Firecrawl", version: "", desc: "JS-capable web scraping (stránky, sazby, monitoring)" },
      { name: "Supabase", version: "", desc: "PostgreSQL — tasks, projects, agent memory" },
      { name: "Resend", version: "", desc: "Emaily — rate alerts, weekly digest" },
      { name: "Obsidian", version: "", desc: "Sdílené poznámky — kontext, plány, rozhodnutí (user + agent)" },
      { name: "Telegram Bot", version: "", desc: "Notifikace a statusy — kanál per projekt" },
    ],
  },
  {
    label: "MCP servery",
    items: [
      { name: "Figma", version: "", desc: "Design tokeny, screenshoty, proměnné" },
      { name: "GitHub", version: "", desc: "PR, issues, repo management" },
      { name: "Playwright", version: "", desc: "Testování stránek, a11y snapshots, screenshoty" },
      { name: "Lighthouse", version: "", desc: "Performance, SEO, a11y skóre, Core Web Vitals" },
      { name: "A11y", version: "", desc: "WCAG audit, kontrast, ARIA validace" },
      { name: "Supabase", version: "setup", desc: "MCP připojení — potřebuje Personal Access Token" },
      { name: "Vercel", version: "setup", desc: "MCP připojení — OAuth autentizace při prvním spuštění" },
      { name: "Sentry", version: "setup", desc: "Error tracking — potřebuje Auth token" },
    ],
  },
]


// ─── Components ─────────────────────────────────────────────────────────────

function SectionHeader({ tag, title, subtitle }: { tag: string; title: string; subtitle?: string }) {
  return (
    <div className="text-center mb-14">
      <p className="font-mono text-xs tracking-[0.2em] text-primary mb-2">/ {tag}</p>
      <h2 className="font-body font-extrabold text-[clamp(1.5rem,2.8vw,2.5rem)] leading-[1.6] tracking-[0.06em] text-foreground">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 font-body font-normal text-[clamp(0.875rem,1.1vw,1.125rem)] leading-[1.7] text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>
      )}
    </div>
  )
}

function LogoWithTooltip({ name, children }: { name: string; children: React.ReactNode }) {
  const [show, setShow] = useState(false)

  return (
    <span
      className="relative w-10 h-10 rounded-xl border border-border/60 bg-background/50 flex items-center justify-center shrink-0 transition-all duration-200 hover:border-primary/40 hover:scale-110 text-foreground"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      <span className="w-6 h-6 flex items-center justify-center [&>svg]:w-6 [&>svg]:h-6">
        {children}
      </span>
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 z-50 px-2.5 py-1 rounded-lg bg-foreground text-background text-[11px] font-mono whitespace-nowrap transition-all duration-150 ${show ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
      >
        {name}
      </span>
    </span>
  )
}

function SoftwareCategory({ category, index }: { category: typeof SOFTWARE_CATEGORIES[number]; index: number }) {
  const [open, setOpen] = useState(false)

  return (
    <div
      className={`rounded-2xl border transition-colors duration-200 ${open ? "border-primary/25 bg-primary/[0.02]" : "border-border bg-card/50 hover:border-border/80"}`}
      style={{ animationDelay: `${index * 80}ms` }}
    >
      {/* Header — logo strip + toggle */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-4 px-5 py-4 cursor-pointer group overflow-visible"
        aria-expanded={open}
      >
        <span className="font-mono text-xs text-primary tracking-[0.2em] uppercase shrink-0 w-28 text-left">
          {category.label}
        </span>

        {/* Logo strip */}
        <div className="flex items-center gap-2.5 flex-1 min-w-0">
          {category.items.map((sw, i) => (
              <LogoWithTooltip key={i} name={sw.name}>
                <SvglIcon name={sw.name} />
              </LogoWithTooltip>
          ))}
        </div>

        {/* Chevron */}
        <div className="shrink-0">
          <svg
            viewBox="0 0 24 24"
            className={`w-4 h-4 text-muted-foreground transition-transform duration-200 ${open ? "rotate-180" : ""}`}
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </div>
      </button>

      {/* Expandable detail */}
      <div
        className="grid transition-[grid-template-rows] duration-300 ease-out"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <div className="px-5 pb-5 pt-1">
            <div className="h-px bg-border/40 mb-4" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {category.items.map((sw, i) => {
                const iconSrc = ICON_MAP[sw.name]
                return (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-3.5 rounded-xl hover:bg-background/50 transition-colors"
                  >
                    {iconSrc && (
                      <div className="w-9 h-9 rounded-lg border border-border/60 bg-background flex items-center justify-center shrink-0 mt-0.5">
                        <img src={iconSrc} alt="" className="w-5 h-5" />
                      </div>
                    )}
                    <div className="min-w-0">
                      <div className="flex items-baseline gap-2">
                        <span className="font-mono text-sm font-medium text-foreground">{sw.name}</span>
                        {sw.version && (
                          <span className="font-mono text-xs text-primary">{sw.version}</span>
                        )}
                      </div>
                      <p className="text-xs text-muted-foreground leading-relaxed mt-1">{sw.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── Main page ──────────────────────────────────────────────────────────────

export default function AiStudioPage() {
  return (
    <div className="relative min-h-screen flex flex-col">

      {/* ── HERO ────────────────────────────────────────────────── */}
      <main>
      <section aria-label="Úvod" className="relative z-10 min-h-[95vh] flex items-center pt-32 pb-24 overflow-hidden">
        <div className="max-w-[1408px] mx-auto px-6 w-full">
          <div className="text-center mb-20">
            <p className="font-mono text-xs tracking-[0.2em] text-primary mb-2">/ AI STUDIO</p>

            <h1 className="font-body font-extrabold text-[clamp(1.5rem,2.8vw,2.5rem)] leading-[1.6] tracking-[0.06em] text-foreground mb-4">
              Od nápadu k produktu
            </h1>

            <p className="font-body font-normal text-[clamp(0.875rem,1.1vw,1.125rem)] leading-[1.7] text-muted-foreground max-w-lg mx-auto">
              Napíšeš jednou větou co potřebuješ. AI Studio vybere agenta,
              napíše kód, otestuje a nasadí. Ty mezitím děláš něco jiného.
            </p>
          </div>

          {/* ── Flow pipeline ── */}
          <div className="relative max-w-4xl mx-auto">
            {/* Connecting line — desktop, from center of first to center of last tile */}
            <div className="hidden md:block absolute top-6 h-px bg-border/40" style={{ left: "10%", right: "10%" }}>
              {/* Animated light pulse: starts at first tile, ends at last */}
              <div
                className="absolute top-0 h-px animate-flow-pulse"
                style={{
                  width: "20%",
                  background: "linear-gradient(90deg, transparent, hsl(var(--primary) / 0.7), hsl(var(--primary)), hsl(var(--primary) / 0.7), transparent)",
                }}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-3">
              {[
                {
                  title: "Zadáš úkol",
                  desc: "Česky nebo anglicky",
                  icon: (
                    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
                    </svg>
                  ),
                },
                {
                  title: "AI plánuje",
                  desc: "Vybere agenta a kroky",
                  icon: (
                    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M12 2a4 4 0 014 4c0 1.5-.8 2.8-2 3.4V11h3a3 3 0 013 3v1.6c1.2.6 2 1.9 2 3.4a4 4 0 11-6-3.4V14a1 1 0 00-1-1h-3v-3.6A4 4 0 0112 2z" />
                      <circle cx="6" cy="18" r="4" />
                    </svg>
                  ),
                },
                {
                  title: "Agenti pracují",
                  desc: "Kód testy obsah",
                  icon: (
                    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
                    </svg>
                  ),
                },
                {
                  title: "Build a test",
                  desc: "Bezpečný sandbox",
                  icon: (
                    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M21 16V8a2 2 0 00-1-1.7l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.7l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
                      <path d="M3.3 7L12 12l8.7-5M12 22V12" />
                    </svg>
                  ),
                },
                {
                  title: "Živě na webu",
                  desc: "Repo a URL",
                  icon: (
                    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10A15.3 15.3 0 0112 2z" />
                    </svg>
                  ),
                },
              ].map((step, i) => (
                <div key={i} className="flex flex-col items-center text-center relative">
                  {/* Step icon with staggered glow pulse */}
                  <div
                    className="w-12 h-12 rounded-xl border border-border bg-card flex items-center justify-center mb-3 relative z-10 text-primary transition-all duration-300 animate-step-glow hover:border-primary/50"
                    style={{ animationDelay: `${i * 0.6}s` }}
                  >
                    {step.icon}
                  </div>
                  {/* Mobile arrow between steps */}
                  {i < 4 && (
                    <div className="md:hidden py-1">
                      <svg width="12" height="16" viewBox="0 0 12 16" fill="none" aria-hidden="true">
                        <path d="M6 0v12M3 9l3 4 3-4" stroke="hsl(var(--primary) / 0.3)" strokeWidth={1.2} strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  )}
                  <div className="font-mono text-xs font-medium text-foreground mb-0.5">{step.title}</div>
                  <div className="text-xs text-muted-foreground leading-relaxed">{step.desc}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 font-mono text-xs text-muted-foreground mt-14">
            <span>Mac mini M4</span>
            <span className="text-border">·</span>
            <span>Claude Agent SDK</span>
            <span className="text-border">·</span>
            <span>automaticky 24/7</span>
          </div>
        </div>

      </section>

      <div className="w-screen relative left-1/2 -translate-x-1/2 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      {/* ── ARCHITECTURE ────────────────────────────────────────── */}
      <section id="architektura" aria-label="Architektura" className="relative z-10 py-24">
        <div className="max-w-[1408px] mx-auto px-6">
          <SectionHeader
            tag="ARCHITEKTURA"
            title="Kdo co dělá"
            subtitle="Jeden hlavní agent přijme úkol a deleguje ho specialistovi. Každý agent má přístup k 50+ nástrojům přes MCP protokol."
          />

          {/* Master agent */}
          <div className="max-w-md mx-auto mb-6">
            <div className="p-5 rounded-2xl border border-primary/25 bg-primary/[0.03] text-center">
              <div className="w-10 h-10 rounded-xl border border-primary/20 bg-card flex items-center justify-center mx-auto mb-2 text-primary">
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="3" />
                  <path d="M12 1v4M12 19v4M4.2 4.2l2.8 2.8M17 17l2.8 2.8M1 12h4M19 12h4M4.2 19.8l2.8-2.8M17 7l2.8-2.8" />
                </svg>
              </div>
              <div className="font-mono text-xs font-semibold text-primary">Master Agent</div>
              <div className="text-xs text-muted-foreground mt-1">Přijme úkol, rozhodne kdo ho vyřeší</div>
            </div>
          </div>

          {/* Connecting line */}
          <div className="flex justify-center mb-6">
            <div className="w-px h-8" style={{ background: "hsl(var(--primary) / 0.2)" }} />
          </div>

          {/* 3 subagents */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto mb-10">
            {[
              {
                name: "Domain Operator",
                desc: "Workflow, scraping, obsah, SEO, monitoring, reporty",
                icon: (
                  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M12 20V10M18 20V4M6 20v-4" />
                  </svg>
                ),
              },
              {
                name: "Builder",
                desc: "Generuje kód, buildí v sandboxu, deploy na GitHub + Vercel",
                icon: (
                  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
                  </svg>
                ),
              },
              {
                name: "General Executor",
                desc: "Research, analýza, soubory, emaily, obrázky — cokoliv dalšího",
                icon: (
                  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.7-3.7a6 6 0 01-7.4 7.4l-6 6a2.1 2.1 0 01-3-3l6-6a6 6 0 017.4-7.4l-3.7 3.7z" />
                  </svg>
                ),
              },
            ].map((agent, i) => (
              <div key={i} className="p-5 rounded-2xl border border-border bg-card text-center hover:border-primary/30 transition-colors">
                <div className="w-10 h-10 rounded-xl border border-border bg-background flex items-center justify-center mx-auto mb-2 text-primary">
                  {agent.icon}
                </div>
                <div className="font-mono text-xs font-medium text-foreground mb-0.5">{agent.name}</div>
                <div className="text-xs text-muted-foreground leading-relaxed">{agent.desc}</div>
              </div>
            ))}
          </div>

          {/* MCP tools bar */}
          <div className="max-w-4xl mx-auto p-4 rounded-2xl border border-border bg-card/50 text-center">
            <div className="text-xs text-muted-foreground">
              <span className="text-foreground font-medium">8 MCP serverů</span>
              {" — "}Figma, GitHub, Playwright, Lighthouse, A11y, Supabase, Vercel, Sentry
            </div>
          </div>
        </div>
      </section>

      <div className="w-screen relative left-1/2 -translate-x-1/2 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      {/* ── SOFTWARE ────────────────────────────────────────────── */}
      <section id="sw" aria-label="Software" className="relative z-10 py-24" style={{ background: "hsl(var(--card) / 0.4)" }}>
        <div className="max-w-[1408px] mx-auto px-6">
          <SectionHeader
            tag="SOFTWARE"
            title="Co to používá"
            subtitle="Každý nástroj má svou roli. Orchestrace, AI modely, infrastruktura, služby."
          />

          <div className="space-y-3 max-w-4xl mx-auto">
            {SOFTWARE_CATEGORIES.map((cat, ci) => (
              <SoftwareCategory key={ci} category={cat} index={ci} />
            ))}
          </div>
        </div>
      </section>

      <div className="w-screen relative left-1/2 -translate-x-1/2 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      {/* ── HARDWARE ────────────────────────────────────────────── */}
      <section id="hw" aria-label="Hardware" className="relative z-10 py-24">
        <div className="max-w-[1408px] mx-auto px-6">
          <SectionHeader
            tag="HARDWARE"
            title="Na čem to běží"
            subtitle="Všechno běží lokálně na jednom stroji. Cloud jen pro deploy a databázi."
          />

          {/* 3D Mac Mini */}
          <div className="max-w-3xl mx-auto mb-12">
            <div style={{ width: "100%", aspectRatio: "16/10" }}>
              <iframe
                title="Apple Mac mini M4 pro"
                allow="autoplay; fullscreen; xr-spatial-tracking"
                allowFullScreen
                src="https://sketchfab.com/models/c0f11a5cfc05448bbefa8c721e5fb0fd/embed?autostart=1&preload=1&transparent=1&ui_hint=0&ui_infos=0&ui_watermark=0&ui_watermark_link=0&ui_ar=0&ui_help=0&ui_settings=0&ui_vr=0&ui_fullscreen=0&ui_annotations=0&ui_stop=0&ui_inspector=0&ui_controls=0&dnt=1"
                style={{ width: "100%", height: "100%", border: "none", display: "block" }}
              />
            </div>
          </div>

          {/* Hardware labels */}
          <div className="flex items-center justify-center gap-8 font-mono text-xs text-muted-foreground">
            <span><span className="text-foreground font-medium">Mac mini M4</span> — hlavní stroj</span>
            <span className="text-border">/</span>
            <span><span className="text-foreground font-medium">Synology NAS</span> — zálohy</span>
            <span className="text-border">/</span>
            <span><span className="text-foreground font-medium">Cloud</span> — produkce</span>
          </div>
        </div>
      </section>

      </main>

      <SiteFooter />
    </div>
  )
}
