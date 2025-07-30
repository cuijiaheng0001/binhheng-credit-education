# 缓存清除指南

## 问题描述
字体文件404错误可能是由于CDN或浏览器缓存了旧版本的CSS文件。

## 解决方案

### 1. 浏览器端（用户）
- 强制刷新：`Ctrl + Shift + R` (Windows) 或 `Cmd + Shift + R` (Mac)
- 清除浏览器缓存
- 使用隐私/无痕模式测试

### 2. CDN端（开发者）
如果使用了CDN服务（如Cloudflare、Vercel等），需要：

#### Vercel
```bash
# 重新部署会自动清除缓存
vercel --prod
```

#### Cloudflare
1. 登录Cloudflare控制台
2. 选择域名
3. 进入"Caching" -> "Configuration"
4. 点击"Purge Everything"或使用自定义清除：
   - 清除特定文件：`https://www.binghengcredit.com/*.css`

#### 其他CDN
查看相应CDN提供商的缓存清除文档。

### 3. 服务器端
如果使用Nginx或Apache，检查缓存配置：

#### Nginx
```nginx
location ~* \.(css|js|woff2)$ {
    expires 1h;  # 减少缓存时间
    add_header Cache-Control "public, immutable";
}
```

### 4. 构建配置
在Next.js中，可以通过修改文件名强制更新：

```javascript
// next.config.js
module.exports = {
  // 添加构建ID到文件名
  generateBuildId: async () => {
    return Date.now().toString()
  }
}
```

## 验证修复
1. 检查网络请求：打开开发者工具 -> Network标签
2. 查看CSS文件内容，确认引用的是 `inter-v13-latin-400.woff2`
3. 确认所有字体文件返回200状态码

## 临时解决方案
如果缓存问题持续，可以在URL后添加版本参数：
```css
src: url('/fonts/inter-v13-latin-400.woff2?v=2') format('woff2');
```