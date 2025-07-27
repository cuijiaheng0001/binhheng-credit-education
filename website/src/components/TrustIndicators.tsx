'use client'

import { motion } from 'framer-motion'
import { Shield, Award, Scale, FileCheck } from 'lucide-react'

const certifications = [
  {
    icon: Shield,
    name: 'FDCPA Compliant',
    description: '美国公平债务催收法合规认证'
  },
  {
    icon: Scale,
    name: 'PIPL Certified',
    description: '中国个人信息保护法合规'
  },
  {
    icon: FileCheck,
    name: 'ISO 27001',
    description: '信息安全管理体系认证'
  },
  {
    icon: Award,
    name: 'BBB Accredited',
    description: '美国商业改进局A+评级'
  }
]

const testimonials = [
  {
    company: 'University Housing Corp',
    quote: '在Binhheng的帮助下，我们追回了超过200万美元的留学生欠款，这些债务我们原本已经准备注销。',
    author: 'Sarah Johnson',
    role: 'CFO'
  },
  {
    company: 'Global Trade Partners',
    quote: '他们对中国市场的深入了解和专业网络，帮助我们成功追回了多笔被认为无法收回的贸易欠款。',
    author: 'Michael Chen',
    role: 'Credit Manager'
  }
]

export default function TrustIndicators() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
            值得信赖的合作伙伴
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            合规、专业、高效 - 您的跨境债务追收专家
          </p>
        </motion.div>

        {/* Certifications */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {certifications.map((cert, index) => {
            const Icon = cert.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-sm text-center"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-blue-50 rounded-lg mx-auto mb-4">
                  <Icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">{cert.name}</h3>
                <p className="text-sm text-gray-600">{cert.description}</p>
              </motion.div>
            )
          })}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-blue-600 rounded-2xl p-12 text-white mb-16"
        >
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">$128M+</div>
              <p className="text-blue-100">累计追回金额</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <p className="text-blue-100">服务客户数</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">60%</div>
              <p className="text-blue-100">平均成功率</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">45天</div>
              <p className="text-blue-100">平均回收时间</p>
            </div>
          </div>
        </motion.div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-lg shadow-sm"
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">"{testimonial.quote}"</p>
              <div>
                <p className="font-semibold text-gray-900">{testimonial.author}</p>
                <p className="text-sm text-gray-600">
                  {testimonial.role}, {testimonial.company}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            准备追回您的资金？
          </h3>
          <p className="text-gray-600 mb-8">
            立即获取免费案件评估，了解您的追收可能性
          </p>
          <button className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-lg font-medium">
            开始免费评估
          </button>
        </motion.div>
      </div>
    </section>
  )
}