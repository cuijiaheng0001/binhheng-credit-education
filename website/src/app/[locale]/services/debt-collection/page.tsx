import { getDictionary } from '@/i18n/get-dictionary'
import { type Locale } from '@/i18n/config'
import DebtCollectionContent from './DebtCollectionContent'

export default async function DebtCollectionPage({
  params,
}: {
  params: Promise<{ locale: Locale }>
}) {
  const { locale } = await params
  const dict = await getDictionary(locale)
  
  return <DebtCollectionContent ctaLabel={dict.cta.freeConsultation} />
}