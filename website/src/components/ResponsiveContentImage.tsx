'use client'

import { useEffect, useState } from 'react'

interface ResponsiveContentImageProps {
  baseName: string
  alt: string
  priority?: boolean
  className?: string
  width?: number
  height?: number
  sizes?: string
}

export default function ResponsiveContentImage({ 
  baseName, 
  alt, 
  priority = false,
  className = '',
  width,
  height,
  sizes
}: ResponsiveContentImageProps) {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Generate srcset for mobile
  const mobileSrcSet = `
    /images/content/${baseName}-320w-mobile.webp 320w,
    /images/content/${baseName}-360w-mobile.webp 360w,
    /images/content/${baseName}-414w-mobile.webp 414w
  `.trim()

  // Generate srcset for desktop
  const desktopSrcSet = `
    /images/content/${baseName}-400w.webp 400w,
    /images/content/${baseName}-800w.webp 800w,
    /images/content/${baseName}-1200w.webp 1200w,
    /images/content/${baseName}-1920w.webp 1920w
  `.trim()

  return (
    <picture>
      {/* WebP for mobile */}
      <source
        media="(max-width: 767px)"
        srcSet={mobileSrcSet}
        type="image/webp"
      />
      
      {/* WebP for desktop */}
      <source
        media="(min-width: 768px)"
        srcSet={desktopSrcSet}
        type="image/webp"
      />
      
      {/* Fallback JPEG */}
      <img
        src={`/images/content/${baseName}${isMobile ? '-414w-mobile' : '-800w'}.jpg`}
        srcSet={isMobile ? 
          `/images/content/${baseName}-320w-mobile.jpg 320w, /images/content/${baseName}-360w-mobile.jpg 360w, /images/content/${baseName}-414w-mobile.jpg 414w` :
          `/images/content/${baseName}-400w.jpg 400w, /images/content/${baseName}-800w.jpg 800w, /images/content/${baseName}-1200w.jpg 1200w`
        }
        sizes={sizes || (isMobile ? "(max-width: 767px) 100vw" : "50vw")}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : 'auto'}
        decoding="async"
        className={className}
        style={{
          position: 'absolute',
          height: height ? `${height}px` : '100%',
          width: width ? `${width}px` : '100%',
          inset: 0,
          objectFit: 'cover'
        }}
        width={width}
        height={height}
      />
    </picture>
  )
}