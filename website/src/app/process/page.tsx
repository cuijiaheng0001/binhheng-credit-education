'use client'

import { motion } from 'framer-motion'
import { FileSearch, CheckSquare, MessageSquare, DollarSign, Clock, ArrowRight } from 'lucide-react'

const timeline = [
  {
    phase: '第一阶段',
    title: '案件评估',
    duration: '24-48小时',
    icon: FileSearch,
    color: 'bg-blue-500',
    steps: [
      {
        title: '文档收集',
        description: '收集债务相关文件、合同、沟通记录',
        time: '2-4小时'
      },
      {
        title: '初步调查',
        description: '债务人背景调查、资产初步定位',
        time: '6-12小时'
      },
      {
        title: '可行性分析',
        description: '评估追回可能性、制定初步策略',
        time: '12-24小时'
      },
      {
        title: '方案报告',
        description: '提供详细评估报告和追收建议',
        time: '24-48小时'
      }
    ]
  },
  {
    phase: '第二阶段',
    title: '合规准备',
    duration: '3-5天',
    icon: CheckSquare,
    color: 'bg-green-500',
    steps: [
      {
        title: '法律审查',
        description: '确认债务合法性、时效性',
        time: '第1天'
      },
      {
        title: '合规文档',
        description: '准备符合两国法律的追收文件',
        time: '第2-3天'
      },
      {
        title: '授权确认',
        description: '签署追收授权协议',
        time: '第3-4天'
      },
      {
        title: '团队部署',
        description: '指定专案团队、制定详细计划',
        time: '第4-5天'
      }
    ]
  },
  {
    phase: '第三阶段',
    title: '追收执行',
    duration: '2-4周',
    icon: MessageSquare,
    color: 'bg-purple-500',
    steps: [
      {
        title: '首次联络',
        description: '通过多渠道尝试联系债务人',
        time: '第1周'
      },
      {
        title: '协商谈判',
        description: '与债务人进行还款协商',
        time: '第2-3周'
      },
      {
        title: '方案制定',
        description: '制定可行的还款计划',
        time: '第3-4周'
      },
      {
        title: '协议签署',
        description: '签署还款协议或和解协议',
        time: '第4周'
      }
    ]
  },
  {
    phase: '第四阶段',
    title: '资金回收',
    duration: '30-90天',
    icon: DollarSign,
    color: 'bg-orange-500',
    steps: [
      {
        title: '支付安排',
        description: '设立安全的跨境支付通道',
        time: '1-3天'
      },
      {
        title: '资金接收',
        description: '监督和确认资金到账',
        time: '根据协议'
      },
      {
        title: '合规转账',
        description: '按照法规要求转账给客户',
        time: '3-5天'
      },
      {
        title: '结案报告',
        description: '提供完整的追收报告和凭证',
        time: '结案后7天'
      }
    ]
  }
]

const successFactors = [
  {
    title: '本地化优势',
    description: '在中国主要城市的团队能够进行面对面沟通',
    impact: '+40%成功率'
  },
  {
    title: '文化理解',
    description: '深谙中国商业文化，采用适当的沟通策略',
    impact: '+25%效率'
  },
  {
    title: '合规操作',
    description: '严格遵守两国法律，避免任何法律风险',
    impact: '0风险'
  },
  {
    title: '技术支持',
    description: '先进的债务人定位和资产调查技术',
    impact: '95%定位率'
  }
]

export default function ProcessPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
              透明高效的追收流程
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              从评估到回收，每一步都清晰可控，确保最佳追收效果
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-8">
          {timeline.map((phase, phaseIndex) => {
            const Icon = phase.icon
            return (
              <motion.div
                key={phaseIndex}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: phaseIndex * 0.1 }}
                className="mb-16"
              >
                {/* Phase Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className={`w-16 h-16 ${phase.color} rounded-full flex items-center justify-center text-white`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">{phase.phase}</p>
                    <h2 className="text-2xl font-semibold text-gray-900">{phase.title}</h2>
                    <p className="text-blue-600 font-medium">预计时间：{phase.duration}</p>
                  </div>
                </div>

                {/* Steps */}
                <div className="ml-8 pl-12 border-l-2 border-gray-200">
                  {phase.steps.map((step, stepIndex) => (
                    <motion.div
                      key={stepIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: stepIndex * 0.05 }}
                      className="relative mb-8"
                    >
                      {/* Step Dot */}
                      <div className="absolute -left-[49px] top-2 w-4 h-4 bg-white border-2 border-gray-400 rounded-full" />
                      
                      <div className="bg-gray-50 p-6 rounded-lg">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
                          <span className="text-sm text-gray-500 flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {step.time}
                          </span>
                        </div>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* Success Factors */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
              成功关键因素
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              我们的独特优势确保高于行业平均水平的追收成功率
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {successFactors.map((factor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {factor.title}
                </h3>
                <p className="text-gray-600 mb-4">{factor.description}</p>
                <p className="text-2xl font-bold text-blue-600">{factor.impact}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Timeline Example */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-12 text-white"
          >
            <h2 className="text-3xl font-light text-center mb-12">
              真实案例时间线
            </h2>
            
            <div className="max-w-4xl mx-auto">
              <h3 className="text-xl font-semibold mb-6">
                案例：美国大学追收中国留学生宿舍欠款 $45,000
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-24 text-right mr-6 text-blue-100">第1天</div>
                  <div className="flex-1 bg-white/10 backdrop-blur rounded-lg p-4">
                    <p>收到案件，开始文档审查和债务人调查</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-24 text-right mr-6 text-blue-100">第3天</div>
                  <div className="flex-1 bg-white/10 backdrop-blur rounded-lg p-4">
                    <p>定位到债务人在深圳的工作单位，确认可追收</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-24 text-right mr-6 text-blue-100">第7天</div>
                  <div className="flex-1 bg-white/10 backdrop-blur rounded-lg p-4">
                    <p>成功联系债务人，开始协商还款方案</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-24 text-right mr-6 text-blue-100">第21天</div>
                  <div className="flex-1 bg-white/10 backdrop-blur rounded-lg p-4">
                    <p>达成分期还款协议，首期款项到账</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-24 text-right mr-6 text-blue-100">第45天</div>
                  <div className="flex-1 bg-white/10 backdrop-blur rounded-lg p-4">
                    <p>全额追回，案件成功结案</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">
            开始您的追收之旅
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            专业团队随时准备为您服务，第一步从免费评估开始
          </p>
          <button className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-lg font-medium">
            <span>获取免费评估</span>
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </div>
      </section>
    </main>
  )
}