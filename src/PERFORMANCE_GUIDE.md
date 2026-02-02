# ⚡ Portfolio Minimal - 性能优化指南

## 📈 当前性能基准

| 指标 | 当前值 | 目标值 | 状态 | 优先级 |
|------|--------|--------|------|--------|
| **FCP** (First Contentful Paint) | ~1.8s | <1.5s | 🟡 | P1 |
| **LCP** (Largest Contentful Paint) | ~3.2s | <2.5s | 🔴 | P0 |
| **CLS** (Cumulative Layout Shift) | 0.05 | <0.1 | 🟢 | ✅ |
| **TTI** (Time to Interactive) | ~2.5s | <3.0s | 🟢 | ✅ |
| **TBT** (Total Blocking Time) | ~200ms | <300ms | 🟢 | ✅ |

**Lighthouse Score (估算)**: 78/100 → **目标**: 90+/100

---

## 🎯 优化路线图

### Phase 1: 图片优化 (预期LCP -30%)

#### 1.1 实现原生懒加载
```tsx
// components/LazyImage.tsx
import { ImageWithFallback } from './figma/ImageWithFallback';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
}

export function LazyImage({ src, alt, className }: LazyImageProps) {
  return (
    <ImageWithFallback
      src={src}
      alt={alt}
      className={className}
      loading="lazy"        // ← 原生懒加载
      decoding="async"      // ← 异步解码
    />
  );
}
```

#### 1.2 HomePage Gallery优化
```tsx
// components/HomePage.tsx - BEFORE ❌
{images.map((image, index) => (
  <img src={image} alt={...} className="..." />
))}

// AFTER ✅
{images.map((image, index) => (
  <LazyImage 
    src={image} 
    alt={`Gallery image ${index + 1}`}
    className="h-full w-full object-cover"
  />
))}
```

**预期收益**:
- ✅ 初始加载: 3.5MB → 800KB (-77%)
- ✅ LCP: 3.2s → 2.2s (-31%)
- ✅ 数据节省: 移动端流量-70%

---

### Phase 2: React渲染优化 (预期重渲染 -40%)

#### 2.1 添加React.memo
```tsx
// components/HomePage.tsx
import React, { memo } from 'react';

// BEFORE ❌
export function HomePage({ projects, onProjectClick }) {
  return (
    <div className="min-h-screen">
      {/* 大量JSX... */}
    </div>
  );
}

// AFTER ✅
export const HomePage = memo(function HomePage({ projects, onProjectClick }) {
  return (
    <div className="min-h-screen">
      {/* 大量JSX... */}
    </div>
  );
});
```

**需要memo的组件**:
1. ✅ `HomePage.tsx` - 包含14张图片
2. ✅ `WorkCard.tsx` - 列表渲染
3. ✅ `PersonasDisplay.tsx` - 复杂交互
4. ✅ `UserFlowDisplay.tsx` - 复杂交互
5. ✅ `SturdyPrototypesDisplay.tsx` - 大型SVG

#### 2.2 使用useCallback缓存函数
```tsx
// App.tsx
import { useCallback } from 'react';

// BEFORE ❌
const handleProjectClick = (project: Project) => {
  setSelectedProject(project);
  setCurrentView('detail');
};

// AFTER ✅
const handleProjectClick = useCallback((project: Project) => {
  setSelectedProject(project);
  setCurrentView('detail');
}, []); // ← 空依赖数组，函数永不重新创建

const handleNavigateHome = useCallback(() => {
  setCurrentView('home');
  setSelectedProject(null);
}, []);
```

**预期收益**:
- ✅ 不必要的重渲染: -40%
- ✅ JavaScript执行时间: -150ms
- ✅ 页面切换流畅度: +20%

---

### Phase 3: 动画优化 (预期移动端FPS +15)

