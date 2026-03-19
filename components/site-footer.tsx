import Link from "next/link"
import Image from "next/image"

export function SiteFooter() {
  return (
    <footer className="relative z-10 py-10 mt-auto">
      <div className="w-screen relative left-1/2 -translate-x-1/2 h-px bg-gradient-to-r from-transparent via-border to-transparent mb-10" />
      <div className="max-w-[1408px] mx-auto px-6 flex flex-col items-center gap-6">
        <Image src="/logo-bw.svg" alt="Levou Zadní" width={32} height={32} className="h-7 w-7 opacity-40" />
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 font-mono text-xs text-muted-foreground">
          <Link href="/o-studiu" className="py-2 hover:text-foreground transition-colors">O studiu</Link>
          <span className="text-border">/</span>
          <Link href="/pod-kapotou" className="py-2 hover:text-foreground transition-colors">Pod kapotou</Link>
          <span className="text-border">/</span>
          <Link href="/poptavka" className="py-2 hover:text-foreground transition-colors">Spojme se</Link>
          <span className="text-border">/</span>
          <Link href="/ochrana-udaju" className="py-2 hover:text-foreground transition-colors"><span className="hidden sm:inline">Ochrana osobních údajů</span><span className="sm:hidden">Ochrana údajů</span></Link>
        </div>
        <span className="font-mono text-xs text-muted-foreground">
          Copyright © 2026 levouzadni.cz
        </span>
      </div>
    </footer>
  )
}
