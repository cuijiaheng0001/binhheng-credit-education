'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight, Calendar } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function CTASection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="py-32 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >

          {/* Heading */}
          <h2 className="font-display text-4xl lg:text-5xl font-light mb-8">
            Ready to Begin?
          </h2>

          {/* Description */}
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            Discover the hidden value in your written-off international debts.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="px-10 py-4 bg-white text-gray-900 font-light tracking-wide hover:bg-gray-100 transition-all duration-500">
              Schedule a Consultation
            </button>

            <button className="px-10 py-4 text-white font-light tracking-wide border border-white/30 hover:bg-white/10 transition-all duration-500">
              Learn More
            </button>
          </div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 flex flex-wrap justify-center items-center gap-8 text-sm text-gray-500 font-light tracking-wider"
          >
            <div>No upfront costs</div>
            <div className="w-1 h-1 bg-gray-600 rounded-full" />
            <div>24-hour response</div>
            <div className="w-1 h-1 bg-gray-600 rounded-full" />
            <div>100% compliant</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}