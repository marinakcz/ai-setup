import "./globals.css";

import type { Metadata } from "next";
import { SiteNav } from "@/components/site-nav";
import { JetBrains_Mono } from "next/font/google";
import localFont from "next/font/local";

const jetbrainsMono = JetBrains_Mono({
  weight: ["400", "500", "600"],
  subsets: ["latin", "latin-ext"],
  variable: "--font-mono",
  display: "swap",
});

const hkGroteskWide = localFont({
  src: [
    { path: "../public/fonts/HKGroteskWide-Light.otf", weight: "300", style: "normal" },
    { path: "../public/fonts/HKGroteskWide-Regular.otf", weight: "400", style: "normal" },
    { path: "../public/fonts/HKGroteskWide-Medium.otf", weight: "500", style: "normal" },
    { path: "../public/fonts/HKGroteskWide-SemiBold.otf", weight: "600", style: "normal" },
    { path: "../public/fonts/HKGroteskWide-Bold.otf", weight: "700", style: "normal" },
    { path: "../public/fonts/HKGroteskWide-ExtraBold.otf", weight: "800", style: "normal" },
    { path: "../public/fonts/HKGroteskWide-Black.otf", weight: "900", style: "normal" },
  ],
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
        className={`${jetbrainsMono.variable} ${hkGroteskWide.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        <SiteNav />
        {/* Subtle animated blob background */}
        <div className="fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
          <div className="mix-blend-difference">
            <div
              className="animate-blob absolute top-[-20%] right-[-15%] w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] rounded-full"
              style={{ background: "linear-gradient(180deg, hsl(0 0% 10%), hsl(0 0% 16%))", filter: "blur(80px)" }}
            />
            <div
              className="animate-blob-slow absolute bottom-[-20%] left-[-10%] w-[50vw] h-[50vw] max-w-[700px] max-h-[700px] rounded-full"
              style={{ background: "linear-gradient(135deg, hsl(14 20% 8%), hsl(0 0% 12%))", filter: "blur(100px)" }}
            />
          </div>
        </div>
        {children}
      </body>
    </html>
  );
}
