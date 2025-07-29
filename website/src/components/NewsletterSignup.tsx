'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, Send, CheckCircle, AlertCircle, Sparkles } from 'lucide-react'

export default function NewsletterSignup() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email) {
      setStatus('error')
      setMessage('请输入您的邮箱地址')
      return
    }

    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      setStatus('error')
      setMessage('请输入有效的邮箱地址')
      return
    }

    setStatus('loading')
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    // For demo, always succeed
    setStatus('success')
    setMessage('订阅成功！感谢您的关注。')
    setEmail('')
    
    // Reset after 5 seconds
    setTimeout(() => {
      setStatus('idle')
      setMessage('')
    }, 5000)
  }

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-blue-800 to-blue-700" />
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-48 -translate-y-48" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-48 translate-y-48" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Icon */}
          <motion.div
            animate={{ 
              y: [0, -10, 0],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full mb-8"
          >
            <Mail className="w-10 h-10 text-white" />
          </motion.div>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            掌握跨境催收最新动态
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            每周一期专业洞察，包含行业趋势、成功案例、法规更新等精选内容
          </p>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-4"
            >
              <Sparkles className="w-8 h-8 text-yellow-300 mx-auto mb-2" />
              <p className="text-white text-sm font-medium">独家见解</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-4"
            >
              <Sparkles className="w-8 h-8 text-green-300 mx-auto mb-2" />
              <p className="text-white text-sm font-medium">实战案例</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-4"
            >
              <Sparkles className="w-8 h-8 text-blue-300 mx-auto mb-2" />
              <p className="text-white text-sm font-medium">行业报告</p>
            </motion.div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
            <div className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                  if (status === 'error') {
                    setStatus('idle')
                    setMessage('')
                  }
                }}
                placeholder="请输入您的邮箱地址"
                className={`w-full px-6 py-4 pr-14 rounded-xl text-gray-900 placeholder-gray-500 transition-all duration-300 ${
                  status === 'error' 
                    ? 'ring-2 ring-red-500 focus:ring-red-500' 
                    : 'focus:ring-2 focus:ring-white'
                } focus:outline-none ${
                  status === 'success' ? 'bg-green-50' : 'bg-white'
                }`}
                disabled={status === 'loading' || status === 'success'}
              />
              
              <button
                type="submit"
                disabled={status === 'loading' || status === 'success'}
                className={`absolute right-2 top-1/2 -translate-y-1/2 p-3 rounded-lg transition-all duration-300 ${
                  status === 'loading' || status === 'success'
                    ? 'bg-gray-200 cursor-not-allowed'
                    : 'bg-navy hover:bg-navy-light text-white hover:scale-105 active:scale-95'
                }`}
              >
                <AnimatePresence mode="wait">
                  {status === 'idle' && (
                    <motion.div
                      key="send"
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.5 }}
                    >
                      <Send className="w-5 h-5" />
                    </motion.div>
                  )}
                  {status === 'loading' && (
                    <motion.div
                      key="loading"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1, rotate: 360 }}
                      exit={{ opacity: 0 }}
                      transition={{ rotate: { duration: 1, repeat: Infinity, ease: "linear" } }}
                    >
                      <div className="w-5 h-5 border-2 border-gray-600 border-t-transparent rounded-full" />
                    </motion.div>
                  )}
                  {status === 'success' && (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.5 }}
                    >
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </div>

            {/* Message */}
            <AnimatePresence>
              {message && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className={`mt-4 text-sm font-medium ${
                    status === 'error' ? 'text-red-300' : 'text-green-300'
                  }`}
                >
                  <div className="flex items-center justify-center gap-2">
                    {status === 'error' ? (
                      <AlertCircle className="w-4 h-4" />
                    ) : (
                      <CheckCircle className="w-4 h-4" />
                    )}
                    {message}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </form>

          <p className="text-sm text-white/60 mt-6">
            我们尊重您的隐私，绝不会分享您的信息。随时可以取消订阅。
          </p>
        </motion.div>
      </div>
    </section>
  )
}