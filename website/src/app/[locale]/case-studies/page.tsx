import { getDictionary } from '@/i18n/get-dictionary'
import { type Locale } from '@/i18n/config'
import { type Metadata } from 'next'
import { generatePageMetadata, pageMetadata } from '@/lib/seo-metadata'
import CaseStudiesContent from './CaseStudiesContent'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>
}): Promise<Metadata> {
  const { locale } = await params
  const metadata = pageMetadata['case-studies'][locale]
  
  return generatePageMetadata({
    title: metadata.title,
    description: metadata.description,
    keywords: metadata.keywords,
    canonicalUrl: `https://www.binghengcredit.com/${locale}/case-studies`,
  })
}

export default async function CaseStudiesPage({
  params,
}: {
  params: Promise<{ locale: Locale }>
}) {
  const { locale } = await params
  const dict = await getDictionary(locale)
  
  return <CaseStudiesContent dictionary={dict} locale={locale} />
}