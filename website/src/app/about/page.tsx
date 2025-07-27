'use client'

import { motion } from 'framer-motion'
import { AlertTriangle, Target, Shield, Users } from 'lucide-react'

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
              问题认知与风险教育
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              90%的美国企业不知道，他们正在错失数百万美元的可追回债务
            </p>
          </motion.div>
        </div>
      </section>

      {/* Problem Deep Dive */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <AlertTriangle className="w-8 h-8 text-red-500" />
                <h2 className="text-3xl font-semibold text-gray-900">隐藏的债务危机</h2>
              </div>
              <div className="space-y-4 text-gray-600">
                <p>
                  每年，美国企业因为错误的认知和缺乏专业支持，将超过4.5亿美元的中国相关债务直接注销。这些债务中有60%实际上是可以追回的。
                </p>
                <p>
                  主要原因包括：
                </p>
                <ul className="space-y-2 ml-6">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span>误以为债务人回国后就无法联系</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span>对中国法律体系和商业文化缺乏了解</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span>传统收债公司在跨境案件上成功率极低</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span>担心合规风险而放弃追收努力</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-red-50 p-8 rounded-2xl"
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">案例分析</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">大学住宿机构</h4>
                  <p className="text-gray-600">
                    一所美国大学每年因留学生违约损失超过150万美元，其中95%被直接注销。通过专业追收，实际追回率达到65%。
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">电商平台</h4>
                  <p className="text-gray-600">
                    某电商平台累计注销中国卖家欠款800万美元。经评估，其中480万美元有追回可能。
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
              Binhheng Credit 的独特优势
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              我们不是传统的收债公司，而是中美跨境债务追收的专业机构
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white p-8 rounded-lg shadow-sm"
            >
              <Target className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                专注定位
              </h3>
              <p className="text-gray-600">
                100%专注于中美跨境债务追收，积累了深厚的专业经验和本地资源网络。
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white p-8 rounded-lg shadow-sm"
            >
              <Shield className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                合规保障
              </h3>
              <p className="text-gray-600">
                严格遵守FDCPA、PIPL等中美两国法律法规，确保追收过程合法合规。
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white p-8 rounded-lg shadow-sm"
            >
              <Users className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                本地团队
              </h3>
              <p className="text-gray-600">
                在中国主要城市拥有专业团队，深谙当地文化和商业习惯，沟通效率高。
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-12 text-white">
            <h2 className="text-3xl font-light text-center mb-12">
              选择正确的合作伙伴，改变您的债务追收结果
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="text-center">
                <div className="text-5xl font-bold mb-4">5-15%</div>
                <p className="text-xl mb-2">传统方式成功率</p>
                <p className="text-blue-100">
                  大多数企业直接注销或使用不专业的追收服务
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold mb-4">60%+</div>
                <p className="text-xl mb-2">Binhheng Credit 成功率</p>
                <p className="text-blue-100">
                  专业团队 + 本地资源 + 合规操作 = 高效追收
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">
            不要再错失您的资金
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            立即获取免费债务评估，了解您的追收可能性
          </p>
          <button className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-lg font-medium">
            开始免费评估
          </button>
        </div>
      </section>
    </main>
  )
}