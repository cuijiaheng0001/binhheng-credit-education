'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Home, ShoppingCart, Building2, TrendingUp, AlertCircle, CheckCircle } from 'lucide-react'
import ConsultationModal from '@/components/ConsultationModal'
import CTASection from '@/components/CTASection'
import Image from 'next/image'

const getIndustries = (locale: string) => [
  {
    id: 'student-housing',
    icon: Home,
    title: locale === 'zh' ? '留学生住宿债务' : 'Student Housing Debt',
    subtitle: locale === 'zh' ? 'Student Housing Debt' : 'International Student Housing',
    overview: locale === 'zh' ? '专门解决留学生租房违约、损害赔偿和欠费问题，深度理解中美文化差异' : 'Specialized in resolving international student rental defaults, damage claims, and unpaid fees with deep understanding of US-China cultural differences',
    stats: {
      recovered: '$15M+',
      successRate: '75%',
      avgTime: locale === 'zh' ? '35天' : '35 days',
      cases: '2,000+'
    },
    challenges: [
      {
        title: locale === 'zh' ? '债务人联系困难' : 'Difficulty Contacting Debtors',
        description: locale === 'zh' ? '留学生毕业或辍学返回中国后，美国本地催收公司缺乏有效途径追踪债务人下落，导致债务人长期失联，甚至完全不知道自己存在未缴清的债务' : 'After students graduate or drop out and return to China, US collection agencies lack effective ways to track debtors, leading to long-term loss of contact'
      },
      {
        title: locale === 'zh' ? '沟通渠道失效' : 'Communication Channel Failure',
        description: locale === 'zh' ? '中国学生及家庭极少将电子邮件作为主要通讯方式。由于文化差异，大量催收邮件未被打开，甚至直接被标记为垃圾邮件' : 'Chinese students and families rarely use email as primary communication. Due to cultural differences, collection emails are often unopened or marked as spam'
      },
      {
        title: locale === 'zh' ? '语言及文化障碍' : 'Language and Cultural Barriers',
        description: locale === 'zh' ? '绝大部分中国留学生英文阅读水平有限，遇到英文催收信息通常无法完全理解、甚至因不信任而直接忽视，误以为是诈骗信息' : 'Most Chinese students have limited English reading ability, often cannot fully understand collection notices, or ignore them thinking they are scams'
      },
      {
        title: locale === 'zh' ? '中美法律认知差异' : 'US-China Legal Perception Gap',
        description: locale === 'zh' ? '在美国，提前终止租约仍需支付全部租期费用；而在中国文化中，租客提前搬离通常不需支付未居住期间租金，导致债务人拒绝配合' : 'In the US, early lease termination still requires full payment; in Chinese culture, tenants usually don\'t pay for periods not lived in, leading to refusal to cooperate'
      }
    ],
    solutions: locale === 'zh' ? [
      '债务人本地化追踪：直接与中国境内教育机构、公安及当地社区合作，快速定位债务人及其家庭成员',
      '中文渠道直达沟通：采用电话、短信、微信等中国本地通讯方式，直接用中文与债务人或家长沟通',
      '跨文化催收策略：中文母语团队采用温和、友好且权威的语言，让债务人迅速理解情况并主动合作',
      '文化适应性方案：结合中国传统中看重"诚信"和"家庭名誉"的心理特点，柔性沟通提高还款意愿',
      '灵活和解方案：提供分期付款、部分减免等适合中国债务人的解决方案'
    ] : [
      'Localized debtor tracking: Direct cooperation with Chinese educational institutions, public security, and local communities',
      'Chinese channel communication: Using phone, SMS, WeChat and other Chinese local communication methods',
      'Cross-cultural collection strategy: Native Chinese teams use gentle, friendly yet authoritative language',
      'Culturally adaptive solutions: Leveraging Chinese values of "integrity" and "family reputation"',
      'Flexible settlement options: Offering installment payments and partial reductions suitable for Chinese debtors'
    ],
    caseStudy: {
      client: locale === 'zh' ? '某美国大学宿舍管理部门' : 'US University Housing Department',
      problem: locale === 'zh' ? '600余名中国留学生欠缴宿舍费，总额超过$3M，传统邮件催收失败率高达90%' : '600+ Chinese students owed housing fees totaling over $3M, with 90% failure rate using traditional email collection',
      solution: locale === 'zh' ? '通过中国本地渠道直接联系债务人家庭，使用中文清晰传递债务信息，建立信任并成功沟通还款计划' : 'Direct contact with debtor families through Chinese local channels, clear communication in Chinese, building trust and payment plans',
      result: locale === 'zh' ? '仅3个月内，追回超过$2M的债务，整体成功率提升至75%' : 'Recovered over $2M in just 3 months, increasing success rate to 75%'
    }
  },
  {
    id: 'ecommerce',
    icon: ShoppingCart,
    title: locale === 'zh' ? '电商平台' : 'E-commerce Platform',
    subtitle: locale === 'zh' ? 'E-commerce' : 'Online Marketplace',
    overview: locale === 'zh' ? '追收跨境电商卖家欠款、保证金和平台费用' : 'Recover cross-border seller debts, deposits, and platform fees',
    stats: {
      recovered: '$8M+',
      successRate: '58%',
      avgTime: locale === 'zh' ? '42天' : '42 days',
      cases: '800+'
    },
    challenges: [
      {
        title: locale === 'zh' ? '卖家身份核实' : 'Seller Identity Verification',
        description: locale === 'zh' ? '许多卖家使用虚假信息注册，难以追踪真实身份' : 'Many sellers register with false information, making it difficult to track real identities'
      },
      {
        title: locale === 'zh' ? '跨境资金流动' : 'Cross-border Fund Flow',
        description: locale === 'zh' ? '资金通过多个渠道流转，追踪困难' : 'Funds flow through multiple channels, making tracking difficult'
      },
      {
        title: locale === 'zh' ? '平台纠纷复杂' : 'Complex Platform Disputes',
        description: locale === 'zh' ? '涉及产品质量、物流、退款等多方面争议' : 'Involves disputes over product quality, logistics, refunds, and multiple aspects'
      },
      {
        title: locale === 'zh' ? '快速变更经营' : 'Rapid Business Changes',
        description: locale === 'zh' ? '卖家频繁更换店铺和经营主体' : 'Sellers frequently change stores and business entities'
      }
    ],
    solutions: locale === 'zh' ? [
      '深度背景调查和资产追踪',
      '与主要电商平台建立合作',
      '专业处理平台纠纷调解',
      '快速反应机制锁定资产'
    ] : [
      'Deep background investigation and asset tracking',
      'Established partnerships with major e-commerce platforms',
      'Professional platform dispute mediation',
      'Rapid response mechanism to lock assets'
    ],
    caseStudy: {
      client: locale === 'zh' ? '全球知名电商平台' : 'Global E-commerce Platform',
      problem: locale === 'zh' ? '中国卖家恶意欠款$450K' : 'Chinese seller maliciously owed $450K',
      solution: locale === 'zh' ? '资产冻结+法律施压' : 'Asset freezing + legal pressure',
      result: locale === 'zh' ? '30天内追回全额欠款' : 'Full recovery within 30 days'
    }
  },
  {
    id: 'b2b-trade',
    icon: Building2,
    title: locale === 'zh' ? '国际贸易' : 'International Trade',
    subtitle: locale === 'zh' ? 'B2B Trade' : 'B2B Commerce',
    overview: locale === 'zh' ? 'B2B贸易欠款、合同违约和商业纠纷处理' : 'B2B trade debts, contract breaches, and commercial dispute resolution',
    stats: {
      recovered: '$45M+',
      successRate: '72%',
      avgTime: locale === 'zh' ? '60天' : '60 days',
      cases: '500+'
    },
    challenges: [
      {
        title: locale === 'zh' ? '合同争议复杂' : 'Complex Contract Disputes',
        description: locale === 'zh' ? '涉及质量标准、交付时间、付款条件等多重争议' : 'Involves disputes over quality standards, delivery times, payment terms, and multiple issues'
      },
      {
        title: locale === 'zh' ? '跨国法律差异' : 'Cross-border Legal Differences',
        description: locale === 'zh' ? '需要处理不同国家的法律体系和商业惯例' : 'Need to handle different legal systems and business practices across countries'
      },
      {
        title: locale === 'zh' ? '长期拖欠恶化' : 'Long-term Debt Deterioration',
        description: locale === 'zh' ? '债务时间越长，追收难度和成本越高' : 'The longer the debt, the higher the difficulty and cost of recovery'
      },
      {
        title: locale === 'zh' ? '企业信用缺失' : 'Corporate Credit Deficiency',
        description: locale === 'zh' ? '部分中国企业信用意识薄弱' : 'Some Chinese companies have weak credit awareness'
      }
    ],
    solutions: locale === 'zh' ? [
      '专业商业纠纷调解团队',
      '中美两地法律支持',
      '预防性信用管理建议',
      '强有力的法律行动威慑'
    ] : [
      'Professional commercial dispute mediation team',
      'Legal support in both US and China',
      'Preventive credit management advice',
      'Strong legal action deterrence'
    ],
    caseStudy: {
      client: locale === 'zh' ? '美国制造业巨头' : 'US Manufacturing Giant',
      problem: locale === 'zh' ? '中国供应商欠款$3.2M' : 'Chinese supplier owed $3.2M',
      solution: locale === 'zh' ? '资产调查+诉讼威慑+谈判' : 'Asset investigation + litigation deterrence + negotiation',
      result: locale === 'zh' ? '90天追回85%欠款' : 'Recovered 85% in 90 days'
    }
  }
]

