import type { Metadata } from "next";
import "@fontsource/manrope/index.css";
import "@fontsource/manrope/600.css";
import "@fontsource/manrope/700.css";
import "@fontsource/inter/index.css";
import "@fontsource/inter/600.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "SR Automation - SPS-Programmierung, Maschinenbau, DGUV-Prüfung | Automatisierungstechnik Grafschaft, Bonn, Köln",
  description: "Professionelle Automatisierungslösungen: SPS-Programmierung (Siemens S7, Beckhoff TwinCAT), Schaltschrankbau, Maschinenbau, DGUV-Prüfungen, Photovoltaik-Steuerungen. Weltweit tätig, regional in Grafschaft, Bonn, Köln.",
  keywords: "Automatisierung, SPS-Programmierung, Siemens S7, Beckhoff TwinCAT, Schaltschrankbau, Maschinenbau, DGUV-Prüfung, E-Check, Photovoltaik Automatisierung, Solaranlagen Steuerung, Erneuerbare Energien, Anlagenbau, Inbetriebnahme, Grafschaft, Bonn, Köln, Deutschland, weltweit",
  authors: [{ name: "SR Automation" }],
  openGraph: {
    title: "SR Automation - Automatisierungstechnik & SPS-Programmierung",
    description: "Professionelle Automatisierungslösungen, Maschinenbau, DGUV-Prüfungen und Photovoltaik-Steuerungen weltweit",
    type: "website",
    locale: "de_DE",
    url: "https://srautomation.de",
    siteName: "SR Automation",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: "/Logo-rund.png",
    apple: "/Logo-rund.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "SR Automation",
    "description": "Automatisierungstechnik, SPS-Programmierung, Maschinenbau, DGUV-Prüfungen, Schaltschrankbau und Photovoltaik-Steuerungen",
    "image": "https://srautomation.de/Logo-rund.png",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Simmelsgartenstraße 14",
      "addressLocality": "Grafschaft",
      "postalCode": "53501",
      "addressCountry": "DE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 50.5167,
      "longitude": 7.1167
    },
    "telephone": "+49-2641-917333-1",
    "email": "info@srautomation.de",
    "url": "https://srautomation.de",
    "priceRange": "$$",
    "areaServed": [
      {"@type": "City", "name": "Grafschaft"},
      {"@type": "City", "name": "Bonn"},
      {"@type": "City", "name": "Köln"},
      {"@type": "Country", "name": "Deutschland"},
      {"@type": "Place", "name": "Weltweit"}
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Automatisierungsdienstleistungen",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "SPS-Programmierung",
            "description": "Siemens S7, Beckhoff TwinCAT, Rockwell Automation"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Schaltschrankbau",
            "description": "Planung, Konstruktion und Montage von Schaltschränken"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Maschinenbau & DGUV-Prüfung",
            "description": "Maschinenbau, E-Check und DGUV-Prüfungen"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Photovoltaik-Steuerungen",
            "description": "Automatisierung für Solaranlagen und erneuerbare Energien"
          }
        }
      ]
    }
  };

  return (
    <html lang="de" className="dark scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="antialiased font-sans selection:bg-primary/30">
        {children}
      </body>
    </html>
  );
}