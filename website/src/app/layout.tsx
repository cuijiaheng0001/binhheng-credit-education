import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from 'next/script'

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://binghengcredit.com'),
  title: "Bingheng Credit - Recover Your Hidden Receivables",
  description: "Discover and recover millions in cross-border debts that were incorrectly written off. Specialized recovery for Chinese nationals who have returned home.",
  keywords: "debt recovery, cross-border collection, Chinese debt collection, international receivables, student housing debt, apartment management collections, B2B debt recovery",
  authors: [{ name: "Bingheng Credit" }],
  openGraph: {
    title: "Bingheng Credit - Recover Your Hidden Receivables",
    description: "Discover and recover millions in cross-border debts that were incorrectly written off.",
    url: "https://binghengcredit.com",
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

import { headers } from 'next/headers'
import GoogleAnalytics from '@/components/GoogleAnalytics'
import ClientLayout from './ClientLayout'
import { getDictionary } from '@/i18n/get-dictionary'
import { i18n, Locale } from '@/i18n/config'

async function getLocaleFromHeaders(): Promise<Locale> {
  const headersList = await headers()
  const acceptLanguage = headersList.get('accept-language') || ''
  const languages = acceptLanguage.split(',').map(lang => lang.split(';')[0].trim())
  
  for (const lang of languages) {
    if (lang.startsWith('zh')) return 'zh'
    if (lang.startsWith('en')) return 'en'
  }
  
  return i18n.defaultLocale
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocaleFromHeaders()
  const dictionary = await getDictionary(locale)
  
  return (
    <html lang={locale} className="smooth-scroll">
      <head>
        <Script id="schema-org" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Bingheng Credit",
            "url": "https://binghengcredit.com",
            "logo": "https://binghengcredit.com/logo.png",
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
        <ClientLayout initialLocale={locale} initialDictionary={dictionary}>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}