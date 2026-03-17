"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef } from "react"

const PILLARS = [
  {
    tag: "HUMAN THINKING",
    title: "Designové myšlení",
    desc: "Vnímáme a správně definujeme problém, aby řešení dávalo smysl.",
  },
  {
    tag: "AI ACCELERATION",
    title: "Umělá inteligence",
    desc: "AI výrazně rozšiřuje výkon, takže cesta i hledání řešení je kratší a efektivnější.",
  },
  {
    tag: "FAST VALIDATION",
    title: "Rychlé experimenty",
    desc: "Nápady převádíme brzo do praxe, abychom mohli ověřit, jestli dávají smysl.",
  },
]

const TAGS = ["PROTOTYPY", "MVP", "AI NÁSTROJE", "EXPERIMENTY"]

function useParallax() {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const onScroll = () => {
      const rect = el.getBoundingClientRect()
      const center = rect.top + rect.height / 2
      const viewCenter = window.innerHeight / 2
      const offset = (center - viewCenter) * 0.08
      el.style.transform = `translateY(${offset}px)`
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [])
  return ref
}

function useReveal() {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("revealed")
          observer.unobserve(el)
        }
      },
      { threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])
  return ref
}

export default function Home() {
  const logoParallax = useParallax()
  const pillarsRef = useReveal()
  const ctaRef = useReveal()

  return (
    <div className="relative min-h-screen">
      <main>
        {/* Hero */}
        <section className="relative z-10 pt-24 pb-16 min-h-[90vh] flex flex-col justify-center">
          <div className="max-w-[1408px] mx-auto px-6 w-full">
            {/* Tag + Headline — staggered fade in */}
            <div className="text-center mb-12 hero-stagger">
              <p className="font-mono text-sm tracking-[0.15em] text-primary mb-3 stagger-1">
                / AI STUDIO
              </p>
              <h1 className="font-body font-extrabold text-[clamp(1.75rem,3.2vw,2.5rem)] leading-[1.6] tracking-[0.04em] text-foreground stagger-2">
                OD NÁPADU K PRODUKTU
              </h1>
            </div>

            {/* Logo with parallax */}
            <div className="flex justify-center mb-12 stagger-3" ref={logoParallax}>
              <div className="relative w-[clamp(280px,50vw,820px)] aspect-[956/538] logo-float">
                <Image
                  src="/mascot.svg"
                  alt="Levou Zadní"
                  fill
                  className="object-contain drop-shadow-[0_0_60px_rgba(240,88,35,0.15)]"
                  priority
                />
              </div>
            </div>

            {/* Subtitle */}
            <div className="text-center mb-3 stagger-4">
              <p className="font-body text-[clamp(1.125rem,2.2vw,2.5rem)] leading-[1.6]">
                <span className="text-foreground">Experimentální AI studio, kde technologie násobí </span>
                <br className="hidden md:inline" />
                <span className="text-muted-foreground">lidské zkušenosti a expertízu.</span>
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 font-mono text-sm tracking-[0.1em] text-primary stagger-5">
              {TAGS.map((tag) => (
                <span key={tag} className="hover:text-foreground transition-colors duration-300 cursor-default">
                  / {tag}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Divider — full bleed */}
        <div className="w-screen relative left-1/2 -translate-x-1/2 h-px bg-border" />

        {/* Three pillars */}
        <section className="relative z-10 py-16 md:py-20">
          <div
            className="max-w-[1408px] mx-auto px-6 reveal-group"
            ref={pillarsRef}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-20">
              {PILLARS.map((pillar, i) => (
                <div
                  key={pillar.tag}
                  className="reveal-item group"
                  style={{ transitionDelay: `${i * 120}ms` }}
                >
                  <p className="font-mono text-sm tracking-[0.15em] text-primary mb-3">
                    / {pillar.tag}
                  </p>
                  <h3 className="font-body font-semibold text-[clamp(1.5rem,2vw,2rem)] leading-tight text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {pillar.title}
                  </h3>
                  <p className="font-body text-[clamp(1rem,1.3vw,1.5rem)] leading-relaxed text-muted-foreground">
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Divider — full bleed */}
        <div className="w-screen relative left-1/2 -translate-x-1/2 h-px bg-border" />

        {/* CTA */}
        <section className="relative z-10 py-20 md:py-28">
          <div
            className="max-w-[1408px] mx-auto px-6 text-center reveal-group"
            ref={ctaRef}
          >
            <p className="font-mono text-sm tracking-[0.15em] text-primary mb-3 reveal-item">
              / AI STUDIO
            </p>
            <h2 className="font-body font-extrabold text-[clamp(1.75rem,3.2vw,2.5rem)] leading-[1.6] tracking-[0.04em] text-foreground mb-3 reveal-item" style={{ transitionDelay: "100ms" }}>
              NENECHÁVEJTE<br />
              SVÉ NÁPADY <span className="text-muted-foreground">V ŠUPLÍKU</span>
            </h2>
            <p className="font-body text-[clamp(1.25rem,2vw,2rem)] text-muted-foreground mb-10 reveal-item" style={{ transitionDelay: "200ms" }}>
              Dnes už nemusíte.
            </p>
            <div className="reveal-item" style={{ transitionDelay: "300ms" }}>
              <Link
                href="/poptavka"
                className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full border border-primary/30 bg-primary/[0.06] font-mono text-sm tracking-[0.1em] text-primary hover:bg-primary/[0.14] hover:border-primary/50 transition-all duration-300"
              >
                OZVĚTE SE
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-border py-8">
        <div className="max-w-[1408px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-body font-bold text-lg tracking-[0.2em] text-primary">AI STUDIO</span>
          <div className="flex gap-6 font-mono text-xs text-muted-foreground">
            <Link href="/o-projektu" className="hover:text-foreground transition-colors">O projektu</Link>
            <Link href="/setup" className="hover:text-foreground transition-colors">Setup</Link>
            <Link href="/ochrana-udaju" className="hover:text-foreground transition-colors">Ochrana údajů</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
