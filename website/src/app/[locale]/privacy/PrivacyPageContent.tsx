'use client'

import { motion } from 'framer-motion'
import { Shield, FileText, Lock, Eye, Users, RefreshCw, UserCheck, Globe, Mail, Phone } from 'lucide-react'
import { privacyContent } from './PrivacyContent'
import { type Locale } from '@/i18n/config'

interface PrivacyPageContentProps {
  locale: Locale
}

export default function PrivacyPageContent({ locale }: PrivacyPageContentProps) {
  const content = privacyContent[locale]

  const sections = [
    {
      id: 'intro',
      title: content.intro.title,
      icon: FileText,
      content: content.intro.content
    },
    {
      id: 'collection',
      title: content.collection.title,
      icon: Eye,
      content: null,
      subsections: [
        {
          title: content.collection.personalInfo.title,
          items: content.collection.personalInfo.items
        },
        {
          title: content.collection.technicalInfo.title,
          items: content.collection.technicalInfo.items
        }
      ]
    },
    {
      id: 'usage',
      title: content.usage.title,
      icon: RefreshCw,
      content: null,
      items: content.usage.purposes
    },
    {
      id: 'protection',
      title: content.protection.title,
      icon: Shield,
      content: content.protection.content
    },
    {
      id: 'sharing',
      title: content.sharing.title,
      icon: Users,
      content: content.sharing.content
    },
    {
      id: 'rights',
      title: content.rights.title,
      icon: UserCheck,
      content: content.rights.content
    },
    {
      id: 'contact',
      title: content.contact.title,
      icon: Globe,
      content: content.contact.content,
      contactInfo: {
        email: content.contact.email,
        phone: content.contact.phone
      }
    }
  ]

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

                  {section.content && (
                    <p className="text-gray-700 leading-relaxed mb-4">
                      {section.content}
                    </p>
                  )}

                  {section.subsections && (
                    <div className="space-y-6">
                      {section.subsections.map((subsection, idx) => (
                        <div key={idx}>
                          <h3 className="font-semibold text-gray-900 mb-2">
                            {subsection.title}
                          </h3>
                          <ul className="list-disc list-inside space-y-2 text-gray-700">
                            {subsection.items.map((item, itemIdx) => (
                              <li key={itemIdx}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}

                  {section.items && (
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      {section.items.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  )}

                  {section.contactInfo && (
                    <div className="mt-4 space-y-2">
                      <div className="flex items-center gap-2 text-gray-700">
                        <Mail className="w-4 h-4" />
                        <a href={`mailto:${section.contactInfo.email}`} className="text-primary-blue hover:underline">
                          {section.contactInfo.email}
                        </a>
                      </div>
                      <div className="flex items-center gap-2 text-gray-700">
                        <Phone className="w-4 h-4" />
                        <a href={`tel:${section.contactInfo.phone}`} className="text-primary-blue hover:underline">
                          {section.contactInfo.phone}
                        </a>
                      </div>
                    </div>
                  )}
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}