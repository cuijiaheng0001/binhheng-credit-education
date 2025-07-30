'use client'

import { useEffect } from 'react'

export default function PerformanceMonitor() {
  useEffect(() => {
    if (typeof window === 'undefined' || !('PerformanceObserver' in window)) {
      return
    }

    // 监控长任务
    const longTaskObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        // 只在开发环境打印详细信息
        if (process.env.NODE_ENV === 'development') {
          console.warn('Long task detected:', {
            duration: entry.duration,
            startTime: entry.startTime,
            name: entry.name,
            // @ts-expect-error - attribution is experimental
            attribution: entry.attribution
          })
        }
        
        // 记录到性能监控服务（如果有的话）
        if (typeof window !== 'undefined' && (window as any).gtag) {
          (window as any).gtag('event', 'timing_complete', {
            name: 'long_task',
            value: Math.round(entry.duration),
            event_category: 'Performance'
          })
        }
      }
    })

    try {
      longTaskObserver.observe({ entryTypes: ['longtask'] })
    } catch {
      // 某些浏览器可能不支持
    }

    // 监控布局偏移
    const layoutShiftObserver = new PerformanceObserver((list) => {
      let clsValue = 0
      for (const entry of list.getEntries()) {
        // @ts-expect-error - hadRecentInput is experimental
        if (!entry.hadRecentInput) {
          // @ts-expect-error - value is experimental
          clsValue += entry.value
        }
      }
      
      if (clsValue > 0.1 && process.env.NODE_ENV === 'development') {
        console.warn('High CLS detected:', clsValue)
      }
    })

    try {
      layoutShiftObserver.observe({ entryTypes: ['layout-shift'] })
    } catch {
      // 某些浏览器可能不支持
    }

    return () => {
      longTaskObserver.disconnect()
      layoutShiftObserver.disconnect()
    }
  }, [])

  return null
}