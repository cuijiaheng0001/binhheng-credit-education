import { type Locale } from '@/i18n/config'
import TermsContent from './TermsContent'

export default async function TermsPage({
  params,
}: {
  params: Promise<{ locale: Locale }>
}) {
  const { locale } = await params
  
  return <TermsContent locale={locale} />
}