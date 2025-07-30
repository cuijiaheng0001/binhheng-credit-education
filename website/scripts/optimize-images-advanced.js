const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

const imageOptimizationConfig = {
  // Hero images - need higher quality
  hero: {
    sizes: [
      { width: 640, quality: 90 },
      { width: 1080, quality: 85 },
      { width: 1920, quality: 80 }
    ],
    formats: ['webp', 'jpg']
  },
  // Content images - balanced quality
  content: {
    sizes: [
      { width: 400, quality: 85 },
      { width: 800, quality: 80 },
      { width: 1200, quality: 75 }
    ],
    formats: ['webp', 'jpg']
  },
  // Service/feature images - can be more compressed
  services: {
    sizes: [
      { width: 400, quality: 80 },
      { width: 600, quality: 75 }
    ],
    formats: ['webp', 'jpg']
  }
};

async function optimizeImage(inputPath, outputDir, config) {
  const filename = path.basename(inputPath, path.extname(inputPath));
  
  for (const format of config.formats) {
    for (const size of config.sizes) {
      const outputFilename = `${filename}-${size.width}w.${format}`;
      const outputPath = path.join(outputDir, outputFilename);
      
      try {
        await sharp(inputPath)
          .resize(size.width, null, {
            withoutEnlargement: true,
            fit: 'inside'
          })
          .toFormat(format, {
            quality: size.quality,
            progressive: true,
            mozjpeg: format === 'jpg'
          })
          .toFile(outputPath);
          
        console.log(`✓ Created ${outputFilename}`);
      } catch (error) {
        console.error(`✗ Error processing ${inputPath}:`, error.message);
      }
    }
  }
}

async function processImages() {
  const imageDirectories = {
    hero: path.join(__dirname, '../public/images/hero'),
    content: path.join(__dirname, '../public/images/content'),
    services: path.join(__dirname, '../public/images/services')
  };

  for (const [type, dir] of Object.entries(imageDirectories)) {
    try {
      const files = await fs.readdir(dir);
      const imageFiles = files.filter(f => 
        /\.(jpg|jpeg|png)$/i.test(f) && 
        !f.includes('-blur') &&
        !f.includes('w.jpg') &&
        !f.includes('w.webp')
      );

      console.log(`\nOptimizing ${type} images...`);
      
      for (const file of imageFiles) {
        const inputPath = path.join(dir, file);
        await optimizeImage(inputPath, dir, imageOptimizationConfig[type]);
      }
    } catch (error) {
      console.error(`Error processing ${type} directory:`, error.message);
    }
  }
}

// Check if sharp is installed
try {
  require('sharp');
  processImages();
} catch (error) {
  console.log('Installing sharp...');
  require('child_process').execSync('npm install sharp', { stdio: 'inherit' });
  console.log('Please run this script again.');
}