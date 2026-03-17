"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef, useCallback } from "react"

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

const SCRAMBLE_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*"

function useScramble(text: string, delay = 0) {
  const ref = useRef<HTMLSpanElement>(null)
  const hasRun = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el || hasRun.current) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasRun.current) return
        hasRun.current = true
        observer.unobserve(el)

        const original = text
        const duration = 800
        const startTime = performance.now() + delay
        let frame: number

        const animate = (now: number) => {
          const elapsed = now - startTime
          if (elapsed < 0) {
            el.textContent = original.replace(/[^ /]/g, () =>
              SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)]
            )
            frame = requestAnimationFrame(animate)
            return
          }

          const progress = Math.min(elapsed / duration, 1)
          const revealed = Math.floor(progress * original.length)

          let result = ""
          for (let i = 0; i < original.length; i++) {
            if (original[i] === " " || original[i] === "/") {
              result += original[i]
            } else if (i < revealed) {
              result += original[i]
            } else {
              result += SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)]
            }
          }
          el.textContent = result

          if (progress < 1) {
            frame = requestAnimationFrame(animate)
          } else {
            el.textContent = original
          }
        }

        frame = requestAnimationFrame(animate)
        return () => cancelAnimationFrame(frame)
      },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [text, delay])

  return ref
}

function ScrambleTag({ text, delay = 0 }: { text: string; delay?: number }) {
  const ref = useScramble(text, delay)
  return <span ref={ref}>{text}</span>
}

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
        <section className="relative z-10 pt-28 pb-20 min-h-[92vh] flex flex-col justify-center">
          <div className="max-w-[1408px] mx-auto px-6 w-full">
            {/* Tag + Headline */}
            <div className="text-center mb-16 hero-stagger">
              <p className="font-mono text-xs tracking-[0.2em] text-primary mb-5 stagger-1">
                <ScrambleTag text="/ AI STUDIO" delay={300} />
              </p>
              <h1 className="font-body font-extrabold text-[clamp(1.5rem,2.8vw,2.5rem)] leading-[1.6] tracking-[0.06em] text-foreground stagger-2">
                OD NÁPADU K PRODUKTU
              </h1>
            </div>

            {/* Logo with parallax */}
            <div className="flex justify-center mb-20 stagger-3" ref={logoParallax}>
              <div className="relative w-[clamp(260px,42vw,700px)] aspect-[956/538] logo-float">
                <Image
                  src="/mascot.svg"
                  alt="Levou Zadní"
                  fill
                  className="object-contain drop-shadow-[0_0_60px_rgba(240,88,35,0.12)]"
                  priority
                />
              </div>
            </div>

            {/* Subtitle */}
            <div className="text-center mb-5 stagger-4">
              <p className="font-body font-normal text-[clamp(1rem,1.8vw,2rem)] leading-[1.7]">
                <span className="text-foreground">Experimentální AI studio, kde technologie násobí </span>
                <br className="hidden md:inline" />
                <span className="text-muted-foreground">lidské zkušenosti a expertízu.</span>
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap items-center justify-center gap-5 md:gap-8 font-mono text-xs tracking-[0.15em] text-primary stagger-5">
              {TAGS.map((tag, i) => (
                <span key={tag} className="hover:text-foreground transition-colors duration-300 cursor-default">
                  <ScrambleTag text={`/ ${tag}`} delay={900 + i * 150} />
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Divider — full bleed */}
        <div className="w-screen relative left-1/2 -translate-x-1/2 h-px bg-border" />

        {/* Three pillars */}
        <section className="relative z-10 py-20 md:py-28">
          <div
            className="max-w-[1408px] mx-auto px-6 reveal-group"
            ref={pillarsRef}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-20">
              {PILLARS.map((pillar, i) => (
                <div
                  key={pillar.tag}
                  className="reveal-item group"
                  style={{ transitionDelay: `${i * 150}ms` }}
                >
                  <p className="font-mono text-xs tracking-[0.2em] text-primary mb-5">
                    <ScrambleTag text={`/ ${pillar.tag}`} delay={i * 200} />
                  </p>
                  <h3 className="font-body font-semibold text-[clamp(1.25rem,1.6vw,1.75rem)] leading-snug text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                    {pillar.title}
                  </h3>
                  <p className="font-body font-light text-[clamp(0.875rem,1.1vw,1.125rem)] leading-[1.7] text-muted-foreground">
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
        <section className="relative z-10 py-24 md:py-36">
          <div
            className="max-w-[1408px] mx-auto px-6 text-center reveal-group"
            ref={ctaRef}
          >
            <p className="font-mono text-xs tracking-[0.2em] text-primary mb-5 reveal-item">
              <ScrambleTag text="/ AI STUDIO" />
            </p>
            <h2 className="font-body font-extrabold text-[clamp(1.5rem,2.8vw,2.5rem)] leading-[1.6] tracking-[0.06em] text-foreground mb-5 reveal-item" style={{ transitionDelay: "120ms" }}>
              NENECHÁVEJTE<br />
              SVÉ NÁPADY <span className="text-muted-foreground">V ŠUPLÍKU</span>
            </h2>
            <p className="font-body font-normal text-[clamp(1.125rem,1.6vw,1.75rem)] text-muted-foreground mb-12 reveal-item" style={{ transitionDelay: "240ms" }}>
              Dnes už nemusíte.
            </p>
            <div className="reveal-item" style={{ transitionDelay: "360ms" }}>
              <Link
                href="/poptavka"
                className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full border border-primary/30 bg-primary/[0.06] font-mono text-xs tracking-[0.15em] text-primary hover:bg-primary/[0.14] hover:border-primary/50 transition-all duration-300"
              >
                OZVĚTE SE
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-border py-10">
        <div className="max-w-[1408px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-body font-bold text-sm tracking-[0.25em] text-primary">AI STUDIO</span>
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
