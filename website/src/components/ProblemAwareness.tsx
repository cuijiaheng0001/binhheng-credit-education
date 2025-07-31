'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { AlertTriangle, TrendingDown, Clock, ArrowRight } from 'lucide-react'
import ConsultationModal from './ConsultationModal'
import { type Locale } from '@/i18n/config'

const problems = [
  {
    icon: AlertTriangle,
    value: '87%',
    label: {
      zh: '的美国机构过早注销中国债务',
      en: 'of US institutions prematurely write-off Chinese debts'
    },
    description: {
      zh: '当中国债务人返回中国后，一般催收公司无法追踪和联系',
      en: 'When Chinese debtors return to China, general collection agencies cannot track or contact them'
    }
  },
  {
    icon: TrendingDown,
    value: {
      zh: '$4.5亿+',
      en: '$450M+'
    },
    label: {
      zh: '每年被错误注销的中国债务人债务',
      en: 'in Chinese debtor debt incorrectly written off annually'
    },
    description: {
      zh: 'Bingheng Credit 是唯一专注于此类债务的专业催收公司',
      en: 'Bingheng Credit is the only professional collection company focused on these debts'
    }
  },
  {
    icon: Clock,
    value: '60%',
    label: {
      zh: '的中国债务人债务实际可追回',
      en: 'of Chinese debtor debt is actually recoverable'
    },
    description: {
      zh: '通过本地化沟通和中国法律体系知识实现高效追收',
      en: 'Achieved through localized communication and knowledge of the Chinese legal system'
    }
  }
]

interface ProblemAwarenessProps {
  locale?: Locale
}

export default function ProblemAwareness({ locale = 'zh' }: ProblemAwarenessProps) {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false)
  
  return (
    <>
    <section className="py-14 bg-light-gray">
      <div className="max-w-4xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium text-navy mb-4 opacity-70">中国债务人问题</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            一般国际催收公司无法有效处理中国债务人
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto opacity-80">
            因债务人返回中国而被误判为"不可回收"的债务其实可以追回
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {problems.map((problem, index) => {
            const Icon = problem.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-red-50 rounded-lg mb-4 group-hover:bg-red-100 transition-colors">
                  <Icon className="w-6 h-6 text-red-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2 group-hover:text-navy transition-colors">
                  {problem.value}
                </div>
                <div className="text-base font-semibold text-gray-800 mb-2">
                  {problem.label}
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {problem.description}
                </p>
              </motion.div>
            )
          })}
        </div>
        
        {/* Bottom CTA Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.button
            onClick={() => setIsConsultationOpen(true)}
            className="inline-flex items-center px-6 py-3 bg-navy text-white font-semibold rounded-lg hover:bg-navy-light transition-all duration-300 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            了解如何避免这些损失
            <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
          </motion.button>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-8 flex flex-wrap justify-center items-center gap-8 text-sm text-gray-600"
          >
            <div>无前期费用</div>
            <div className="w-1 h-1 bg-current rounded-full opacity-40" />
            <div>24小时响应</div>
            <div className="w-1 h-1 bg-current rounded-full opacity-40" />
            <div>100%合规</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
    
    {/* Consultation Modal */}
    <ConsultationModal 
      isOpen={isConsultationOpen} 
      onClose={() => setIsConsultationOpen(false)} 
    />
    </>
  )
}