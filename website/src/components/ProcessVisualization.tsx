'use client'

import { motion } from 'framer-motion'
import { FileSearch, CheckSquare, MessageSquare, DollarSign } from 'lucide-react'

const steps = [
  {
    icon: FileSearch,
    title: '案件评估',
    duration: '24-48小时',
    description: '免费评估债务可追回性和策略制定',
    details: ['文档审查', '债务人背景调查', '资产定位初评']
  },
  {
    icon: CheckSquare,
    title: '合规审查',
    duration: '3-5天',
    description: '确保所有操作符合中美两国法律要求',
    details: ['法律框架确认', '文档准备', '合规策略制定']
  },
  {
    icon: MessageSquare,
    title: '本地化沟通',
    duration: '2-4周',
    description: '通过多渠道与债务人建立有效联系',
    details: ['多渠道联络', '文化适应性沟通', '和解谈判']
  },
  {
    icon: DollarSign,
    title: '资金回收',
    duration: '30-90天',
    description: '安全合规的资金转移和结算',
    details: ['支付安排', '跨境转账', '完整报告']
  }
]

export default function ProcessVisualization() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
            透明高效的追收流程
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            从评估到回收，每一步都清晰可控
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection Line */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 hidden lg:block" />
          
          <div className="grid lg:grid-cols-4 gap-8 relative">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    {/* Step Number */}
                    <div className="absolute -top-3 -right-3 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                      {index + 1}
                    </div>
                    
                    {/* Icon */}
                    <div className="flex items-center justify-center w-12 h-12 bg-blue-50 rounded-lg mb-4">
                      <Icon className="w-6 h-6 text-blue-600" />
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      {step.title}
                    </h3>
                    <p className="text-sm text-blue-600 mb-3">{step.duration}</p>
                    <p className="text-gray-600 text-sm mb-4">{step.description}</p>
                    
                    {/* Details */}
                    <ul className="space-y-1">
                      {step.details.map((detail, idx) => (
                        <li key={idx} className="text-xs text-gray-500 flex items-center">
                          <span className="w-1 h-1 bg-gray-400 rounded-full mr-2" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 mb-6">
            平均回收时间：<span className="font-semibold text-gray-900">45-60天</span>
          </p>
          <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            开始免费评估
          </button>
        </motion.div>
      </div>
    </section>
  )
}