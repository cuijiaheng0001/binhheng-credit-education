'use client'

import dynamic from 'next/dynamic'
import { type Locale } from '@/i18n/config'

// Critical above-the-fold components - load immediately
import HeroCarousel from '@/components/HeroCarouselWrapper'
import ContentCarousel from '@/components/ContentCarousel'

// Lazy load below-the-fold components with loading states
const CTASection = dynamic(() => import('@/components/CTASection'), {
  loading: () => <div className="h-64 bg-gray-50 animate-pulse" />,
  ssr: true
})

const ProblemAwareness = dynamic(() => import('@/components/ProblemAwareness'), {
  loading: () => <div className="h-96 bg-white animate-pulse" />,
  ssr: false // Not critical for SEO
})

const SolutionOverview = dynamic(() => import('@/components/SolutionOverview'), {
  loading: () => <div className="h-96 bg-gray-50 animate-pulse" />,
  ssr: false
})

const ProcessVisualization = dynamic(() => import('@/components/ProcessVisualization'), {
  loading: () => <div className="h-96 bg-white animate-pulse" />,
  ssr: false
})

const IndustryFocus = dynamic(() => import('@/components/IndustryFocus'), {
  loading: () => <div className="h-96 bg-gray-50 animate-pulse" />,
  ssr: false
})

const TrustIndicators = dynamic(() => import('@/components/TrustIndicators'), {
  loading: () => <div className="h-64 bg-white animate-pulse" />,
  ssr: false
})

const KnowledgeCenter = dynamic(() => import('@/components/KnowledgeCenter'), {
  loading: () => <div className="h-96 bg-gray-50 animate-pulse" />,
  ssr: false
})

const FAQ = dynamic(() => import('@/components/FAQWrapper'), {
  loading: () => <div className="h-96 bg-white animate-pulse" />,
  ssr: false
})

interface HomePageProps {
  dict: any
  locale: Locale
}

export default function HomePage({ dict, locale }: HomePageProps) {
  
  return (
    <main className="min-h-screen bg-black">
      <HeroCarousel locale={locale} dictionary={dict} />
      <ContentCarousel locale={locale} />
      <CTASection 
        label={dict.cta.freeConsultation}
        title={dict.cta.exploreSolutions}
        description={dict.cta.professionalService}
        buttonText={dict.cta.bookConsultation}
        variant="gradient"
        openModal={true}
        locale={locale}
      />
      <ProblemAwareness locale={locale} />
      <SolutionOverview locale={locale} />
      <ProcessVisualization locale={locale} />
      <IndustryFocus locale={locale} />
      <KnowledgeCenter locale={locale} />
      <FAQ locale={locale} />
      <CTASection 
        label={dict.cta.freeConsultation}
        title={dict.cta.readyToStart}
        description={dict.cta.teamReady}
        buttonText={dict.cta.contactUs}
        variant="light"
        openModal={true}
        locale={locale}
      />
      <TrustIndicators locale={locale} />
    </main>
  )
}