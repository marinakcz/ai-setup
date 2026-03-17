import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Ochrana osobních údajů",
  description: "Informace o zpracování osobních údajů na webu AI Studio.",
}

export default function PrivacyPage() {
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
        <p className="font-mono text-xs text-primary/80 tracking-[0.2em] uppercase mb-4">Právní informace</p>
        <h1 className="font-body font-bold text-3xl sm:text-4xl text-foreground leading-tight mb-12">
          Ochrana osobních údajů
        </h1>

        <div className="space-y-6 max-w-xl">
          <p className="text-base text-muted-foreground leading-relaxed">
            Tento web neshromažďuje žádné osobní údaje automaticky.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed">
            Pokud mě kontaktujete prostřednictvím formuláře nebo e-mailem, poskytnete mi své kontaktní údaje (například jméno, e-mail nebo telefon) a obsah zprávy.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed">
            Tyto údaje používám pouze za účelem odpovědi na váš dotaz nebo případně navázání spolupráce. Údaje nejsou ukládány do žádné databáze na tomto webu a jsou doručeny pouze do mé e-mailové schránky.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed">
            Vaše údaje nikomu neprodávám ani nepředávám třetím stranám.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed">
            Pokud máte jakýkoliv dotaz týkající se zpracování osobních údajů, můžete mě kontaktovat prostřednictvím{" "}
            <Link href="/kontakty" className="text-primary hover:underline">e-mailu</Link>.
          </p>
        </div>
      </main>

      <footer className="relative z-10 border-t border-border py-8">
        <div className="max-w-3xl mx-auto px-6 flex items-center justify-between">
          <span className="font-body font-bold text-lg tracking-[0.2em] text-primary">AI STUDIO</span>
          <Link href="/kontakty" className="font-mono text-xs text-muted-foreground hover:text-foreground transition-colors">Kontakty</Link>
        </div>
      </footer>
    </div>
  )
}
