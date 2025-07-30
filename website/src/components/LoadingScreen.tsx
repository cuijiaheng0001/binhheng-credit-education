'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)
  const [showLogo, setShowLogo] = useState(false)

  useEffect(() => {
    // 先显示logo
    const logoTimer = setTimeout(() => {
      setShowLogo(true)
    }, 100)

    // 检查页面是否真正加载完成
    const checkPageReady = () => {
      if (document.readyState === 'complete') {
        setIsLoading(false)
      }
    }

    // 监听页面加载状态
    if (document.readyState === 'complete') {
      setTimeout(() => setIsLoading(false), 800)
    } else {
      window.addEventListener('load', checkPageReady)
      // 最长等待时间
      const maxTimer = setTimeout(() => {
        setIsLoading(false)
      }, 3000)

      return () => {
        clearTimeout(logoTimer)
        clearTimeout(maxTimer)
        window.removeEventListener('load', checkPageReady)
      }
    }
  }, [])

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
                >
                  <Image
                    src="/logo-inverted.png"
                    alt="Bingheng Credit"
                    width={200}
                    height={60}
                    className="h-16 w-auto"
                    priority
                  />
                </motion.div>
            
                {/* Loading indicator */}
                <motion.div 
                  className="mt-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="flex justify-center gap-1">
                    {[0, 1, 2].map((i) => (
                      <motion.div
                        key={i}
                        className="w-2 h-2 bg-gray-400 rounded-full"
                        animate={{ 
                          y: [0, -8, 0],
                          opacity: [0.5, 1, 0.5]
                        }}
                        transition={{ 
                          duration: 0.8, 
                          repeat: Infinity,
                          delay: i * 0.15,
                          ease: "easeInOut"
                        }}
                      />
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  )
}