'use client'

import { motion } from 'framer-motion'
import { AlertCircle, TrendingDown, Users, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

const problems = [
  {
    icon: AlertCircle,
    stat: '87%',
    title: 'of institutions write off Chinese debts unnecessarily',
    description: 'Most companies assume these debts are uncollectable once debtors return home',
    color: 'text-red-500',
    bgColor: 'bg-red-50'
  },
  {
    icon: TrendingDown,
    stat: '$450M+',
    title: 'in recoverable debts written off annually',
    description: 'Hidden value that could be recovered with proper expertise and approach',
    color: 'text-amber-500',
    bgColor: 'bg-amber-50'
  },
  {
    icon: Users,
    stat: '60%',
    title: 'of "lost" debts can actually be recovered',
    description: 'With specialized cross-border expertise and compliant recovery methods',
    color: 'text-green-500',
    bgColor: 'bg-green-50'
  }
]

export default function ProblemRevealSection() {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-6xl mx-auto px-8 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          {/* Decorative line */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '64px' }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="h-[1px] bg-gray-300 mx-auto mb-8"
          />
          <h2 className="font-display text-4xl lg:text-5xl text-gray-900 font-light tracking-tight mb-4">
            The Hidden Truth
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '64px' }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            className="h-[1px] bg-gray-300 mx-auto"
          />
        </motion.div>

        {/* Problem Cards */}
        <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
          {problems.map((problem, index) => {
            const Icon = problem.icon
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group"
              >
                <div className="text-center group">
                  {/* Stat with hover effect */}
                  <motion.div 
                    className="mb-6"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="text-6xl font-display font-light text-gray-900 group-hover:text-gray-700 transition-colors duration-500">{problem.stat}</span>
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-lg font-light text-gray-700 mb-4 leading-relaxed">
                    {problem.title}
                  </h3>

                  {/* Animated Divider */}
                  <motion.div 
                    className="w-16 h-[1px] bg-gray-300 mx-auto mb-4 origin-center"
                    initial={{ scaleX: 0.5 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.1 + 0.5 }}
                  />

                  {/* Description */}
                  <p className="text-gray-500 leading-relaxed text-sm max-w-xs mx-auto">
                    {problem.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Simple CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-24"
        >
          <p className="text-gray-600 mb-8 font-light">
            Don't write off another dollar without understanding your options.
          </p>
          <button className="inline-flex items-center gap-3 px-10 py-4 border border-gray-900 text-gray-900 font-light tracking-wide hover:bg-gray-900 hover:text-white transition-all duration-500">
            <span>Discover Your Hidden Assets</span>
            <ArrowRight className="w-4 h-4" strokeWidth={1} />
          </button>
        </motion.div>
      </div>
    </section>
  )
}