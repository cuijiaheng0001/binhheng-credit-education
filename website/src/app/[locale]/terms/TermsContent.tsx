'use client'

import { motion } from 'framer-motion'
import { FileText, Shield, Users, Scale, Globe, Mail, MapPin, Calendar, AlertCircle } from 'lucide-react'
import { termsContent } from './termsData'
import { type Locale } from '@/i18n/config'

interface TermsContentProps {
  locale: Locale
}

const iconMap: Record<string, any> = {
  'general': FileText,
  'services': Shield,
  'fees': Users,
  'obligations': Scale,
  'liability': AlertCircle,
  'privacy': Shield,
  'termination': Calendar,
  'dispute': Scale,
  'contact': Globe
}

export default function TermsContent({ locale }: TermsContentProps) {
  const content = termsContent[locale]
  
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
              {content.title}
            </h1>
            <p className="text-lg text-gray-200">
              {content.lastUpdated}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-8">
          <div className="space-y-12">
            {content.sections.map((section, index) => {
              const Icon = iconMap[section.id] || FileText
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

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 bg-gradient-to-br from-light-gray to-gray-50 rounded-3xl p-10 border border-gray-100"
          >
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {locale === 'zh' ? '重要提醒' : 'Important Notice'}
              </h3>
              <p className="text-gray-700 leading-relaxed max-w-2xl mx-auto">
                {locale === 'zh' 
                  ? '本条款构成您与炳恒信用教育之间的完整协议。我们保留随时修改本条款的权利，修改后的条款将在网站公布后生效。'
                  : 'These terms constitute the complete agreement between you and Bingheng Credit Education. We reserve the right to modify these terms at any time, with modifications taking effect upon publication on our website.'
                }
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}