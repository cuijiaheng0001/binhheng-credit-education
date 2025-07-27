'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import { ChevronLeft, ChevronRight, TrendingUp, Shield, Award, Globe, ChevronDown } from 'lucide-react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

const slides = [
  {
    id: 1,
    title: 'Stop Writing Off International Debts Prematurely',
    subtitle: 'A Hidden Problem Costing You Millions',
    description: 'Discover how 60% of cross-border debts labeled "uncollectable" can actually be recovered with the right expertise',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1920&q=80',
    stats: { value: '$128M+', label: 'Previously "Lost" Debts Recovered' }
  },
  {
    id: 2,
    title: 'Your Chinese Debtors Are Not Unreachable',
    subtitle: 'Breaking the Biggest Misconception',
    description: 'Most institutions wrongly assume debtors who return to China cannot be contacted. We prove otherwise every day.',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1920&q=80',
    stats: { value: '60%', label: 'Recovery Rate on "Written-Off" Debts' }
  },
  {
    id: 3,
    title: 'Compliant Cross-Border Recovery Is Possible',
    subtitle: 'Expert Navigation Through Complex Regulations',
    description: 'With proper cultural understanding and local networks, international debt recovery is both legal and effective',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=80',
    stats: { value: '500+', label: 'Institutions Helped Recover Hidden Assets' }
  }
]

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const { scrollY } = useScroll()
  const imageY = useTransform(scrollY, [0, 500], [0, 150])
  const textY = useTransform(scrollY, [0, 300], [0, 50])
  const opacity = useTransform(scrollY, [0, 400], [1, 0])

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const nextSlide = () => {
    goToSlide((currentSlide + 1) % slides.length)
  }

  const prevSlide = () => {
    goToSlide((currentSlide - 1 + slides.length) % slides.length)
  }

  return (
    <section className="relative h-screen overflow-hidden bg-black">
      {/* Background Images */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1.5, ease: [0.43, 0.13, 0.23, 0.96] }}
          className="absolute inset-0"
          style={{ y: imageY }}
        >
          <Image
            src={slides[currentSlide].image}
            alt={slides[currentSlide].title}
            fill
            priority
            className="object-cover"
            quality={100}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <motion.div 
        className="relative z-10 h-full flex items-center"
        style={{ y: textY, opacity }}
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
              >
                {/* Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="mb-6"
                >
                  <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 font-medium text-sm">
                    跨境债务追收专家
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
                  className="text-lg text-white/70 mb-12 leading-relaxed font-light max-w-xl"
                >
                  {slides[currentSlide].description}
                </motion.p>


                {/* CTAs */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-white text-primary-blue font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg"
                  >
                    立即获取免费评估
                  </motion.button>
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 text-white font-semibold border-2 border-white rounded-lg hover:bg-white hover:text-primary-blue transition-all duration-300"
                  >
                    了解更多
                  </motion.button>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </motion.div>

      {/* Navigation Controls */}
      <div className="absolute bottom-12 left-0 right-0 z-20">
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
  )
}