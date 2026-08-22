import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Ochrana osobních údajů",
  description: "Jak pracuji s vašimi údaji na levouzadni.cz.",
  openGraph: {
    title: "Ochrana osobních údajů | Levou zadní",
    description: "Jak pracuji s vašimi údaji.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Levou zadní — AI studio",
      },
    ],
  },
  alternates: { canonical: "/ochrana-udaju" },
};

export default function PrivacyPage() {
  return (
    <div className="relative min-h-screen flex flex-col">
      <main className="relative z-10 max-w-[1408px] mx-auto px-6 pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="max-w-2xl mx-auto text-center mb-12 md:mb-16">
          <p className="font-mono text-xs tracking-[0.2em] text-primary mb-2">
            / OCHRANA ÚDAJŮ
          </p>
          <h1 className="font-body font-extrabold text-[clamp(2rem,4vw,3.5rem)] leading-[1.2] tracking-[0.02em] text-foreground mb-4">
            Osobní údaje
          </h1>
          <p className="font-body font-light text-[clamp(1rem,1.4vw,1.25rem)] leading-[1.8] text-muted-foreground">
            Krátce a srozumitelně.
          </p>
        </div>

        <div className="max-w-2xl mx-auto space-y-10">
          <div>
            <h2 className="font-body font-semibold text-[clamp(1.125rem,1.4vw,1.5rem)] leading-snug text-foreground mb-2">
              Co sbíráme
            </h2>
            <p className="font-body font-light text-[clamp(0.875rem,1.1vw,1.125rem)] text-muted-foreground leading-[1.8]">
              Tento web neshromažďuje žádné osobní údaje automaticky. Žádné
              cookies, žádné sledování.
            </p>
          </div>

          <div>
            <h2 className="font-body font-semibold text-[clamp(1.125rem,1.4vw,1.5rem)] leading-snug text-foreground mb-2">
              Když nás kontaktujete
            </h2>
            <p className="font-body font-light text-[clamp(0.875rem,1.1vw,1.125rem)] text-muted-foreground leading-[1.8]">
              Pokud vyplníte formulář nebo napíšete e-mail, poskytnete nám své
              kontaktní údaje (jméno, e-mail, případně telefon) a obsah zprávy.
              Používáme je výhradně k odpovědi na váš dotaz.
            </p>
          </div>

          <div>
            <h2 className="font-body font-semibold text-[clamp(1.125rem,1.4vw,1.5rem)] leading-snug text-foreground mb-2">
              Kam údaje putují
            </h2>
            <p className="font-body font-light text-[clamp(0.875rem,1.1vw,1.125rem)] text-muted-foreground leading-[1.8]">
              Nikam. Údaje nejsou ukládány do databáze na tomto webu — dorazí
              pouze do e-mailové schránky. Nikomu je neprodáváme ani
              nepředáváme.
            </p>
          </div>

          <div>
            <h2 className="font-body font-semibold text-[clamp(1.125rem,1.4vw,1.5rem)] leading-snug text-foreground mb-2">
              Správce údajů
            </h2>
            <p className="font-body font-light text-[clamp(0.875rem,1.1vw,1.125rem)] text-muted-foreground leading-[1.8]">
              Mgr. Pavel Martinovský, IČO: 06054251, Hlavenec 177, 294 76
              Praha-východ. Kontakt:{" "}
              <a
                href="mailto:studio@levouzadni.cz"
                className="text-primary underline"
              >
                studio@levouzadni.cz
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="font-body font-semibold text-[clamp(1.125rem,1.4vw,1.5rem)] leading-snug text-foreground mb-2">
              Právní základ
            </h2>
            <p className="font-body font-light text-[clamp(0.875rem,1.1vw,1.125rem)] text-muted-foreground leading-[1.8]">
              Údaje zpracováváme na základě oprávněného zájmu (odpověď na váš
              dotaz) a vašeho souhlasu (odeslání formuláře).
            </p>
          </div>

          <div>
            <h2 className="font-body font-semibold text-[clamp(1.125rem,1.4vw,1.5rem)] leading-snug text-foreground mb-2">
              Vaše práva
            </h2>
            <p className="font-body font-light text-[clamp(0.875rem,1.1vw,1.125rem)] text-muted-foreground leading-[1.8]">
              Máte právo na přístup ke svým údajům, jejich opravu, výmaz nebo
              přenositelnost. Stačí nám napsat a vyřídíme to.
            </p>
          </div>

          <div>
            <h2 className="font-body font-semibold text-[clamp(1.125rem,1.4vw,1.5rem)] leading-snug text-foreground mb-2">
              Doba uchovávání
            </h2>
            <p className="font-body font-light text-[clamp(0.875rem,1.1vw,1.125rem)] text-muted-foreground leading-[1.8]">
              Údaje z formuláře uchováváme jen po dobu nezbytnou k vyřízení
              dotazu, maximálně 1 rok. Poté je smažeme.
            </p>
          </div>

          <div>
            <h2 className="font-body font-semibold text-[clamp(1.125rem,1.4vw,1.5rem)] leading-snug text-foreground mb-2">
              Máte dotaz?
            </h2>
            <p className="font-body font-light text-[clamp(0.875rem,1.1vw,1.125rem)] text-muted-foreground leading-[1.8]">
              Ozvěte se přes{" "}
              <Link href="/kontakty" className="text-primary underline">
                kontaktní stránku
              </Link>
              .
            </p>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
