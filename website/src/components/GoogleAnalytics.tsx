'use client'

import Script from 'next/script'
import { useEffect, useState } from 'react'

interface GoogleAnalyticsProps {
  GA_MEASUREMENT_ID: string
}

export default function GoogleAnalytics({ GA_MEASUREMENT_ID }: GoogleAnalyticsProps) {
  const [shouldLoad, setShouldLoad] = useState(false)

  useEffect(() => {
    // Check if user has already consented
    const hasConsent = localStorage.getItem('cookie-consent') === 'accepted'
    
    if (!hasConsent) {
      // Don't load GA if no consent
      return
    }

    // Use requestIdleCallback for better performance
    if ('requestIdleCallback' in window) {
      const idleCallbackId = window.requestIdleCallback(() => {
        setShouldLoad(true)
      }, { timeout: 5000 })

      return () => {
        if ('cancelIdleCallback' in window) {
          window.cancelIdleCallback(idleCallbackId)
        }
      }
    } else {
      // Fallback: Delay GA loading until after page is interactive
      const timer = setTimeout(() => {
        setShouldLoad(true)
      }, 4000) // Increased delay to ensure better Core Web Vitals

      // Or load on meaningful user interaction
      const handleInteraction = () => {
        setShouldLoad(true)
        document.removeEventListener('scroll', handleInteraction)
        document.removeEventListener('click', handleInteraction)
        document.removeEventListener('touchstart', handleInteraction)
      }

      // Only load on meaningful scroll (not just tiny movements)
      let scrollTimeout: NodeJS.Timeout
      const handleScroll = () => {
        clearTimeout(scrollTimeout)
        scrollTimeout = setTimeout(() => {
          if (window.scrollY > 150) { // User has scrolled meaningfully
            handleInteraction()
          }
        }, 100)
      }

      document.addEventListener('scroll', handleScroll, { passive: true })
      document.addEventListener('click', handleInteraction)
      document.addEventListener('touchstart', handleInteraction, { passive: true })

      return () => {
        clearTimeout(timer)
        clearTimeout(scrollTimeout)
        document.removeEventListener('scroll', handleScroll)
        document.removeEventListener('click', handleInteraction)
        document.removeEventListener('touchstart', handleInteraction)
      }
    }
  }, [])

  if (!shouldLoad) return null

  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('consent', 'default', {
              'analytics_storage': 'denied'
            });

            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  )
}