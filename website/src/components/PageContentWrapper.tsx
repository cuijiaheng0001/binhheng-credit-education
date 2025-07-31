'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

interface PageContentWrapperProps {
  children: React.ReactNode
}

export default function PageContentWrapper({ children }: PageContentWrapperProps) {
  const pathname = usePathname()

  useEffect(() => {
    // 检查是否是主页
    const isHomePage = pathname === '/' || pathname === '/zh' || pathname === '/en'
    
    if (!isHomePage) {
      // 非主页直接显示内容
      document.body.classList.add('content-ready')
      return
    }

    // 检查是否是首次访问
    const hasVisited = sessionStorage.getItem('hasVisitedHome')
    if (hasVisited && window.performance.navigation.type !== 1) {
      // 已访问过且不是刷新，直接显示内容
      document.body.classList.add('content-ready')
      return
    }

    // 首次访问或刷新，延迟显示内容
    const timer = setTimeout(() => {
      document.body.classList.add('content-ready')
    }, 300) // 给加载动画足够的时间先显示

    return () => {
      clearTimeout(timer)
      // 清理时不要移除 class，避免页面切换时的闪烁
    }
  }, [pathname])

  return <>{children}</>
}