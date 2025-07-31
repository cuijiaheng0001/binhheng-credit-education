'use client'

import dynamic from 'next/dynamic'
import { type Locale } from '@/i18n/config'

const AccessibilityControls = dynamic(
  () => import('./AccessibilityControls'),
  { ssr: false }
)

interface AccessibilityControlsWrapperProps {
  locale?: Locale
}

export default function AccessibilityControlsWrapper({ locale }: AccessibilityControlsWrapperProps) {
  return <AccessibilityControls locale={locale} />
}