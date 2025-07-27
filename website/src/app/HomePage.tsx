'use client'

import HeroCarousel from '@/components/HeroCarousel'
import ContentCarousel from '@/components/ContentCarousel'
import ProblemAwareness from '@/components/ProblemAwareness'
import SolutionOverview from '@/components/SolutionOverview'
import ProcessVisualization from '@/components/ProcessVisualization'
import IndustryFocus from '@/components/IndustryFocus'
import TrustIndicators from '@/components/TrustIndicators'
import CTASection from '@/components/CTASection'
import KnowledgeCenter from '@/components/KnowledgeCenter'
import FAQ from '@/components/FAQ'
import { useLanguage } from '@/i18n/client'

export default function HomePage() {
  const { dictionary } = useLanguage()
  
  return (
    <main className="min-h-screen">
      <HeroCarousel />
      <ContentCarousel />
      <CTASection 
        label={dictionary.cta.freeConsultation}
        title={dictionary.cta.exploreSolutions}
        description={dictionary.cta.professionalService}
        buttonText={dictionary.cta.bookConsultation}
        variant="gradient"
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
      />
      <TrustIndicators />
    </main>
  )
}