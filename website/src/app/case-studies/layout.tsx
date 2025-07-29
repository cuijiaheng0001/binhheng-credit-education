import { Metadata } from 'next'
import { generatePageMetadata, pageMetadata } from '@/lib/seo-metadata'

export const metadata: Metadata = generatePageMetadata({
  title: pageMetadata['case-studies'].en.title,
  description: pageMetadata['case-studies'].en.description,
  keywords: pageMetadata['case-studies'].en.keywords,
  canonicalUrl: 'https://binghengcredit.com/case-studies'
})

export default function CaseStudiesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}