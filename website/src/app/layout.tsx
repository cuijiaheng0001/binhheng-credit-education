import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from 'next/script'

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://binhhengcredit.com'),
  title: "Bingheng Credit - Recover Your Hidden Receivables",
  description: "Discover and recover millions in cross-border debts that were incorrectly written off. Specialized recovery for Chinese nationals who have returned home.",
  keywords: "debt recovery, cross-border collection, Chinese debt collection, international receivables, student housing debt, apartment management collections, B2B debt recovery",
  authors: [{ name: "Bingheng Credit" }],
  openGraph: {
    title: "Bingheng Credit - Recover Your Hidden Receivables",
    description: "Discover and recover millions in cross-border debts that were incorrectly written off.",
    url: "https://binhhengcredit.com",
    siteName: "Bingheng Credit",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Bingheng Credit - Cross-border Debt Recovery",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bingheng Credit - Recover Your Hidden Receivables",
    description: "Discover and recover millions in cross-border debts that were incorrectly written off.",
    images: ["/og-image.png"],
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
  verification: {
    google: 'your-google-verification-code',
  },
};

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import CookieBanner from '@/components/CookieBanner'
import WhatsAppButton from '@/components/WhatsAppButton'
import GoogleAnalytics from '@/components/GoogleAnalytics'
import LoadingScreen from '@/components/LoadingScreen'
import AOSInit from '@/components/AOSInit'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Root layout component - v2
  return (
    <html lang="en" className="smooth-scroll">
      <head>
        <Script id="schema-org" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Bingheng Credit",
            "url": "https://binhhengcredit.com",
            "logo": "https://binhhengcredit.com/logo.png",
            "description": "Professional cross-border debt recovery services specializing in recovering debts from Chinese nationals.",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "US"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+1-XXX-XXX-XXXX",
              "contactType": "customer service",
              "availableLanguage": ["English", "Chinese"]
            },
            "sameAs": []
          })}
        </Script>
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <GoogleAnalytics GA_MEASUREMENT_ID={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "G-XXXXXXXXXX"} />
        <LoadingScreen />
        <AOSInit />
        <Navigation />
        {children}
        <Footer />
        <WhatsAppButton />
        <CookieBanner />
      </body>
    </html>
  );
}