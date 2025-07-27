import HeroCarousel from '@/components/HeroCarousel'
import ContentCarousel from '@/components/ContentCarousel'
import ProblemAwareness from '@/components/ProblemAwareness'
import SolutionOverview from '@/components/SolutionOverview'
import ProcessVisualization from '@/components/ProcessVisualization'
import IndustryFocus from '@/components/IndustryFocus'
import TrustIndicators from '@/components/TrustIndicators'
import CTASection from '@/components/CTASection'
import KnowledgeCenter from '@/components/KnowledgeCenter'

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroCarousel />
      <ContentCarousel />
      <CTASection 
        label="免费咨询"
        title="探索我们的国内和国际债务追收解决方案"
        description="专业的B2B债务追收服务，成功率高达60%以上"
        buttonText="预约免费咨询"
        variant="gradient"
      />
      <ProblemAwareness />
      <SolutionOverview />
      <ProcessVisualization />
      <IndustryFocus />
      <KnowledgeCenter />
      <CTASection 
        label="立即行动"
        title="准备开始追回您的资金？"
        description="我们的专家团队随时准备为您提供定制化的债务追收方案"
        buttonText="联系我们"
        variant="light"
      />
      <TrustIndicators />
    </main>
  )
}