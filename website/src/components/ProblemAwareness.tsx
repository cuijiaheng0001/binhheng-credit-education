'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { AlertCircle, TrendingDown, DollarSign, ArrowRight, BarChart3 } from 'lucide-react'
import { CircularProgress, AnimatedNumber } from './DataVisualization'

const problemData = {
  title: '您知道吗？大多数企业正在损失数百万美元',
  subtitle: '跨境债务追收的三大误区正在侵蚀您的利润',
  problems: [
    {
      id: 'writeoff',
      icon: AlertCircle,
      value: '87%',
      label: '过早注销率',
      shortDesc: '的企业过早放弃追收',
      fullDesc: '87%的美国企业在债务人回国后立即注销债务，认为无法追回。事实上，通过正确的渠道和方法，这些债务大部分都可以成功追回。',
      impact: '平均损失：$2.3M/年',
      color: 'red'
    },
    {
      id: 'value',
      icon: DollarSign,
      value: '$450M',
      label: '年度损失',
      shortDesc: '被错误注销的可追回资金',
      fullDesc: '仅在美国，每年有超过4.5亿美元的中国相关债务被错误注销。这些资金本可以通过专业的跨境追收服务成功回收。',
      impact: '行业损失：逐年增长23%',
      color: 'orange'
    },
    {
      id: 'recovery',
      icon: BarChart3,
      value: '60%',
      label: '潜在追回率',
      shortDesc: '专业追收的成功率',
      fullDesc: '通过专业的跨境债务追收服务，60%以上的"失联"债务可以成功追回。而传统方式的成功率仅为5-15%。',
      impact: '投资回报率：12:1',
      color: 'green'
    }
  ]
}

export default function ProblemAwareness() {
  const [activeCard, setActiveCard] = useState<string | null>(null)

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200 }}
            className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-6"
          >
            <AlertCircle className="w-8 h-8 text-red-600" />
          </motion.div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {problemData.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {problemData.subtitle}
          </p>
        </motion.div>

        {/* Problem Cards with Interactive Design */}
        <div className="grid lg:grid-cols-3 gap-6 mb-16">
          {problemData.problems.map((problem, index) => {
            const Icon = problem.icon
            const isActive = activeCard === problem.id
            const colors = {
              red: {
                bg: 'bg-red-50',
                hover: 'hover:bg-red-100',
                text: 'text-red-600',
                border: 'border-red-200'
              },
              orange: {
                bg: 'bg-orange-50',
                hover: 'hover:bg-orange-100',
                text: 'text-orange-600',
                border: 'border-orange-200'
              },
              green: {
                bg: 'bg-green-50',
                hover: 'hover:bg-green-100',
                text: 'text-green-600',
                border: 'border-green-200'
              }
            }
            const colorScheme = colors[problem.color as keyof typeof colors]

            return (
              <motion.div
                key={problem.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onMouseEnter={() => setActiveCard(problem.id)}
                onMouseLeave={() => setActiveCard(null)}
                className={`
                  relative bg-white rounded-xl border-2 ${isActive ? colorScheme.border : 'border-gray-200'}
                  transition-all duration-300 cursor-pointer overflow-hidden
                  ${isActive ? 'shadow-xl transform -translate-y-2' : 'shadow-md hover:shadow-lg'}
                `}
              >
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
                  <Icon className="w-full h-full" />
                </div>

                <div className="relative p-8">
                  {/* Icon */}
                  <div className={`
                    inline-flex items-center justify-center w-14 h-14 rounded-xl mb-6
                    ${colorScheme.bg} ${colorScheme.hover} transition-colors
                  `}>
                    <Icon className={`w-7 h-7 ${colorScheme.text}`} />
                  </div>

                  {/* Main Value with Visualization */}
                  <div className="mb-4">
                    {problem.id === 'writeoff' || problem.id === 'recovery' ? (
                      <div className="flex items-center gap-6">
                        <CircularProgress 
                          percentage={parseInt(problem.value)} 
                          color={problem.color === 'red' ? '#dc2626' : '#16a34a'}
                          delay={index * 200}
                        />
                        <div>
                          <motion.div className="text-5xl font-bold text-gray-900">
                            <AnimatedNumber 
                              value={parseInt(problem.value)} 
                              suffix="%"
                              delay={index * 200}
                            />
                          </motion.div>
                          <h3 className="text-xl font-semibold text-gray-800">
                            {problem.label}
                          </h3>
                        </div>
                      </div>
                    ) : (
                      <div>
                        <motion.div
                          className="text-5xl font-bold text-gray-900 mb-2"
                          animate={{ scale: isActive ? 1.05 : 1 }}
                          transition={{ duration: 0.2 }}
                        >
                          <AnimatedNumber 
                            value={450} 
                            prefix="$"
                            suffix="M"
                            delay={index * 200}
                          />
                        </motion.div>
                        <h3 className="text-xl font-semibold text-gray-800">
                          {problem.label}
                        </h3>
                      </div>
                    )}
                  </div>

                  {/* Description */}
                  <motion.div
                    animate={{ height: isActive ? 'auto' : '48px' }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="text-gray-600 mb-4">
                      {isActive ? problem.fullDesc : problem.shortDesc}
                    </p>
                    
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className={`
                          inline-flex items-center px-4 py-2 rounded-full text-sm font-medium
                          ${colorScheme.bg} ${colorScheme.text}
                        `}
                      >
                        {problem.impact}
                      </motion.div>
                    )}
                  </motion.div>

                  {/* Hover Indicator */}
                  <motion.div
                    className="absolute bottom-4 right-4"
                    animate={{ opacity: isActive ? 1 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ArrowRight className={`w-5 h-5 ${colorScheme.text}`} />
                  </motion.div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Data Summary Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900 mb-2">
              <AnimatedNumber value={2300000} prefix="$" suffix="" delay={600} />
            </div>
            <p className="text-gray-600">平均年度损失</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900 mb-2">
              <AnimatedNumber value={12} suffix=":1" delay={800} />
            </div>
            <p className="text-gray-600">投资回报率</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900 mb-2">
              <AnimatedNumber value={23} suffix="%" delay={1000} />
            </div>
            <p className="text-gray-600">年增长率</p>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8 text-center"
        >
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            不要成为统计数字的一部分
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            了解如何通过专业的跨境债务追收服务，将这些"损失"转化为实际的现金流
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-8 py-3 bg-primary-blue text-white font-semibold rounded-lg hover:bg-secondary-blue transition-colors"
          >
            获取免费债务评估
            <ArrowRight className="w-5 h-5 ml-2" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}