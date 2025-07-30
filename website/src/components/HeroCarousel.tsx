'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, TrendingUp, Shield, Award, Globe, ChevronDown } from 'lucide-react'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import OptimizedHeroImage from './OptimizedHeroImage'
import { useLanguage } from '@/i18n/client'

const getSlides = (lang: string) => [
  {
    id: 1,
    badge: lang === 'zh' ? '中国债务人追收' : 'China Debt Recovery',
    title: lang === 'zh' ? '专注于中国债务人的专业追收' : 'We Specialize in Recovering Debts from Chinese Nationals',
    subtitle: lang === 'zh' ? '唯一专注于中国债务追收的公司' : 'The Only Company Focused on China-Specific Debt Recovery',
    description: lang === 'zh' 
      ? '当中国债务人回国后，普通催收机构束手无策。我们凭借本地化专业知识和文化理解，在其他机构失败的地方取得成功。'
      : 'When Chinese debtors return home, general collection agencies fail. We succeed where others cannot, using localized expertise and cultural understanding.',
    image: '/images/hero/debt-recovery-1.jpg',
    imageSrcSet: '/_next/image?url=%2Fimages%2Fhero%2Fdebt-recovery-1-640w.jpg&w=640&q=90 640w, /_next/image?url=%2Fimages%2Fhero%2Fdebt-recovery-1-1080w.jpg&w=1080&q=85 1080w, /_next/image?url=%2Fimages%2Fhero%2Fdebt-recovery-1-1920w.jpg&w=1920&q=80 1920w',
    stats: { 
      value: '$128M+', 
      label: lang === 'zh' ? '已追回中国债务' : 'Recovered from Chinese Debtors' 
    }
  },
  {
    id: 2,
    badge: lang === 'zh' ? '留学生住宿债务' : 'Student Housing Debts',
    title: lang === 'zh' ? '中国留学生住宿欠费并非无法追回' : 'Chinese Student Housing Debts Are Not Lost',
    subtitle: lang === 'zh' ? '教育机构专业追收服务' : 'Specialized Recovery for Education Institutions',
    description: lang === 'zh'
      ? '87%的大学在中国留学生回国后选择核销债务。我们通过本地网络，成功追回65%的"无法收回"账款。'
      : '87% of universities write off debts when Chinese students return home. We recover 65% of these "uncollectable" accounts through local networks.',
    image: '/images/hero/debt-recovery-2.jpg',
    imageSrcSet: '/_next/image?url=%2Fimages%2Fhero%2Fdebt-recovery-2-640w.jpg&w=640&q=90 640w, /_next/image?url=%2Fimages%2Fhero%2Fdebt-recovery-2-1080w.jpg&w=1080&q=85 1080w, /_next/image?url=%2Fimages%2Fhero%2Fdebt-recovery-2-1920w.jpg&w=1920&q=80 1920w',
    stats: { 
      value: '65%', 
      label: lang === 'zh' ? '学生债务成功率' : 'Success Rate for Student Debts' 
    }
  },
  {
    id: 3,
    badge: lang === 'zh' ? '电商与贸易债务' : 'E-commerce & Trade',
    title: lang === 'zh' ? '来自中国的电商和贸易债务可以追回' : 'E-commerce & Trade Debts from China Are Recoverable',
    subtitle: lang === 'zh' ? '弥合中美催收差距' : 'Bridging the US-China Collection Gap',
    description: lang === 'zh'
      ? '从亚马逊卖家违规到B2B贸易违约，我们熟悉中国法律体系，成功追回其他机构认为不可能的债务。'
      : 'From Amazon seller violations to B2B trade defaults, we navigate Chinese legal systems to recover what others consider impossible.',
    image: '/images/hero/debt-recovery-3.jpg',
    imageSrcSet: '/_next/image?url=%2Fimages%2Fhero%2Fdebt-recovery-3-640w.jpg&w=640&q=90 640w, /_next/image?url=%2Fimages%2Fhero%2Fdebt-recovery-3-1080w.jpg&w=1080&q=85 1080w, /_next/image?url=%2Fimages%2Fhero%2Fdebt-recovery-3-1920w.jpg&w=1920&q=80 1920w',
    stats: { 
      value: '500+', 
      label: lang === 'zh' ? '服务美国公司' : 'US Companies Served' 
    }
  }
]

