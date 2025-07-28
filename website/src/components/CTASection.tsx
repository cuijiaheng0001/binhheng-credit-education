'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight } from 'lucide-react'
import { useLanguage } from '@/i18n/client'

interface CTASectionProps {
  label?: string
  title?: string
  description?: string
  buttonText?: string
  buttonLink?: string
  variant?: 'gradient' | 'light' | 'dark'
  showTrustIndicators?: boolean
}

export default function CTASection({
  label = '免费咨询',
  title = '探索我们的解决方案和定价',
  description = '为国内和国际案件提供专业服务',
  buttonText = '预约咨询',
  buttonLink = '/contact',
  variant = 'gradient',
  showTrustIndicators = true
}: CTASectionProps = {}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const { dictionary } = useLanguage()

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
    gradient: 'bg-white text-primary-blue hover:bg-primary-blue hover:text-white border-2 border-white',
    light: 'bg-primary-blue text-white hover:bg-secondary-blue',
    dark: 'bg-white text-gray-900 hover:bg-gray-100'
  }

  return (
    <section ref={ref} className={`py-20 ${bgStyles[variant]}`}>
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
          <motion.a
            href={buttonLink}
            className={`inline-flex items-center px-8 py-4 font-semibold rounded-lg transition-all duration-300 ${buttonStyles[variant]} shadow-lg hover:shadow-xl`}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {buttonText}
            <ArrowRight className="w-5 h-5 ml-2" />
          </motion.a>

          {/* Trust indicators */}
          {showTrustIndicators && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className={`mt-12 flex flex-wrap justify-center items-center gap-8 text-sm ${variant === 'gradient' ? 'text-white/70' : 'text-gray-600'}`}
            >
              <div>{dictionary.cta.noUpfrontFees}</div>
              <div className="w-1 h-1 bg-current rounded-full opacity-40" />
              <div>{dictionary.cta.response24h}</div>
              <div className="w-1 h-1 bg-current rounded-full opacity-40" />
              <div>{dictionary.cta.compliant100}</div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  )
}