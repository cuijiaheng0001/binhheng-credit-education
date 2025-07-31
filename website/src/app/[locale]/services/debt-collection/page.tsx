'use client'

import { motion } from 'framer-motion'
import { Shield, Clock, Globe, TrendingUp } from 'lucide-react'
import CTASection from '@/components/CTASection'

export default function DebtCollectionPage() {
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
            <p className="text-xl text-white/90 mb-8">
              当债务人返回中国后，传统国际催收公司成功率不到5%。
              我们通过本地化团队和深度文化理解，将成功率提升至60%以上。
            </p>
          </motion.div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Shield className="w-12 h-12 text-navy mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">100%合法合规</h3>
              <p className="text-gray-600">符合中美两国法律要求</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <Clock className="w-12 h-12 text-navy mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">平均45天回款</h3>
              <p className="text-gray-600">比传统方式快3倍</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <Globe className="w-12 h-12 text-navy mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">本地化团队</h3>
              <p className="text-gray-600">中国境内专业催收团队</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <TrendingUp className="w-12 h-12 text-navy mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">60%成功率</h3>
              <p className="text-gray-600">行业领先的追收成功率</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-3xl font-light text-center mb-12">我们的追收流程</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="text-3xl font-bold text-navy mb-4">01</div>
              <h3 className="text-xl font-semibold mb-3">债务人定位</h3>
              <p className="text-gray-600">
                通过中国本地资源快速定位债务人现居地、工作单位和联系方式
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="text-3xl font-bold text-navy mb-4">02</div>
              <h3 className="text-xl font-semibold mb-3">文化适应性沟通</h3>
              <p className="text-gray-600">
                使用微信、电话等中国常用渠道，以符合文化习惯的方式进行沟通
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="text-3xl font-bold text-navy mb-4">03</div>
              <h3 className="text-xl font-semibold mb-3">灵活解决方案</h3>
              <p className="text-gray-600">
                提供分期付款、部分减免等适合中国国情的还款方案
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection 
        title="立即开始追回您的债务"
        description="零前期费用，仅在成功追回后收取佣金"
        buttonText="获取免费评估"
        variant="gradient"
        openModal={true}
      />
    </main>
  )
}