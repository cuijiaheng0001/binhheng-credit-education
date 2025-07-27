'use client'

import { motion } from 'framer-motion'
import { Home, ShoppingCart, Building2, TrendingUp, AlertCircle, CheckCircle } from 'lucide-react'

const industries = [
  {
    id: 'student-housing',
    icon: Home,
    title: '学生住宿行业',
    subtitle: 'Student Housing',
    overview: '专门解决留学生租房违约、损害赔偿和欠费问题',
    stats: {
      recovered: '$15M+',
      successRate: '65%',
      avgTime: '35天',
      cases: '2,000+'
    },
    challenges: [
      {
        title: '学生毕业后失联',
        description: '90%的留学生毕业后返回中国，传统方式几乎无法联系'
      },
      {
        title: '家长联系困难',
        description: '缺乏有效渠道联系担保人或家长'
      },
      {
        title: '小额债务累积',
        description: '单笔金额小但数量大，传统追收成本过高'
      },
      {
        title: '文化沟通障碍',
        description: '语言和文化差异导致沟通效率低下'
      }
    ],
    solutions: [
      '建立留学生专属追收流程',
      '与中国教育部门合作定位',
      '批量处理降低单位成本',
      '中英双语团队无缝沟通'
    ],
    caseStudy: {
      client: '美国某大学住宿管理公司',
      problem: '500+中国留学生欠款，总额$2.3M',
      solution: '批量追收+家长沟通策略',
      result: '6个月追回$1.5M，成功率65%'
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

export default function IndustriesPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
              行业解决方案
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              深耕细分行业，提供针对性的跨境债务追收方案
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industry Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-3 gap-8 mb-20">
            {industries.map((industry, index) => {
              const Icon = industry.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow cursor-pointer"
                  onClick={() => {
                    document.getElementById(industry.id)?.scrollIntoView({ behavior: 'smooth' })
                  }}
                >
                  <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-lg mb-6">
                    <Icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {industry.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{industry.overview}</p>
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t">
                    <div>
                      <p className="text-2xl font-bold text-blue-600">{industry.stats.recovered}</p>
                      <p className="text-sm text-gray-500">已追回</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-green-600">{industry.stats.successRate}</p>
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
            className={`py-20 ${industryIndex % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}
          >
            <div className="max-w-7xl mx-auto px-8">
              {/* Industry Header */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 mb-12"
              >
                <div className="flex items-center justify-center w-20 h-20 bg-blue-100 rounded-xl">
                  <Icon className="w-10 h-10 text-blue-600" />
                </div>
                <div>
                  <h2 className="text-3xl font-semibold text-gray-900">{industry.title}</h2>
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
                <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                  <TrendingUp className="w-8 h-8 text-green-500 mx-auto mb-2" />
                  <p className="text-3xl font-bold text-gray-900">{industry.stats.recovered}</p>
                  <p className="text-sm text-gray-600">累计追回金额</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                  <CheckCircle className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                  <p className="text-3xl font-bold text-gray-900">{industry.stats.successRate}</p>
                  <p className="text-sm text-gray-600">平均成功率</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-purple-600 font-semibold">天</span>
                  </div>
                  <p className="text-3xl font-bold text-gray-900">{industry.stats.avgTime}</p>
                  <p className="text-sm text-gray-600">平均追收时间</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-2">
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
                  <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                    <AlertCircle className="w-6 h-6 text-red-500 mr-2" />
                    主要挑战
                  </h3>
                  <div className="space-y-4">
                    {industry.challenges.map((challenge, index) => (
                      <div key={index} className="bg-red-50 border border-red-100 rounded-lg p-4">
                        <h4 className="font-medium text-gray-900 mb-1">{challenge.title}</h4>
                        <p className="text-sm text-gray-600">{challenge.description}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Solutions */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-2" />
                    我们的解决方案
                  </h3>
                  <div className="space-y-3">
                    {industry.solutions.map((solution, index) => (
                      <div key={index} className="flex items-start">
                        <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <CheckCircle className="w-4 h-4 text-white" />
                        </div>
                        <p className="ml-3 text-gray-700">{solution}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Case Study */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white"
              >
                <h3 className="text-2xl font-semibold mb-6">成功案例</h3>
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
            </div>
          </section>
        )
      })}

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-3xl font-semibold mb-4">
            为您的行业定制解决方案
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            无论您属于哪个行业，我们都有专业团队为您服务
          </p>
          <button className="px-8 py-4 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition-colors text-lg font-medium">
            立即咨询行业专家
          </button>
        </div>
      </section>
    </main>
  )
}