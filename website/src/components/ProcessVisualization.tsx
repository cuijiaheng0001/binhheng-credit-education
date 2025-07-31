'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FileSearch, CheckSquare, MessageSquare, DollarSign, ArrowRight } from 'lucide-react'
import ConsultationModal from './ConsultationModal'
import Link from 'next/link'
import { type Locale } from '@/i18n/config'

const getSteps = (locale: Locale) => [
  {
    icon: FileSearch,
    title: locale === 'zh' ? '案件评估' : 'Case Assessment',
    duration: locale === 'zh' ? '24-48小时' : '24-48 hours',
    description: locale === 'zh' ? '免费评估债务可追回性' : 'Complimentary evaluation of debt recoverability',
    color: 'blue'
  },
  {
    icon: CheckSquare,
    title: locale === 'zh' ? '合规审查' : 'Compliance Review',
    duration: locale === 'zh' ? '3-5天' : '3-5 days',
    description: locale === 'zh' ? '确保符合中美法律要求' : 'Full US-China regulatory compliance verification',
    color: 'green'
  },
  {
    icon: MessageSquare,
    title: locale === 'zh' ? '本地化沟通' : 'Local Engagement',
    duration: locale === 'zh' ? '2-4周' : '2-4 weeks',
    description: locale === 'zh' ? '多渠道联系债务人谈判' : 'Strategic multi-channel debtor negotiation',
    color: 'purple'
  },
  {
    icon: DollarSign,
    title: locale === 'zh' ? '资金回收' : 'Funds Recovery',
    duration: locale === 'zh' ? '30-90天' : '30-90 days',
    description: locale === 'zh' ? '安全合规的资金转移' : 'Secure, compliant international fund transfer',
    color: 'orange'
  }
]

const colorVariants = {
  blue: {
    bg: 'bg-blue-50',
    icon: 'bg-blue-100 text-blue-600',
    arrow: 'text-blue-600'
  },
  green: {
    bg: 'bg-green-50',
    icon: 'bg-green-100 text-green-600',
    arrow: 'text-green-600'
  },
  purple: {
    bg: 'bg-purple-50',
    icon: 'bg-purple-100 text-purple-600',
    arrow: 'text-purple-600'
  },
  orange: {
    bg: 'bg-orange-50',
    icon: 'bg-orange-100 text-orange-600',
    arrow: 'text-orange-600'
  }
}

interface ProcessVisualizationProps {
  locale?: Locale
}

export default function ProcessVisualization({ locale = 'zh' }: ProcessVisualizationProps) {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false)
  const steps = getSteps(locale)
  
  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {locale === 'zh' ? '透明高效的追收流程' : 'Transparent & Efficient Recovery Process'}
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
            {locale === 'zh' ? '四步专业流程，平均 45-60 天完成追收' : 'Professional 4-step process • Average completion: 45-60 days'}
          </p>
        </motion.div>

        {/* Process Steps - Horizontal Layout */}
        <div className="relative">
          {/* Connection Line for Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-20 right-20 h-0.5 bg-gradient-to-r from-blue-200 via-purple-200 to-orange-200 -translate-y-1/2" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4 relative">
            {steps.map((step, index) => {
              const Icon = step.icon
              const colors = colorVariants[step.color as keyof typeof colorVariants]
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  <div className={`${colors.bg} rounded-2xl p-6 h-full hover:shadow-lg transition-all duration-300 relative group`}>
                    {/* Step Number */}
                    <div className="absolute -top-3 -left-3 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center">
                      <span className="text-lg font-bold text-gray-900">{index + 1}</span>
                    </div>
                    
                    {/* Icon */}
                    <div className={`inline-flex items-center justify-center w-16 h-16 ${colors.icon} rounded-2xl mb-4 group-hover:scale-110 transition-transform`}>
                      <Icon className="w-8 h-8" />
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm md:text-base font-medium text-gray-500 mb-3">
                      {step.duration}
                    </p>
                    <p className="text-sm md:text-base text-gray-600">
                      {step.description}
                    </p>
                    
                    {/* Arrow to Next Step (Desktop Only) */}
                    {index < steps.length - 1 && (
                      <div className="hidden lg:block absolute top-1/2 -right-10 -translate-y-1/2">
                        <ArrowRight className={`w-8 h-8 ${colors.arrow} opacity-40`} />
                      </div>
                    )}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Key Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid md:grid-cols-3 gap-6"
        >
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 md:w-14 md:h-14 bg-navy text-white rounded-full mb-3 overflow-hidden relative">
              <span className="text-lg md:text-base font-bold">0</span>
            </div>
            <h4 className="text-base md:text-lg font-bold text-gray-900 mb-2">{locale === 'zh' ? '无前期费用' : 'Zero Upfront Costs'}</h4>
            <p className="text-sm md:text-base text-gray-600">{locale === 'zh' ? '不成功不收费，零风险合作' : 'Contingency-based: We only get paid when you do'}</p>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 md:w-14 md:h-14 bg-navy text-white rounded-full mb-3 overflow-hidden relative">
              <span className="text-base md:text-sm font-bold">24h</span>
            </div>
            <h4 className="text-base md:text-lg font-bold text-gray-900 mb-2">{locale === 'zh' ? '快速响应' : 'Rapid Response'}</h4>
            <p className="text-sm md:text-base text-gray-600">{locale === 'zh' ? '24小时内提供初步评估' : 'Initial case review within 24 hours'}</p>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 md:w-14 md:h-14 bg-navy text-white rounded-full mb-3 overflow-hidden relative">
              <span className="text-2xl md:text-xl font-bold">100%</span>
            </div>
            <h4 className="text-base md:text-lg font-bold text-gray-900 mb-2">{locale === 'zh' ? '合规操作' : 'Full Compliance'}</h4>
            <p className="text-sm md:text-base text-gray-600">{locale === 'zh' ? '严格遵守中美两国法律' : 'Complete adherence to US & Chinese regulations'}</p>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={() => setIsConsultationOpen(true)}
              className="px-8 py-4 bg-navy text-white rounded-xl hover:bg-navy-light transition-colors font-medium min-h-[52px] whitespace-nowrap"
            >
              {locale === 'zh' ? '开始免费评估' : 'Start Free Assessment'}
            </button>
            <Link
              href={`/${locale}/process`}
              className="px-8 py-4 border border-navy text-navy rounded-xl hover:bg-gray-50 transition-colors font-medium no-underline hover:no-underline min-h-[52px] whitespace-nowrap flex items-center"
            >
              {locale === 'zh' ? '了解详细流程' : 'View Detailed Process'}
            </Link>
          </div>
        </motion.div>
      </div>
      
      {/* Consultation Modal */}
      <ConsultationModal 
        isOpen={isConsultationOpen} 
        onClose={() => setIsConsultationOpen(false)} 
      />
    </section>
  )
}