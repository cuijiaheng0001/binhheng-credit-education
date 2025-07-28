'use client'

import { useEffect, useState } from 'react'
import { LanguageProvider, detectUserLocale } from '@/i18n/client'
import { getDictionary } from '@/i18n/get-dictionary'
import { Locale } from '@/i18n/config'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import CookieBanner from '@/components/CookieBanner'
import WhatsAppButton from '@/components/WhatsAppButton'
import LoadingScreen from '@/components/LoadingScreen'
import AOSInit from '@/components/AOSInit'
import AccessibilityControls from '@/components/AccessibilityControls'

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
  return (
    <LanguageProvider initialLocale={initialLocale} initialDictionary={initialDictionary}>
      <div className="flex flex-col min-h-screen">
        <LoadingScreen />
        <AOSInit />
        <Navigation />
        <div className="flex-grow">
          {children}
        </div>
        <Footer />
        <WhatsAppButton />
        <AccessibilityControls />
        <CookieBanner />
      </div>
    </LanguageProvider>
  )
}