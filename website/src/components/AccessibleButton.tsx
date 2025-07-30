'use client'

import { ButtonHTMLAttributes, forwardRef, ReactNode } from 'react'
import { cn } from '@/lib/utils'
import Link from 'next/link'

interface AccessibleButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger'
  size?: 'sm' | 'md' | 'lg'
  fullWidth?: boolean
  loading?: boolean
  icon?: ReactNode
  iconPosition?: 'left' | 'right'
  href?: string
  external?: boolean
  ariaLabel?: string
  ariaPressed?: boolean
  ariaExpanded?: boolean
  ariaControls?: string
  ariaDescribedBy?: string
  srOnlyText?: string // Screen reader only text
}

const AccessibleButton = forwardRef<HTMLButtonElement, AccessibleButtonProps>(
  (
    {
      children,
      className,
      variant = 'primary',
      size = 'md',
      fullWidth = false,
      loading = false,
      disabled = false,
      icon,
      iconPosition = 'right',
      href,
      external = false,
      ariaLabel,
      ariaPressed,
      ariaExpanded,
      ariaControls,
      ariaDescribedBy,
      srOnlyText,
      type = 'button',
      onClick,
      ...props
    },
    ref
  ) => {
    // Base classes
    const baseClasses = 'btn'
    
    // Variant classes
    const variantClasses = {
      primary: 'btn-primary',
      secondary: 'btn-secondary',
      ghost: 'btn-ghost',
      danger: 'btn-danger'
    }
    
    // Size classes
    const sizeClasses = {
      sm: 'btn-sm',
      md: '',
      lg: 'btn-lg'
    }
    
    // Combined classes
    const buttonClasses = cn(
      baseClasses,
      variantClasses[variant],
      sizeClasses[size],
      fullWidth && 'btn-full',
      loading && 'is-loading',
      'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-blue',
      'disabled:opacity-50 disabled:cursor-not-allowed',
      'transition-all duration-200',
      className
    )
    
    // Accessibility attributes
    const accessibilityProps = {
      'aria-label': ariaLabel,
      'aria-pressed': ariaPressed,
      'aria-expanded': ariaExpanded,
      'aria-controls': ariaControls,
      'aria-describedby': ariaDescribedBy,
      'aria-busy': loading,
      'aria-disabled': disabled || loading
    }
    
    // Content with icon
    const content = (
      <>
        {loading && (
          <svg 
            className="animate-spin -ml-1 mr-2 h-4 w-4" 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle 
              className="opacity-25" 
              cx="12" 
              cy="12" 
              r="10" 
              stroke="currentColor" 
              strokeWidth="4"
            />
            <path 
              className="opacity-75" 
              fill="currentColor" 
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        {icon && iconPosition === 'left' && !loading && (
          <span className="mr-2" aria-hidden="true">{icon}</span>
        )}
        <span>{children}</span>
        {icon && iconPosition === 'right' && !loading && (
          <span className="ml-2" aria-hidden="true">{icon}</span>
        )}
        {srOnlyText && <span className="sr-only">{srOnlyText}</span>}
      </>
    )
    
    // If href is provided, render as a link
    if (href && !disabled && !loading) {
      const linkProps = external 
        ? { target: '_blank', rel: 'noopener noreferrer' } 
        : {}
      
      return (
        <Link
          href={href}
          className={buttonClasses}
          {...linkProps}
          {...accessibilityProps}
        >
          {content}
          {external && <span className="sr-only">(在新窗口中打开)</span>}
        </Link>
      )
    }
    
    // Otherwise render as button
    return (
      <button
        ref={ref}
        type={type}
        className={buttonClasses}
        disabled={disabled || loading}
        onClick={onClick}
        {...accessibilityProps}
        {...props}
      >
        {content}
      </button>
    )
  }
)

AccessibleButton.displayName = 'AccessibleButton'

export default AccessibleButton