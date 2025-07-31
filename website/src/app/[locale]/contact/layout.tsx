import { Metadata } from 'next'
import { generatePageMetadata, pageMetadata } from '@/lib/seo-metadata'

export const metadata: Metadata = generatePageMetadata({
  title: pageMetadata.contact.en.title,
  description: pageMetadata.contact.en.description,
  keywords: pageMetadata.contact.en.keywords,
  canonicalUrl: 'https://binghengcredit.com/contact'
})

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}