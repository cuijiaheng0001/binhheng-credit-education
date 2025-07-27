import HeroCarousel from '@/components/HeroCarousel'
import ProblemAwareness from '@/components/ProblemAwareness'
import SolutionOverview from '@/components/SolutionOverview'
import ProcessVisualization from '@/components/ProcessVisualization'
import IndustryFocus from '@/components/IndustryFocus'
import TrustIndicators from '@/components/TrustIndicators'

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroCarousel />
      <ProblemAwareness />
      <SolutionOverview />
      <ProcessVisualization />
      <IndustryFocus />
      <TrustIndicators />
    </main>
  )
}