import HeroCarousel from '@/components/HeroCarousel'
import EducationSection from '@/components/EducationSection'
import ServiceTabs from '@/components/ServiceTabs'
import ProcessAnimation from '@/components/ProcessAnimation'
import MetricsSection from '@/components/MetricsSection'
import CaseStudies from '@/components/CaseStudies'
import TrustIndicators from '@/components/TrustIndicators'
import CTASection from '@/components/CTASection'

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroCarousel />
      <EducationSection />
      <ServiceTabs />
      <ProcessAnimation />
      <MetricsSection />
      <CaseStudies />
      <TrustIndicators />
      <CTASection />
    </main>
  )
}