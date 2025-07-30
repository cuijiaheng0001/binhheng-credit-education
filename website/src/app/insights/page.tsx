'use client'

import { motion } from 'framer-motion'
import { Calendar, Clock, ArrowRight, BookOpen, FileText, Scale, BarChart3, Lightbulb, Search, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { getAllInsights, InsightArticle } from '@/lib/insights-data'
import { useState, useMemo } from 'react'
import NewsletterSignup from '@/components/NewsletterSignup'
import ResourceDownload from '@/components/ResourceDownload'

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
  const [searchQuery, setSearchQuery] = useState('')
  const [sortBy, setSortBy] = useState<'date' | 'readingTime'>('date')
  const articles = getAllInsights()
  
  const filteredArticles = useMemo(() => {
    let filtered = articles

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(article => article.category === selectedCategory)
    }

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(article => 
        article.title.toLowerCase().includes(query) ||
        article.excerpt.toLowerCase().includes(query) ||
        article.tags.some(tag => tag.toLowerCase().includes(query)) ||
        article.content.toLowerCase().includes(query)
      )
    }

    // Sort articles
    filtered = [...filtered].sort((a, b) => {
      if (sortBy === 'date') {
        return new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
      } else {
        return b.readingTime - a.readingTime
      }
    })

    return filtered
  }, [articles, selectedCategory, searchQuery, sortBy])

  const categories = ['all', ...Object.keys(categoryLabels)] as const

  // Calculate article counts per category
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {
      all: articles.length
    }
    Object.keys(categoryLabels).forEach(cat => {
      counts[cat] = articles.filter(article => article.category === cat).length
    })
    return counts
  }, [articles])

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

      {/* Search and Sort Bar */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Input */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="搜索文章标题、内容或标签..."
                className="w-full pl-12 pr-10 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-1 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <X className="w-4 h-4 text-gray-500" />
                </button>
              )}
            </div>

            {/* Sort Options */}
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">排序：</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'date' | 'readingTime')}
                className="px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent transition-all text-sm"
              >
                <option value="date">最新发布</option>
                <option value="readingTime">阅读时长</option>
              </select>
            </div>
          </div>

          {/* Search Results Info */}
          {searchQuery && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 text-sm text-gray-600"
            >
              {filteredArticles.length > 0 ? (
                <span>找到 <span className="font-semibold text-gray-900">{filteredArticles.length}</span> 篇相关文章</span>
              ) : (
                <span>未找到相关文章，请尝试其他关键词</span>
              )}
            </motion.div>
          )}
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
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
                    isActive 
                      ? 'bg-navy text-white' 
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  <span>{category === 'all' ? '全部文章' : categoryLabels[category as keyof typeof categoryLabels]}</span>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${
                    isActive ? 'bg-white/20' : 'bg-gray-200'
                  }`}>
                    {categoryCounts[category]}
                  </span>
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-8">
          {/* Results Summary */}
          {filteredArticles.length > 0 && (
            <div className="mb-8 text-center">
              <p className="text-sm text-gray-600">
                显示 <span className="font-semibold text-gray-900">{filteredArticles.length}</span> 篇文章
                {selectedCategory !== 'all' && (
                  <span> · {categoryLabels[selectedCategory as keyof typeof categoryLabels]}</span>
                )}
                {searchQuery && (
                  <span> · 搜索: "{searchQuery}"</span>
                )}
              </p>
            </div>
          )}
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
              <InsightCard key={article.slug} article={article} />
            ))}
          </div>
          
          {filteredArticles.length === 0 && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-16"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-100 rounded-full mb-6">
                <Search className="w-10 h-10 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                未找到相关文章
              </h3>
              <p className="text-gray-500 mb-6 max-w-md mx-auto">
                {searchQuery 
                  ? `没有找到包含 "${searchQuery}" 的文章，请尝试其他关键词`
                  : '该分类暂无文章'}
              </p>
              {searchQuery && (
                <button
                  onClick={() => {
                    setSearchQuery('')
                    setSelectedCategory('all')
                  }}
                  className="px-6 py-2 bg-navy text-white rounded-lg hover:bg-navy-light transition-colors"
                >
                  清除筛选条件
                </button>
              )}
            </motion.div>
          )}
        </div>
      </section>

      {/* Resource Download Section */}
      <ResourceDownload />

      {/* Newsletter Signup */}
      <NewsletterSignup />
    </main>
  )
}