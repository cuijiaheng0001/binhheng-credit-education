'use client'

import { motion } from 'framer-motion'
import { Building2, GraduationCap, ShoppingCart, DollarSign, TrendingUp, MapPin, Users, Target, Award, ArrowRight, Filter, Download } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import CTASection from '@/components/CTASection'

interface CaseStudiesContentProps {
  dictionary: any
  locale: string
}

// Case study data with locale support
const getCaseStudies = (locale: string) => [
  {
    id: 'stanford-housing',
    category: 'education',
    featured: true,
    client: locale === 'zh' ? '斯坦福大学学生住宿部' : 'Stanford University Housing Department',
    industry: locale === 'zh' ? '教育机构' : 'Educational Institution',
    location: locale === 'zh' ? '美国加州' : 'California, USA',
    debtAmount: '$2.1M',
    recoveryRate: '78%',
    timeframe: locale === 'zh' ? '45天' : '45 days',
    title: locale === 'zh' ? '解决留学生住宿欠费难题' : 'Resolving International Student Housing Debt Issues',
    challenge: locale === 'zh' 
      ? '由于文化差异和沟通障碍，该大学面临大量中国留学生的住宿费用拖欠问题，传统催收方式效果不佳。'
      : 'Due to cultural differences and communication barriers, the university faced significant housing fee arrears from Chinese international students, with traditional collection methods proving ineffective.',
    solution: locale === 'zh' ? [
      '建立中英双语沟通体系，消除语言障碍',
      '深入了解中国留学生家庭支付习惯，制定灵活付款方案',
      '与学生家长直接沟通，建立信任关系',
      '提供多种支付渠道，包括支付宝和微信支付'
    ] : [
      'Established bilingual communication system to eliminate language barriers',
      'Understood Chinese student family payment habits and created flexible payment plans',
      'Communicated directly with parents to build trust relationships',
      'Provided multiple payment channels including Alipay and WeChat Pay'
    ],
    results: locale === 'zh' ? [
      '45天内追回78%的欠款',
      '建立长期合作关系，成为指定催收服务商',
      '学生满意度提升，避免了法律纠纷',
      '为其他TOP50大学提供了可复制的解决方案'
    ] : [
      'Recovered 78% of debts within 45 days',
      'Established long-term partnership as designated collection service provider',
      'Improved student satisfaction and avoided legal disputes',
      'Provided replicable solutions for other top 50 universities'
    ],
    testimonial: {
      quote: locale === 'zh' 
        ? 'Bingheng Credit 的专业团队不仅帮我们解决了欠费问题，更重要的是他们理解文化差异，用适当的方式与学生和家长沟通，维护了学校声誉。'
        : "Bingheng Credit's professional team not only helped us resolve the debt issues, but more importantly, they understood cultural differences and communicated appropriately with students and parents, maintaining our school's reputation.",
      author: 'Dr. Sarah Johnson',
      position: locale === 'zh' ? '住宿服务主任' : 'Director of Housing Services'
    },
    metrics: {
      totalDebt: 2100000,
      recovered: 1638000,
      cases: 612,
      avgRecoveryTime: 45
    }
  },
  {
    id: 'amazon-seller',
    category: 'ecommerce',
    featured: true,
    client: locale === 'zh' ? '亚马逊电商平台' : 'Amazon E-commerce Platform',
    industry: locale === 'zh' ? '电商平台' : 'E-commerce Platform',
    location: locale === 'zh' ? '全球' : 'Global',
    debtAmount: '$3.2M',
    recoveryRate: '68%',
    timeframe: locale === 'zh' ? '60天' : '60 days',
    title: locale === 'zh' ? '跨境电商卖家欠款追收' : 'Cross-border E-commerce Seller Debt Recovery',
    challenge: locale === 'zh'
      ? '大量中国卖家因违规操作被冻结账户，拖欠平台费用和罚款，卖家分布广泛且联系困难。'
      : 'Many Chinese sellers had frozen accounts due to policy violations, owing platform fees and penalties, with sellers widely distributed and difficult to contact.',
    testimonial: {
      quote: locale === 'zh'
        ? '他们不仅仅是催收公司，更像是帮助我们管理中国市场风险的合作伙伴。'
        : "They're not just a collection company, but more like a partner helping us manage China market risks.",
      author: 'Michael Chen',
      position: locale === 'zh' ? '亚太区风控总监' : 'APAC Risk Management Director'
    },
    metrics: {
      totalDebt: 3200000,
      recovered: 2176000,
      cases: 856,
      avgRecoveryTime: 60
    }
  },
  {
    id: 'fortune500-trade',
    category: 'b2b',
    featured: false,
    client: locale === 'zh' ? '财富500强制造企业' : 'Fortune 500 Manufacturing Company',
    industry: locale === 'zh' ? 'B2B贸易' : 'B2B Trade',
    location: locale === 'zh' ? '中国深圳' : 'Shenzhen, China',
    debtAmount: '$4.5M',
    recoveryRate: '85%',
    timeframe: locale === 'zh' ? '90天' : '90 days',
    title: locale === 'zh' ? '大额贸易欠款成功追回' : 'Successful Recovery of Large Trade Debt',
    challenge: locale === 'zh'
      ? '中国供应商长期拖欠货款，涉及金额巨大，已经严重影响公司现金流。'
      : 'Chinese suppliers had long-term payment arrears involving huge amounts, seriously affecting company cash flow.',
    testimonial: {
      quote: locale === 'zh'
        ? '在其他所有方法都失败后，Bingheng Credit 成功帮我们追回了这笔看似无望的债务。'
        : 'After all other methods failed, Bingheng Credit successfully helped us recover this seemingly hopeless debt.',
      author: 'James Wilson',
      position: 'CFO'
    },
    metrics: {
      totalDebt: 4500000,
      recovered: 3825000,
      cases: 12,
      avgRecoveryTime: 90
    }
  }
]

