import HeroCarousel from '@/components/HeroCarousel'
import ProblemRevealSection from '@/components/ProblemRevealSection'
import ServiceShowcase from '@/components/ServiceShowcase'
import SimpleRecoveryFlow from '@/components/SimpleRecoveryFlow'
// import GlobalRecoveryJourney from '@/components/GlobalRecoveryJourney'
// import VisualRecoveryFlow from '@/components/VisualRecoveryFlow'
// import EnhancedGlobalFlow from '@/components/EnhancedGlobalFlow'
// import AnimatedGlobe from '@/components/AnimatedGlobe'
// import GlobalProcessFlow from '@/components/GlobalProcessFlow'
import EducationSection from '@/components/EducationSection'
import ServiceTabs from '@/components/ServiceTabs'
import ProcessAnimation from '@/components/ProcessAnimation'
import MetricsSection from '@/components/MetricsSection'
import CaseStudies from '@/components/CaseStudies'
import TrustIndicators from '@/components/TrustIndicators'
import CTASection from '@/components/CTASection'
import RiskAssessmentButton from '@/components/RiskAssessmentButton'

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroCarousel />
      <ProblemRevealSection />
      <ServiceShowcase />
      <SimpleRecoveryFlow />
      <EducationSection />
      <ServiceTabs />
      <ProcessAnimation />
      <MetricsSection />
      <CaseStudies />
      <TrustIndicators />
      <CTASection />
      <RiskAssessmentButton variant="floating" />
    </main>
  )
}