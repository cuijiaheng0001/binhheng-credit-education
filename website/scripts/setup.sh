#!/bin/bash

# Setup script for Bingheng Credit website development environment
# This script ensures all dependencies are properly installed and configured

set -e  # Exit on error

echo "🚀 Setting up Bingheng Credit development environment..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ first."
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "❌ Node.js version 18 or higher is required. Current version: $(node -v)"
    exit 1
fi

echo "✅ Node.js $(node -v) detected"

# Check if package manager is available
if command -v pnpm &> /dev/null; then
    PM="pnpm"
    echo "✅ Using pnpm"
elif command -v npm &> /dev/null; then
    PM="npm"
    echo "✅ Using npm"
else
    echo "❌ No package manager found. Please install npm or pnpm."
    exit 1
fi

# Clean install dependencies
echo "📦 Installing dependencies..."
rm -rf node_modules package-lock.json pnpm-lock.yaml
$PM install

# Verify critical dependencies are installed
echo "🔍 Verifying dependencies..."

# Check if Next.js binary is available
if [ ! -f "node_modules/.bin/next" ]; then
    echo "❌ Next.js binary not found. Attempting to reinstall..."
    $PM install next@latest
fi

# Check if other critical binaries exist
REQUIRED_BINS=("next" "eslint" "prettier")
MISSING_BINS=()

for bin in "${REQUIRED_BINS[@]}"; do
    if [ ! -f "node_modules/.bin/$bin" ]; then
        MISSING_BINS+=($bin)
    fi
done

if [ ${#MISSING_BINS[@]} -gt 0 ]; then
    echo "❌ Missing required binaries: ${MISSING_BINS[*]}"
    echo "📦 Attempting to fix..."
    $PM install --force
fi

# Create necessary directories if they don't exist
echo "📁 Creating necessary directories..."
mkdir -p public/fonts
mkdir -p public/images/{hero,team,content,knowledge,partners,insights,icons,process}
mkdir -p .next/cache

# Download fonts if not present
if [ ! -f "public/fonts/Helvetica-Neue-Light.woff2" ]; then
    echo "🔤 Downloading fonts..."
    node scripts/download-fonts.js || echo "⚠️  Font download failed, continuing..."
fi

# Set up environment variables if not present
if [ ! -f ".env.local" ]; then
    echo "📝 Creating .env.local file..."
    cat > .env.local << EOF
# Next.js Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_API_URL=http://localhost:3000/api

# Formspree (for contact forms)
NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/xvgqqryv

# Analytics (optional)
# NEXT_PUBLIC_GA_ID=
# NEXT_PUBLIC_GTM_ID=
EOF
    echo "✅ Created .env.local - Please update with your actual values"
fi

# Run build to verify everything works
echo "🏗️  Running build test..."
if $PM run build; then
    echo "✅ Build successful!"
else
    echo "❌ Build failed. Please check the errors above."
    exit 1
fi

# Run linting
echo "🔍 Running linter..."
if $PM run lint; then
    echo "✅ Linting passed!"
else
    echo "⚠️  Linting warnings detected. Run 'npm run lint:fix' to auto-fix."
fi

echo ""
echo "✨ Setup complete! You can now run:"
echo "   $PM run dev     - Start development server"
echo "   $PM run build   - Build for production"
echo "   $PM run lint    - Run linter"
echo ""
echo "📚 For more information, check the README.md"