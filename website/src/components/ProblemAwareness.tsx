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
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
            为什么大多数公司失败
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
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
                className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-red-50 rounded-lg mb-6">
                  <Icon className="w-6 h-6 text-red-600" />
                </div>
                <div className="text-3xl font-semibold text-gray-900 mb-2">
                  {problem.value}
                </div>
                <div className="text-lg font-medium text-gray-800 mb-3">
                  {problem.label}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
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