interface IndustriesContentProps {
  ctaFreeConsultation: string
  locale: string
}

export default function IndustriesContent({ ctaFreeConsultation, locale }: IndustriesContentProps) {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false)
  const industries = getIndustries(locale)
  
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section - 匹配About页面风格 */}
      <section className="relative h-[60vh] min-h-[500px] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero/industries-hero.jpg"
            alt="Industry Solutions"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
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
                {locale === 'zh' ? '行业解决方案' : 'Industry Solutions'}
              </motion.p>
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="font-sans text-4xl lg:text-6xl text-white mb-6 font-bold"
              >
                {locale === 'zh' ? '深耕细分行业' : 'Industry Expertise'}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl text-white/90 leading-relaxed"
              >
                {locale === 'zh' ? '专业团队为不同行业提供针对性的跨境债务追收方案' : 'Professional teams provide targeted cross-border debt recovery solutions for different industries'}
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
              {locale === 'zh' ? '我们的专业领域' : 'Our Areas of Expertise'}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {locale === 'zh' ? '在这些领域，我们积累了丰富的经验和成功案例' : 'We have accumulated rich experience and success stories in these fields'}
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
                  className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-8 border border-gray-100 hover:border-navy/20 cursor-pointer group"
                  onClick={() => {
                    document.getElementById(industry.id)?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  whileHover={{ y: -2 }}
                >
                  <div className="flex items-center justify-center w-16 h-16 bg-navy/10 rounded-xl mb-6">
                    <Icon className="w-8 h-8 text-navy" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3 group-hover:text-navy transition-colors">
                    {industry.title}
                  </h3>
                  <p className="text-gray-600 mb-6">{industry.overview}</p>
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-100">
                    <div>
                      <p className="text-2xl font-bold text-navy">{industry.stats.recovered}</p>
                      <p className="text-sm text-gray-500">{locale === 'zh' ? '已追回' : 'Recovered'}</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-navy">{industry.stats.successRate}</p>
                      <p className="text-sm text-gray-500">{locale === 'zh' ? '成功率' : 'Success Rate'}</p>
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
                <div className="flex items-center justify-center w-20 h-20 bg-navy/10 rounded-xl">
                  <Icon className="w-10 h-10 text-navy" />
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
                <div className="bg-white p-6 rounded-xl shadow-sm text-center border border-gray-100">
                  <div className="w-8 h-8 bg-navy/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <TrendingUp className="w-5 h-5 text-navy" />
                  </div>
                  <p className="text-3xl font-bold text-gray-900">{industry.stats.recovered}</p>
                  <p className="text-sm text-gray-600">{locale === 'zh' ? '累计追回金额' : 'Total Recovered'}</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm text-center border border-gray-100">
                  <div className="w-8 h-8 bg-navy/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <CheckCircle className="w-5 h-5 text-navy" />
                  </div>
                  <p className="text-3xl font-bold text-gray-900">{industry.stats.successRate}</p>
                  <p className="text-sm text-gray-600">{locale === 'zh' ? '平均成功率' : 'Average Success Rate'}</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm text-center border border-gray-100">
                  <div className="w-8 h-8 bg-navy/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <span className="text-navy font-semibold text-sm">{locale === 'zh' ? '天' : 'D'}</span>
                  </div>
                  <p className="text-3xl font-bold text-gray-900">{industry.stats.avgTime}</p>
                  <p className="text-sm text-gray-600">{locale === 'zh' ? '平均追收时间' : 'Average Recovery Time'}</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm text-center border border-gray-100">
                  <div className="w-8 h-8 bg-navy/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <span className="text-navy font-semibold text-sm">#</span>
                  </div>
                  <p className="text-3xl font-bold text-gray-900">{industry.stats.cases}</p>
                  <p className="text-sm text-gray-600">{locale === 'zh' ? '处理案件数' : 'Cases Handled'}</p>
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
                    <div className="w-6 h-6 bg-red-100 rounded-lg flex items-center justify-center mr-3">
                      <AlertCircle className="w-4 h-4 text-red-600" />
                    </div>
                    {locale === 'zh' ? '主要挑战' : 'Key Challenges'}
                  </h3>
                  <div className="space-y-4">
                    {industry.challenges.map((challenge, index) => (
                      <motion.div 
                        key={index} 
                        className="bg-white border border-gray-200 rounded-xl p-6"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <h4 className="font-semibold text-gray-900 mb-2">{challenge.title}</h4>
                        <p className="text-gray-600 leading-relaxed">{challenge.description}</p>
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
                  <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                    <div className="w-6 h-6 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                    </div>
                    {locale === 'zh' ? '我们的解决方案' : 'Our Solutions'}
                  </h3>
                  <div className="space-y-4">
                    {industry.solutions.map((solution, index) => (
                      <motion.div 
                        key={index} 
                        className="flex items-start bg-white border border-gray-200 rounded-xl p-6"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <div className="w-6 h-6 bg-navy rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                          <CheckCircle className="w-4 h-4 text-white" />
                        </div>
                        <p className="ml-4 text-gray-700 leading-relaxed">{solution}</p>
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
                className="bg-navy rounded-xl p-8 text-white"
              >
                <h3 className="text-2xl font-bold mb-8 text-center">{locale === 'zh' ? '成功案例' : 'Success Story'}</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-medium text-blue-100 mb-2">{locale === 'zh' ? '客户' : 'Client'}</h4>
                    <p className="mb-4">{industry.caseStudy.client}</p>
                    
                    <h4 className="font-medium text-blue-100 mb-2">{locale === 'zh' ? '挑战' : 'Challenge'}</h4>
                    <p>{industry.caseStudy.problem}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-blue-100 mb-2">{locale === 'zh' ? '解决方案' : 'Solution'}</h4>
                    <p className="mb-4">{industry.caseStudy.solution}</p>
                    
                    <h4 className="font-medium text-blue-100 mb-2">{locale === 'zh' ? '结果' : 'Result'}</h4>
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
                      {locale === 'zh' ? '深度理解：中美文化与法律差异' : 'Deep Understanding: US-China Cultural and Legal Differences'}
                    </h3>
                    
                    <div className="bg-white rounded-xl p-8 mb-8 border border-gray-200">
                      <h4 className="text-xl font-semibold text-gray-900 mb-6">
                        {locale === 'zh' ? '为什么传统催收公司会失败？' : 'Why Traditional Collection Agencies Fail?'}
                      </h4>
                      <div className="space-y-4 text-gray-700">
                        <p>
                          <strong>{locale === 'zh' ? '沟通方式的根本差异：' : 'Fundamental Communication Differences:'}</strong>
                          {locale === 'zh' ? '中国学生及家庭极少使用电子邮件作为主要沟通方式。传统催收公司发送的英文邮件，90%以上未被打开或被当作垃圾邮件处理。' : 'Chinese students and families rarely use email as primary communication. Over 90% of English collection emails are unopened or treated as spam.'}
                        </p>
                        <p>
                          <strong>{locale === 'zh' ? '语言障碍导致的误解：' : 'Misunderstandings from Language Barriers:'}</strong>
                          {locale === 'zh' ? '大部分中国留学生的英文阅读能力有限，收到英文催收信后，往往因为看不懂或不信任而直接忽视，甚至误以为是诈骗信息。' : 'Most Chinese students have limited English reading ability. They often ignore collection letters due to incomprehension or mistrust, even thinking they are scams.'}
                        </p>
                        <p>
                          <strong>{locale === 'zh' ? '法律认知的巨大鸿沟：' : 'Huge Gap in Legal Understanding:'}</strong>
                          {locale === 'zh' ? '在美国，租客提前终止租约仍需支付全部租期费用；而在中国文化中，租客提前搬离通常被认为不需要支付未居住期间的租金。这种认知差异导致债务人从心理上拒绝配合。' : 'In the US, tenants must pay full lease terms even for early termination; in Chinese culture, tenants usually believe they don\'t need to pay for periods not lived in. This cognitive difference leads to psychological refusal to cooperate.'}
                        </p>
                      </div>
                    </div>

                    <div className="bg-white rounded-xl p-8 border border-gray-200">
                      <h4 className="text-xl font-semibold text-gray-900 mb-6">
                        {locale === 'zh' ? 'Bingheng Credit 的独特优势' : 'Bingheng Credit\'s Unique Advantages'}
                      </h4>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h5 className="font-medium text-gray-900 mb-2">{locale === 'zh' ? '文化适应性策略' : 'Culturally Adaptive Strategy'}</h5>
                          <p className="text-gray-700">
                            {locale === 'zh' ? '我们的本土化团队深谙中国文化中的人情世故，强调"诚信"和"家庭名誉"，通过柔性沟通有效提高债务人的还款意愿。' : 'Our localized team deeply understands Chinese cultural nuances, emphasizing "integrity" and "family honor" to effectively increase debtors\' willingness to repay through soft communication.'}
                          </p>
                        </div>
                        <div>
                          <h5 className="font-medium text-gray-900 mb-2">{locale === 'zh' ? '教育与普法并重' : 'Education and Legal Awareness'}</h5>
                          <p className="text-gray-700">
                            {locale === 'zh' ? '用简单明确的中文向债务人解释中美合同法差异，让他们明确意识到法律义务，增强主动还款的意识。' : 'Explain US-China contract law differences in clear Chinese, helping debtors understand their legal obligations and increasing voluntary repayment awareness.'}
                          </p>
                        </div>
                        <div>
                          <h5 className="font-medium text-gray-900 mb-2">{locale === 'zh' ? '灵活的解决方案' : 'Flexible Solutions'}</h5>
                          <p className="text-gray-700">
                            {locale === 'zh' ? '面对文化差异导致的抗拒，我们提供分期付款、部分减免等更适合中国债务人实际情况的解决方案。' : 'Facing resistance from cultural differences, we offer installment payments and partial reductions more suitable for Chinese debtors\' actual situations.'}
                          </p>
                        </div>
                        <div>
                          <h5 className="font-medium text-gray-900 mb-2">{locale === 'zh' ? '本地化沟通渠道' : 'Localized Communication Channels'}</h5>
                          <p className="text-gray-700">
                            {locale === 'zh' ? '使用电话、短信、微信等中国人习惯的沟通方式，确保信息准确传达，避免因渠道问题导致的沟通失败。' : 'Using phone, SMS, WeChat and other communication methods familiar to Chinese people, ensuring accurate information delivery and avoiding communication failures due to channel issues.'}
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
                    className="mt-12 bg-navy rounded-xl p-8 text-white text-center"
                  >
                    <h3 className="text-2xl font-semibold mb-4">{locale === 'zh' ? '一句话总结' : 'In Summary'}</h3>
                    <p className="text-xl leading-relaxed">
                      {locale === 'zh' ? (
                        <>传统催收公司通常难以跨越法律条文与实际文化环境之间的鸿沟；<br/>
                        Bingheng Credit 以独特的文化理解、本地化沟通与灵活催收方案，<br/>
                        帮助您追回"看似不可能追回"的债务。</>
                      ) : (
                        <>Traditional collection agencies often fail to bridge the gap between legal text and cultural reality;<br/>
                        Bingheng Credit uses unique cultural understanding, localized communication, and flexible collection solutions<br/>
                        to help you recover debts that seem "impossible to recover."</>
                      )}
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
        title={locale === 'zh' ? "为您的行业定制解决方案" : "Tailored Solutions for Your Industry"}
        description={locale === 'zh' ? "无论您属于哪个行业，我们都有专业团队为您服务" : "No matter your industry, we have a professional team to serve you"}
        buttonText={locale === 'zh' ? "立即咨询行业专家" : "Consult Industry Experts Now"}
        variant="light"
        openModal={true}
        locale={locale}
      />

      <ConsultationModal 
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
      />
    </main>
  )
}