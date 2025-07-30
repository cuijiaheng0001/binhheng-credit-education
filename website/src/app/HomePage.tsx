'use client'

import dynamic from 'next/dynamic'
import { useLanguage } from '@/i18n/client'

// Critical above-the-fold components - load immediately
import HeroCarousel from '@/components/HeroCarousel'
import ContentCarousel from '@/components/ContentCarousel'

// Lazy load below-the-fold components
const CTASection = dynamic(() => import('@/components/CTASection'))
const ProblemAwareness = dynamic(() => import('@/components/ProblemAwareness'))
const SolutionOverview = dynamic(() => import('@/components/SolutionOverview'))
const ProcessVisualization = dynamic(() => import('@/components/ProcessVisualization'))
const IndustryFocus = dynamic(() => import('@/components/IndustryFocus'))
const TrustIndicators = dynamic(() => import('@/components/TrustIndicators'))
const KnowledgeCenter = dynamic(() => import('@/components/KnowledgeCenter'))
const FAQ = dynamic(() => import('@/components/FAQ'))

export default function HomePage() {
  const { dictionary } = useLanguage()
  
  return (
    <main className="min-h-screen bg-black">
      <HeroCarousel />
      <ContentCarousel />
      <CTASection 
        label={dictionary.cta.freeConsultation}
        title={dictionary.cta.exploreSolutions}
        description={dictionary.cta.professionalService}
        buttonText={dictionary.cta.bookConsultation}
        variant="gradient"
        openModal={true}
      />
      <ProblemAwareness />
      <SolutionOverview />
      <ProcessVisualization />
      <IndustryFocus />
      <KnowledgeCenter />
      <FAQ />
      <CTASection 
        label={dictionary.cta.freeConsultation}
        title={dictionary.cta.readyToStart}
        description={dictionary.cta.teamReady}
        buttonText={dictionary.cta.contactUs}
        variant="light"
        openModal={true}
      />
      <TrustIndicators />
    </main>
  )
}