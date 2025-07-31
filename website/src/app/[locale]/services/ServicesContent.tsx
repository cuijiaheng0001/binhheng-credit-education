'use client'

import { motion } from 'framer-motion'
import { Home, ShoppingCart, Building2, CheckCircle, DollarSign, FileText } from 'lucide-react'
import Image from 'next/image'
import CTASection from '@/components/CTASection'

interface ServicesContentProps {
  dictionary: any
  locale: string
}

export default function ServicesContent({ dictionary, locale }: ServicesContentProps) {
  const services = [
    {
      icon: Home,
      title: locale === 'zh' ? '学生住宿债务追收' : 'Student Housing Debt Recovery',
      description: locale === 'zh' ? '专门处理留学生租房违约、损害赔偿和拖欠租金' : 'Specialized in handling international student rental defaults, damage claims, and rent arrears',
      features: locale === 'zh' ? [
        '留学生毕业后的跨境追收',
        '与家长的有效沟通渠道',
        '批量小额债务处理方案',
        '平均追回率65%'
      ] : [
        'Cross-border collection after graduation',
        'Effective communication channels with parents',
        'Bulk processing for small debts',
        'Average recovery rate: 65%'
      ],
      process: locale === 'zh' ? '24小时内评估 → 7天内联系债务人 → 30-45天完成追收' : 'Assessment within 24 hours → Contact debtor within 7 days → Complete recovery in 30-45 days'
    },
    {
      icon: ShoppingCart,
      title: locale === 'zh' ? '电商平台债务追收' : 'E-commerce Platform Debt Recovery',
      description: locale === 'zh' ? '追收跨境电商卖家欠款、保证金和平台费用' : 'Recover cross-border seller debts, deposits, and platform fees',
      features: locale === 'zh' ? [
        '跨境卖家定位追踪',
        '平台纠纷协调处理',
        '多币种结算方案',
        '平均追回率58%'
      ] : [
        'Cross-border seller tracking',
        'Platform dispute coordination',
        'Multi-currency settlement solutions',
        'Average recovery rate: 58%'
      ],
      process: locale === 'zh' ? '48小时内评估 → 14天内启动追收 → 45-60天完成结算' : 'Assessment within 48 hours → Initiate recovery within 14 days → Complete settlement in 45-60 days'
    },
    {
      icon: Building2,
      title: locale === 'zh' ? 'B2B贸易债务追收' : 'B2B Trade Debt Recovery',
      description: locale === 'zh' ? '企业间贸易欠款、合同违约和质量纠纷处理' : 'Handle inter-company trade debts, contract breaches, and quality disputes',
      features: locale === 'zh' ? [
        '复杂贸易纠纷调解',
        '跨境资产调查定位',
        '法律诉讼支持服务',
        '平均追回率72%'
      ] : [
        'Complex trade dispute mediation',
        'Cross-border asset investigation',
        'Legal litigation support services',
        'Average recovery rate: 72%'
      ],
      process: locale === 'zh' ? '3-5天深度评估 → 定制追收方案 → 60-90天完成追收' : 'In-depth assessment in 3-5 days → Customized recovery plan → Complete recovery in 60-90 days'
    }
  ]

  const pricingModel = {
    title: locale === 'zh' ? '成功收费模式' : 'Success-Based Fee Model',
    subtitle: locale === 'zh' ? '无追回，不收费' : 'No Recovery, No Fee',
    tiers: [
      {
        amount: '< $10,000',
        rate: '35%',
        description: locale === 'zh' ? '小额债务快速处理' : 'Fast processing for small debts'
      },
      {
        amount: '$10,000 - $50,000',
        rate: '30%',
        description: locale === 'zh' ? '标准商业债务追收' : 'Standard commercial debt recovery'
      },
      {
        amount: '$50,000 - $200,000',
        rate: '25%',
        description: locale === 'zh' ? '大额债务专案处理' : 'Special handling for large debts'
      },
      {
        amount: '> $200,000',
        rate: locale === 'zh' ? '协商定价' : 'Negotiated',
        description: locale === 'zh' ? '复杂案件定制方案' : 'Customized solutions for complex cases'
      }
    ]
  }

  return (
    <main className="min-h-screen">
      {/* Hero Section - 匹配主页风格 */}
      <section className="relative h-[60vh] min-h-[500px] overflow-hidden bg-black">
        <div className="absolute inset-0">
          <Image
            src="/images/hero/debt-recovery-1.jpg"
            alt={locale === 'zh' ? "专业债务追收服务" : "Professional Debt Recovery Services"}
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
                {locale === 'zh' ? '专业服务' : 'Professional Services'}
              </motion.p>
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-4xl lg:text-6xl text-white mb-6 font-bold"
              >
                {locale === 'zh' ? '专业的跨境债务追收服务' : 'Professional Cross-Border Debt Recovery Services'}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-lg text-white/80 leading-relaxed"
              >
                {locale === 'zh' ? '针对不同行业特点，提供定制化的债务追收解决方案' : 'Customized debt recovery solutions tailored to different industry characteristics'}
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {locale === 'zh' ? '三大核心服务' : 'Three Core Services'}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {locale === 'zh' ? '覆盖主要跨境债务类型，提供全方位追收服务' : 'Comprehensive recovery services covering major cross-border debt types'}
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 hover:border-primary-blue/20 group"
                  whileHover={{ y: -4, scale: 1.02 }}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-blue/10 to-primary-blue/20 rounded-2xl mb-6 group-hover:shadow-lg transition-all">
                    <Icon className="w-8 h-8 text-primary-blue" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="pt-6 border-t border-gray-100">
                    <p className="text-sm text-gray-600">
                      <span className="font-semibold text-gray-900">{locale === 'zh' ? '追收流程：' : 'Recovery Process:'}</span><br />
                      {service.process}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-10 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {locale === 'zh' ? '标准化追收流程' : 'Standardized Recovery Process'}
            </h2>
            <p className="text-lg text-gray-600">
              {locale === 'zh' ? '专业、透明、高效的四步追收流程' : 'Professional, transparent, and efficient four-step recovery process'}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary-blue/20 group"
              whileHover={{ y: -4, scale: 1.02 }}
            >
              <div className="w-20 h-20 bg-gradient-to-br from-primary-blue to-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold shadow-lg group-hover:shadow-xl transition-all">
                1
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">{locale === 'zh' ? '案件评估' : 'Case Assessment'}</h3>
              <p className="text-sm text-gray-600">
                {locale === 'zh' ? '免费评估债务可追回性和风险' : 'Free assessment of debt recoverability and risks'}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary-blue/20 group"
              whileHover={{ y: -4, scale: 1.02 }}
            >
              <div className="w-20 h-20 bg-gradient-to-br from-primary-blue to-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold shadow-lg group-hover:shadow-xl transition-all">
                2
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">{locale === 'zh' ? '合规审查' : 'Compliance Review'}</h3>
              <p className="text-sm text-gray-600">
                {locale === 'zh' ? '确保所有操作符合中美两国法律要求' : 'Ensure all operations comply with US and Chinese legal requirements'}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-center bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary-blue/20 group"
              whileHover={{ y: -4, scale: 1.02 }}
            >
              <div className="w-20 h-20 bg-gradient-to-br from-primary-blue to-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold shadow-lg group-hover:shadow-xl transition-all">
                3
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">{locale === 'zh' ? '本地化沟通' : 'Localized Communication'}</h3>
              <p className="text-sm text-gray-600">
                {locale === 'zh' ? '通过多渠道与债务人建立有效联系' : 'Establish effective contact with debtors through multiple channels'}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-center bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary-blue/20 group"
              whileHover={{ y: -4, scale: 1.02 }}
            >
              <div className="w-20 h-20 bg-gradient-to-br from-primary-blue to-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold shadow-lg group-hover:shadow-xl transition-all">
                4
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">{locale === 'zh' ? '资金回收' : 'Fund Recovery'}</h3>
              <p className="text-sm text-gray-600">
                {locale === 'zh' ? '安全合规的资金转移和结算' : 'Safe and compliant fund transfer and settlement'}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Model */}
      <section className="py-10 bg-white">
        <div className="max-w-5xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 text-white rounded-full mb-4">
              <DollarSign className="w-8 h-8" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {pricingModel.title}
            </h2>
            <p className="text-xl text-gray-600">
              {pricingModel.subtitle}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-4">
            {pricingModel.tiers.map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-b from-gray-50 to-white rounded-xl p-6 border border-gray-200 hover:border-primary-blue/30 transition-all duration-300 hover:shadow-lg"
              >
                <p className="text-sm font-medium text-gray-600 mb-2">
                  {tier.amount}
                </p>
                <p className="text-3xl font-bold text-primary-blue mb-3">
                  {tier.rate}
                </p>
                <p className="text-sm text-gray-600">
                  {tier.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-8 border border-blue-200"
          >
            <div className="flex items-start gap-4">
              <FileText className="w-8 h-8 text-blue-600 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {locale === 'zh' ? '费用说明' : 'Fee Explanation'}
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• {locale === 'zh' ? '所有费用仅在成功追回后收取' : 'All fees are only charged after successful recovery'}</li>
                  <li>• {locale === 'zh' ? '前期评估完全免费，无任何隐藏费用' : 'Initial assessment is completely free with no hidden fees'}</li>
                  <li>• {locale === 'zh' ? '大额债务和批量案件可协商优惠费率' : 'Preferential rates available for large debts and bulk cases'}</li>
                  <li>• {locale === 'zh' ? '费用包含全部追收成本，无需额外支付' : 'Fees include all recovery costs, no additional payments required'}</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection 
        label={dictionary.cta.freeConsultation}
        title={locale === 'zh' ? '准备开始追回您的债务？' : 'Ready to Recover Your Debts?'}
        description={locale === 'zh' ? '免费评估，无前期费用，让我们帮您追回应得的资金' : 'Free assessment, no upfront fees, let us help you recover what you\'re owed'}
        buttonText={locale === 'zh' ? '立即开始免费评估' : 'Start Free Assessment Now'}
        variant="light"
        openModal={true}
        locale={locale}
      />
    </main>
  )
}