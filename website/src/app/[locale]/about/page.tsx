import AboutContent from "./AboutContent"
import { getDictionary } from "@/i18n/get-dictionary"
import { type Locale } from "@/i18n/config"

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: Locale }>
}) {
  const { locale } = await params
  const dictionary = await getDictionary(locale)

  return <AboutContent dictionary={dictionary} />
}