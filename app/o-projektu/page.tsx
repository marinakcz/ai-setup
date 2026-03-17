import type { Metadata } from "next"
import Link from "next/link"
import { SiteFooter } from "@/components/site-footer"

export const metadata: Metadata = {
  title: "O projektu",
  description: "Kdo za AI Studiem stojí a proč vzniklo.",
}

export default function AboutPage() {
  return (
    <div className="relative min-h-screen">
      {/* Content */}
      <main className="relative z-10 max-w-5xl mx-auto px-6 pt-32 pb-24">

        {/* Intro */}
        <section className="mb-24">
          <p className="font-mono text-xs tracking-[0.2em] text-primary mb-2">/ O PROJEKTU</p>
          <h1 className="font-body font-bold text-3xl sm:text-4xl text-foreground leading-tight mb-6">
            Ahoj, jsem Pavel.
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Digitální designer. Digitální produkty navrhuji už od roku 1999, uf.
          </p>
        </section>

        {/* What I do */}
        <section className="mb-24">
          <p className="font-mono text-xs tracking-[0.2em] text-primary mb-2">/ CELOU DOBU DĚLÁM JEDNO</p>
          <div className="space-y-2">
            <p className="font-body font-bold text-2xl sm:text-3xl text-foreground">Pochopit problém.</p>
            <p className="font-body font-bold text-2xl sm:text-3xl text-foreground">Navrhnout řešení.</p>
          </div>
          <p className="text-base text-muted-foreground leading-relaxed mt-8 max-w-xl">
            Projít celý proces od pochopení problému až po návrh a ověření řešení není problém. Právě na tom to celé stojí.
          </p>
        </section>

        {/* The problem */}
        <section className="mb-24">
          <h2 className="font-body font-bold text-2xl sm:text-3xl text-foreground leading-tight mb-4">
            Ale spousta dobrých nápadů<br />
            <span className="text-muted-foreground">skončila v šuplíku.</span>
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Protože na realizaci chyběl čas nebo zdroje.
          </p>
        </section>

        {/* AI changed everything */}
        <section className="mb-24">
          <div className="border-l-2 border-primary/30 pl-6">
            <h2 className="font-body font-bold text-2xl sm:text-3xl text-primary mb-4">
              Přišla AI.
            </h2>
            <p className="text-lg text-foreground leading-relaxed mb-4">
              A změnila pravidla hry.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              Tak rychlou změnu jsem za těch 25 let v digitálu ještě nezažil. Najednou se cesta od nápadu k realizaci dramaticky zkrátila.
            </p>
          </div>
        </section>

        {/* New reality */}
        <section className="mb-24">
          <p className="font-mono text-xs tracking-[0.2em] text-primary mb-2">/ NOVÁ REALITA</p>
          <h2 className="font-body font-bold text-xl sm:text-2xl text-foreground leading-tight mb-4">
            Rychlejší realizace neznamená méně přemýšlení.
          </h2>
          <p className="text-lg text-foreground">Naopak.</p>
          <p className="text-base text-muted-foreground leading-relaxed mt-4">
            A právě proto mě tenhle způsob práce dnes baví ještě víc.
          </p>
        </section>

        {/* Why this exists */}
        <section className="mb-24">
          <p className="font-mono text-xs tracking-[0.2em] text-primary mb-2">/ PROTO VZNIKLO</p>
          <h2 className="font-body font-bold text-3xl sm:text-4xl text-foreground mb-6">
            Levou zadní.
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed mb-6 max-w-xl">
            Je to můj osobní experimentální projekt. Prostor, kde si zkouším nové nápady, technologie a způsoby práce s AI.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed mb-6 max-w-xl">
            Někdy jen pro radost z objevování. Někdy jako experiment. A někdy z toho vznikne projekt pro klienty.
          </p>
          <div className="p-5 rounded-2xl border border-border bg-card/50 max-w-xl">
            <p className="text-sm text-foreground/80 leading-relaxed italic">
              Nápady ve dvě ráno. Koupené domény. Prototypy za pár dnů.
            </p>
            <p className="text-sm text-foreground/80 leading-relaxed italic mt-2">
              A někdy z toho vznikne něco většího.
            </p>
          </div>
        </section>

        {/* Author card */}
        <section className="mb-16">
          <div className="flex items-center gap-5 p-6 rounded-2xl border border-border bg-card/50">
            <div className="w-14 h-14 rounded-2xl border border-primary/20 bg-primary/[0.04] flex items-center justify-center text-primary shrink-0">
              <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </div>
            <div>
              <div className="font-mono text-sm font-medium text-foreground">Pavel Martinovský</div>
              <div className="text-xs text-muted-foreground mt-0.5">Senior UX Designer — J&T Banka</div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/kontakty"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-primary/25 bg-primary/[0.04] font-mono text-sm text-primary hover:bg-primary/[0.08] transition-colors"
          >
            Kontaktní formulář
            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
