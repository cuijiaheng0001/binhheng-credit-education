import { getDictionary } from '@/i18n/get-dictionary'
import { type Locale } from '@/i18n/config'
import { type Metadata } from 'next'
import { generatePageMetadata, pageMetadata } from '@/lib/seo-metadata'
import ServicesContent from './ServicesContent'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>
}): Promise<Metadata> {
  const { locale } = await params
  const metadata = pageMetadata.services[locale]
  
  return generatePageMetadata({
    title: metadata.title,
    description: metadata.description,
    keywords: metadata.keywords,
    canonicalUrl: `https://www.binghengcredit.com/${locale}/services`,
  })
}

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: Locale }>
}) {
  const { locale } = await params
  const dict = await getDictionary(locale)
  
  return <ServicesContent dictionary={dict} locale={locale} />
}