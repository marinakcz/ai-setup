import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Kontakty",
  description: "Plánujete nový projekt? Pojďme se spojit.",
}

export default function ContactPage() {
  return (
    <div className="relative min-h-screen">
      <div className="fixed inset-0 dot-grid opacity-[0.14] pointer-events-none z-0" />

      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/60 bg-background/75 backdrop-blur-xl">
        <div className="max-w-3xl mx-auto px-6 h-14 flex items-center justify-between">
          <Link href="/" className="font-body font-bold text-xl tracking-[0.15em] text-primary hover:opacity-80 transition-opacity">
            AI STUDIO
          </Link>
          <Link href="/" className="font-mono text-xs text-muted-foreground hover:text-foreground transition-colors py-3 px-1">
            Zpět
          </Link>
        </div>
      </nav>

      <main className="relative z-10 max-w-3xl mx-auto px-6 pt-32 pb-24">
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

        {/* Legal info */}
        <div className="space-y-2 text-sm text-muted-foreground">
          <p>Mgr. Pavel Martinovský, Hlavenec 177, 294 76 Praha-východ</p>
          <p>ICO: 06054251, Nejsem plátce DPH.</p>
          <p>Jsem zapsán v Živnostenském rejstříku Městského úřadu v Brandýse nad Labem.</p>
          <p className="pt-2 text-muted-foreground/70">&copy; 1999&mdash;2025</p>
        </div>
      </main>

      <footer className="relative z-10 border-t border-border py-8">
        <div className="max-w-3xl mx-auto px-6 flex items-center justify-between">
          <span className="font-body font-bold text-lg tracking-[0.2em] text-primary">AI STUDIO</span>
          <Link href="/ochrana-udaju" className="font-mono text-xs text-muted-foreground hover:text-foreground transition-colors">Ochrana údajů</Link>
        </div>
      </footer>
    </div>
  )
}
