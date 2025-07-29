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
    <section className="py-10 bg-gradient-to-b from-pearl to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-gold font-medium text-sm tracking-wider uppercase">
            Industry Solutions
          </span>
          <h2 className="mt-4 font-display text-5xl lg:text-6xl text-navy tracking-tight">
            Tailored Solutions for Every Industry
          </h2>
          <p className="mt-6 text-xl text-steel max-w-3xl mx-auto leading-relaxed">
            We understand the unique challenges each industry faces with Chinese debtor recovery
          </p>
        </motion.div>

        {/* Tab navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {services.map((service) => {
            const Icon = service.icon
            const isActive = activeTab === service.id

            return (
              <motion.button
                key={service.id}
                onClick={() => setActiveTab(service.id)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={cn(
                  "flex items-center gap-3 px-6 py-4 rounded-lg transition-all duration-300",
                  isActive
                    ? "bg-navy text-white shadow-xl"
                    : "bg-white text-steel shadow-md hover:shadow-lg hover:text-navy"
                )}
              >
                <Icon className="w-5 h-5" strokeWidth={1.5} />
                <span className="font-semibold tracking-wide">{service.title}</span>
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
            <div className="space-y-8">
              <div>
                <h3 className="font-display text-4xl text-navy mb-4">
                  {activeService.subtitle}
                </h3>
                <p className="text-lg text-steel leading-relaxed">
                  {activeService.description}
                </p>
              </div>

              {/* Features */}
              <div className="space-y-4">
                {activeService.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center flex-shrink-0 mt-0.5 shadow-lg">
                      <div className="w-3 h-3 rounded-full bg-white" />
                    </div>
                    <span className="text-steel text-lg">{feature}</span>
                  </motion.div>
                ))}
              </div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="bg-gradient-to-r from-navy to-navy-light rounded-2xl p-8 shadow-xl"
              >
                <p className="text-sm text-white/80 mb-2 uppercase tracking-wider">{activeService.stats.label}</p>
                <p className="font-display text-4xl text-gold">{activeService.stats.value}</p>
              </motion.div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gold text-white font-semibold tracking-wide rounded-lg overflow-hidden transition-all duration-300 hover:shadow-gold shadow-xl"
                >
                  <span className="relative z-10">{activeService.cta}</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" strokeWidth={2} />
                  <div className="absolute inset-0 bg-gradient-to-r from-gold-dark to-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.button>
              </motion.div>
            </div>

            {/* Right content - Image placeholder */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="relative h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light to-gold/20" />
              <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white p-12">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="inline-block"
                  >
                    <activeService.icon className="w-32 h-32 mx-auto mb-6 text-gold/50" strokeWidth={1} />
                  </motion.div>
                  <p className="font-display text-2xl font-light text-white/80">Professional Service Visualization</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}