#### 3.1 合并transform
```tsx
// components/SturdyPrototypesDisplay.tsx

// BEFORE ❌ - 嵌套transform导致多次重绘
<div style={{ transform: 'scale(0.4)' }}>
  <div style={{ transform: 'scale(1.25)' }}>
    <Component />
  </div>
</div>

// AFTER ✅ - 单层transform
<div style={{ transform: 'scale(0.5)' }}>  {/* 0.4 * 1.25 = 0.5 */}
  <Component />
</div>
```

#### 3.2 GPU加速优化
```tsx
// 确保transform动画使用GPU加速
<motion.div
  style={{ 
    transform: 'translateZ(0)', // ← 强制GPU加速
    willChange: 'transform',     // ← 提前通知浏览器
  }}
  animate={{ scale: 1.05 }}
/>
```

#### 3.3 添加reduced-motion支持
```tsx
// hooks/useReducedMotion.ts
export function useReducedMotion() {
  const [prefersReduced, setPrefersReduced] = useState(
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handler = () => setPrefersReduced(mediaQuery.matches);
    
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  return prefersReduced;
}

// 使用示例
const shouldReduceMotion = useReducedMotion();

<motion.div
  initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
  animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
/>
```

**预期收益**:
- ✅ 移动端FPS: 45 → 60 (+33%)
- ✅ 重绘次数: -25%
- ✅ 电池消耗: -15%

---

## 🔍 性能监控清单

### Lighthouse审计
```bash
# 运行Lighthouse
npx lighthouse https://your-site.com --view

# 关键指标目标
Performance:  90+
Accessibility: 100 (已达成✅)
Best Practices: 95+
SEO: 85+
```

### Core Web Vitals目标
```
✅ LCP < 2.5s (Currently: ~3.2s → Target: 2.2s)
✅ FID < 100ms (Currently: Good)
✅ CLS < 0.1 (Currently: 0.05 ✅)
```

### 性能预算
| 资源类型 | 当前 | 预算 | 状态 |
|---------|------|------|------|
| **JavaScript** | 180KB | <200KB | 🟢 |
| **CSS** | 45KB | <50KB | 🟢 |
| **Images** | 3.5MB | <1.5MB | 🔴 |
| **Fonts** | 85KB | <100KB | 🟢 |
| **Total** | 3.81MB | <2.0MB | 🔴 |

---

## 🛠️ 实施步骤

### Week 1: 图片优化
- [ ] Day 1-2: 创建LazyImage组件
- [ ] Day 3: 更新HomePage Gallery
- [ ] Day 4: 更新ImageGallery
- [ ] Day 5: 测试验证 (Lighthouse)

### Week 2: React优化
- [ ] Day 1-2: 添加React.memo
- [ ] Day 3: 重构useCallback
- [ ] Day 4-5: 性能测试对比

### Week 3: 动画优化
- [ ] Day 1-2: 优化transform
- [ ] Day 3: 添加reduced-motion
- [ ] Day 4-5: 移动端测试

---

## 📊 预期性能提升总览

| 优化项 | 当前 | 优化后 | 提升 |
|--------|------|--------|------|
| **LCP** | 3.2s | 2.2s | ⬇️ 31% |
| **Initial Load** | 3.8MB | 1.2MB | ⬇️ 68% |
| **Re-renders** | 100% | 60% | ⬇️ 40% |
| **Mobile FPS** | 45 | 60 | ⬆️ 33% |
| **Lighthouse** | 78 | 92 | ⬆️ 18% |

**总体性能提升**: **~35%** 🚀

---

## 💡 长期优化建议

### 未来考虑 (当内容增长时)
1. **图片CDN**: Cloudflare Images / Imgix
2. **代码分割**: 路由级别lazy loading
3. **虚拟滚动**: react-window (当图片>50)
4. **Service Worker**: 离线缓存
5. **WebP/AVIF**: 现代图片格式

### 持续监控
- 每周运行Lighthouse
- 监控Core Web Vitals (Real User Monitoring)
- 设置性能预算alerts

---

**最后更新**: 2025-01-24  
**下次审查**: 完成Phase 1后
