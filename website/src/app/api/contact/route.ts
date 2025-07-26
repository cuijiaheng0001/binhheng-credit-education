import { NextRequest, NextResponse } from 'next/server'

interface ContactFormData {
  name: string
  email: string
  company: string
  phone?: string
  debtAmount?: string
  message?: string
}

// In production, you would integrate with your email service
// For now, this logs the submission and returns success
export async function POST(request: NextRequest) {
  try {
    const data: ContactFormData = await request.json()

    // Validate required fields
    if (!data.name || !data.email || !data.company) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Log the submission (in production, send email)
    console.log('Contact form submission:', {
      ...data,
      timestamp: new Date().toISOString(),
    })

    // TODO: Integrate with email service
    // Example services to consider:
    // - SendGrid
    // - AWS SES
    // - Resend
    // - Postmark

    // Return success response
    return NextResponse.json(
      { 
        success: true,
        message: 'Form submitted successfully' 
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}