import { Metadata } from 'next'
import { generatePageMetadata, pageMetadata } from '@/lib/seo-metadata'

export const metadata: Metadata = generatePageMetadata({
  title: pageMetadata.about.en.title,
  description: pageMetadata.about.en.description,
  keywords: pageMetadata.about.en.keywords,
  canonicalUrl: 'https://binghengcredit.com/about'
})

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}