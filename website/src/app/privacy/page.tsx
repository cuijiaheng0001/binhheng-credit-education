'use client'

import { motion } from 'framer-motion'
import { Shield, FileText, Lock, Eye, Users, RefreshCw, UserCheck, Globe, Mail, Phone } from 'lucide-react'
import Image from 'next/image'
import { useLanguage } from '@/i18n/client'

export default function PrivacyPage() {
  const { dictionary } = useLanguage()
  
  const sections = [
    {
      id: 'intro',
      title: '一、引言',
      icon: FileText,
      content: '本隐私政策适用于访问或使用本网站的所有用户。我们致力于保护用户的隐私和个人信息安全。本政策详细说明我们如何收集、使用和保护您的个人信息。'
    },
    {
      id: 'collection',
      title: '二、我们收集的信息',
      icon: Eye,
      content: null,
      subsections: [
        {
          title: '1. 个人信息：',
          items: [
            '用户姓名、联系方式（包括电子邮件、电话号码等）',
            '身份证件信息（若业务涉及身份验证）',
            '银行账户或支付信息（若涉及支付交易）',
            '债务信息、债务催收相关信息（若业务涉及债务催收服务）'
          ]
        },
        {
          title: '2. 非个人信息：',
          items: [
            'IP地址、设备型号、浏览器类型、操作系统',
            '用户访问网站的时间、频率、页面停留时间',
            'Cookie和类似技术自动收集的数据'
          ]
        }
      ]
    },
    {
      id: 'methods',
      title: '三、信息收集方式',
      icon: Users,
      content: '我们通过以下方式收集您的信息：',
      items: [
        '用户注册账户、填写表单或通过电子邮件提供的信息',
        '债权人委托提供债务催收相关信息',
        '通过Cookie、日志文件及其他技术自动收集的信息'
      ]
    },
    {
      id: 'usage',
      title: '四、信息的使用',
      icon: RefreshCw,
      content: '我们收集的信息用于以下目的：',
      items: [
        '提供、维护并优化我们的服务',
        '债务催收和相关法律合规事务',
        '处理和响应用户的咨询或服务请求',
        '开展营销推广活动（获得用户同意后）',
        '数据分析和服务改善',
        '履行法律法规要求的义务'
      ]
    },
    {
      id: 'sharing',
      title: '五、信息分享与披露',
      icon: Users,
      content: '除以下情况外，我们不会向第三方分享或披露您的个人信息：',
      items: [
        '为提供服务而与必要的第三方合作伙伴共享信息，如支付机构、数据分析服务提供商、律师事务所或持牌债务催收机构',
        '根据适用法律法规、法院命令或政府机关要求提供信息',
        '在公司合并、收购或资产转让等情形下，我们将通知您个人信息转移的相关情况'
      ]
    },
    {
      id: 'security',
      title: '六、数据安全保护措施',
      icon: Lock,
      content: '我们采取严格的数据安全措施保护您的个人信息，包括但不限于数据加密、访问权限管理、定期安全评估及数据泄漏应急处理机制。'
    },
    {
      id: 'rights',
      title: '七、用户的权利与选择',
      icon: UserCheck,
      content: '用户可随时行使以下权利：',
      items: [
        '查阅、修改、删除您的个人信息',
        '撤销先前授予我们的任何同意',
        '管理或拒绝Cookie的使用'
      ]
    },
    {
      id: 'minors',
      title: '八、未成年人信息保护',
      icon: Shield,
      content: '我们不主动收集未成年人的个人信息。如发现未成年人在未经监护人同意的情况下向我们提供了个人信息，我们将立即删除相关信息。'
    },
    {
      id: 'cross-border',
      title: '九、跨境数据流动',
      icon: Globe,
      content: '若业务涉及跨境债务催收，我们可能会将您的信息传输至境外合作伙伴（如香港或中国大陆的持牌律师事务所）以提供相关服务。我们将采取必要的安全措施，确保跨境数据传输符合适用的隐私保护法规。'
    },
    {
      id: 'updates',
      title: '十、政策的更新',
      icon: RefreshCw,
      content: '我们可能会不时更新本隐私政策。任何重大变更我们都会及时通过网站公告或电子邮件方式通知您。我们鼓励您定期查阅本政策，以了解最新的隐私保护措施。'
    }
  ]

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[400px] overflow-hidden bg-black">
        <div className="absolute inset-0">
          <Image
            src="/images/hero/debt-recovery-1.jpg"
            alt="Privacy Policy"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
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
                法律文件
              </motion.p>
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-4xl lg:text-5xl text-white mb-6 font-bold"
              >
                隐私政策
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-lg text-white/80 leading-relaxed"
              >
                我们重视并承诺保护您的隐私和个人信息安全
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-10 bg-white">
        <div className="max-w-4xl mx-auto px-8">
          {sections.map((section, index) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="mb-16"
            >
              <div className="flex items-start gap-4 mb-6">
                <section.icon className="w-6 h-6 text-primary-blue mt-1 flex-shrink-0" />
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">{section.title}</h2>
                  
                  {section.content && (
                    <p className="text-gray-600 leading-relaxed mb-4">{section.content}</p>
                  )}
                  
                  {section.items && (
                    <ul className="space-y-2">
                      {section.items.map((item, idx) => (
                        <li key={idx} className="text-gray-600 flex items-start">
                          <span className="text-primary-blue mr-2">•</span>
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  
                  {section.subsections && section.subsections.map((subsection, subIdx) => (
                    <div key={subIdx} className="mb-6">
                      <h3 className="text-lg font-semibold text-gray-800 mb-3">{subsection.title}</h3>
                      <ul className="space-y-2">
                        {subsection.items.map((item, itemIdx) => (
                          <li key={itemIdx} className="text-gray-600 flex items-start">
                            <span className="text-primary-blue mr-2">•</span>
                            <span className="leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="flex items-start gap-4 mb-6">
              <Mail className="w-6 h-6 text-primary-blue mt-1 flex-shrink-0" />
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">十一、联系我们</h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  若您对本隐私政策有任何疑问或反馈，请通过以下方式联系我们：
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-primary-blue" />
                    <span className="text-gray-600">电子邮件：info@binghengcredit.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-primary-blue" />
                    <span className="text-gray-600">联系电话：+86 16653086767</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Date Information */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-16 pt-8 border-t border-gray-200"
          >
            <div className="text-sm text-gray-500 space-y-1">
              <p>本政策发布日期：2024年1月1日</p>
              <p>最新修订日期：2024年1月1日</p>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}