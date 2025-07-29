'use client'

import { motion } from 'framer-motion'
import { FileSearch, CheckSquare, MessageSquare, DollarSign, Clock, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import CTASection from '@/components/CTASection'
import { useLanguage } from '@/i18n/client'

const timeline = [
  {
    phase: '第一阶段',
    title: '案件评估',
    duration: '24-48小时',
    icon: FileSearch,
    color: 'from-blue-500 to-blue-600',
    borderColor: 'border-blue-200',
    bgColor: 'bg-blue-50',
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
    color: 'from-green-500 to-green-600',
    borderColor: 'border-green-200',
    bgColor: 'bg-green-50',
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
    color: 'from-purple-500 to-purple-600',
    borderColor: 'border-purple-200',
    bgColor: 'bg-purple-50',
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
    color: 'from-orange-500 to-orange-600',
    borderColor: 'border-orange-200',
    bgColor: 'bg-orange-50',
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
  const { dictionary } = useLanguage()
  
  return (
    <main className="min-h-screen">
      {/* Hero Section - 匹配主页风格 */}
      <section className="relative h-[60vh] min-h-[500px] overflow-hidden bg-black">
        <div className="absolute inset-0">
          <Image
            src="/images/hero/debt-recovery-1.jpg"
            alt="Professional Process"
            fill
            className="object-cover opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
        </div>
        
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-8 lg:px-12 w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-white/90 text-sm font-medium mb-4"
              >
                专业流程
              </motion.p>
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-4xl lg:text-6xl text-white mb-6 font-bold"
              >
                透明高效的追收流程
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-lg text-white/80 leading-relaxed"
              >
                从评估到回收，每一步都清晰可控，确保最佳追收效果
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section - 使用卡片样式 */}
      <section className="py-20 bg-white">
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
                className="mb-20 last:mb-0"
              >
                {/* Phase Header */}
                <div className="flex items-center gap-4 mb-8">
                  <motion.div 
                    className={`w-20 h-20 bg-gradient-to-br ${phase.color} rounded-full flex items-center justify-center text-white shadow-xl group`}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Icon className="w-10 h-10" />
                  </motion.div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1 font-medium">{phase.phase}</p>
                    <h2 className="text-3xl font-bold text-gray-900">{phase.title}</h2>
                    <p className="text-primary-blue font-semibold flex items-center mt-1">
                      <Clock className="w-4 h-4 mr-1" />
                      预计时间：{phase.duration}
                    </p>
                  </div>
                </div>

                {/* Steps */}
                <div className={`ml-10 pl-14 border-l-2 ${phase.borderColor || 'border-gray-200'}`}>
                  {phase.steps.map((step, stepIndex) => (
                    <motion.div
                      key={stepIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: stepIndex * 0.05 }}
                      className="relative mb-8"
                    >
                      
                      <motion.div 
                        className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary-blue/20 group"
                        whileHover={{ y: -2, scale: 1.01 }}
                      >
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary-blue transition-colors">{step.title}</h3>
                          <span className={`text-sm text-gray-500 flex items-center ${phase.bgColor || 'bg-gray-100'} px-3 py-1 rounded-full`}>
                            <Clock className="w-4 h-4 mr-1" />
                            {step.time}
                          </span>
                        </div>
                        <p className="text-gray-600 leading-relaxed">{step.description}</p>
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </section>


      {/* Progress Indicator */}
      <section className="py-20 bg-gradient-to-b from-white to-light-gray">
        <div className="max-w-7xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              每一步都透明可控
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              实时跟踪案件进展，随时了解追收状态
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {timeline.map((phase, index) => {
              const Icon = phase.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all group"
                  whileHover={{ y: -4 }}
                >
                  <div className={`w-12 h-12 bg-gradient-to-br ${phase.color} rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{phase.title}</h3>
                  <p className="text-sm text-gray-600">{phase.duration}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA - 使用统一的CTASection组件 */}
      <CTASection 
        label={dictionary.cta.freeConsultation}
        title="开始您的追收之旅"
        description="专业团队随时准备为您服务，第一步从免费评估开始"
        buttonText="获取免费评估"
        variant="light"
        openModal={true}
      />
    </main>
  )
}