'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
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
        >
          <Image
            src={slides[currentSlide].image}
            alt={slides[currentSlide].title}
            fill
            priority
            className="object-cover"
            quality={100}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
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
                  className="mb-8"
                >
                  <span className="text-white/70 font-light text-sm tracking-[0.3em] uppercase">
                    Cross-Border Debt Recovery
                  </span>
                </motion.div>


                {/* Title */}
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="font-light text-4xl lg:text-6xl text-white mb-8 leading-[1.2] tracking-tight"
                >
                  {slides[currentSlide].title}
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
                  <button className="group relative px-10 py-4 bg-white text-navy font-light tracking-wide overflow-hidden transition-all duration-500 hover:shadow-2xl">
                    <span className="relative z-10">Discover Hidden Assets</span>
                  </button>
                  <button className="px-10 py-4 text-white font-light tracking-wide border border-white/30 hover:bg-white/10 transition-all duration-500">
                    Learn More
                  </button>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

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