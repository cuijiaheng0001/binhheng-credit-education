'use client'

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
  return (
    <img
      src={src}
      srcSet={srcSet}
      alt={alt}
      loading={priority ? 'eager' : 'lazy'}
      fetchPriority={priority ? 'high' : 'auto'}
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
      width="1920"
      height="1080"
    />
  )
}