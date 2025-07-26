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
          <span className="text-gold font-medium text-sm tracking-wider uppercase">
            Our Expertise
          </span>
          <h2 className="mt-4 font-display text-5xl lg:text-6xl text-navy tracking-tight">
            Specialized Financial Recovery Services
          </h2>
          <p className="mt-6 text-xl text-steel max-w-3xl mx-auto leading-relaxed">
            We combine deep industry knowledge with proven methodologies to unlock 
            value in complex cross-border education receivables
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group relative"
            >
              <div className="card-elevated p-8 h-full bg-white hover:bg-gradient-to-br hover:from-white hover:to-pearl/50 transition-all duration-500">
                {/* Icon */}
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gold/10 rounded-2xl blur-xl group-hover:bg-gold/20 transition-colors" />
                  <div className="relative w-16 h-16 bg-gradient-to-br from-gold to-gold-dark rounded-2xl flex items-center justify-center shadow-gold/30 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                  </div>
                </div>

                {/* Content */}
                <h3 className="font-display text-2xl text-navy mb-4">
                  {service.title}
                </h3>
                <p className="text-steel mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                      <span className="text-sm text-steel">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Highlight */}
                <div className="pt-6 border-t border-gray-100">
                  <p className="text-sm font-semibold text-gold">
                    {service.highlight}
                  </p>
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-gold/20 transition-colors pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="text-lg text-steel mb-6">
            Ready to unlock the hidden value in your receivables?
          </p>
          <button className="group inline-flex items-center gap-3 px-8 py-4 bg-navy text-white font-semibold rounded-lg hover:bg-navy-light transition-all duration-300 shadow-xl hover:shadow-2xl">
            <span>Schedule Expert Consultation</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" strokeWidth={2} />
          </button>
        </motion.div>
      </div>
    </section>
  )
}