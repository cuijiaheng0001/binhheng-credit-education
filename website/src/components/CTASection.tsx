'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight, Calendar } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function CTASection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="py-24 bg-gradient-to-br from-primary-950 to-primary-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-accent-500/20 border border-accent-500/30 rounded-full text-accent-400 text-sm font-medium mb-8"
          >
            <span className="w-2 h-2 bg-accent-400 rounded-full animate-pulse" />
            Limited Time: Free Risk Assessment
          </motion.div>

          {/* Heading */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light mb-6">
            Ready to Recover Your{' '}
            <span className="font-normal text-accent-400">Hidden Receivables?</span>
          </h2>

          {/* Description */}
          <p className="text-xl text-primary-200 mb-12 max-w-2xl mx-auto">
            Join hundreds of companies who discovered millions in recoverable debt they thought was lost forever.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={cn(
                "group px-8 py-4 text-lg font-medium rounded-lg transition-all duration-300",
                "bg-accent-500 text-white hover:bg-accent-600",
                "shadow-lg hover:shadow-xl hover:shadow-accent-500/25",
                "flex items-center gap-2"
              )}
            >
              <Calendar className="w-5 h-5" />
              Schedule a Consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={cn(
                "px-8 py-4 text-lg font-medium rounded-lg transition-all duration-300",
                "bg-white/10 text-white backdrop-blur-sm border border-white/20",
                "hover:bg-white/20",
                "flex items-center gap-2"
              )}
            >
              Submit Cases for Review
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 flex flex-wrap justify-center items-center gap-6 text-sm text-primary-300"
          >
            <div className="flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 1L10.163 5.326L15 6.003L11.5 9.603L12.326 14.5L8 12.163L3.674 14.5L4.5 9.603L1 6.003L5.837 5.326L8 1Z" fill="currentColor" />
              </svg>
              No upfront costs
            </div>
            <div className="flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 1L10.163 5.326L15 6.003L11.5 9.603L12.326 14.5L8 12.163L3.674 14.5L4.5 9.603L1 6.003L5.837 5.326L8 1Z" fill="currentColor" />
              </svg>
              24-hour response
            </div>
            <div className="flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 1L10.163 5.326L15 6.003L11.5 9.603L12.326 14.5L8 12.163L3.674 14.5L4.5 9.603L1 6.003L5.837 5.326L8 1Z" fill="currentColor" />
              </svg>
              100% compliant
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}