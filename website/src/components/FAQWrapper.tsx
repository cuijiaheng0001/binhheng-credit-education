'use client'

import dynamic from 'next/dynamic'
import { type Locale } from '@/i18n/config'

const FAQ = dynamic(
  () => import('./FAQ'),
  { ssr: false }
)

interface FAQWrapperProps {
  locale?: Locale
}

export default function FAQWrapper({ locale }: FAQWrapperProps) {
  return <FAQ locale={locale} />
}