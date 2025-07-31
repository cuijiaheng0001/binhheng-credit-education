import { getDictionary } from '@/i18n/get-dictionary'
import { type Locale } from '@/i18n/config'
import ContactContent from './ContactContent'

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: Locale }>
}) {
  const { locale } = await params
  const dict = await getDictionary(locale)
  
  return <ContactContent dictionary={dict} locale={locale} />
}