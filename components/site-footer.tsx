import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="relative z-10 py-10">
      <div className="w-screen relative left-1/2 -translate-x-1/2 h-px bg-gradient-to-r from-transparent via-border to-transparent mb-10" />
      <div className="max-w-[1408px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-1">
          <span className="font-mono text-xs text-muted-foreground">© 2026 levouzadni.cz</span>
          <span className="font-mono text-xs text-muted-foreground">Built with AI. Humans safe.</span>
        </div>
        <div className="flex gap-4 font-mono text-xs text-muted-foreground">
          <Link href="/o-projektu" className="hover:text-foreground transition-colors">O studiu</Link>
          <span className="text-border">/</span>
          <Link href="/ochrana-udaju" className="hover:text-foreground transition-colors">Ochrana osobních údajů</Link>
          <span className="text-border">/</span>
          <Link href="/kontakty" className="hover:text-foreground transition-colors">Kontakt</Link>
          <span className="text-border">/</span>
          <Link href="/setup" className="hover:text-foreground transition-colors" title="Setup">π</Link>
        </div>
      </div>
    </footer>
  )
}
