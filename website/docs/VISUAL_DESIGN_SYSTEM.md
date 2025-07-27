# Binhheng Credit Visual Design System

## 基于 Atradius Collections 的视觉优化方案

### 1. 颜色系统 (Color System)

#### 主色调
- **Primary Blue**: #003D7A (深蓝色 - 专业信任感)
- **Secondary Blue**: #0066CC (明亮蓝 - 行动引导)
- **Accent Red**: #E30613 (红色 - 强调元素)

#### 中性色
- **Dark Gray**: #333333 (主要文字)
- **Medium Gray**: #666666 (次要文字)
- **Light Gray**: #F5F5F5 (背景色)
- **White**: #FFFFFF (卡片背景)

#### 功能色
- **Success Green**: #28A745
- **Warning Orange**: #FFA500
- **Error Red**: #DC3545

### 2. 排版系统 (Typography)

#### 字体家族
```css
--font-primary: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
--font-display: 'Inter', sans-serif;
```

#### 字体大小
- **Hero Title**: 48-64px (3-4rem)
- **Section Title**: 36-48px (2.25-3rem)
- **Card Title**: 24-28px (1.5-1.75rem)
- **Body Text**: 16-18px (1-1.125rem)
- **Small Text**: 14px (0.875rem)

### 3. 间距系统 (Spacing)

- **Section Padding**: 80-120px (5-7.5rem)
- **Container Max Width**: 1200px
- **Card Padding**: 32-40px (2-2.5rem)
- **Element Gap**: 24-32px (1.5-2rem)

### 4. 视觉效果 (Visual Effects)

#### 阴影
```css
--shadow-sm: 0 2px 4px rgba(0,0,0,0.1);
--shadow-md: 0 4px 12px rgba(0,0,0,0.15);
--shadow-lg: 0 8px 24px rgba(0,0,0,0.2);
```

#### 圆角
- **Cards**: 8-12px
- **Buttons**: 4-6px
- **Images**: 8px

#### 过渡动画
- **Duration**: 300-500ms
- **Easing**: cubic-bezier(0.4, 0, 0.2, 1)

### 5. 组件样式 (Component Styles)

#### 导航栏
- 固定顶部，滚动时背景变白
- Logo 左侧，菜单中央，CTA 右侧
- 悬停效果：下划线动画

#### Hero Section
- 全屏高度 (100vh)
- 视差滚动背景图
- 渐变遮罩层
- 中央对齐文字

#### 内容卡片
- 白色背景，轻微阴影
- 悬停时阴影加深
- 图片顶部，内容底部
- 清晰的层级结构

#### CTA 区块
- 渐变背景 (蓝色系)
- 中央对齐
- 突出的按钮设计

#### 知识中心模块
- 左右布局
- 文章卡片网格
- 元数据显示（作者、日期）

### 6. 响应式断点

- **Desktop**: 1200px+
- **Laptop**: 992px - 1199px
- **Tablet**: 768px - 991px
- **Mobile**: < 768px

### 7. 交互模式

- **Hover States**: 颜色变深，阴影增强
- **Focus States**: 蓝色轮廓
- **Active States**: 按下效果
- **Loading States**: 骨架屏

### 8. 图像处理

- **Hero Images**: 1920x1080 minimum
- **Card Images**: 16:9 ratio
- **Lazy Loading**: 所有图片
- **Alt Text**: 中英双语