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
    <section className="py-24 bg-gradient-to-b from-white to-pearl">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl lg:text-5xl text-navy tracking-tight mb-6">
            Are You Losing Millions Without Realizing?
          </h2>
          <p className="text-xl text-steel max-w-3xl mx-auto leading-relaxed">
            The truth about cross-border debt recovery that most institutions don't know
          </p>
        </motion.div>

        {/* Problem Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
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
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
                  {/* Icon */}
                  <div className={cn(
                    "w-16 h-16 rounded-2xl flex items-center justify-center mb-6",
                    problem.bgColor
                  )}>
                    <Icon className={cn("w-8 h-8", problem.color)} strokeWidth={1.5} />
                  </div>

                  {/* Stat */}
                  <div className="mb-4">
                    <span className="text-4xl font-light text-navy">{problem.stat}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-medium text-navy mb-3">
                    {problem.title}
                  </h3>

                  {/* Description */}
                  <p className="text-steel leading-relaxed">
                    {problem.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center bg-gradient-to-r from-navy to-navy-light rounded-2xl p-12 text-white"
        >
          <h3 className="text-2xl font-medium mb-4">
            The Hidden Truth: Your "uncollectable" international debts might be recoverable
          </h3>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Our specialized expertise in Chinese culture, language, and legal systems makes the impossible possible. 
            Don't write off another dollar without understanding your options.
          </p>
          <button className="group inline-flex items-center gap-3 px-8 py-4 bg-gold text-white font-semibold rounded-lg hover:bg-gold-dark transition-all duration-300 shadow-xl hover:shadow-2xl">
            <span>See How Much You Could Recover</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" strokeWidth={2} />
          </button>
        </motion.div>
      </div>
    </section>
  )
}