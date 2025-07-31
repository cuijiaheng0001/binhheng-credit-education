import { MetadataRoute } from 'next'
import { blogPosts } from '@/lib/blog-data'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.binghengcredit.com'
  const currentDate = new Date()
  const locales = ['zh', 'en']
  
  // Core pages with their configuration
  const pages = [
    { path: '', priority: 1.0, changeFrequency: 'daily' },
    { path: '/about', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/services', priority: 0.9, changeFrequency: 'weekly' },
    { path: '/process', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/industries', priority: 0.8, changeFrequency: 'weekly' },
    { path: '/blog', priority: 0.7, changeFrequency: 'daily' },
    { path: '/contact', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/case-studies', priority: 0.8, changeFrequency: 'weekly' },
    { path: '/compliance', priority: 0.5, changeFrequency: 'quarterly' },
    { path: '/privacy', priority: 0.3, changeFrequency: 'quarterly' },
    { path: '/terms', priority: 0.3, changeFrequency: 'quarterly' },
  ]

  // Service-specific pages (for better SEO)
  const servicePages = [
    { path: '/services/debt-collection', priority: 0.85, changeFrequency: 'weekly' },
  ]

  // Industry-specific pages (without anchors)
  const industryPages = [
    { path: '/industries/student-housing', priority: 0.75, changeFrequency: 'weekly' },
    { path: '/industries/ecommerce', priority: 0.75, changeFrequency: 'weekly' },
    { path: '/industries/b2b-trade', priority: 0.75, changeFrequency: 'weekly' },
  ]

  // Blog posts
  const blogPages = blogPosts
    .filter(post => post.status === 'published')
    .map(post => ({
      path: `/blog/${post.slug}`,
      priority: 0.6,
      changeFrequency: 'monthly' as const,
      lastModified: new Date(post.updatedAt || post.publishedAt)
    }))

  // Combine all pages
  const allPages = [...pages, ...servicePages, ...industryPages, ...blogPages]

  // Generate URLs for all locales
  const urls: MetadataRoute.Sitemap = []

  // Add base URL without locale (redirects to default locale)
  urls.push({
    url: baseUrl,
    lastModified: currentDate,
    changeFrequency: 'daily' as const,
    priority: 1.0,
  })

  // Add all pages for each locale
  allPages.forEach(page => {
    locales.forEach(locale => {
      urls.push({
        url: `${baseUrl}/${locale}${page.path}`,
        lastModified: 'lastModified' in page && page.lastModified instanceof Date ? page.lastModified : currentDate,
        changeFrequency: page.changeFrequency as any,
        priority: page.priority,
        alternates: {
          languages: {
            'zh': `${baseUrl}/zh${page.path}`,
            'en': `${baseUrl}/en${page.path}`,
          }
        }
      })
    })
  })

  return urls
}