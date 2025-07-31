import ProcessContent from "./ProcessContent"
import { getDictionary } from "@/i18n/get-dictionary"
import { type Locale } from "@/i18n/config"

export default async function ProcessPage({
  params,
}: {
  params: Promise<{ locale: Locale }>
}) {
  const { locale } = await params
  const dictionary = await getDictionary(locale)

  return <ProcessContent dictionary={dictionary} locale={locale} />
}