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
          {JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "@id": "https://www.binghengcredit.com/#organization",
              "name": "Bingheng Credit",
              "alternateName": "秉恒信用",
              "url": "https://www.binghengcredit.com",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.binghengcredit.com/logo.png",
                "width": "600",
                "height": "200"
              },
              "description": "专业跨境债务追收服务，专注于追收返回中国的债务人欠款。我们是唯一专门处理中国债务人的国际催收公司。",
              "foundingDate": "2020",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "陆家嘴金融中心",
                "addressLocality": "浦东新区",
                "addressRegion": "上海市",
                "postalCode": "200120",
                "addressCountry": "CN"
              },
              "contactPoint": [{
                "@type": "ContactPoint",
                "telephone": "+86-166-5308-6767",
                "contactType": "customer service",
                "areaServed": ["US", "CN"],
                "availableLanguage": ["English", "Chinese", "Mandarin"]
              }],
              "sameAs": [
                "https://www.linkedin.com/company/bingheng-credit",
                "https://twitter.com/binghengcredit"
              ],
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "reviewCount": "156"
              }
            },
            {
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "@id": "https://www.binghengcredit.com/#service",
              "name": "Bingheng Credit Debt Collection Services",
              "serviceType": "Debt Collection",
              "provider": {
                "@id": "https://www.binghengcredit.com/#organization"
              },
              "areaServed": {
                "@type": "GeoShape",
                "addressCountry": ["US", "CN"]
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Debt Collection Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "中国债务人追收",
                      "description": "专业追收返回中国的债务人欠款"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "留学生债务追收",
                      "description": "专门处理留学生住宿和学费债务"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "跨境电商债务追收",
                      "description": "追收电商平台卖家欠款"
                    }
                  }
                ]
              }
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "@id": "https://www.binghengcredit.com/#faq",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "你们的成功率如何？",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "我们的整体成功率超过60%，其中留学生债务成功率65%，B2B贸易债务成功率72%。"
                  }
                },
                {
                  "@type": "Question",
                  "name": "收费标准是什么？",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "我们采用纯成功费模式，无前期费用。佣金率根据回收金额分级：$5,000以下25%，$5,000-20,000为20%，$20,000以上15%。"
                  }
                }
              ]
            }
          ])}
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