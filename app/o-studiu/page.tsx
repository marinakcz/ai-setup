"use client"

import { useRef } from "react"
import { useMountEffect } from "@/hooks/use-mount-effect"
import Link from "next/link"
import { SiteFooter } from "@/components/site-footer"
import { ScrambleTag } from "@/components/scramble-tag"
import { PrimaryButton } from "@/components/primary-button"

function useReveal() {
  const ref = useRef<HTMLDivElement>(null)
  useMountEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("revealed")
          observer.unobserve(el)
        }
      },
      { threshold: 0.12 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])
  return ref
}

export default function AboutPage() {
  const whatRef = useReveal()
  const problemRef = useReveal()
  const aiRef = useReveal()
  const realityRef = useReveal()
  const whyRef = useReveal()
  const authorRef = useReveal()

  return (
    <div className="relative min-h-screen flex flex-col">
      <main className="relative z-10 max-w-[1408px] mx-auto px-6 pt-24 pb-16 md:pt-32 md:pb-24">

        {/* Hero intro */}
        <section className="mb-16 md:mb-32 hero-stagger">
          <p className="font-mono text-xs tracking-[0.2em] text-primary mb-2 stagger-1"><ScrambleTag text="/ O STUDIU A O MNĚ" delay={200} /></p>
          <h1 className="font-body font-extrabold text-[clamp(2rem,4vw,3.5rem)] leading-[1.2] tracking-[0.02em] text-foreground mb-8 stagger-2">
            Ahoj, jsem Pavel. <span className="inline-block animate-wave">👋</span>
          </h1>
          <p className="font-body font-light text-[clamp(1rem,1.4vw,1.25rem)] leading-[1.8] text-muted-foreground max-w-2xl stagger-3">
            Digitální produkty navrhuju od roku 1999.
          </p>
        </section>

        {/* What I do — big statement */}
        <section className="mb-16 md:mb-32 reveal-group" ref={whatRef}>
          <p className="font-mono text-xs tracking-[0.2em] text-primary mb-2 reveal-item"><ScrambleTag text="/ STÁLE SE SNAŽÍM O JEDNO" /></p>
          <div className="space-y-1 mb-10">
            <p className="font-body font-extrabold text-[clamp(2rem,5vw,4.5rem)] leading-[1.1] text-foreground reveal-item" style={{ transitionDelay: "100ms" }}>
              Pochopit problém.
            </p>
            <p className="font-body font-extrabold text-[clamp(2rem,5vw,4.5rem)] leading-[1.1] text-foreground reveal-item" style={{ transitionDelay: "200ms" }}>
              Navrhnout řešení.
            </p>
          </div>
          <p className="font-body font-light text-[clamp(1rem,1.4vw,1.25rem)] leading-[1.8] text-muted-foreground max-w-2xl reveal-item" style={{ transitionDelay: "300ms" }}>
            Na tom se nic nezměnilo.
          </p>
          <svg className="w-[min(100%,13.5rem)] h-3 mt-1 text-primary reveal-item" style={{ transitionDelay: "400ms" }} viewBox="0 0 250 12" fill="none" preserveAspectRatio="none" aria-hidden="true">
            <path d="M2 8 C 40 2, 70 12, 110 6 S 180 3, 220 7 S 240 5, 248 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" className="hand-drawn-line" />
          </svg>
        </section>

        {/* The problem — contrast block */}
        <section className="mb-16 md:mb-32 reveal-group" ref={problemRef}>
          <div className="reveal-item">
            <p className="font-mono text-xs tracking-[0.2em] text-primary mb-2"><ScrambleTag text="/ REALITA" /></p>
            <h2 className="font-body font-extrabold text-[clamp(1.75rem,3.5vw,3rem)] leading-[1.2] text-muted-foreground mb-4">
              Ale spousta dobrých nápadů
            </h2>
            <h2 className="font-body font-extrabold text-[clamp(1.75rem,3.5vw,3rem)] leading-[1.2] text-foreground mb-8">
              končí v šuplíku.
            </h2>
            <p className="font-body text-[clamp(1rem,1.4vw,1.25rem)] leading-[1.8] text-muted-foreground max-w-xl">
              Protože na realizaci chybí čas nebo zdroje.
            </p>
          </div>
        </section>

        {/* AI changed everything — the break */}
        <section className="mb-16 md:mb-32 reveal-group" ref={aiRef}>
          <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12 md:gap-20 items-start">
            <div className="reveal-item">
              <h2 className="font-body font-black text-[clamp(3rem,8vw,7rem)] leading-[0.9] text-primary">
                Přišla<br />AI.
              </h2>
            </div>
            <div className="flex flex-col justify-center reveal-item" style={{ transitionDelay: "150ms" }}>
              <p className="font-body font-semibold text-[clamp(1.25rem,2vw,1.75rem)] leading-[1.5] text-foreground mb-6">
                A změnila pravidla hry.
              </p>
              <p className="font-body font-light text-[clamp(1rem,1.4vw,1.25rem)] leading-[1.8] text-muted-foreground max-w-lg">
                Tak rychlou změnu jsem za 27 let v digitálu ještě nezažil. Najednou se cesta od nápadu k realizaci dramaticky zkrátila.
              </p>
            </div>
          </div>
        </section>

        {/* New reality */}
        <section className="mb-16 md:mb-32 reveal-group" ref={realityRef}>
          <p className="font-mono text-xs tracking-[0.2em] text-primary mb-2 reveal-item"><ScrambleTag text="/ NOVÁ REALITA" /></p>
          <div>
            <h2 className="font-body font-extrabold text-[clamp(1.25rem,2vw,1.75rem)] leading-[1.4] text-foreground mb-3 reveal-item" style={{ transitionDelay: "100ms" }}>
              Rychlejší realizace neznamená méně přemýšlení.<br />
              Znamená víc prostoru{" "}
              <span
                className="relative inline-block text-primary cursor-default"
                onMouseEnter={(e) => { const t = e.currentTarget.querySelector('[role=tooltip]') as HTMLElement; if (t) { t.style.opacity = '1'; t.style.transform = 'scale(1)' } }}
                onMouseLeave={(e) => { const t = e.currentTarget.querySelector('[role=tooltip]') as HTMLElement; if (t) { t.style.opacity = '0'; t.style.transform = 'scale(0.95)' } }}
              >
                <span className="decoration-primary/40 decoration-dashed underline underline-offset-4 cursor-help">přemýšlet správně</span>
                <span
                  role="tooltip"
                  className="pointer-events-none absolute -top-44 left-1/2 -translate-x-1/2 z-50 w-64 px-5 py-4 rounded-xl bg-card border border-border shadow-2xl transition-all duration-200"
                  style={{ opacity: 0, transform: 'scale(0.95)' }}
                >
                  <span className="block font-mono text-xs text-muted-foreground mb-3">Pořád platí:</span>
                  <span className="flex items-center justify-center gap-3 font-mono text-base mt-1">
                    <span className="inline-flex flex-col items-center">
                      <span className="text-foreground font-medium">rozhodnutí</span>
                      <span className="w-full h-px bg-muted-foreground/50 my-1" />
                      <span className="text-foreground font-bold">2</span>
                    </span>
                    <span className="text-muted-foreground">=</span>
                    <span className="text-foreground font-bold">bordel²</span>
                  </span>
                </span>
              </span><span className="text-primary">.</span>
            </h2>
            <p className="font-body font-light text-[clamp(1rem,1.4vw,1.25rem)] leading-[1.8] text-muted-foreground mt-8 reveal-item" style={{ transitionDelay: "200ms" }}>
              A právě proto mě tenhle způsob práce dnes baví ještě víc.
            </p>
          </div>
        </section>

        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-16 md:mb-32" />

        {/* Why this exists */}
        <section className="mb-16 md:mb-32 reveal-group" ref={whyRef}>
          <p className="font-mono text-xs tracking-[0.2em] text-primary mb-2 reveal-item"><ScrambleTag text="/ PROTO VZNIKLO" /></p>
          <h2 className="font-body font-black text-[clamp(2.5rem,6vw,5rem)] leading-[1.0] text-foreground mb-10 reveal-item" style={{ transitionDelay: "100ms" }}>
            Levou zadní.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl">
            <p className="font-body font-light text-[clamp(1rem,1.4vw,1.25rem)] leading-[1.8] text-muted-foreground reveal-item" style={{ transitionDelay: "200ms" }}>
              Je to můj osobní experimentální projekt. Prostor, kde si zkouším nové nápady, technologie a způsoby práce s AI.
            </p>
            <p className="font-body font-light text-[clamp(1rem,1.4vw,1.25rem)] leading-[1.8] text-muted-foreground reveal-item" style={{ transitionDelay: "300ms" }}>
              Někdy jen pro radost z objevování. Někdy jako experiment. A někdy z toho vznikne projekt pro klienty.
            </p>
          </div>
          <div className="mt-12 py-8 px-10 rounded-xl border-l-4 border-primary bg-card/40 max-w-2xl reveal-item" style={{ transitionDelay: "400ms" }}>
            <p className="font-body font-medium text-[clamp(1rem,1.3vw,1.125rem)] leading-[1.7] text-foreground/80">
              Nápady ve dvě ráno. Koupené domény. Prototypy za pár dnů.
            </p>
            <p className="font-body font-medium text-[clamp(1rem,1.3vw,1.125rem)] leading-[1.7] text-foreground/80 mt-2">
              Co dřív nemělo šanci, dnes má.
            </p>
          </div>
        </section>

        {/* Author */}
        <section className="mb-20 reveal-group" ref={authorRef}>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 reveal-item">
            <img src="/pavel.png" alt="Pavel Martinovský" className="w-24 h-24 rounded-full shrink-0" />
            <div>
              <div className="font-body font-bold text-2xl text-foreground">Pavel Martinovský</div>
              <div className="font-mono text-sm text-muted-foreground mt-1">Senior UX Designer @ J&T Banka ❤️</div>
              <a
                href="https://www.linkedin.com/in/pavelmartinovsky/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-mono text-xs text-muted-foreground hover:text-primary transition-colors mt-3"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="text-center py-8">
          <PrimaryButton href="/kontakty">Pojďme se spojit</PrimaryButton>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
