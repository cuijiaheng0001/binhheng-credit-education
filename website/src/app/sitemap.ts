import { MetadataRoute } from 'next'

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
    { path: '/insights', priority: 0.6, changeFrequency: 'daily' },
    { path: '/contact', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/compliance', priority: 0.5, changeFrequency: 'quarterly' },
    { path: '/privacy', priority: 0.3, changeFrequency: 'quarterly' },
    { path: '/terms', priority: 0.3, changeFrequency: 'quarterly' },
  ]

  // Service-specific pages (for better SEO)
  const servicePages = [
    { path: '/services/debt-collection', priority: 0.85, changeFrequency: 'weekly' },
    { path: '/services/student-housing', priority: 0.85, changeFrequency: 'weekly' },
    { path: '/services/ecommerce', priority: 0.85, changeFrequency: 'weekly' },
    { path: '/services/b2b-trade', priority: 0.85, changeFrequency: 'weekly' },
  ]

  // Industry-specific pages
  const industryPages = [
    { path: '/industries/education', priority: 0.75, changeFrequency: 'monthly' },
    { path: '/industries/ecommerce', priority: 0.75, changeFrequency: 'monthly' },
    { path: '/industries/logistics', priority: 0.75, changeFrequency: 'monthly' },
    { path: '/industries/healthcare', priority: 0.75, changeFrequency: 'monthly' },
  ]

  // Combine all pages
  const allPages = [...pages, ...servicePages, ...industryPages]

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
        lastModified: currentDate,
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