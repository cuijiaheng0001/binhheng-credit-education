'use client'

import { motion } from 'framer-motion'
import { Calendar, Clock, ArrowRight, BookOpen, FileText, Scale, BarChart3, Lightbulb } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { getAllInsights, InsightArticle } from '@/lib/insights-data'
import { useState } from 'react'

const categoryIcons = {
  guide: BookOpen,
  'case-study': FileText,
  compliance: Scale,
  strategy: Lightbulb,
  data: BarChart3,
}

const categoryLabels = {
  guide: '实用指南',
  'case-study': '成功案例',
  compliance: '合规解析',
  strategy: '催收策略',
  data: '数据洞察',
}

function InsightCard({ article }: { article: InsightArticle }) {
  const Icon = categoryIcons[article.category]
  
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden group"
    >
      <Link href={`/insights/${article.slug}`}>
        <div className="relative h-48 bg-gray-100">
          <Image
            src={article.featuredImage}
            alt={article.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-4 left-4 z-10">
            <span className="inline-flex items-center px-3 py-1 bg-white/90 backdrop-blur rounded-full text-sm font-medium text-gray-700">
              <Icon className="w-4 h-4 mr-1" />
              {categoryLabels[article.category]}
            </span>
          </div>
        </div>
        
        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-navy transition-colors line-clamp-2">
            {article.title}
          </h3>
          
          <p className="text-gray-600 mb-4 line-clamp-3">
            {article.excerpt}
          </p>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {new Date(article.publishDate).toLocaleDateString('zh-CN')}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {article.readingTime} 分钟阅读
              </span>
            </div>
            
            <span className="text-navy font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
              阅读全文
              <ArrowRight className="w-4 h-4" />
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  )
}

export default function InsightsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const articles = getAllInsights()
  
  const filteredArticles = selectedCategory === 'all' 
    ? articles 
    : articles.filter(article => article.category === selectedCategory)

  const categories = ['all', ...Object.keys(categoryLabels)] as const

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
              洞察与见解
            </h1>
            <p className="text-xl text-gray-600">
              深度解析跨境债务追收的挑战与机遇，分享实战经验与专业见解
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 border-b">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => {
              const isActive = selectedCategory === category
              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    isActive 
                      ? 'bg-navy text-white' 
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {category === 'all' ? '全部文章' : categoryLabels[category as keyof typeof categoryLabels]}
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
              <InsightCard key={article.slug} article={article} />
            ))}
          </div>
          
          {filteredArticles.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">该分类暂无文章</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-3xl font-light text-gray-900 mb-4">
            获取最新洞察
          </h2>
          <p className="text-gray-600 mb-8">
            订阅我们的邮件列表，第一时间获取跨境催收行业的最新动态和专业分析
          </p>
          <form className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="您的邮箱地址"
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-navy text-white rounded-lg hover:bg-navy-light transition-colors"
            >
              订阅
            </button>
          </form>
        </div>
      </section>
    </main>
  )
}