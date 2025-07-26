import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Calendar, Clock, User, ArrowLeft, Tag } from 'lucide-react'
import { getPostBySlug, getAllPosts } from '@/lib/mdx'
import { MDXRemote } from 'next-mdx-remote/rsc'

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  
  if (!post) {
    return {
      title: 'Article Not Found',
    }
  }

  return {
    title: `${post.title} - Binhheng Credit`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
    },
  }
}

const components = {
  h1: ({ children }: any) => <h1 className="text-3xl font-bold mb-6 text-gray-900">{children}</h1>,
  h2: ({ children }: any) => <h2 className="text-2xl font-semibold mb-4 mt-8 text-gray-900">{children}</h2>,
  h3: ({ children }: any) => <h3 className="text-xl font-semibold mb-3 mt-6 text-gray-900">{children}</h3>,
  p: ({ children }: any) => <p className="mb-4 text-gray-700 leading-relaxed">{children}</p>,
  ul: ({ children }: any) => <ul className="mb-4 ml-6 list-disc text-gray-700">{children}</ul>,
  ol: ({ children }: any) => <ol className="mb-4 ml-6 list-decimal text-gray-700">{children}</ol>,
  li: ({ children }: any) => <li className="mb-2">{children}</li>,
  blockquote: ({ children }: any) => (
    <blockquote className="border-l-4 border-primary-500 pl-4 py-2 mb-4 italic text-gray-600">
      {children}
    </blockquote>
  ),
  a: ({ href, children }: any) => (
    <a href={href} className="text-primary-600 hover:text-primary-700 underline" target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  ),
  strong: ({ children }: any) => <strong className="font-semibold text-gray-900">{children}</strong>,
  code: ({ children }: any) => <code className="bg-gray-100 px-1 py-0.5 rounded text-sm">{children}</code>,
  pre: ({ children }: any) => <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto mb-4">{children}</pre>,
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-br from-primary-950 to-primary-900 text-white">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            href="/insights"
            className="inline-flex items-center gap-2 text-primary-200 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Insights
          </Link>
          
          <div className="mb-6">
            <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">
              {post.category}
            </span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl font-light mb-6">{post.title}</h1>
          
          <div className="flex flex-wrap items-center gap-6 text-primary-200">
            <span className="flex items-center gap-2">
              <User className="w-5 h-5" />
              {post.author}
            </span>
            <span className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              {post.date}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              {post.readingTime}
            </span>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <MDXRemote source={post.content} components={components} />
          </div>

          {/* Tags */}
          {post.tags.length > 0 && (
            <div className="mt-12 pt-8 border-t">
              <div className="flex items-center gap-3 flex-wrap">
                <Tag className="w-5 h-5 text-gray-500" />
                {post.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-primary-50 to-accent-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-light text-gray-900 mb-6">
            Ready to Recover Your <span className="font-normal gradient-text">Hidden Debts?</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's discuss how we can help you recover millions in written-off receivables
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </main>
  )
}