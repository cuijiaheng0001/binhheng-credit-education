'use client'

import dynamic from 'next/dynamic'

const HeroCarousel = dynamic(
  () => import('./HeroCarousel'),
  { ssr: false }
)

export default HeroCarousel