import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { format } from 'date-fns'

export interface Post {
  slug: string
  title: string
  date: string
  excerpt: string
  author: string
  category: string
  readingTime: string
  tags: string[]
  content: string
}

const postsDirectory = path.join(process.cwd(), 'src/content/insights')

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory)
}

export function getPostBySlug(slug: string): Post {
  const realSlug = slug.replace(/\.mdx$/, '')
  const fullPath = path.join(postsDirectory, `${realSlug}.mdx`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  // Calculate reading time (rough estimate)
  const wordsPerMinute = 200
  const wordCount = content.split(/\s+/g).length
  const readingTime = Math.ceil(wordCount / wordsPerMinute)

  return {
    slug: realSlug,
    title: data.title,
    date: format(new Date(data.date), 'MMMM d, yyyy'),
    excerpt: data.excerpt,
    author: data.author || 'Binhheng Credit Team',
    category: data.category,
    readingTime: `${readingTime} min read`,
    tags: data.tags || [],
    content,
  }
}

export function getAllPosts(): Post[] {
  const slugs = getPostSlugs()
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    .sort((post1, post2) => (new Date(post2.date) > new Date(post1.date) ? 1 : -1))
  return posts
}