import { type Locale } from '@/i18n/config'
import PrivacyPageContent from './PrivacyPageContent'
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
      title: 'Privacy Policy',
      description: 'Bingheng Credit privacy policy. Learn how we protect your personal information and handle data in our debt recovery services.',
    },
    zh: {
      title: '隐私政策',
      description: '秉恒信用隐私政策。了解我们如何在债务追收服务中保护您的个人信息和处理数据。',
    }
  }
  
  return generatePageMetadata({
    title: metadata[locale].title,
    description: metadata[locale].description,
    canonicalUrl: `https://www.binghengcredit.com/${locale}/privacy`,
    noIndex: false, // Allow indexing of privacy policy
  })
}

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: Locale }>
}) {
  const { locale } = await params
  
  return <PrivacyPageContent locale={locale} />
}