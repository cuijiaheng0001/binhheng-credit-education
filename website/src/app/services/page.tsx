'use client'

import { motion } from 'framer-motion'
import { Home, ShoppingCart, Building2, CheckCircle, DollarSign, FileText, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import CTASection from '@/components/CTASection'
import { useLanguage } from '@/i18n/client'

const services = [
  {
    icon: Home,
    title: '学生住宿债务追收',
    description: '专门处理留学生租房违约、损害赔偿和拖欠租金',
    features: [
      '留学生毕业后的跨境追收',
      '与家长的有效沟通渠道',
      '批量小额债务处理方案',
      '平均追回率65%'
    ],
    process: '24小时内评估 → 7天内联系债务人 → 30-45天完成追收'
  },
  {
    icon: ShoppingCart,
    title: '电商平台债务追收',
    description: '追收跨境电商卖家欠款、保证金和平台费用',
    features: [
      '跨境卖家定位追踪',
      '平台纠纷协调处理',
      '多币种结算方案',
      '平均追回率58%'
    ],
    process: '48小时内评估 → 14天内启动追收 → 45-60天完成结算'
  },
  {
    icon: Building2,
    title: 'B2B贸易债务追收',
    description: '企业间贸易欠款、合同违约和质量纠纷处理',
    features: [
      '复杂贸易纠纷调解',
      '跨境资产调查定位',
      '法律诉讼支持服务',
      '平均追回率72%'
    ],
    process: '3-5天深度评估 → 定制追收方案 → 60-90天完成追收'
  }
]

const pricingModel = {
  title: '成功收费模式',
  subtitle: '无追回，不收费',
  tiers: [
    {
      amount: '< $10,000',
      rate: '35%',
      description: '小额债务快速处理'
    },
    {
      amount: '$10,000 - $50,000',
      rate: '30%',
      description: '标准商业债务追收'
    },
    {
      amount: '$50,000 - $200,000',
      rate: '25%',
      description: '大额债务专案处理'
    },
    {
      amount: '> $200,000',
      rate: '协商定价',
      description: '复杂案件定制方案'
    }
  ]
}

export default function ServicesPage() {
  const { dictionary } = useLanguage()
  
  return (
    <main className="min-h-screen">
      {/* Hero Section - 匹配主页风格 */}
      <section className="relative h-[60vh] min-h-[500px] overflow-hidden bg-black">
        <div className="absolute inset-0">
          <Image
            src="/images/hero/debt-recovery-3.jpg"
            alt="Professional Services"
            fill
            className="object-cover opacity-80"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
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
                专业服务
              </motion.p>
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-4xl lg:text-6xl text-white mb-6 font-bold"
              >
                定制化债务追收方案
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-lg text-white/80 leading-relaxed"
              >
                针对不同行业和债务类型，提供专业的追收解决方案
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid - 使用卡片样式 */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              专业服务领域
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              针对不同行业特点，提供定制化的债务追收解决方案
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
                  className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 hover:border-primary-blue/20"
                  whileHover={{ y: -4, scale: 1.02 }}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-blue/10 to-primary-blue/20 rounded-2xl">
                      <Icon className="w-8 h-8 text-primary-blue" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <motion.div 
                        key={idx} 
                        className="flex items-start"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                      >
                        <CheckCircle className="w-5 h-5 text-accent-red mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                  <div className="bg-gradient-to-r from-light-gray to-gray-50 p-4 rounded-xl border border-gray-100">
                    <p className="text-sm font-semibold text-gray-900 mb-1">追收流程：</p>
                    <p className="text-sm text-gray-600">{service.process}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process Overview - 使用主页风格 */}
      <section className="py-20 bg-gradient-to-b from-white to-light-gray">
        <div className="max-w-7xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              标准化服务流程
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              每个案件都遵循严格的标准流程，确保高效合规
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
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
              <h3 className="text-lg font-bold text-gray-900 mb-3">案件评估</h3>
              <p className="text-sm text-gray-600">
                免费评估债务可追回性，制定初步方案
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
              <h3 className="text-lg font-bold text-gray-900 mb-3">合规审查</h3>
              <p className="text-sm text-gray-600">
                确保所有操作符合中美两国法律要求
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
              <h3 className="text-lg font-bold text-gray-900 mb-3">本地化沟通</h3>
              <p className="text-sm text-gray-600">
                通过多渠道与债务人建立有效联系
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
              <h3 className="text-lg font-bold text-gray-900 mb-3">资金回收</h3>
              <p className="text-sm text-gray-600">
                安全合规的资金转移和结算
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Model - 使用渐变背景 */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {pricingModel.title}
            </h2>
            <p className="text-xl text-gray-600">
              {pricingModel.subtitle}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {pricingModel.tiers.map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border-2 border-gray-100 rounded-2xl p-8 hover:border-primary-blue hover:shadow-xl transition-all duration-300 group"
                whileHover={{ y: -4, scale: 1.02 }}
              >
                <p className="text-sm text-gray-500 mb-2">债务金额</p>
                <p className="text-2xl font-bold text-gray-900 mb-6">{tier.amount}</p>
                <div className="border-t-2 border-gray-100 pt-6">
                  <p className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-blue to-blue-600 mb-3 group-hover:scale-110 transition-transform">{tier.rate}</p>
                  <p className="text-sm text-gray-600">{tier.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 bg-gradient-to-br from-light-gray to-gray-50 rounded-3xl p-10 border border-gray-100"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">费用说明</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6">
                <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                  <DollarSign className="w-5 h-5 text-primary-blue mr-2" />
                  包含服务
                </h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-accent-red mt-0.5 mr-2 flex-shrink-0" />
                    <span>案件评估和尽职调查</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-accent-red mt-0.5 mr-2 flex-shrink-0" />
                    <span>全程追收服务和谈判</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-accent-red mt-0.5 mr-2 flex-shrink-0" />
                    <span>资金转移和结算服务</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-accent-red mt-0.5 mr-2 flex-shrink-0" />
                    <span>定期进展报告</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                  <FileText className="w-5 h-5 text-gray-400 mr-2" />
                  额外费用
                </h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <FileText className="w-4 h-4 text-gray-400 mt-0.5 mr-2 flex-shrink-0" />
                    <span>法律诉讼费用（如需要）</span>
                  </li>
                  <li className="flex items-start">
                    <FileText className="w-4 h-4 text-gray-400 mt-0.5 mr-2 flex-shrink-0" />
                    <span>第三方调查费用（事先沟通）</span>
                  </li>
                  <li className="flex items-start">
                    <FileText className="w-4 h-4 text-gray-400 mt-0.5 mr-2 flex-shrink-0" />
                    <span>国际汇款手续费（实报实销）</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>


      {/* CTA - 使用统一的CTASection组件 */}
      <CTASection 
        label={dictionary.cta.freeConsultation}
        title="立即开始追回您的资金"
        description="免费案件评估，快速了解追回可能性"
        buttonText="获取免费评估"
        variant="light"
        openModal={true}
      />
    </main>
  )
}