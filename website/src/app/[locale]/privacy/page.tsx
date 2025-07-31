import { type Locale } from '@/i18n/config'
import PrivacyPageContent from './PrivacyPageContent'

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: Locale }>
}) {
  const { locale } = await params
  
  return <PrivacyPageContent locale={locale} />
}