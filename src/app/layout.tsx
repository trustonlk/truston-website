import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { TRUSTON_CONFIG } from "@/config/truston.config";
import { ScrollProgressBar } from "@/components/ui/ScrollProgressBar";

const display = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.trustondigital.lk"),
  title: {
    default: TRUSTON_CONFIG.seo.title,
    template: "%s | Truston Digital Solutions",
  },
  description: TRUSTON_CONFIG.seo.description,
  keywords: TRUSTON_CONFIG.seo.keywords,
  authors: [{ name: "Truston Digital Solutions" }],
  creator: "Truston Digital Solutions",
  publisher: "Truston Digital Solutions",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.trustondigital.lk",
    siteName: "Truston Digital Solutions",
    title: TRUSTON_CONFIG.seo.title,
    description: TRUSTON_CONFIG.seo.description,
    images: [
      {
        url: "/images/truston-logo.png",
        width: 1200,
        height: 630,
        alt: "Truston Digital Solutions - Trusted Partner in the Digital World",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TRUSTON_CONFIG.seo.title,
    description: TRUSTON_CONFIG.seo.description,
    images: ["/images/truston-logo.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: TRUSTON_CONFIG.companyName,
    alternateName: TRUSTON_CONFIG.brandName,
    url: "https://www.trustondigital.lk",
    logo: "https://www.trustondigital.lk/images/truston-logo.png",
    description: TRUSTON_CONFIG.positioning,
    slogan: TRUSTON_CONFIG.tagline,
    address: {
      "@type": "PostalAddress",
      addressLocality: TRUSTON_CONFIG.contact.address.city,
      addressCountry: TRUSTON_CONFIG.contact.address.country,
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Support & Inquiries",
      email: TRUSTON_CONFIG.contact.email,
      availableLanguage: ["English", "Sinhala"],
    },
  };

  return (
    <html lang="en" className={`scroll-smooth ${display.variable} ${body.variable} ${mono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-truston-blue-void text-slate-100 min-h-screen flex flex-col font-sans selection:bg-truston-green selection:text-truston-blue-void">
        <ScrollProgressBar />
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
