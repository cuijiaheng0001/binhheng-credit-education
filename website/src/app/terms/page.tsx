'use client'

import { motion } from 'framer-motion'
import { FileText, Shield, Users, Scale, Globe, Mail, MapPin, Calendar, AlertCircle } from 'lucide-react'
import Image from 'next/image'
import { useLanguage } from '@/i18n/client'

export default function TermsPage() {
  const { dictionary } = useLanguage()
  
  const sections = [
    {
      id: 'general',
      title: '一、总则',
      icon: FileText,
      items: [
        '本服务条款适用于所有通过本平台提交催收需求、使用平台工具或建立合作关系的客户，包括自然人和法人。',
        '若您不同意本条款任何内容，请停止使用本平台服务。'
      ]
    },
    {
      id: 'service-scope',
      title: '二、服务范围与使用限制',
      icon: Shield,
      content: [
        {
          text: '本平台专注于协助客户对中国大陆债务人（包括自然人或企业）进行非诉方式的合法合规催收。',
          isBold: false
        },
        {
          text: '服务内容包括但不限于：',
          isBold: true
        }
      ],
      subItems: [
        '债务信息整理与风险评估',
        '身份信息核验（如基于身份证号匹配）',
        '催收路径建议与话术支持',
        '通过短信、邮件、电话、函件等手段进行温和提醒',
        '跨境债权沟通协调'
      ],
      additionalItems: [
        '本平台不提供法律诉讼代理服务，不参与任何超出合规范围的追偿手段。',
        {
          text: '禁止以下行为：',
          isBold: true
        }
      ],
      prohibitedItems: [
        '提交虚假或非法债权材料',
        '通过平台进行骚扰、威胁、辱骂或欺诈行为',
        '擅自篡改平台内容或干扰平台系统运行'
      ]
    },
    {
      id: 'client-obligations',
      title: '三、客户义务',
      icon: Users,
      items: [
        '客户应确保其提供的债权信息真实、合法、完整，包括但不限于合同、发票、付款凭证等。',
        '客户须对其委托平台操作的合法性承担全部责任，并确保不侵犯第三方合法权益。',
        '如因客户提供虚假或违法信息而导致平台或第三方遭受损失，客户应承担全部法律责任并赔偿损失。'
      ]
    },
    {
      id: 'disclaimer',
      title: '四、免责声明',
      icon: AlertCircle,
      items: [
        '本平台不对债务催收成功率作出任何保证。',
        '若因债务人失联、材料不足、信息不实等原因导致催收失败或争议，本平台不承担任何法律责任。',
        '客户理解并接受，平台服务为辅助性质，不能替代司法途径或法律判决。'
      ]
    },
    {
      id: 'intellectual-property',
      title: '五、知识产权',
      icon: Shield,
      items: [
        '本平台及其网站上所有内容（包括但不限于文字、图形、LOGO、结构、流程设计、工具脚本等）均为冰衡或其关联方所有，受法律保护。',
        '未经书面授权，禁止任何形式的复制、使用、传播、仿制或商业利用。'
      ]
    },
    {
      id: 'data-protection',
      title: '六、数据保护与隐私',
      icon: Shield,
      items: [
        '客户提交的任何身份信息、债务信息等数据将用于核验与催收相关目的，不用于其他商业用途。',
        '平台将依法依规保护客户与债务人数据安全，防止数据泄露、滥用。',
        '详细内容请参见《隐私政策》页面。'
      ]
    },
    {
      id: 'law-disputes',
      title: '七、法律适用与争议解决',
      icon: Scale,
      items: [
        '本条款的订立、执行与解释应适用中国香港特别行政区法律。',
        '双方因服务条款或服务使用发生争议，应优先协商解决；协商不成的，任一方可提交香港国际仲裁中心（HKIAC）进行仲裁，仲裁裁决为终局裁决，对双方具有约束力。'
      ]
    },
    {
      id: 'updates',
      title: '八、条款更新',
      icon: Calendar,
      items: [
        '本平台有权根据服务发展需要对本条款进行修改，并在本页面进行公示。',
        '条款更新后，若客户继续使用服务，即视为接受新条款内容。'
      ]
    }
  ]

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[400px] overflow-hidden bg-black">
        <div className="absolute inset-0">
          <Image
            src="/images/hero/debt-recovery-1.jpg"
            alt="Terms of Service"
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
                服务条款
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-lg text-white/80 leading-relaxed"
              >
                请仔细阅读并理解我们的服务条款
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-8">
          {/* Effective Date */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <p className="text-gray-600 mb-6">
              <strong>生效日期：2025年7月28日</strong>
            </p>
            <p className="text-gray-600 leading-relaxed">
              欢迎您使用冰衡 Bingheng Credit（以下简称"我们"或"本平台"）提供的服务。您在使用我们的服务前，请仔细阅读并理解以下条款内容。一旦您访问、提交信息或使用本平台服务，即表示您已同意受本服务条款的约束。
            </p>
          </motion.div>

          {/* Sections */}
          {sections.map((section, index) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="mb-12"
            >
              <div className="flex items-start gap-4 mb-6">
                <section.icon className="w-6 h-6 text-primary-blue mt-1 flex-shrink-0" />
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">{section.title}</h2>
                  
                  {/* Regular items */}
                  {section.items && (
                    <ol className="space-y-3 mb-4">
                      {section.items.map((item, idx) => (
                        <li key={idx} className="text-gray-600 flex items-start">
                          <span className="text-gray-500 mr-2">{idx + 1}.</span>
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ol>
                  )}
                  
                  {/* Special content for service scope */}
                  {section.content && section.content.map((content, idx) => (
                    <p key={idx} className={`text-gray-600 mb-3 ${content.isBold ? 'font-semibold' : ''}`}>
                      {idx + 1}. {content.text}
                    </p>
                  ))}
                  
                  {/* Sub items */}
                  {section.subItems && (
                    <ul className="ml-6 space-y-2 mb-4">
                      {section.subItems.map((item, idx) => (
                        <li key={idx} className="text-gray-600 flex items-start">
                          <span className="text-primary-blue mr-2">•</span>
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  
                  {/* Additional items */}
                  {section.additionalItems && section.additionalItems.map((item, idx) => (
                    <p key={idx} className={`text-gray-600 mb-3 ${typeof item === 'object' && item.isBold ? 'font-semibold' : ''}`}>
                      {3 + idx}. {typeof item === 'string' ? item : item.text}
                    </p>
                  ))}
                  
                  {/* Prohibited items */}
                  {section.prohibitedItems && (
                    <ul className="ml-6 space-y-2">
                      {section.prohibitedItems.map((item, idx) => (
                        <li key={idx} className="text-gray-600 flex items-start">
                          <span className="text-primary-blue mr-2">•</span>
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
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
                <h2 className="text-2xl font-bold text-gray-900 mb-4">九、联系我们</h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  如您对本条款有任何疑问或建议，请通过以下方式与我们联系：
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-primary-blue flex-shrink-0" />
                    <div>
                      <span className="text-gray-600">邮箱：</span>
                      <a href="mailto:support@binghengcredit.com" className="text-primary-blue hover:underline">
                        support@binghengcredit.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Globe className="w-5 h-5 text-primary-blue flex-shrink-0" />
                    <div>
                      <span className="text-gray-600">网站：</span>
                      <a href="http://www.binghengcredit.com" className="text-primary-blue hover:underline">
                        www.binghengcredit.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary-blue flex-shrink-0" />
                    <span className="text-gray-600">地址：香港中环德辅道中XX号</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* End mark */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-16 pt-8 border-t border-gray-200 text-center"
          >
            <p className="text-gray-500">（完）</p>
          </motion.div>
        </div>
      </section>
    </main>
  )
}