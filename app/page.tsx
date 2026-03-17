import Image from "next/image"
import Link from "next/link"

const PILLARS = [
  {
    tag: "HUMAN THINKING",
    title: "Designové myšlení",
    desc: "Vnímáme a správně definujeme problém, aby řešení dávalo smysl.",
  },
  {
    tag: "AI ACCELERATION",
    title: "Umělá inteligence",
    desc: "AI výrazně rozšiřuje výkon, takže cesta i hledání řešení je kratší a efektivnější.",
  },
  {
    tag: "FAST VALIDATION",
    title: "Rychlé experimenty",
    desc: "Nápady převádíme brzo do praxe, abychom mohli ověřit, jestli dávají smysl.",
  },
]

const TAGS = ["PROTOTYPY", "MVP", "AI NÁSTROJE", "EXPERIMENTY"]

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <main>
        {/* Hero */}
        <section className="relative z-10 pt-32 pb-20">
          <div className="max-w-[1408px] mx-auto px-6 w-full">
            {/* Tag + Headline */}
            <div className="text-center mb-16">
              <p className="font-mono text-base text-primary mb-4">/ AI STUDIO</p>
              <h1 className="font-body font-extrabold text-[clamp(2rem,3.5vw,2.5rem)] leading-tight text-foreground">
                OD NÁPADU K PRODUKTU
              </h1>
            </div>

            {/* Logo */}
            <div className="flex justify-center mb-16">
              <div className="relative w-[clamp(300px,60vw,960px)] aspect-[956/538]">
                <Image
                  src="/mascot.svg"
                  alt="Levou Zadní"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            {/* Subtitle */}
            <div className="text-center mb-4">
              <p className="font-body text-[clamp(1.25rem,2.5vw,2.5rem)] leading-snug">
                <span className="text-foreground">Experimentální AI studio, kde technologie násobí </span>
                <span className="text-muted-foreground">lidské zkušenosti a expertízu.</span>
              </p>
            </div>

            {/* Tags */}
            <div className="flex items-center justify-center gap-8 font-mono text-base text-primary">
              {TAGS.map((tag) => (
                <span key={tag}>/ {tag}</span>
              ))}
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="w-full h-px bg-border" />

        {/* Three pillars */}
        <section className="relative z-10 py-20">
          <div className="max-w-[1408px] mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
              {PILLARS.map((pillar) => (
                <div key={pillar.tag}>
                  <p className="font-mono text-base text-primary mb-4">/ {pillar.tag}</p>
                  <h3 className="font-body font-semibold text-[2rem] leading-tight text-foreground mb-4">
                    {pillar.title}
                  </h3>
                  <p className="font-body text-2xl leading-relaxed text-muted-foreground">
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="w-full h-px bg-border" />

        {/* CTA */}
        <section className="relative z-10 py-20">
          <div className="max-w-[1408px] mx-auto px-6 text-center">
            <p className="font-mono text-base text-primary mb-4">/ AI STUDIO</p>
            <h2 className="font-body font-extrabold text-[clamp(2rem,3.5vw,2.5rem)] leading-tight text-foreground mb-4">
              NENECHÁVEJTE<br />
              SVÉ NÁPADY <span className="text-muted-foreground">V ŠUPLÍKU</span>
            </h2>
            <p className="font-body text-[2rem] text-muted-foreground">
              Dnes už nemusíte.
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-border py-8">
        <div className="max-w-[1408px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-body font-bold text-lg tracking-[0.2em] text-primary">AI STUDIO</span>
          <div className="flex gap-6 font-mono text-xs text-muted-foreground">
            <Link href="/o-projektu" className="hover:text-foreground transition-colors">O projektu</Link>
            <Link href="/setup" className="hover:text-foreground transition-colors">Setup</Link>
            <Link href="/ochrana-udaju" className="hover:text-foreground transition-colors">Ochrana údajů</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
