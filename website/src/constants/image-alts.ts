/**
 * Centralized alt text for all images
 * Following WCAG guidelines for descriptive and meaningful alt text
 */

export const imageAlts = {
  // Logo variations
  '/logo.png': 'Bingheng Credit logo - Professional cross-border debt collection services between US and China',
  '/logo-white.png': 'Bingheng Credit white logo - Specialized Chinese debt recovery company',
  
  // Hero carousel images
  '/images/hero/debt-recovery-1.jpg': 'Professional team discussing cross-border debt recovery strategies for Chinese nationals who returned home',
  '/images/hero/debt-recovery-2.jpg': 'University housing staff reviewing successful student debt recovery case with Bingheng Credit',
  '/images/hero/debt-recovery-3.jpg': 'E-commerce platform manager analyzing recovered seller debts through specialized collection services',
  
  // Service specific images
  '/images/services/international-business.jpg': 'International business professionals facilitating US-China debt collection negotiations',
  '/images/services/legal-consultation.jpg': 'Legal experts reviewing FDCPA compliance for cross-border debt collection',
  '/images/services/data-analysis.jpg': 'Debt portfolio analysis dashboard showing 65% recovery rate for Chinese debtor cases',
  '/images/services/student-housing.jpg': 'Student housing debt collection process for Chinese international students',
  '/images/services/ecommerce.jpg': 'E-commerce debt recovery specialists tracking cross-border seller obligations',
  '/images/services/b2b-trade.jpg': 'B2B trade debt negotiation between US companies and Chinese businesses',
  
  // About page images
  '/images/about/team-meeting.jpg': 'Bingheng Credit bilingual team developing customized debt recovery strategies',
  '/images/about/office-building.jpg': 'Bingheng Credit headquarters in Shanghai financial district',
  '/images/about/handshake.jpg': 'Successful debt recovery agreement between US creditor and Chinese debtor',
  
  // Process workflow images
  '/images/process/workflow.jpg': 'Four-step debt recovery process diagram showing 45-60 day average timeline',
  '/images/process/consultation.jpg': 'Free consultation meeting evaluating Chinese debt recovery potential',
  '/images/process/assessment.jpg': '24-hour debt assessment process for cross-border collection cases',
  '/images/process/communication.jpg': 'Culturally appropriate communication with Chinese debtors through WeChat and local channels',
  '/images/process/recovery.jpg': 'Secure international fund transfer completing debt recovery process',
  
  // Industry specific images
  '/images/industries/student-housing.jpg': 'University dormitory showcasing successful recovery of Chinese student housing debts',
  '/images/industries/ecommerce.jpg': 'Online marketplace recovering cross-border seller deposits and fees',
  '/images/industries/b2b-trade.jpg': 'International trade debt collection for US-China business transactions',
  
  // Case study images
  '/images/case-studies/university.jpg': 'US university campus that recovered $2.1M in Chinese student debts',
  '/images/case-studies/ecommerce.jpg': 'E-commerce warehouse representing $800K recovered seller debt',
  '/images/case-studies/manufacturing.jpg': 'Manufacturing facility that recovered $3.2M B2B trade debt from China',
  
  // Compliance and trust images
  '/images/compliance/fdcpa.jpg': 'FDCPA compliance certification for ethical debt collection practices',
  '/images/compliance/legal-framework.jpg': 'US and Chinese legal frameworks governing cross-border debt collection',
  '/images/trust/certifications.jpg': 'Industry certifications and compliance badges for debt collection',
  
  // Team member images
  '/images/team/ceo.jpg': 'CEO with 20+ years experience in US-China debt recovery',
  '/images/team/operations.jpg': 'Operations director managing cross-border collection processes',
  '/images/team/legal.jpg': 'Legal counsel ensuring FDCPA and Chinese law compliance',
  
  // Insight article placeholders
  '/images/insights/placeholder.svg': 'Debt collection insights and industry analysis article',
  
  // Default fallback
  default: 'Bingheng Credit professional debt collection services image'
}

/**
 * Get alt text for an image
 * @param src - Image source path
 * @returns Alt text for the image
 */
export function getImageAlt(src: string): string {
  return imageAlts[src as keyof typeof imageAlts] || imageAlts.default
}