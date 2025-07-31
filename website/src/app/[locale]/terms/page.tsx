import { type Locale } from '@/i18n/config'
import TermsContent from './TermsContent'

export default async function TermsPage({
  params,
}: {
  params: Promise<{ locale: Locale }>
}) {
  await params // Ensure params is awaited for Next.js 15 compatibility
  
  return <TermsContent />
}