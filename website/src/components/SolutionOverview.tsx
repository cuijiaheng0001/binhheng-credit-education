'use client'

import { motion } from 'framer-motion'
import { CheckCircle, Globe, Shield, Users } from 'lucide-react'
import { type Locale } from '@/i18n/config'

const getSolutions = (locale: Locale) => [
  {
    icon: Globe,
    title: '本地化专业网络',
    description: '在中国主要城市拥有合作伙伴，了解当地法律和文化',
    features: ['覆盖一线到三线城市', '本地律师合作网络', '文化沟通优势']
  },
  {
    icon: Shield,
    title: '完全合规操作',
    description: '严格遵守FDCPA、PIPL等国际和当地法规',
    features: ['美国FDCPA认证', '中国PIPL合规', '香港PDPO遵守']
  },
  {
    icon: Users,
    title: locale === 'zh' ? '专业追收团队' : 'Expert Recovery Team',
    description: locale === 'zh' 
      ? '双语团队，深谙中美商业文化差异'
      : 'Bilingual professionals bridging US-China business cultures',
    features: locale === 'zh' 
      ? ['平均10年+经验', '中英双语沟通', '24/7响应支持']
      : ['10+ years average experience', 'Native fluency in English and Mandarin', 'Round-the-clock support']
  }
]

interface SolutionOverviewProps {
  locale?: Locale
}

export default function SolutionOverview({ locale = 'zh' }: SolutionOverviewProps) {
  const solutions = getSolutions(locale)
  
  return (
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
            {locale === 'zh' ? '我们的独特方法' : 'Our Unique Approach'}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {locale === 'zh' 
              ? '结合本地专业知识、合规操作和文化理解，实现高效追收'
              : 'Combining local expertise, regulatory compliance, and cultural intelligence to deliver superior recovery results'}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => {
            const Icon = solution.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="h-full p-8 border border-gray-200 rounded-lg hover:border-blue-500 transition-colors">
                  <div className="flex items-center justify-center w-12 h-12 bg-blue-50 rounded-lg mb-6 group-hover:bg-blue-100 transition-colors">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {solution.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {solution.description}
                  </p>
                  <ul className="space-y-2">
                    {solution.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}