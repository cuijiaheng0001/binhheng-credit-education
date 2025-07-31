import { getAllInsights } from '@/lib/insights-data'
import { type Locale } from '@/i18n/config'
import { type Metadata } from 'next'
import { generatePageMetadata, pageMetadata } from '@/lib/seo-metadata'
import InsightsContent from './InsightsContent'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>
}): Promise<Metadata> {
  const { locale } = await params
  const metadata = pageMetadata.insights[locale]
  
  return generatePageMetadata({
    title: metadata.title,
    description: metadata.description,
    keywords: metadata.keywords,
    canonicalUrl: `https://www.binghengcredit.com/${locale}/insights`,
  })
}

export default async function InsightsPage({
  params,
}: {
  params: Promise<{ locale: Locale }>
}) {
  const { locale } = await params
  const articles = getAllInsights()
  
  return <InsightsContent articles={articles} locale={locale} />
}