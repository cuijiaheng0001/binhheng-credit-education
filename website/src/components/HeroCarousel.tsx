'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react'
import { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'

const slides = [
  {
    id: 1,
    subtitle: 'The Hidden Problem',
    title: 'Your Uncollected Chinese Debts',
    description: 'Millions in receivables are incorrectly written off every year. We help you recognize and recover them.',
    cta: 'Discover Your Risk',
    ctaLink: '#assessment',
    bgGradient: 'from-primary-950 via-primary-900 to-primary-800',
  },
  {
    id: 2,
    subtitle: 'The Reality',
    title: '60% Recovery Rate',
    description: 'What you thought was lost forever can actually be recovered through our specialized cross-border system.',
    cta: 'See How It Works',
    ctaLink: '#process',
    bgGradient: 'from-primary-900 via-primary-800 to-accent-900',
  },
  {
    id: 3,
    subtitle: 'Free Assessment',
    title: 'Calculate Your Hidden Assets',
    description: 'Get a free evaluation of your Chinese debtor portfolio and discover how much you could recover.',
    cta: 'Get Free Assessment',
    ctaLink: '#contact',
    bgGradient: 'from-accent-900 via-primary-900 to-primary-950',
  },
]

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000) // Change slide every 6 seconds

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setIsAutoPlaying(false)
    // Resume auto-play after 10 seconds
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const nextSlide = () => {
    goToSlide((currentSlide + 1) % slides.length)
  }

  const prevSlide = () => {
    goToSlide((currentSlide - 1 + slides.length) % slides.length)
  }

  const scrollToNext = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background carousel */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0"
        >
          {/* Gradient overlay */}
          <div className={cn(
            "absolute inset-0 bg-gradient-to-br",
            slides[currentSlide].bgGradient,
            "animate-gradient"
          )} />
          
          {/* Pattern overlay */}
          <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5" />

          {/* Animated background shapes */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-accent-500/10 to-transparent rounded-full blur-3xl animate-pulse" />
            <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-primary-500/10 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            {/* Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-accent-400 text-lg sm:text-xl font-medium"
            >
              {slides[currentSlide].subtitle}
            </motion.div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extralight text-white">
              {slides[currentSlide].title.split(' ').map((word, i) => (
                <span key={i}>
                  {word}{' '}
                  {i === Math.floor(slides[currentSlide].title.split(' ').length / 2) && <br />}
                </span>
              ))}
            </h1>

            {/* Description */}
            <p className="text-lg sm:text-xl lg:text-2xl text-primary-100 font-light max-w-3xl mx-auto">
              {slides[currentSlide].description}
            </p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="pt-4"
            >
              <a
                href={slides[currentSlide].ctaLink}
                className={cn(
                  "inline-flex items-center gap-2 px-8 py-4 text-lg font-medium rounded-lg transition-all duration-300",
                  "bg-accent-500 text-white hover:bg-accent-600 hover:scale-105",
                  "shadow-lg hover:shadow-xl hover:shadow-accent-500/25"
                )}
              >
                {slides[currentSlide].cta}
                <ChevronRight className="w-5 h-5" />
              </a>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-colors"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-colors"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex items-center gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={cn(
              "relative h-2 rounded-full transition-all duration-300",
              currentSlide === index ? "w-12 bg-accent-400" : "w-2 bg-white/40 hover:bg-white/60"
            )}
            aria-label={`Go to slide ${index + 1}`}
          >
            {currentSlide === index && (
              <motion.div
                className="absolute inset-0 bg-accent-400 rounded-full"
                layoutId="activeSlide"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Progress bars */}
      <div className="absolute bottom-0 left-0 right-0 flex">
        {slides.map((_, index) => (
          <div key={index} className="flex-1 h-1 bg-white/10">
            {currentSlide === index && (
              <motion.div
                className="h-full bg-accent-400"
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 6, ease: 'linear' }}
              />
            )}
          </div>
        ))}
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors"
        aria-label="Scroll to next section"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown size={32} />
        </motion.div>
      </motion.button>
    </section>
  )
}