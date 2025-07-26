'use client'

import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function HeroSection() {
  const scrollToNext = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800 animate-gradient" />
      
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extralight text-white mb-6"
        >
          Your Hidden{' '}
          <span className="font-normal bg-gradient-to-r from-accent-400 to-accent-500 bg-clip-text text-transparent">
            Debt Problem
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-xl sm:text-2xl text-primary-100 font-light max-w-3xl mx-auto mb-12"
        >
          Millions in receivables are incorrectly written off every year.
          <br />
          We help you recognize and recover them.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button className={cn(
            "px-8 py-4 text-lg font-medium rounded-lg transition-all duration-300",
            "bg-accent-500 text-white hover:bg-accent-600 hover:scale-105",
            "shadow-lg hover:shadow-xl hover:shadow-accent-500/25"
          )}>
            Discover Your Risk →
          </button>
          
          <button className={cn(
            "px-8 py-4 text-lg font-medium rounded-lg transition-all duration-300",
            "bg-white/10 text-white backdrop-blur-sm border border-white/20",
            "hover:bg-white/20 hover:scale-105"
          )}>
            Learn How It Works
          </button>
        </motion.div>
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