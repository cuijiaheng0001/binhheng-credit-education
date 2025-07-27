'use client'

import { motion } from 'framer-motion'
import { AlertTriangle, TrendingDown, Clock, ArrowRight } from 'lucide-react'

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
    <section className="py-20 bg-light-gray">
      <div className="max-w-4xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium text-primary-blue mb-4 opacity-70">行业洞察</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            您知道吗？大多数企业正在损失数百万美元
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto opacity-80">
            跨境债务追收的三大误区正在侵蚀您的利润
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
                <div className="text-3xl font-bold text-gray-900 mb-2 group-hover:text-primary-blue transition-colors">
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
          <motion.a
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-primary-blue text-white font-semibold rounded-lg hover:bg-secondary-blue transition-colors shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            了解如何避免这些损失
            <ArrowRight className="w-5 h-5 ml-2" />
          </motion.a>
          
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
  )
}