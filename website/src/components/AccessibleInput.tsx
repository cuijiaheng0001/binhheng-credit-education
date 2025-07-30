'use client'

import { InputHTMLAttributes, forwardRef, ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface AccessibleInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  error?: string
  hint?: string
  icon?: ReactNode
  showLabel?: boolean
  required?: boolean
}

const AccessibleInput = forwardRef<HTMLInputElement, AccessibleInputProps>(
  (
    {
      className,
      label,
      error,
      hint,
      icon,
      showLabel = true,
      required = false,
      id,
      type = 'text',
      disabled = false,
      ...props
    },
    ref
  ) => {
    // Generate ID if not provided
    const inputId = id || `input-${label.toLowerCase().replace(/\s+/g, '-')}`
    const errorId = error ? `${inputId}-error` : undefined
    const hintId = hint ? `${inputId}-hint` : undefined
    
    // Combine aria-describedby
    const ariaDescribedBy = [errorId, hintId].filter(Boolean).join(' ') || undefined
    
    // Input classes
    const inputClasses = cn(
      'input',
      'w-full',
      'peer',
      error && 'border-red-500 focus:border-red-500 focus:ring-red-500',
      icon && 'pl-10',
      disabled && 'opacity-50 cursor-not-allowed bg-gray-50',
      className
    )
    
    return (
      <div className="space-y-1">
        {/* Label */}
        <label 
          htmlFor={inputId}
          className={cn(
            'block text-sm font-medium text-gray-700',
            !showLabel && 'sr-only'
          )}
        >
          {label}
          {required && (
            <span className="text-red-500 ml-1" aria-label="必填">
              *
            </span>
          )}
        </label>
        
        {/* Input wrapper */}
        <div className="relative">
          {/* Icon */}
          {icon && (
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span className="text-gray-400" aria-hidden="true">
                {icon}
              </span>
            </div>
          )}
          
          {/* Input */}
          <input
            ref={ref}
            id={inputId}
            type={type}
            className={inputClasses}
            disabled={disabled}
            required={required}
            aria-invalid={error ? 'true' : undefined}
            aria-describedby={ariaDescribedBy}
            aria-required={required}
            {...props}
          />
        </div>
        
        {/* Hint text */}
        {hint && !error && (
          <p id={hintId} className="text-sm text-gray-500">
            {hint}
          </p>
        )}
        
        {/* Error message */}
        {error && (
          <p 
            id={errorId} 
            className="text-sm text-red-600 flex items-center gap-1"
            role="alert"
          >
            <svg 
              className="w-4 h-4" 
              fill="currentColor" 
              viewBox="0 0 20 20"
              aria-hidden="true"
            >
              <path 
                fillRule="evenodd" 
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" 
                clipRule="evenodd" 
              />
            </svg>
            {error}
          </p>
        )}
      </div>
    )
  }
)

AccessibleInput.displayName = 'AccessibleInput'

// Textarea component
interface AccessibleTextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string
  error?: string
  hint?: string
  showLabel?: boolean
  required?: boolean
}

export const AccessibleTextarea = forwardRef<HTMLTextAreaElement, AccessibleTextareaProps>(
  (
    {
      className,
      label,
      error,
      hint,
      showLabel = true,
      required = false,
      id,
      disabled = false,
      ...props
    },
    ref
  ) => {
    const textareaId = id || `textarea-${label.toLowerCase().replace(/\s+/g, '-')}`
    const errorId = error ? `${textareaId}-error` : undefined
    const hintId = hint ? `${textareaId}-hint` : undefined
    const ariaDescribedBy = [errorId, hintId].filter(Boolean).join(' ') || undefined
    
    const textareaClasses = cn(
      'textarea',
      'w-full',
      error && 'border-red-500 focus:border-red-500 focus:ring-red-500',
      disabled && 'opacity-50 cursor-not-allowed bg-gray-50',
      className
    )
    
    return (
      <div className="space-y-1">
        <label 
          htmlFor={textareaId}
          className={cn(
            'block text-sm font-medium text-gray-700',
            !showLabel && 'sr-only'
          )}
        >
          {label}
          {required && (
            <span className="text-red-500 ml-1" aria-label="必填">
              *
            </span>
          )}
        </label>
        
        <textarea
          ref={ref}
          id={textareaId}
          className={textareaClasses}
          disabled={disabled}
          required={required}
          aria-invalid={error ? 'true' : undefined}
          aria-describedby={ariaDescribedBy}
          aria-required={required}
          {...props}
        />
        
        {hint && !error && (
          <p id={hintId} className="text-sm text-gray-500">
            {hint}
          </p>
        )}
        
        {error && (
          <p 
            id={errorId} 
            className="text-sm text-red-600"
            role="alert"
          >
            {error}
          </p>
        )}
      </div>
    )
  }
)

AccessibleTextarea.displayName = 'AccessibleTextarea'

export default AccessibleInput