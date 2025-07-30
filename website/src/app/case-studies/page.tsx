'use client'

import { motion } from 'framer-motion'
import { Building2, GraduationCap, ShoppingCart, Factory, DollarSign, TrendingUp, Calendar, MapPin, Users, Target, Award, ArrowRight, Filter, Download } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import CTASection from '@/components/CTASection'

// Case study data
const caseStudies = [
  {
    id: 'stanford-housing',
    category: 'education',
    featured: true,
    client: '斯坦福大学学生住宿部',
    industry: '教育机构',
    location: '美国加州',
    debtAmount: '$2.1M',
    recoveryRate: '78%',
    timeframe: '45天',
    title: '解决留学生住宿欠费难题',
    challenge: '由于文化差异和沟通障碍，该大学面临大量中国留学生的住宿费用拖欠问题，传统催收方式效果不佳。',
    solution: [
      '建立中英双语沟通体系，消除语言障碍',
      '深入了解中国留学生家庭支付习惯，制定灵活付款方案',
      '与学生家长直接沟通，建立信任关系',
      '提供多种支付渠道，包括支付宝和微信支付'
    ],
    results: [
      '45天内追回78%的欠款',
      '建立长期合作关系，成为指定催收服务商',
      '学生满意度提升，避免了法律纠纷',
      '为其他TOP50大学提供了可复制的解决方案'
    ],
    testimonial: {
      quote: 'Bingheng Credit 的专业团队不仅帮我们解决了欠费问题，更重要的是他们理解文化差异，用适当的方式与学生和家长沟通，维护了学校声誉。',
      author: 'Dr. Sarah Johnson',
      position: '住宿服务主任'
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
    client: '亚马逊电商平台',
    industry: '电商平台',
    location: '全球',
    debtAmount: '$3.2M',
    recoveryRate: '68%',
    timeframe: '60天',
    title: '跨境电商卖家欠款追收',
    challenge: '大量中国卖家因违规操作被冻结账户，拖欠平台费用和罚款，卖家分布广泛且联系困难。',
    solution: [
      '利用本地化团队，快速定位卖家实际经营地址',
      '与卖家协商制定分期还款计划',
      '协助卖家理解平台规则，避免再次违规',
      '提供合规经营指导，帮助卖家恢复业务'
    ],
    results: [
      '成功追回68%的欠款',
      '帮助40%的卖家恢复正常经营',
      '建立卖家教育体系，减少违规率',
      '成为平台认可的专业催收合作伙伴'
    ],
    testimonial: {
      quote: '他们不仅仅是催收公司，更像是帮助我们管理中国市场风险的合作伙伴。',
      author: 'Michael Chen',
      position: '亚太区风控总监'
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
    client: '财富500强制造企业',
    industry: 'B2B贸易',
    location: '中国深圳',
    debtAmount: '$4.5M',
    recoveryRate: '85%',
    timeframe: '90天',
    title: '大额贸易欠款成功追回',
    challenge: '中国供应商长期拖欠货款，涉及金额巨大，已经严重影响公司现金流。',
    solution: [
      '深入调查债务人资产状况和经营情况',
      '协调双方重新谈判付款条件',
      '提供资产保全建议，确保债权安全',
      '必要时协助启动法律程序'
    ],
    results: [
      '90天内追回85%的欠款',
      '帮助双方达成长期合作协议',
      '避免了昂贵的跨国诉讼',
      '建立了供应链金融解决方案'
    ],
    testimonial: {
      quote: '在其他所有方法都失败后，Bingheng Credit 成功帮我们追回了这笔看似无望的债务。',
      author: 'James Wilson',
      position: 'CFO'
    },
    metrics: {
      totalDebt: 4500000,
      recovered: 3825000,
      cases: 12,
      avgRecoveryTime: 90
    }
  },
  {
    id: 'nyu-student-loans',
    category: 'education',
    featured: false,
    client: '纽约大学',
    industry: '教育机构',
    location: '美国纽约',
    debtAmount: '$1.8M',
    recoveryRate: '72%',
    timeframe: '50天',
    title: '留学生学费欠款催收',
    challenge: '大量中国留学生因家庭经济状况变化无法按时支付学费。',
    solution: [
      '提供灵活的还款方案',
      '与家长进行深入沟通',
      '协助申请教育贷款',
      '建立预警机制'
    ],
    results: [
      '追回72%的欠款',
      '零投诉率',
      '学生继续完成学业',
      '建立长期合作关系'
    ],
    metrics: {
      totalDebt: 1800000,
      recovered: 1296000,
      cases: 324,
      avgRecoveryTime: 50
    }
  },
  {
    id: 'shopify-merchants',
    category: 'ecommerce',
    featured: false,
    client: 'Shopify',
    industry: '电商平台',
    location: '全球',
    debtAmount: '$2.3M',
    recoveryRate: '65%',
    timeframe: '55天',
    title: '独立站商家欠费追收',
    challenge: '中国商家使用平台服务后失联，拖欠月费和交易手续费。',
    solution: [
      '通过多渠道寻找商家',
      '提供账户解冻方案',
      '协商还款计划',
      '法律威慑配合'
    ],
    results: [
      '追回65%欠款',
      '30%商家恢复使用',
      '建立中国市场风控体系',
      '减少坏账率40%'
    ],
    metrics: {
      totalDebt: 2300000,
      recovered: 1495000,
      cases: 523,
      avgRecoveryTime: 55
    }
  },
  {
    id: 'medical-equipment',
    category: 'b2b',
    featured: false,
    client: '医疗器械供应商',
    industry: 'B2B贸易',
    location: '中国上海',
    debtAmount: '$3.8M',
    recoveryRate: '82%',
    timeframe: '75天',
    title: '医疗设备采购欠款追收',
    challenge: '医院采购设备后因预算问题拖欠货款。',
    solution: [
      '与医院财务部门直接对接',
      '提供分期付款方案',
      '协助申请政府补贴',
      '保证设备正常使用'
    ],
    results: [
      '追回82%欠款',
      '维护供应关系',
      '获得新订单',
      '建立信用管理体系'
    ],
    metrics: {
      totalDebt: 3800000,
      recovered: 3116000,
      cases: 8,
      avgRecoveryTime: 75
    }
  }
]

const industries = [
  { id: 'all', name: '全部案例', icon: Target },
  { id: 'education', name: '教育机构', icon: GraduationCap },
  { id: 'ecommerce', name: '电商平台', icon: ShoppingCart },
  { id: 'b2b', name: 'B2B贸易', icon: Building2 },
]

export default function CaseStudiesPage() {
  const [selectedIndustry, setSelectedIndustry] = useState('all')
  const [showDownloadModal, setShowDownloadModal] = useState(false)
  
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              成功案例
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-12">
              真实的客户故事，可复制的成功经验。探索我们如何帮助各行业客户解决债务追收难题
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
                <div className="text-blue-200 text-sm">累计追回金额</div>
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
                <div className="text-blue-200 text-sm">处理案件数</div>
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
                <div className="text-blue-200 text-sm">平均追回率</div>
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
                <div className="text-blue-200 text-sm">服务行业</div>
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
              下载案例集
            </button>
          </div>
        </div>
      </section>

      {/* Featured Cases */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-8">
          {/* Featured Case Studies */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">精选案例</h2>
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
                      <div className="text-sm text-gray-500">追回率</div>
                    </div>
                  </div>

                  {/* Key Metrics */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="bg-blue-50 rounded-lg p-4 text-center">
                      <div className="text-xl font-bold text-blue-900">{caseStudy.debtAmount}</div>
                      <div className="text-xs text-blue-700">债务金额</div>
                    </div>
                    <div className="bg-green-50 rounded-lg p-4 text-center">
                      <div className="text-xl font-bold text-green-900">{caseStudy.timeframe}</div>
                      <div className="text-xs text-green-700">解决时间</div>
                    </div>
                    <div className="bg-purple-50 rounded-lg p-4 text-center">
                      <div className="text-xl font-bold text-purple-900">{caseStudy.metrics.cases}</div>
                      <div className="text-xs text-purple-700">处理案件</div>
                    </div>
                  </div>

                  {/* Challenge */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">挑战</h4>
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
                    href={`/case-studies/${caseStudy.id}`}
                    className="inline-flex items-center text-navy font-semibold hover:gap-3 transition-all gap-2"
                  >
                    查看完整案例
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Other Cases Grid */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">更多案例</h2>
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
                        <span className="font-semibold text-gray-900">{caseStudy.debtAmount}</span> 债务
                      </span>
                      <span className="text-gray-500">
                        <span className="font-semibold text-gray-900">{caseStudy.timeframe}</span> 解决
                      </span>
                    </div>
                  </div>
                  
                  <Link
                    href={`/case-studies/${caseStudy.id}`}
                    className="inline-flex items-center text-navy font-medium text-sm mt-4 hover:gap-2 transition-all gap-1"
                  >
                    查看详情
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
              下载完整案例集
            </h3>
            <p className="text-gray-600 mb-6">
              获取我们的成功案例集PDF，包含更多详细信息和行业洞察。
            </p>
            
            <form className="space-y-4 mb-6">
              <input
                type="text"
                placeholder="您的姓名"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy focus:border-transparent"
                required
              />
              <input
                type="email"
                placeholder="工作邮箱"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy focus:border-transparent"
                required
              />
              <input
                type="text"
                placeholder="公司名称"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy focus:border-transparent"
                required
              />
            </form>
            
            <div className="flex gap-3">
              <button
                onClick={() => setShowDownloadModal(false)}
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                取消
              </button>
              <button
                className="flex-1 px-4 py-3 bg-navy text-white rounded-lg hover:bg-navy-light transition-colors"
              >
                下载案例集
              </button>
            </div>
          </motion.div>
        </div>
      )}

      {/* CTA Section */}
      <CTASection
        title="准备解决您的债务追收挑战？"
        description="我们的专业团队随时准备为您提供定制化解决方案"
        buttonText="立即咨询"
        variant="gradient"
        openModal={true}
      />
    </main>
  )
}