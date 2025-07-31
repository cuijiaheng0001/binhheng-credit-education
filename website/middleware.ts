import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { i18n } from '@/i18n/config'

function getLocale(request: NextRequest): string {
  // 检查cookie中的语言偏好
  const cookieLocale = request.cookies.get('locale')?.value
  if (cookieLocale && i18n.locales.includes(cookieLocale as any)) {
    return cookieLocale
  }

  // 检查Accept-Language header
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
  
  // 忽略的路径
  const ignoredPaths = [
    /^\/favicon\.ico$/,
    /^\/robots\.txt$/,
    /^\/sitemap.*\.xml$/,
    /^\/_next\//,
    /^\/api\//,
    /^\/fonts\//,
    /^\/images\//,
    /^\/.*\.(png|jpg|jpeg|gif|svg|webp|ico|css|js)$/,
    /^\/llms.*\.txt$/,
  ]
  
  if (ignoredPaths.some(path => path.test(pathname))) {
    return NextResponse.next()
  }

  // 检查路径是否已包含locale
  const pathnameLocale = pathname.split('/')[1]
  const hasLocale = i18n.locales.includes(pathnameLocale as any)

  // 如果没有locale前缀，添加默认locale
  if (!hasLocale) {
    const locale = getLocale(request)
    const newUrl = new URL(`/${locale}${pathname}`, request.url)
    
    // 设置cookie记住用户的语言选择
    const response = NextResponse.redirect(newUrl)
    response.cookies.set('locale', locale, { 
      maxAge: 60 * 60 * 24 * 365, // 1年
      sameSite: 'lax'
    })
    return response
  }

  // 更新cookie中的语言偏好
  const response = NextResponse.next()
  if (hasLocale) {
    response.cookies.set('locale', pathnameLocale, { 
      maxAge: 60 * 60 * 24 * 365, // 1年
      sameSite: 'lax'
    })
  }
  
  return response
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files
     */
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\..*$).*)',
  ],
}