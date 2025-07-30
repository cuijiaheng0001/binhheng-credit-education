'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Phone, Mail, Building, DollarSign, FileText, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

interface EnhancedConsultationFormProps {
  isOpen: boolean
  onClose: () => void
  prefilledData?: {
    industry?: string
    debtType?: string
    source?: string
  }
}

const industries = [
  { value: 'education', label: '教育机构（留学生债务）' },
  { value: 'ecommerce', label: '电商平台（卖家债务）' },
  { value: 'b2b', label: 'B2B贸易（商业债务）' },
  { value: 'real-estate', label: '房地产（租赁债务）' },
  { value: 'other', label: '其他行业' }
]

const debtRanges = [
  { value: 'under-10k', label: '$10,000 以下' },
  { value: '10k-50k', label: '$10,000 - $50,000' },
  { value: '50k-100k', label: '$50,000 - $100,000' },
  { value: '100k-500k', label: '$100,000 - $500,000' },
  { value: 'over-500k', label: '$500,000 以上' }
]

export default function EnhancedConsultationForm({ 
  isOpen, 
  onClose, 
  prefilledData 
}: EnhancedConsultationFormProps) {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    // Step 1: 基本信息
    name: '',
    email: '',
    phone: '',
    company: '',
    
    // Step 2: 债务详情
    industry: prefilledData?.industry || '',
    debtType: prefilledData?.debtType || '',
    debtAmount: '',
    debtAge: '',
    
    // Step 3: 具体情况
    debtorLocation: '',
    hasDocumentation: '',
    previousAttempts: '',
    message: '',
    
    // 隐藏字段
    source: prefilledData?.source || 'website'
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  // 预填充数据
  useEffect(() => {
    if (prefilledData) {
      setFormData(prev => ({
        ...prev,
        ...prefilledData
      }))
    }
  }, [prefilledData])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleNext = () => {
    setStep(prev => Math.min(prev + 1, 3))
  }

  const handlePrev = () => {
    setStep(prev => Math.max(prev - 1, 1))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // 这里实际会发送到后端
      console.log('Enhanced form data:', formData)
      
      // 模拟提交
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      setSubmitStatus('success')
      
      // 3秒后关闭
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          industry: '',
          debtType: '',
          debtAmount: '',
          debtAge: '',
          debtorLocation: '',
          hasDocumentation: '',
          previousAttempts: '',
          message: '',
          source: 'website'
        })
        setSubmitStatus('idle')
        setStep(1)
        onClose()
      }, 3000)
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const isStepValid = (stepNumber: number) => {
    switch (stepNumber) {
      case 1:
        return formData.name && formData.email && formData.phone && formData.company
      case 2:
        return formData.industry && formData.debtAmount && formData.debtAge
      case 3:
        return formData.debtorLocation && formData.hasDocumentation
      default:
        return false
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 z-50 backdrop-blur-sm"
            onClick={onClose}
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
          >
            <div className="bg-white max-w-xl w-full pointer-events-auto relative max-h-[90vh] overflow-y-auto rounded-xl shadow-2xl">
              {/* Header */}
              <div className="sticky top-0 bg-white border-b px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Image
                    src="/logo-inverted.png"
                    alt="Bingheng Credit"
                    width={140}
                    height={40}
                    className="h-8 w-auto"
                  />
                  <div className="text-sm text-gray-500">
                    步骤 {step} / 3
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <X className="w-5 h-5 text-gray-400" />
                </button>
              </div>

              {/* Progress bar */}
              <div className="h-1 bg-gray-100">
                <motion.div 
                  className="h-full bg-gradient-to-r from-primary-blue to-blue-600"
                  initial={{ width: '33%' }}
                  animate={{ width: `${(step / 3) * 100}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              {/* Form Content */}
              <form onSubmit={handleSubmit} className="p-6">
                <AnimatePresence mode="wait">
                  {/* Step 1: 基本信息 */}
                  {step === 1 && (
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-4"
                    >
                      <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">
                          让我们先了解您的基本信息
                        </h2>
                        <p className="text-gray-600">
                          请提供您的联系方式，我们的专业顾问将尽快与您联系
                        </p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            您的姓名 *
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                            placeholder="张三"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            公司名称 *
                          </label>
                          <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                            placeholder="ABC大学"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            电子邮箱 *
                          </label>
                          <div className="relative">
                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              required
                              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                              placeholder="your@email.com"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            联系电话 *
                          </label>
                          <div className="relative">
                            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                              type="tel"
                              name="phone"
                              value={formData.phone}
                              onChange={handleChange}
                              required
                              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                              placeholder="+1 234 567 8900"
                            />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 2: 债务详情 */}
                  {step === 2 && (
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-4"
                    >
                      <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">
                          告诉我们债务的具体情况
                        </h2>
                        <p className="text-gray-600">
                          这些信息将帮助我们为您制定最佳的追收方案
                        </p>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            所属行业 *
                          </label>
                          <select
                            name="industry"
                            value={formData.industry}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                          >
                            <option value="">请选择行业</option>
                            {industries.map(ind => (
                              <option key={ind.value} value={ind.value}>
                                {ind.label}
                              </option>
                            ))}
                          </select>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            债务金额范围 *
                          </label>
                          <select
                            name="debtAmount"
                            value={formData.debtAmount}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                          >
                            <option value="">请选择金额范围</option>
                            {debtRanges.map(range => (
                              <option key={range.value} value={range.value}>
                                {range.label}
                              </option>
                            ))}
                          </select>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            债务产生时间 *
                          </label>
                          <select
                            name="debtAge"
                            value={formData.debtAge}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                          >
                            <option value="">请选择时间</option>
                            <option value="0-3months">3个月以内</option>
                            <option value="3-6months">3-6个月</option>
                            <option value="6-12months">6-12个月</option>
                            <option value="1-2years">1-2年</option>
                            <option value="over-2years">2年以上</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            债务类型
                          </label>
                          <input
                            type="text"
                            name="debtType"
                            value={formData.debtType}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                            placeholder="如：学费、房租、货款等"
                          />
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 3: 具体情况 */}
                  {step === 3 && (
                    <motion.div
                      key="step3"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-4"
                    >
                      <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">
                          最后一些细节
                        </h2>
                        <p className="text-gray-600">
                          这些信息将帮助我们更好地评估您的案件
                        </p>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            债务人当前所在地 *
                          </label>
                          <input
                            type="text"
                            name="debtorLocation"
                            value={formData.debtorLocation}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                            placeholder="如：上海、北京、深圳等"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            是否有相关文件证明？ *
                          </label>
                          <div className="space-y-2">
                            <label className="flex items-center">
                              <input
                                type="radio"
                                name="hasDocumentation"
                                value="yes"
                                checked={formData.hasDocumentation === 'yes'}
                                onChange={handleChange}
                                className="mr-2"
                              />
                              <span>是，我有完整的合同和欠款证明</span>
                            </label>
                            <label className="flex items-center">
                              <input
                                type="radio"
                                name="hasDocumentation"
                                value="partial"
                                checked={formData.hasDocumentation === 'partial'}
                                onChange={handleChange}
                                className="mr-2"
                              />
                              <span>有部分文件</span>
                            </label>
                            <label className="flex items-center">
                              <input
                                type="radio"
                                name="hasDocumentation"
                                value="no"
                                checked={formData.hasDocumentation === 'no'}
                                onChange={handleChange}
                                className="mr-2"
                              />
                              <span>暂时没有相关文件</span>
                            </label>
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            之前是否尝试过追收？
                          </label>
                          <select
                            name="previousAttempts"
                            value={formData.previousAttempts}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                          >
                            <option value="">请选择</option>
                            <option value="no">没有尝试过</option>
                            <option value="self">自行尝试过</option>
                            <option value="agency">委托过其他机构</option>
                            <option value="legal">采取过法律行动</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            补充说明
                          </label>
                          <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows={3}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent resize-none"
                            placeholder="请提供任何有助于我们了解情况的额外信息..."
                          />
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Navigation buttons */}
                <div className="mt-6 flex items-center justify-between">
                  {step > 1 && (
                    <button
                      type="button"
                      onClick={handlePrev}
                      className="px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      返回上一步
                    </button>
                  )}
                  
                  <div className={cn("flex gap-3", step === 1 && "ml-auto")}>
                    {step < 3 ? (
                      <button
                        type="button"
                        onClick={handleNext}
                        disabled={!isStepValid(step)}
                        className="px-6 py-3 bg-primary-blue text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center gap-2"
                      >
                        下一步
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    ) : (
                      <button
                        type="submit"
                        disabled={isSubmitting || !isStepValid(3)}
                        className="px-6 py-3 bg-gradient-to-r from-primary-blue to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-primary-blue disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg"
                      >
                        {isSubmitting ? (
                          <span className="flex items-center gap-2">
                            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                            </svg>
                            提交中...
                          </span>
                        ) : '提交评估申请'}
                      </button>
                    )}
                  </div>
                </div>

                {/* Success message */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg"
                  >
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <div>
                        <p className="font-medium text-green-800">提交成功！</p>
                        <p className="text-sm text-green-600 mt-1">
                          我们的专业顾问将在24小时内与您联系
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </form>

              {/* Trust indicators */}
              <div className="bg-gray-50 px-6 py-4 border-t">
                <div className="flex items-center justify-center gap-6 text-xs text-gray-600">
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    无前期费用
                  </span>
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    信息严格保密
                  </span>
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    快速响应
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}