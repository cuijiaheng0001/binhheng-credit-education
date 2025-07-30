# 主页核心组件代码

## 1. HeroCarousel 组件关键实现

```tsx
// 轮播数据结构
const slides = [
  {
    title: 'Stop Writing Off International Debts Prematurely',
    subtitle: 'A Hidden Problem Costing You Millions',
    description: 'Discover how 60% of cross-border debts...',
    stats: { value: '$128M+', label: 'Previously "Lost" Debts Recovered' }
  }
]

// 动画效果
- Framer Motion 驱动
- 视差滚动: useTransform(scrollY)
- 自动播放: 6秒间隔
- 淡入淡出过渡: AnimatePresence
```

## 2. 主要视觉效果代码片段

### 渐变背景
```css
background: linear-gradient(135deg, #0F172A 0%, #1e293b 50%, #334155 100%);
```

### 金色强调
```css
.text-gold {
  color: #CC9A06;
  background: linear-gradient(to right, #CC9A06, #D4A82A);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

### 卡片悬停效果
```css
.card {
  transition: all 0.3s ease;
  transform: translateY(0);
}
.card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px -10px rgba(204, 154, 6, 0.3);
}
```

### 数字动画
```tsx
<motion.span
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.2 }}
>
  {value}
</motion.span>
```

## 3. 布局系统

### 容器
```css
.max-w-7xl { max-width: 1280px; }
.mx-auto { margin: 0 auto; }
.px-4 sm:px-6 lg:px-8 { 响应式内边距 }
```

### 网格系统
```css
.grid lg:grid-cols-3 gap-8
.grid md:grid-cols-2 lg:grid-cols-4
```

### 间距
```css
.py-24 { padding: 96px 0; }
.py-32 { padding: 128px 0; }
```

## 4. 交互组件模式

### CTA按钮
```tsx
<button className="group inline-flex items-center gap-2 px-8 py-4 
  bg-gold text-white rounded-lg font-semibold 
  hover:bg-gold-dark transition-all duration-300 
  shadow-lg hover:shadow-xl transform hover:-translate-y-1">
  开始追讨
  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
</button>
```

### 卡片组件
```tsx
<div className="bg-white rounded-2xl p-8 shadow-lg 
  hover:shadow-2xl transition-all duration-300 
  border border-gray-100 hover:border-gold/20">
  {/* 内容 */}
</div>
```

## 5. 动画时序

```tsx
// 淡入动画序列
const fadeInVariants = {
  initial: { opacity: 0, y: 20 },
  animate: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.8,
      ease: [0.43, 0.13, 0.23, 0.96]
    }
  })
}
```

## 6. 响应式断点

```css
sm: 640px
md: 768px  
lg: 1024px
xl: 1280px
2xl: 1536px
```

这个设计系统的核心是:
1. 专业金融感的配色
2. 大胆的排版层次
3. 适度的动画增强
4. 清晰的信息架构
5. 响应式和可访问性
