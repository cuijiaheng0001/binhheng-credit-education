'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { ArrowRight } from 'lucide-react'
import ConsultationModal from './ConsultationModalWrapper'

interface CTASectionProps {
  label?: string
  title?: string
  description?: string
  buttonText?: string
  buttonLink?: string
  variant?: 'gradient' | 'light' | 'dark'
  showTrustIndicators?: boolean
  openModal?: boolean
  locale?: string
  trustIndicators?: {
    noUpfrontFees?: string
    response24h?: string
    compliant100?: string
  }
}

export default function CTASection({
  label = '免费咨询',
  title = '探索我们的解决方案和定价',
  description = '为国内和国际案件提供专业服务',
  buttonText = '预约咨询',
  buttonLink = '/contact',
  variant = 'gradient',
  showTrustIndicators = true,
  openModal = false,
  locale = 'zh',
  trustIndicators
}: CTASectionProps = {}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [isConsultationOpen, setIsConsultationOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // 默认的双语trust indicators
  const defaultTrustIndicators = {
    noUpfrontFees: locale === 'zh' ? '无预付费用' : 'No Upfront Fees',
    response24h: locale === 'zh' ? '24小时响应' : '24-Hour Response', 
    compliant100: locale === 'zh' ? '100%合规' : '100% Compliant'
  }

  const displayTrustIndicators = trustIndicators || defaultTrustIndicators

  const bgStyles = {
    gradient: 'cta-gradient',
    light: 'bg-light-gray',
    dark: 'bg-gray-900'
  }

  const textColors = {
    gradient: 'text-white',
    light: 'text-gray-900',
    dark: 'text-white'
  }

  const buttonStyles = {
    gradient: 'bg-navy text-white hover:bg-navy-light hover:shadow-xl',
    light: 'bg-navy text-white hover:bg-navy-light hover:shadow-2xl',
    dark: 'bg-white text-gray-900 hover:bg-gray-100'
  }

  return (
    <section ref={ref} className={`py-14 ${bgStyles[variant]}`}>
      <div className="max-w-4xl mx-auto px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Label */}
          {label && (
            <motion.p 
              className={`text-sm font-medium mb-4 ${textColors[variant]} ${variant === 'gradient' ? 'opacity-90' : 'opacity-70'}`}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {label}
            </motion.p>
          )}
          
          {/* Heading */}
          <motion.h2 
            className={`text-3xl md:text-4xl font-bold mb-6 ${textColors[variant]}`}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {title}
          </motion.h2>

          {/* Description */}
          {description && (
            <motion.p 
              className={`text-lg mb-8 ${textColors[variant]} ${variant === 'gradient' ? 'opacity-90' : 'opacity-80'} max-w-2xl mx-auto`}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {description}
            </motion.p>
          )}

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {openModal ? (
              <motion.button
                onClick={() => setIsConsultationOpen(true)}
                className="inline-flex items-center px-8 py-4 bg-white text-navy font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 group shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {buttonText}
                <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </motion.button>
            ) : (
              <motion.a
                href={buttonLink}
                className="inline-flex items-center px-8 py-4 bg-white text-navy font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 group shadow-lg hover:shadow-xl no-underline hover:no-underline"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {buttonText}
                <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </motion.a>
            )}
          </motion.div>

          {/* Trust indicators */}
          {showTrustIndicators && mounted && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className={`mt-12 flex flex-wrap justify-center items-center gap-8 text-sm ${variant === 'gradient' ? 'text-white/70' : 'text-gray-600'}`}
            >
              <div>{displayTrustIndicators.noUpfrontFees}</div>
              <div className="w-1 h-1 bg-current rounded-full opacity-40" />
              <div>{displayTrustIndicators.response24h}</div>
              <div className="w-1 h-1 bg-current rounded-full opacity-40" />
              <div>{displayTrustIndicators.compliant100}</div>
            </motion.div>
          )}
        </motion.div>
      </div>
      
      {/* Consultation Modal */}
      {openModal && (
        <ConsultationModal 
          isOpen={isConsultationOpen} 
          onClose={() => setIsConsultationOpen(false)} 
        />
      )}
    </section>
  )
}