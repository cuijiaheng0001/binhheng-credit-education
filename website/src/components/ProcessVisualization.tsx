'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FileSearch, CheckSquare, MessageSquare, DollarSign, ArrowRight } from 'lucide-react'
import ConsultationModal from './ConsultationModal'
import Link from 'next/link'

const steps = [
  {
    icon: FileSearch,
    title: '案件评估',
    duration: '24-48小时',
    description: '免费评估债务可追回性',
    color: 'blue'
  },
  {
    icon: CheckSquare,
    title: '合规审查',
    duration: '3-5天',
    description: '确保符合中美法律要求',
    color: 'green'
  },
  {
    icon: MessageSquare,
    title: '本地化沟通',
    duration: '2-4周',
    description: '多渠道联系债务人谈判',
    color: 'purple'
  },
  {
    icon: DollarSign,
    title: '资金回收',
    duration: '30-90天',
    description: '安全合规的资金转移',
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

export default function ProcessVisualization() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false)
  
  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            透明高效的追收流程
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            四步专业流程，平均 45-60 天完成追收
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
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm font-medium text-gray-500 mb-3">
                      {step.duration}
                    </p>
                    <p className="text-gray-600">
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
            <div className="inline-flex items-center justify-center w-12 h-12 bg-navy text-white rounded-full mb-3">
              <span className="text-lg font-bold">0</span>
            </div>
            <h4 className="font-bold text-gray-900 mb-2">无前期费用</h4>
            <p className="text-sm text-gray-600">不成功不收费，零风险合作</p>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-navy text-white rounded-full mb-3">
              <span className="text-lg font-bold">24h</span>
            </div>
            <h4 className="font-bold text-gray-900 mb-2">快速响应</h4>
            <p className="text-sm text-gray-600">24小时内提供初步评估</p>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-navy text-white rounded-full mb-3">
              <span className="text-lg font-bold">100%</span>
            </div>
            <h4 className="font-bold text-gray-900 mb-2">合规操作</h4>
            <p className="text-sm text-gray-600">严格遵守中美两国法律</p>
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
              className="px-8 py-3 bg-navy text-white rounded-xl hover:bg-navy-light transition-colors font-medium"
            >
              开始免费评估
            </button>
            <Link
              href="/process"
              className="px-8 py-3 border border-navy text-navy rounded-xl hover:bg-gray-50 transition-colors font-medium no-underline hover:no-underline"
            >
              了解详细流程
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