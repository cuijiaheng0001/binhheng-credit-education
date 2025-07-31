'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Home, ArrowLeft } from 'lucide-react'
import { type Locale } from '@/i18n/config'

interface NotFoundPageProps {
  dict: any
  locale: Locale
}

export default function NotFoundPage({ dict, locale }: NotFoundPageProps) {
  const content = locale === 'zh' ? {
    title: '页面未找到',
    description: '抱歉，您访问的页面不存在或已被移动。',
    homepage: '返回首页',
    goBack: '返回上一页',
    helpText: '需要帮助？试试这些链接：',
    services: '服务项目',
    about: '关于我们',
    contact: '联系我们'
  } : {
    title: 'Page Not Found',
    description: 'Sorry, the page you are looking for doesn\'t exist or has been moved.',
    homepage: 'Go to Homepage',
    goBack: 'Go Back',
    helpText: 'Need help? Try these links:',
    services: 'Services',
    about: 'About Us',
    contact: 'Contact'
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-lg w-full text-center"
      >
        <motion.h1
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-9xl font-bold text-gray-300 mb-4"
        >
          404
        </motion.h1>
        
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          {content.title}
        </h2>
        
        <p className="text-gray-600 mb-8 text-lg">
          {content.description}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={`/${locale}`}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary-blue text-white rounded-lg hover:bg-primary-blue-dark transition-colors"
          >
            <Home className="w-5 h-5" />
            {content.homepage}
          </Link>
          
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-gray-700 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            {content.goBack}
          </button>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 mb-4">
            {content.helpText}
          </p>
          <div className="flex flex-wrap gap-4 justify-center text-sm">
            <Link href={`/${locale}/services`} className="text-primary-blue hover:underline">
              {content.services}
            </Link>
            <Link href={`/${locale}/about`} className="text-primary-blue hover:underline">
              {content.about}
            </Link>
            <Link href={`/${locale}/contact`} className="text-primary-blue hover:underline">
              {content.contact}
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  )
}