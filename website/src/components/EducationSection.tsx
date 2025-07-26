'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { AlertCircle, TrendingDown, CheckCircle } from 'lucide-react'
import { cn } from '@/lib/utils'

const steps = [
  {
    number: '01',
    title: 'The Misconception',
    description: 'Chinese debtors who return home are unreachable',
    detail: 'Most businesses assume that once a Chinese national returns home, the debt becomes uncollectible. This misconception costs millions annually.',
    icon: AlertCircle,
    color: 'text-red-500',
    bgColor: 'bg-red-50',
  },
  {
    number: '02',
    title: 'The Reality',
    description: '60% of these debts are actually recoverable',
    detail: 'With the right approach and local expertise, the majority of these "written-off" debts can be successfully recovered through non-litigation methods.',
    icon: TrendingDown,
    color: 'text-amber-500',
    bgColor: 'bg-amber-50',
  },
  {
    number: '03',
    title: 'The Solution',
    description: 'A compliant cross-border recovery system',
    detail: 'Our specialized network in Mainland China enables direct, culturally-appropriate negotiation that respects both US and Chinese regulations.',
    icon: CheckCircle,
    color: 'text-green-500',
    bgColor: 'bg-green-50',
  },
]

export default function EducationSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [activeStep, setActiveStep] = useState<number | null>(null)

  return (
    <section ref={ref} className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-light text-gray-900 mb-4">
            Understanding the{' '}
            <span className="font-normal gradient-text">Hidden Problem</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Let's break down why millions in receivables are being unnecessarily written off
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon
            const isActive = activeStep === index

            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                onMouseEnter={() => setActiveStep(index)}
                onMouseLeave={() => setActiveStep(null)}
                className={cn(
                  "relative p-8 rounded-2xl transition-all duration-300 cursor-pointer",
                  "bg-white shadow-lg hover:shadow-xl",
                  isActive && "scale-105"
                )}
              >
                {/* Step number */}
                <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-gray-900 text-white flex items-center justify-center font-light text-2xl">
                  {step.number}
                </div>

                {/* Icon */}
                <div className={cn(
                  "w-16 h-16 rounded-xl flex items-center justify-center mb-6",
                  step.bgColor
                )}>
                  <Icon className={cn("w-8 h-8", step.color)} />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-medium text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-lg text-gray-700 mb-4">
                  {step.description}
                </p>

                {/* Detail - shown on hover */}
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={isActive ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="text-gray-600 pt-4 border-t border-gray-200">
                    {step.detail}
                  </p>
                </motion.div>

                {/* Visual indicator */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform translate-x-full -translate-y-1/2">
                    <svg width="32" height="2" viewBox="0 0 32 2" className="text-gray-300">
                      <line x1="0" y1="1" x2="32" y2="1" stroke="currentColor" strokeDasharray="2 2" />
                    </svg>
                  </div>
                )}
              </motion.div>
            )
          })}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-600 mb-6">
            Ready to recover what you thought was lost?
          </p>
          <button className="px-8 py-4 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors">
            See Our Recovery Process →
          </button>
        </motion.div>
      </div>
    </section>
  )
}