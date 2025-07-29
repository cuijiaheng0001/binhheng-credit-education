import Script from 'next/script'

interface BreadcrumbItem {
  name: string
  url: string
}

interface StructuredDataProps {
  type?: 'service' | 'article' | 'breadcrumb'
  data?: any
  breadcrumbs?: BreadcrumbItem[]
}

export default function StructuredData({ type = 'service', data, breadcrumbs }: StructuredDataProps) {
  const baseUrl = 'https://www.binghengcredit.com'

  const generateBreadcrumbSchema = (items: BreadcrumbItem[]) => ({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `${baseUrl}${item.url}`
    }))
  })

  const generateServiceSchema = (serviceData: any) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": serviceData.type || "Debt Collection Service",
    "provider": {
      "@type": "Organization",
      "name": "Bingheng Credit",
      "url": baseUrl
    },
    "name": serviceData.name,
    "description": serviceData.description,
    "areaServed": {
      "@type": "Country",
      "name": ["United States", "China"]
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": serviceData.name,
      "itemListElement": serviceData.features?.map((feature: any) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": feature.name,
          "description": feature.description
        }
      })) || []
    }
  })

  const generateArticleSchema = (articleData: any) => ({
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": articleData.title,
    "description": articleData.description,
    "author": {
      "@type": "Organization",
      "name": "Bingheng Credit"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Bingheng Credit",
      "logo": {
        "@type": "ImageObject",
        "url": `${baseUrl}/logo.png`
      }
    },
    "datePublished": articleData.publishDate || new Date().toISOString(),
    "dateModified": articleData.modifiedDate || new Date().toISOString(),
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${baseUrl}${articleData.url}`
    }
  })

  let schema = null

  if (type === 'breadcrumb' && breadcrumbs) {
    schema = generateBreadcrumbSchema(breadcrumbs)
  } else if (type === 'service' && data) {
    schema = generateServiceSchema(data)
  } else if (type === 'article' && data) {
    schema = generateArticleSchema(data)
  }

  if (!schema) return null

  return (
    <Script
      id={`structured-data-${type}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}