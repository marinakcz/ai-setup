import type { Metadata } from "next"
import Link from "next/link"
import { SiteFooter } from "@/components/site-footer"

export const metadata: Metadata = {
  title: "Ochrana osobních údajů",
  description: "Informace o zpracování osobních údajů na webu AI Studio.",
}

export default function PrivacyPage() {
  return (
    <div className="relative min-h-screen">
      <main className="relative z-10 max-w-5xl mx-auto px-6 pt-32 pb-24">
        <p className="font-mono text-xs tracking-[0.2em] text-primary mb-2">/ PRÁVNÍ INFORMACE</p>
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

      <SiteFooter />
    </div>
  )
}
