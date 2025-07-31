'use client'

import dynamic from 'next/dynamic'
import { type Locale } from '@/i18n/config'

const ConsultationModal = dynamic(
  () => import('./ConsultationModal'),
  { ssr: false }
)

interface ConsultationModalWrapperProps {
  isOpen: boolean
  onClose: () => void
  locale?: Locale
  prefilledData?: {
    industry?: string
    debtType?: string
    source?: string
  }
}

export default function ConsultationModalWrapper({ 
  isOpen, 
  onClose, 
  locale, 
  prefilledData 
}: ConsultationModalWrapperProps) {
  return (
    <ConsultationModal 
      isOpen={isOpen}
      onClose={onClose}
      locale={locale}
      prefilledData={prefilledData}
    />
  )
}