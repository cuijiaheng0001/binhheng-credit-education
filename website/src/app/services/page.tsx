'use client'

import { motion } from 'framer-motion'
import { Home, ShoppingCart, Building2, CheckCircle, DollarSign, FileText } from 'lucide-react'

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
              专业服务方案
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              针对不同行业和债务类型，提供定制化的追收解决方案
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="space-y-16">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="grid lg:grid-cols-2 gap-12 items-center"
                >
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg">
                        <Icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <h2 className="text-3xl font-semibold text-gray-900">
                        {service.title}
                      </h2>
                    </div>
                    <p className="text-lg text-gray-600 mb-6">
                      {service.description}
                    </p>
                    <div className="space-y-3 mb-8">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-sm font-medium text-gray-700 mb-1">追收流程：</p>
                      <p className="text-sm text-gray-600">{service.process}</p>
                    </div>
                  </div>
                  
                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 h-full flex items-center justify-center">
                      <Icon className="w-32 h-32 text-blue-200" />
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
              标准化服务流程
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              每个案件都遵循严格的标准流程，确保高效合规
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-semibold">
                1
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">案件评估</h3>
              <p className="text-sm text-gray-600">
                免费评估债务可追回性，制定初步方案
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-semibold">
                2
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">合规审查</h3>
              <p className="text-sm text-gray-600">
                确保所有操作符合中美两国法律要求
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-semibold">
                3
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">本地化沟通</h3>
              <p className="text-sm text-gray-600">
                通过多渠道与债务人建立有效联系
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-semibold">
                4
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">资金回收</h3>
              <p className="text-sm text-gray-600">
                安全合规的资金转移和结算
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Model */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
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
                className="bg-white border border-gray-200 rounded-lg p-6 hover:border-blue-500 hover:shadow-lg transition-all"
              >
                <p className="text-sm text-gray-600 mb-2">债务金额</p>
                <p className="text-2xl font-semibold text-gray-900 mb-4">{tier.amount}</p>
                <div className="border-t pt-4">
                  <p className="text-3xl font-bold text-blue-600 mb-2">{tier.rate}</p>
                  <p className="text-sm text-gray-600">{tier.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 bg-blue-50 rounded-2xl p-8"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-4">费用说明</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-gray-800 mb-2">包含服务</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <DollarSign className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span>案件评估和尽职调查</span>
                  </li>
                  <li className="flex items-start">
                    <DollarSign className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span>全程追收服务和谈判</span>
                  </li>
                  <li className="flex items-start">
                    <DollarSign className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span>资金转移和结算服务</span>
                  </li>
                  <li className="flex items-start">
                    <DollarSign className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span>定期进展报告</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-gray-800 mb-2">额外费用</h4>
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

      {/* CTA */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-3xl font-semibold mb-4">
            立即开始追回您的资金
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            免费案件评估，快速了解追回可能性
          </p>
          <button className="px-8 py-4 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition-colors text-lg font-medium">
            获取免费评估
          </button>
        </div>
      </section>
    </main>
  )
}