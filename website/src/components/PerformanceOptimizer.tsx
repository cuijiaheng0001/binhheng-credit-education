'use client'

import { useEffect } from 'react'
import { initPerformanceOptimizations } from '@/utils/performance'

export default function PerformanceOptimizer() {
  useEffect(() => {
    // Initialize performance optimizations after component mounts
    initPerformanceOptimizations()
    
    // Optional: Load web-vitals for performance monitoring
    if (process.env.NODE_ENV === 'production') {
      import('web-vitals').then(({ onCLS, onINP, onFCP, onLCP, onTTFB }) => {
        onCLS((metric) => {
          console.log('CLS:', metric.value)
          // Send to analytics
        })
        onINP((metric) => {
          console.log('INP:', metric.value)
          // Send to analytics
        })
        onFCP((metric) => {
          console.log('FCP:', metric.value)
          // Send to analytics
        })
        onLCP((metric) => {
          console.log('LCP:', metric.value)
          // Send to analytics
        })
        onTTFB((metric) => {
          console.log('TTFB:', metric.value)
          // Send to analytics
        })
      })
    }
  }, [])
  
  return null
}