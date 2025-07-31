'use client'

import { motion } from 'framer-motion'
import { FileText, Shield, Users, Scale, Globe, Mail, MapPin, Calendar, AlertCircle } from 'lucide-react'

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
    id: 'services',
    title: '二、服务内容',
    icon: Shield,
    items: [
      '炳恒信用教育提供国际债务追收服务，包括但不限于债务人定位、沟通谈判、法律咨询和资金回收。',
      '服务范围覆盖中美两国间的跨境债务追收，主要包括学生住宿、电商平台和B2B贸易三大领域。',
      '我们承诺在法律框架内开展业务，确保所有追收行为符合相关法律法规。'
    ]
  },
  {
    id: 'fees',
    title: '三、费用结构',
    icon: Users,
    items: [
      '我们采用成功收费模式，即"无追回，不收费"原则。',
      '服务费用按追回金额的一定比例收取，具体比例根据债务金额和案件复杂程度确定。',
      '客户需承担的额外费用包括但不限于法律诉讼费、第三方调查费和国际汇款手续费。',
      '所有费用标准在签署服务协议前将明确告知客户。'
    ]
  },
  {
    id: 'obligations',
    title: '四、双方权利义务',
    icon: Scale,
    items: [
      '客户应提供真实、完整的债务信息和相关证据材料。',
      '炳恒信用教育有权要求客户补充必要的文件和信息。',
      '我们承诺对客户信息严格保密，并定期汇报案件进展。',
      '客户应配合我们的调查和追收工作，包括提供必要的授权文件。'
    ]
  },
  {
    id: 'liability',
    title: '五、责任限制',
    icon: AlertCircle,
    items: [
      '炳恒信用教育不保证100%追回债务，追收结果受多种因素影响。',
      '我们对因不可抗力、第三方行为或客户信息不准确导致的损失不承担责任。',
      '服务期间发生的争议优先通过协商解决，协商不成可提交仲裁或诉讼。'
    ]
  },
  {
    id: 'termination',
    title: '六、协议终止',
    icon: Calendar,
    items: [
      '任何一方可在提前30天书面通知的情况下终止服务协议。',
      '协议终止后，已产生的费用仍需按约定支付。',
      '保密义务在协议终止后继续有效。'
    ]
  }
]

export default function TermsContent() {
  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy via-navy-light to-primary-blue text-white py-16">
        <div className="max-w-7xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              服务条款
            </h1>
            <p className="text-lg text-gray-200">
              最后更新：2025年1月
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-8">
          <div className="space-y-12">
            {sections.map((section, index) => {
              const Icon = section.icon
              return (
                <motion.div
                  key={section.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg p-8"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 bg-primary-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-primary-blue" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">
                      {section.title}
                    </h2>
                  </div>

                  <ul className="space-y-4">
                    {section.items.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="w-2 h-2 bg-primary-blue rounded-full mt-2 mr-4 flex-shrink-0"></div>
                        <p className="text-gray-700 leading-relaxed">{item}</p>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )
            })}
          </div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 bg-gradient-to-br from-light-gray to-gray-50 rounded-3xl p-10 border border-gray-100"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-primary-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Globe className="w-6 h-6 text-primary-blue" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">
                七、联系方式
              </h2>
            </div>
            
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed mb-6">
                如对本服务条款有任何疑问，请通过以下方式联系我们：
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-primary-blue" />
                    <div>
                      <p className="font-semibold text-gray-900">邮箱地址</p>
                      <a href="mailto:legal@binghengcredit.com" className="text-primary-blue hover:underline">
                        legal@binghengcredit.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-primary-blue" />
                    <div>
                      <p className="font-semibold text-gray-900">联系电话</p>
                      <a href="tel:+8616653086767" className="text-primary-blue hover:underline">
                        +86 16653086767
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-6">
                  <h4 className="font-semibold text-gray-900 mb-3">重要提醒</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    本条款构成您与炳恒信用教育之间的完整协议。我们保留随时修改本条款的权利，修改后的条款将在网站公布后生效。
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}