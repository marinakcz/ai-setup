import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "O studiu",
  description: "Kdo za AI Studiem stojí a proč vzniklo.",
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
