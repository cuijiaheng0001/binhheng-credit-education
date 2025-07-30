'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { BookOpen, Scale, Globe, CheckCircle, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useRef } from 'react'
import Image from 'next/image'

const services = [
  {
    icon: BookOpen,
    title: 'Education Receivables Analysis',
    subtitle: 'Unlock Hidden Value',
    description: 'Comprehensive evaluation of international student accounts to identify recoverable assets',
    features: [
      'Multi-jurisdiction compliance review',
      'Hidden asset identification',
      'Recovery potential assessment',
      'Risk mitigation strategies'
    ],
    highlight: 'Average $2.8M recovered per institution',
    stats: { number: '87%', label: 'Success Rate' },
    image: '/images/services/assessment.jpg',
    color: 'from-blue-50 to-indigo-50',
    accentColor: 'text-blue-600'
  },
  {
    icon: Scale,
    title: 'Legal Framework Navigation',
    subtitle: 'Compliant Recovery',
    description: 'Expert guidance through complex international education finance regulations',
    features: [
      'Cross-border legal compliance',
      'Regulatory risk assessment',
      'Documentation optimization',
      'Dispute resolution support'
    ],
    highlight: '15+ years specialized experience',
    stats: { number: '100%', label: 'Compliance' },
    image: '/images/services/recovery.jpg',
    color: 'from-purple-50 to-pink-50',
    accentColor: 'text-purple-600'
  },
  {
    icon: Globe,
    title: 'Global Recovery Network',
    subtitle: 'Worldwide Reach',
    description: 'Established partnerships across major education markets worldwide',
    features: [
      'Multi-country operations',
      'Local expertise access',
      'Cultural sensitivity protocols',
      'Real-time market intelligence'
    ],
    highlight: '50+ countries covered',
    stats: { number: '24/7', label: 'Global Support' },
    image: '/images/services/resolution.jpg',
    color: 'from-green-50 to-emerald-50',
    accentColor: 'text-green-600'
  }
]

