import { getDictionary } from '@/i18n/get-dictionary'
import { type Locale } from '@/i18n/config'
import CaseStudiesContent from './CaseStudiesContent'

export default async function CaseStudiesPage({
  params,
}: {
  params: Promise<{ locale: Locale }>
}) {
  const { locale } = await params
  const dict = await getDictionary(locale)
  
  return <CaseStudiesContent dictionary={dict} locale={locale} />
}