'use client'

import { createContext, useContext, useState, useEffect } from 'react'
import { Locale, i18n } from './config'
import { getDictionary } from './get-dictionary'

type Dictionary = Awaited<ReturnType<typeof getDictionary>>

interface LanguageContextType {
  locale: Locale
  dictionary: Dictionary
  setLocale: (locale: Locale) => void
}

const LanguageContext = createContext<LanguageContextType | null>(null)

interface LanguageProviderProps {
  children: React.ReactNode
  initialLocale?: Locale
  initialDictionary: Dictionary
}

export function LanguageProvider({
  children,
  initialLocale,
  initialDictionary,
}: LanguageProviderProps) {
  const [locale, setLocaleState] = useState<Locale>(initialLocale || i18n.defaultLocale)
  const [dictionary, setDictionary] = useState<Dictionary>(initialDictionary)

  useEffect(() => {
    // 保存语言偏好到 localStorage
    if (typeof window !== 'undefined') {
      localStorage.setItem('locale', locale)
    }
  }, [locale])

  const setLocale = async (newLocale: Locale) => {
    setLocaleState(newLocale)
    const newDictionary = await getDictionary(newLocale)
    setDictionary(newDictionary)
  }

  return (
    <LanguageContext.Provider value={{ locale, dictionary, setLocale }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

// 检测用户语言偏好
export function detectUserLocale(): Locale {
  if (typeof window === 'undefined') return i18n.defaultLocale
  
  // 1. 检查 localStorage
  const savedLocale = localStorage.getItem('locale')
  if (savedLocale && i18n.locales.includes(savedLocale as Locale)) {
    return savedLocale as Locale
  }
  
  // 2. 检查浏览器语言
  const browserLang = navigator.language.toLowerCase()
  if (browserLang.startsWith('zh')) return 'zh'
  if (browserLang.startsWith('en')) return 'en'
  
  // 3. 默认语言
  return i18n.defaultLocale
}