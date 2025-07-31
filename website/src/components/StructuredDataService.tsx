interface ServiceStructuredDataProps {
  locale: 'en' | 'zh'
}

export default function StructuredDataService({ locale }: ServiceStructuredDataProps) {
  const services = [
    {
      "@type": "Service",
      "name": locale === 'zh' ? "中国债务人追收服务" : "Chinese Debtor Recovery Service",
      "description": locale === 'zh' 
        ? "专业追收返回中国的债务人欠款，65%成功率，无前期费用" 
        : "Professional debt recovery for Chinese nationals who returned home. 65% success rate, no upfront fees",
      "provider": {
        "@type": "Organization",
        "name": "Bingheng Credit"
      },
      "areaServed": {
        "@type": "Country",
        "name": "China"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": locale === 'zh' ? "债务追收服务" : "Debt Recovery Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": locale === 'zh' ? "留学生住宿债务追收" : "Student Housing Debt Recovery"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service", 
              "name": locale === 'zh' ? "电商平台债务追收" : "E-commerce Platform Debt Recovery"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": locale === 'zh' ? "B2B贸易债务追收" : "B2B Trade Debt Recovery"
            }
          }
        ]
      }
    }
  ]

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": services
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}