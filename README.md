# Modern Portfolio with View Transitions

> **Fork from [delbaoliveira/next-view-transitions](https://github.com/delbaoliveira/next-view-transitions.git)**

A modern portfolio website built with Next.js and View Transitions API, featuring smooth page transitions, blog showcases, and interactive UI elements.

## Customizations

Based on the original project ([delbaoliveira/next-view-transitions](https://github.com/delbaoliveira/next-view-transitions)), we have made the following modifications:

- **Layout Optimization**: Expanded the content area width from fixed values to 80% of the screen width, better utilizing available space on large screens
- **Visual Effects**: Adjusted the brightness of the `Orb` background component to 10%, making it more subtle and elegant
- **Navigation Bar**: Enhanced the interaction styles of navigation links, more clearly displaying the current page

## Layout Comparison

| Before | After |
|--------|--------|
| ![Original Layout](https://fastly.jsdelivr.net/gh/bucketio/img1@main/2025/03/07/1741299156931-c93d68fb-4bf9-4206-a465-eaf56bde2541.png) | ![Optimized Layout](https://fastly.jsdelivr.net/gh/bucketio/img12@main/2025/03/07/1741299258320-b24afd7e-e214-4a2c-a6bd-30662462e5a7.png) |
| **Limited Content Area**<br>- Maximum content width on large screens was `max-w-4xl` (about 896px)<br>- Page only utilized about 1/3 of large screen area<br>- Content was compressed, cards were densely arranged | **Content Area Expanded to 80%**<br>- Content area now spans 80% of screen width<br>- More effective use of large screen space<br>- Cards are more comfortably arranged with better visibility |

### Key Improvements

1. **Layout Optimization**
   - Changed from fixed width limits (`md:max-w-2xl lg:max-w-4xl`) to 80% of screen width (`w-[80%] max-w-none`)
   - Expanded content area from approximately 1/3 to 80% on large screens
   - Better adaptation to various screen sizes

2. **Visual Enhancement**
   - Reduced the `Orb` background component brightness to 10%, making the effect more subtle
   - Improved contrast between content and background, enhancing readability

3. **Navigation Bar Improvements**
   - Enhanced interaction styles for navigation links
   - More clearly indicates the currently active page

These modifications result in better page presentation on large screen devices, effectively utilizing available space while maintaining aesthetic appeal and functionality.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

---

# 中文说明

## 现代化作品集网站（带视图过渡效果）

> **Fork 自 [delbaoliveira/next-view-transitions](https://github.com/delbaoliveira/next-view-transitions.git)**

这个项目是一个使用Next.js和View Transitions API构建的现代作品集网站。项目特点包括流畅的页面过渡、博客展示和交互式UI元素。

## 自定义修改

基于原始项目（[delbaoliveira/next-view-transitions](https://github.com/delbaoliveira/next-view-transitions)），我们进行了以下修改：

- **布局优化**：将内容区域宽度从固定值扩展为屏幕宽度的80%，以便在大屏幕设备上更好地利用可用空间
- **视觉效果**：调整了`Orb`背景组件的亮度至10%，使其更加微妙和优雅
- **导航栏**：增强了导航链接的交互样式，更清晰地显示当前页面

## 页面布局对比

| 修改前 | 修改后 |
|--------|--------|
| ![原始布局](https://fastly.jsdelivr.net/gh/bucketio/img1@main/2025/03/07/1741299156931-c93d68fb-4bf9-4206-a465-eaf56bde2541.png) | ![优化布局](https://fastly.jsdelivr.net/gh/bucketio/img12@main/2025/03/07/1741299258320-b24afd7e-e214-4a2c-a6bd-30662462e5a7.png) |
| **内容区域宽度受限**<br>- 大屏幕设备上内容区域最大宽度为`max-w-4xl`(约896px)<br>- 页面仅占用大屏幕约1/3的区域<br>- 内容被压缩，卡片排列密集 | **内容区域扩展至80%**<br>- 内容区域宽度为屏幕的80%<br>- 更有效地利用大屏幕空间<br>- 卡片排列更加舒适，可视性更强 |

### 主要改进

1. **布局优化**
   - 从固定宽度限制(`md:max-w-2xl lg:max-w-4xl`)更改为屏幕宽度的80%(`w-[80%] max-w-none`)
   - 大屏幕设备上内容区域从约1/3扩展到80%
   - 更好地适应各种屏幕尺寸

2. **视觉效果提升**
   - `Orb`背景组件亮度降低至10%，使效果更加微妙
   - 内容与背景对比度提高，改善可读性

3. **导航栏改进**
   - 增强导航链接的交互样式
   - 更清晰地显示当前活动页面

这些修改使页面在大屏幕设备上展示效果更佳，充分利用了可用空间，同时保持了设计的美观性和功能性。

## 开始使用

首先，运行开发服务器：

```bash
npm run dev
# 或者
yarn dev
# 或者
pnpm dev
# 或者
bun dev
```

用浏览器打开 [http://localhost:3000](http://localhost:3000) 查看结果。

您可以通过修改 `app/page.tsx` 开始编辑页面。当您编辑文件时，页面会自动更新。

这个项目使用 [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) 自动优化并加载 [Geist](https://vercel.com/font)，这是 Vercel 的一个新字体系列。