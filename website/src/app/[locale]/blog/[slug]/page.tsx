import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getDictionary } from '@/i18n/get-dictionary'
import { type Locale } from '@/i18n/config'
import { getBlogPostBySlug, blogPosts } from '@/lib/blog-data'
import BlogDetailPage from './BlogDetailPage'

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale; slug: string }>
}): Promise<Metadata> {
  const { locale, slug } = await params
  const post = getBlogPostBySlug(slug)
  
  if (!post) {
    return {
      title: 'Not Found',
    }
  }
  
  return {
    title: post.title[locale],
    description: post.excerpt[locale],
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ locale: Locale; slug: string }>
}) {
  const { locale, slug } = await params
  const dict = await getDictionary(locale)
  const post = getBlogPostBySlug(slug)

  if (!post || post.status !== 'published') {
    notFound()
  }

  return (
    <BlogDetailPage 
      post={post}
      dict={dict}
      locale={locale}
    />
  )
}