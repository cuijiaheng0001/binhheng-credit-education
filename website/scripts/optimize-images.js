const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

async function optimizeImages() {
  const imageDirectories = [
    'public/images/hero',
    'public/images/content',
    'public/images/knowledge',
    'public/images/services'
  ];

  console.log('Starting image optimization...\n');

  for (const dir of imageDirectories) {
    try {
      const files = await fs.readdir(dir);
      const imageFiles = files.filter(file => /\.(jpg|jpeg|png)$/i.test(file));

      for (const file of imageFiles) {
        const inputPath = path.join(dir, file);
        const outputPath = inputPath;
        const webpPath = inputPath.replace(/\.(jpg|jpeg|png)$/i, '.webp');
        const blurPath = inputPath.replace(/\.(jpg|jpeg|png)$/i, '-blur.jpg');

        // Get file stats
        const stats = await fs.stat(inputPath);
        const originalSize = (stats.size / 1024 / 1024).toFixed(2);

        // Optimize original image
        await sharp(inputPath)
          .resize(2000, null, { 
            withoutEnlargement: true,
            fit: 'inside'
          })
          .jpeg({ quality: 85, progressive: true })
          .toFile(inputPath + '.tmp');

        await fs.rename(inputPath + '.tmp', inputPath);

        // Create WebP version
        await sharp(inputPath)
          .webp({ quality: 85 })
          .toFile(webpPath);

        // Create blur placeholder (10px width, maintains aspect ratio)
        await sharp(inputPath)
          .resize(10)
          .blur()
          .jpeg({ quality: 50 })
          .toFile(blurPath);

        // Get new file size
        const newStats = await fs.stat(inputPath);
        const newSize = (newStats.size / 1024 / 1024).toFixed(2);

        console.log(`✓ ${file}: ${originalSize}MB → ${newSize}MB`);
        console.log(`  - Created WebP version`);
        console.log(`  - Created blur placeholder\n`);
      }
    } catch (error) {
      console.error(`Error processing directory ${dir}:`, error);
    }
  }

  console.log('✓ Image optimization complete!');
}

// Check if sharp is installed
try {
  require.resolve('sharp');
  optimizeImages();
} catch (e) {
  console.log('Installing sharp...');
  const { execSync } = require('child_process');
  execSync('npm install sharp', { stdio: 'inherit' });
  console.log('Sharp installed. Please run the script again.');
}