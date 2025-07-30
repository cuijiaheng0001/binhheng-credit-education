'use client'

import { createContext, useContext, useState, useEffect } from 'react'

interface AccessibilityContextType {
  fontSize: 'normal' | 'large' | 'extra-large'
  highContrast: boolean
  reducedMotion: boolean
  setFontSize: (size: 'normal' | 'large' | 'extra-large') => void
  setHighContrast: (enabled: boolean) => void
  setReducedMotion: (enabled: boolean) => void
}

const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined)

export function AccessibilityProvider({ children }: { children: React.ReactNode }) {
  const [fontSize, setFontSize] = useState<'normal' | 'large' | 'extra-large'>('normal')
  const [highContrast, setHighContrast] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    // 检查用户系统偏好
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const prefersHighContrast = window.matchMedia('(prefers-contrast: high)').matches
    
    setReducedMotion(prefersReducedMotion)
    setHighContrast(prefersHighContrast)
    
    // 从 localStorage 读取用户设置
    const savedFontSize = localStorage.getItem('fontSize') as 'normal' | 'large' | 'extra-large'
    const savedHighContrast = localStorage.getItem('highContrast') === 'true'
    
    if (savedFontSize) setFontSize(savedFontSize)
    if (savedHighContrast) setHighContrast(savedHighContrast)
  }, [])

  useEffect(() => {
    // 应用字体大小
    const root = document.documentElement
    switch (fontSize) {
      case 'large':
        root.style.fontSize = '112.5%' // 18px base
        break
      case 'extra-large':
        root.style.fontSize = '125%' // 20px base
        break
      default:
        root.style.fontSize = '100%' // 16px base
    }
    localStorage.setItem('fontSize', fontSize)
  }, [fontSize])

  useEffect(() => {
    // 应用高对比度
    document.body.classList.toggle('high-contrast', highContrast)
    localStorage.setItem('highContrast', String(highContrast))
  }, [highContrast])

  useEffect(() => {
    // 应用减少动画
    document.body.classList.toggle('reduce-motion', reducedMotion)
  }, [reducedMotion])

  return (
    <AccessibilityContext.Provider
      value={{
        fontSize,
        highContrast,
        reducedMotion,
        setFontSize,
        setHighContrast,
        setReducedMotion,
      }}
    >
      {children}
    </AccessibilityContext.Provider>
  )
}

export function useAccessibility() {
  const context = useContext(AccessibilityContext)
  if (context === undefined) {
    throw new Error('useAccessibility must be used within an AccessibilityProvider')
  }
  return context
}