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
    color: 'from-red-500 to-red-600',
    iconColor: 'text-red-500',
  },
  {
    number: '02', 
    title: 'The Reality',
    description: '60% of these debts are actually recoverable',
    detail: 'With the right approach and local expertise, the majority of these "written-off" debts can be successfully recovered through non-litigation methods.',
    icon: TrendingDown,
    color: 'from-amber-500 to-amber-600',
    iconColor: 'text-amber-500',
  },
  {
    number: '03',
    title: 'The Solution',
    description: 'A compliant cross-border recovery system',
    detail: 'Our specialized network in Mainland China enables direct, culturally-appropriate negotiation that respects both US and Chinese regulations.',
    icon: CheckCircle,
    color: 'from-green-500 to-green-600',
    iconColor: 'text-green-500',
  },
]

export default function EducationSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [activeStep, setActiveStep] = useState<number | null>(null)

  return (
    <section ref={ref} className="py-10 bg-gradient-to-b from-white to-pearl">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-gold font-medium text-sm tracking-wider uppercase">
            The Truth Revealed
          </span>
          <h2 className="mt-4 font-display text-5xl lg:text-6xl text-navy tracking-tight">
            Understanding the Hidden Problem
          </h2>
          <p className="mt-6 text-xl text-steel max-w-3xl mx-auto leading-relaxed">
            Why millions in receivables are being unnecessarily written off
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
                transition={{ duration: 0.8, delay: index * 0.2 }}
                onMouseEnter={() => setActiveStep(index)}
                onMouseLeave={() => setActiveStep(null)}
                className="group relative"
              >
                <div className="relative h-full bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
                  {/* Background Gradient on Hover */}
                  <div className={cn(
                    "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-500",
                    step.color
                  )} />

                  <div className="relative p-8">
                    {/* Step number */}
                    <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br from-navy to-navy-light rounded-full flex items-center justify-center text-white">
                      <span className="font-display text-3xl font-light">{step.number}</span>
                    </div>

                    {/* Icon */}
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className={cn(
                        "w-16 h-16 rounded-2xl bg-gradient-to-br flex items-center justify-center mb-6 shadow-lg",
                        step.color
                      )}
                    >
                      <Icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                    </motion.div>

                    {/* Content */}
                    <h3 className="font-display text-2xl text-navy mb-3">
                      {step.title}
                    </h3>
                    <p className="text-lg text-steel font-medium mb-4">
                      {step.description}
                    </p>

                    {/* Detail - shown on hover */}
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={isActive ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4 border-t border-gray-200">
                        <p className="text-steel leading-relaxed">
                          {step.detail}
                        </p>
                      </div>
                    </motion.div>

                    {/* Bottom accent */}
                    <div className={cn(
                      "absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500",
                      step.color
                    )} />
                  </div>
                </div>

                {/* Visual connector */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform translate-x-full -translate-y-1/2 z-10">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.5 + index * 0.2 }}
                    >
                      <svg width="32" height="2" viewBox="0 0 32 2">
                        <line x1="0" y1="1" x2="32" y2="1" stroke="#CC9A06" strokeWidth="2" strokeDasharray="4 4" />
                      </svg>
                    </motion.div>
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
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-20"
        >
          <p className="text-xl text-steel mb-8">
            Ready to recover what you thought was lost?
          </p>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group relative px-8 py-4 bg-gold text-white font-semibold tracking-wide rounded-lg overflow-hidden transition-all duration-300 hover:shadow-gold shadow-xl"
          >
            <span className="relative z-10">See Our Recovery Process</span>
            <div className="absolute inset-0 bg-gradient-to-r from-gold-dark to-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}