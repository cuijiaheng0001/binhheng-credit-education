'use client'

import { motion } from 'framer-motion'
import { FileSearch, CheckSquare, MessageSquare, DollarSign, Clock, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import CTASection from '@/components/CTASection'

const getTimeline = (locale: string) => [
  {
    phase: locale === 'zh' ? '第一阶段' : 'Phase 1',
    title: locale === 'zh' ? '案件评估' : 'Case Assessment',
    duration: locale === 'zh' ? '24-48小时' : '24-48 hours',
    icon: FileSearch,
    color: 'from-blue-500 to-blue-600',
    borderColor: 'border-blue-200',
    bgColor: 'bg-blue-50',
    steps: [
      {
        title: locale === 'zh' ? '文档收集' : 'Document Collection',
        description: locale === 'zh' ? '收集债务相关文件、合同、沟通记录' : 'Gather debt-related documents, contracts, and communication records',
        time: locale === 'zh' ? '2-4小时' : '2-4 hours'
      },
      {
        title: locale === 'zh' ? '初步调查' : 'Preliminary Investigation',
        description: locale === 'zh' ? '债务人背景调查、资产初步定位' : 'Debtor background check and initial asset location',
        time: locale === 'zh' ? '6-12小时' : '6-12 hours'
      },
      {
        title: locale === 'zh' ? '可行性分析' : 'Feasibility Analysis',
        description: locale === 'zh' ? '评估追回可能性、制定初步策略' : 'Assess recovery probability and develop initial strategy',
        time: locale === 'zh' ? '12-24小时' : '12-24 hours'
      },
      {
        title: locale === 'zh' ? '方案报告' : 'Solution Report',
        description: locale === 'zh' ? '提供详细评估报告和追收建议' : 'Provide detailed assessment report and recovery recommendations',
        time: locale === 'zh' ? '24-48小时' : '24-48 hours'
      }
    ]
  },
  {
    phase: locale === 'zh' ? '第二阶段' : 'Phase 2',
    title: locale === 'zh' ? '合规准备' : 'Compliance Preparation',
    duration: locale === 'zh' ? '3-5天' : '3-5 days',
    icon: CheckSquare,
    color: 'from-green-500 to-green-600',
    borderColor: 'border-green-200',
    bgColor: 'bg-green-50',
    steps: [
      {
        title: locale === 'zh' ? '法律审查' : 'Legal Review',
        description: locale === 'zh' ? '确认债务合法性、时效性' : 'Confirm debt validity and statute of limitations',
        time: locale === 'zh' ? '第1天' : 'Day 1'
      },
      {
        title: locale === 'zh' ? '合规文档' : 'Compliance Documentation',
        description: locale === 'zh' ? '准备符合两国法律的追收文件' : 'Prepare collection documents compliant with both countries\' laws',
        time: locale === 'zh' ? '第2-3天' : 'Days 2-3'
      },
      {
        title: locale === 'zh' ? '授权确认' : 'Authorization Confirmation',
        description: locale === 'zh' ? '签署追收授权协议' : 'Sign collection authorization agreement',
        time: locale === 'zh' ? '第3-4天' : 'Days 3-4'
      },
      {
        title: locale === 'zh' ? '团队部署' : 'Team Deployment',
        description: locale === 'zh' ? '指定专案团队、制定详细计划' : 'Assign dedicated team and create detailed plan',
        time: locale === 'zh' ? '第4-5天' : 'Days 4-5'
      }
    ]
  },
  {
    phase: locale === 'zh' ? '第三阶段' : 'Phase 3',
    title: locale === 'zh' ? '追收执行' : 'Recovery Execution',
    duration: locale === 'zh' ? '2-4周' : '2-4 weeks',
    icon: MessageSquare,
    color: 'from-purple-500 to-purple-600',
    borderColor: 'border-purple-200',
    bgColor: 'bg-purple-50',
    steps: [
      {
        title: locale === 'zh' ? '首次联络' : 'Initial Contact',
        description: locale === 'zh' ? '通过多渠道尝试联系债务人' : 'Attempt multi-channel contact with debtor',
        time: locale === 'zh' ? '第1周' : 'Week 1'
      },
      {
        title: locale === 'zh' ? '协商谈判' : 'Negotiation',
        description: locale === 'zh' ? '与债务人进行还款协商' : 'Conduct repayment negotiations with debtor',
        time: locale === 'zh' ? '第2-3周' : 'Weeks 2-3'
      },
      {
        title: locale === 'zh' ? '方案制定' : 'Solution Development',
        description: locale === 'zh' ? '制定可行的还款计划' : 'Create feasible repayment plan',
        time: locale === 'zh' ? '第3-4周' : 'Weeks 3-4'
      },
      {
        title: locale === 'zh' ? '协议签署' : 'Agreement Signing',
        description: locale === 'zh' ? '签署还款协议或和解协议' : 'Sign repayment or settlement agreement',
        time: locale === 'zh' ? '第4周' : 'Week 4'
      }
    ]
  },
  {
    phase: locale === 'zh' ? '第四阶段' : 'Phase 4',
    title: locale === 'zh' ? '资金回收' : 'Fund Recovery',
    duration: locale === 'zh' ? '30-90天' : '30-90 days',
    icon: DollarSign,
    color: 'from-orange-500 to-orange-600',
    borderColor: 'border-orange-200',
    bgColor: 'bg-orange-50',
    steps: [
      {
        title: locale === 'zh' ? '支付安排' : 'Payment Arrangement',
        description: locale === 'zh' ? '设立安全的跨境支付通道' : 'Establish secure cross-border payment channels',
        time: locale === 'zh' ? '1-3天' : '1-3 days'
      },
      {
        title: locale === 'zh' ? '资金接收' : 'Fund Receipt',
        description: locale === 'zh' ? '监督和确认资金到账' : 'Monitor and confirm fund arrival',
        time: locale === 'zh' ? '根据协议' : 'Per agreement'
      },
      {
        title: locale === 'zh' ? '合规转账' : 'Compliant Transfer',
        description: locale === 'zh' ? '按照法规要求转账给客户' : 'Transfer funds to client per regulatory requirements',
        time: locale === 'zh' ? '3-5天' : '3-5 days'
      },
      {
        title: locale === 'zh' ? '结案报告' : 'Case Closure Report',
        description: locale === 'zh' ? '提供完整的追收报告和凭证' : 'Provide comprehensive recovery report and supporting documentation',
        time: locale === 'zh' ? '结案后7天' : '7 days after case closure'
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

interface ProcessContentProps {
  dictionary: any
  locale: string
}

export default function ProcessContent({ dictionary, locale }: ProcessContentProps) {
  const timeline = getTimeline(locale)
  
  return (
    <main className="min-h-screen">
      {/* Hero Section - 匹配主页风格 */}
      <section className="relative h-[60vh] min-h-[500px] overflow-hidden bg-black">
        <div className="absolute inset-0">
          <Image
            src="/images/hero/debt-recovery-1.jpg"
            alt="Professional Process"
            fill
            className="object-cover opacity-90"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/25 to-transparent" />
        </div>
        
        <div className="relative z-10 h-full flex items-center pt-20">
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
                {locale === 'zh' ? '专业流程' : 'Professional Process'}
              </motion.p>
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-4xl lg:text-6xl text-white mb-6 font-bold"
              >
                {locale === 'zh' ? '透明高效的追收流程' : 'Transparent and Efficient Recovery Process'}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-lg text-white/80 leading-relaxed"
              >
                {locale === 'zh' ? '从评估到回收，每一步都清晰可控，确保最佳追收效果' : 'From assessment to recovery, every step is clear and controllable, ensuring optimal recovery results'}
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
                      {locale === 'zh' ? '预计时间：' : 'Estimated Time: '}{phase.duration}
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
              {locale === 'zh' ? '每一步都透明可控' : 'Every Step is Transparent and Controllable'}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {locale === 'zh' ? '实时跟踪案件进展，随时了解追收状态' : 'Real-time case tracking keeps you informed of recovery status'}
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
        title={locale === 'zh' ? '开始您的追收之旅' : 'Start Your Recovery Journey'}
        description={locale === 'zh' ? '专业团队随时准备为您服务，第一步从免费评估开始' : 'Our professional team stands ready to serve you - the first step begins with a free assessment'}
        buttonText={locale === 'zh' ? '获取免费评估' : 'Get Free Assessment'}
        variant="light"
        openModal={true}
      />
    </main>
  )
}