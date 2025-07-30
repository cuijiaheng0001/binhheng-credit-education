'use client'

import { useState, useEffect } from 'react'
import { X, Cookie, ChevronUp } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)

  useEffect(() => {
    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem('cookieConsent')
    if (!cookieConsent) {
      // Delay showing banner to not overwhelm user immediately
      const timer = setTimeout(() => {
        setShowBanner(true)
      }, 2000)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleAcceptAll = () => {
    localStorage.setItem('cookieConsent', 'all')
    setShowBanner(false)
    // Enable analytics cookies
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('consent', 'update', {
        'analytics_storage': 'granted'
      })
    }
  }

  const handleAcceptEssential = () => {
    localStorage.setItem('cookieConsent', 'essential')
    setShowBanner(false)
    // Disable analytics cookies
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('consent', 'update', {
        'analytics_storage': 'denied'
      })
    }
  }

  const handleClose = () => {
    // Temporarily hide for this session
    setShowBanner(false)
    // Show again after page reload
    sessionStorage.setItem('cookieBannerClosed', 'true')
  }

  if (!showBanner) return null

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className={`fixed ${isMinimized ? 'bottom-4 right-4' : 'bottom-4 right-4 left-4 md:left-auto md:max-w-md'} z-50 transition-all duration-300`}
        >
          {isMinimized ? (
            // Minimized state - small floating button
            <motion.button
              onClick={() => setIsMinimized(false)}
              className="bg-navy text-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow flex items-center gap-2 group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-blue"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="展开Cookie设置"
              aria-expanded="false"
            >
              <Cookie className="w-5 h-5" aria-hidden="true" />
              <span className="text-sm font-medium pr-2 max-w-0 group-hover:max-w-xs overflow-hidden transition-all duration-300">
                Cookie 设置
              </span>
            </motion.button>
          ) : (
            // Full banner - more compact design
            <div className="bg-white/95 backdrop-blur-sm rounded-lg shadow-2xl border border-gray-200" role="region" aria-label="Cookie同意横幅" aria-live="polite">
              <div className="px-4 py-3">
                <div className="flex flex-col gap-3">
                  {/* Left side - Cookie icon and text */}
                  <div className="flex items-center gap-3">
                    <Cookie className="w-5 h-5 text-navy flex-shrink-0" />
                    <div className="text-sm">
                      <p className="text-gray-700">
                        我们使用 Cookie 提升您的体验。
                        <a href="/privacy" className="text-navy hover:underline ml-1" target="_blank">
                          隐私政策
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  {/* Right side - Actions */}
                  <div className="flex items-center gap-2 w-full sm:w-auto justify-between sm:justify-end">
                    <div className="flex items-center gap-2 order-2 sm:order-1">
                      {/* Minimize button - hidden on mobile */}
                      <button
                        onClick={() => setIsMinimized(true)}
                        className="hidden sm:block p-1.5 text-gray-400 hover:text-gray-600 transition-colors rounded-lg hover:bg-gray-100"
                        aria-label="最小化 Cookie 提示"
                      >
                        <ChevronUp className="w-4 h-4" />
                      </button>
                      
                      {/* Close button */}
                      <button
                        onClick={handleClose}
                        className="p-1.5 text-gray-400 hover:text-gray-600 transition-colors rounded-lg hover:bg-gray-100"
                        aria-label="关闭 Cookie 提示"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                    
                    {/* Action buttons */}
                    <div className="flex items-center gap-2 order-1 sm:order-2">
                      <button
                        onClick={handleAcceptEssential}
                        className="px-3 py-2 sm:py-1.5 text-xs font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors whitespace-nowrap min-h-[44px] sm:min-h-[36px] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
                        aria-label="接受仅必要的Cookie"
                      >
                        仅必要
                      </button>
                      <button
                        onClick={handleAcceptAll}
                        className="px-4 py-2 sm:py-1.5 text-xs font-medium text-white bg-navy rounded-lg hover:bg-navy-light transition-colors whitespace-nowrap min-h-[44px] sm:min-h-[36px] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-blue"
                        aria-label="接受全部Cookie"
                      >
                        接受全部
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  )
}