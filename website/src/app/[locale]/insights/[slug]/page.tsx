'use client'

import { motion } from 'framer-motion'
import { Calendar, ArrowLeft, Share2, Bookmark, ChevronRight, ExternalLink } from 'lucide-react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getInsightBySlug, getRelatedInsights, getPreviousArticle, getNextArticle } from '@/lib/insights-data'
import { useState } from 'react'
import { useParams } from 'next/navigation'
import ConsultationModal from '@/components/ConsultationModal'
import ReactMarkdown from 'react-markdown'

const getCategoryLabels = (locale: string) => ({
  guide: locale === 'zh' ? '实用指南' : 'Practical Guide',
  'case-study': locale === 'zh' ? '成功案例' : 'Success Story',
  compliance: locale === 'zh' ? '合规解析' : 'Compliance Analysis',
  strategy: locale === 'zh' ? '催收策略' : 'Collection Strategy',
  data: locale === 'zh' ? '数据洞察' : 'Data Insights',
})

export default function InsightPostPage() {
  const params = useParams()
  const slug = params.slug as string
  const locale = (params.locale as string) || 'zh'
  const article = getInsightBySlug(slug)
  const [isConsultationOpen, setIsConsultationOpen] = useState(false)
  const categoryLabels = getCategoryLabels(locale)
  
  if (!article) {
    notFound()
  }

  const relatedArticles = getRelatedInsights(article.slug)
  const previousArticle = getPreviousArticle(article.slug)
  const nextArticle = getNextArticle(article.slug)

  return (
    <>
      <main className="min-h-screen bg-white">
        {/* Header */}
        <section className="bg-gray-50 py-8">
          <div className="max-w-4xl mx-auto px-8">
            <Link 
              href={`/${locale}/insights`} 
              className="inline-flex items-center text-gray-600 hover:text-navy transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              {locale === 'zh' ? '返回洞察列表' : 'Back to Insights'}
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
                  {article.publishDate.split('T')[0].replace(/-/g, '/')}
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
                  <span className="text-sm text-gray-600">{locale === 'zh' ? '作者：' : 'Author:'}</span>
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
                  a: ({href, children}) => {
                    // Handle external links
                    const isExternal = href && (href.startsWith('http://') || href.startsWith('https://'))
                    
                    if (isExternal) {
                      return (
                        <a 
                          href={href} 
                          className="text-navy hover:underline inline-flex items-baseline gap-1 group"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {children}
                          {' '}
                          <ExternalLink className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity inline-block flex-shrink-0" />
                        </a>
                      )
                    }
                    
                    // Internal links
                    return (
                      <a href={href} className="text-navy hover:underline">
                        {children}
                      </a>
                    )
                  },
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
                  {locale === 'zh' ? '将您的债务追收交给专业团队' : 'Entrust Your Debt Recovery to Professional Team'}
                </h3>
                <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
                  {locale === 'zh' ? '我们深谙中美两国法律体系，成功追回超过' : 'We have deep knowledge of US-China legal systems, successfully recovered over'}{' '}
                  <span className="font-bold text-white">$68M</span>
                  {' '}{locale === 'zh' ? '跨境债务' : 'in cross-border debts'}
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
                    {locale === 'zh' ? '立即获取免费评估' : 'Get Free Assessment Now'}
                    <ChevronRight className="w-5 h-5" />
                  </button>
                  <p className="text-white/70 text-sm">
                    {locale === 'zh' ? '无需预付费用 · 不成功不收费' : 'No upfront fees · No recovery, no fee'}
                  </p>
                </div>
              </div>
            </div>

            {/* Tags */}
            <div className="mt-8 pt-8 border-t">
              <h4 className="text-sm font-medium text-gray-900 mb-3">{locale === 'zh' ? '标签：' : 'Tags:'}</h4>
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

            {/* Previous/Next Navigation */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Previous Article */}
                <div className="text-left">
                  {previousArticle ? (
                    <Link
                      href={`/insights/${previousArticle.slug}`}
                      className="group block p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all duration-300"
                    >
                      <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                        <ArrowLeft className="w-4 h-4" />
                        <span>{locale === 'zh' ? '上一篇文章' : 'Previous Article'}</span>
                      </div>
                      <h4 className="font-semibold text-gray-900 group-hover:text-navy transition-colors line-clamp-2">
                        {previousArticle.title}
                      </h4>
                    </Link>
                  ) : (
                    <div className="p-6 bg-gray-50 rounded-xl opacity-50">
                      <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
                        <ArrowLeft className="w-4 h-4" />
                        <span>没有更多文章</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Next Article */}
                <div className="text-right">
                  {nextArticle ? (
                    <Link
                      href={`/insights/${nextArticle.slug}`}
                      className="group block p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all duration-300"
                    >
                      <div className="flex items-center justify-end gap-2 text-sm text-gray-500 mb-2">
                        <span>{locale === 'zh' ? '下一篇文章' : 'Next Article'}</span>
                        <ChevronRight className="w-4 h-4" />
                      </div>
                      <h4 className="font-semibold text-gray-900 group-hover:text-navy transition-colors line-clamp-2">
                        {nextArticle.title}
                      </h4>
                    </Link>
                  ) : (
                    <div className="p-6 bg-gray-50 rounded-xl opacity-50">
                      <div className="flex items-center justify-end gap-2 text-sm text-gray-400 mb-2">
                        <span>没有更多文章</span>
                        <ChevronRight className="w-4 h-4" />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  相关推荐
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  根据您正在阅读的内容，我们为您推荐以下相关文章
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                {relatedArticles.map((related, index) => (
                  <motion.div
                    key={related.slug}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={`/insights/${related.slug}`}
                      className="block bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group h-full no-underline hover:no-underline"
                    >
                      {/* Featured Image Placeholder */}
                      <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
                        <div className="absolute inset-0 bg-navy opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                        <div className="absolute bottom-4 left-4">
                          <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-navy rounded-lg text-sm font-medium">
                            {categoryLabels[related.category]}
                          </span>
                        </div>
                      </div>
                      
                      <div className="p-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-navy transition-colors line-clamp-2">
                          {related.title}
                        </h3>
                        <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                          {related.excerpt}
                        </p>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4 text-sm text-gray-500">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              <span>{related.publishDate.split('T')[0].replace(/-/g, '/')}</span>
                            </div>
                          </div>
                          <ChevronRight className="w-5 h-5 text-navy opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
              
              {/* View All Articles CTA */}
              <div className="text-center mt-12">
                <Link
                  href="/insights"
                  className="inline-flex items-center px-6 py-3 bg-navy text-white rounded-xl hover:bg-navy-light transition-colors font-medium"
                >
                  查看所有文章
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Link>
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