'use client'

import dynamic from 'next/dynamic'
import { type Locale } from '@/i18n/config'

const OptimizedFAQ = dynamic(
  () => import('./OptimizedFAQ'),
  { ssr: false }
)

interface OptimizedFAQWrapperProps {
  locale?: Locale
}

export default function OptimizedFAQWrapper({ locale }: OptimizedFAQWrapperProps) {
  return <OptimizedFAQ locale={locale} />
}