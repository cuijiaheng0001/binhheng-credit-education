'use client'

import { motion } from 'framer-motion'
import { Calendar, Clock, ArrowLeft, Share2, Bookmark, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getInsightBySlug, getRelatedInsights } from '@/lib/insights-data'
import { useState, use } from 'react'
import ConsultationModal from '@/components/ConsultationModal'
import ReactMarkdown from 'react-markdown'

const categoryLabels = {
  guide: '实用指南',
  'case-study': '成功案例',
  compliance: '合规解析',
  strategy: '催收策略',
  data: '数据洞察',
}

export default function InsightPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params)
  const article = getInsightBySlug(resolvedParams.slug)
  const [isConsultationOpen, setIsConsultationOpen] = useState(false)
  
  if (!article) {
    notFound()
  }

  const relatedArticles = getRelatedInsights(article.slug)

  return (
    <>
      <main className="min-h-screen bg-white">
        {/* Header */}
        <section className="bg-gray-50 py-8">
          <div className="max-w-4xl mx-auto px-8">
            <Link 
              href="/insights" 
              className="inline-flex items-center text-gray-600 hover:text-navy transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              返回洞察列表
            </Link>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="px-3 py-1 bg-navy text-white rounded-full text-sm">
                  {categoryLabels[article.category]}
                </span>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Calendar className="w-4 h-4" />
                  {new Date(article.publishDate).toLocaleDateString('zh-CN')}
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Clock className="w-4 h-4" />
                  {article.readingTime} 分钟阅读
                </div>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {article.title}
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                {article.excerpt}
              </p>
              
              <div className="mt-6 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <span className="text-sm text-gray-600">作者：</span>
                  <div>
                    <p className="font-medium text-gray-900">{article.author.name}</p>
                    <p className="text-sm text-gray-500">{article.author.title}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
                    <Share2 className="w-5 h-5 text-gray-600" />
                  </button>
                  <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
                    <Bookmark className="w-5 h-5 text-gray-600" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12">
          <div className="max-w-4xl mx-auto px-8">
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="prose prose-lg max-w-none"
            >
              <ReactMarkdown
                components={{
                  h1: ({children}) => <h1 className="text-3xl font-bold text-gray-900 mt-8 mb-4">{children}</h1>,
                  h2: ({children}) => <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">{children}</h2>,
                  h3: ({children}) => <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">{children}</h3>,
                  p: ({children}) => <p className="text-gray-700 leading-relaxed mb-4">{children}</p>,
                  ul: ({children}) => <ul className="list-disc list-inside space-y-2 mb-4">{children}</ul>,
                  ol: ({children}) => <ol className="list-decimal list-inside space-y-2 mb-4">{children}</ol>,
                  li: ({children}) => <li className="text-gray-700">{children}</li>,
                  strong: ({children}) => <strong className="font-semibold text-gray-900">{children}</strong>,
                  blockquote: ({children}) => (
                    <blockquote className="border-l-4 border-navy pl-4 my-6 italic text-gray-600">
                      {children}
                    </blockquote>
                  ),
                  code: ({children}) => (
                    <code className="bg-gray-100 rounded px-2 py-1 text-sm font-mono">{children}</code>
                  ),
                  pre: ({children}) => (
                    <pre className="bg-gray-100 rounded-lg p-4 overflow-x-auto mb-4">{children}</pre>
                  ),
                  hr: () => <hr className="my-8 border-gray-200" />,
                  a: ({href, children}) => (
                    <a href={href} className="text-navy hover:underline">{children}</a>
                  ),
                  table: ({children}) => (
                    <div className="overflow-x-auto mb-4">
                      <table className="min-w-full divide-y divide-gray-200">{children}</table>
                    </div>
                  ),
                  th: ({children}) => (
                    <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      {children}
                    </th>
                  ),
                  td: ({children}) => (
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{children}</td>
                  ),
                }}
              >
                {article.content}
              </ReactMarkdown>
            </motion.article>

            {/* CTA Section - Optimized for performance */}
            <div className="mt-16 bg-gradient-to-br from-navy via-blue-800 to-blue-700 rounded-3xl p-10 md:p-12 relative overflow-hidden contain-paint">
              {/* Simplified background decorations using CSS only */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-xl -translate-y-32 translate-x-32" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-xl translate-y-48 -translate-x-48" />
              </div>
              
              <div className="relative z-10 text-center max-w-3xl mx-auto">
                {/* Icon with CSS animation */}
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-6 animate-fade-in-up">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <div className="w-6 h-6 bg-white rounded-full" />
                  </div>
                </div>
                
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  将您的债务追收交给专业团队
                </h3>
                <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
                  我们深谙中美两国法律体系，成功追回超过{' '}
                  <span className="font-bold text-white">$68M</span>
                  {' '}跨境债务
                  <br />
                  <span className="text-base text-white/80">
                    平均追收成功率达 65%，远超行业平均水平
                  </span>
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <button
                    onClick={() => setIsConsultationOpen(true)}
                    className="px-8 py-4 bg-white text-navy rounded-xl hover:bg-gray-100 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl flex items-center gap-2 hover:scale-105 active:scale-95 transform will-change-transform"
                  >
                    立即获取免费评估
                    <ChevronRight className="w-5 h-5" />
                  </button>
                  <p className="text-white/70 text-sm">
                    无需预付费用 · 不成功不收费
                  </p>
                </div>
              </div>
            </div>

            {/* Tags */}
            <div className="mt-8 pt-8 border-t">
              <h4 className="text-sm font-medium text-gray-900 mb-3">标签：</h4>
              <div className="flex flex-wrap gap-2">
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-8">相关文章</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {relatedArticles.map((related) => (
                  <Link
                    key={related.slug}
                    href={`/insights/${related.slug}`}
                    className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 p-6 group"
                  >
                    <span className="text-sm text-navy mb-2 block">
                      {categoryLabels[related.category]}
                    </span>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-navy transition-colors line-clamp-2">
                      {related.title}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                      {related.excerpt}
                    </p>
                    <span className="text-navy font-medium text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                      阅读更多
                      <ChevronRight className="w-4 h-4" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      
      <ConsultationModal 
        isOpen={isConsultationOpen} 
        onClose={() => setIsConsultationOpen(false)} 
      />
    </>
  )
}