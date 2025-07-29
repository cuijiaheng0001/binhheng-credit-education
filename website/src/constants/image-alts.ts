/**
 * Centralized alt text for all images
 * Following WCAG guidelines for descriptive and meaningful alt text
 */

export const imageAlts = {
  // Hero images
  '/images/hero/debt-recovery-1.jpg': '专业商务团队讨论跨境债务追收策略，现代化办公环境',
  '/images/hero/debt-recovery-2.jpg': '关于 Bingheng Credit - 专业跨境债务追收服务公司，帮助美国企业追回中国相关债务',
  '/images/hero/debt-recovery-3.jpg': '客户服务团队提供24小时专业债务咨询支持',
  
  // Service images
  '/images/services/international-business.jpg': '国际商务合作场景，展示跨境业务专业性',
  '/images/services/legal-consultation.jpg': '法律顾问团队提供专业债务追收法律支持',
  '/images/services/data-analysis.jpg': '债务数据分析和风险评估系统界面',
  
  // About page images
  '/images/about/team-meeting.jpg': 'Bingheng Credit 专业团队会议，制定债务追收方案',
  '/images/about/office-building.jpg': 'Bingheng Credit 公司总部大楼外观',
  
  // Process images
  '/images/process/workflow.jpg': '债务追收流程图解，展示四步专业服务流程',
  '/images/process/consultation.jpg': '客户咨询场景，一对一专业服务',
  
  // Industry images
  '/images/industries/student-housing.jpg': '留学生宿舍债务追收服务场景',
  '/images/industries/ecommerce.jpg': '电商平台债务追收服务展示',
  '/images/industries/b2b-trade.jpg': 'B2B国际贸易债务追收专业服务',
  
  // Default fallback
  default: 'Bingheng Credit 专业图片'
}

/**
 * Get alt text for an image
 * @param src - Image source path
 * @returns Alt text for the image
 */
export function getImageAlt(src: string): string {
  return imageAlts[src as keyof typeof imageAlts] || imageAlts.default
}