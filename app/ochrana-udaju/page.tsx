import type { Metadata } from "next"
import Link from "next/link"
import { SiteFooter } from "@/components/site-footer"

export const metadata: Metadata = {
  title: "Ochrana osobních údajů",
  description: "Informace o zpracování osobních údajů na webu AI Studio.",
}

export default function PrivacyPage() {
  return (
    <div className="relative min-h-screen flex flex-col">
      <main className="relative z-10 max-w-[1408px] mx-auto px-6 pt-32 pb-24">

        <div className="max-w-2xl mx-auto text-center mb-16">
          <p className="font-mono text-xs tracking-[0.2em] text-primary mb-2">/ OCHRANA ÚDAJŮ</p>
          <h1 className="font-body font-extrabold text-[clamp(2rem,4vw,3.5rem)] leading-[1.2] tracking-[0.02em] text-foreground mb-4">
            Osobní údaje
          </h1>
          <p className="font-body font-light text-[clamp(1rem,1.4vw,1.25rem)] leading-[1.8] text-muted-foreground">
            Krátce a srozumitelně.
          </p>
        </div>

        <div className="max-w-2xl mx-auto space-y-10">
          <div>
            <h2 className="font-body font-semibold text-foreground mb-2">Co sbíráme</h2>
            <p className="font-body font-light text-muted-foreground leading-[1.8]">
              Tento web neshromažďuje žádné osobní údaje automaticky. Žádné cookies, žádné sledování.
            </p>
          </div>

          <div>
            <h2 className="font-body font-semibold text-foreground mb-2">Když nás kontaktujete</h2>
            <p className="font-body font-light text-muted-foreground leading-[1.8]">
              Pokud vyplníte formulář nebo napíšete e-mail, poskytnete nám své kontaktní údaje (jméno, e-mail, případně telefon) a obsah zprávy. Používáme je výhradně k odpovědi na váš dotaz.
            </p>
          </div>

          <div>
            <h2 className="font-body font-semibold text-foreground mb-2">Kam údaje putují</h2>
            <p className="font-body font-light text-muted-foreground leading-[1.8]">
              Nikam. Údaje nejsou ukládány do databáze na tomto webu — dorazí pouze do e-mailové schránky. Nikomu je neprodáváme ani nepředáváme.
            </p>
          </div>

          <div>
            <h2 className="font-body font-semibold text-foreground mb-2">Máte dotaz?</h2>
            <p className="font-body font-light text-muted-foreground leading-[1.8]">
              Ozvěte se přes{" "}
              <Link href="/kontakty" className="text-primary hover:underline">kontaktní stránku</Link>.
            </p>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
