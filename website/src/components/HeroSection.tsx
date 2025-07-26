'use client'

import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ChevronDown, TrendingUp, Shield, Award } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function HeroSection() {
  const [mounted, setMounted] = useState(false)
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 0.95])
  
  useEffect(() => {
    setMounted(true)
  }, [])

  const scrollToNext = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })
  }

  const stats = [
    { icon: TrendingUp, value: "$2.8M+", label: "Average Recovery" },
    { icon: Shield, value: "99.7%", label: "Success Rate" },
    { icon: Award, value: "15+", label: "Years Experience" },
  ]

  return (
    <motion.section 
      style={{ opacity, scale }}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-navy via-navy to-navy-light"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold/5 via-transparent to-transparent" />
        <motion.div
          animate={{ 
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse' }}
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23CC9A06' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center">
          {/* Prestigious tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-gold/10 backdrop-blur-sm rounded-full">
              <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
              <span className="text-gold font-medium text-sm tracking-wider uppercase">
                Trusted by Fortune 500 Companies
              </span>
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-white mb-8 tracking-tight"
          >
            <span className="block">Unlock Hidden Value in</span>
            <span className="block mt-2">
              Your{' '}
              <span className="relative">
                <span className="relative z-10 gradient-text-authority">Cross-Border</span>
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="absolute bottom-0 left-0 right-0 h-3 bg-gold/20 -z-10"
                />
              </span>
              {' '}Receivables
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-xl sm:text-2xl text-white/80 font-light max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            Expert guidance in recognizing and recovering millions in{' '}
            <span className="text-gold font-medium">incorrectly written-off</span>{' '}
            international education receivables
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <button className="group relative px-10 py-5 bg-gold text-white font-semibold tracking-wide rounded-lg overflow-hidden transition-all duration-300 hover:shadow-gold shadow-xl">
              <span className="relative z-10 text-lg">Start Free Assessment</span>
              <div className="absolute inset-0 bg-gradient-to-r from-gold-dark to-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
            
            <button className="px-10 py-5 bg-white/10 text-white font-medium tracking-wide rounded-lg backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 text-lg">
              View Case Studies
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className="text-center"
              >
                <stat.icon className="w-8 h-8 text-gold mx-auto mb-3" strokeWidth={1.5} />
                <div className="text-3xl font-light text-white mb-1">{stat.value}</div>
                <div className="text-sm text-white/60 uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Elegant scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        onClick={scrollToNext}
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
    </motion.section>
  )
}