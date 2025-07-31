import { redirect } from 'next/navigation'
import { headers } from 'next/headers'
import { i18n } from '@/i18n/config'

async function getLocale() {
  const headersList = await headers()
  const acceptLanguage = headersList.get('accept-language') || ''
  const languages = acceptLanguage.split(',').map(lang => lang.split(';')[0].trim().toLowerCase())
  
  for (const lang of languages) {
    if (lang.startsWith('zh')) return 'zh'
    if (lang.startsWith('en')) return 'en'
  }
  
  return i18n.defaultLocale
}

export default async function RootPage() {
  const locale = await getLocale()
  redirect(`/${locale}`)
}