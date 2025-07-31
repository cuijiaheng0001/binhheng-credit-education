'use client'

import { motion } from 'framer-motion'
import { Calendar, ArrowRight, BookOpen, FileText, Scale, BarChart3, Lightbulb, Search, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { InsightArticle } from '@/lib/insights-data'
import { useState, useMemo } from 'react'
// import NewsletterSignup from '@/components/NewsletterSignup'
// import ResourceDownload from '@/components/ResourceDownload'

const categoryIcons = {
  guide: BookOpen,
  'case-study': FileText,
  compliance: Scale,
  strategy: Lightbulb,
  data: BarChart3,
}

const categoryLabels = {
  zh: {
    guide: '实用指南',
    'case-study': '成功案例',
    compliance: '合规解析',
    strategy: '催收策略',
    data: '数据洞察',
  },
  en: {
    guide: 'Practical Guide',
    'case-study': 'Success Story',
    compliance: 'Compliance Analysis',
    strategy: 'Collection Strategy',
    data: 'Data Insights',
  }
}

function InsightCard({ article, locale }: { article: InsightArticle; locale: string }) {
  const Icon = categoryIcons[article.category]
  
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden group"
    >
      <Link href={`/${locale}/insights/${article.slug}`} className="no-underline hover:no-underline">
        <div className="relative h-48 bg-gray-100">
          <Image
            src={article.featuredImage}
            alt={article.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-4 left-4 z-10">
            <span className="inline-flex items-center px-3 py-1 bg-white/90 backdrop-blur rounded-full text-sm font-medium text-gray-700">
              <Icon className="w-4 h-4 mr-1" />
              {categoryLabels[locale as 'zh' | 'en'][article.category]}
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
                {new Date(article.publishDate).toLocaleDateString(locale === 'zh' ? 'zh-CN' : 'en-US')}
              </span>
            </div>
            
            <span className="text-navy font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
              {locale === 'zh' ? '阅读全文' : 'Read More'}
              <ArrowRight className="w-4 h-4" />
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  )
}

interface InsightsContentProps {
  articles: InsightArticle[]
  locale: string
}

export default function InsightsContent({ articles, locale }: InsightsContentProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [searchQuery, setSearchQuery] = useState('')
  
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
      return new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
    })

    return filtered
  }, [articles, selectedCategory, searchQuery])

  const categories = ['all', ...Object.keys(categoryLabels.zh)] as const

  // Calculate article counts per category
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {
      all: articles.length
    }
    Object.keys(categoryLabels.zh).forEach(cat => {
      counts[cat] = articles.filter(article => article.category === cat).length
    })
    return counts
  }, [articles])

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero/debt-recovery-2.jpg"
            alt="Insights and Analysis"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-gray-800/70 to-gray-900/80" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="font-sans text-4xl lg:text-6xl text-white mb-6 font-bold">
              {locale === 'zh' ? '洞察与见解' : 'Insights & Analysis'}
            </h1>
            <p className="text-xl text-white/90">
              {locale === 'zh' ? '深度解析跨境债务追收的挑战与机遇，分享实战经验与专业见解' : 'In-depth analysis of cross-border debt recovery challenges and opportunities, sharing practical experience and professional insights'}
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
                placeholder={locale === 'zh' ? "搜索文章标题、内容或标签..." : "Search article titles, content or tags..."}
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
              <span className="text-sm text-gray-600">{locale === 'zh' ? '排序：' : 'Sort:'}</span>
              <div className="px-4 py-2 rounded-lg border border-gray-200 bg-gray-50 text-gray-600 text-sm">
                {locale === 'zh' ? '按最新发布排序' : 'Sort by Latest'}
              </div>
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
                <span>{locale === 'zh' ? '找到 ' : 'Found '}<span className="font-semibold text-gray-900">{filteredArticles.length}</span>{locale === 'zh' ? ' 篇相关文章' : ' related articles'}</span>
              ) : (
                <span>{locale === 'zh' ? '未找到相关文章，请尝试其他关键词' : 'No articles found, please try other keywords'}</span>
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
                  <span>{category === 'all' ? (locale === 'zh' ? '全部文章' : 'All Articles') : categoryLabels[locale as 'zh' | 'en'][category as keyof typeof categoryLabels.zh]}</span>
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
                {locale === 'zh' ? '显示 ' : 'Showing '}<span className="font-semibold text-gray-900">{filteredArticles.length}</span>{locale === 'zh' ? ' 篇文章' : ' articles'}
                {selectedCategory !== 'all' && (
                  <span> · {categoryLabels[locale as 'zh' | 'en'][selectedCategory as keyof typeof categoryLabels.zh]}</span>
                )}
                {searchQuery && (
                  <span> · {locale === 'zh' ? '搜索: ' : 'Search: '}"{searchQuery}"</span>
                )}
              </p>
            </div>
          )}
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
              <InsightCard key={article.slug} article={article} locale={locale} />
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
                {locale === 'zh' ? '未找到相关文章' : 'No Articles Found'}
              </h3>
              <p className="text-gray-500 mb-6 max-w-md mx-auto">
                {searchQuery 
                  ? (locale === 'zh' ? `没有找到包含 "${searchQuery}" 的文章，请尝试其他关键词` : `No articles found containing "${searchQuery}", please try other keywords`)
                  : (locale === 'zh' ? '该分类暂无文章' : 'No articles in this category')}
              </p>
              {searchQuery && (
                <button
                  onClick={() => {
                    setSearchQuery('')
                    setSelectedCategory('all')
                  }}
                  className="px-6 py-2 bg-navy text-white rounded-lg hover:bg-navy-light transition-colors"
                >
                  {locale === 'zh' ? '清除筛选条件' : 'Clear Filters'}
                </button>
              )}
            </motion.div>
          )}
        </div>
      </section>

      {/* TODO: Re-enable after fixing useLanguage issues */}
      {/* <ResourceDownload /> */}
      {/* <NewsletterSignup /> */}
    </main>
  )
}