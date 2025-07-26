'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { CheckSquare, ArrowRight } from 'lucide-react'
import RiskChecklistModal from './RiskChecklistModal'

interface RiskAssessmentButtonProps {
  variant?: 'primary' | 'secondary' | 'floating'
  className?: string
}

export default function RiskAssessmentButton({ variant = 'primary', className = '' }: RiskAssessmentButtonProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const getButtonStyles = () => {
    switch (variant) {
      case 'primary':
        return 'px-8 py-4 bg-gold text-white font-semibold rounded-lg hover:bg-gold-dark transition-all duration-300 shadow-xl hover:shadow-2xl'
      case 'secondary':
        return 'px-8 py-4 bg-white/10 text-white font-medium rounded-lg backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300'
      case 'floating':
        return 'fixed bottom-8 right-8 z-40 px-6 py-4 bg-gold text-white font-semibold rounded-full shadow-2xl hover:shadow-gold hover:scale-105 transition-all duration-300'
      default:
        return ''
    }
  }

  return (
    <>
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => setIsModalOpen(true)}
        className={`group inline-flex items-center gap-3 ${getButtonStyles()} ${className}`}
      >
        <CheckSquare className="w-5 h-5" />
        <span>Free Risk Assessment</span>
        {variant !== 'floating' && (
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        )}
      </motion.button>

      <RiskChecklistModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  )
}