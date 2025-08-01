export default function StructuredDataOrganization() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Bingheng Credit",
    "alternateName": "秉恒信用",
    "url": "https://www.binghengcredit.com",
    "logo": "https://www.binghengcredit.com/logo-inverted.png",
    "description": "Professional cross-border debt recovery services specializing in Chinese debtors. 65% success rate with no upfront fees.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Lujiazui Financial Center",
      "addressLocality": "Shanghai",
      "addressRegion": "Pudong New Area",
      "postalCode": "200120",
      "addressCountry": "CN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+86-166-5308-6767",
      "contactType": "Customer Service",
      "availableLanguage": ["en", "zh"],
      "email": "info@binghengcredit.com"
    },
    "sameAs": [
      "https://www.linkedin.com/company/bingheng-credit",
      "https://twitter.com/binghengcredit"
    ],
    "areaServed": [
      {
        "@type": "Country",
        "name": "United States"
      },
      {
        "@type": "Country", 
        "name": "China"
      }
    ],
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "31.2304",
        "longitude": "121.4737"
      },
      "geoRadius": "10000"
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}