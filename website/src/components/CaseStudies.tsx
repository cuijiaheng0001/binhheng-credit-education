'use client'

import { motion } from 'framer-motion'
import { Building2, TrendingUp, Clock, DollarSign, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

const caseStudies = [
  {
    id: 1,
    industry: 'Student Housing',
    client: 'University Plaza Apartments',
    location: 'Boston, MA',
    challenge: '47 Chinese students graduated and left owing rent',
    totalDebt: '$127,000',
    recovered: '$76,200',
    recoveryRate: '60%',
    timeframe: '90 days',
    testimonial: 'We had completely written off these debts. Binhheng not only recovered a significant portion but did so professionally and compliantly.',
    role: 'Regional Manager',
    highlight: 'Zero upfront costs',
  },
  {
    id: 2,
    industry: 'E-commerce',
    client: 'Major Online Marketplace',
    location: 'Seattle, WA',
    challenge: 'Chinese sellers abandoned accounts with outstanding fees',
    totalDebt: '$89,000',
    recovered: '$53,400',
    recoveryRate: '60%',
    timeframe: '60 days',
    testimonial: 'Their understanding of Chinese business culture and payment systems made all the difference in recovering these funds.',
    role: 'Risk Management Director',
    highlight: 'Cross-border expertise',
  },
  {
    id: 3,
    industry: 'Education',
    client: 'Private University',
    location: 'New York, NY',
    challenge: 'International students with unpaid tuition after returning home',
    totalDebt: '$234,000',
    recovered: '$140,400',
    recoveryRate: '60%',
    timeframe: '120 days',
    testimonial: 'Binhheng\'s approach maintained our institution\'s reputation while successfully recovering significant outstanding balances.',
    role: 'CFO',
    highlight: 'Reputation protected',
  },
]

export default function CaseStudies() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-light text-gray-900 mb-4">
            Real Results from{' '}
            <span className="font-normal gradient-text">Real Clients</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how we've helped businesses recover millions in previously written-off debts
          </p>
        </motion.div>

        {/* Case study cards */}
        <div className="grid lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group"
            >
              <div className="h-full bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                {/* Header */}
                <div className="p-8 pb-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <p className="text-sm text-primary-600 font-medium mb-1">
                        {study.industry}
                      </p>
                      <h3 className="text-xl font-semibold text-gray-900">
                        {study.client}
                      </h3>
                      <p className="text-sm text-gray-500">{study.location}</p>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center">
                      <Building2 className="w-6 h-6 text-primary-600" />
                    </div>
                  </div>

                  {/* Challenge */}
                  <p className="text-gray-600 mb-6">
                    {study.challenge}
                  </p>

                  {/* Metrics */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="flex items-center gap-2 text-gray-500 text-sm mb-1">
                        <DollarSign className="w-4 h-4" />
                        Total Debt
                      </div>
                      <p className="text-xl font-semibold text-gray-900">
                        {study.totalDebt}
                      </p>
                    </div>
                    <div className="bg-green-50 rounded-lg p-4">
                      <div className="flex items-center gap-2 text-green-600 text-sm mb-1">
                        <TrendingUp className="w-4 h-4" />
                        Recovered
                      </div>
                      <p className="text-xl font-semibold text-green-600">
                        {study.recovered}
                      </p>
                    </div>
                  </div>

                  {/* Success metrics */}
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 rounded-full bg-accent-100 flex items-center justify-center">
                        <span className="font-bold text-accent-600">
                          {study.recoveryRate}
                        </span>
                      </div>
                      <span className="text-gray-600">Recovery Rate</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-500">
                      <Clock className="w-4 h-4" />
                      {study.timeframe}
                    </div>
                  </div>
                </div>

                {/* Testimonial */}
                <div className="bg-primary-50 p-6 border-t border-primary-100">
                  <p className="text-gray-700 italic mb-3">
                    "{study.testimonial}"
                  </p>
                  <p className="text-sm text-gray-600">
                    — {study.role}
                  </p>
                </div>

                {/* Highlight */}
                <div className="bg-primary-600 text-white p-4 text-center">
                  <p className="font-medium">{study.highlight}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-600 mb-6">
            Ready to turn your written-off debts into recovered revenue?
          </p>
          <button className="inline-flex items-center gap-2 px-8 py-4 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors group">
            Get Your Free Assessment
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  )
}