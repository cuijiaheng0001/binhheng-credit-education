import { Metadata } from 'next'
import { getDictionary } from '@/i18n/get-dictionary'
import { type Locale } from '@/i18n/config'
import { getBlogPosts, blogCategories, blogTags } from '@/lib/blog-data'
import BlogListPage from './BlogListPage'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>
}): Promise<Metadata> {
  const { locale } = await params
  const dict = await getDictionary(locale)
  
  return {
    title: locale === 'zh' ? '行业洞察 | 炳恒信用教育' : 'Industry Insights | BinhHeng Credit Education',
    description: locale === 'zh' 
      ? '了解国际债务催收的最新趋势、法律法规和最佳实践'
      : 'Learn about the latest trends, regulations, and best practices in international debt collection',
  }
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ locale: Locale }>
}) {
  const { locale } = await params
  const dict = await getDictionary(locale)
  const posts = getBlogPosts(locale)

  return (
    <BlogListPage 
      posts={posts}
      categories={blogCategories}
      tags={blogTags}
      dict={dict}
      locale={locale}
    />
  )
}