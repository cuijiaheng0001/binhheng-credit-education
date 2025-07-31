'use client'

import Image from 'next/image'
import { useState } from 'react'

interface OptimizedImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  fill?: boolean
  sizes?: string
  className?: string
  priority?: boolean
  quality?: number
  placeholder?: 'blur' | 'empty'
  blurDataURL?: string
}

export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  fill,
  sizes,
  className,
  priority = false,
  quality = 75,
  placeholder = 'empty',
  blurDataURL,
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true)

  // 根据容器大小计算合适的sizes属性
  const defaultSizes = fill ? '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw' : undefined

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      fill={fill}
      sizes={sizes || defaultSizes}
      className={`
        ${className || ''}
        ${isLoading ? 'blur-sm grayscale' : 'blur-0 grayscale-0'}
        transition-all duration-700
      `}
      priority={priority}
      quality={quality}
      placeholder={placeholder}
      blurDataURL={blurDataURL}
      onLoadingComplete={() => setIsLoading(false)}
    />
  )
}