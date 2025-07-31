'use client'

import { motion } from 'framer-motion'
import { Shield, Clock, Globe, TrendingUp } from 'lucide-react'
import CTASection from '@/components/CTASection'

interface DebtCollectionContentProps {
  ctaLabel?: string
  locale?: string
}

export default function DebtCollectionContent({ ctaLabel, locale = 'zh' }: DebtCollectionContentProps) {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-br from-navy to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-light mb-6">
              专业中国债务人追收服务
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              专注于跨境债务追收，拥有深度的本地化经验和专业法律团队
            </p>
          </motion.div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-navy/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-navy" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">合规保障</h3>
              <p className="text-gray-600 text-sm">严格遵循中美两国法律法规</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-navy/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-navy" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">快速响应</h3>
              <p className="text-gray-600 text-sm">24小时内提供初步评估</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-navy/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-navy" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">跨境专业</h3>
              <p className="text-gray-600 text-sm">深度理解中美文化差异</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-navy/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-navy" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">高成功率</h3>
              <p className="text-gray-600 text-sm">平均追回率超过65%</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              专业追收流程
            </h2>
            <p className="text-lg text-gray-600">
              标准化操作确保高效合规
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-sm p-6 border border-gray-100"
            >
              <div className="w-12 h-12 bg-navy text-white rounded-lg flex items-center justify-center text-xl font-bold mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">案件评估</h3>
              <p className="text-gray-600">
                免费评估债务可追回性，分析最佳追收策略
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-lg shadow-sm p-6 border border-gray-100"
            >
              <div className="w-12 h-12 bg-navy text-white rounded-lg flex items-center justify-center text-xl font-bold mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">债务人定位</h3>
              <p className="text-gray-600">
                运用专业渠道精准定位债务人信息
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-lg shadow-sm p-6 border border-gray-100"
            >
              <div className="w-12 h-12 bg-navy text-white rounded-lg flex items-center justify-center text-xl font-bold mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">资金回收</h3>
              <p className="text-gray-600">
                通过谈判或法律途径实现资金回收
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <CTASection 
        label={ctaLabel}
        title={locale === 'zh' ? '立即开始追回您的债务' : 'Start Recovering Your Debts Now'}
        description={locale === 'zh' ? '零前期费用，仅在成功追回后收取佣金' : 'No upfront fees, commission only charged after successful recovery'}
        buttonText={locale === 'zh' ? '获取免费评估' : 'Get Free Assessment'}
        variant="gradient"
        openModal={true}
        locale={locale}
      />
    </main>
  )
}