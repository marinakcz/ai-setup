import Link from "next/link"

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center">
        <p className="font-mono text-xs tracking-[0.2em] text-primary mb-4">/ 404</p>
        <h1 className="font-body font-extrabold text-[clamp(3rem,8vw,6rem)] leading-none tracking-tight text-foreground mb-4">
          Ztraceno v síti
        </h1>
        <p className="font-body font-light text-muted-foreground text-lg mb-10 max-w-md mx-auto">
          Tahle stránka neexistuje. Možná byla přesunuta, možná nikdy nebyla.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-mono text-sm text-primary hover:text-foreground transition-colors"
        >
          <span aria-hidden="true">&larr;</span> Zpět na hlavní
        </Link>
      </div>
    </main>
  )
}
