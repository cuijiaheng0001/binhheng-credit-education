'use client'

import { motion } from 'framer-motion'
import { ArrowRight, FileText, TrendingUp, Users } from 'lucide-react'
import Image from 'next/image'
import { type Locale } from '@/i18n/config'

const getArticles = (locale: Locale) => [
  {
    type: locale === 'zh' ? '行业报告' : 'Industry Report',
    icon: FileText,
    title: locale === 'zh' ? '2025年跨境债务追收趋势分析' : '2025 Cross-Border Debt Recovery Trends Analysis',
    description: locale === 'zh' ? '深入了解中美贸易环境下的债务追收挑战与机遇' : 'In-depth insights into debt recovery challenges and opportunities in US-China trade',
    author: locale === 'zh' ? '李明' : 'Michael Li',
    date: locale === 'zh' ? '2025年1月15日' : 'January 15, 2025',
    image: '/images/knowledge/industry-report.jpg',
    link: '/insights/cross-border-debt-trends-2025'
  },
  {
    type: locale === 'zh' ? '最佳实践' : 'Best Practices',
    icon: TrendingUp,
    title: locale === 'zh' ? '提高B2B债务追收成功率的5个策略' : '5 Strategies to Improve B2B Debt Recovery Success Rate',
    description: locale === 'zh' ? '基于500+成功案例总结的实用追收技巧' : 'Practical recovery techniques based on 500+ successful cases',
    author: locale === 'zh' ? '王芳' : 'Fiona Wang',
    date: locale === 'zh' ? '2025年1月10日' : 'January 10, 2025',
    image: '/images/knowledge/best-practices.jpg',
    link: '/insights/b2b-debt-collection-strategies'
  },
  {
    type: locale === 'zh' ? '案例研究' : 'Case Study',
    icon: Users,
    title: locale === 'zh' ? '美国大学如何追回200万美元留学生欠款' : 'How a US University Recovered $2M in International Student Debts',
    description: locale === 'zh' ? '详解跨境学生债务追收的成功案例' : 'Detailed success story of cross-border student debt recovery',
    author: locale === 'zh' ? '张强' : 'John Zhang',
    date: locale === 'zh' ? '2025年1月5日' : 'January 5, 2025',
    image: '/images/knowledge/case-study.jpg',
    link: '/insights/student-debt-case-study'
  }
]

interface KnowledgeCenterProps {
  locale?: Locale
}

export default function KnowledgeCenter({ locale = 'zh' }: KnowledgeCenterProps) {
  const articles = getArticles(locale)
  return (
    <section className="py-14 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left Content */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-sm font-medium text-primary-blue mb-2">
                {locale === 'zh' ? '知识与研究' : 'Knowledge & Research'}
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {locale === 'zh' ? '紧跟行业动态，掌握信用管理洞察' : 'Stay Ahead with Industry Insights'}
              </h2>
              <p className="text-gray-600 mb-8">
                {locale === 'zh' ? '我们定期发布债务追收行业的深度分析、最佳实践和成功案例，帮助您做出更明智的信用管理决策。' : 'We regularly publish in-depth analyses, best practices, and success stories from the debt recovery industry to help you make smarter credit management decisions.'}
              </p>
              <motion.a
                href={`/${locale}/insights`}
                className="inline-flex items-center px-6 py-3 bg-navy text-white font-medium rounded-xl hover:bg-navy-light transition-colors no-underline"
                aria-label={locale === 'zh' ? '访问债务追收洞察与分析页面' : 'Visit debt recovery insights and analysis page'}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-white">{locale === 'zh' ? '探索债务追收洞察与分析' : 'Explore Debt Recovery Insights'}</span>
                <ArrowRight className="w-5 h-5 ml-2 text-white" />
              </motion.a>
            </motion.div>
          </div>

          {/* Right Articles */}
          <div className="lg:col-span-3 space-y-6">
            {articles.map((article, index) => {
              const Icon = article.icon
              return (
                <motion.a
                  key={index}
                  href={article.link}
                  className="group flex gap-6 p-6 bg-gray-50 rounded-lg hover:bg-white hover:shadow-lg transition-all duration-300"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  {/* Image */}
                  <div className="relative w-32 h-24 rounded-lg overflow-hidden flex-shrink-0">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Icon className="w-4 h-4 text-primary-blue" />
                      <span className="text-sm font-medium text-primary-blue">
                        {article.type}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-primary-blue transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-2 line-clamp-2">
                      {article.description}
                    </p>
                    <div className="flex items-center gap-3 text-xs text-gray-500">
                      <span>{article.author}</span>
                      <span>•</span>
                      <span>{article.date}</span>
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="flex items-center">
                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-primary-blue transition-colors" />
                  </div>
                </motion.a>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}