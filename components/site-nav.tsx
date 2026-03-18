"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

const NAV_LINKS = [
  { href: "/", label: "Domů" },
  { href: "/o-projektu", label: "O studiu" },
  { href: "/projekty", label: "Projekty" },
  { href: "/kontakty", label: "Kontakty" },
  { href: "/poptavka", label: "Poptávka" },
]

export function SiteNav() {
  const [open, setOpen] = useState(false)

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [open])

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="max-w-5xl mx-auto px-6 h-14 mt-6 flex items-center justify-between relative z-10">
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="font-body font-bold text-xl tracking-[0.08em] text-foreground hover:text-primary transition-colors"
        >
          levouzadni
        </Link>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="relative w-10 h-10 flex items-center justify-center"
          aria-expanded={open}
          aria-label="Menu"
        >
          <div className="w-6 flex flex-col gap-[6px]">
            <span className={`block h-[1.5px] bg-foreground transition-all duration-300 origin-center ${open ? "rotate-45 translate-y-[3.75px]" : ""}`} />
            <span className={`block h-[1.5px] bg-foreground transition-all duration-300 origin-center ${open ? "-rotate-45 -translate-y-[3.75px]" : ""}`} />
          </div>
        </button>
      </div>

      {/* Fullscreen overlay */}
      <div
        className={`fixed inset-0 bg-background transition-all duration-500 ease-out flex flex-col ${open ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"}`}
      >
        {/* Spacer for top bar */}
        <div className="h-14 shrink-0" />

        {/* Main nav links — large flowing type */}
        <div className="flex-1 flex items-center">
          <div className="max-w-5xl mx-auto px-6 w-full">
            <div className="flex flex-wrap gap-x-[0.4em] gap-y-0 leading-[1.1]">
              {NAV_LINKS.map((link, i) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="font-body font-light text-foreground/80 hover:text-primary transition-colors duration-200"
                  style={{
                    fontSize: "clamp(2.5rem, 8vw, 7rem)",
                    animationDelay: `${i * 60}ms`,
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Footer in menu */}
        <div className="shrink-0 border-t border-border/40">
          <div className="max-w-5xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 font-mono text-xs text-muted-foreground">
              <span>marinak@marinak.cz</span>
              <span>+420 776 120 555</span>
            </div>
            <div className="flex gap-4 font-mono text-xs text-muted-foreground">
              <Link href="/ochrana-udaju" onClick={() => setOpen(false)} className="hover:text-foreground transition-colors">Ochrana údajů</Link>
              <a href="https://linkedin.com/in/martinovsky" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">LinkedIn</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
