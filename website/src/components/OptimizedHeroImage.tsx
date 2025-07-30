'use client'

import { useEffect, useRef } from 'react'

interface OptimizedHeroImageProps {
  src: string
  srcSet?: string
  alt: string
  priority?: boolean
  className?: string
}

export default function OptimizedHeroImage({ 
  src, 
  srcSet, 
  alt, 
  priority = false,
  className = '' 
}: OptimizedHeroImageProps) {
  const imgRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    if (priority && imgRef.current) {
      // Set fetchpriority attribute for LCP optimization
      imgRef.current.setAttribute('fetchpriority', 'high')
    }
  }, [priority])

  return (
    <img
      ref={imgRef}
      src={src}
      srcSet={srcSet}
      alt={alt}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      className={className}
      style={{
        position: 'absolute',
        height: '100%',
        width: '100%',
        inset: 0,
        objectFit: 'cover'
      }}
      sizes="100vw"
    />
  )
}