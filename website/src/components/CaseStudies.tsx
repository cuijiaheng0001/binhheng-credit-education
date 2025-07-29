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
    misconception: 'Believed Chinese students who returned home couldn\'t be reached',
    challenge: '47 Chinese students graduated and left owing rent',
    totalDebt: '$127,000',
    recovered: '$76,200',
    recoveryRate: '60%',
    timeframe: '90 days',
    testimonial: 'We had written these off completely, thinking it was impossible to collect once students returned to China. Bingheng showed us we were wrong – they recovered 60% of what we thought was lost forever.',
    transformation: 'From "impossible to collect" to "$76,200 recovered"',
    role: 'Regional Manager',
    highlight: 'Thought it was impossible',
  },
  {
    id: 2,
    industry: 'E-commerce',
    client: 'Major Online Marketplace',
    location: 'Seattle, WA',
    misconception: 'Assumed sellers in China were untraceable after account abandonment',
    challenge: 'Chinese sellers abandoned accounts with outstanding fees',
    totalDebt: '$89,000',
    recovered: '$53,400',
    recoveryRate: '60%',
    timeframe: '60 days',
    testimonial: 'Our finance team had given up on these accounts. We didn\'t know recovery was even possible until Bingheng educated us on the real possibilities. Now we refer all international cases to them.',
    transformation: 'From "given up" to "regular recovery process"',
    role: 'Risk Management Director',
    highlight: 'Didn\'t know it was possible',
  },
  {
    id: 3,
    industry: 'Education',
    client: 'Private University',
    location: 'New York, NY',
    misconception: 'Feared aggressive collection would damage institution\'s reputation in China',
    challenge: 'International students with unpaid tuition after returning home',
    totalDebt: '$234,000',
    recovered: '$140,400',
    recoveryRate: '60%',
    timeframe: '120 days',
    testimonial: 'We were writing off $500K+ annually from Chinese students, thinking collection attempts would harm our reputation. Bingheng\'s culturally sensitive approach proved we could recover funds while maintaining positive relationships.',
    transformation: 'From "$500K annual write-offs" to "systematic recovery"',
    role: 'CFO',
    highlight: 'Protected our reputation',
  },
]

export default function CaseStudies() {
  return (
    <section className="py-10 bg-gradient-to-b from-white to-gray-50">
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
            From Misconception to{' '}
            <span className="font-normal gradient-text">Recovery Success</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            How businesses discovered they were wrong about "uncollectable" international debts
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

                  {/* Misconception */}
                  <div className="bg-red-50 rounded-lg p-4 mb-4">
                    <p className="text-sm font-medium text-red-700 mb-1">Initial Misconception:</p>
                    <p className="text-red-600 italic">"{study.misconception}"</p>
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

                {/* Transformation */}
                <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white p-6">
                  <p className="text-sm font-medium mb-2 text-primary-100">The Transformation:</p>
                  <p className="font-semibold text-lg">{study.transformation}</p>
                  <p className="text-sm mt-3 text-primary-100">{study.highlight}</p>
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