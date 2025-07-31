'use client'

import { motion } from 'framer-motion'
import { Phone, Mail, Globe, MapPin, Clock, MessageSquare } from 'lucide-react'
import Image from 'next/image'
import CTASection from '@/components/CTASection'
import { useState } from 'react'
import ConsultationModal from '@/components/ConsultationModal'
import QuickConsultationForm from '@/components/QuickConsultationForm'

interface ContactContentProps {
  dictionary: any
  locale: string
}

export default function ContactContent({ dictionary, locale }: ContactContentProps) {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false)
  
  const contactInfo = [
    {
      icon: Phone,
      title: locale === 'zh' ? '电话' : 'Phone',
      content: '+86 16653086767',
      link: 'tel:+8616653086767'
    },
    {
      icon: Mail,
      title: locale === 'zh' ? '邮箱' : 'Email',
      content: 'info@binghengcredit.com',
      link: 'mailto:info@binghengcredit.com'
    },
    {
      icon: Globe,
      title: locale === 'zh' ? '官网' : 'Website',
      content: 'www.binghengcredit.com',
      link: 'https://www.binghengcredit.com'
    },
    {
      icon: MapPin,
      title: locale === 'zh' ? '地址' : 'Address',
      content: locale === 'zh' ? '上海市浦东新区陆家嘴金融中心' : 'Lujiazui Financial Center, Pudong New Area, Shanghai',
      link: null
    }
  ]

  const workingHours = [
    { day: locale === 'zh' ? '周一至周五' : 'Monday to Friday', time: locale === 'zh' ? '9:00 - 18:00' : '9:00 AM - 6:00 PM' },
    { day: locale === 'zh' ? '周六' : 'Saturday', time: locale === 'zh' ? '10:00 - 16:00' : '10:00 AM - 4:00 PM' },
    { day: locale === 'zh' ? '周日' : 'Sunday', time: locale === 'zh' ? '休息' : 'Closed' }
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
            className="object-cover opacity-90"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />
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
                {locale === 'zh' ? '联系我们' : 'Contact Us'}
              </motion.p>
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="font-sans text-4xl lg:text-6xl text-white mb-6 leading-[1.1] font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
              >
                {locale === 'zh' ? '随时为您服务' : 'Here to Serve You 24/7'}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-base md:text-lg lg:text-xl text-white/80 leading-relaxed drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]"
              >
                {locale === 'zh' ? '专业团队24小时响应，为您提供高效的债务追收解决方案' : 'Our professional team responds within 24 hours to provide efficient debt recovery solutions'}
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
            title={locale === 'zh' ? '快速提交您的咨询需求' : 'Quick & Easy Inquiry Submission'}
            description={locale === 'zh' ? '填写表单，我们将在24小时内与您联系' : 'Complete the form and we\'ll contact you within 24 hours'}
            locale={locale}
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
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {locale === 'zh' ? '公司信息与联系方式' : 'Company Information & Contact Details'}
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              {locale === 'zh' 
                ? 'Bingheng Credit 总部位于中国上海市浦东新区陆家嘴金融中心，并在国内主要城市设立分支机构，全面覆盖债务追收所需的主要区域，随时为客户提供便捷、高效的专业服务。'
                : 'Bingheng Credit is headquartered in Lujiazui Financial Center, Pudong New Area, Shanghai, China, with branch offices in major cities across the country. Our comprehensive network covers all key regions necessary for debt recovery, enabling us to provide convenient and efficient professional services to our clients at all times.'}
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
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  {item.link ? (
                    <a 
                      href={item.link}
                      className="text-sm md:text-base text-gray-600 hover:text-primary-blue transition-colors break-all"
                    >
                      {item.content}
                    </a>
                  ) : (
                    <p className="text-sm md:text-base text-gray-600">
                      {item.content}
                    </p>
                  )}
                </motion.div>
              )
            })}
          </div>

          {/* Map and Working Hours */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl overflow-hidden shadow-lg min-h-[400px] relative"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13631.837296438014!2d121.49185897715896!3d31.235158874901847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35b27040b1f617c1%3A0x2d8c7b3e5c8a5a0e!2sLujiazui%2C%20Pudong%2C%20Shanghai%2C%20China!5e0!3m2!1sen!2sus!4v1735635841234!5m2!1sen!2sus"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lujiazui Financial Center Location"
                className="w-full h-full"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm p-4">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary-blue" />
                  <div>
                    <p className="text-sm font-semibold text-gray-900">
                      {locale === 'zh' ? '上海市浦东新区陆家嘴金融中心' : 'Lujiazui Financial Center'}
                    </p>
                    <p className="text-xs text-gray-600">
                      {locale === 'zh' ? '（北京、深圳等地设有分支机构）' : '(Branch offices in Beijing, Shenzhen, and other cities)'}
                    </p>
                  </div>
                </div>
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
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Clock className="w-6 h-6 text-primary-blue mr-3" />
                  {locale === 'zh' ? '工作时间' : 'Business Hours'}
                </h3>
                <div className="space-y-4">
                  {workingHours.map((schedule, index) => (
                    <div 
                      key={index}
                      className="flex justify-between items-center py-3 border-b border-gray-200 last:border-0"
                    >
                      <span className="text-sm md:text-base text-gray-700 font-medium">{schedule.day}</span>
                      <span className="text-sm md:text-base text-gray-600">{schedule.time}</span>
                    </div>
                  ))}
                </div>
                <p className="mt-6 text-sm text-gray-500">
                  * {locale === 'zh' ? '紧急情况可通过邮件联系，我们会尽快响应' : 'For emergencies, please contact us via email and we\'ll respond as soon as possible'}
                </p>
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
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {locale === 'zh' ? '常见问题' : 'Frequently Asked Questions'}
            </h2>
          </motion.div>

          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-sm"
            >
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">
                {locale === 'zh' ? '如何开始债务追收流程？' : 'How do I start the debt recovery process?'}
              </h3>
              <p className="text-sm md:text-base text-gray-600">
                {locale === 'zh' 
                  ? '您可以通过电话、邮件或在线咨询表单联系我们。我们会在24小时内响应，并为您安排免费的案件评估。'
                  : 'You can contact us by phone, email, or through our online inquiry form. We\'ll respond within 24 hours and arrange a free case assessment for you.'}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-sm"
            >
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">
                {locale === 'zh' ? '你们的收费标准是什么？' : 'What are your fees?'}
              </h3>
              <p className="text-sm md:text-base text-gray-600">
                {locale === 'zh' 
                  ? '我们采用"无追回，不收费"的模式。成功追回后，根据债务金额收取25%-35%的佣金。具体费率会根据案件复杂度和金额大小而定。'
                  : 'We work on a contingency basis - no recovery, no fee. Upon successful collection, we charge 25%-35% of the recovered amount. Exact rates depend on case complexity and debt size.'}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-sm"
            >
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">
                {locale === 'zh' ? '需要提供哪些文件？' : 'What documents will I need?'}
              </h3>
              <p className="text-sm md:text-base text-gray-600">
                {locale === 'zh' 
                  ? '通常需要债务合同、付款记录、沟通记录等相关文件。我们的专业团队会指导您准备所需材料。'
                  : 'You\'ll typically need contracts, payment records, and correspondence related to the debt. Our team will guide you through gathering all necessary documentation.'}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection 
        label={dictionary.cta.freeConsultation}
        title={locale === 'zh' ? '准备开始追回您的资金？' : 'Ready to Get Your Money Back?'}
        description={locale === 'zh' ? '专业团队随时为您服务，第一步从免费评估开始' : 'Our professional team is ready to help – start with a free assessment today'}
        buttonText={locale === 'zh' ? '立即联系我们' : 'Contact Us Now'}
        variant="light"
        openModal={true}
        locale={locale}
      />
      
      {/* Consultation Modal */}
      <ConsultationModal 
        isOpen={isConsultationOpen} 
        onClose={() => setIsConsultationOpen(false)} 
      />
    </main>
  )
}