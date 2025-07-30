'use client'

import { AnchorHTMLAttributes, forwardRef, ReactNode } from 'react'
import { cn } from '@/lib/utils'
import Link from 'next/link'

interface AccessibleLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
  variant?: 'primary' | 'secondary' | 'nav'
  external?: boolean
  icon?: ReactNode
  iconPosition?: 'left' | 'right'
  ariaLabel?: string
  ariaDescribedBy?: string
  srOnlyText?: string
  active?: boolean // For navigation links
}

const AccessibleLink = forwardRef<HTMLAnchorElement, AccessibleLinkProps>(
  (
    {
      children,
      className,
      href,
      variant = 'primary',
      external = false,
      icon,
      iconPosition = 'right',
      ariaLabel,
      ariaDescribedBy,
      srOnlyText,
      active = false,
      ...props
    },
    ref
  ) => {
    // Base classes
    const baseClasses = variant === 'nav' ? 'nav-link' : 'link'
    
    // Variant classes
    const variantClasses = {
      primary: '',
      secondary: 'link-secondary',
      nav: active ? 'active' : ''
    }
    
    // Combined classes
    const linkClasses = cn(
      baseClasses,
      variantClasses[variant],
      'inline-flex items-center gap-2',
      'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-blue focus:rounded',
      'transition-all duration-200',
      className
    )
    
    // Accessibility attributes
    const accessibilityProps = {
      'aria-label': ariaLabel,
      'aria-describedby': ariaDescribedBy,
      'aria-current': active ? 'page' as const : undefined
    }
    
    // External link attributes
    const externalProps = external 
      ? { 
          target: '_blank', 
          rel: 'noopener noreferrer',
          'aria-label': ariaLabel || `${children} (在新窗口中打开)`
        } 
      : {}
    
    // Content with icon
    const content = (
      <>
        {icon && iconPosition === 'left' && (
          <span aria-hidden="true">{icon}</span>
        )}
        <span>{children}</span>
        {icon && iconPosition === 'right' && (
          <span aria-hidden="true">{icon}</span>
        )}
        {srOnlyText && <span className="sr-only">{srOnlyText}</span>}
        {external && (
          <>
            <svg 
              className="w-4 h-4" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
              />
            </svg>
            <span className="sr-only">(在新窗口中打开)</span>
          </>
        )}
      </>
    )
    
    // Use Next.js Link for internal links
    if (!external && href.startsWith('/')) {
      return (
        <Link
          ref={ref}
          href={href}
          className={linkClasses}
          {...accessibilityProps}
          {...props}
        >
          {content}
        </Link>
      )
    }
    
    // Use regular anchor for external links
    return (
      <a
        ref={ref}
        href={href}
        className={linkClasses}
        {...externalProps}
        {...accessibilityProps}
        {...props}
      >
        {content}
      </a>
    )
  }
)

AccessibleLink.displayName = 'AccessibleLink'

export default AccessibleLink