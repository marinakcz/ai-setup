import "./globals.css";

import type { Metadata } from "next";
import { SiteNav } from "@/components/site-nav";
import { JetBrains_Mono, Manrope } from "next/font/google";

const jetbrainsMono = JetBrains_Mono({
  weight: ["400", "500", "600"],
  subsets: ["latin", "latin-ext"],
  variable: "--font-mono",
  display: "swap",
});

const manrope = Manrope({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin", "latin-ext"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ai-setup-alpha.vercel.app"),
  title: {
    default: "AI Studio — Autonomní systém AI agentů",
    template: "%s — AI Studio",
  },
  description:
    "Zadejte úkol, AI Studio ho naplánuje, napíše kód, verzuje v Gitu a nasadí na Vercel — zcela automaticky.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "AI Studio — Autonomní systém AI agentů",
    description:
      "Zadejte úkol, AI Studio ho naplánuje, napíše kód, verzuje v Gitu a nasadí na Vercel — zcela automaticky.",
    type: "website",
    locale: "cs_CZ",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="cs">
      <body
        className={`${jetbrainsMono.variable} ${manrope.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        <SiteNav />
        {/* Animated background blob */}
        <div className="fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
          <div className="animate-blob absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full opacity-[0.07]" style={{ background: "radial-gradient(circle, hsl(var(--primary)) 0%, transparent 70%)", filter: "blur(80px)" }} />
          <div className="animate-blob-slow absolute bottom-[-15%] left-[-10%] w-[500px] h-[500px] rounded-full opacity-[0.04]" style={{ background: "radial-gradient(circle, hsl(var(--foreground)) 0%, transparent 70%)", filter: "blur(100px)" }} />
        </div>
        {children}
      </body>
    </html>
  );
}
