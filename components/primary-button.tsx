import Link from "next/link"

interface PrimaryButtonProps {
  href: string
  children: React.ReactNode
  arrow?: boolean
}

export function PrimaryButton({ href, children, arrow = false }: PrimaryButtonProps) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-3 px-8 py-3 rounded-xl bg-primary text-primary-foreground font-mono text-sm font-medium hover:opacity-90 transition-opacity"
    >
      {children}
      {arrow && (
        <svg
          viewBox="0 0 40 24"
          className="w-8 h-5 transition-transform duration-300 group-hover:translate-x-1"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M0 12h36M28 5l8 7-8 7" />
        </svg>
      )}
    </Link>
  )
}
