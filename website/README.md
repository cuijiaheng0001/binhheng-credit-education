# Bingheng Credit Education Website

A modern, education-focused website for Bingheng Credit that helps US businesses discover and recover hidden cross-border receivables.

## 🚀 Features

- **Education-First Design**: Guides visitors to understand the hidden debt problem
- **Smooth Animations**: Built with Framer Motion for professional interactions
- **Fully Responsive**: Optimized for all devices
- **High Performance**: Next.js 15.4.4 with Turbopack for fast development
- **SEO Optimized**: Complete metadata and structured data

## 🛠️ Tech Stack

- **Framework**: Next.js 15.4.4 (App Router)
- **Styling**: Tailwind CSS 3.4.1
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Charts**: Recharts (ready to implement)
- **Deployment**: Vercel

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 🌐 Deployment

This project is optimized for deployment on Vercel:

1. Connect your GitHub repository to Vercel
2. Configure environment variables (if needed)
3. Deploy with one click

## 📁 Project Structure

```
website/
├── src/
│   ├── app/
│   │   ├── layout.tsx      # Root layout with metadata
│   │   ├── page.tsx        # Homepage
│   │   └── globals.css     # Global styles
│   ├── components/
│   │   ├── HeroSection.tsx       # Hero with gradient animation
│   │   ├── EducationSection.tsx  # Three-step education
│   │   ├── ProcessAnimation.tsx  # Workflow visualization
│   │   ├── MetricsSection.tsx    # Animated statistics
│   │   └── CTASection.tsx        # Call to action
│   └── lib/
│       └── utils.ts        # Utility functions
├── public/                 # Static assets
├── tailwind.config.ts      # Tailwind configuration
└── next.config.ts          # Next.js configuration
```

## 🎨 Design System

### Colors
- **Primary**: Deep navy blue (#0F172A)
- **Accent**: Golden yellow (#F59E0B)
- **Gray**: Custom gray scale
- **Background**: White with subtle gradients

### Typography
- **Font**: Inter (400-700 weights) + Playfair Display (700)
- **Headings**: Light weight for elegance
- **Body**: Regular weight for readability

### Animations
- Scroll-triggered animations
- Smooth transitions
- Interactive hover effects
- Number counting animations

## 🔧 Customization

### Adding New Sections
1. Create a new component in `src/components/`
2. Import and add to `src/app/page.tsx`
3. Follow existing animation patterns

### Updating Content
- Hero text: `src/components/HeroSection.tsx`
- Process steps: `src/components/ProcessAnimation.tsx`
- Metrics: `src/components/MetricsSection.tsx`

### Styling
- Global styles: `src/app/globals.css`
- Tailwind config: `tailwind.config.ts`
- Component-specific styles use Tailwind classes

## 📈 Performance

- Lighthouse score target: 95+
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3s
- Cumulative Layout Shift: < 0.1

## 🔒 Security

- All external links use `rel="noopener noreferrer"`
- Content Security Policy ready
- HTTPS enforced on production

## 📝 License

Copyright © 2024 Bingheng Credit. All rights reserved.
