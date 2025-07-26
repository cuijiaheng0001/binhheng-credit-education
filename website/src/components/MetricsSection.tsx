'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

const metrics = [
  {
    value: 2.3,
    suffix: 'M+',
    prefix: '$',
    label: 'Recovered in 2024',
    description: 'Total debt recovered for our clients',
  },
  {
    value: 60,
    suffix: '%',
    prefix: '',
    label: 'Average Recovery Rate',
    description: 'Success rate on submitted cases',
  },
  {
    value: 45,
    suffix: '',
    prefix: '',
    label: 'Days Average Timeline',
    description: 'From submission to recovery',
  },
  {
    value: 0,
    suffix: '',
    prefix: '',
    label: 'Upfront Costs',
    description: 'Success-based fees only',
  },
]

function AnimatedNumber({ value, prefix, suffix }: { value: number; prefix: string; suffix: string }) {
  const [displayValue, setDisplayValue] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  useEffect(() => {
    if (!isInView) return

    const duration = 2000 // 2 seconds
    const steps = 60
    const stepDuration = duration / steps
    const increment = value / steps

    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setDisplayValue(value)
        clearInterval(timer)
      } else {
        setDisplayValue(current)
      }
    }, stepDuration)

    return () => clearInterval(timer)
  }, [isInView, value])

  return (
    <span ref={ref} className="tabular-nums tracking-tight">
      {prefix}{displayValue.toFixed(value % 1 !== 0 ? 1 : 0)}{suffix}
    </span>
  )
}

export default function MetricsSection() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, margin: '-100px' })

  return (
    <section ref={containerRef} className="py-24 bg-gradient-to-b from-pearl to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-gold font-medium text-sm tracking-wider uppercase">
            Proven Results
          </span>
          <h2 className="mt-4 font-display text-5xl lg:text-6xl text-navy tracking-tight">
            Real Numbers from Real Recoveries
          </h2>
          <p className="mt-6 text-xl text-steel max-w-3xl mx-auto leading-relaxed">
            Verified results from our cross-border recovery operations
          </p>
        </motion.div>

        {/* Metrics grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="group relative text-center"
            >
              {/* Card background */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                {/* Background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl" />
                
                {/* Value */}
                <div className="mb-4 relative z-10">
                  <span className="font-display text-6xl lg:text-7xl text-navy">
                    <AnimatedNumber
                      value={metric.value}
                      prefix={metric.prefix}
                      suffix={metric.suffix}
                    />
                  </span>
                </div>

                {/* Label */}
                <h3 className="font-display text-xl text-navy mb-3 relative z-10">
                  {metric.label}
                </h3>

                {/* Description */}
                <p className="text-steel leading-relaxed relative z-10">
                  {metric.description}
                </p>

                {/* Decorative element */}
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: '100%' } : {}}
                  transition={{ duration: 1, delay: index * 0.15 + 0.5 }}
                  className="h-1 bg-gradient-to-r from-gold to-gold-dark rounded-full mt-6 mx-auto max-w-[100px]"
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-20"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-3 text-gold font-medium tracking-wider uppercase"
          >
            <span>Verified by independent audit</span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}