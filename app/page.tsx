"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef, useCallback } from "react"
import { AmbientSwirl } from "@/components/ambient-swirl"

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

const SCRAMBLE_CHARS = "!<>-_\\/[]{}—=+*^?#________"

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

        const randomChar = () =>
          SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)]

        // Build queue: each character gets a random start/end frame
        const oldText = el.innerText
        const length = Math.max(oldText.length, text.length)
        const queue: { from: string; to: string; start: number; end: number; char?: string }[] = []
        for (let i = 0; i < length; i++) {
          const from = oldText[i] || ""
          const to = text[i] || ""
          const start = Math.floor(Math.random() * 40)
          const end = start + Math.floor(Math.random() * 40)
          queue.push({ from, to, start, end })
        }

        let frame = 0
        let frameReq: number
        const delayFrames = Math.floor(delay / 16)

        const update = () => {
          if (frame < delayFrames) {
            frame++
            frameReq = requestAnimationFrame(update)
            return
          }

          const currentFrame = frame - delayFrames
          let output = ""
          let complete = 0

          for (let i = 0; i < queue.length; i++) {
            const { from, to, start, end } = queue[i]
            let { char } = queue[i]

            if (currentFrame >= end) {
              complete++
              output += to
            } else if (currentFrame >= start) {
              if (!char || Math.random() < 0.28) {
                char = randomChar()
                queue[i].char = char
              }
              output += `<span class="scramble-dud">${char}</span>`
            } else {
              output += from
            }
          }

          el.innerHTML = output

          if (complete === queue.length) {
            el.innerHTML = text
          } else {
            frame++
            frameReq = requestAnimationFrame(update)
          }
        }

        frameReq = requestAnimationFrame(update)
        return () => cancelAnimationFrame(frameReq)
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
        <section className="relative z-10 pt-32 pb-24 min-h-[95vh] flex flex-col justify-center overflow-hidden">
          <AmbientSwirl />
          <div className="max-w-[1408px] mx-auto px-6 w-full relative z-10">
            {/* Tag + Headline */}
            <div className="text-center mb-20 hero-stagger">
              <p className="font-mono text-xs tracking-[0.2em] text-primary mb-5 stagger-1">
                <ScrambleTag text="/ AI STUDIO" delay={300} />
              </p>
              <h1 className="font-body font-extrabold text-[clamp(1.5rem,2.8vw,2.5rem)] leading-[1.6] tracking-[0.06em] text-foreground stagger-2">
                Od nápadu k produktu
              </h1>
            </div>

            {/* Logo with parallax */}
            <div className="flex justify-center mb-24 stagger-3" ref={logoParallax}>
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
            <div className="text-center mb-6 stagger-4">
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
        <section className="relative z-10 py-24 md:py-32">
          <div
            className="max-w-[1408px] mx-auto px-6 reveal-group"
            ref={pillarsRef}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-24">
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
        <section className="relative z-10 py-28 md:py-40">
          <div
            className="max-w-[1408px] mx-auto px-6 text-center reveal-group"
            ref={ctaRef}
          >
            <h2 className="font-body font-extrabold text-[clamp(1.75rem,3.5vw,3.5rem)] leading-[1.3] tracking-[0.04em] text-foreground mb-10 reveal-item">
              Šuplík není místo<br />
              pro dobré nápady.
            </h2>
            <div className="reveal-item" style={{ transitionDelay: "200ms" }}>
              <Link
                href="/poptavka"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-primary text-background font-mono text-xs tracking-[0.15em] font-medium hover:brightness-110 transition-all duration-300"
              >
                OZVĚTE SE
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
