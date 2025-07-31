'use client'

import { motion } from 'framer-motion'
import { AlertTriangle, Target, Shield, Users, ArrowRight, CheckCircle } from 'lucide-react'
import Image from 'next/image'
import OptimizedImage from '@/components/OptimizedImage'
import CTASection from '@/components/CTASection'

interface AboutContentProps {
  dictionary: any
  locale: string
}

export default function AboutContent({ dictionary, locale }: AboutContentProps) {
  return (
    <main className="min-h-screen">
      {/* Hero Section - 匹配主页风格 */}
      <section className="relative h-[60vh] min-h-[500px] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero/debt-recovery-2.jpg"
            alt="关于 Bingheng Credit - 专业跨境债务追收服务公司，帮助美国企业追回中国相关债务"
            fill
            className="object-cover"
            priority
            sizes="100vw"
            quality={85}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
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
                {locale === 'zh' ? '关于我们' : 'About Us'}
              </motion.p>
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-4xl lg:text-6xl text-white mb-6 font-bold"
              >
                {locale === 'zh' ? '关于 Bingheng Credit' : 'About Bingheng Credit'}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl text-white/90 leading-relaxed mb-4 font-medium"
              >
                {locale === 'zh' ? '专注中国债务人的跨境追收专家' : 'Cross-Border Debt Recovery Specialists Focused on Chinese Debtors'}
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-lg text-white/80 leading-relaxed"
              >
                {locale === 'zh' ? (
                  <>每年，美国企业因对中国债务人身份与特征缺乏深入理解，误以为这些债务"无法追回"，损失数亿美元。</>
                ) : (
                  <>Every year, US businesses lose hundreds of millions of dollars because they lack deep understanding of Chinese debtor identities and characteristics, mistakenly believing these debts are "uncollectible."</>
                )}
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Specialization - 专业聚焦领域 */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {locale === 'zh' ? '我们的专业聚焦' : 'Our Professional Focus'}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {locale === 'zh' ? 'Bingheng Credit 专注于解决高度细分且追讨难度最大的两类债务' : 'Bingheng Credit specializes in solving two highly specialized and most challenging debt types'}
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* 中国留学生债务 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border border-blue-100"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  {locale === 'zh' ? '中国留学生债务' : 'Chinese Student Debts'}
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                {locale === 'zh' ? 
                  '聚焦于留学生在美期间产生的租赁、公寓房屋相关债务。当留学生返回中国后，传统催收方式难以有效执行，我们凭借对中国法律环境和信用体系的深入了解，实现精准追收。' :
                  'Focused on rental and apartment-related debts incurred by international students during their time in the US. When students return to China, traditional collection methods prove ineffective. We achieve precise recovery through deep understanding of China\'s legal environment and credit system.'
                }
              </p>
              <div className="flex items-center text-blue-600 font-medium">
                <CheckCircle className="w-5 h-5 mr-2" />
                <span>{locale === 'zh' ? '精准追收，专业高效' : 'Precise recovery, professional and efficient'}</span>
              </div>
            </motion.div>

            {/* 中国电商卖家债务 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl border border-green-100"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  {locale === 'zh' ? '中国电商卖家债务' : 'Chinese E-commerce Seller Debts'}
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                {locale === 'zh' ? 
                  '针对跨境电商交易中，中国卖家违约、拖欠付款等复杂情形。我们的团队深谙跨境电商运营特点，可快速定位卖家主体，提供切实可行的追偿方案。' :
                  'Targeting complex situations involving Chinese seller defaults and payment delays in cross-border e-commerce transactions. Our team deeply understands cross-border e-commerce operations, can quickly locate seller entities, and provide viable recovery solutions.'
                }
              </p>
              <div className="flex items-center text-green-600 font-medium">
                <CheckCircle className="w-5 h-5 mr-2" />
                <span>{locale === 'zh' ? '快速定位，切实可行' : 'Rapid identification, practical solutions'}</span>
              </div>
            </motion.div>
          </div>

          {/* B2B服务说明 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gray-50 p-8 rounded-2xl text-center"
          >
            <Shield className="w-12 h-12 text-primary-blue mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              {locale === 'zh' ? '全方位B2B商业债务追收' : 'Comprehensive B2B Commercial Debt Recovery'}
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {locale === 'zh' ? 
                '此外，我们也提供常规的中美B2B商业债务追收服务，覆盖更广泛的企业客户需求。' :
                'Additionally, we provide regular US-China B2B commercial debt recovery services, covering a broader range of corporate client needs.'
              }
            </p>
          </motion.div>
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
              {locale === 'zh' ? 'Bingheng Credit的独特优势' : 'Bingheng Credit\'s Unique Advantages'}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {locale === 'zh' ? 
                '与传统催收公司不同，我们明确聚焦于中国债务人，以精准的定位、高效的方案和深入的本土洞察力，帮助美国企业将"无法追回"变为切实收益。' :
                'Unlike traditional collection agencies, we focus specifically on Chinese debtors, using precise targeting, efficient solutions, and deep local insights to help US businesses turn "uncollectible" into actual returns.'
              }
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: locale === 'zh' ? '精准定位，更专业' : 'Precise Targeting, More Professional',
                description: locale === 'zh' ? '明确聚焦于中国债务人，拥有丰富的实际经验与成功案例。' : 'Clearly focused on Chinese debtors with rich practical experience and success stories.'
              },
              {
                icon: Shield,
                title: locale === 'zh' ? '严格合规，更安全' : 'Strict Compliance, More Secure',
                description: locale === 'zh' ? '严格遵守美国《公平债务催收作业法》(FDCPA) 和中国《个人信息保护法》(PIPL)，确保追收过程安全、合法、合规。' : 'Strictly comply with US Fair Debt Collection Practices Act (FDCPA) and China\'s Personal Information Protection Law (PIPL), ensuring safe, legal, and compliant recovery processes.'
              },
              {
                icon: Users,
                title: locale === 'zh' ? '本地化团队，更高效' : 'Localized Team, More Efficient',
                description: locale === 'zh' ? '在上海、北京、深圳等中国主要城市均设有办事处和专业团队，精通中国当地商业习惯与法律环境，实现高效追收。' : 'With offices and professional teams in major Chinese cities like Shanghai, Beijing, and Shenzhen, we are well-versed in local business practices and legal environments for efficient recovery.'
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
              {locale === 'zh' ? '公司信息与联系方式' : 'Company Information & Contact'}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {locale === 'zh' ? 
                'Bingheng Credit 总部位于中国上海市浦东新区陆家嘴金融中心，并在国内主要城市设立分支机构，全面覆盖债务追收所需的主要区域，随时为客户提供便捷、高效的专业服务。' :
                'Bingheng Credit is headquartered in Lujiazui Financial Center, Pudong New Area, Shanghai, China, with branch offices in major domestic cities, providing comprehensive coverage of key regions for debt recovery and offering convenient, efficient professional services to clients.'
              }
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
              <h3 className="font-semibold text-gray-900 mb-1">{locale === 'zh' ? '电话' : 'Phone'}</h3>
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
              <h3 className="font-semibold text-gray-900 mb-1">{locale === 'zh' ? '邮箱' : 'Email'}</h3>
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
              <h3 className="font-semibold text-gray-900 mb-1">{locale === 'zh' ? '官网' : 'Website'}</h3>
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
              <h3 className="font-semibold text-gray-900 mb-1">{locale === 'zh' ? '地址' : 'Address'}</h3>
              <p className="text-gray-600 text-sm">{locale === 'zh' ? '上海市浦东新区陆家嘴金融中心' : 'Lujiazui Financial Center, Pudong New Area, Shanghai'}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA - 使用统一的CTASection组件 */}
      <CTASection 
        label={dictionary.cta.freeConsultation}
        title={locale === 'zh' ? "不要再错失属于您的资金机会" : "Don't Miss Out on Your Rightful Funds"}
        description={locale === 'zh' ? "立即获取免费债务追收评估" : "Get a free debt recovery assessment now"}
        buttonText={locale === 'zh' ? "立即联系我们" : "Contact Us Now"}
        variant="light"
        openModal={true}
        showTrustIndicators={true}
      />
    </main>
  )
}