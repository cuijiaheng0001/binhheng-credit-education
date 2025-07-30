'use client'

import { motion } from 'framer-motion'
import { Phone, Mail, Globe, MapPin, Clock, MessageSquare } from 'lucide-react'
import Image from 'next/image'
import CTASection from '@/components/CTASection'
import { useLanguage } from '@/i18n/client'
import { useState } from 'react'
import ConsultationModal from '@/components/ConsultationModal'
import QuickConsultationForm from '@/components/QuickConsultationForm'

export default function ContactPage() {
  const { dictionary } = useLanguage()
  const [isConsultationOpen, setIsConsultationOpen] = useState(false)
  
  const contactInfo = [
    {
      icon: Phone,
      title: '电话',
      content: '+86 16653086767',
      link: 'tel:+8616653086767'
    },
    {
      icon: Mail,
      title: '邮箱',
      content: 'info@binghengcredit.com',
      link: 'mailto:info@binghengcredit.com'
    },
    {
      icon: Globe,
      title: '官网',
      content: 'www.binghengcredit.com',
      link: 'https://www.binghengcredit.com'
    },
    {
      icon: MapPin,
      title: '地址',
      content: '上海市浦东新区陆家嘴金融中心',
      link: null
    }
  ]

  const workingHours = [
    { day: '周一至周五', time: '9:00 - 18:00' },
    { day: '周六', time: '10:00 - 16:00' },
    { day: '周日', time: '休息' }
  ]

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] overflow-hidden bg-black">
        <div className="absolute inset-0">
          <Image
            src="/images/hero/debt-recovery-3.jpg"
            alt="Contact Us"
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
                联系我们
              </motion.p>
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-4xl lg:text-6xl text-white mb-6 font-bold"
              >
                随时为您服务
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-lg text-white/80 leading-relaxed"
              >
                专业团队24小时响应，为您提供高效的债务追收解决方案
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Consultation Form - Right after Hero */}
      <section className="py-12 px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <QuickConsultationForm 
            variant="inline"
            title="快速提交您的咨询需求"
            description="填写表单，我们将在24小时内与您联系"
          />
        </div>
      </section>

      {/* Company Info Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              公司信息与联系方式
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Bingheng Credit 总部位于中国上海市浦东新区陆家嘴金融中心，并在国内主要城市设立分支机构，
              全面覆盖债务追收所需的主要区域，随时为客户提供便捷、高效的专业服务。
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 hover:border-primary-blue/20 group"
                  whileHover={{ y: -4, scale: 1.02 }}
                >
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-blue/10 to-primary-blue/20 rounded-2xl mb-6 group-hover:shadow-lg transition-all">
                    <Icon className="w-8 h-8 text-primary-blue" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  {item.link ? (
                    <a 
                      href={item.link}
                      className="text-gray-600 hover:text-primary-blue transition-colors break-all"
                    >
                      {item.content}
                    </a>
                  ) : (
                    <p className="text-gray-600">
                      {item.content}
                    </p>
                  )}
                </motion.div>
              )
            })}
          </div>

          {/* Map and Working Hours */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Map Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl p-12 flex items-center justify-center min-h-[400px]"
            >
              <div className="text-center">
                <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 text-lg">
                  上海市浦东新区陆家嘴金融中心
                </p>
                <p className="text-gray-500 mt-2">
                  （北京、深圳等地设有分支机构）
                </p>
              </div>
            </motion.div>

            {/* Working Hours and Quick Contact */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Working Hours */}
              <div className="bg-gradient-to-br from-light-gray to-gray-50 rounded-3xl p-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Clock className="w-6 h-6 text-primary-blue mr-3" />
                  工作时间
                </h3>
                <div className="space-y-4">
                  {workingHours.map((schedule, index) => (
                    <div 
                      key={index}
                      className="flex justify-between items-center py-3 border-b border-gray-200 last:border-0"
                    >
                      <span className="text-gray-700 font-medium">{schedule.day}</span>
                      <span className="text-gray-600">{schedule.time}</span>
                    </div>
                  ))}
                </div>
                <p className="mt-6 text-sm text-gray-500">
                  * 紧急情况可通过邮件联系，我们会尽快响应
                </p>
              </div>

              {/* Quick Contact CTA */}
              <div className="bg-gradient-to-r from-navy to-blue-700 rounded-3xl p-10 text-white">
                <h3 className="text-2xl font-bold mb-4 flex items-center">
                  <MessageSquare className="w-6 h-6 mr-3" />
                  快速咨询
                </h3>
                <p className="mb-6 text-white/90">
                  立即获取免费债务评估，专业团队为您定制解决方案
                </p>
                <button
                  onClick={() => setIsConsultationOpen(true)}
                  className="w-full bg-white text-navy py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl"
                >
                  开始免费咨询
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-b from-white to-light-gray">
        <div className="max-w-4xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              常见问题
            </h2>
          </motion.div>

          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-sm"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                如何开始债务追收流程？
              </h3>
              <p className="text-gray-600">
                您可以通过电话、邮件或在线咨询表单联系我们。我们会在24小时内响应，
                并为您安排免费的案件评估。
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-sm"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                你们的收费标准是什么？
              </h3>
              <p className="text-gray-600">
                我们采用"无追回，不收费"的模式。成功追回后，根据债务金额收取25%-35%的佣金。
                具体费率会根据案件复杂度和金额大小而定。
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-sm"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                需要提供哪些文件？
              </h3>
              <p className="text-gray-600">
                通常需要债务合同、付款记录、沟通记录等相关文件。
                我们的专业团队会指导您准备所需材料。
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection 
        label={dictionary.cta.freeConsultation}
        title="准备开始追回您的资金？"
        description="专业团队随时为您服务，第一步从免费评估开始"
        buttonText="立即联系我们"
        variant="light"
        openModal={true}
      />
      
      {/* Consultation Modal */}
      <ConsultationModal 
        isOpen={isConsultationOpen} 
        onClose={() => setIsConsultationOpen(false)} 
      />
    </main>
  )
}