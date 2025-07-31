'use client'

import { motion } from 'framer-motion'
import { Shield, FileText, Lock, Globe, Award, AlertCircle } from 'lucide-react'
import Image from 'next/image'

export default function ComplianceContent() {
  return (
    <main className="min-h-screen">
      {/* Hero Section - 匹配主页风格 */}
      <section className="relative h-[40vh] min-h-[400px] overflow-hidden bg-black">
        <div className="absolute inset-0">
          <Image
            src="/images/hero/debt-recovery-1.jpg"
            alt="Compliance and Legal Framework"
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
                合规性声明
              </motion.p>
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-4xl lg:text-5xl text-white mb-6 font-bold"
              >
                合规、透明、专业
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-lg text-white/80 leading-relaxed"
              >
                我们致力于严格遵守中美相关法律法规，以专业、透明、合规的方式开展跨境债务追收业务。
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 合规性声明 */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <Shield className="w-10 h-10 text-primary-blue" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              合规性声明
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              我们致力于严格遵守中美相关法律法规，以专业、透明、合规的方式开展跨境债务追收业务。诚信经营是我们的立足之本，我们将持续维护客户与债务人的合法权益。
            </p>
          </motion.div>
        </div>
      </section>

      {/* FDCPA合规说明 */}
      <section className="py-10 bg-light-gray">
        <div className="max-w-7xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="flex items-center gap-4 mb-6">
              <FileText className="w-8 h-8 text-primary-blue" />
              <h2 className="text-3xl font-bold text-gray-900">FDCPA合规说明</h2>
            </div>
            <p className="text-gray-600 mb-8">
              我司严格遵守美国《公平债务催收作业法》（FDCPA）及其Regulation F的相关要求。
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-sm"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">适用范围</h3>
                <p className="text-gray-600 leading-relaxed">
                  本公司仅处理商业债务（B2B）或债务人已离境且不再居住于美国的个人债务，因此不直接触发FDCPA相关规定。
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white p-8 rounded-xl shadow-sm"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">沟通政策</h3>
                <p className="text-gray-600 leading-relaxed">
                  我们坚持合规、文明、尊重的债务追收沟通原则，严禁骚扰、误导、威胁等行为。
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white p-8 rounded-xl shadow-sm"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">争议处理机制</h3>
                <p className="text-gray-600 leading-relaxed">
                  债务人如有争议或投诉，可通过明确渠道联系我们，我们将快速回应并妥善解决。
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-white p-8 rounded-xl shadow-sm"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">跨境委托合规性</h3>
                <p className="text-gray-600 leading-relaxed">
                  根据FDCPA和TCPA，美国法律并未禁止将债务追收委托境外机构，但我们将严格遵守FDCPA关于沟通频率、沟通方式和债务诉讼地点（venue）的要求，以规避潜在法律风险。
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 中美法律框架说明 */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-12">
              <Globe className="w-8 h-8 text-primary-blue" />
              <h2 className="text-3xl font-bold text-gray-900">中美法律框架说明</h2>
            </div>
            <p className="text-gray-600 mb-12 text-lg">
              我们业务严格符合中国和美国法律法规要求。
            </p>
            
            <div className="grid lg:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-light-gray p-8 rounded-xl"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">中国法律依据</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• 《中华人民共和国民法典》</li>
                  <li>• 《中华人民共和国个人信息保护法》</li>
                  <li>• 《中华人民共和国网络安全法》等</li>
                </ul>
                <p className="mt-4 text-sm text-gray-600">
                  我们仅通过中国境内合法主体（如持证律师事务所）进行债务追收，遵循严格的行为规范。
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-light-gray p-8 rounded-xl"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">美国法律依据</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• 《公平债务催收作业法》（FDCPA）</li>
                  <li>• 《电话消费者保护法》（TCPA）</li>
                </ul>
                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-6">香港法律要求</h3>
                <p className="text-gray-600">
                  我们遵守香港《个人资料（私隐）条例》(PDPO)的相关规定，保障债务人个人信息的妥善使用和保护。
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-light-gray p-8 rounded-xl"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">业务地域范围</h3>
                <p className="text-gray-600">
                  我们仅针对债务人已返回中国境内的案件开展催收业务，确保合规和可执行性。
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 数据安全与隐私保护政策 */}
      <section className="py-10 bg-light-gray">
        <div className="max-w-7xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-12">
              <Lock className="w-8 h-8 text-primary-blue" />
              <h2 className="text-3xl font-bold text-gray-900">数据安全与隐私保护政策</h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: '数据脱敏',
                  description: '收到身份证号后立即生成SHA‑256摘要，原文瞬时清除，不落磁盘。',
                  detail: '依据：《个人信息保护法》第6条、第51条第（三）项'
                },
                {
                  title: '加密传输',
                  description: '所有文件与API调用均使用TLS 1.3协议加密传输。',
                  detail: '依据：《网络安全法》第21条第（四）项、《个人信息保护法》第51条第（三）项、等保2.0"通信传输安全"'
                },
                {
                  title: '访问控制',
                  description: '仅授权坐席经理1人可查看明文手机号，其余人员仅见末4位。',
                  detail: '依据：《个人信息保护法》第51条第（四）项、等保2.0"身份鉴别、访问控制"'
                },
                {
                  title: '日志留存',
                  description: '接口查询、号码查看、拨号3类操作全部写入日志，并保存3年。',
                  detail: '依据：《网络安全法》第21条第（三）项、金融行业标准'
                },
                {
                  title: '数据保留',
                  description: '案件结案或180天未动用即自动删除明文数据，仅保留摘要用于审计。',
                  detail: '依据：《个人信息保护法》第19条'
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
                  whileHover={{ y: -4 }}
                >
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 mb-3">{item.description}</p>
                  <p className="text-sm text-gray-500">{item.detail}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 其他政策 */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-light-gray p-8 rounded-xl"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">反贿赂与反腐败政策</h3>
              <p className="text-gray-600 leading-relaxed">
                我们绝不容忍任何形式的贿赂与腐败行为，并建立了完善的内部控制体系，确保所有业务流程符合法律和道德规范。
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-light-gray p-8 rounded-xl"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">内部合规监控与审计机制</h3>
              <p className="text-gray-600 leading-relaxed">
                我们设立专门的合规部门，定期开展合规培训和内部审计，确保公司各项业务活动始终合规运行。
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 资质与认证 */}
      <section className="py-10 bg-light-gray">
        <div className="max-w-7xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Award className="w-12 h-12 text-primary-blue mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-6">资质与认证</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              我们已获得美国ACA（国际债务催收协会）会员资格，进一步保障催收业务的合规性与专业性。
            </p>
          </motion.div>
        </div>
      </section>

      {/* 联系渠道与举报通道 */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-navy to-blue-700 rounded-2xl p-12 text-white text-center"
          >
            <AlertCircle className="w-12 h-12 mx-auto mb-6 text-white" />
            <h2 className="text-3xl font-bold mb-6">联系渠道与举报通道</h2>
            <p className="text-lg mb-8 opacity-90">
              如发现任何违规行为或希望提出合规相关问题，请及时通过以下方式联系我们：
            </p>
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <div className="bg-white/10 backdrop-blur rounded-lg px-6 py-4">
                <p className="font-semibold mb-1 text-white">邮箱</p>
                <a href="mailto:compliance@binghengcredit.com" className="hover:underline text-white/90">
                  compliance@binghengcredit.com
                </a>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg px-6 py-4">
                <p className="font-semibold mb-1 text-white">电话</p>
                <a href="tel:+86-166-5308-6767" className="hover:underline text-white/90">
                  +86 16653086767
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}