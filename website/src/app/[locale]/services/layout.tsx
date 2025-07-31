import { Metadata } from 'next'
import { generatePageMetadata, pageMetadata } from '@/lib/seo-metadata'

export const metadata: Metadata = generatePageMetadata({
  title: pageMetadata.services.en.title,
  description: pageMetadata.services.en.description,
  keywords: pageMetadata.services.en.keywords,
  canonicalUrl: 'https://www.binghengcredit.com/services'
})

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}