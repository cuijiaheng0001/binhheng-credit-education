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
    <section className="relative h-screen overflow-hidden bg-navy">
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
          <div className="absolute inset-0 bg-gradient-to-b from-navy/70 via-navy/50 to-navy/80" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/40 to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
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
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="mb-6"
                >
                  <span className="inline-flex items-center gap-2 px-4 py-2 bg-gold/20 backdrop-blur-sm rounded-full border border-gold/30">
                    <Globe className="w-4 h-4 text-gold" />
                    <span className="text-gold font-medium text-sm tracking-wider uppercase">
                      Hidden Debt Recovery Experts
                    </span>
                  </span>
                </motion.div>

                {/* Subtitle */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-gold font-medium text-lg mb-4 tracking-wide"
                >
                  {slides[currentSlide].subtitle}
                </motion.p>

                {/* Title */}
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="font-display text-5xl lg:text-7xl text-white mb-6 leading-tight"
                >
                  {slides[currentSlide].title}
                </motion.h1>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-xl text-white/80 mb-8 leading-relaxed"
                >
                  {slides[currentSlide].description}
                </motion.p>

                {/* Stats */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="flex items-center gap-8 mb-10"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gold/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-gold" strokeWidth={1.5} />
                    </div>
                    <div>
                      <div className="text-2xl font-light text-white">{slides[currentSlide].stats.value}</div>
                      <div className="text-sm text-white/60">{slides[currentSlide].stats.label}</div>
                    </div>
                  </div>
                </motion.div>

                {/* CTAs */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="flex gap-4"
                >
                  <button className="group relative px-8 py-4 bg-gold text-white font-semibold tracking-wide rounded-lg overflow-hidden transition-all duration-300 hover:shadow-gold shadow-xl">
                    <span className="relative z-10">Discover Your Hidden Receivables</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-gold-dark to-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </button>
                  <button className="px-8 py-4 bg-white/10 text-white font-medium tracking-wide rounded-lg backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300">
                    Get Free Risk Assessment
                  </button>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-10 left-0 right-0 z-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Slide Indicators */}
            <div className="flex gap-3">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={cn(
                    "h-1 rounded-full transition-all duration-300",
                    currentSlide === index
                      ? "w-12 bg-gold"
                      : "w-6 bg-white/30 hover:bg-white/50"
                  )}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Arrow Controls */}
            <div className="flex gap-3">
              <button
                onClick={prevSlide}
                className="p-3 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300 group"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-5 h-5 text-white group-hover:-translate-x-0.5 transition-transform" />
              </button>
              <button
                onClick={nextSlide}
                className="p-3 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300 group"
                aria-label="Next slide"
              >
                <ChevronRight className="w-5 h-5 text-white group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 group"
        aria-label="Scroll to next section"
      >
        <div className="relative">
          <div className="absolute inset-0 bg-gold/20 rounded-full blur-xl group-hover:bg-gold/30 transition-colors" />
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="relative bg-white/10 backdrop-blur-sm rounded-full p-3 border border-white/20 group-hover:border-gold/50 transition-colors"
          >
            <ChevronDown className="w-6 h-6 text-white" strokeWidth={1.5} />
          </motion.div>
        </div>
      </motion.button>
    </section>
  )
}