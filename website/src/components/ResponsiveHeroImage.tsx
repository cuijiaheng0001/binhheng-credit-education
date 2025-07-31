'use client'

import { useEffect, useState } from 'react'

interface ResponsiveHeroImageProps {
  baseName: string
  alt: string
  priority?: boolean
  className?: string
  width?: number
  height?: number
  sizes?: string
}

export default function ResponsiveHeroImage({ 
  baseName, 
  alt, 
  priority = false,
  className = '',
  width,
  height,
  sizes
}: ResponsiveHeroImageProps) {
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
    /images/hero/${baseName}-360w-mobile.webp 360w,
    /images/hero/${baseName}-414w-mobile.webp 414w,
    /images/hero/${baseName}-480w-mobile.webp 480w
  `.trim()

  // Generate srcset for desktop
  const desktopSrcSet = `
    /images/hero/${baseName}-640w.webp 640w,
    /images/hero/${baseName}-1080w.webp 1080w,
    /images/hero/${baseName}-1920w.webp 1920w
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
        src={`/images/hero/${baseName}${isMobile ? '-414w-mobile' : '-1080w'}.jpg`}
        srcSet={isMobile ? 
          `/images/hero/${baseName}-360w-mobile.jpg 360w, /images/hero/${baseName}-414w-mobile.jpg 414w, /images/hero/${baseName}-480w-mobile.jpg 480w` :
          `/images/hero/${baseName}-640w.jpg 640w, /images/hero/${baseName}-1080w.jpg 1080w, /images/hero/${baseName}-1920w.jpg 1920w`
        }
        sizes={sizes || (isMobile ? "(max-width: 767px) 100vw" : "100vw")}
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