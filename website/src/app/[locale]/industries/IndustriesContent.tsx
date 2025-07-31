'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Home, ShoppingCart, Building2, TrendingUp, AlertCircle, CheckCircle } from 'lucide-react'
import Image from 'next/image'
import ConsultationModal from '@/components/ConsultationModal'
import CTASection from '@/components/CTASection'

const industries = [
  {
    id: 'student-housing',
    icon: Home,
    title: '留学生住宿债务',
    subtitle: 'Student Housing Debt',
    overview: '专门解决留学生租房违约、损害赔偿和欠费问题，深度理解中美文化差异',
    stats: {
      recovered: '$15M+',
      successRate: '75%',
      avgTime: '35天',
      cases: '2,000+'
    },
    challenges: [
      {
        title: '债务人联系困难',
        description: '留学生毕业或辍学返回中国后，美国本地催收公司缺乏有效途径追踪债务人下落，导致债务人长期失联，甚至完全不知道自己存在未缴清的债务'
      },
      {
        title: '沟通渠道失效',
        description: '中国学生及家庭极少将电子邮件作为主要通讯方式。由于文化差异，大量催收邮件未被打开，甚至直接被标记为垃圾邮件'
      },
      {
        title: '语言及文化障碍',
        description: '绝大部分中国留学生英文阅读水平有限，遇到英文催收信息通常无法完全理解、甚至因不信任而直接忽视，误以为是诈骗信息'
      },
      {
        title: '中美法律认知差异',
        description: '在美国，提前终止租约仍需支付全部租期费用；而在中国文化中，租客提前搬离通常不需支付未居住期间租金，导致债务人拒绝配合'
      }
    ],
    solutions: [
      '债务人本地化追踪：直接与中国境内教育机构、公安及当地社区合作，快速定位债务人及其家庭成员',
      '中文渠道直达沟通：采用电话、短信、微信等中国本地通讯方式，直接用中文与债务人或家长沟通',
      '跨文化催收策略：中文母语团队采用温和、友好且权威的语言，让债务人迅速理解情况并主动合作',
      '文化适应性方案：结合中国传统中看重"诚信"和"家庭名誉"的心理特点，柔性沟通提高还款意愿',
      '灵活和解方案：提供分期付款、部分减免等适合中国债务人的解决方案'
    ],
    caseStudy: {
      client: '某美国大学宿舍管理部门',
      problem: '600余名中国留学生欠缴宿舍费，总额超过$3M，传统邮件催收失败率高达90%',
      solution: '通过中国本地渠道直接联系债务人家庭，使用中文清晰传递债务信息，建立信任并成功沟通还款计划',
      result: '仅3个月内，追回超过$2M的债务，整体成功率提升至75%'
    }
  },
  {
    id: 'ecommerce',
    icon: ShoppingCart,
    title: '电商平台',
    subtitle: 'E-commerce',
    overview: '追收跨境电商卖家欠款、保证金和平台费用',
    stats: {
      recovered: '$8M+',
      successRate: '58%',
      avgTime: '42天',
      cases: '800+'
    },
    challenges: [
      {
        title: '卖家身份核实',
        description: '许多卖家使用虚假信息注册，难以追踪真实身份'
      },
      {
        title: '跨境资金流动',
        description: '资金通过多个渠道流转，追踪困难'
      },
      {
        title: '平台纠纷复杂',
        description: '涉及产品质量、物流、退款等多方面争议'
      },
      {
        title: '快速变更经营',
        description: '卖家频繁更换店铺和经营主体'
      }
    ],
    solutions: [
      '深度背景调查和资产追踪',
      '与主要电商平台建立合作',
      '专业处理平台纠纷调解',
      '快速反应机制锁定资产'
    ],
    caseStudy: {
      client: '全球知名电商平台',
      problem: '中国卖家恶意欠款$450K',
      solution: '资产冻结+法律施压',
      result: '30天内追回全额欠款'
    }
  },
  {
    id: 'b2b-trade',
    icon: Building2,
    title: '国际贸易',
    subtitle: 'B2B Trade',
    overview: 'B2B贸易欠款、合同违约和商业纠纷处理',
    stats: {
      recovered: '$45M+',
      successRate: '72%',
      avgTime: '60天',
      cases: '500+'
    },
    challenges: [
      {
        title: '合同争议复杂',
        description: '涉及质量标准、交付时间、付款条件等多重争议'
      },
      {
        title: '跨国法律差异',
        description: '需要处理不同国家的法律体系和商业惯例'
      },
      {
        title: '长期拖欠恶化',
        description: '债务时间越长，追收难度和成本越高'
      },
      {
        title: '企业信用缺失',
        description: '部分中国企业信用意识薄弱'
      }
    ],
    solutions: [
      '专业商业纠纷调解团队',
      '中美两地法律支持',
      '预防性信用管理建议',
      '强有力的法律行动威慑'
    ],
    caseStudy: {
      client: '美国制造业巨头',
      problem: '中国供应商欠款$3.2M',
      solution: '资产调查+诉讼威慑+谈判',
      result: '90天追回85%欠款'
    }
  }
]

