import { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, Clock, Tag, ArrowRight } from 'lucide-react'
import { getAllPosts } from '@/lib/mdx'

export const metadata: Metadata = {
  title: 'Insights - Binhheng Credit',
  description: 'Expert insights on cross-border debt recovery, compliance, and best practices for US businesses dealing with Chinese debtors.',
}

export default function InsightsPage() {
  const posts = getAllPosts()

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-primary-950 to-primary-900 text-white">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-light mb-6">
              Insights & <span className="font-normal">Resources</span>
            </h1>
            <p className="text-xl text-primary-100">
              Expert guidance on cross-border debt recovery, compliance updates, and success stories
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {posts.length > 0 && (
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
              <div className="grid lg:grid-cols-2">
                <div className="bg-gradient-to-br from-primary-600 to-primary-800 p-12 text-white">
                  <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-4">
                    Featured Article
                  </span>
                  <h2 className="text-3xl font-light mb-4">
                    <Link href={`/insights/${posts[0].slug}`} className="hover:underline">
                      {posts[0].title}
                    </Link>
                  </h2>
                  <p className="text-primary-100 mb-6">{posts[0].excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-primary-200">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {posts[0].date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {posts[0].readingTime}
                    </span>
                  </div>
                </div>
                <div className="p-12 flex items-center">
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <Tag className="w-5 h-5 text-primary-600" />
                      <span className="text-primary-600 font-medium">{posts[0].category}</span>
                    </div>
                    <p className="text-gray-600 mb-8 line-clamp-4">{posts[0].excerpt}</p>
                    <Link 
                      href={`/insights/${posts[0].slug}`}
                      className="inline-flex items-center gap-2 text-primary-600 font-medium hover:text-primary-700 transition-colors"
                    >
                      Read Full Article
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Articles Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.slice(1).map((post) => (
              <article key={post.slug} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                    <span className="text-gray-500 text-sm">{post.readingTime}</span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    <Link href={`/insights/${post.slug}`} className="hover:text-primary-600 transition-colors">
                      {post.title}
                    </Link>
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{post.date}</span>
                    <Link 
                      href={`/insights/${post.slug}`}
                      className="text-primary-600 font-medium hover:text-primary-700 transition-colors"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {posts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">No articles published yet. Check back soon!</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-24 bg-gradient-to-br from-primary-50 to-accent-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-light text-gray-900 mb-6">
            Stay <span className="font-normal gradient-text">Informed</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Get the latest insights on cross-border debt recovery delivered to your inbox
          </p>
          <form className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              required
            />
            <button
              type="submit"
              className="px-6 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </main>
  )
}