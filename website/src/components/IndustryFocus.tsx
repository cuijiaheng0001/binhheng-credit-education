'use client'

import { motion } from 'framer-motion'
import { Home, ShoppingCart, Building2, ArrowRight } from 'lucide-react'

const industries = [
  {
    icon: Home,
    title: '学生住宿',
    subtitle: 'Student Housing',
    stats: '$15M+',
    description: '专门处理留学生租房违约和损害赔偿',
    challenges: ['学生毕业回国', '家长联系困难', '小额多笔债务'],
    successRate: '65%'
  },
  {
    icon: ShoppingCart,
    title: '电商平台',
    subtitle: 'E-commerce',
    stats: '$8M+',
    description: '追收跨境电商卖家欠款和保证金',
    challenges: ['卖家失联', '平台纠纷', '跨境结算'],
    successRate: '58%'
  },
  {
    icon: Building2,
    title: '国际贸易',
    subtitle: 'B2B Trade',
    stats: '$45M+',
    description: 'B2B贸易欠款和合同违约追收',
    challenges: ['合同纠纷', '质量争议', '长期拖欠'],
    successRate: '72%'
  }
]

export default function IndustryFocus() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
            深耕细分行业
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            针对不同行业特点，提供定制化解决方案
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => {
            const Icon = industry.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="bg-gray-50 rounded-lg p-8 h-full hover:bg-white hover:shadow-lg transition-all duration-300">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <div className="flex items-center justify-center w-12 h-12 bg-white rounded-lg mb-4 group-hover:bg-blue-50 transition-colors">
                        <Icon className="w-6 h-6 text-gray-700 group-hover:text-blue-600 transition-colors" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900">
                        {industry.title}
                      </h3>
                      <p className="text-sm text-gray-500">{industry.subtitle}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-blue-600">{industry.stats}</p>
                      <p className="text-xs text-gray-500">已追回</p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 mb-6">
                    {industry.description}
                  </p>

                  {/* Challenges */}
                  <div className="mb-6">
                    <p className="text-sm font-medium text-gray-700 mb-2">主要挑战：</p>
                    <div className="flex flex-wrap gap-2">
                      {industry.challenges.map((challenge, idx) => (
                        <span
                          key={idx}
                          className="text-xs px-2 py-1 bg-gray-200 text-gray-600 rounded"
                        >
                          {challenge}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Success Rate */}
                  <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                    <div>
                      <p className="text-sm text-gray-500">成功率</p>
                      <p className="text-lg font-semibold text-gray-900">{industry.successRate}</p>
                    </div>
                    <button className="flex items-center text-blue-600 hover:text-blue-700 transition-colors">
                      <span className="text-sm font-medium">了解更多</span>
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </button>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}