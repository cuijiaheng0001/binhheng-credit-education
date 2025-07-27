'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import { ChevronLeft, ChevronRight, TrendingUp, Shield, Award, Globe, ChevronDown } from 'lucide-react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

const slides = [
  {
    id: 1,
    title: '',
    subtitle: '',
    description: '',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1920&q=80',
    stats: { value: '', label: '' }
  },
  {
    id: 2,
    title: '',
    subtitle: '',
    description: '',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1920&q=80',
    stats: { value: '', label: '' }
  },
  {
    id: 3,
    title: '',
    subtitle: '',
    description: '',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=80',
    stats: { value: '', label: '' }
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
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />
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
                  className="mb-8"
                >
                  <span className="text-white/60 font-light text-xs tracking-[0.4em] uppercase">
                    
                  </span>
                </motion.div>


                {/* Title */}
                <motion.h1
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="font-display text-4xl lg:text-6xl text-white mb-8 leading-[1.1] font-light"
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
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="group relative px-12 py-4 bg-white text-gray-900 font-light tracking-widest text-sm uppercase overflow-hidden transition-all duration-700"
                  >
                    <span className="relative z-10"></span>
                    <motion.div
                      className="absolute inset-0 bg-gray-100"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.5, ease: 'easeInOut' }}
                    />
                  </motion.button>
                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-12 py-4 text-white font-light tracking-widest text-sm uppercase border border-white/40 hover:border-white/80 transition-all duration-700 backdrop-blur-sm"
                  >
                    
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