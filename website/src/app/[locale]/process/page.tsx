import ProcessContent from "./ProcessContent"
import { getDictionary } from "@/i18n/get-dictionary"
import { type Locale } from "@/i18n/config"
import { generatePageMetadata } from '@/lib/seo-metadata'
import type { Metadata } from 'next'

export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ locale: Locale }> 
}): Promise<Metadata> {
  const { locale } = await params
  
  const metadata = {
    en: {
      title: 'Our Debt Recovery Process - 4 Simple Steps',
      description: 'Learn about our transparent debt recovery process. From free assessment to successful recovery in 45-90 days. No upfront fees.',
      keywords: ['debt recovery process', 'collection process', 'debt collection steps', 'recovery timeline'],
    },
    zh: {
      title: '我们的债务追收流程 - 4个简单步骤',
      description: '了解我们透明的债务追收流程。从免费评估到45-90天成功追回。无前期费用。',
      keywords: ['债务追收流程', '催收流程', '债务催收步骤', '追收时间表'],
    }
  }
  
  return generatePageMetadata({
    title: metadata[locale].title,
    description: metadata[locale].description,
    keywords: metadata[locale].keywords,
    canonicalUrl: `https://www.binghengcredit.com/${locale}/process`,
  })
}

export default async function ProcessPage({
  params,
}: {
  params: Promise<{ locale: Locale }>
}) {
  const { locale } = await params
  const dictionary = await getDictionary(locale)

  return <ProcessContent dictionary={dictionary} locale={locale} />
}