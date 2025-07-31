export interface BlogCategory {
  id: string
  name: {
    en: string
    zh: string
  }
  slug: string
  description?: {
    en: string
    zh: string
  }
}

export interface BlogTag {
  id: string
  name: {
    en: string
    zh: string
  }
  slug: string
}

export interface BlogPost {
  id: string
  title: {
    en: string
    zh: string
  }
  slug: string
  excerpt: {
    en: string
    zh: string
  }
  content: {
    en: string
    zh: string
  }
  author: {
    name: string
    avatar?: string
    role?: {
      en: string
      zh: string
    }
  }
  publishedAt: string
  updatedAt?: string
  category: BlogCategory
  tags: BlogTag[]
  coverImage?: {
    url: string
    alt: {
      en: string
      zh: string
    }
  }
  readingTime?: {
    en: number
    zh: number
  }
  featured?: boolean
  status: 'draft' | 'published'
}