'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Download, FileText, TrendingUp, BookOpen, Shield, X, CheckCircle } from 'lucide-react'

interface Resource {
  id: string
  title: string
  description: string
  type: 'pdf' | 'report' | 'whitepaper' | 'guide'
  fileSize: string
  icon: React.ElementType
  category: string
  downloadCount?: number
}

interface ResourceDownloadProps {
  resources: Resource[]
  onDownload?: (resourceId: string, formData: any) => void
}

const defaultResources: Resource[] = [
  {
    id: 'debt-recovery-guide-2024',
    title: '2024跨境债务追收完全指南',
    description: '涵盖法律框架、最佳实践、案例分析等内容的综合指南',
    type: 'guide',
    fileSize: '2.8 MB',
    icon: BookOpen,
    category: '实用指南',
    downloadCount: 1250
  },
  {
    id: 'china-us-trade-debt-report',
    title: '中美贸易债务追收白皮书',
    description: '深度分析中美贸易中的债务问题及解决方案',
    type: 'whitepaper',
    fileSize: '1.5 MB',
    icon: FileText,
    category: '行业报告',
    downloadCount: 856
  },
  {
    id: 'education-sector-analysis',
    title: '教育行业债务追收案例集',
    description: '精选10个成功案例，提供可复制的解决方案',
    type: 'report',
    fileSize: '3.2 MB',
    icon: TrendingUp,
    category: '案例研究',
    downloadCount: 623
  },
  {
    id: 'compliance-checklist',
    title: '跨境催收合规检查清单',
    description: '确保您的催收流程符合国际法律法规',
    type: 'pdf',
    fileSize: '890 KB',
    icon: Shield,
    category: '合规指南',
    downloadCount: 445
  }
]

export default function ResourceDownload({ 
  resources = defaultResources,
  onDownload 
}: ResourceDownloadProps) {
  const [selectedResource, setSelectedResource] = useState<Resource | null>(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [downloadStatus, setDownloadStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // 调用下载回调或默认处理
      if (onDownload) {
        await onDownload(selectedResource!.id, formData)
      } else {
        // 默认处理：模拟下载
        await new Promise(resolve => setTimeout(resolve, 1000))
        console.log('Downloading:', selectedResource?.id, formData)
      }

      setDownloadStatus('success')
      
      // 3秒后重置
      setTimeout(() => {
        setSelectedResource(null)
        setFormData({ name: '', email: '', company: '', phone: '' })
        setDownloadStatus('idle')
      }, 3000)
    } catch (error) {
      console.error('Download error:', error)
      setDownloadStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const typeStyles = {
    pdf: 'bg-red-100 text-red-700',
    report: 'bg-blue-100 text-blue-700',
    whitepaper: 'bg-purple-100 text-purple-700',
    guide: 'bg-green-100 text-green-700'
  }

  return (
    <>
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              免费资源下载
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              获取行业报告、实用指南和成功案例，助力您的债务追收工作
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.map((resource, index) => {
              const Icon = resource.icon
              return (
                <motion.div
                  key={resource.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all p-6 border border-gray-100 group cursor-pointer"
                  onClick={() => setSelectedResource(resource)}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${typeStyles[resource.type]}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className={`text-xs px-2 py-1 rounded-full ${typeStyles[resource.type]} font-medium`}>
                      {resource.type.toUpperCase()}
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-navy transition-colors">
                    {resource.title}
                  </h3>

                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                    {resource.description}
                  </p>

                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>{resource.fileSize}</span>
                    {resource.downloadCount && (
                      <span className="flex items-center gap-1">
                        <Download className="w-3 h-3" />
                        {resource.downloadCount.toLocaleString()} 次下载
                      </span>
                    )}
                  </div>

                  <button className="mt-4 w-full py-2 bg-gray-50 text-gray-700 rounded-lg hover:bg-navy hover:text-white transition-all flex items-center justify-center gap-2 group-hover:shadow-md">
                    <Download className="w-4 h-4" />
                    免费下载
                  </button>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Download Modal */}
      <AnimatePresence>
        {selectedResource && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-50"
              onClick={() => setSelectedResource(null)}
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
            >
              <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full pointer-events-auto">
                {downloadStatus === 'success' ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="p-8 text-center"
                  >
                    <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      下载成功！
                    </h3>
                    <p className="text-gray-600">
                      资源已发送到您的邮箱
                    </p>
                  </motion.div>
                ) : (
                  <>
                    {/* Header */}
                    <div className="flex items-center justify-between p-6 border-b">
                      <h3 className="text-xl font-bold text-gray-900">
                        下载资源
                      </h3>
                      <button
                        onClick={() => setSelectedResource(null)}
                        className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                      >
                        <X className="w-5 h-5 text-gray-400" />
                      </button>
                    </div>

                    {/* Resource Info */}
                    <div className="p-6 border-b bg-gray-50">
                      <div className="flex items-start gap-4">
                        <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${typeStyles[selectedResource.type]}`}>
                          <selectedResource.icon className="w-6 h-6" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900 mb-1">
                            {selectedResource.title}
                          </h4>
                          <p className="text-sm text-gray-600">
                            {selectedResource.description}
                          </p>
                          <div className="flex items-center gap-4 mt-2 text-xs text-gray-500">
                            <span>{selectedResource.category}</span>
                            <span>•</span>
                            <span>{selectedResource.fileSize}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="p-6">
                      <p className="text-sm text-gray-600 mb-4">
                        请填写您的信息，我们将把资源发送到您的邮箱
                      </p>
                      
                      <div className="space-y-4">
                        <div>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="您的姓名 *"
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy focus:border-transparent"
                          />
                        </div>
                        
                        <div>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="工作邮箱 *"
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy focus:border-transparent"
                          />
                        </div>
                        
                        <div>
                          <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleInputChange}
                            placeholder="公司名称 *"
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy focus:border-transparent"
                          />
                        </div>
                        
                        <div>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="联系电话"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy focus:border-transparent"
                          />
                        </div>
                      </div>

                      <div className="mt-6 flex gap-3">
                        <button
                          type="button"
                          onClick={() => setSelectedResource(null)}
                          className="flex-1 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          取消
                        </button>
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="flex-1 px-4 py-3 bg-navy text-white rounded-lg hover:bg-navy-light transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                        >
                          {isSubmitting ? (
                            <>
                              <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                              </svg>
                              提交中...
                            </>
                          ) : (
                            <>
                              <Download className="w-4 h-4" />
                              获取资源
                            </>
                          )}
                        </button>
                      </div>

                      <p className="text-xs text-gray-500 text-center mt-4">
                        提交即表示您同意我们的隐私政策和服务条款
                      </p>
                    </form>
                  </>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}