import type { Metadata } from "next"
import { Noto_Serif_SC, Playfair_Display } from "next/font/google"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import CookieBanner from "@/components/CookieBanner"
import WhatsAppButton from "@/components/WhatsAppButton"
import { AccessibilityProvider } from "@/components/AccessibilityProvider"
import AccessibilityControls from "@/components/AccessibilityControlsWrapper"
import { getDictionary } from "@/i18n/get-dictionary"
import { i18n, type Locale } from "@/i18n/config"
import GoogleAnalytics from "@/components/GoogleAnalytics"
import StructuredData from '@/components/StructuredData'
import PerformanceOptimizer from '@/components/PerformanceOptimizer'
import "../globals.css"

const notoSerifSC = Noto_Serif_SC({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-noto-serif-sc",
  display: 'swap',
})

const playfair = Playfair_Display({
  weight: "700",
  subsets: ["latin"],
  variable: "--font-playfair",
  display: 'swap',
})

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ locale }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>
}): Promise<Metadata> {
  const { locale } = await params
  const dict = await getDictionary(locale)

  return {
    title: dict.meta.title,
    description: dict.meta.description,
    keywords: dict.meta.keywords,
    alternates: {
      languages: {
        'zh': '/zh',
        'en': '/en',
      },
    },
    openGraph: {
      title: dict.meta.title,
      description: dict.meta.description,
      url: 'https://binhheng.com',
      siteName: 'BinhHeng Credit Education',
      locale: locale === 'zh' ? 'zh_CN' : 'en_US',
      type: 'website',
    },
  }
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: Locale }>
}) {
  const { locale } = await params
  const dict = await getDictionary(locale)

  return (
    <html lang={locale} className={`${notoSerifSC.variable} ${playfair.variable}`}>
      <head>
        <GoogleAnalytics GA_MEASUREMENT_ID={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "G-XXXXXXXXXX"} />
        <StructuredData />
      </head>
      <body className={`${notoSerifSC.className} bg-gray-50`}>
        <PerformanceOptimizer />
        <AccessibilityProvider>
          <AccessibilityControls locale={locale} />
          <Navigation dict={dict} locale={locale} />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer dict={dict} locale={locale} />
          <CookieBanner />
          <WhatsAppButton />
        </AccessibilityProvider>
      </body>
    </html>
  )
}