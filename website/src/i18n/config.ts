export const i18n = {
  defaultLocale: 'zh',
  locales: ['zh', 'en'] as const,
} as const

export type Locale = (typeof i18n)['locales'][number]

export const languages = {
  zh: '中文',
  en: 'English',
} as const

// 路由路径映射
export const pathnames = {
  '/': '/',
  '/about': {
    zh: '/about',
    en: '/about'
  },
  '/services': {
    zh: '/services',
    en: '/services'
  },
  '/process': {
    zh: '/process',
    en: '/process'
  },
  '/industries': {
    zh: '/industries',
    en: '/industries'
  },
  '/insights': {
    zh: '/insights',
    en: '/insights'
  },
  '/contact': {
    zh: '/contact',
    en: '/contact'
  },
} as const