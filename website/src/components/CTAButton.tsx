'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Phone, Calendar } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useState } from 'react'
import ConsultationModal from './ConsultationModal'

interface CTAButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  fullWidth?: boolean
  icon?: 'arrow' | 'phone' | 'calendar'
  onClick?: () => void
  href?: string
  children: React.ReactNode
  className?: string
  // 新增：用于预填充表单
  prefilledData?: {
    industry?: string
    debtType?: string
    source?: string
  }
}

export default function CTAButton({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  icon = 'arrow',
  onClick,
  href,
  children,
  className,
  prefilledData
}: CTAButtonProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const baseStyles = 'inline-flex items-center justify-center font-semibold transition-all duration-300 rounded-lg relative overflow-hidden group'
  
  const variants = {
    primary: 'bg-gradient-to-r from-primary-blue to-blue-600 text-white hover:from-blue-600 hover:to-primary-blue shadow-lg hover:shadow-xl',
    secondary: 'bg-gold text-white hover:bg-gold-dark shadow-md hover:shadow-lg',
    outline: 'border-2 border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white',
    ghost: 'text-primary-blue hover:bg-primary-blue/10'
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm gap-2',
    md: 'px-6 py-3 text-base gap-3',
    lg: 'px-8 py-4 text-lg gap-3',
    xl: 'px-10 py-5 text-xl gap-4'
  }

  const iconComponents = {
    arrow: <ArrowRight className={cn('transition-transform group-hover:translate-x-1', size === 'sm' ? 'w-4 h-4' : size === 'xl' ? 'w-6 h-6' : 'w-5 h-5')} />,
    phone: <Phone className={cn('transition-transform group-hover:scale-110', size === 'sm' ? 'w-4 h-4' : size === 'xl' ? 'w-6 h-6' : 'w-5 h-5')} />,
    calendar: <Calendar className={cn('transition-transform group-hover:scale-110', size === 'sm' ? 'w-4 h-4' : size === 'xl' ? 'w-6 h-6' : 'w-5 h-5')} />
  }

  const handleClick = () => {
    if (onClick) {
      onClick()
    } else if (!href) {
      // 默认打开咨询弹窗
      setIsModalOpen(true)
    }
  }

  const buttonContent = (
    <>
      {/* 背景动画效果 */}
      <span className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
      
      {/* 按钮内容 */}
      <span className="relative flex items-center gap-2">
        {children}
        {iconComponents[icon]}
      </span>
    </>
  )

  if (href) {
    return (
      <motion.a
        href={href}
        className={cn(
          baseStyles,
          variants[variant],
          sizes[size],
          fullWidth && 'w-full',
          className
        )}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {buttonContent}
      </motion.a>
    )
  }

  return (
    <>
      <motion.button
        onClick={handleClick}
        className={cn(
          baseStyles,
          variants[variant],
          sizes[size],
          fullWidth && 'w-full',
          className
        )}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {buttonContent}
      </motion.button>

      {/* 咨询弹窗 - 传递预填充数据 */}
      <ConsultationModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        prefilledData={prefilledData}
      />
    </>
  )
}