export default function ServiceShowcase() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })
  
  // Move transforms outside of map to follow hooks rules
  const yOffset = useTransform(scrollYProgress, [0, 1], [50, -50])
  const xOffset = useTransform(scrollYProgress, [0, 1], [-100, 100])

  return (
    <section id="services" ref={containerRef} className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 lg:px-12">
        {/* Section Header - Asymmetric */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-32"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-end">
            <div>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: '80px' }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="h-[1px] bg-gray-300 mb-8"
              />
              <h2 className="font-display text-5xl lg:text-7xl text-gray-900 font-light tracking-tight leading-[0.9]">
                Expert<br/>
                <span className="text-3xl lg:text-5xl text-gray-700">Solutions</span>
              </h2>
            </div>
            <div className="lg:pb-4">
              <p className="text-xl text-gray-700 leading-relaxed">
                Three decades of specialized expertise in cross-border debt recovery. 
                We transform written-off international accounts into recovered revenue.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Services - Varied Layouts */}
        <div className="space-y-32">
          {services.map((service, index) => {
            const Icon = service.icon
            
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                {/* Layout 1: Large Image Left */}
                {index === 0 && (
                  <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Image Side */}
                    <motion.div 
                      style={{ y: yOffset }}
                      className="relative h-[600px] overflow-hidden rounded-lg"
                    >
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-20`} />
                      
                      {/* Floating Stat */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="absolute top-8 left-8 bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg"
                      >
                        <p className={`text-4xl font-display font-light ${service.accentColor}`}>
                          {service.stats.number}
                        </p>
                        <p className="text-sm text-gray-600 mt-1">{service.stats.label}</p>
                      </motion.div>
                    </motion.div>

                    {/* Content Side */}
                    <div className="lg:pl-8">
                      <Icon className={`w-16 h-16 ${service.accentColor} mb-8`} strokeWidth={1} />
                      
                      <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="font-display text-4xl lg:text-5xl text-gray-900 font-light mb-2"
                      >
                        {service.title}
                      </motion.h3>
                      
                      <p className={`text-lg ${service.accentColor} mb-6`}>
                        {service.subtitle}
                      </p>
                      
                      <p className="text-xl text-gray-600 mb-12 leading-relaxed">
                        {service.description}
                      </p>

                      {/* Features Grid */}
                      <div className="grid grid-cols-2 gap-6 mb-12">
                        {service.features.map((feature, idx) => (
                          <motion.div
                            key={feature}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 + idx * 0.1 }}
                            className="flex items-start gap-3"
                          >
                            <div className={`w-1 h-1 ${service.accentColor.replace('text', 'bg')} rounded-full mt-2`} />
                            <span className="text-sm text-gray-600 leading-relaxed">{feature}</span>
                          </motion.div>
                        ))}
                      </div>

                      {/* Highlight Box */}
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        className={`inline-block bg-gradient-to-r ${service.color} p-6 rounded-lg`}
                      >
                        <p className="text-2xl font-display font-light text-gray-900">
                          {service.highlight}
                        </p>
                      </motion.div>
                    </div>
                  </div>
                )}

                {/* Layout 2: Split Card Design */}
                {index === 1 && (
                  <div className="relative">
                    {/* Background Pattern */}
                    <motion.div 
                      style={{ x: xOffset }}
                      className="absolute -top-20 -right-20 w-96 h-96 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full opacity-20 blur-3xl"
                    />
                    
                    <div className="grid lg:grid-cols-3 gap-0 overflow-hidden rounded-2xl shadow-2xl">
                      {/* Content Section */}
                      <div className="lg:col-span-2 bg-white p-16">
                        <Icon className={`w-20 h-20 ${service.accentColor} mb-8`} strokeWidth={0.8} />
                        
                        <h3 className="font-display text-5xl text-gray-900 font-light mb-4">
                          {service.title}
                        </h3>
                        
                        <p className={`text-2xl ${service.accentColor} mb-8 font-light`}>
                          {service.subtitle}
                        </p>
                        
                        <p className="text-lg text-gray-600 mb-12 leading-relaxed max-w-xl">
                          {service.description}
                        </p>

                        {/* Feature List with Progress Bars */}
                        <div className="space-y-6 mb-12">
                          {service.features.map((feature, idx) => (
                            <motion.div
                              key={feature}
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.1 + idx * 0.1 }}
                            >
                              <p className="text-sm text-gray-700 mb-2">{feature}</p>
                              <div className="h-1 bg-gray-100 rounded-full overflow-hidden">
                                <motion.div
                                  initial={{ width: 0 }}
                                  whileInView={{ width: '100%' }}
                                  viewport={{ once: true }}
                                  transition={{ duration: 1, delay: 0.3 + idx * 0.1 }}
                                  className={`h-full bg-gradient-to-r ${service.color.replace('50', '400')}`}
                                />
                              </div>
                            </motion.div>
                          ))}
                        </div>

                        {/* CTA */}
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className={`px-8 py-4 ${service.accentColor.replace('text', 'bg')} text-white font-light tracking-widest text-sm uppercase`}
                        >
                          Learn More
                        </motion.button>
                      </div>

                      {/* Image Section with Overlay */}
                      <div className="relative">
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          className="object-cover"
                        />
                        <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-30`} />
                        
                        {/* Overlay Stats */}
                        <div className="absolute inset-0 flex flex-col justify-end p-8">
                          <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg">
                            <p className={`text-5xl font-display font-light ${service.accentColor}`}>
                              {service.stats.number}
                            </p>
                            <p className="text-gray-700 mt-2">{service.stats.label}</p>
                            <div className="mt-4 pt-4 border-t border-gray-200">
                              <p className="text-lg font-light text-gray-900">
                                {service.highlight}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Layout 3: Minimal with Large Typography */}
                {index === 2 && (
                  <div className="relative">
                    <div className="grid lg:grid-cols-2 gap-24 items-center">
                      {/* Typography Focus */}
                      <div>
                        <motion.div
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          className="mb-12"
                        >
                          <Icon className={`w-24 h-24 ${service.accentColor} opacity-20`} strokeWidth={0.5} />
                        </motion.div>
                        
                        <h3 className="font-display text-7xl lg:text-8xl text-gray-900 font-light leading-[0.9] mb-8">
                          {service.title.split(' ').map((word, idx) => (
                            <motion.span
                              key={idx}
                              initial={{ opacity: 0, y: 50 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: idx * 0.1 }}
                              className="block"
                            >
                              {word}
                            </motion.span>
                          ))}
                        </h3>
                        
                        <motion.p
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 }}
                          className={`text-3xl ${service.accentColor} font-light mb-12`}
                        >
                          {service.subtitle}
                        </motion.p>

                        {/* Minimal Stats */}
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.4 }}
                          className="inline-block"
                        >
                          <div className="flex items-baseline gap-4 mb-2">
                            <span className="text-8xl font-display font-light text-gray-900">
                              {service.stats.number}
                            </span>
                            <span className="text-2xl text-gray-600">
                              {service.stats.label}
                            </span>
                          </div>
                          <div className="h-1 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full" />
                        </motion.div>
                      </div>

                      {/* Content Grid */}
                      <div>
                        <p className="text-2xl text-gray-600 mb-16 leading-relaxed font-light">
                          {service.description}
                        </p>

                        {/* Feature Cards */}
                        <div className="grid grid-cols-2 gap-6">
                          {service.features.map((feature, idx) => (
                            <motion.div
                              key={feature}
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.1 + idx * 0.1 }}
                              whileHover={{ y: -5 }}
                              className={`p-6 bg-gradient-to-br ${service.color} rounded-lg border border-gray-100`}
                            >
                              <p className="text-gray-700 font-light">{feature}</p>
                            </motion.div>
                          ))}
                        </div>

                        {/* Bottom Highlight */}
                        <motion.div
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.6 }}
                          className="mt-12 p-8 bg-gray-900 text-white rounded-lg"
                        >
                          <p className="text-2xl font-display font-light">
                            {service.highlight}
                          </p>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            )
          })}
        </div>

        {/* Bottom CTA - Different from other sections */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-32 relative"
        >
          <div className="bg-gray-900 rounded-2xl overflow-hidden">
            <div className="grid lg:grid-cols-2">
              <div className="p-16 lg:p-20">
                <h3 className="font-display text-4xl lg:text-5xl text-white font-light mb-6">
                  Ready to recover your hidden assets?
                </h3>
                <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                  Join hundreds of institutions that have discovered millions in recoverable revenue.
                </p>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-12 py-4 bg-white text-gray-900 font-light tracking-widest text-sm uppercase"
                >
                  Start Assessment
                </motion.button>
              </div>
              <div className="relative h-full min-h-[400px] lg:min-h-0">
                <Image
                  src="/images/services/process.jpg"
                  alt="Success"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-transparent to-gray-900/50" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}