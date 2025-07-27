import type { Locale } from './config'

const dictionaries = {
  zh: () => import('@/locales/zh.json').then((module) => module.default),
  en: () => import('@/locales/en.json').then((module) => module.default),
}

export const getDictionary = async (locale: Locale) => {
  return dictionaries[locale]?.() ?? dictionaries.zh()
}