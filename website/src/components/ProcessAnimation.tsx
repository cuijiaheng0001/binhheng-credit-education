'use client'

import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { FileText, Shield, Search, MessageSquare, DollarSign } from 'lucide-react'
import { cn } from '@/lib/utils'

const processSteps = [
  {
    icon: FileText,
    title: 'Case Submission',
    description: 'Submit your uncollected debts with basic debtor information',
    duration: '24 hours',
  },
  {
    icon: Shield,
    title: 'Compliance Review',
    description: 'We verify all legal requirements and data protection protocols',
    duration: '48 hours',
  },
  {
    icon: Search,
    title: 'Debtor Location',
    description: 'Our team locates debtors in Mainland China using specialized networks',
    duration: '5-7 days',
  },
  {
    icon: MessageSquare,
    title: 'Cultural Negotiation',
    description: 'Native speakers conduct respectful, effective debt negotiations',
    duration: '2-4 weeks',
  },
  {
    icon: DollarSign,
    title: 'Recovery & Remittance',
    description: 'Collected funds are securely transferred to your account',
    duration: '3-5 days',
  },
]

export default function ProcessAnimation() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, margin: '-100px' })
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-50%'])

  return (
    <section ref={containerRef} className="py-24 bg-primary-950 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-light mb-4">
            Our Recovery{' '}
            <span className="font-normal text-accent-400">Process</span>
          </h2>
          <p className="text-xl text-primary-200 max-w-3xl mx-auto">
            A transparent, compliant approach to cross-border debt recovery
          </p>
        </motion.div>

        {/* Process timeline */}
        <div className="relative">
          {/* Progress line */}
          <div className="absolute top-32 left-0 right-0 h-1 bg-primary-800">
            <motion.div
              initial={{ width: '0%' }}
              animate={isInView ? { width: '100%' } : {}}
              transition={{ duration: 2, delay: 0.5, ease: 'easeInOut' }}
              className="h-full bg-gradient-to-r from-accent-400 to-accent-500"
            />
          </div>

          {/* Steps */}
          <motion.div
            style={{ x }}
            className="flex gap-8 pb-8"
          >
            {processSteps.map((step, index) => {
              const Icon = step.icon

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="flex-shrink-0 w-80"
                >
                  {/* Icon container */}
                  <div className="relative mb-8">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                      className={cn(
                        "w-24 h-24 mx-auto rounded-2xl flex items-center justify-center",
                        "bg-gradient-to-br from-primary-800 to-primary-700",
                        "shadow-lg shadow-primary-900/50"
                      )}
                    >
                      <Icon className="w-12 h-12 text-accent-400" />
                    </motion.div>

                    {/* Step number */}
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent-500 rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>

                    {/* Connection dot */}
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : {}}
                      transition={{ duration: 0.3, delay: index * 0.2 + 0.3 }}
                      className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full w-4 h-4 bg-accent-400 rounded-full"
                    />
                  </div>

                  {/* Content */}
                  <div className="text-center">
                    <h3 className="text-xl font-medium mb-2">{step.title}</h3>
                    <p className="text-primary-300 mb-4">{step.description}</p>
                    <div className="inline-flex items-center gap-2 text-sm text-accent-400">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5" />
                        <path d="M8 4V8L10.5 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                      {step.duration}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>

        {/* Total timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="text-center mt-16 pt-16 border-t border-primary-800"
        >
          <p className="text-lg text-primary-300 mb-2">Average Total Recovery Time</p>
          <p className="text-4xl font-light text-accent-400">45-60 Days</p>
        </motion.div>
      </div>
    </section>
  )
}