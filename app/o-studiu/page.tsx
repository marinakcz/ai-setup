import type { Metadata } from "next"
import { SiteFooter } from "@/components/site-footer"
import { PrimaryButton } from "@/components/primary-button"

export const metadata: Metadata = {
  title: "O studiu",
  description: "Kdo za AI Studiem stojí a proč vzniklo.",
}

export default function AboutPage() {
  return (
    <div className="relative min-h-screen">
      <main className="relative z-10 max-w-[1408px] mx-auto px-6 pt-32 pb-24">

        {/* Hero intro */}
        <section className="mb-32">
          <p className="font-mono text-xs tracking-[0.2em] text-primary mb-2">/ O STUDIU</p>
          <h1 className="font-body font-extrabold text-[clamp(2rem,4vw,3.5rem)] leading-[1.2] tracking-[0.02em] text-foreground mb-8">
            Ahoj, jsem Pavel.
          </h1>
          <p className="font-body font-light text-[clamp(1rem,1.4vw,1.25rem)] leading-[1.8] text-muted-foreground max-w-2xl">
            Digitální designer. Digitální produkty navrhuji od roku 1999.
          </p>
        </section>

        {/* What I do — big statement */}
        <section className="mb-32">
          <p className="font-mono text-xs tracking-[0.2em] text-primary mb-6">/ CELOU DOBU DĚLÁM JEDNO</p>
          <div className="space-y-1 mb-10">
            <p className="font-body font-extrabold text-[clamp(2rem,5vw,4.5rem)] leading-[1.1] text-foreground">
              Pochopit problém.
            </p>
            <p className="font-body font-extrabold text-[clamp(2rem,5vw,4.5rem)] leading-[1.1] text-foreground">
              Navrhnout řešení.
            </p>
          </div>
          <p className="font-body font-light text-[clamp(1rem,1.4vw,1.25rem)] leading-[1.8] text-muted-foreground max-w-2xl">
            Projít celý proces od pochopení problému až po návrh a ověření řešení. Právě na tom to celé stojí.
          </p>
        </section>

        {/* The problem — contrast block */}
        <section className="mb-32">
          <div className="py-16 md:py-24 -mx-6 px-6 md:px-16 rounded-2xl bg-card/60">
            <h2 className="font-body font-extrabold text-[clamp(1.75rem,3.5vw,3rem)] leading-[1.2] text-foreground mb-4">
              Ale spousta dobrých nápadů
            </h2>
            <h2 className="font-body font-extrabold text-[clamp(1.75rem,3.5vw,3rem)] leading-[1.2] text-muted-foreground mb-8">
              skončila v šuplíku.
            </h2>
            <p className="font-body text-[clamp(1rem,1.4vw,1.25rem)] leading-[1.8] text-muted-foreground max-w-xl">
              Protože na realizaci chyběl čas nebo zdroje.
            </p>
          </div>
        </section>

        {/* AI changed everything — the break */}
        <section className="mb-32">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12 md:gap-20 items-start">
            <div>
              <h2 className="font-body font-black text-[clamp(3rem,8vw,7rem)] leading-[0.9] text-primary">
                Přišla<br />AI.
              </h2>
            </div>
            <div className="flex flex-col justify-center">
              <p className="font-body font-semibold text-[clamp(1.25rem,2vw,1.75rem)] leading-[1.5] text-foreground mb-6">
                A změnila pravidla hry.
              </p>
              <p className="font-body font-light text-[clamp(1rem,1.4vw,1.25rem)] leading-[1.8] text-muted-foreground max-w-lg">
                Tak rychlou změnu jsem za těch 25 let v digitálu ještě nezažil. Najednou se cesta od nápadu k realizaci dramaticky zkrátila.
              </p>
            </div>
          </div>
        </section>

        {/* New reality */}
        <section className="mb-32">
          <p className="font-mono text-xs tracking-[0.2em] text-primary mb-6">/ NOVÁ REALITA</p>
          <div className="max-w-3xl">
            <h2 className="font-body font-extrabold text-[clamp(1.5rem,2.5vw,2.25rem)] leading-[1.3] text-foreground mb-3">
              Rychlejší realizace neznamená méně přemýšlení.
            </h2>
            <p className="font-body font-extrabold text-[clamp(1.5rem,2.5vw,2.25rem)] leading-[1.3] text-primary mb-8">
              Naopak.
            </p>
            <p className="font-body font-light text-[clamp(1rem,1.4vw,1.25rem)] leading-[1.8] text-muted-foreground">
              A právě proto mě tenhle způsob práce dnes baví ještě víc.
            </p>
          </div>
        </section>

        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-32" />

        {/* Why this exists */}
        <section className="mb-32">
          <p className="font-mono text-xs tracking-[0.2em] text-primary mb-6">/ PROTO VZNIKLO</p>
          <h2 className="font-body font-black text-[clamp(2.5rem,6vw,5rem)] leading-[1.0] text-foreground mb-10">
            Levou zadní.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl">
            <p className="font-body font-light text-[clamp(1rem,1.4vw,1.25rem)] leading-[1.8] text-muted-foreground">
              Je to můj osobní experimentální projekt. Prostor, kde si zkouším nové nápady, technologie a způsoby práce s AI.
            </p>
            <p className="font-body font-light text-[clamp(1rem,1.4vw,1.25rem)] leading-[1.8] text-muted-foreground">
              Někdy jen pro radost z objevování. Někdy jako experiment. A někdy z toho vznikne projekt pro klienty.
            </p>
          </div>
          <div className="mt-12 py-8 px-10 rounded-xl border-l-4 border-primary bg-card/40 max-w-2xl">
            <p className="font-body font-medium text-[clamp(1rem,1.3vw,1.125rem)] leading-[1.7] text-foreground/80 italic">
              Nápady ve dvě ráno. Koupené domény. Prototypy za pár dnů.
            </p>
            <p className="font-body font-medium text-[clamp(1rem,1.3vw,1.125rem)] leading-[1.7] text-foreground/80 italic mt-2">
              A někdy z toho vznikne něco většího.
            </p>
          </div>
        </section>

        {/* Author */}
        <section className="mb-20">
          <div className="flex items-center gap-6">
            <div className="w-14 h-14 rounded-xl border border-primary/20 bg-primary/[0.04] flex items-center justify-center text-primary shrink-0">
              <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </div>
            <div>
              <div className="font-body font-semibold text-lg text-foreground">Pavel Martinovský</div>
              <div className="font-mono text-sm text-muted-foreground mt-1">Senior UX Designer — J&T Banka (aktuálně)</div>
            </div>
            <a
              href="https://linkedin.com/in/martinovsky"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-auto w-10 h-10 rounded-xl border border-border hover:border-primary/40 flex items-center justify-center text-muted-foreground hover:text-primary transition-colors shrink-0"
              aria-label="LinkedIn profil"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </section>

        {/* CTA */}
        <div className="text-center py-8">
          <PrimaryButton href="/poptavka">Pojďme se spojit</PrimaryButton>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
