'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar, Clock, Tag, User, ArrowLeft, Share2 } from 'lucide-react'
import { BlogPost } from '@/types/blog'
import { type Locale } from '@/i18n/config'

interface BlogDetailPageProps {
  post: BlogPost
  dict: any
  locale: Locale
}

export default function BlogDetailPage({ post, dict, locale }: BlogDetailPageProps) {
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title[locale],
        text: post.excerpt[locale],
        url: window.location.href,
      })
    }
  }

  return (
    <article className="min-h-screen bg-white pt-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy via-navy-light to-primary-blue text-white py-16">
        <div className="max-w-4xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Breadcrumb */}
            <nav className="mb-6">
              <Link
                href={`/${locale}/blog`}
                className="inline-flex items-center text-gray-300 hover:text-white transition-colors"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                {locale === 'zh' ? '返回文章列表' : 'Back to Articles'}
              </Link>
            </nav>

            {/* Category */}
            <span className="inline-block px-4 py-2 bg-white/20 rounded-full text-sm mb-4">
              {post.category.name[locale]}
            </span>

            {/* Title */}
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              {post.title[locale]}
            </h1>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-6 text-gray-200">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{post.author.name}</span>
                {post.author.role && (
                  <span className="text-gray-300">• {post.author.role[locale]}</span>
                )}
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>
                  {new Date(post.publishedAt).toLocaleDateString(
                    locale === 'zh' ? 'zh-CN' : 'en-US',
                    { year: 'numeric', month: 'long', day: 'numeric' }
                  )}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>
                  {post.readingTime?.[locale]} {locale === 'zh' ? '分钟阅读' : 'min read'}
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Cover Image */}
      {post.coverImage && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto px-8 -mt-8"
        >
          <div className="relative h-96 rounded-xl overflow-hidden shadow-2xl">
            <Image
              src={post.coverImage.url}
              alt={post.coverImage.alt[locale]}
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>
      )}

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="max-w-4xl mx-auto px-8 py-12"
      >
        <div 
          className="prose prose-lg max-w-none
            prose-headings:text-navy prose-headings:font-bold
            prose-h1:text-3xl prose-h1:mt-8 prose-h1:mb-4
            prose-h2:text-2xl prose-h2:mt-6 prose-h2:mb-3
            prose-h3:text-xl prose-h3:mt-4 prose-h3:mb-2
            prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-4
            prose-a:text-primary-blue prose-a:no-underline hover:prose-a:underline
            prose-ul:list-disc prose-ul:pl-6 prose-ul:mb-4
            prose-ol:list-decimal prose-ol:pl-6 prose-ol:mb-4
            prose-li:mb-2 prose-li:text-gray-700
            prose-strong:text-navy prose-strong:font-semibold
            prose-blockquote:border-l-4 prose-blockquote:border-primary-blue 
            prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-gray-600"
          dangerouslySetInnerHTML={{ __html: convertMarkdownToHtml(post.content[locale]) }}
        />

        {/* Tags */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex items-center gap-2 flex-wrap">
            <Tag className="w-4 h-4 text-gray-500" />
            {post.tags.map(tag => (
              <Link
                key={tag.id}
                href={`/${locale}/blog?tag=${tag.slug}`}
                className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors"
              >
                {tag.name[locale]}
              </Link>
            ))}
          </div>
        </div>

        {/* Share Button */}
        <div className="mt-8 flex justify-center">
          <button
            onClick={handleShare}
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary-blue text-white rounded-lg hover:bg-primary-blue-dark transition-colors"
          >
            <Share2 className="w-5 h-5" />
            {locale === 'zh' ? '分享文章' : 'Share Article'}
          </button>
        </div>
      </motion.div>
    </article>
  )
}

function convertMarkdownToHtml(markdown: string): string {
  // Simple markdown to HTML conversion
  let html = markdown
    .replace(/^### (.*$)/gim, '<h3>$1</h3>')
    .replace(/^## (.*$)/gim, '<h2>$1</h2>')
    .replace(/^# (.*$)/gim, '<h1>$1</h1>')
    .replace(/^\* (.*$)/gim, '<li>$1</li>')
    .replace(/^\d+\. (.*$)/gim, '<li>$1</li>')
    .replace(/\*\*(.*)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*)\*/g, '<em>$1</em>')
    .replace(/\n\n/g, '</p><p>')
    .replace(/\n/g, '<br>')
  
  // Wrap lists
  html = html.replace(/(<li>.*<\/li>)/s, '<ul>$1</ul>')
  
  // Wrap in paragraphs
  if (!html.startsWith('<')) {
    html = `<p>${html}</p>`
  }
  
  return html
}