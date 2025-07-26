'use client'

import { motion } from 'framer-motion'
import { 
  FileSearch,
  Shield,
  Phone,
  DollarSign,
  ArrowRight
} from 'lucide-react'

const steps = [
  {
    icon: FileSearch,
    label: 'Assess',
    location: 'USA',
    color: 'bg-blue-500'
  },
  {
    icon: Shield,
    label: 'Comply',
    location: 'Hong Kong',
    color: 'bg-purple-500'
  },
  {
    icon: Phone,
    label: 'Contact',
    location: 'China',
    color: 'bg-red-500'
  },
  {
    icon: DollarSign,
    label: 'Recover',
    location: 'USA',
    color: 'bg-green-500'
  }
]

export default function SimpleRecoveryFlow() {
  return (
    <section className="py-24 bg-gradient-to-b from-pearl to-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Simple Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-5xl lg:text-6xl text-navy tracking-tight">
            4 Steps. 45 Days. 60% Success.
          </h2>
        </motion.div>

        {/* Visual Flow */}
        <div className="relative">
          {/* Connection Line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 -translate-y-1/2 hidden md:block" />
          <motion.div
            className="absolute top-1/2 left-0 h-1 bg-gold -translate-y-1/2 hidden md:block"
            initial={{ width: 0 }}
            whileInView={{ width: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: "easeOut" }}
          />

          {/* Steps */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 relative">
            {steps.map((step, index) => {
              const Icon = step.icon
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="flex flex-col items-center"
                >
                  {/* Icon Circle */}
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className={`w-24 h-24 ${step.color} rounded-full flex items-center justify-center shadow-xl mb-4 relative z-10 bg-gradient-to-br`}
                  >
                    <Icon className="w-12 h-12 text-white" strokeWidth={1.5} />
                  </motion.div>
                  
                  {/* Step Number */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gold rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {index + 1}
                  </div>
                  
                  {/* Label */}
                  <h3 className="text-xl font-semibold text-navy mb-1">
                    {step.label}
                  </h3>
                  
                  {/* Location */}
                  <p className="text-sm text-steel">
                    {step.location}
                  </p>
                </motion.div>
              )
            })}
          </div>

          {/* Animated Arrow (Mobile) */}
          <div className="flex justify-center mt-8 md:hidden">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.3 + 1 }}
              >
                <ArrowRight className="w-8 h-8 text-gold mx-2" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Visual Summary */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-20 bg-gradient-to-r from-navy to-navy-light rounded-3xl p-12 text-white text-center shadow-2xl"
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="text-6xl font-light">$127K</div>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1.2 }}
            >
              <ArrowRight className="w-12 h-12 text-gold" />
            </motion.div>
            <div className="text-6xl font-light text-gold">$76K</div>
          </div>
          <p className="mt-6 text-xl text-white/80">
            Average recovery from written-off debt
          </p>
        </motion.div>
      </div>
    </section>
  )
}