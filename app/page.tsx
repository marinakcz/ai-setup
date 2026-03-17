import Link from "next/link"

const NAV_ITEMS = [
  { href: "/setup", label: "Setup", desc: "Architektura, software, hardware" },
  { href: "/about", label: "O projektu", desc: "Co je AI Studio a proč existuje" },
  { href: "/contact", label: "Kontakty", desc: "Jak se spojit" },
  { href: "/feedback", label: "Popravkový formulář", desc: "Nahlásit chybu nebo navrhnout změnu" },
  { href: "/privacy", label: "Ochrana osobních údajů", desc: "GDPR a zpracování dat" },
]

export default function Home() {
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      <div className="fixed inset-0 dot-grid opacity-[0.14] pointer-events-none z-0" />

      <div className="relative z-10 max-w-lg mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <span className="font-body font-bold text-3xl tracking-[0.15em] text-primary">AI STUDIO</span>
          <p className="text-sm text-muted-foreground mt-3">Autonomní systém AI agentů</p>
        </div>

        <nav aria-label="Hlavní navigace" className="space-y-3">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center justify-between p-4 rounded-2xl border border-border bg-card/50 hover:border-primary/30 transition-colors group"
            >
              <div>
                <div className="font-mono text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                  {item.label}
                </div>
                <div className="text-xs text-muted-foreground mt-0.5">{item.desc}</div>
              </div>
              <svg viewBox="0 0 24 24" className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </Link>
          ))}
        </nav>
      </div>
    </div>
  )
}
