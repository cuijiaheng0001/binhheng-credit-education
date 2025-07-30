# Binhheng Credit Education

跨境债务回收教育与服务平台

## 项目概述

Binhheng Credit 是一个专注于跨境债务回收的教育和服务平台，特别针对国际学生应收账款的识别和回收。我们提供专业的金融教育内容和高端的债务回收服务。

## 快速开始

### 安装依赖

运行以下脚本来设置项目依赖：

```bash
bash scripts/setup.sh
```

如果无法联网安装，请先在有网络的环境中创建离线包：

```bash
cd website
npm ci
tar czf ../binghengcredit-web-node_modules.tar.gz node_modules
```

然后将 `binghengcredit-web-node_modules.tar.gz` 文件放在项目根目录，再运行 `bash scripts/setup.sh`。

## 项目结构

```
binhheng-credit-education/
├── README.md          # 项目说明文档
├── .gitignore         # Git忽略文件配置
├── website/           # Next.js 网站源代码
│   ├── src/           # 源代码目录
│   │   ├── app/       # Next.js App Router
│   │   ├── components/# React 组件
│   │   ├── lib/       # 工具函数
│   │   └── content/   # MDX 内容
│   ├── public/        # 静态资源
│   ├── package.json   # 项目依赖
│   └── next.config.ts # Next.js 配置
├── docs/              # 业务文档目录
│   ├── business-positioning.md
│   ├── website-design-strategy.md
│   └── cross-border-debt-whitepaper.md
└── resources/         # 资源文件目录（待添加）
```

## 技术栈

- **框架**: Next.js 15.4 (App Router)
- **语言**: TypeScript
- **样式**: Tailwind CSS 3.4
- **动画**: Framer Motion
- **内容**: MDX
- **部署**: Vercel

## 开始使用

### 前置要求
- Node.js 18.0 或更高版本
- npm 或 yarn 包管理器

### 安装步骤

1. 克隆仓库
```bash
git clone https://github.com/cuijiaheng0001/binhheng-credit-education.git
cd binhheng-credit-education
```

2. 进入网站目录并安装依赖
```bash
cd website
npm install
```

3. 启动开发服务器
```bash
npm run dev
```

4. 在浏览器中访问 http://localhost:3000

### 构建生产版本

```bash
npm run build
npm run start
```

## 主要功能

- 🌍 全球债务回收流程可视化
- 📊 专业的金融教育内容
- 🎨 高端的视觉设计系统
- 📱 完全响应式设计
- 🚀 优化的性能和SEO

## 贡献指南

欢迎贡献代码！请遵循以下步骤：

1. Fork 本仓库
2. 创建您的功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交您的更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启一个 Pull Request

### 代码规范

- 使用 TypeScript 进行类型安全开发
- 遵循 ESLint 配置
- 提交前运行 `npm run lint` 和 `npm run build`

## 许可证

MIT License

Copyright (c) 2024 Binhheng Credit Education

详见 [LICENSE](LICENSE) 文件（待创建）

## 联系方式

- 网站: [https://binghengcredit.com](https://binghengcredit.com)
- 邮箱: contact@binghengcredit.com
