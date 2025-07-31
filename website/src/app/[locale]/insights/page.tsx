import { getAllInsights } from '@/lib/insights-data'
import { type Locale } from '@/i18n/config'
import InsightsContent from './InsightsContent'

export default async function InsightsPage({
  params,
}: {
  params: Promise<{ locale: Locale }>
}) {
  const { locale } = await params
  const articles = getAllInsights()
  
  return <InsightsContent articles={articles} locale={locale} />
}