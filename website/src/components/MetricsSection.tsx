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
    <span ref={ref} className="tabular-nums">
      {prefix}{displayValue.toFixed(value % 1 !== 0 ? 1 : 0)}{suffix}
    </span>
  )
}

export default function MetricsSection() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, margin: '-100px' })

  return (
    <section ref={containerRef} className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-light text-gray-900 mb-4">
            Proven{' '}
            <span className="font-normal gradient-text">Results</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real numbers from real recoveries
          </p>
        </motion.div>

        {/* Metrics grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              {/* Value */}
              <div className="mb-4">
                <span className="text-5xl sm:text-6xl font-light text-gray-900">
                  <AnimatedNumber
                    value={metric.value}
                    prefix={metric.prefix}
                    suffix={metric.suffix}
                  />
                </span>
              </div>

              {/* Label */}
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                {metric.label}
              </h3>

              {/* Description */}
              <p className="text-gray-600">
                {metric.description}
              </p>

              {/* Decorative element */}
              <motion.div
                initial={{ width: 0 }}
                animate={isInView ? { width: '100%' } : {}}
                transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                className="h-1 bg-gradient-to-r from-primary-400 to-accent-400 rounded-full mt-6 mx-auto max-w-[100px]"
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-2 text-primary-600 font-medium">
            <span>Verified by independent audit</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  )
}