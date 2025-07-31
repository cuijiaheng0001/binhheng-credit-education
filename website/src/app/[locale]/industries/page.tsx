import { getDictionary } from '@/i18n/get-dictionary'
import { type Locale } from '@/i18n/config'
import { type Metadata } from 'next'
import { generatePageMetadata, pageMetadata } from '@/lib/seo-metadata'
import IndustriesContent from './IndustriesContent'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>
}): Promise<Metadata> {
  const { locale } = await params
  const metadata = pageMetadata.industries[locale]
  
  return generatePageMetadata({
    title: metadata.title,
    description: metadata.description,
    keywords: metadata.keywords,
    canonicalUrl: `https://www.binghengcredit.com/${locale}/industries`,
  })
}

export default async function IndustriesPage({
  params,
}: {
  params: Promise<{ locale: Locale }>
}) {
  const { locale } = await params
  const dict = await getDictionary(locale)
  
  return <IndustriesContent ctaFreeConsultation={dict.cta.freeConsultation} locale={locale} />
}