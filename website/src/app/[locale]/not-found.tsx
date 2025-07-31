import { getDictionary } from '@/i18n/get-dictionary'
import { type Locale } from '@/i18n/config'
import NotFoundPage from './NotFoundPage'

export default async function NotFound() {
  // 默认使用中文
  const locale: Locale = 'zh'
  const dict = await getDictionary(locale)
  
  return <NotFoundPage dict={dict} locale={locale} />
}