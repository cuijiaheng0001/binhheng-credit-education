import { Metadata } from 'next'
import { generatePageMetadata, pageMetadata } from '@/lib/seo-metadata'

export const metadata: Metadata = generatePageMetadata({
  title: pageMetadata.industries.en.title,
  description: pageMetadata.industries.en.description,
  keywords: pageMetadata.industries.en.keywords,
  canonicalUrl: 'https://www.binghengcredit.com/industries'
})

export default function IndustriesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}