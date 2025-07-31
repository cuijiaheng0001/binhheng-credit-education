'use client'

import dynamic from 'next/dynamic'

const AccessibilityControls = dynamic(
  () => import('./AccessibilityControls'),
  { ssr: false }
)

export default AccessibilityControls