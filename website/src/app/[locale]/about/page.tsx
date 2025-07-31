import AboutContent from "./AboutContent"
import { getDictionary } from "@/i18n/get-dictionary"
import { type Locale } from "@/i18n/config"
import { generatePageMetadata, pageMetadata } from '@/lib/seo-metadata'
import type { Metadata } from 'next'

export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ locale: Locale }> 
}): Promise<Metadata> {
  const { locale } = await params
  const metadata = pageMetadata.about[locale]
  
  return generatePageMetadata({
    title: metadata.title,
    description: metadata.description,
    keywords: metadata.keywords,
    canonicalUrl: `https://www.binghengcredit.com/${locale}/about`,
  })
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: Locale }>
}) {
  const { locale } = await params
  const dictionary = await getDictionary(locale)

  return <AboutContent dictionary={dictionary} locale={locale} />
}