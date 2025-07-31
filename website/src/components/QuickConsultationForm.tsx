'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, Send, CheckCircle } from 'lucide-react'
import CTAButton from './CTAButton'

interface QuickConsultationFormProps {
  variant?: 'inline' | 'sidebar'
  title?: string
  description?: string
  locale?: string
}

export default function QuickConsultationForm({ 
  variant = 'inline',
  title,
  description,
  locale = 'zh'
}: QuickConsultationFormProps) {
  // Default titles based on locale
  const defaultTitle = title || (locale === 'zh' ? '快速获取免费评估' : 'Get Free Assessment Quickly')
  const defaultDescription = description || (locale === 'zh' ? '留下您的联系方式，我们将在24小时内联系您' : 'Leave your contact information and we\'ll contact you within 24 hours')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // 发送到 Formspree
      const response = await fetch('https://formspree.io/f/xvgqqryv', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          _subject: locale === 'zh' ? `快速咨询 - ${formData.name}` : `Quick Inquiry - ${formData.name}`,
          _template: 'table'
        }),
      })
      
      if (!response.ok) {
        throw new Error(locale === 'zh' ? '提交失败' : 'Submission failed')
      }
      
      setSubmitStatus('success')
      
      // 3秒后重置
      setTimeout(() => {
        setFormData({ name: '', email: '', phone: '', company: '' })
        setSubmitStatus('idle')
      }, 3000)
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitStatus === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className={`bg-green-50 border border-green-200 rounded-xl p-8 text-center ${
          variant === 'sidebar' ? 'max-w-sm' : 'max-w-2xl mx-auto'
        }`}
      >
        <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
        <h3 className="text-xl font-bold text-green-800 mb-2">
          {locale === 'zh' ? '提交成功！' : 'Submission Successful!'}
        </h3>
        <p className="text-green-700">
          {locale === 'zh' ? '我们的专业顾问将在24小时内与您联系' : 'Our professional consultant will contact you within 24 hours'}
        </p>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 border border-blue-100 ${
        variant === 'sidebar' ? 'max-w-sm' : ''
      }`}
    >
      <div className={variant === 'sidebar' ? '' : 'max-w-4xl mx-auto'}>
        <h3 className="text-2xl font-bold text-gray-900 mb-2 font-sans">
          {defaultTitle}
        </h3>
        <p className="text-gray-600 mb-6">
          {defaultDescription}
        </p>

        <form onSubmit={handleSubmit} className={`space-y-4 ${
          variant === 'inline' ? 'md:space-y-0 md:flex md:gap-4' : ''
        }`}>
          {/* Name field */}
          <div className={variant === 'inline' ? 'flex-1' : ''}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder={locale === 'zh' ? '您的姓名' : 'Your Name'}
              required
              className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent"
            />
          </div>

          {/* Email field */}
          <div className={variant === 'inline' ? 'flex-1' : ''}>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder={locale === 'zh' ? '电子邮箱' : 'Email Address'}
                required
                className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent"
              />
            </div>
          </div>

          {/* Phone field */}
          <div className={variant === 'inline' ? 'flex-1' : ''}>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder={locale === 'zh' ? '联系电话' : 'Phone Number'}
                required
                className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent"
              />
            </div>
          </div>

          {/* Submit button */}
          <div className={variant === 'inline' ? '' : 'pt-2'}>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`px-8 py-3 bg-gradient-to-r from-primary-blue to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-primary-blue disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2 font-semibold shadow-lg hover:shadow-xl ${
                variant === 'sidebar' ? 'w-full' : ''
              }`}
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  {locale === 'zh' ? '提交中...' : 'Submitting...'}
                </>
              ) : (
                <>
                  {locale === 'zh' ? '获取评估' : 'Get Assessment'}
                  <Send className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
        </form>

        {/* Trust indicators */}
        <div className="mt-6 flex items-center justify-center gap-6 text-xs text-gray-600">
          <span className="flex items-center gap-1">
            <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            {locale === 'zh' ? '无前期费用' : 'No Upfront Fees'}
          </span>
          <span className="flex items-center gap-1">
            <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            {locale === 'zh' ? '信息保密' : 'Confidential'}
          </span>
          <span className="flex items-center gap-1">
            <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {locale === 'zh' ? '24小时回复' : '24-Hour Response'}
          </span>
        </div>
      </div>
    </motion.div>
  )
}