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
                关于 Bingheng Credit
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl text-white/90 leading-relaxed mb-4 font-medium"
              >
                专注中美跨境债务追收领域的专家
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-lg text-white/80 leading-relaxed"
              >
                每年，美国企业因误解跨境债务追收的复杂性而损失数亿美元。<br/>
                Bingheng Credit 致力于帮助美国企业追回那些原本被误认为"无法追回"的中国相关债务。
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
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">美国企业的隐藏债务危机</h2>
              </div>
              <div className="space-y-4 text-gray-600">
                <p className="text-lg leading-relaxed">
                  行业数据显示，每年超过 <span className="font-bold text-accent-red">4.5亿美元</span> 涉及中国债务被美国企业直接注销，其中约 <span className="font-bold text-accent-red">60%</span> 实际上是可以追回的。
                </p>
                <p className="font-semibold text-gray-900 mt-4">造成这一现象的主要原因包括：</p>
                <ul className="space-y-3">
                  {[
                    '误以为债务人回到中国后便无法联系',
                    '不了解中国的法律体系和商业习惯',
                    '传统收债公司缺乏跨境催收能力，成功率极低',
                    '担忧法律合规风险而主动放弃债务追收'
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
                <p className="mt-4 text-sm text-gray-500">
                  这些误区每年导致数百万美元的潜在收益白白流失。
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-light-gray p-8 rounded-xl"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-8">成功案例展示：追回本该属于您的资金</h3>
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-lg shadow-sm"
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <h4 className="font-semibold text-primary-blue mb-2">🏫 美国大学住宿机构</h4>
                  <p className="text-gray-600 mb-3">
                    每年因留学生违约，平均损失高达 <span className="font-bold">150万美元</span><br/>
                    <span className="text-sm">95%的债务过去被直接注销</span>
                  </p>
                  <div className="flex items-center gap-2 text-primary-blue font-semibold">
                    <span>Bingheng Credit 实际追回率高达 65%</span>
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
                  <h4 className="font-semibold text-primary-blue mb-2">🛒 跨境电商平台</h4>
                  <p className="text-gray-600 mb-3">
                    一家电商平台注销中国卖家欠款累计达 <span className="font-bold">800万美元</span><br/>
                    <span className="text-sm">经专业评估，其中 <span className="font-bold">480万美元</span> 实际可追回</span>
                  </p>
                  <div className="flex items-center gap-2 text-primary-blue font-semibold">
                    <span>专业团队助力资金回收</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </motion.div>
              </div>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center text-gray-600 mt-6 text-sm"
              >
                以上案例证实，只要拥有专业的跨境债务追收团队和明确的策略，被注销的债务完全有可能收回。
              </motion.p>
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
              Bingheng Credit的独特优势
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              我们不是传统的收债公司，而是中美跨境债务追收领域的专业服务机构
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: '精准定位，更专业',
                description: '专注中美跨境债务追收，拥有丰富的实际经验与成功案例。'
              },
              {
                icon: Shield,
                title: '严格合规，更安全',
                description: '严格遵守美国《公平债务催收作业法》(FDCPA) 和中国《个人信息保护法》(PIPL)，确保追收过程安全、合法、合规。'
              },
              {
                icon: Users,
                title: '本地化团队，更高效',
                description: '在上海、北京、深圳等中国主要城市均设有办事处和专业团队，精通中国当地商业习惯与法律环境，实现高效追收。'
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
              选择正确的催收合作伙伴，改变您的追收结果
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-6xl font-bold mb-4">5-15%</div>
                <p className="text-xl mb-2">传统催收公司或企业自行催收</p>
                <p className="text-white/80">
                  平均成功率
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-center"
              >
                <div className="text-6xl font-bold mb-4">60%以上</div>
                <p className="text-xl mb-2">Bingheng Credit 跨境专业追收服务</p>
                <p className="text-white/80">
                  平均成功率
                </p>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-gray-500 mt-4"
          >
            <span className="text-sm">（在北京、深圳等地设有分支机构）</span>
          </motion.p>
        </div>
      </section>

      {/* Company Info Section */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              公司信息与联系方式
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Bingheng Credit 总部位于中国上海市浦东新区陆家嘴金融中心，并在国内主要城市设立分支机构，
              全面覆盖债务追收所需的主要区域，随时为客户提供便捷、高效的专业服务。
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-light-gray p-6 rounded-lg text-center"
            >
              <div className="text-primary-blue mb-2">
                <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">电话</h3>
              <p className="text-gray-600">+86 16653086767</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-light-gray p-6 rounded-lg text-center"
            >
              <div className="text-primary-blue mb-2">
                <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">邮箱</h3>
              <p className="text-gray-600">info@binghengcredit.com</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-light-gray p-6 rounded-lg text-center"
            >
              <div className="text-primary-blue mb-2">
                <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">官网</h3>
              <p className="text-gray-600">www.binghengcredit.com</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-light-gray p-6 rounded-lg text-center"
            >
              <div className="text-primary-blue mb-2">
                <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">地址</h3>
              <p className="text-gray-600 text-sm">上海市浦东新区陆家嘴金融中心</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA - 使用统一的CTASection组件 */}
      <CTASection 
        label={dictionary.cta.freeConsultation}
        title="不要再错失属于您的资金机会"
        description="立即获取免费债务追收评估"
        buttonText="立即联系我们"
        variant="light"
        openModal={true}
        showTrustIndicators={true}
      />
    </main>
  )
}