'use client'

import dynamic from 'next/dynamic'

const HeroCarouselOptimized = dynamic(
  () => import('./HeroCarouselOptimized'),
  { ssr: false }
)

export default HeroCarouselOptimized