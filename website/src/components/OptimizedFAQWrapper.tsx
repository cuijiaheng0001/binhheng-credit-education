'use client'

import dynamic from 'next/dynamic'

const OptimizedFAQ = dynamic(
  () => import('./OptimizedFAQ'),
  { ssr: false }
)

export default OptimizedFAQ