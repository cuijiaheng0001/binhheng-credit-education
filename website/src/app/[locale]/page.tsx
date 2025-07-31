import HomePage from "../HomePage"
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
  const metadata = pageMetadata.home[locale]
  
  return generatePageMetadata({
    title: metadata.title,
    description: metadata.description,
    keywords: metadata.keywords,
    canonicalUrl: `https://www.binghengcredit.com/${locale}`,
  })
}

export default async function LocaleHomePage({
  params,
}: {
  params: Promise<{ locale: Locale }>
}) {
  const { locale } = await params
  const dict = await getDictionary(locale)

  return <HomePage dict={dict} locale={locale} />
}