interface IndustriesContentProps {
  ctaFreeConsultation: string
}

export default function IndustriesContent({ ctaFreeConsultation }: IndustriesContentProps) {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false)
  
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section - 匹配主页风格 */}
      <section className="relative h-[60vh] min-h-[500px] overflow-hidden bg-black">
        <div className="absolute inset-0">
          <Image
            src="/images/hero/debt-recovery-1.jpg"
            alt="Industry Solutions"
            fill
            className="object-cover opacity-90"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/25 to-transparent" />
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
                行业解决方案
              </motion.p>
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-4xl lg:text-6xl text-white mb-6 font-bold"
              >
                深耕细分行业
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-lg text-white/80 leading-relaxed"
              >
                专业团队为不同行业提供针对性的跨境债务追收方案
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Industry Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              我们的专业领域
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              在这些领域，我们积累了丰富的经验和成功案例
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
                  className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 hover:border-primary-blue/20 cursor-pointer group"
                  onClick={() => {
                    document.getElementById(industry.id)?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  whileHover={{ y: -4, scale: 1.02 }}
                >
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-blue/10 to-primary-blue/20 rounded-2xl mb-6 group-hover:shadow-lg transition-all">
                    <Icon className="w-8 h-8 text-primary-blue" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary-blue transition-colors">
                    {industry.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{industry.overview}</p>
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-100">
                    <div>
                      <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-blue to-blue-600">{industry.stats.recovered}</p>
                      <p className="text-sm text-gray-500">已追回</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-600">{industry.stats.successRate}</p>
                      <p className="text-sm text-gray-500">成功率</p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Detailed Industry Sections */}
      {industries.map((industry, industryIndex) => {
        const Icon = industry.icon
        return (
          <section
            key={industryIndex}
            id={industry.id}
            className={`py-20 ${industryIndex % 2 === 0 ? 'bg-gradient-to-b from-light-gray to-white' : 'bg-white'}`}
          >
            <div className="max-w-7xl mx-auto px-8">
              {/* Industry Header */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 mb-12"
              >
                <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary-blue/10 to-primary-blue/20 rounded-2xl shadow-lg">
                  <Icon className="w-10 h-10 text-primary-blue" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">{industry.title}</h2>
                  <p className="text-lg text-gray-600">{industry.subtitle}</p>
                </div>
              </motion.div>

              {/* Stats Grid */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="grid md:grid-cols-4 gap-6 mb-12"
              >
                <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all text-center group">
                  <TrendingUp className="w-8 h-8 text-green-500 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                  <p className="text-3xl font-bold text-gray-900">{industry.stats.recovered}</p>
                  <p className="text-sm text-gray-600">累计追回金额</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all text-center group">
                  <CheckCircle className="w-8 h-8 text-blue-500 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                  <p className="text-3xl font-bold text-gray-900">{industry.stats.successRate}</p>
                  <p className="text-sm text-gray-600">平均成功率</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all text-center group">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform">
                    <span className="text-purple-600 font-semibold">天</span>
                  </div>
                  <p className="text-3xl font-bold text-gray-900">{industry.stats.avgTime}</p>
                  <p className="text-sm text-gray-600">平均追收时间</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all text-center group">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform">
                    <span className="text-orange-600 font-semibold">#</span>
                  </div>
                  <p className="text-3xl font-bold text-gray-900">{industry.stats.cases}</p>
                  <p className="text-sm text-gray-600">处理案件数</p>
                </div>
              </motion.div>

              {/* Challenges and Solutions */}
              <div className="grid lg:grid-cols-2 gap-12 mb-12">
                {/* Challenges */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <AlertCircle className="w-6 h-6 text-red-500 mr-2" />
                    主要挑战
                  </h3>
                  <div className="space-y-4">
                    {industry.challenges.map((challenge, index) => (
                      <motion.div 
                        key={index} 
                        className="bg-red-50 border border-red-100 rounded-xl p-5 hover:shadow-md transition-all"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <h4 className="font-medium text-gray-900 mb-1">{challenge.title}</h4>
                        <p className="text-sm text-gray-600">{challenge.description}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Solutions */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-2" />
                    我们的解决方案
                  </h3>
                  <div className="space-y-3">
                    {industry.solutions.map((solution, index) => (
                      <motion.div 
                        key={index} 
                        className="flex items-start"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <div className="w-6 h-6 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                          <CheckCircle className="w-4 h-4 text-white" />
                        </div>
                        <p className="ml-3 text-gray-700">{solution}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Case Study */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-navy to-blue-700 rounded-3xl p-10 text-white shadow-2xl"
              >
                <h3 className="text-2xl font-bold mb-8 text-center">成功案例</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-medium text-blue-100 mb-2">客户</h4>
                    <p className="mb-4">{industry.caseStudy.client}</p>
                    
                    <h4 className="font-medium text-blue-100 mb-2">挑战</h4>
                    <p>{industry.caseStudy.problem}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-blue-100 mb-2">解决方案</h4>
                    <p className="mb-4">{industry.caseStudy.solution}</p>
                    
                    <h4 className="font-medium text-blue-100 mb-2">结果</h4>
                    <p className="text-xl font-semibold">{industry.caseStudy.result}</p>
                  </div>
                </div>
              </motion.div>

              {/* Special Deep Dive Section for Student Housing */}
              {industry.id === 'student-housing' && (
                <>
                  {/* Cultural Understanding Section */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16"
                  >
                    <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
                      深度理解：中美文化与法律差异
                    </h3>
                    
                    <div className="bg-gradient-to-br from-navy/5 to-blue-50 rounded-3xl p-10 mb-8 border border-navy/10">
                      <h4 className="text-xl font-semibold text-gray-900 mb-4">
                        为什么传统催收公司会失败？
                      </h4>
                      <div className="space-y-4 text-gray-700">
                        <p>
                          <strong>沟通方式的根本差异：</strong>
                          中国学生及家庭极少使用电子邮件作为主要沟通方式。传统催收公司发送的英文邮件，
                          90%以上未被打开或被当作垃圾邮件处理。
                        </p>
                        <p>
                          <strong>语言障碍导致的误解：</strong>
                          大部分中国留学生的英文阅读能力有限，收到英文催收信后，往往因为看不懂或不信任
                          而直接忽视，甚至误以为是诈骗信息。
                        </p>
                        <p>
                          <strong>法律认知的巨大鸿沟：</strong>
                          在美国，租客提前终止租约仍需支付全部租期费用；而在中国文化中，租客提前搬离
                          通常被认为不需要支付未居住期间的租金。这种认知差异导致债务人从心理上拒绝配合。
                        </p>
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-10 border border-green-100">
                      <h4 className="text-xl font-semibold text-gray-900 mb-4">
                        Bingheng Credit 的独特优势
                      </h4>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h5 className="font-medium text-gray-900 mb-2">文化适应性策略</h5>
                          <p className="text-gray-700">
                            我们的本土化团队深谙中国文化中的人情世故，强调"诚信"和"家庭名誉"，
                            通过柔性沟通有效提高债务人的还款意愿。
                          </p>
                        </div>
                        <div>
                          <h5 className="font-medium text-gray-900 mb-2">教育与普法并重</h5>
                          <p className="text-gray-700">
                            用简单明确的中文向债务人解释中美合同法差异，让他们明确意识到法律义务，
                            增强主动还款的意识。
                          </p>
                        </div>
                        <div>
                          <h5 className="font-medium text-gray-900 mb-2">灵活的解决方案</h5>
                          <p className="text-gray-700">
                            面对文化差异导致的抗拒，我们提供分期付款、部分减免等更适合中国债务人
                            实际情况的解决方案。
                          </p>
                        </div>
                        <div>
                          <h5 className="font-medium text-gray-900 mb-2">本地化沟通渠道</h5>
                          <p className="text-gray-700">
                            使用电话、短信、微信等中国人习惯的沟通方式，确保信息准确传达，
                            避免因渠道问题导致的沟通失败。
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Core Message */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-12 bg-gradient-to-r from-navy to-blue-700 rounded-3xl p-10 text-white text-center shadow-2xl"
                  >
                    <h3 className="text-2xl font-semibold mb-4">一句话总结</h3>
                    <p className="text-xl leading-relaxed">
                      传统催收公司通常难以跨越法律条文与实际文化环境之间的鸿沟；<br/>
                      Bingheng Credit 以独特的文化理解、本地化沟通与灵活催收方案，<br/>
                      帮助您追回"看似不可能追回"的债务。
                    </p>
                  </motion.div>
                </>
              )}
            </div>
          </section>
        )
      })}

      {/* CTA Section */}
      <CTASection 
        label={ctaFreeConsultation}
        title="为您的行业定制解决方案"
        description="无论您属于哪个行业，我们都有专业团队为您服务"
        buttonText="立即咨询行业专家"
        variant="light"
        openModal={true}
      />

      <ConsultationModal 
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
      />
    </main>
  )
}