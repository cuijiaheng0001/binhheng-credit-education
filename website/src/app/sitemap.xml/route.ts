import { getAllInsights } from '@/lib/insights-data'

export async function GET() {
  const baseUrl = 'https://binghengcredit.com'
  
  // Static pages
  const staticPages = [
    { path: '', changefreq: 'weekly', priority: '1.0' },
    { path: '/services', changefreq: 'monthly', priority: '0.9' },
    { path: '/industries', changefreq: 'monthly', priority: '0.8' },
    { path: '/about', changefreq: 'monthly', priority: '0.7' },
    { path: '/insights', changefreq: 'weekly', priority: '0.8' },
    { path: '/case-studies', changefreq: 'monthly', priority: '0.7' },
    { path: '/contact', changefreq: 'monthly', priority: '0.6' },
    { path: '/compliance', changefreq: 'quarterly', priority: '0.5' },
    { path: '/privacy', changefreq: 'yearly', priority: '0.3' },
    { path: '/terms', changefreq: 'yearly', priority: '0.3' },
    { path: '/cookies', changefreq: 'yearly', priority: '0.3' },
  ]

  // Get all insight articles
  const insights = getAllInsights()
  
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
  ${staticPages.map(page => `
  <url>
    <loc>${baseUrl}${page.path}</loc>
    <xhtml:link rel="alternate" hreflang="en-US" href="${baseUrl}${page.path}" />
    <xhtml:link rel="alternate" hreflang="zh-CN" href="${baseUrl}/zh${page.path}" />
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('')}
  ${insights.map(article => `
  <url>
    <loc>${baseUrl}/insights/${article.slug}</loc>
    <xhtml:link rel="alternate" hreflang="en-US" href="${baseUrl}/insights/${article.slug}" />
    <xhtml:link rel="alternate" hreflang="zh-CN" href="${baseUrl}/zh/insights/${article.slug}" />
    <lastmod>${new Date(article.publishDate).toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>`).join('')}
</urlset>`

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  })
}