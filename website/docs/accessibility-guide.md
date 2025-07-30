# 无障碍设计实施指南

## 1. 已实施的无障碍改进

### 1.1 设计系统 (design-system.css)
- ✅ 统一的交互控件样式系统
- ✅ 最小触控目标尺寸 44×44px
- ✅ 清晰的焦点状态样式
- ✅ 高对比度颜色系统 (WCAG AA 标准)
- ✅ 响应式触控优化

### 1.2 组件改进

#### AccessibleButton 组件
- ✅ 语义化 HTML button 元素
- ✅ aria-label, aria-pressed, aria-expanded 支持
- ✅ 键盘导航支持 (Tab, Enter, Space)
- ✅ 加载和禁用状态的 aria 属性
- ✅ 焦点样式和视觉反馈

#### AccessibleLink 组件
- ✅ 内部/外部链接区分
- ✅ 外部链接自动标记
- ✅ aria-current 用于活动页面
- ✅ 屏幕阅读器友好的提示文本

#### AccessibleInput 组件
- ✅ 关联的 label 元素
- ✅ 错误消息的 aria-describedby
- ✅ 必填字段的视觉和语义标记
- ✅ 清晰的错误状态反馈

### 1.3 现有组件更新
- ✅ Navigation: 添加导航角色和 aria 属性
- ✅ CookieBanner: 增强按钮可访问性
- ✅ WhatsAppButton: 已有合适的 aria-label

## 2. 测试清单

### 2.1 键盘导航测试
- [ ] Tab 键顺序合理
- [ ] Shift+Tab 反向导航
- [ ] Enter/Space 激活按钮
- [ ] Esc 关闭模态框
- [ ] 焦点不会困在某个区域

### 2.2 屏幕阅读器测试
- [ ] 所有交互元素都有描述性标签
- [ ] 表单字段与标签正确关联
- [ ] 错误消息能被朗读
- [ ] 页面结构使用正确的标题层级

### 2.3 视觉测试
- [ ] 颜色对比度符合 WCAG AA (4.5:1)
- [ ] 焦点指示器清晰可见
- [ ] 不仅依赖颜色传达信息
- [ ] 文字可缩放至 200% 而不破坏布局

### 2.4 移动端测试
- [ ] 触控目标至少 44×44px
- [ ] 触控目标间有足够间距
- [ ] 横竖屏切换正常
- [ ] 手势操作有替代方案

## 3. 使用新组件

### 替换现有按钮
```tsx
// 旧代码
<button className="...">点击我</button>

// 新代码
<AccessibleButton 
  variant="primary"
  ariaLabel="执行某个操作"
>
  点击我
</AccessibleButton>
```

### 替换现有链接
```tsx
// 旧代码
<a href="/about">关于我们</a>

// 新代码
<AccessibleLink href="/about">
  关于我们
</AccessibleLink>
```

### 替换表单输入
```tsx
// 旧代码
<input type="email" placeholder="邮箱" />

// 新代码
<AccessibleInput
  type="email"
  label="邮箱地址"
  required
  error={errors.email}
/>
```

## 4. 自动化测试工具

### Lighthouse
```bash
# 在 Chrome DevTools 中运行
# 关注 Accessibility 分数
```

### axe DevTools
```bash
# Chrome/Firefox 扩展
# 提供详细的无障碍问题报告
```

### WAVE
```bash
# 在线工具或浏览器扩展
# 可视化无障碍问题
```

## 5. 持续改进

### 下一步行动
1. 逐步替换所有旧组件为无障碍组件
2. 添加跳转到主内容的链接
3. 实现键盘快捷键系统
4. 添加高对比度模式切换
5. 完善 ARIA live regions

### 性能考虑
- 使用 CSS 变量便于主题切换
- 延迟加载非关键的交互增强
- 保持焦点管理的性能优化

## 6. 参考资源
- [WCAG 2.1 指南](https://www.w3.org/WAI/WCAG21/quickref/)
- [ARIA 最佳实践](https://www.w3.org/WAI/ARIA/apg/)
- [WebAIM 对比度检查器](https://webaim.org/resources/contrastchecker/)
