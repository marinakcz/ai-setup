"use client"

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html lang="cs">
      <body className="bg-[#0d0d0d] text-white min-h-screen flex items-center justify-center px-6">
        <div className="text-center">
          <p className="font-mono text-xs tracking-[0.2em] text-[#f05823] mb-4">/ 500</p>
          <h1 className="font-extrabold text-[clamp(3rem,8vw,6rem)] leading-none tracking-tight mb-4">
            Něco se pokazilo
          </h1>
          <p className="font-light text-[#8c8c8c] text-lg mb-10 max-w-md mx-auto">
            Chyba na naší straně. Zkus to znovu, nebo se vrať na hlavní stránku.
          </p>
          <div className="flex items-center justify-center gap-6">
            <button
              onClick={() => reset()}
              className="font-mono text-sm text-[#f05823] hover:text-white transition-colors"
            >
              Zkusit znovu
            </button>
            {/* eslint-disable-next-line @next/next/no-html-link-for-pages --
                global-error nahrazuje root layout při fatální chybě; router
                context nemusí být k dispozici, proto plný reload přes <a>. */}
            <a
              href="/"
              className="font-mono text-sm text-[#f05823] hover:text-white transition-colors"
            >
              <span aria-hidden="true">&larr;</span> Zpět na hlavní
            </a>
          </div>
        </div>
      </body>
    </html>
  )
}
