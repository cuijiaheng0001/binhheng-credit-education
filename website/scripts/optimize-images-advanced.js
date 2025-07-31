const sharp = require('sharp')
const fs = require('fs').promises
const path = require('path')

// 优化配置
const config = {
  jpeg: {
    quality: 85,
    progressive: true,
    mozjpeg: true
  },
  webp: {
    quality: 80,
    effort: 6
  },
  // 针对不同用途的尺寸配置
  sizes: {
    // insights文章图片 - 三列布局
    insights: [
      { width: 400, suffix: '400w' },   // 移动端和三列布局
      { width: 600, suffix: '600w' },   // 平板和两列布局
      { width: 800, suffix: '800w' }    // 大屏幕
    ],
    // 内容图片 - 两列布局
    content: [
      { width: 600, suffix: '600w' },   // 移动端全宽
      { width: 800, suffix: '800w' },   // 平板
      { width: 1200, suffix: '1200w' }  // 桌面端
    ],
    // Hero图片 - 全宽
    hero: [
      { width: 1200, suffix: '1200w' }, // 小屏幕
      { width: 1920, suffix: '1920w' }, // 标准屏幕
      { width: 2560, suffix: '2560w' }  // 大屏幕
    ]
  }
}

async function optimizeImage(inputPath, outputDir, sizeConfig) {
  const filename = path.basename(inputPath, path.extname(inputPath))
  const ext = path.extname(inputPath).toLowerCase()
  
  console.log(`优化图片: ${filename}`)
  
  // 创建不同尺寸的优化版本
  for (const size of sizeConfig) {
    try {
      // JPEG 版本
      if (ext === '.jpg' || ext === '.jpeg') {
        await sharp(inputPath)
          .resize(size.width, null, {
            withoutEnlargement: true,
            fit: 'inside'
          })
          .jpeg(config.jpeg)
          .toFile(path.join(outputDir, `${filename}-${size.suffix}.jpg`))
      }
      
      // WebP 版本
      await sharp(inputPath)
        .resize(size.width, null, {
          withoutEnlargement: true,
          fit: 'inside'
        })
        .webp(config.webp)
        .toFile(path.join(outputDir, `${filename}-${size.suffix}.webp`))
        
      console.log(`  ✓ 生成 ${size.suffix} 版本`)
    } catch (error) {
      console.error(`  ✗ 生成 ${size.suffix} 版本失败:`, error.message)
    }
  }
  
  // 生成模糊占位图
  try {
    await sharp(inputPath)
      .resize(20)
      .blur(10)
      .jpeg({ quality: 40 })
      .toFile(path.join(outputDir, `${filename}-blur.jpg`))
    console.log(`  ✓ 生成模糊占位图`)
  } catch (error) {
    console.error(`  ✗ 生成模糊占位图失败:`, error.message)
  }
}

async function processDirectory(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true })
  
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name)
    
    if (entry.isDirectory()) {
      // 根据目录名选择优化配置
      let sizeConfig = config.sizes.content // 默认
      
      if (entry.name === 'hero') {
        sizeConfig = config.sizes.hero
      } else if (entry.name === 'insights') {
        sizeConfig = config.sizes.insights
      }
      
      // 处理子目录中的图片
      const subEntries = await fs.readdir(fullPath)
      for (const file of subEntries) {
        if (/\.(jpg|jpeg|png)$/i.test(file) && !file.includes('-')) {
          await optimizeImage(path.join(fullPath, file), fullPath, sizeConfig)
        }
      }
    }
  }
}

// 主函数
async function main() {
  const imagesDir = path.join(__dirname, '../public/images')
  
  try {
    console.log('开始优化图片...\n')
    await processDirectory(imagesDir)
    console.log('\n图片优化完成！')
    
    // 提示使用新的图片组件
    console.log('\n使用提示:')
    console.log('1. 在组件中使用 OptimizedImage 组件')
    console.log('2. 为 Image 组件添加 sizes 属性')
    console.log('3. 使用 quality={75} 减少文件大小')
    console.log('4. 只对首屏图片使用 priority={true}')
  } catch (error) {
    console.error('优化失败:', error)
    process.exit(1)
  }
}

main()