import HomePage from "../HomePage"
import { getDictionary } from "@/i18n/get-dictionary"
import { type Locale } from "@/i18n/config"

export default async function LocaleHomePage({
  params,
}: {
  params: Promise<{ locale: Locale }>
}) {
  const { locale } = await params
  const dict = await getDictionary(locale)

  return <HomePage dict={dict} locale={locale} />
}