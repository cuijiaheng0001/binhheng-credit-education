import { BlogPost, BlogCategory, BlogTag } from '@/types/blog'

export const blogCategories: BlogCategory[] = [
  {
    id: 'debt-collection',
    name: {
      en: 'Debt Collection',
      zh: '债务催收'
    },
    slug: 'debt-collection',
    description: {
      en: 'Best practices and strategies for effective debt collection',
      zh: '高效债务催收的最佳实践和策略'
    }
  },
  {
    id: 'legal-compliance',
    name: {
      en: 'Legal & Compliance',
      zh: '法律合规'
    },
    slug: 'legal-compliance',
    description: {
      en: 'Understanding regulations and compliance in debt collection',
      zh: '了解债务催收中的法规和合规要求'
    }
  },
  {
    id: 'industry-insights',
    name: {
      en: 'Industry Insights',
      zh: '行业洞察'
    },
    slug: 'industry-insights',
    description: {
      en: 'Market trends and analysis in cross-border debt recovery',
      zh: '跨境债务回收的市场趋势和分析'
    }
  },
  {
    id: 'case-studies',
    name: {
      en: 'Case Studies',
      zh: '案例研究'
    },
    slug: 'case-studies',
    description: {
      en: 'Success stories and lessons learned from real cases',
      zh: '真实案例中的成功故事和经验教训'
    }
  }
]

