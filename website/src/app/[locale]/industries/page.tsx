import { getDictionary } from '@/i18n/get-dictionary'
import { type Locale } from '@/i18n/config'
import IndustriesContent from './IndustriesContent'

export default async function IndustriesPage({
  params,
}: {
  params: Promise<{ locale: Locale }>
}) {
  const { locale } = await params
  const dict = await getDictionary(locale)
  
  return <IndustriesContent ctaFreeConsultation={dict.cta.freeConsultation} locale={locale} />
}