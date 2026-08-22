"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"

const NAV_LINKS = [
  { href: "/", label: "Domů" },
  { href: "/o-studiu", label: "O studiu" },
  { href: "/kontakty", label: "Spojme se" },
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
      <div className="max-w-[1408px] mx-auto px-6 h-14 mt-6 flex items-center justify-between relative z-10">
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="hover:opacity-80 transition-opacity"
        >
          <span className="flex items-center gap-2.5 group">
            <Image src="/logo-color.svg" alt="Levou zadní" width={56} height={56} className="h-10 w-10 transition-transform duration-300 group-hover:rotate-12" priority />
            <span className="font-body font-bold text-base tracking-[0.04em] text-foreground group-hover:text-primary transition-colors duration-300 leading-none mt-2.5">levou zadní</span>
          </span>
        </Link>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="relative w-11 h-11 flex items-center justify-center"
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

        {/* Main nav links */}
        <div className="flex-1 flex items-center">
          <div className="max-w-[1408px] mx-auto px-6 w-full">
            <div className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="font-body font-extrabold text-foreground/90 hover:text-primary transition-colors duration-200 block"
                  style={{
                    fontSize: "clamp(2.5rem, 6vw, 5rem)",
                  }}
                >
                  <span className="inline-flex items-center"><span className="text-[0.6em] text-muted-foreground font-light mr-2 translate-y-[0.05em]">/</span>{link.label}</span>
                </Link>
              ))}
            </div>

            <div className="flex flex-col gap-2 mt-8 font-mono text-sm">
              <a href="mailto:studio@levouzadni.cz" className="text-muted-foreground hover:text-primary transition-colors">studio@levouzadni.cz</a>
              <a href="tel:+420776120555" className="text-muted-foreground hover:text-primary transition-colors">+420 776 120 555</a>
            </div>
          </div>
        </div>

      </div>
    </nav>
  )
}
