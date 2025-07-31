'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)
  const [showLogo, setShowLogo] = useState(false)
  const [shouldShow, setShouldShow] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    // 只在主页显示加载动画
    if (pathname !== '/' && pathname !== '/zh' && pathname !== '/en') {
      setIsLoading(false)
      return
    }

    // 检查是否是首次访问
    const hasVisited = sessionStorage.getItem('hasVisitedHome')
    if (hasVisited) {
      setIsLoading(false)
      return
    }

    // 记录性能时间
    const startTime = performance.now()

    // 设置最小显示时间，避免闪烁
    const minDisplayTime = 800

    // 先显示loading
    setShouldShow(true)
    
    // 延迟显示logo，避免闪烁
    const logoTimer = setTimeout(() => {
      setShowLogo(true)
    }, 150)

    // 检查页面是否真正加载完成
    const checkPageReady = () => {
      const loadTime = performance.now() - startTime
      const remainingTime = Math.max(0, minDisplayTime - loadTime)
      
      setTimeout(() => {
        setIsLoading(false)
        sessionStorage.setItem('hasVisitedHome', 'true')
      }, remainingTime)
    }

    // 监听页面加载状态
    if (document.readyState === 'complete') {
      checkPageReady()
    } else {
      window.addEventListener('load', checkPageReady)
      // 最长等待时间
      const maxTimer = setTimeout(() => {
        setIsLoading(false)
        sessionStorage.setItem('hasVisitedHome', 'true')
      }, 3000)

      return () => {
        clearTimeout(logoTimer)
        clearTimeout(maxTimer)
        window.removeEventListener('load', checkPageReady)
      }
    }
  }, [pathname])

  // 如果不应该显示，直接返回null
  if (!shouldShow) return null

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="fixed inset-0 z-[9999] bg-white flex items-center justify-center"
          onAnimationComplete={() => {
            // 动画完成后移除元素，避免遮挡
            const loadingEl = document.getElementById('loading-screen')
            if (loadingEl) {
              loadingEl.style.display = 'none'
            }
          }}
          id="loading-screen"
        >
          {/* Logo animation */}
          <AnimatePresence>
            {showLogo && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="text-center"
              >
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="mb-2"
                >
                  <Image
                    src="/logo-inverted.png"
                    alt="Bingheng Credit"
                    width={240}
                    height={72}
                    className="h-20 w-auto"
                    priority
                  />
                </motion.div>
            
                {/* Loading indicator */}
                <motion.div 
                  className="mt-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="flex justify-center gap-2">
                    {[0, 1, 2].map((i) => (
                      <motion.div
                        key={i}
                        className="w-3 h-3 bg-navy rounded-full"
                        animate={{ 
                          y: [0, -10, 0],
                          opacity: [0.3, 1, 0.3]
                        }}
                        transition={{ 
                          duration: 1, 
                          repeat: Infinity,
                          delay: i * 0.2,
                          ease: "easeInOut"
                        }}
                      />
                    ))}
                  </div>
                  <motion.p
                    className="text-gray-500 text-sm mt-4 font-light"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    Loading...
                  </motion.p>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  )
}