export const blogTags: BlogTag[] = [
  {
    id: 'china-market',
    name: { en: 'China Market', zh: '中国市场' },
    slug: 'china-market'
  },
  {
    id: 'b2b',
    name: { en: 'B2B', zh: 'B2B' },
    slug: 'b2b'
  },
  {
    id: 'student-housing',
    name: { en: 'Student Housing', zh: '学生住房' },
    slug: 'student-housing'
  },
  {
    id: 'e-commerce',
    name: { en: 'E-commerce', zh: '电子商务' },
    slug: 'e-commerce'
  },
  {
    id: 'best-practices',
    name: { en: 'Best Practices', zh: '最佳实践' },
    slug: 'best-practices'
  },
  {
    id: 'technology',
    name: { en: 'Technology', zh: '技术' },
    slug: 'technology'
  }
]

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: {
      en: 'Understanding Chinese Debt Collection Laws: A Comprehensive Guide',
      zh: '理解中国债务催收法律：综合指南'
    },
    slug: 'understanding-chinese-debt-collection-laws',
    excerpt: {
      en: 'Navigate the complexities of Chinese debt collection laws and regulations with our expert guide.',
      zh: '通过我们的专家指南了解中国债务催收法律法规的复杂性。'
    },
    content: {
      en: `# Understanding Chinese Debt Collection Laws: A Comprehensive Guide

Debt collection in China operates under a unique legal framework that combines civil law traditions with modern commercial regulations. This comprehensive guide will help international creditors understand the key aspects of Chinese debt collection laws.

## Key Legal Framework

### 1. General Principles of Civil Law
The foundation of debt collection in China rests on the General Principles of Civil Law, which establishes the basic rights and obligations of creditors and debtors.

### 2. Contract Law
Chinese Contract Law governs the formation, performance, and enforcement of contracts, including loan agreements and commercial transactions.

### 3. Civil Procedure Law
This law outlines the procedures for filing lawsuits, obtaining judgments, and enforcing court decisions in debt collection cases.

## Important Considerations

- **Statute of Limitations**: Generally 3 years for commercial debts
- **Interest Rates**: Strictly regulated with caps on penalty interest
- **Collection Methods**: Prohibited practices include harassment and public shaming
- **Documentation**: Proper documentation is crucial for successful collection

## Best Practices for International Creditors

1. **Early Engagement**: Contact debtors promptly when payments are missed
2. **Cultural Sensitivity**: Understanding Chinese business culture improves outcomes
3. **Local Representation**: Working with local partners familiar with the system
4. **Alternative Dispute Resolution**: Mediation is often preferred over litigation

## Conclusion

Successfully collecting debts in China requires understanding both the legal framework and cultural context. International creditors who invest time in understanding these aspects significantly improve their recovery rates.`,
      zh: `# 理解中国债务催收法律：综合指南

中国的债务催收在一个独特的法律框架下运作，该框架结合了民法传统和现代商业法规。本综合指南将帮助国际债权人了解中国债务催收法律的关键方面。

## 主要法律框架

### 1. 民法通则
中国债务催收的基础建立在民法通则之上，该法确立了债权人和债务人的基本权利和义务。

### 2. 合同法
中国合同法规范合同的订立、履行和执行，包括贷款协议和商业交易。

### 3. 民事诉讼法
该法概述了提起诉讼、获得判决以及在债务催收案件中执行法院决定的程序。

## 重要考虑因素

- **诉讼时效**：商业债务通常为3年
- **利率**：严格监管，对罚息设有上限
- **催收方法**：禁止的做法包括骚扰和公开羞辱
- **文件记录**：适当的文件记录对成功催收至关重要

## 国际债权人的最佳实践

1. **早期介入**：在错过付款时及时联系债务人
2. **文化敏感性**：了解中国商业文化可改善结果
3. **当地代表**：与熟悉系统的当地合作伙伴合作
4. **替代性争议解决**：调解通常优于诉讼

## 结论

在中国成功催收债务需要了解法律框架和文化背景。投入时间了解这些方面的国际债权人可以显著提高其回收率。`
    },
    author: {
      name: 'David Chen',
      role: {
        en: 'Legal Director',
        zh: '法律总监'
      }
    },
    publishedAt: '2024-01-15',
    category: blogCategories[1],
    tags: [blogTags[0], blogTags[4]],
    coverImage: {
      url: '/images/content/china-debt-collection.jpg',
      alt: {
        en: 'Chinese legal documents and gavel',
        zh: '中国法律文件和法槌'
      }
    },
    readingTime: {
      en: 8,
      zh: 7
    },
    featured: true,
    status: 'published'
  },
  {
    id: '2',
    title: {
      en: 'B2B Trade Debt Recovery: Strategies for Success',
      zh: 'B2B贸易债务回收：成功策略'
    },
    slug: 'b2b-trade-debt-recovery-strategies',
    excerpt: {
      en: 'Learn effective strategies for recovering B2B trade debts in international markets.',
      zh: '了解在国际市场上回收B2B贸易债务的有效策略。'
    },
    content: {
      en: `# B2B Trade Debt Recovery: Strategies for Success

B2B trade debt recovery presents unique challenges that require specialized approaches. This article explores proven strategies for maximizing recovery rates in international B2B transactions.

## Understanding B2B Debt Dynamics

B2B debts differ from consumer debts in several key ways:
- Larger amounts involved
- Complex contractual relationships
- Ongoing business relationships to consider
- Different legal frameworks

## Key Strategies

### 1. Preventive Measures
- Comprehensive credit checks
- Clear payment terms
- Regular account monitoring

### 2. Early Intervention
- Prompt follow-up on overdue accounts
- Professional communication
- Flexible payment arrangements

### 3. Escalation Process
- Formal demand letters
- Negotiation and mediation
- Legal action as last resort

## Conclusion

Successful B2B debt recovery requires a balanced approach that considers both immediate recovery needs and long-term business relationships.`,
      zh: `# B2B贸易债务回收：成功策略

B2B贸易债务回收面临独特的挑战，需要专门的方法。本文探讨了在国际B2B交易中最大化回收率的成熟策略。

## 了解B2B债务动态

B2B债务在几个关键方面不同于消费者债务：
- 涉及金额较大
- 复杂的合同关系
- 需要考虑持续的业务关系
- 不同的法律框架

## 关键策略

### 1. 预防措施
- 全面的信用检查
- 明确的付款条款
- 定期账户监控

### 2. 早期干预
- 及时跟进逾期账户
- 专业沟通
- 灵活的付款安排

### 3. 升级流程
- 正式催款函
- 谈判和调解
- 法律行动作为最后手段

## 结论

成功的B2B债务回收需要平衡的方法，既考虑即时回收需求，也考虑长期业务关系。`
    },
    author: {
      name: 'Sarah Williams',
      role: {
        en: 'Senior Recovery Specialist',
        zh: '高级回收专家'
      }
    },
    publishedAt: '2024-01-10',
    category: blogCategories[0],
    tags: [blogTags[1], blogTags[4]],
    coverImage: {
      url: '/images/content/b2b-trade-debt.jpg',
      alt: {
        en: 'Business handshake and documents',
        zh: '商务握手和文件'
      }
    },
    readingTime: {
      en: 6,
      zh: 5
    },
    featured: false,
    status: 'published'
  }
]

export function getBlogPosts(locale: 'en' | 'zh'): BlogPost[] {
  return blogPosts.filter(post => post.status === 'published')
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug)
}

export function getBlogPostsByCategory(categorySlug: string): BlogPost[] {
  return blogPosts.filter(post => 
    post.status === 'published' && post.category.slug === categorySlug
  )
}

export function getBlogPostsByTag(tagSlug: string): BlogPost[] {
  return blogPosts.filter(post => 
    post.status === 'published' && post.tags.some(tag => tag.slug === tagSlug)
  )
}

export function getFeaturedPosts(): BlogPost[] {
  return blogPosts.filter(post => post.status === 'published' && post.featured)
}