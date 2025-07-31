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
import StructuredDataOrganization from '@/components/StructuredDataOrganization'
import StructuredDataService from '@/components/StructuredDataService'
import StructuredDataFAQ from '@/components/StructuredDataFAQ'
import PerformanceOptimizer from '@/components/PerformanceOptimizer'
import LoadingScreen from '@/components/LoadingScreen'
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
    metadataBase: new URL('https://www.binghengcredit.com'),
    alternates: {
      canonical: `https://www.binghengcredit.com/${locale}`,
      languages: {
        'zh': '/zh',
        'en': '/en',
      },
    },
    openGraph: {
      title: dict.meta.title,
      description: dict.meta.description,
      url: `https://www.binghengcredit.com/${locale}`,
      siteName: 'BinhHeng Credit Education',
      locale: locale === 'zh' ? 'zh_CN' : 'en_US',
      type: 'website',
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
        {/* Critical CSS - 内联以减少渲染阻塞 */}
        <style dangerouslySetInnerHTML={{
          __html: `
            /* Critical CSS - 内联到 HTML 头部以减少渲染阻塞 */
            *, ::before, ::after {
              box-sizing: border-box;
            }
            html {
              line-height: 1.5;
              -webkit-text-size-adjust: 100%;
              -moz-tab-size: 4;
              tab-size: 4;
              font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif;
            }
            body {
              margin: 0;
              line-height: inherit;
            }
            /* 字体定义 - 关键字体 */
            @font-face {
              font-family: 'Inter';
              font-style: normal;
              font-weight: 400;
              font-display: swap;
              src: url('/fonts/inter-v13-latin-400.woff2?v=1') format('woff2');
            }
            @font-face {
              font-family: 'Inter';
              font-style: normal;
              font-weight: 600;
              font-display: swap;
              src: url('/fonts/inter-v13-latin-600.woff2?v=1') format('woff2');
            }
            @font-face {
              font-family: 'Playfair Display';
              font-style: normal;
              font-weight: 700;
              font-display: swap;
              src: url('/fonts/playfair-display-v30-latin-700.woff2?v=1') format('woff2');
            }
            /* 关键布局类 */
            .min-h-screen { min-height: 100vh; }
            .flex { display: flex; }
            .flex-col { flex-direction: column; }
            .flex-grow { flex-grow: 1; }
            .relative { position: relative; }
            .absolute { position: absolute; }
            .fixed { position: fixed; }
            .inset-0 { inset: 0px; }
            .top-0 { top: 0px; }
            .z-50 { z-index: 50; }
            .bg-white { background-color: rgb(255 255 255); }
            .text-white { color: rgb(255 255 255); }
            .transition-all {
              transition-property: all;
              transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
              transition-duration: 150ms;
            }
            .duration-300 { transition-duration: 300ms; }
            .hidden { display: none; }
            @media (min-width: 768px) {
              .md\\:block { display: block; }
            }
            @media (min-width: 1024px) {
              .lg\\:block { display: block; }
            }
            .loading-screen {
              position: fixed;
              inset: 0;
              background: white;
              z-index: 9999;
              display: flex;
              align-items: center;
              justify-content: center;
            }
            .skip-to-content {
              position: absolute;
              left: -9999px;
              top: 0;
              z-index: 999;
              padding: 1rem;
              background: #003D7A;
              color: white;
              text-decoration: none;
            }
            .skip-to-content:focus { left: 0; }
          `
        }} />
        
        {/* 预连接到外部资源 */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        
        <GoogleAnalytics GA_MEASUREMENT_ID={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "G-XXXXXXXXXX"} />
        <StructuredData />
      </head>
      <body className={`${notoSerifSC.className} bg-gray-50`} data-pathname={`/${locale}`}>
        <LoadingScreen />
        <PerformanceOptimizer />
        <StructuredDataOrganization />
        <StructuredDataService locale={locale} />
        <StructuredDataFAQ locale={locale} />
        <AccessibilityProvider>
          <AccessibilityControls locale={locale} />
          <Navigation dict={dict} locale={locale} />
          <main className="min-h-screen pt-20">
            {children}
          </main>
          <Footer dict={dict} locale={locale} />
          <CookieBanner locale={locale} />
          <WhatsAppButton />
        </AccessibilityProvider>
      </body>
    </html>
  )
}