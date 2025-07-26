'use client'

import { motion } from 'framer-motion'
import { BookOpen, Scale, Globe, CheckCircle, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

const services = [
  {
    icon: BookOpen,
    title: 'Education Receivables Analysis',
    description: 'Comprehensive evaluation of international student accounts to identify recoverable assets',
    features: [
      'Multi-jurisdiction compliance review',
      'Hidden asset identification',
      'Recovery potential assessment',
      'Risk mitigation strategies'
    ],
    highlight: 'Average $2.8M recovered per institution'
  },
  {
    icon: Scale,
    title: 'Legal Framework Navigation',
    description: 'Expert guidance through complex international education finance regulations',
    features: [
      'Cross-border legal compliance',
      'Regulatory risk assessment',
      'Documentation optimization',
      'Dispute resolution support'
    ],
    highlight: '15+ years specialized experience'
  },
  {
    icon: Globe,
    title: 'Global Recovery Network',
    description: 'Established partnerships across major education markets worldwide',
    features: [
      'Multi-country operations',
      'Local expertise access',
      'Cultural sensitivity protocols',
      'Real-time market intelligence'
    ],
    highlight: '50+ countries covered'
  }
]

export default function ServiceShowcase() {
  return (
    <section className="py-32 bg-gray-50">
      <div className="max-w-6xl mx-auto px-8 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <h2 className="font-display text-4xl lg:text-5xl text-gray-900 font-light tracking-tight">
            Our Expertise
          </h2>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed font-light">
            Specialized solutions for cross-border debt recovery
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group relative"
            >
              <div className="bg-white p-10 h-full hover:shadow-xl transition-all duration-500 flex flex-col border border-gray-100">
                {/* Icon */}
                <div className="mb-8">
                  <service.icon className="w-12 h-12 text-gray-400" strokeWidth={1} />
                </div>

                {/* Content */}
                <h3 className="font-display text-2xl text-gray-900 mb-4 font-light">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-8 leading-relaxed flex-grow">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2" />
                      <span className="text-sm text-gray-600 leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Highlight */}
                <div className="pt-6 border-t border-gray-200">
                  <p className="text-lg font-display font-light text-gray-900">
                    {service.highlight}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}