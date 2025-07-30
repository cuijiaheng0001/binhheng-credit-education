# 修复 Chunk 加载错误

如果您在部署后遇到 chunk 加载错误（404），请按以下步骤操作：

## Vercel 部署（推荐）

1. **清除缓存并重新部署**
   ```bash
   # 在 Vercel 仪表板中
   # 1. 进入项目设置
   # 2. 找到 "Functions" 标签
   # 3. 点击 "Clear Cache"
   # 4. 然后重新部署
   ```

2. **或者通过 CLI**
   ```bash
   vercel --force
   ```

## 手动部署

如果您使用其他托管服务：

1. **本地重新构建**
   ```bash
   rm -rf .next
   npm run build
   ```

2. **确保上传所有文件**
   - 上传整个 `.next` 目录
   - 确保包含 `_next/static/chunks` 下的所有文件
   - 检查文件权限是否正确（应该是可读的）

3. **清除 CDN 缓存**
   如果使用 CDN，清除缓存：
   - Cloudflare: Purge Everything
   - 其他 CDN: 查看相应文档

## 临时解决方案

在 `next.config.ts` 中添加：

```typescript
const nextConfig: NextConfig = {
  // ... 其他配置
  
  // 禁用代码分割（不推荐用于生产环境）
  webpack: (config) => {
    config.optimization.splitChunks = false;
    return config;
  },
}
```

## 验证部署

部署后，检查以下 URL 是否可访问：
- `https://www.binghengcredit.com/_next/static/chunks/webpack-[hash].js`
- `https://www.binghengcredit.com/_next/static/chunks/main-[hash].js`

如果返回 404 或 HTML 内容而不是 JavaScript，说明文件没有正确上传。

## 联系支持

如果问题持续存在，请联系您的托管服务提供商。