'use client'

import { motion } from 'framer-motion'
import { ArrowRight, FileText, TrendingUp, Users } from 'lucide-react'
import Image from 'next/image'

const articles = [
  {
    type: '行业报告',
    icon: FileText,
    title: '2025年跨境债务追收趋势分析',
    description: '深入了解中美贸易环境下的债务追收挑战与机遇',
    author: '李明',
    date: '2025年1月15日',
    image: '/images/knowledge/industry-report.jpg',
    link: '/insights/cross-border-debt-trends-2025'
  },
  {
    type: '最佳实践',
    icon: TrendingUp,
    title: '提高B2B债务追收成功率的5个策略',
    description: '基于500+成功案例总结的实用追收技巧',
    author: '王芳',
    date: '2025年1月10日',
    image: '/images/knowledge/best-practices.jpg',
    link: '/insights/b2b-debt-collection-strategies'
  },
  {
    type: '案例研究',
    icon: Users,
    title: '美国大学如何追回200万美元留学生欠款',
    description: '详解跨境学生债务追收的成功案例',
    author: '张强',
    date: '2025年1月5日',
    image: '/images/knowledge/case-study.jpg',
    link: '/insights/student-debt-case-study'
  }
]

export default function KnowledgeCenter() {
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
                知识与研究
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                紧跟行业动态，掌握信用管理洞察
              </h2>
              <p className="text-gray-600 mb-8">
                我们定期发布债务追收行业的深度分析、最佳实践和成功案例，帮助您做出更明智的信用管理决策。
              </p>
              <motion.a
                href="/insights"
                className="inline-flex items-center px-6 py-3 bg-navy text-white font-medium rounded-xl hover:bg-navy-light transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                了解更多
                <ArrowRight className="w-5 h-5 ml-2" />
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