const getIndustries = (locale: string) => [
  { 
    id: 'all', 
    name: locale === 'zh' ? '全部案例' : 'All Cases', 
    icon: Target 
  },
  { 
    id: 'education', 
    name: locale === 'zh' ? '教育机构' : 'Education', 
    icon: GraduationCap 
  },
  { 
    id: 'ecommerce', 
    name: locale === 'zh' ? '电商平台' : 'E-commerce', 
    icon: ShoppingCart 
  },
  { 
    id: 'b2b', 
    name: locale === 'zh' ? 'B2B贸易' : 'B2B Trade', 
    icon: Building2 
  },
]

export default function CaseStudiesContent({ dictionary, locale }: CaseStudiesContentProps) {
  const [selectedIndustry, setSelectedIndustry] = useState('all')
  const [showDownloadModal, setShowDownloadModal] = useState(false)
  
  const caseStudies = getCaseStudies(locale)
  const industries = getIndustries(locale)
  
  const filteredCases = selectedIndustry === 'all' 
    ? caseStudies 
    : caseStudies.filter(c => c.category === selectedIndustry)

  const stats = {
    totalRecovered: caseStudies.reduce((sum, c) => sum + c.metrics.recovered, 0),
    totalCases: caseStudies.reduce((sum, c) => sum + c.metrics.cases, 0),
    avgRecoveryRate: Math.round(caseStudies.reduce((sum, c) => sum + parseFloat(c.recoveryRate), 0) / caseStudies.length),
    industries: new Set(caseStudies.map(c => c.category)).size
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-navy via-blue-900 to-navy">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10" />
        <div className="relative z-10 max-w-7xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="font-sans text-4xl lg:text-6xl font-bold text-white mb-6">
              {locale === 'zh' ? '成功案例' : 'Success Stories'}
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-12">
              {locale === 'zh' 
                ? '真实的客户故事，可复制的成功经验。探索我们如何帮助各行业客户解决债务追收难题'
                : 'Real client stories and replicable success experiences. Explore how we help clients across industries solve debt recovery challenges'
              }
            </p>
            
            {/* Key Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
              >
                <DollarSign className="w-8 h-8 text-blue-300 mx-auto mb-2" />
                <div className="text-3xl font-bold text-white">
                  ${(stats.totalRecovered / 1000000).toFixed(1)}M
                </div>
                <div className="text-blue-200 text-sm">
                  {locale === 'zh' ? '累计追回金额' : 'Total Recovered'}
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
              >
                <Users className="w-8 h-8 text-blue-300 mx-auto mb-2" />
                <div className="text-3xl font-bold text-white">
                  {stats.totalCases.toLocaleString()}+
                </div>
                <div className="text-blue-200 text-sm">
                  {locale === 'zh' ? '处理案件数' : 'Cases Handled'}
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
              >
                <TrendingUp className="w-8 h-8 text-blue-300 mx-auto mb-2" />
                <div className="text-3xl font-bold text-white">
                  {stats.avgRecoveryRate}%
                </div>
                <div className="text-blue-200 text-sm">
                  {locale === 'zh' ? '平均追回率' : 'Avg Recovery Rate'}
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
              >
                <Award className="w-8 h-8 text-blue-300 mx-auto mb-2" />
                <div className="text-3xl font-bold text-white">
                  {stats.industries}
                </div>
                <div className="text-blue-200 text-sm">
                  {locale === 'zh' ? '服务行业' : 'Industries Served'}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Industry Filter */}
      <section className="py-8 bg-gray-50 border-b sticky top-0 z-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <Filter className="w-5 h-5 text-gray-500" />
              <div className="flex gap-2">
                {industries.map((industry) => {
                  const Icon = industry.icon
                  const isActive = selectedIndustry === industry.id
                  return (
                    <button
                      key={industry.id}
                      onClick={() => setSelectedIndustry(industry.id)}
                      className={`px-4 py-2 rounded-lg font-medium transition-all flex items-center gap-2 ${
                        isActive 
                          ? 'bg-navy text-white shadow-lg' 
                          : 'bg-white text-gray-600 hover:bg-gray-100 border'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      <span>{industry.name}</span>
                      <span className={`text-xs px-2 py-0.5 rounded-full ${
                        isActive ? 'bg-white/20' : 'bg-gray-100'
                      }`}>
                        {industry.id === 'all' 
                          ? caseStudies.length 
                          : caseStudies.filter(c => c.category === industry.id).length
                        }
                      </span>
                    </button>
                  )
                })}
              </div>
            </div>
            
            <button
              onClick={() => setShowDownloadModal(true)}
              className="px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2 text-gray-700"
            >
              <Download className="w-4 h-4" />
              {locale === 'zh' ? '下载案例集' : 'Download Case Studies'}
            </button>
          </div>
        </div>
      </section>

      {/* Featured Cases */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-8">
          {/* Featured Case Studies */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              {locale === 'zh' ? '精选案例' : 'Featured Cases'}
            </h2>
            <div className="grid lg:grid-cols-2 gap-8">
              {filteredCases.filter(c => c.featured).map((caseStudy, index) => (
                <motion.div
                  key={caseStudy.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200 hover:shadow-xl transition-all"
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {caseStudy.title}
                      </h3>
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <span className="flex items-center gap-1">
                          <Building2 className="w-4 h-4" />
                          {caseStudy.client}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {caseStudy.location}
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-navy">{caseStudy.recoveryRate}</div>
                      <div className="text-sm text-gray-500">
                        {locale === 'zh' ? '追回率' : 'Recovery Rate'}
                      </div>
                    </div>
                  </div>

                  {/* Key Metrics */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="bg-blue-50 rounded-lg p-4 text-center">
                      <div className="text-xl font-bold text-blue-900">{caseStudy.debtAmount}</div>
                      <div className="text-xs text-blue-700">
                        {locale === 'zh' ? '债务金额' : 'Debt Amount'}
                      </div>
                    </div>
                    <div className="bg-green-50 rounded-lg p-4 text-center">
                      <div className="text-xl font-bold text-green-900">{caseStudy.timeframe}</div>
                      <div className="text-xs text-green-700">
                        {locale === 'zh' ? '解决时间' : 'Resolution Time'}
                      </div>
                    </div>
                    <div className="bg-purple-50 rounded-lg p-4 text-center">
                      <div className="text-xl font-bold text-purple-900">{caseStudy.metrics.cases}</div>
                      <div className="text-xs text-purple-700">
                        {locale === 'zh' ? '处理案件' : 'Cases Handled'}
                      </div>
                    </div>
                  </div>

                  {/* Challenge */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      {locale === 'zh' ? '挑战' : 'Challenge'}
                    </h4>
                    <p className="text-gray-600">{caseStudy.challenge}</p>
                  </div>

                  {/* Testimonial */}
                  {caseStudy.testimonial && (
                    <div className="bg-gray-50 rounded-lg p-4 mb-6 border-l-4 border-navy">
                      <p className="text-gray-700 italic mb-2">"{caseStudy.testimonial.quote}"</p>
                      <div className="text-sm text-gray-600">
                        <span className="font-semibold">{caseStudy.testimonial.author}</span>
                        <span className="text-gray-500"> · {caseStudy.testimonial.position}</span>
                      </div>
                    </div>
                  )}

                  {/* CTA */}
                  <Link
                    href={`/${locale}/case-studies/${caseStudy.id}`}
                    className="inline-flex items-center text-navy font-semibold hover:gap-3 transition-all gap-2"
                  >
                    {locale === 'zh' ? '查看完整案例' : 'View Full Case Study'}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Other Cases Grid */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              {locale === 'zh' ? '更多案例' : 'More Cases'}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCases.filter(c => !c.featured).map((caseStudy, index) => (
                <motion.div
                  key={caseStudy.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all p-6 border border-gray-100"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium text-gray-500">{caseStudy.industry}</span>
                    <span className="text-2xl font-bold text-navy">{caseStudy.recoveryRate}</span>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {caseStudy.title}
                  </h3>
                  
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                    {caseStudy.challenge}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-4">
                      <span className="text-gray-500">
                        <span className="font-semibold text-gray-900">{caseStudy.debtAmount}</span> 
                        {locale === 'zh' ? ' 债务' : ' debt'}
                      </span>
                      <span className="text-gray-500">
                        <span className="font-semibold text-gray-900">{caseStudy.timeframe}</span> 
                        {locale === 'zh' ? ' 解决' : ' resolved'}
                      </span>
                    </div>
                  </div>
                  
                  <Link
                    href={`/${locale}/case-studies/${caseStudy.id}`}
                    className="inline-flex items-center text-navy font-medium text-sm mt-4 hover:gap-2 transition-all gap-1"
                  >
                    {locale === 'zh' ? '查看详情' : 'View Details'}
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Download Modal */}
      {showDownloadModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl p-8 max-w-md w-full"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {locale === 'zh' ? '下载完整案例集' : 'Download Complete Case Studies'}
            </h3>
            <p className="text-gray-600 mb-6">
              {locale === 'zh' 
                ? '获取我们的成功案例集PDF，包含更多详细信息和行业洞察。'
                : 'Get our success case studies PDF with detailed information and industry insights.'
              }
            </p>
            
            <form className="space-y-4 mb-6">
              <input
                type="text"
                placeholder={locale === 'zh' ? '您的姓名' : 'Your Name'}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy focus:border-transparent"
                required
              />
              <input
                type="email"
                placeholder={locale === 'zh' ? '工作邮箱' : 'Work Email'}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy focus:border-transparent"
                required
              />
              <input
                type="text"
                placeholder={locale === 'zh' ? '公司名称' : 'Company Name'}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy focus:border-transparent"
                required
              />
            </form>
            
            <div className="flex gap-3">
              <button
                onClick={() => setShowDownloadModal(false)}
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                {locale === 'zh' ? '取消' : 'Cancel'}
              </button>
              <button
                className="flex-1 px-4 py-3 bg-navy text-white rounded-lg hover:bg-navy-light transition-colors"
              >
                {locale === 'zh' ? '下载案例集' : 'Download Cases'}
              </button>
            </div>
          </motion.div>
        </div>
      )}

      {/* CTA Section */}
      <CTASection
        title={locale === 'zh' ? '准备解决您的债务追收挑战？' : 'Ready to Solve Your Debt Recovery Challenges?'}
        description={locale === 'zh' ? '我们的专业团队随时准备为您提供定制化解决方案' : 'Our professional team is ready to provide customized solutions for you'}
        buttonText={locale === 'zh' ? '立即咨询' : 'Consult Now'}
        variant="gradient"
        openModal={true}
        locale={locale}
      />
    </main>
  )
}