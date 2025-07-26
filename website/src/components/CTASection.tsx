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

          {/* Decorative element */}
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: '48px' } : {}}
            transition={{ duration: 1 }}
            className="h-[1px] bg-white/30 mx-auto mb-8"
          />
          
          {/* Heading */}
          <motion.h2 
            className="font-display text-4xl lg:text-5xl font-light mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Ready to Begin?
          </motion.h2>

          {/* Description */}
          <motion.p 
            className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto font-light leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Discover the hidden value in your written-off international debts.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.button 
              whileHover={{ scale: 1.02, backgroundColor: '#f3f4f6' }}
              whileTap={{ scale: 0.98 }}
              className="group relative px-12 py-4 bg-white text-gray-900 font-light tracking-widest text-sm uppercase overflow-hidden transition-all duration-700"
            >
              <span className="relative z-10">Schedule Consultation</span>
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
              className="px-12 py-4 text-white font-light tracking-widest text-sm uppercase border border-white/40 hover:border-white/80 hover:bg-white/5 transition-all duration-700"
            >
              Learn More
            </motion.button>
          </motion.div>

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