import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '专业中国债务人追收服务 | Bingheng Credit',
  description: '专注于追收返回中国的债务人欠款，成功率超过60%。我们是唯一专门处理中国债务人的国际催收公司。',
  keywords: '中国债务追收,债务催收,国际债务追讨,跨境催收,中国欠款追讨',
  openGraph: {
    title: '专业中国债务人追收服务',
    description: '专注于追收返回中国的债务人欠款，成功率超过60%',
    type: 'website',
    locale: 'zh_CN',
    alternateLocale: 'en_US',
  },
  alternates: {
    canonical: 'https://www.binghengcredit.com/services/debt-collection',
    languages: {
      'zh': 'https://www.binghengcredit.com/zh/services/debt-collection',
      'en': 'https://www.binghengcredit.com/en/services/debt-collection',
    },
  },
}