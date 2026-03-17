import type { Metadata } from "next"
import Link from "next/link"
import { SiteFooter } from "@/components/site-footer"

export const metadata: Metadata = {
  title: "Kontakty",
  description: "Plánujete nový projekt? Pojďme se spojit.",
}

export default function ContactPage() {
  return (
    <div className="relative min-h-screen">
      <main className="relative z-10 max-w-5xl mx-auto px-6 pt-32 pb-24">
        <h1 className="font-body font-bold text-3xl sm:text-4xl lg:text-5xl text-primary leading-tight mb-4">
          Plánujete nový projekt?
        </h1>
        <p className="text-lg text-muted-foreground mb-16">Pojďme se spojit.</p>

        {/* Contact info */}
        <div className="space-y-8 mb-16">
          <a href="mailto:marinak@marinak.cz" className="block font-body font-semibold text-2xl sm:text-3xl text-foreground hover:text-primary transition-colors">
            marinak@marinak.cz
          </a>
          <a href="tel:+420776120555" className="block font-body font-semibold text-2xl sm:text-3xl text-foreground hover:text-primary transition-colors">
            +420 776 120 555
          </a>
        </div>

        {/* Social links */}
        <div className="space-y-4 mb-20">
          <a
            href="https://linkedin.com/in/martinovsky"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-body text-lg text-foreground hover:text-primary transition-colors"
          >
            LinkedIn
            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M7 17L17 7M7 7h10v10" />
            </svg>
          </a>
          <br />
          <a
            href="https://twitter.com/martinovsky"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-body text-lg text-foreground hover:text-primary transition-colors"
          >
            Twitter
            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M7 17L17 7M7 7h10v10" />
            </svg>
          </a>
        </div>

        {/* Identifikační a fakturační údaje */}
        <div className="border-t border-border pt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h2 className="font-body font-semibold text-lg text-foreground leading-snug">
                Identifikační<br />a fakturační údaje
              </h2>
            </div>
            <div className="space-y-1 text-sm text-muted-foreground">
              <p className="text-foreground font-medium">Mgr. Pavel Martinovský</p>
              <p>Hlavenec 177, 294 76 Praha-východ</p>
            </div>
            <div className="space-y-1 text-sm text-muted-foreground">
              <p>IČO: 06054251, Nejsem plátce DPH.</p>
              <p>Jsem zapsán v Živnostenském rejstříku Městského úřadu v Brandýse nad Labem.</p>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
