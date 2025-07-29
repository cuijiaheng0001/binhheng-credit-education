'use client'

import { motion } from 'framer-motion'
import { AlertTriangle, Target, Shield, Users, ArrowRight, CheckCircle } from 'lucide-react'
import Image from 'next/image'
import CTASection from '@/components/CTASection'
import { useLanguage } from '@/i18n/client'

export default function AboutPage() {
  const { dictionary } = useLanguage()
  
  return (
    <main className="min-h-screen">
      {/* Hero Section - 匹配主页风格 */}
      <section className="relative h-[60vh] min-h-[500px] overflow-hidden bg-black">
        <div className="absolute inset-0">
          <Image
            src="/images/hero/debt-recovery-2.jpg"
            alt="About Bingheng Credit"
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
                关于我们
              </motion.p>
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-4xl lg:text-6xl text-white mb-6 font-bold"
              >
                专注中美跨境债务追收的专业机构
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-lg text-white/80 leading-relaxed"
              >
                90%的美国企业不知道，他们正在错失数百万美元的可追回债务
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problem Deep Dive - 使用卡片样式 */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <AlertTriangle className="w-8 h-8 text-accent-red" />
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">隐藏的债务危机</h2>
              </div>
              <div className="space-y-4 text-gray-600">
                <p className="text-lg leading-relaxed">
                  每年，美国企业因为错误的认知和缺乏专业支持，将超过4.5亿美元的中国相关债务直接注销。这些债务中有60%实际上是可以追回的。
                </p>
                <p className="font-semibold text-gray-900">主要原因包括：</p>
                <ul className="space-y-3">
                  {[
                    '误以为债务人回国后就无法联系',
                    '对中国法律体系和商业文化缺乏了解',
                    '传统收债公司在跨境案件上成功率极低',
                    '担心合规风险而放弃追收努力'
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle className="w-5 h-5 text-accent-red flex-shrink-0" />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-light-gray p-8 rounded-xl"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-8">案例分析</h3>
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-lg shadow-sm"
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <h4 className="font-semibold text-primary-blue mb-2">大学住宿机构</h4>
                  <p className="text-gray-600 mb-3">
                    一所美国大学每年因留学生违约损失超过150万美元，其中95%被直接注销。
                  </p>
                  <div className="flex items-center gap-2 text-primary-blue font-semibold">
                    <span>实际追回率: 65%</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="bg-white p-6 rounded-lg shadow-sm"
                  whileHover={{ y: -2 }}
                >
                  <h4 className="font-semibold text-primary-blue mb-2">电商平台</h4>
                  <p className="text-gray-600 mb-3">
                    某电商平台累计注销中国卖家欠款800万美元。
                  </p>
                  <div className="flex items-center gap-2 text-primary-blue font-semibold">
                    <span>可追回金额: $480万</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Approach - 使用主页的卡片风格 */}
      <section className="py-10 bg-light-gray">
        <div className="max-w-7xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Bingheng Credit 的独特优势
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              我们不是传统的收债公司，而是中美跨境债务追收的专业机构
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: '专注定位',
                description: '100%专注于中美跨境债务追收，积累了深厚的专业经验和本地资源网络。'
              },
              {
                icon: Shield,
                title: '合规保障',
                description: '严格遵守FDCPA、PIPL等中美两国法律法规，确保追收过程合法合规。'
              },
              {
                icon: Users,
                title: '本地团队',
                description: '在中国主要城市拥有专业团队，深谙当地文化和商业习惯，沟通效率高。'
              }
            ].map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
                  whileHover={{ y: -4 }}
                >
                  <Icon className="w-12 h-12 text-primary-blue mb-6" />
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Results - 使用渐变背景 */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="cta-gradient rounded-2xl p-12 text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              选择正确的合作伙伴，改变您的债务追收结果
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-6xl font-bold mb-4">5-15%</div>
                <p className="text-xl mb-2">传统方式成功率</p>
                <p className="text-white/80">
                  大多数企业直接注销或使用不专业的追收服务
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-center"
              >
                <div className="text-6xl font-bold mb-4">60%+</div>
                <p className="text-xl mb-2">Bingheng Credit 成功率</p>
                <p className="text-white/80">
                  专业团队 + 本地资源 + 合规操作 = 高效追收
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA - 使用统一的CTASection组件 */}
      <CTASection 
        label={dictionary.cta.freeConsultation}
        title="不要再错失您的资金"
        description="立即获取免费债务评估，了解您的追收可能性"
        buttonText="开始免费评估"
        variant="light"
        openModal={true}
      />
    </main>
  )
}