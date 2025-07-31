import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { i18n } from '@/i18n/config'

function getLocale(request: NextRequest): string {
  const pathname = request.nextUrl.pathname
  const pathnameLocale = pathname.split('/')[1]

  if (i18n.locales.includes(pathnameLocale as any)) {
    return pathnameLocale
  }

  const acceptLanguage = request.headers.get('accept-language') || ''
  const languages = acceptLanguage.split(',').map(lang => lang.split(';')[0].trim().toLowerCase())
  
  for (const lang of languages) {
    if (lang.startsWith('zh')) return 'zh'
    if (lang.startsWith('en')) return 'en'
  }

  return i18n.defaultLocale
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  
  const publicPaths = [
    /^\/favicon\.ico$/,
    /^\/robots\.txt$/,
    /^\/sitemap.*\.xml$/,
    /^\/_next\//,
    /^\/api\//,
    /^\/fonts\//,
    /^\/images\//,
    /^\/.*\.(png|jpg|jpeg|gif|svg|webp|ico)$/,
    /^\/llms.*\.txt$/,
  ]
  
  if (publicPaths.some(path => path.test(pathname))) {
    return NextResponse.next()
  }

  const pathnameLocale = pathname.split('/')[1]
  const hasLocale = i18n.locales.includes(pathnameLocale as any)

  if (!hasLocale) {
    const locale = getLocale(request)
    const newUrl = new URL(`/${locale}${pathname}`, request.url)
    return NextResponse.redirect(newUrl)
  }

  const response = NextResponse.next()
  response.headers.set('x-pathname', pathname)
  return response
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
}