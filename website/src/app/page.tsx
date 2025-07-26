import HeroCarousel from '@/components/HeroCarousel'
import ServiceShowcase from '@/components/ServiceShowcase'
import AnimatedGlobe from '@/components/AnimatedGlobe'
import GlobalProcessFlow from '@/components/GlobalProcessFlow'
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
      <ServiceShowcase />
      <AnimatedGlobe />
      <GlobalProcessFlow />
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