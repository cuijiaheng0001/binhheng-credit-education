interface FAQStructuredDataProps {
  locale: 'en' | 'zh'
}

export default function StructuredDataFAQ({ locale }: FAQStructuredDataProps) {
  const faqs = locale === 'zh' ? [
    {
      "@type": "Question",
      "name": "如何开始债务追收流程？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "您可以通过电话、邮件或在线咨询表单联系我们。我们会在24小时内响应，并为您安排免费的案件评估。"
      }
    },
    {
      "@type": "Question",
      "name": "你们的收费标准是什么？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "我们采用'无追回，不收费'的模式。成功追回后，根据债务金额收取25%-35%的佣金。具体费率会根据案件复杂度和金额大小而定。"
      }
    },
    {
      "@type": "Question",
      "name": "需要提供哪些文件？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "通常需要债务合同、付款记录、沟通记录等相关文件。我们的专业团队会指导您准备所需材料。"
      }
    },
    {
      "@type": "Question",
      "name": "你们如何处理中国债务人？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "我们在中国主要城市设有办事处，拥有本地化团队，能够直接用中文沟通，了解当地法律和文化，确保高效追收。"
      }
    }
  ] : [
    {
      "@type": "Question",
      "name": "How do I start the debt recovery process?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can contact us by phone, email, or online inquiry form. We'll respond within 24 hours and arrange a free case assessment."
      }
    },
    {
      "@type": "Question",
      "name": "What are your fee structures?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We operate on a 'No Recovery, No Fee' basis. Upon successful recovery, we charge 25%-35% commission based on the debt amount. Specific rates depend on case complexity and amount."
      }
    },
    {
      "@type": "Question",
      "name": "What documents do I need to provide?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Typically, we need debt contracts, payment records, communication logs, and related documents. Our professional team will guide you through document preparation."
      }
    },
    {
      "@type": "Question",
      "name": "How do you handle Chinese debtors?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We have offices in major Chinese cities with localized teams who communicate directly in Chinese, understand local laws and culture, ensuring efficient recovery."
      }
    }
  ]

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}