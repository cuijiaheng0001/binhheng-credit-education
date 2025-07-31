'use client'

import dynamic from 'next/dynamic'
import { type Locale } from '@/i18n/config'

const HeroCarousel = dynamic(
  () => import('./HeroCarousel'),
  { ssr: false }
)

interface HeroCarouselWrapperProps {
  locale?: Locale
  dictionary?: any
}

export default function HeroCarouselWrapper({ locale, dictionary }: HeroCarouselWrapperProps) {
  return <HeroCarousel locale={locale} dictionary={dictionary} />
}