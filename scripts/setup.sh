#!/usr/bin/env bash

# Script to set up the project dependencies

echo "Setting up Bingheng Credit Education project..."

# Check if we're in the project root
if [ ! -f "README.md" ] || [ ! -d "website" ]; then
  echo "Error: Please run this script from the project root directory"
  exit 1
fi

# Check if node_modules already exists in website directory
if [ -d "website/node_modules" ]; then
  echo "Dependencies already installed in website/node_modules"
  exit 0
fi

# Check for offline package
if [ -f "binghengcredit-web-node_modules.tar.gz" ]; then
  echo "Found offline dependencies package. Extracting..."
  cd website
  tar xzf ../binghengcredit-web-node_modules.tar.gz
  echo "Dependencies extracted successfully!"
  exit 0
fi

# Try to install dependencies online
echo "No offline package found. Attempting online installation..."
cd website

# Check if npm is available
if ! command -v npm &> /dev/null; then
  echo "Error: npm is not installed. Please install Node.js and npm first."
  exit 1
fi

# Try to install dependencies
echo "Running npm install..."
npm install

if [ $? -eq 0 ]; then
  echo "Dependencies installed successfully!"
else
  echo "Failed to install dependencies online."
  echo "Please provide the offline package: binghengcredit-web-node_modules.tar.gz"
  echo ""
  echo "To create the offline package on a machine with internet access:"
  echo "  cd website"
  echo "  npm ci"
  echo "  tar czf ../binghengcredit-web-node_modules.tar.gz node_modules"
  exit 1
fi