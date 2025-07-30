'use client'

import Script from 'next/script'
import { useEffect, useState } from 'react'

interface GoogleAnalyticsProps {
  GA_MEASUREMENT_ID: string
}

export default function GoogleAnalytics({ GA_MEASUREMENT_ID }: GoogleAnalyticsProps) {
  const [shouldLoad, setShouldLoad] = useState(false)

  useEffect(() => {
    // Delay GA loading until after page is interactive
    const timer = setTimeout(() => {
      setShouldLoad(true)
    }, 3000)

    // Or load on user interaction
    const handleInteraction = () => {
      setShouldLoad(true)
      document.removeEventListener('scroll', handleInteraction)
      document.removeEventListener('click', handleInteraction)
      document.removeEventListener('touchstart', handleInteraction)
    }

    document.addEventListener('scroll', handleInteraction, { passive: true })
    document.addEventListener('click', handleInteraction)
    document.addEventListener('touchstart', handleInteraction, { passive: true })

    return () => {
      clearTimeout(timer)
      document.removeEventListener('scroll', handleInteraction)
      document.removeEventListener('click', handleInteraction)
      document.removeEventListener('touchstart', handleInteraction)
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