import Link from "next/link"
import Image from "next/image"

export function SiteFooter() {
  return (
    <footer className="relative z-10 py-10 mt-auto">
      <div className="w-screen relative left-1/2 -translate-x-1/2 h-px bg-gradient-to-r from-transparent via-border to-transparent mb-10" />
      <div className="max-w-[1408px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <Image src="/logo-bw.svg" alt="" width={24} height={24} className="h-5 w-5 opacity-50" />
          <span className="font-mono text-xs text-muted-foreground">
            Vyrobeno levou zadní · © 2026
          </span>
        </div>
        <div className="flex gap-4 font-mono text-xs text-muted-foreground">
          <Link href="/o-studiu" className="hover:text-foreground transition-colors">O studiu</Link>
          <span className="text-border">/</span>
          <Link href="/poptavka" className="hover:text-foreground transition-colors">Spojme se</Link>
          <span className="text-border">/</span>
          <Link href="/ochrana-udaju" className="hover:text-foreground transition-colors"><span className="hidden sm:inline">Ochrana osobních údajů</span><span className="sm:hidden">Ochrana údajů</span></Link>
          <span className="text-border">/</span>
          <Link href="/setup" className="hover:text-foreground transition-colors" title="Setup">π</Link>
        </div>
      </div>
    </footer>
  )
}
