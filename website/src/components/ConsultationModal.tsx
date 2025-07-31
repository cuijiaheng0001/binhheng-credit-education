'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import Image from 'next/image'
import { type Locale } from '@/i18n/config'

interface ConsultationModalProps {
  isOpen: boolean
  onClose: () => void
  locale?: Locale
  prefilledData?: {
    industry?: string
    debtType?: string
    source?: string
  }
}

export default function ConsultationModal({ isOpen, onClose, locale = 'zh', prefilledData }: ConsultationModalProps) {
  // 使用静态文本而不是 dictionary
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: prefilledData ? `行业: ${prefilledData.industry || ''}${prefilledData.debtType ? `\n债务类型: ${prefilledData.debtType}` : ''}` : ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // Here you would typically send the form data to your backend
      // For now, we'll simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      console.log('Form submitted:', formData)
      setSubmitStatus('success')
      
      // Reset form after successful submission
      setTimeout(() => {
        setFormData({ name: '', email: '', message: '' })
        setSubmitStatus('idle')
        onClose()
      }, 2000)
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop with better mobile support */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 md:bg-black/70 z-50 backdrop-blur-sm touch-manipulation"
            onClick={onClose}
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 pointer-events-none"
          >
            <div className="bg-white max-w-md w-full pointer-events-auto relative max-h-[85vh] md:max-h-[90vh] overflow-y-auto overscroll-contain rounded-lg">
              {/* Professional card */}
              <div className="relative bg-white shadow-[0_10px_40px_rgba(0,0,0,0.12)] md:shadow-[0_20px_60px_rgba(0,0,0,0.15)] rounded-lg">
                {/* Close button - Larger touch target on mobile */}
                <button
                  onClick={onClose}
                  className="absolute top-3 right-3 md:top-4 md:right-4 p-2.5 md:p-2 rounded-full bg-gray-50 hover:bg-gray-100 active:bg-gray-200 transition-all duration-200 group touch-manipulation"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5 text-gray-400 group-hover:text-gray-600" />
                </button>
                
                {/* Content - Responsive padding */}
                <div className="p-6 md:p-10">
                {/* Logo */}
                <div className="flex justify-center mb-6">
                  <Image
                    src="/logo-inverted.png"
                    alt="Bingheng Credit"
                    width={180}
                    height={60}
                    className="h-10 w-auto opacity-90"
                  />
                </div>
                
                {/* Title with professional tone */}
                <h2 className="text-xl md:text-2xl font-semibold text-gray-900 text-center mb-3">
                  获取免费债务评估
                </h2>
                <p className="text-gray-600 text-center mb-6 md:mb-8 text-sm leading-relaxed">
                  专业团队将在24小时内联系您<br/>
                  <span className="text-navy font-medium">平均追收成功率超过60%</span>
                </p>
                
                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="您的姓名"
                      required
                      autoComplete="name"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-navy focus:border-transparent focus:bg-white outline-none transition-all placeholder-gray-400 text-base"
                    />
                  </div>
                  
                  <div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="您的工作邮箱"
                      required
                      autoComplete="email"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-navy focus:border-transparent focus:bg-white outline-none transition-all placeholder-gray-400 text-base"
                    />
                  </div>
                  
                  <div>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="请告诉我们更多关于您案件的详情"
                      rows={3}
                      required
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-navy focus:border-transparent focus:bg-white outline-none transition-all resize-none placeholder-gray-400 text-base"
                    />
                  </div>
                  
                  {/* Submit button */}
                  <button
                    type="submit"
                    disabled={isSubmitting || submitStatus === 'success'}
                    className="w-full bg-navy text-white py-3.5 md:py-3 px-6 rounded-lg font-medium hover:bg-navy-light active:scale-[0.98] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed touch-manipulation"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        提交中...
                      </span>
                    ) : submitStatus === 'success' ? (
                      <span className="flex items-center justify-center">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        提交成功！
                      </span>
                    ) : (
                      '提交'
                    )}
                  </button>
                  
                  {submitStatus === 'error' && (
                    <p className="text-red-500 text-sm text-center mt-2">
                      提交失败，请稍后重试
                    </p>
                  )}
                </form>
                
                {/* Trust indicators - Responsive spacing */}
                <div className="mt-6 md:mt-8 pt-4 md:pt-6 border-t border-gray-100">
                  <div className="flex items-center justify-center gap-4 md:gap-6 text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      无前期费用
                    </span>
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                      </svg>
                      信息保密
                    </span>
                  </div>
                  
                  {/* Privacy notice */}
                  <p className="text-xs text-gray-400 text-center mt-3 md:mt-4 px-2">
                    提交即表示您同意我们的
                    <a href="/privacy" className="text-navy hover:underline mx-1">隐私政策</a>
                    和
                    <a href="/terms" className="text-navy hover:underline mx-1">服务条款</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}