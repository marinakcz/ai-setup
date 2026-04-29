import Image from "next/image";
import Link from "next/link";
import { RevealWrapper } from "@/components/reveal-wrapper";
import { TooltipCard } from "@/components/tooltip-card";
import { PrimaryButton } from "@/components/primary-button";
import { SiteFooter } from "@/components/site-footer";

export default function AboutPage() {
  return (
    <div className="relative min-h-screen flex flex-col">
      <main className="relative z-10 max-w-[1408px] mx-auto px-6 pt-24 pb-16 md:pt-32 md:pb-24">
        {/* Hero intro */}
        <section className="mb-16 md:mb-32 hero-stagger">
          <p className="font-mono text-xs tracking-[0.2em] text-primary mb-2 stagger-1">
            / O STUDIU A O MNĚ
          </p>
          <h1 className="font-body font-extrabold text-[clamp(2rem,4vw,3.5rem)] leading-[1.2] tracking-[0.02em] text-foreground mb-8 stagger-2">
            Ahoj, jsem Pavel.
          </h1>
          <p className="font-body font-light text-[clamp(1rem,1.4vw,1.25rem)] leading-[1.8] text-muted-foreground max-w-2xl stagger-3">
            Digitální produkty navrhuju od roku 1999.
          </p>
        </section>

        {/* What I do — big statement */}
        <RevealWrapper className="mb-16 md:mb-32">
          <p className="font-mono text-xs tracking-[0.2em] text-primary mb-2 reveal-item">
            / STÁLE SE SNAŽÍM O JEDNO
          </p>
          <div className="space-y-1 mb-10">
            <p
              className="font-body font-extrabold text-[clamp(2rem,5vw,4.5rem)] leading-[1.1] text-foreground reveal-item"
              style={{ transitionDelay: "100ms" }}
            >
              Pochopit problém.
            </p>
            <p
              className="font-body font-extrabold text-[clamp(2rem,5vw,4.5rem)] leading-[1.1] text-foreground reveal-item"
              style={{ transitionDelay: "200ms" }}
            >
              Navrhnout řešení.
            </p>
          </div>
          <p
            className="font-body font-light text-[clamp(1rem,1.4vw,1.25rem)] leading-[1.8] text-muted-foreground max-w-2xl reveal-item"
            style={{ transitionDelay: "300ms" }}
          >
            Na tom se nic nezměnilo.
          </p>
        </RevealWrapper>

        {/* The problem — contrast block */}
        <RevealWrapper className="mb-16 md:mb-32">
          <div className="reveal-item">
            <p className="font-mono text-xs tracking-[0.2em] text-primary mb-2">
              / REALITA
            </p>
            <h2 className="font-body font-extrabold text-[clamp(1.75rem,3.5vw,3rem)] leading-[1.2] text-muted-foreground mb-4">
              Ale spousta dobrých nápadů
            </h2>
            <h2 className="font-body font-extrabold text-[clamp(1.75rem,3.5vw,3rem)] leading-[1.2] text-foreground mb-8">
              končí v šuplíku.
            </h2>
            <p className="font-body text-[clamp(1rem,1.4vw,1.25rem)] leading-[1.8] text-muted-foreground max-w-xl">
              Protože na realizaci chybí čas nebo zdroje.
            </p>
          </div>
        </RevealWrapper>

        {/* AI changed everything — the break */}
        <RevealWrapper className="mb-16 md:mb-32">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12 md:gap-20 items-start">
            <div className="reveal-item">
              <h2 className="font-body font-black text-[clamp(3rem,8vw,7rem)] leading-[0.9] text-primary">
                Přišla
                <br />
                AI.
              </h2>
            </div>
            <div
              className="flex flex-col justify-center reveal-item"
              style={{ transitionDelay: "150ms" }}
            >
              <p className="font-body font-semibold text-[clamp(1.25rem,2vw,1.75rem)] leading-[1.5] text-foreground mb-6">
                A změnila pravidla hry.
              </p>
              <p className="font-body font-light text-[clamp(1rem,1.4vw,1.25rem)] leading-[1.8] text-muted-foreground max-w-lg">
                Tak rychlou změnu jsem za 27 let v digitálu ještě nezažil.
                Najednou se cesta od nápadu k realizaci dramaticky zkrátila.
              </p>
            </div>
          </div>
        </RevealWrapper>

        {/* New reality */}
        <RevealWrapper className="mb-16 md:mb-32">
          <p className="font-mono text-xs tracking-[0.2em] text-primary mb-2 reveal-item">
            / NOVÁ REALITA
          </p>
          <div>
            <h2
              className="font-body font-extrabold text-[clamp(1.25rem,2vw,1.75rem)] leading-[1.4] text-foreground mb-3 reveal-item"
              style={{ transitionDelay: "100ms" }}
            >
              Rychlejší realizace neznamená méně přemýšlení.
              <br />
              Znamená víc prostoru <TooltipCard />
              <span className="text-primary">.</span>
            </h2>
            <p
              className="font-body font-light text-[clamp(1rem,1.4vw,1.25rem)] leading-[1.8] text-muted-foreground mt-8 reveal-item"
              style={{ transitionDelay: "200ms" }}
            >
              A právě proto mě tenhle způsob práce dnes baví ještě víc.
            </p>
          </div>
        </RevealWrapper>

        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-16 md:mb-32" />

        {/* Why this exists */}
        <RevealWrapper className="mb-16 md:mb-32">
          <p className="font-mono text-xs tracking-[0.2em] text-primary mb-2 reveal-item">
            / PROTO VZNIKLO
          </p>
          <h2
            className="font-body font-black text-[clamp(2.5rem,6vw,5rem)] leading-[1.0] text-foreground mb-10 reveal-item"
            style={{ transitionDelay: "100ms" }}
          >
            Levou zadní.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl">
            <p
              className="font-body font-light text-[clamp(1rem,1.4vw,1.25rem)] leading-[1.8] text-muted-foreground reveal-item"
              style={{ transitionDelay: "200ms" }}
            >
              Je to můj osobní experimentální projekt. Prostor, kde si zkouším
              nové nápady, technologie a způsoby práce s AI.
            </p>
            <p
              className="font-body font-light text-[clamp(1rem,1.4vw,1.25rem)] leading-[1.8] text-muted-foreground reveal-item"
              style={{ transitionDelay: "300ms" }}
            >
              Někdy jen pro radost z objevování. Někdy jako experiment. A někdy
              z toho vznikne projekt pro klienty.
            </p>
          </div>
          <div
            className="mt-12 py-8 px-10 rounded-xl border-l-4 border-primary bg-card/40 max-w-2xl reveal-item"
            style={{ transitionDelay: "400ms" }}
          >
            <p className="font-body font-medium text-[clamp(1rem,1.3vw,1.125rem)] leading-[1.7] text-foreground/80">
              Nápady ve dvě ráno. Koupené domény. Prototypy za pár dnů.
            </p>
            <p className="font-body font-medium text-[clamp(1rem,1.3vw,1.125rem)] leading-[1.7] text-foreground/80 mt-2">
              Co dřív nemělo šanci, dnes má.
            </p>
          </div>
        </RevealWrapper>

        {/* Author */}
        <RevealWrapper className="mb-20">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 reveal-item">
            <Image
              src="/pavel.png"
              alt="Pavel Martinovský"
              width={96}
              height={96}
              className="w-24 h-24 rounded-full shrink-0"
            />
            <div>
              <div className="font-body font-bold text-2xl text-foreground">
                Pavel Martinovský
              </div>
              <div className="font-mono text-sm text-muted-foreground mt-1">
                Senior UX Designer @ J&T Banka
              </div>
              <div className="font-mono text-sm text-muted-foreground/60 mt-2 leading-relaxed">
                Přes den součástí skvělého Digital Experience týmu v bance ❤️
                <br />
                Večer a víkendy stavím věci na vlastní triko.
              </div>
              <a
                href="https://www.linkedin.com/in/pavelmartinovsky/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-mono text-xs text-muted-foreground hover:text-primary transition-colors mt-3"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-4 h-4"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
            </div>
          </div>
        </RevealWrapper>

        {/* CTA */}
        <div className="text-center py-8">
          <PrimaryButton href="/kontakty">Pojďme se spojit</PrimaryButton>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
