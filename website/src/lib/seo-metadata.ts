import { Metadata } from 'next'

interface PageMetadata {
  title: string
  description: string
  keywords?: string[]
  image?: string
  noIndex?: boolean
  canonicalUrl?: string
}

const siteName = 'Bingheng Credit'
const siteUrl = 'https://binghengcredit.com'
const defaultImage = '/og-image.png'

export function generatePageMetadata({
  title,
  description,
  keywords = [],
  image = defaultImage,
  noIndex = false,
  canonicalUrl,
}: PageMetadata): Metadata {
  const fullTitle = title === siteName ? title : `${title} | ${siteName}`

  return {
    title: fullTitle,
    description,
    keywords: keywords.join(', '),
    openGraph: {
      title: fullTitle,
      description,
      url: canonicalUrl || siteUrl,
      siteName,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [image],
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    ...(canonicalUrl && {
      alternates: {
        canonical: canonicalUrl,
      },
    }),
  }
}

// Page-specific metadata
export const pageMetadata = {
  home: {
    en: {
      title: 'Cross-Border Debt Recovery Specialists | Bingheng Credit',
      description: 'Professional debt collection for Chinese nationals who returned home. 65% success rate, no upfront fees. Recover student housing, B2B trade, and e-commerce debts.',
      keywords: ['cross-border debt recovery', 'Chinese debt collection', 'international receivables', 'student housing debt recovery', 'B2B debt collection China']
    },
    zh: {
      title: '跨境债务追收专家 | 秉恒信用',
      description: '专业追收返回中国的债务人欠款。65%成功率，无前期费用。专注留学生住宿、B2B贸易、电商债务追收。',
      keywords: ['跨境债务追收', '中国债务催收', '国际应收账款', '留学生欠费追收', '中美贸易欠款']
    }
  },
  services: {
    en: {
      title: 'Professional Debt Collection Services for China',
      description: 'Specialized debt recovery services for student housing, B2B trade, and e-commerce. Local expertise, compliant methods, 45-90 day average recovery.',
      keywords: ['debt collection services', 'China debt recovery', 'student housing collections', 'B2B collections', 'e-commerce debt recovery']
    },
    zh: {
      title: '专业中国债务追收服务',
      description: '专注留学生住宿、B2B贸易、电商债务追收。本地化专业团队，合规操作，平均45-90天完成追收。',
      keywords: ['债务追收服务', '中国债务催收', '留学生债务', 'B2B催收', '电商欠款追收']
    }
  },
  industries: {
    en: {
      title: 'Industry-Specific Debt Recovery Solutions',
      description: 'Tailored collection strategies for student housing ($15M+ recovered), e-commerce platforms, and B2B trade. Industry expertise with proven results.',
      keywords: ['student housing debt', 'e-commerce collections', 'B2B trade recovery', 'industry debt solutions', 'specialized collections']
    },
    zh: {
      title: '行业定制化债务追收方案',
      description: '为留学生住宿（已追回$1500万+）、电商平台、B2B贸易提供专业追收方案。深耕细分行业，成果显著。',
      keywords: ['留学生债务追收', '电商催收', 'B2B贸易欠款', '行业催收方案', '专业催收服务']
    }
  },
  about: {
    en: {
      title: 'About Bingheng Credit - Your Bridge to China',
      description: 'The only collection agency specializing in Chinese debtors. Founded by industry veterans with deep understanding of both US and Chinese legal systems.',
      keywords: ['about Bingheng Credit', 'Chinese collection agency', 'cross-border specialists', 'debt recovery experts']
    },
    zh: {
      title: '关于秉恒信用 - 您的中国催收桥梁',
      description: '唯一专注中国债务人的催收公司。由深谙中美法律体系的行业专家创立，架起跨境催收的桥梁。',
      keywords: ['关于秉恒信用', '中国催收公司', '跨境专家', '债务追收专家']
    }
  },
  insights: {
    en: {
      title: 'Insights & Resources for Cross-Border Debt Collection',
      description: 'Expert articles, case studies, and compliance guides for collecting debts from Chinese nationals. Learn proven strategies and industry best practices.',
      keywords: ['debt collection insights', 'China collection guides', 'cross-border recovery tips', 'collection strategies', 'compliance resources']
    },
    zh: {
      title: '跨境债务追收洞察与资源',
      description: '专家文章、成功案例、合规指南，助您成功追收中国债务。学习实战策略和行业最佳实践。',
      keywords: ['债务追收洞察', '中国催收指南', '跨境追收技巧', '催收策略', '合规资源']
    }
  },
  contact: {
    en: {
      title: 'Contact Bingheng Credit - Free Debt Assessment',
      description: 'Get a free assessment of your Chinese debtor cases. 24-hour response, no upfront fees. Contact our bilingual team today.',
      keywords: ['contact debt collection', 'free debt assessment', 'Chinese collection agency contact', 'debt recovery consultation']
    },
    zh: {
      title: '联系秉恒信用 - 免费债务评估',
      description: '免费评估您的中国债务案件。24小时响应，无前期费用。立即联系我们的双语团队。',
      keywords: ['联系债务催收', '免费债务评估', '中国催收公司联系', '债务追收咨询']
    }
  },
  'case-studies': {
    en: {
      title: 'Success Stories - $68M+ in Cross-Border Debt Recovered',
      description: 'Real case studies of successful debt recovery from Chinese nationals. See how we recovered $2.1M for a US university and $3.2M for a Fortune 500 company.',
      keywords: ['debt collection case studies', 'success stories', 'debt recovery results', 'collection testimonials']
    },
    zh: {
      title: '成功案例 - 已追回$6800万+跨境债务',
      description: '真实的中国债务追收成功案例。了解我们如何为美国大学追回$210万，为财富500强企业追回$320万。',
      keywords: ['债务催收案例', '成功故事', '追收成果', '客户见证']
    }
  }
}