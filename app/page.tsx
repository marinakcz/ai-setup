import Link from "next/link"

const METHODS = [
  {
    title: "Designové myšlení",
    tag: "HUMAN THINKING",
    desc: "Pomůžeme pochopit a správně definovat problém, aby řešení dávalo smysl.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
  },
  {
    title: "Umělá inteligence",
    tag: "AI ACCELERATION",
    desc: "AI výrazně rozšiřuje kapacitu a výkon, takže vývoj i hledání řešení je efektivnější.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
  {
    title: "Rychlé experimenty",
    tag: "FAST VALIDATION",
    desc: "Nápady rychle převádíme do praxe, abychom mohli hned ověřit, jestli dávají smysl.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
        <path d="M22 4L12 14.01l-3-3" />
      </svg>
    ),
  },
]

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <div className="fixed inset-0 dot-grid opacity-[0.14] pointer-events-none z-0" />

      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/60 bg-background/75 backdrop-blur-xl">
        <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
          <span className="font-body font-bold text-xl tracking-[0.15em] text-primary">AI STUDIO</span>
          <div className="hidden md:flex items-center gap-6 font-mono text-xs text-muted-foreground">
            <Link href="/o-projektu" className="py-3 px-1 hover:text-foreground transition-colors">O projektu</Link>
            <Link href="/setup" className="py-3 px-1 hover:text-foreground transition-colors">Setup</Link>
            <Link href="/kontakty" className="py-3 px-1 hover:text-foreground transition-colors">Kontakty</Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <main>
        <section className="relative z-10 min-h-screen flex items-center pt-14">
          <div
            className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, hsl(var(--primary) / 0.06) 0%, transparent 70%)" }}
          />
          <div className="max-w-5xl mx-auto px-6 w-full py-28">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-primary/25 bg-primary/5 font-mono text-xs text-primary mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                AI STUDIO
              </div>

              <h1
                className="font-body font-bold leading-none tracking-wide text-foreground mb-5"
                style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
              >
                Od nápadu k produktu.{" "}
                <span className="text-primary">Levou zadní.</span>
              </h1>

              <p className="text-lg text-muted-foreground leading-relaxed max-w-lg mb-10">
                prototypy · MVP · aplikace · AI nástroje
              </p>

              <Link
                href="/kontakty"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-primary/25 bg-primary/[0.04] font-mono text-sm text-primary hover:bg-primary/[0.08] transition-colors"
              >
                Ozvěte se
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* Studio */}
        <section className="relative z-10 py-24 border-t border-border">
          <div className="max-w-5xl mx-auto px-6">
            <div className="max-w-2xl">
              <p className="font-mono text-xs text-primary/80 tracking-[0.2em] uppercase mb-4">01 / Studio</p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Experimentální AI studio, kde technologie násobí lidské zkušenosti a expertízu.
              </p>
            </div>
          </div>
        </section>

        {/* How we work */}
        <section className="relative z-10 py-24 border-t border-border" style={{ background: "hsl(var(--card) / 0.4)" }}>
          <div className="max-w-5xl mx-auto px-6">
            <p className="font-mono text-xs text-primary/80 tracking-[0.2em] uppercase mb-12">02 / Jak pracujeme</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {METHODS.map((method, i) => (
                <div key={i} className="p-6 rounded-2xl border border-border bg-card/50">
                  <div className="w-12 h-12 rounded-2xl border border-border bg-background flex items-center justify-center mb-5 text-primary">
                    {method.icon}
                  </div>
                  <h3 className="font-body font-semibold text-lg text-foreground mb-1">{method.title}</h3>
                  <p className="font-mono text-[10px] text-primary/70 tracking-[0.15em] uppercase mb-3">{method.tag}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{method.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="relative z-10 py-32 border-t border-border">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <p className="font-mono text-xs text-primary/80 tracking-[0.2em] uppercase mb-6">03 / Kontakt</p>
            <h2 className="font-body font-bold text-2xl sm:text-3xl text-foreground leading-tight mb-3">
              Nenechávejte své nápady<br />
              <span className="text-muted-foreground">v šuplíku.</span>
            </h2>
            <p className="text-lg text-foreground mb-10">Dnes už nemusíte.</p>

            <Link
              href="/kontakty"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-primary text-primary-foreground font-mono text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Ozvěte se
              <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-border py-8">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
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
