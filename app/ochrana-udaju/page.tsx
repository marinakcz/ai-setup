import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Ochrana osobních údajů",
  description: "Informace o zpracování osobních údajů na webu AI Studio.",
}

export default function PrivacyPage() {
  return (
    <div className="relative min-h-screen">
      <main className="relative z-10 max-w-5xl mx-auto px-6 pt-32 pb-24">
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

      <footer className="relative z-10 border-t border-border py-10">
        <div className="max-w-[1408px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-body font-bold text-sm tracking-[0.25em] text-primary">AI STUDIO</span>
          <div className="flex gap-6 font-mono text-xs text-muted-foreground">
            <Link href="/o-projektu" className="hover:text-foreground transition-colors">O projektu</Link>
            <Link href="/kontakty" className="hover:text-foreground transition-colors">Kontakty</Link>
            <Link href="/poptavka" className="hover:text-foreground transition-colors">Poptávka</Link>
            <Link href="/setup" className="hover:text-foreground transition-colors" title="Setup">π</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
