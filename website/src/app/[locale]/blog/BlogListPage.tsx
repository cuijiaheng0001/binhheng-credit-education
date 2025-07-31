'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar, Clock, Tag, ChevronRight, Search } from 'lucide-react'
import { BlogPost, BlogCategory, BlogTag } from '@/types/blog'
import { type Locale } from '@/i18n/config'

interface BlogListPageProps {
  posts: BlogPost[]
  categories: BlogCategory[]
  tags: BlogTag[]
  dict: any
  locale: Locale
}

export default function BlogListPage({ 
  posts, 
  categories, 
  tags, 
  dict, 
  locale 
}: BlogListPageProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [selectedTag, setSelectedTag] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState('')

  const filteredPosts = posts.filter(post => {
    const matchesCategory = !selectedCategory || post.category.id === selectedCategory
    const matchesTag = !selectedTag || post.tags.some(tag => tag.id === selectedTag)
    const matchesSearch = !searchQuery || 
      post.title[locale].toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt[locale].toLowerCase().includes(searchQuery.toLowerCase())
    
    return matchesCategory && matchesTag && matchesSearch
  })

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
              {locale === 'zh' ? '行业洞察' : 'Industry Insights'}
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              {locale === 'zh' 
                ? '深入了解国际债务催收的最新趋势、法律法规和最佳实践'
                : 'Explore the latest trends, regulations, and best practices in international debt collection'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Search Bar */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder={locale === 'zh' ? '搜索文章...' : 'Search articles...'}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex gap-2 items-center">
              <span className="text-sm text-gray-600">
                {locale === 'zh' ? '分类：' : 'Category:'}
              </span>
              <select
                value={selectedCategory || ''}
                onChange={(e) => setSelectedCategory(e.target.value || null)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue"
              >
                <option value="">{locale === 'zh' ? '全部' : 'All'}</option>
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.name[locale]}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Tags */}
          <div className="mt-6 flex flex-wrap gap-2">
            {tags.map(tag => (
              <button
                key={tag.id}
                onClick={() => setSelectedTag(selectedTag === tag.id ? null : tag.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedTag === tag.id
                    ? 'bg-primary-blue text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <Tag className="w-3 h-3 inline mr-1" />
                {tag.name[locale]}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-8">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600">
                {locale === 'zh' ? '没有找到相关文章' : 'No articles found'}
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
                >
                  {post.coverImage && (
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={post.coverImage.url}
                        alt={post.coverImage.alt[locale]}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <span className="absolute bottom-3 left-3 px-3 py-1 bg-primary-blue text-white text-xs rounded-full">
                        {post.category.name[locale]}
                      </span>
                    </div>
                  )}
                  
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3 line-clamp-2 group-hover:text-primary-blue transition-colors">
                      {post.title[locale]}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt[locale]}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {new Date(post.publishedAt).toLocaleDateString(locale === 'zh' ? 'zh-CN' : 'en-US')}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {post.readingTime?.[locale]} {locale === 'zh' ? '分钟' : 'min'}
                        </span>
                      </div>
                    </div>
                    
                    <Link
                      href={`/${locale}/blog/${post.slug}`}
                      className="inline-flex items-center text-primary-blue font-medium hover:gap-2 transition-all"
                    >
                      {locale === 'zh' ? '阅读更多' : 'Read more'}
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}