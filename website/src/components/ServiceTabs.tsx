'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { Building2, ShoppingCart, GraduationCap, Briefcase, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import Image from 'next/image'

const services = [
  {
    id: 'apartment',
    icon: Building2,
    title: 'Property Management',
    subtitle: 'Solutions for Student Housing',
    description: 'Every graduation season, Chinese students leave owing rent. We help you recover these systematically written-off debts.',
    features: [
      'Average recovery: $3,000-5,000 per case',
      'Success rate: 65% for student debts',
      'No upfront costs - success-based fees',
    ],
    cta: 'Calculate Your Recovery',
    stats: {
      label: 'Annual losses in student housing',
      value: '$150M+',
    },
  },
  {
    id: 'ecommerce',
    icon: ShoppingCart,
    title: 'E-commerce Platforms',
    subtitle: 'Seller Debt Recovery',
    description: 'Chinese sellers who abandon accounts often leave substantial debts. Our system reaches them where traditional methods fail.',
    features: [
      'Platform fee recovery',
      'Seller deposit retrieval',
      'Cross-border chargebacks',
    ],
    cta: 'Assess Your Portfolio',
    stats: {
      label: 'E-commerce debt exposure',
      value: '$500M+',
    },
  },
  {
    id: 'education',
    icon: GraduationCap,
    title: 'Educational Institutions',
    subtitle: 'Tuition & Fee Collection',
    description: 'International students who return home with unpaid balances. We provide culturally appropriate recovery solutions.',
    features: [
      'Tuition recovery',
      'Housing & meal plan debts',
      'Library & parking fines',
    ],
    cta: 'Review Your Cases',
    stats: {
      label: 'Education sector losses',
      value: '$200M+',
    },
  },
  {
    id: 'b2b',
    icon: Briefcase,
    title: 'B2B Trade',
    subtitle: 'Commercial Debt Solutions',
    description: 'When Chinese business partners default and disappear, we leverage our mainland network for effective recovery.',
    features: [
      'Supplier payment recovery',
      'Contract breach resolution',
      'Trade credit collection',
    ],
    cta: 'Get Expert Help',
    stats: {
      label: 'B2B cross-border exposure',
      value: '$1B+',
    },
  },
]

export default function ServiceTabs() {
  const [activeTab, setActiveTab] = useState('apartment')
  const activeService = services.find(s => s.id === activeTab)!

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-light text-gray-900 mb-4">
            Tailored Solutions for{' '}
            <span className="font-normal gradient-text">Every Industry</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We understand the unique challenges each industry faces with Chinese debtor recovery
          </p>
        </motion.div>

        {/* Tab navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {services.map((service) => {
            const Icon = service.icon
            const isActive = activeTab === service.id

            return (
              <motion.button
                key={service.id}
                onClick={() => setActiveTab(service.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={cn(
                  "flex items-center gap-3 px-6 py-4 rounded-xl transition-all duration-300",
                  "border-2",
                  isActive
                    ? "bg-primary-600 text-white border-primary-600 shadow-lg"
                    : "bg-white text-gray-700 border-gray-200 hover:border-primary-300"
                )}
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{service.title}</span>
              </motion.button>
            )
          })}
        </div>

        {/* Tab content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            {/* Left content */}
            <div className="space-y-6">
              <div>
                <h3 className="text-3xl font-medium text-gray-900 mb-2">
                  {activeService.subtitle}
                </h3>
                <p className="text-lg text-gray-600">
                  {activeService.description}
                </p>
              </div>

              {/* Features */}
              <div className="space-y-3">
                {activeService.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-green-500" />
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </motion.div>
                ))}
              </div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-xl p-6"
              >
                <p className="text-sm text-gray-600 mb-1">{activeService.stats.label}</p>
                <p className="text-3xl font-bold gradient-text">{activeService.stats.value}</p>
              </motion.div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <button className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors group">
                  {activeService.cta}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            </div>

            {/* Right content - Image placeholder */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary-600 to-accent-600" />
              <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white p-8">
                  <activeService.icon className="w-24 h-24 mx-auto mb-4 opacity-50" />
                  <p className="text-xl font-light">Professional Service Visualization</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}