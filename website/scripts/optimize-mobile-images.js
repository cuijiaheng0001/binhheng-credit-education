const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

// Mobile-specific optimization
const mobileImageConfig = {
  hero: {
    sizes: [
      { width: 360, quality: 85 },  // Mobile S
      { width: 414, quality: 85 },  // Mobile M
      { width: 480, quality: 85 },  // Mobile L
    ],
    formats: ['webp', 'jpg']
  },
  content: {
    sizes: [
      { width: 320, quality: 80 },
      { width: 360, quality: 80 },
      { width: 414, quality: 80 },
    ],
    formats: ['webp', 'jpg']
  }
};

async function optimizeMobileImage(inputPath, outputDir, config) {
  const filename = path.basename(inputPath, path.extname(inputPath));
  
  for (const format of config.formats) {
    for (const size of config.sizes) {
      const outputFilename = `${filename}-${size.width}w-mobile.${format}`;
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
            mozjpeg: format === 'jpg',
            effort: 6
          })
          .toFile(outputPath);
          
        console.log(`✓ Created ${outputFilename}`);
      } catch (error) {
        console.error(`✗ Error processing ${inputPath}:`, error.message);
      }
    }
  }
}

async function processMobileImages() {
  const directories = {
    hero: path.join(__dirname, '../public/images/hero'),
    content: path.join(__dirname, '../public/images/content')
  };

  for (const [type, dir] of Object.entries(directories)) {
    try {
      const files = await fs.readdir(dir);
      const imageFiles = files.filter(f => 
        /\.(jpg|jpeg|png)$/i.test(f) && 
        !f.includes('-mobile') &&
        !f.includes('-blur') &&
        !f.includes('w.')
      );

      console.log(`\nOptimizing ${type} images for mobile...`);
      
      for (const file of imageFiles) {
        const inputPath = path.join(dir, file);
        await optimizeMobileImage(inputPath, dir, mobileImageConfig[type]);
      }
    } catch (error) {
      console.error(`Error processing ${type} directory:`, error.message);
    }
  }
}

processMobileImages();