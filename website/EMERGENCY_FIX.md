# 🚨 紧急修复：生产环境性能问题

## 问题总结

生产环境 (https://www.binghengcredit.com) 存在严重性能问题：
- **手机版：62/100** ❌ (应该 85+)
- **Google Fonts 仍在加载** (本地已修复)
- **LCP: 7.1秒** (应该 < 3秒)

## 立即执行步骤

### 1. 确认本地修复
```bash
# 在本地项目目录
cd /Users/ucd/bingheng-credit-education/website

# 验证没有 Google Fonts
grep -r "fonts.googleapis" src/ || echo "✅ No Google Fonts"

# 验证字体文件存在
ls -la public/fonts/*.woff2 | wc -l
# 应该显示: 5
```

### 2. 重新构建
```bash
# 清理旧构建
rm -rf .next

# 生产构建
npm run build

# 本地测试
npm start
```

### 3. 验证本地性能
访问 http://localhost:3000 并运行 Lighthouse：
- 应该没有 fonts.googleapis.com 请求
- 性能分数应该 > 85

### 4. 部署到生产

#### 选项 A: Vercel (推荐)
```bash
# 如果还没有链接到 Vercel
vercel

# 部署到生产
vercel --prod
```

#### 选项 B: 手动部署
1. 将以下文件夹上传到服务器：
   - `.next/`
   - `public/` (特别是 public/fonts/)
   - `package.json`
   - `next.config.ts`

2. 在服务器上：
```bash
# 安装依赖
npm ci --production

# 重启服务
pm2 restart all
# 或
systemctl restart your-app
```

### 5. 清理 CDN 缓存
如果使用 Cloudflare 或其他 CDN：
1. 登录 CDN 控制台
2. 清理所有缓存
3. 特别是 CSS 文件缓存

### 6. 验证修复

等待 5 分钟让缓存更新，然后：

1. **检查网络请求**
   - 打开 https://www.binghengcredit.com
   - F12 打开 DevTools > Network
   - 刷新页面
   - 搜索 "googleapis" - 应该没有结果

2. **运行性能测试**
   - https://pagespeed.web.dev/
   - 输入 https://www.binghengcredit.com
   - 选择 Mobile

## 如果问题仍然存在

### 检查服务器缓存
```bash
# SSH 到服务器
ssh your-server

# 查找 Google Fonts
find /path/to/app -name "*.css" -exec grep -l "fonts.googleapis" {} \;

# 如果找到，删除这些文件
rm -rf .next/cache
```

### 检查反向代理
如果使用 Nginx:
```nginx
# 添加到 nginx.conf
location ~* \.(css|js)$ {
    add_header Cache-Control "no-cache, no-store, must-revalidate";
    add_header Pragma "no-cache";
    add_header Expires "0";
}
```

重启 Nginx:
```bash
sudo nginx -s reload
```

## 预期结果

修复后应该达到：
- 手机版：85+ 分
- 桌面版：90+ 分
- 无 Google Fonts 请求
- LCP < 3秒

## 监控

部署后每小时检查一次，持续 24 小时：
1. PageSpeed Insights 分数
2. 网络请求（无 googleapis）
3. 真实用户指标

## 回滚方案

如果出现问题：
```bash
# Vercel
vercel rollback

# 手动
git checkout previous-commit
npm run build
# 重新部署
```
