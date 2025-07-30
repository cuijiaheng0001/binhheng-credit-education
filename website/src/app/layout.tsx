import type { Metadata } from "next";
import "./globals.css";
import Script from 'next/script';
import { readFileSync } from 'fs';
import { join } from 'path';

// 读取关键 CSS
let criticalCSS = '';
if (process.env.NODE_ENV === 'production') {
  try {
    criticalCSS = readFileSync(join(process.cwd(), 'src/app/critical.css'), 'utf8');
  } catch (error) {
    // 如果文件不存在，使用空字符串
    console.warn('Critical CSS file not found, skipping inline CSS');
  }
}

import { generatePageMetadata, pageMetadata } from '@/lib/seo-metadata'

export const metadata: Metadata = {
  metadataBase: new URL('https://binghengcredit.com'),
  ...generatePageMetadata({
    title: pageMetadata.home.en.title,
    description: pageMetadata.home.en.description,
    keywords: pageMetadata.home.en.keywords,
    canonicalUrl: 'https://binghengcredit.com'
  }),
  alternates: {
    canonical: 'https://binghengcredit.com',
    languages: {
      'en-US': 'https://binghengcredit.com',
      'zh-CN': 'https://binghengcredit.com/zh',
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
import { Analytics } from '@vercel/analytics/next'

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
  
  // 将简短的 locale 转换为完整的语言代码
  const langCode = locale === 'zh' ? 'zh-CN' : 'en-US'
  
  return (
    <html lang={langCode} className="smooth-scroll">
      <head>
        {/* 防止闪烁的初始化脚本 - 必须最先执行 */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                document.documentElement.classList.add('loading');
                document.addEventListener('DOMContentLoaded', function() {
                  setTimeout(function() {
                    document.documentElement.classList.remove('loading');
                  }, 100);
                });
                setTimeout(function() {
                  document.documentElement.classList.remove('loading');
                }, 3000);
              })();
            `,
          }}
        />
        
        {/* Preload critical fonts - match exact URLs from fonts.css */}
        <link rel="preload" href="/fonts/inter-v13-latin-400.woff2?v=1" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/inter-v13-latin-600.woff2?v=1" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/playfair-display-v30-latin-700.woff2?v=1" as="font" type="font/woff2" crossOrigin="anonymous" />
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        
        {/* Alternate languages */}
        <link rel="alternate" hrefLang="en-US" href="https://binghengcredit.com" />
        <link rel="alternate" hrefLang="zh-CN" href="https://binghengcredit.com/zh" />
        <link rel="alternate" hrefLang="x-default" href="https://binghengcredit.com" />
        
        {/* 内联关键 CSS */}
        {criticalCSS && (
          <style dangerouslySetInnerHTML={{ __html: criticalCSS }} />
        )}
        
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
      <body className="font-sans antialiased">
        <GoogleAnalytics GA_MEASUREMENT_ID={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "G-XXXXXXXXXX"} />
        <ClientLayout initialLocale={locale} initialDictionary={dictionary}>
          {children}
        </ClientLayout>
        <Analytics />
      </body>
    </html>
  );
}