export const i18n = {
  defaultLocale: 'zh',
  locales: ['zh', 'en'] as const,
} as const

export type Locale = (typeof i18n)['locales'][number]

export const languages = {
  zh: '中文',
  en: 'English',
} as const

// 路由路径映射 - 已弃用
// 现在使用 Next.js App Router 的文件系统路由
// 所有路径都自动添加语言前缀 /zh 或 /en
// 例如: /zh/about, /en/services 等