export default function HeroCarousel() {
  const { locale, dictionary } = useLanguage()
  const slides = getSlides(locale)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (!isAutoPlaying || isPaused) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 8000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, isPaused])

  // 预加载所有图片 - 使用空闲回调避免阻塞主线程
  useEffect(() => {
    if ('requestIdleCallback' in window) {
      window.requestIdleCallback(() => {
        slides.forEach((slide) => {
          const img = new window.Image()
          img.src = slide.image
        })
      })
    } else {
      // Fallback: 延迟加载
      setTimeout(() => {
        slides.forEach((slide) => {
          const img = new window.Image()
          img.src = slide.image
        })
      }, 1000)
    }
  }, [slides])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 15000)
  }

  const nextSlide = () => {
    goToSlide((currentSlide + 1) % slides.length)
  }

  const prevSlide = () => {
    goToSlide((currentSlide - 1 + slides.length) % slides.length)
  }

  return (
    <>
      {/* Hero Section with integrated background */}
      <section className="relative min-h-screen bg-black">
        {/* Background Images - Absolute positioning within section */}
        <div className="absolute inset-0 top-0">
          <AnimatePresence mode="wait">
            {slides.map((slide, index) => (
              index === currentSlide && (
                <motion.div
                  key={slide.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  className="absolute inset-0"
                >
                  <OptimizedHeroImage
                    src={slide.image}
                    srcSet={slide.imageSrcSet}
                    alt={slide.title}
                    priority={index === 0}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
                </motion.div>
              )
            ))}
          </AnimatePresence>
        </div>
        {/* Content */}
        <div 
          className="relative z-10 min-h-screen flex items-start pt-24"
        >
        <div className="max-w-7xl mx-auto px-8 lg:px-12 w-full">
          <div className="max-w-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >
                {/* Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="mb-6"
                >
                  <span className="inline-block px-4 py-2 bg-black/30 backdrop-blur-md rounded-full text-white font-medium text-sm border border-white/20">
                    {slides[currentSlide].badge}
                  </span>
                </motion.div>


                {/* Title */}
                <motion.h1
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="font-sans text-4xl lg:text-6xl text-white mb-6 leading-[1.1] font-bold"
                >
                  {slides[currentSlide].title.split(' ').map((word, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + index * 0.05, duration: 0.8 }}
                      className="inline-block mr-[0.25em]"
                    >
                      {word}
                    </motion.span>
                  ))}
                </motion.h1>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-lg text-white/85 mb-12 leading-relaxed font-light max-w-xl"
                >
                  {slides[currentSlide].description}
                </motion.p>


              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-20 left-0 right-0 z-20">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="flex items-center justify-between">
            {/* Slide Indicators */}
            <div className="flex gap-4">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={cn(
                    "h-0.5 rounded-full transition-all duration-500",
                    currentSlide === index
                      ? "w-16 bg-white"
                      : "w-8 bg-white/30 hover:bg-white/50"
                  )}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Arrow Controls */}
            <div className="hidden lg:flex gap-4">
              <button
                onClick={prevSlide}
                className="p-4 border border-white/20 hover:border-white/40 hover:bg-white/10 transition-all duration-300 group"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-5 h-5 text-white group-hover:-translate-x-0.5 transition-transform" strokeWidth={1} />
              </button>
              <button
                onClick={nextSlide}
                className="p-4 border border-white/20 hover:border-white/40 hover:bg-white/10 transition-all duration-300 group"
                aria-label="Next slide"
              >
                <ChevronRight className="w-5 h-5 text-white group-hover:translate-x-0.5 transition-transform" strokeWidth={1} />
              </button>
            </div>
          </div>
        </div>
      </div>

      </section>
      
    </>
  )
}