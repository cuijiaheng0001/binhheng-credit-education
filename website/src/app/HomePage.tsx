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
import QuickConsultationForm from '@/components/QuickConsultationForm'
import { useLanguage } from '@/i18n/client'

export default function HomePage() {
  const { dictionary } = useLanguage()
  
  return (
    <main className="min-h-screen">
      <HeroCarousel />
      <ContentCarousel />
      
      {/* Quick Consultation Form - Above the fold for better conversion */}
      <section className="py-12 px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <QuickConsultationForm 
            variant="inline"
            title="立即获取免费债务评估"
            description="专业团队24小时内回复，平均追回率超过60%"
          />
        </div>
      </section>
      
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