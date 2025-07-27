'use client'

import { motion } from 'framer-motion'
import { AlertTriangle, TrendingDown, Clock } from 'lucide-react'

const problems = [
  {
    icon: AlertTriangle,
    value: '87%',
    label: '的美国机构过早注销中国债务',
    description: '大多数公司错误地认为债务人回国后就无法追回'
  },
  {
    icon: TrendingDown,
    value: '$4.5亿+',
    label: '每年被错误注销的可追回债务',
    description: '通过专业方法和渠道可以追回的隐藏价值'
  },
  {
    icon: Clock,
    value: '60%',
    label: '的"失联"债务实际可追回',
    description: '运用跨境专业知识和合规追收方法的成功率'
  }
]

export default function ProblemAwareness() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium text-accent-red mb-4">问题揭示</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            为什么大多数公司失败
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            揭示跨境债务追收中被忽视的真相
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => {
            const Icon = problem.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 group"
              >
                <div className="flex items-center justify-center w-14 h-14 bg-red-50 rounded-xl mb-6 group-hover:bg-red-100 transition-colors">
                  <Icon className="w-7 h-7 text-red-600" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-3 group-hover:text-primary-blue transition-colors">
                  {problem.value}
                </div>
                <div className="text-lg font-semibold text-gray-800 mb-3">
                  {problem.label}
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {problem.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}