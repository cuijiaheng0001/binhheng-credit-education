import { type Locale } from '@/i18n/config'
import TermsContent from './TermsContent'
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
      title: 'Terms of Service',
      description: 'Bingheng Credit terms of service. Read our terms and conditions for using our debt recovery services.',
    },
    zh: {
      title: '服务条款',
      description: '秉恒信用服务条款。阅读我们债务追收服务的使用条款和条件。',
    }
  }
  
  return generatePageMetadata({
    title: metadata[locale].title,
    description: metadata[locale].description,
    canonicalUrl: `https://www.binghengcredit.com/${locale}/terms`,
    noIndex: false, // Allow indexing of terms page
  })
}

export default async function TermsPage({
  params,
}: {
  params: Promise<{ locale: Locale }>
}) {
  const { locale } = await params
  
  return <TermsContent locale={locale} />
}