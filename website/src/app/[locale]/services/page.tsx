import { getDictionary } from '@/i18n/get-dictionary'
import { type Locale } from '@/i18n/config'
import ServicesContent from './ServicesContent'

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: Locale }>
}) {
  const { locale } = await params
  const dict = await getDictionary(locale)
  
  return <ServicesContent dictionary={dict} locale={locale} />
}