# 🚀 生产环境部署指南

## 重要：当前生产环境问题

生产环境 (https://www.binghengcredit.com) 的测试显示：
- 手机版性能：62/100 ❌
- 桌面版性能：85/100 ⚠️
- Google Fonts 仍在加载（未使用本地版本）

## 部署前检查清单

### 1. 确认本地优化已完成
```bash
# 检查字体文件是否存在
ls -la public/fonts/

# 应该看到：
# inter-v13-latin-400.woff2
# inter-v13-latin-600.woff2
# inter-v13-latin-700.woff2
# playfair-display-v30-latin-700.woff2
# noto-serif-sc-v22-chinese-simplified-regular.woff2
```

### 2. 验证构建输出
```bash
# 清理并重新构建
rm -rf .next
npm run build

# 检查构建大小
du -sh .next/static
```

## 部署步骤

### 方案 A：Vercel 部署（推荐）

1. **安装 Vercel CLI**
```bash
npm i -g vercel
```

2. **登录 Vercel**
```bash
vercel login
```

3. **部署到生产环境**
```bash
# 在项目根目录运行
vercel --prod
```

4. **环境变量设置**
```bash
# 设置 GA ID
vercel env add NEXT_PUBLIC_GA_MEASUREMENT_ID
```

### 方案 B：手动部署

1. **构建项目**
```bash
npm run build
```

2. **上传文件**
需要上传以下文件夹到服务器：
- `.next/` - 构建输出
- `public/` - 静态资源（包括字体）
- `package.json`
- `package-lock.json`
- `next.config.ts`

3. **服务器配置**
```bash
# 安装依赖
npm ci --production

# 启动服务
npm start
```

## 关键配置验证

### 1. 检查 package.json
```json
{
  "scripts": {
    "build": "next build",
    "start": "next start"
  }
}
```

### 2. 检查 next.config.ts
确保包含：
- `compress: true` - 启用压缩
- 缓存头配置
- 图片优化配置

### 3. 检查字体加载
确保 `src/app/globals.css` 导入本地字体：
```css
@import './fonts.css';
```

不应该有：
```css
@import url('https://fonts.googleapis.com/...');
```

## 部署后验证

### 1. 检查网络请求
打开 Chrome DevTools > Network：
- ❌ 不应该有 fonts.googleapis.com 请求
- ✅ 应该加载 /fonts/*.woff2 文件

### 2. 运行性能测试
```bash
# 使用真实 URL
npx lighthouse https://www.binghengcredit.com --view
```

### 3. 在线测试
- [PageSpeed Insights](https://pagespeed.web.dev/analysis?url=https://www.binghengcredit.com)
- [GTmetrix](https://gtmetrix.com/)

## 紧急修复步骤

如果部署后仍有 Google Fonts：

1. **SSH 到服务器**
2. **检查构建文件**
```bash
grep -r "fonts.googleapis" .next/
```

3. **如果发现 Google Fonts**
- 重新构建：`npm run build`
- 清理缓存：`rm -rf .next/cache`
- 重启服务：`pm2 restart all`

## 预期结果

部署后应该达到：
- 手机版：85+ 分
- 桌面版：90+ 分
- FCP < 2秒
- LCP < 3秒（手机）
- 无 Google Fonts 外部请求

## 监控

1. **设置 Vercel Analytics**
2. **设置 Uptime 监控**
3. **每周运行 Lighthouse 测试**

## 联系支持

如果遇到问题：
1. 检查服务器日志
2. 验证环境变量
3. 确认 Node.js 版本 >= 18
