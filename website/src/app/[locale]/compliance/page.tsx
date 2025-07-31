import ComplianceContent from './ComplianceContent'
import { type Locale } from '@/i18n/config'
import { generatePageMetadata } from '@/lib/seo-metadata'
import type { Metadata } from 'next'

export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ locale: Locale }> 
}): Promise<Metadata> {
  const { locale } = await params
  
  const metadata = {
    en: {
      title: 'Compliance & Legal Framework',
      description: 'Bingheng Credit compliance statement. We strictly adhere to US FDCPA and Chinese regulations for ethical debt recovery.',
      keywords: ['FDCPA compliance', 'debt collection regulations', 'legal compliance', 'ethical debt recovery'],
    },
    zh: {
      title: '合规性与法律框架',
      description: '秉恒信用合规声明。我们严格遵守美国FDCPA和中国法规，进行道德债务追收。',
      keywords: ['FDCPA合规', '债务催收法规', '法律合规', '道德债务追收'],
    }
  }
  
  return generatePageMetadata({
    title: metadata[locale].title,
    description: metadata[locale].description,
    keywords: metadata[locale].keywords,
    canonicalUrl: `https://www.binghengcredit.com/${locale}/compliance`,
  })
}

export default function CompliancePage() {
  return <ComplianceContent />
}