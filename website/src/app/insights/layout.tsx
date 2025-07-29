import { Metadata } from 'next'
import { generatePageMetadata, pageMetadata } from '@/lib/seo-metadata'

export const metadata: Metadata = generatePageMetadata({
  title: pageMetadata.insights.en.title,
  description: pageMetadata.insights.en.description,
  keywords: pageMetadata.insights.en.keywords,
  canonicalUrl: 'https://binghengcredit.com/insights'
})

export default function InsightsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}