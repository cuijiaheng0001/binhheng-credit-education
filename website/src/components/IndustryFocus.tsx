'use client'

import { motion } from 'framer-motion'
import { Home, ShoppingCart, Building2, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import CTAButton from './CTAButton'
import { type Locale } from '@/i18n/config'

const getIndustries = (locale: Locale) => [
  {
    id: 'student-housing',
    icon: Home,
    title: locale === 'zh' ? '学生住宿' : 'Student Housing',
    subtitle: locale === 'zh' ? 'Student Housing' : 'Debt Recovery',
    stat: '$15M+',
    rate: '75%',
    description: locale === 'zh' ? '专门处理留学生租房违约和损害赔偿' : 'Specialized in international student housing defaults and damage claims',
    color: 'blue'
  },
  {
    id: 'ecommerce',
    icon: ShoppingCart,
    title: locale === 'zh' ? '电商平台' : 'E-commerce',
    subtitle: locale === 'zh' ? 'E-commerce' : 'Platform Recovery',
    stat: '$8M+',
    rate: '58%',
    description: locale === 'zh' ? '追收跨境电商卖家欠款和保证金' : 'Recovery of cross-border seller debts and security deposits',
    color: 'green'
  },
  {
    id: 'b2b-trade',
    icon: Building2,
    title: locale === 'zh' ? '国际贸易' : 'International Trade',
    subtitle: locale === 'zh' ? 'B2B Trade' : 'B2B Recovery',
    stat: '$45M+',
    rate: '72%',
    description: locale === 'zh' ? 'B2B贸易欠款和合同违约追收' : 'B2B trade debts and contract breach recovery',
    color: 'purple'
  }
]

const colorVariants = {
  blue: {
    bg: 'bg-blue-50',
    hover: 'hover:bg-blue-100',
    icon: 'text-blue-600',
    stat: 'text-blue-600',
    border: 'border-blue-200'
  },
  green: {
    bg: 'bg-green-50',
    hover: 'hover:bg-green-100',
    icon: 'text-green-600',
    stat: 'text-green-600',
    border: 'border-green-200'
  },
  purple: {
    bg: 'bg-purple-50',
    hover: 'hover:bg-purple-100',
    icon: 'text-purple-600',
    stat: 'text-purple-600',
    border: 'border-purple-200'
  }
}

interface IndustryFocusProps {
  locale?: Locale
}

export default function IndustryFocus({ locale = 'zh' }: IndustryFocusProps) {
  const industries = getIndustries(locale)
  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {locale === 'zh' ? '深耕细分行业' : 'Industry Expertise'}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {locale === 'zh' ? '针对不同行业特点，提供定制化解决方案' : 'Tailored solutions for specific industry challenges'}
          </p>
        </motion.div>

        {/* Industry Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {industries.map((industry, index) => {
            const Icon = industry.icon
            const colors = colorVariants[industry.color as keyof typeof colorVariants]
            
            return (
              <motion.div
                key={industry.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="h-full"
              >
                <div className={`relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-transparent group h-full flex flex-col`}>
                  {/* Icon and Title */}
                  <div className="mb-6">
                    <div className={`inline-flex items-center justify-center w-14 h-14 ${colors.bg} rounded-xl mb-4 group-hover:scale-110 transition-transform`}>
                      <Icon className={`w-7 h-7 ${colors.icon}`} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {industry.title}
                    </h3>
                    <p className="text-sm text-gray-700 font-medium">{industry.subtitle}</p>
                  </div>

                  {/* Description */}
                  <p className="text-gray-700 mb-6 flex-grow">
                    {industry.description}
                  </p>

                  {/* Stats */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div>
                        <p className={`text-2xl font-bold ${colors.stat}`}>{industry.stat}</p>
                        <p className="text-xs text-gray-700 font-medium">{locale === 'zh' ? '已追回' : 'Recovered'}</p>
                      </div>
                      <div className="w-px h-10 bg-gray-200" />
                      <div>
                        <p className="text-2xl font-bold text-gray-900">{industry.rate}</p>
                        <p className="text-xs text-gray-700 font-medium">{locale === 'zh' ? '成功率' : 'Success Rate'}</p>
                      </div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <CTAButton
                    variant="primary"
                    size="md"
                    fullWidth
                    prefilledData={{
                      industry: industry.id,
                      source: 'industry-card'
                    }}
                  >
                    {locale === 'zh' ? `立即咨询${industry.title}追收` : `Get ${industry.title} Recovery Help`}
                  </CTAButton>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Featured Case Studies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            {locale === 'zh' ? '客户成功案例' : 'Success Stories'}
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Case 1 - Student Housing */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 border border-blue-100"
            >
              <div className="flex items-center gap-2 mb-4">
                <Home className="w-5 h-5 text-blue-600" />
                <span className="text-sm font-medium text-blue-600">{locale === 'zh' ? '留学生住宿' : 'Student Housing'}</span>
              </div>
              
              <h4 className="text-lg font-bold text-gray-900 mb-3">
                {locale === 'zh' ? '美国TOP50大学宿舍管理部门' : 'Top 50 US University Housing Department'}
              </h4>
              
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <p className="text-2xl font-bold text-blue-600">$2.1M</p>
                  <p className="text-xs text-gray-700 font-medium">{locale === 'zh' ? '追回金额' : 'Amount Recovered'}</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-gray-900">600+</p>
                  <p className="text-xs text-gray-700 font-medium">{locale === 'zh' ? '处理案件' : 'Cases Handled'}</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-green-600">{locale === 'zh' ? '45天' : '45 days'}</p>
                  <p className="text-xs text-gray-700 font-medium">{locale === 'zh' ? '平均时长' : 'Avg. Duration'}</p>
                </div>
              </div>
              
              <blockquote className="text-sm text-gray-700 italic border-l-3 border-blue-600 pl-4">
                {locale === 'zh' ? '"Bingheng Credit 的专业团队帮助我们解决了长期困扰的中国留学生欠费问题，他们的本地化沟通能力无可比拟。"' : '"Bingheng Credit\'s professional team helped us solve the long-standing Chinese student debt issues. Their localized communication capabilities are unmatched."'}
              </blockquote>
              
              <Link 
                href={`/${locale}/industries#student-housing`} 
                className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700 mt-4"
              >
                {locale === 'zh' ? '查看详情' : 'View Details'}
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </motion.div>

            {/* Case 2 - B2B Trade */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-purple-50 to-white rounded-2xl p-8 border border-purple-100"
            >
              <div className="flex items-center gap-2 mb-4">
                <Building2 className="w-5 h-5 text-purple-600" />
                <span className="text-sm font-medium text-purple-600">{locale === 'zh' ? '国际贸易' : 'International Trade'}</span>
              </div>
              
              <h4 className="text-lg font-bold text-gray-900 mb-3">
                {locale === 'zh' ? '财富500强制造企业' : 'Fortune 500 Manufacturing Company'}
              </h4>
              
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <p className="text-2xl font-bold text-purple-600">$3.2M</p>
                  <p className="text-xs text-gray-700 font-medium">{locale === 'zh' ? '追回金额' : 'Amount Recovered'}</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-gray-900">85%</p>
                  <p className="text-xs text-gray-700 font-medium">{locale === 'zh' ? '追回率' : 'Recovery Rate'}</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-green-600">{locale === 'zh' ? '90天' : '90 days'}</p>
                  <p className="text-xs text-gray-700 font-medium">{locale === 'zh' ? '解决时长' : 'Resolution Time'}</p>
                </div>
              </div>
              
              <blockquote className="text-sm text-gray-700 italic border-l-3 border-purple-600 pl-4">
                {locale === 'zh' ? '"在其他催收公司都放弃后，Bingheng Credit 成功帮我们追回了这笔看似无望的债务。"' : '"After other collection agencies gave up, Bingheng Credit successfully recovered this seemingly hopeless debt for us."'}
              </blockquote>
              
              <Link 
                href={`/${locale}/industries#b2b-trade`} 
                className="inline-flex items-center text-sm font-medium text-purple-600 hover:text-purple-700 mt-4"
              >
                {locale === 'zh' ? '查看详情' : 'View Details'}
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* View All Industries CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href={`/${locale}/industries`}
            className="inline-flex items-center px-6 py-3 bg-navy text-white rounded-xl hover:bg-navy-light transition-colors font-medium no-underline"
          >
            <span className="text-white">{locale === 'zh' ? '查看所有行业解决方案' : 'View All Industry Solutions'}</span>
            <ArrowRight className="w-5 h-5 ml-2 text-white" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}