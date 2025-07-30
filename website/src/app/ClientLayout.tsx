'use client'

import dynamic from 'next/dynamic'
import { LanguageProvider } from '@/i18n/client'
import { getDictionary } from '@/i18n/get-dictionary'
import { Locale } from '@/i18n/config'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

// Lazy load non-critical components
const CookieBanner = dynamic(() => import('@/components/CookieBanner'), {
  ssr: false
})
const WhatsAppButton = dynamic(() => import('@/components/WhatsAppButton'), {
  ssr: false
})
const LoadingScreen = dynamic(() => import('@/components/LoadingScreen'), {
  ssr: false
})
const AOSInit = dynamic(() => import('@/components/AOSInit'), {
  ssr: false
})
const AccessibilityControls = dynamic(() => import('@/components/AccessibilityControls'), {
  ssr: false
})
const PerformanceOptimizer = dynamic(() => import('@/components/PerformanceOptimizer'), {
  ssr: false
})
const PerformanceMonitor = dynamic(() => import('@/components/PerformanceMonitor'), {
  ssr: false
})

interface ClientLayoutProps {
  children: React.ReactNode
  initialLocale: Locale
  initialDictionary: Awaited<ReturnType<typeof getDictionary>>
}

export default function ClientLayout({ 
  children, 
  initialLocale,
  initialDictionary 
}: ClientLayoutProps) {
  const skipToContentText = initialLocale === 'zh' ? '跳转到主要内容' : 'Skip to main content'
  
  return (
    <LanguageProvider initialLocale={initialLocale} initialDictionary={initialDictionary}>
      <LoadingScreen />
      <div className="flex flex-col min-h-screen">
        <a href="#main-content" className="skip-to-content">
          {skipToContentText}
        </a>
        <AOSInit />
        <PerformanceOptimizer />
        <PerformanceMonitor />
        <Navigation />
        <main id="main-content" className="flex-grow">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
        <AccessibilityControls />
        <CookieBanner />
      </div>
    </LanguageProvider>
  )
}