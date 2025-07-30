'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

interface HeroSlideProps {
  src: string
  alt: string
  title: string
  subtitle: string
  description?: string
  cta: {
    href: string
    label: string
  }
  priority?: boolean
}

export default function HeroSlide({ 
  src, 
  alt, 
  title, 
  subtitle, 
  description,
  cta,
  priority = false 
}: HeroSlideProps) {
  return (
    <div className="relative h-screen w-full">
      {/* 背景层 - 图片优化 */}
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        quality={85}
        sizes="100vw"
        className="object-cover object-center will-change-transform"
      />

      {/* 半透明遮罩层 - 确保文字可读性 */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent" />
      
      {/* 模糊遮罩层（可选） */}
      <div className="absolute inset-0 backdrop-blur-[2px]" />
      
      {/* 文字内容层 */}
      <div className="absolute inset-0 z-20 flex items-center">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <div className="max-w-3xl">
            {/* 副标题 */}
            {subtitle && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mb-4"
              >
                <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white font-medium text-sm md:text-base border border-white/20">
                  {subtitle}
                </span>
              </motion.div>
            )}
            
            {/* 主标题 */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
            >
              {title}
            </motion.h1>
            
            {/* 描述文字 */}
            {description && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-base md:text-lg lg:text-xl text-white/90 mb-8 max-w-2xl leading-relaxed drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]"
              >
                {description}
              </motion.p>
            )}
            
            {/* CTA 按钮 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <a
                href={cta.href}
                className="inline-block px-6 md:px-8 py-3 md:py-4 bg-white text-gray-900 font-semibold text-base md:text-lg rounded-lg shadow-xl hover:bg-gray-100 hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-white/50"
              >
                {cta.label}
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}