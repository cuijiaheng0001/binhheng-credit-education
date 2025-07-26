import HeroSection from '@/components/HeroSection'
import EducationSection from '@/components/EducationSection'
import ProcessAnimation from '@/components/ProcessAnimation'
import MetricsSection from '@/components/MetricsSection'
import CTASection from '@/components/CTASection'

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <EducationSection />
      <ProcessAnimation />
      <MetricsSection />
      <CTASection />
    </main>
  )
}