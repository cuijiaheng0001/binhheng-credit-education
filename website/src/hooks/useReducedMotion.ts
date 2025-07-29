'use client'

import { useEffect, useState } from 'react'

/**
 * Hook to detect if user prefers reduced motion
 * Also checks device performance and disables animations on low-end devices
 */
export function useReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  const [isLowPerformanceDevice, setIsLowPerformanceDevice] = useState(false)

  useEffect(() => {
    // Check user preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)

    const handleChange = () => {
      setPrefersReducedMotion(mediaQuery.matches)
    }

    mediaQuery.addEventListener('change', handleChange)

    // Check device performance
    if ('navigator' in window && 'hardwareConcurrency' in navigator) {
      // Disable animations on devices with 2 or fewer CPU cores
      setIsLowPerformanceDevice(navigator.hardwareConcurrency <= 2)
    }

    // Check if device is mobile with limited resources
    if ('navigator' in window && 'deviceMemory' in navigator) {
      // Disable animations on devices with 4GB or less RAM
      const deviceMemory = (navigator as any).deviceMemory
      if (deviceMemory && deviceMemory <= 4) {
        setIsLowPerformanceDevice(true)
      }
    }

    // Check connection speed
    if ('navigator' in window && 'connection' in navigator) {
      const connection = (navigator as any).connection
      if (connection && connection.effectiveType) {
        // Disable animations on slow connections
        if (connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g') {
          setIsLowPerformanceDevice(true)
        }
      }
    }

    return () => {
      mediaQuery.removeEventListener('change', handleChange)
    }
  }, [])

  return prefersReducedMotion || isLowPerformanceDevice
}