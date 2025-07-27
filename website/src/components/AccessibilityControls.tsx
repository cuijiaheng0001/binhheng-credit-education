'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Accessibility, 
  ZoomIn, 
  ZoomOut, 
  Eye, 
  Type,
  X,
  Keyboard,
  Volume2
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { useLanguage } from '@/i18n/client'

interface AccessibilitySettings {
  fontSize: number
  highContrast: boolean
  keyboardNav: boolean
  screenReader: boolean
}

export default function AccessibilityControls() {
  const [isOpen, setIsOpen] = useState(false)
  const [settings, setSettings] = useState<AccessibilitySettings>({
    fontSize: 100,
    highContrast: false,
    keyboardNav: false,
    screenReader: false
  })
  const { language } = useLanguage()

  // Load settings from localStorage
  useEffect(() => {
    const savedSettings = localStorage.getItem('accessibilitySettings')
    if (savedSettings) {
      const parsed = JSON.parse(savedSettings)
      setSettings(parsed)
      applySettings(parsed)
    }
  }, [])

  // Apply settings to document
  const applySettings = (newSettings: AccessibilitySettings) => {
    // Font size
    document.documentElement.style.fontSize = `${newSettings.fontSize}%`
    
    // High contrast
    if (newSettings.highContrast) {
      document.documentElement.classList.add('high-contrast')
    } else {
      document.documentElement.classList.remove('high-contrast')
    }
    
    // Keyboard navigation
    if (newSettings.keyboardNav) {
      document.documentElement.classList.add('keyboard-nav')
    } else {
      document.documentElement.classList.remove('keyboard-nav')
    }
    
    // Screen reader
    if (newSettings.screenReader) {
      document.documentElement.setAttribute('aria-live', 'polite')
    } else {
      document.documentElement.removeAttribute('aria-live')
    }
  }

  // Update settings
  const updateSettings = (key: keyof AccessibilitySettings, value: any) => {
    const newSettings = { ...settings, [key]: value }
    setSettings(newSettings)
    localStorage.setItem('accessibilitySettings', JSON.stringify(newSettings))
    applySettings(newSettings)
  }

  // Adjust font size
  const adjustFontSize = (delta: number) => {
    const newSize = Math.max(80, Math.min(150, settings.fontSize + delta))
    updateSettings('fontSize', newSize)
  }

  const labels = {
    zh: {
      title: '无障碍设置',
      fontSize: '字体大小',
      highContrast: '高对比度',
      keyboardNav: '键盘导航',
      screenReader: '屏幕阅读器',
      reset: '重置设置'
    },
    en: {
      title: 'Accessibility Settings',
      fontSize: 'Font Size',
      highContrast: 'High Contrast',
      keyboardNav: 'Keyboard Navigation',
      screenReader: 'Screen Reader',
      reset: 'Reset Settings'
    }
  }

  const t = labels[language] || labels['zh']

  return (
    <>
      {/* Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed right-4 bottom-20 z-40 p-3 bg-primary-blue text-white rounded-full shadow-lg hover:bg-secondary-blue transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-blue"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Accessibility settings"
      >
        <Accessibility className="w-6 h-6" />
      </motion.button>

      {/* Accessibility Panel */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/50 z-40"
            />

            {/* Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 20 }}
              className="fixed right-0 top-0 h-full w-80 bg-white shadow-2xl z-50 overflow-y-auto"
            >
              <div className="p-6">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-gray-900">{t.title}</h2>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                    aria-label="Close panel"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Font Size Control */}
                <div className="mb-6">
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-3">
                    <Type className="w-4 h-4" />
                    {t.fontSize}: {settings.fontSize}%
                  </label>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => adjustFontSize(-10)}
                      className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                      aria-label="Decrease font size"
                    >
                      <ZoomOut className="w-5 h-5" />
                    </button>
                    <div className="flex-1 h-2 bg-gray-200 rounded-full relative">
                      <div
                        className="absolute inset-y-0 left-0 bg-primary-blue rounded-full transition-all duration-300"
                        style={{ width: `${((settings.fontSize - 80) / 70) * 100}%` }}
                      />
                    </div>
                    <button
                      onClick={() => adjustFontSize(10)}
                      className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                      aria-label="Increase font size"
                    >
                      <ZoomIn className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Toggle Options */}
                <div className="space-y-4">
                  {/* High Contrast */}
                  <label className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
                    <div className="flex items-center gap-3">
                      <Eye className="w-5 h-5 text-gray-600" />
                      <span className="font-medium text-gray-700">{t.highContrast}</span>
                    </div>
                    <input
                      type="checkbox"
                      checked={settings.highContrast}
                      onChange={(e) => updateSettings('highContrast', e.target.checked)}
                      className="sr-only"
                    />
                    <div className={cn(
                      "w-10 h-6 rounded-full transition-colors relative",
                      settings.highContrast ? "bg-primary-blue" : "bg-gray-300"
                    )}>
                      <div className={cn(
                        "absolute top-1 w-4 h-4 bg-white rounded-full transition-transform",
                        settings.highContrast ? "translate-x-5" : "translate-x-1"
                      )} />
                    </div>
                  </label>

                  {/* Keyboard Navigation */}
                  <label className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
                    <div className="flex items-center gap-3">
                      <Keyboard className="w-5 h-5 text-gray-600" />
                      <span className="font-medium text-gray-700">{t.keyboardNav}</span>
                    </div>
                    <input
                      type="checkbox"
                      checked={settings.keyboardNav}
                      onChange={(e) => updateSettings('keyboardNav', e.target.checked)}
                      className="sr-only"
                    />
                    <div className={cn(
                      "w-10 h-6 rounded-full transition-colors relative",
                      settings.keyboardNav ? "bg-primary-blue" : "bg-gray-300"
                    )}>
                      <div className={cn(
                        "absolute top-1 w-4 h-4 bg-white rounded-full transition-transform",
                        settings.keyboardNav ? "translate-x-5" : "translate-x-1"
                      )} />
                    </div>
                  </label>

                  {/* Screen Reader */}
                  <label className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
                    <div className="flex items-center gap-3">
                      <Volume2 className="w-5 h-5 text-gray-600" />
                      <span className="font-medium text-gray-700">{t.screenReader}</span>
                    </div>
                    <input
                      type="checkbox"
                      checked={settings.screenReader}
                      onChange={(e) => updateSettings('screenReader', e.target.checked)}
                      className="sr-only"
                    />
                    <div className={cn(
                      "w-10 h-6 rounded-full transition-colors relative",
                      settings.screenReader ? "bg-primary-blue" : "bg-gray-300"
                    )}>
                      <div className={cn(
                        "absolute top-1 w-4 h-4 bg-white rounded-full transition-transform",
                        settings.screenReader ? "translate-x-5" : "translate-x-1"
                      )} />
                    </div>
                  </label>
                </div>

                {/* Reset Button */}
                <button
                  onClick={() => {
                    const defaultSettings: AccessibilitySettings = {
                      fontSize: 100,
                      highContrast: false,
                      keyboardNav: false,
                      screenReader: false
                    }
                    setSettings(defaultSettings)
                    localStorage.setItem('accessibilitySettings', JSON.stringify(defaultSettings))
                    applySettings(defaultSettings)
                  }}
                  className="w-full mt-6 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                >
                  {t.reset}
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}