import "./globals.css";

import type { Metadata, Viewport } from "next";
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
    {
      path: "../public/fonts/HKGroteskWide-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/HKGroteskWide-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/HKGroteskWide-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/HKGroteskWide-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/HKGroteskWide-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/HKGroteskWide-ExtraBold.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "../public/fonts/HKGroteskWide-Black.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-body",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0d0d0d",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://levouzadni.cz"),
  title: {
    default: "AI studio pro digitální produkty | Levou zadní",
    template: "%s | Levou zadní",
  },
  description:
    "Sólo AI studio Pavla Martinovského. UX design, prototypy a MVP pro digitální produkty — od nápadu k funkčnímu řešení v řádu dnů, ne měsíců.",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-96x96.png", type: "image/png", sizes: "96x96" },
      { url: "/favicon.ico", sizes: "32x32" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "AI studio pro digitální produkty | Levou zadní",
    description:
      "Sólo AI studio Pavla Martinovského. UX design, prototypy a MVP — od nápadu k funkčnímu řešení v řádu dnů, ne měsíců.",
    type: "website",
    url: "https://levouzadni.cz",
    locale: "cs_CZ",
    siteName: "Levou zadní",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Levou zadní — AI studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://levouzadni.cz/#organization",
      name: "Levou zadní",
      url: "https://levouzadni.cz",
      logo: {
        "@type": "ImageObject",
        "@id": "https://levouzadni.cz/#logo",
        url: "https://levouzadni.cz/logo-color.svg",
        contentUrl: "https://levouzadni.cz/logo-color.svg",
        width: 512,
        height: 512,
      },
      founder: { "@id": "https://levouzadni.cz/#pavel" },
      contactPoint: {
        "@type": "ContactPoint",
        email: "studio@levouzadni.cz",
        telephone: "+420776120555",
        contactType: "customer service",
        availableLanguage: ["cs", "en"],
      },
      address: {
        "@type": "PostalAddress",
        streetAddress: "Hlavenec 177",
        addressLocality: "Hlavenec",
        postalCode: "294 76",
        addressCountry: "CZ",
      },
      identifier: {
        "@type": "PropertyValue",
        name: "IČO",
        value: "06054251",
      },
    },
    {
      "@type": "Person",
      "@id": "https://levouzadni.cz/#pavel",
      name: "Pavel Martinovský",
      honorificPrefix: "Mgr.",
      url: "https://levouzadni.cz/o-studiu",
      image: "https://levouzadni.cz/pavel.png",
      jobTitle: "Senior UX Designer",
      description:
        "Mgr. Pavel Martinovský je senior UX designer z Prahy, digitální produkty navrhuje od roku 1999. Zakladatel experimentálního AI studia Levou zadní. Člen Digital Experience týmu J&T Banky.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Praha",
        addressCountry: "CZ",
      },
      worksFor: {
        "@type": "Organization",
        name: "J&T Banka",
        url: "https://www.jtbank.cz",
      },
      founder: { "@id": "https://levouzadni.cz/#organization" },
      knowsAbout: [
        "UX design",
        "produktový design",
        "umělá inteligence",
        "webové aplikace",
        "prototypování",
        "AI agenti",
      ],
      sameAs: ["https://www.linkedin.com/in/pavelmartinovsky/"],
    },
    {
      "@type": "WebSite",
      "@id": "https://levouzadni.cz/#website",
      name: "Levou zadní",
      url: "https://levouzadni.cz",
      inLanguage: "cs",
      publisher: { "@id": "https://levouzadni.cz/#organization" },
    },
    {
      "@type": "Service",
      "@id": "https://levouzadni.cz/#service",
      name: "AI studio pro digitální produkty",
      description:
        "Experimentální AI studio. Od nápadu k funkčnímu produktu — weby, aplikace, prototypy.",
      url: "https://levouzadni.cz",
      provider: { "@id": "https://levouzadni.cz/#organization" },
      serviceType: [
        "UX design",
        "Produktový design",
        "Prototypování",
        "MVP vývoj",
        "AI konzultace",
      ],
      areaServed: { "@type": "Country", name: "Czechia" },
      availableLanguage: ["cs", "en"],
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="cs">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        <noscript>
          <style>{`.reveal-group .reveal-item, .hero-stagger .stagger-1, .hero-stagger .stagger-2, .hero-stagger .stagger-3, .hero-stagger .stagger-4, .hero-stagger .stagger-5 { opacity: 1 !important; transform: none !important; animation: none !important; }`}</style>
        </noscript>
      </head>
      <body
        className={`${jetbrainsMono.variable} ${hkGroteskWide.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        <SiteNav />
        {children}
      </body>
    </html>
  );
}
