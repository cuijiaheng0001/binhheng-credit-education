'use client'

import dynamic from 'next/dynamic'
import { type Locale } from '@/i18n/config'

// Critical above-the-fold components - load immediately
import HeroCarousel from '@/components/HeroCarouselWrapper'
import ContentCarousel from '@/components/ContentCarousel'

// Lazy load below-the-fold components
const CTASection = dynamic(() => import('@/components/CTASection'))
const ProblemAwareness = dynamic(() => import('@/components/ProblemAwareness'))
const SolutionOverview = dynamic(() => import('@/components/SolutionOverview'))
const ProcessVisualization = dynamic(() => import('@/components/ProcessVisualization'))
const IndustryFocus = dynamic(() => import('@/components/IndustryFocus'))
const TrustIndicators = dynamic(() => import('@/components/TrustIndicators'))
const KnowledgeCenter = dynamic(() => import('@/components/KnowledgeCenter'))
const FAQ = dynamic(() => import('@/components/FAQWrapper'))

interface HomePageProps {
  dict: any
  locale: Locale
}

export default function HomePage({ dict, locale }: HomePageProps) {
  
  return (
    <main className="min-h-screen bg-black">
      <HeroCarousel locale={locale} dictionary={dict} />
      <ContentCarousel />
      <CTASection 
        label={dict.cta.freeConsultation}
        title={dict.cta.exploreSolutions}
        description={dict.cta.professionalService}
        buttonText={dict.cta.bookConsultation}
        variant="gradient"
        openModal={true}
      />
      <ProblemAwareness />
      <SolutionOverview />
      <ProcessVisualization />
      <IndustryFocus />
      <KnowledgeCenter />
      <FAQ locale={locale} />
      <CTASection 
        label={dict.cta.freeConsultation}
        title={dict.cta.readyToStart}
        description={dict.cta.teamReady}
        buttonText={dict.cta.contactUs}
        variant="light"
        openModal={true}
      />
      <TrustIndicators />
    </main>
  )
}