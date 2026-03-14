# Responsive System Documentation

## Overview

This document outlines the comprehensive responsive design system implemented across the Almaidah Cafe website, ensuring optimal viewing and usability across all device sizes.

## Breakpoint System

### Tailwind Default Breakpoints

The website uses Tailwind CSS's default breakpoint system:

```
sm:  640px  - Small devices (landscape phones)
md:  768px  - Medium devices (tablets)
lg:  1024px - Large devices (desktops)
xl:  1280px - Extra large devices (large desktops)
```

### Configuration

**Location:** `tailwind.config.ts`

The breakpoints are not overridden, using Tailwind's battle-tested defaults for maximum compatibility.

## Base Typography System

### Responsive Font Sizing

**Location:** `app/globals.css`

```css
html {
  font-size: 14px; /* Mobile base */
}

@media (min-width: 768px) {
  html {
    font-size: 16px; /* Desktop base */
  }
}
```

This creates a scalable typography system where:

- Mobile (< 768px): 14px base font
- Desktop (≥ 768px): 16px base font
- All rem-based sizes scale proportionally

## Global Layout Rules

### Box Sizing

```css
*,
*::before,
*::after {
  box-sizing: border-box;
}
```

### Overflow Prevention

```css
html,
body {
  overflow-x: hidden;
}
```

Prevents horizontal scrolling on all devices.

## Section Padding System

### Standard Pattern

All sections follow this responsive padding pattern:

```
Mobile:   px-4  py-10  (16px horizontal, 40px vertical)
Tablet:   px-6  py-16  (24px horizontal, 64px vertical)
Desktop:  px-10 py-20  (40px horizontal, 80px vertical)
```

### Implementation

```tsx
className = "py-10 px-4 md:px-6 lg:px-10 md:py-16 lg:py-20";
```

## Component-Specific Responsive Patterns

### Hero Section

**File:** `components/Hero.tsx`

- **Heading:**
  - Mobile: text-4xl (2.25rem = 31.5px)
  - Small: text-5xl (3rem = 42px)
  - Medium: text-6xl (3.75rem = 52.5px)
  - Large: text-7xl (4.5rem = 63px)
  - XL: text-8xl (6rem = 84px)

- **Subheading:**
  - Mobile: text-base (1rem = 14px)
  - Small: text-lg (1.125rem = 15.75px)
  - Medium: text-xl (1.25rem = 17.5px)
  - Large: text-2xl (1.5rem = 21px)

### Features Section

**File:** `components/Features.tsx`

- **Grid:** 1 column → 3 columns at md
- **Icon Size:** 40px mobile → 48px desktop
- **Card Padding:** p-6 mobile → p-8 desktop
- **Gap:** gap-6 mobile → gap-8 desktop

### Menu Section

**File:** `components/Menu.tsx`

- **Grid:** 1 column → 2 columns at sm → 3 columns at md
- **Item Cards:** Responsive padding and font sizes
- **Category Buttons:**
  - Mobile: px-4 py-2 text-xs
  - Desktop: px-6 py-3 text-sm
- **Add Button:** 36px mobile → 40px desktop

### About Section

**File:** `components/About.tsx`

- **Layout:** 1 column → 2 columns at lg
- **Image Border:** 8px mobile → 12px desktop
- **Stats Numbers:**
  - Mobile: text-2xl (1.5rem = 21px)
  - Small: text-3xl (1.875rem = 26.25px)
  - Medium: text-4xl (2.25rem = 31.5px)
  - Large: text-5xl (3rem = 42px)

### Gallery Section

**File:** `components/Gallery.tsx`

- **Grid:** 2 columns → 3 columns at md
- **Row Height:** 150px mobile → 200px desktop
- **Gap:** gap-2 mobile → gap-3 desktop

### Testimonials Section

**File:** `components/Testimonials.tsx`

- **Grid:** 1 column → 3 columns at md
- **Card Padding:** p-5 mobile → p-6 desktop
- **Quote Icon:** 48px mobile → 64px desktop
- **Star Size:** 16px mobile → 18px desktop

### Contact Section

**File:** `components/Contact.tsx`

- **Layout:** 1 column → 2 columns at lg
- **Map Height:** 300px mobile → 400px desktop
- **Form Inputs:**
  - Mobile: px-3 py-2 text-sm
  - Desktop: px-4 py-3 text-base
- **Icon Size:** 20px mobile → 24px desktop

### Footer

**File:** `components/Footer.tsx`

- **Grid:** 1 column → 2 columns at md → 4 columns at lg
- **Logo:** text-2xl mobile → text-3xl desktop
- **Padding:** py-10 mobile → py-12 desktop
- **Gap:** gap-6 mobile → gap-8 desktop

## Font Size Scale

### Headings (font-display)

```
text-3xl:  1.875rem (26.25px mobile, 30px desktop)
text-4xl:  2.25rem  (31.5px mobile, 36px desktop)
text-5xl:  3rem     (42px mobile, 48px desktop)
text-6xl:  3.75rem  (52.5px mobile, 60px desktop)
text-7xl:  4.5rem   (63px mobile, 72px desktop)
text-8xl:  6rem     (84px mobile, 96px desktop)
```

### Body Text (font-body)

```
text-xs:   0.75rem  (10.5px mobile, 12px desktop)
text-sm:   0.875rem (12.25px mobile, 14px desktop)
text-base: 1rem     (14px mobile, 16px desktop)
text-lg:   1.125rem (15.75px mobile, 18px desktop)
text-xl:   1.25rem  (17.5px mobile, 20px desktop)
text-2xl:  1.5rem   (21px mobile, 24px desktop)
```

## Spacing Scale

### Padding/Margin

```
Mobile → Desktop
p-3 → p-4   (12px → 16px)
p-4 → p-6   (16px → 24px)
p-5 → p-6   (20px → 24px)
p-6 → p-8   (24px → 32px)
py-10 → py-16 → py-20 (40px → 64px → 80px)
```

### Gaps

```
gap-2 → gap-3   (8px → 12px)
gap-3 → gap-4   (12px → 16px)
gap-4 → gap-6   (16px → 24px)
gap-6 → gap-8   (24px → 32px)
```

## Interactive Elements

### Buttons

- Minimum touch target: 44px × 44px (mobile)
- Responsive padding maintains accessibility
- Font size scales: text-xs → text-sm → text-base

### Form Inputs

- Minimum height: 40px mobile, 44px desktop
- Clear focus states with gold rings
- Readable placeholder text at all sizes

### Icons

- Scale proportionally with context
- Minimum size: 16px for clarity
- Hover states work on all devices

## Testing Checklist

### Mobile (< 640px)

- [ ] All text is readable (minimum 14px base)
- [ ] No horizontal overflow
- [ ] Touch targets are at least 44px
- [ ] Images don't overflow containers
- [ ] Forms are easy to fill
- [ ] Navigation is accessible

### Tablet (640px - 1023px)

- [ ] Layout transitions smoothly
- [ ] Grid columns adjust appropriately
- [ ] Font sizes increase readably
- [ ] Spacing feels balanced
- [ ] Images scale properly

### Desktop (≥ 1024px)

- [ ] Full layout is visible
- [ ] Multi-column layouts work
- [ ] Hover states are clear
- [ ] Typography is comfortable
- [ ] White space is balanced

## Performance Considerations

### Image Optimization

- Use responsive images with srcset
- Lazy load below-the-fold images
- Optimize for mobile-first

### CSS

- Mobile-first approach (base styles, then md:, lg:)
- Minimal media query usage
- Tailwind purges unused styles

### JavaScript

- Framer Motion animations are GPU-accelerated
- Scroll listeners are debounced
- No layout shifts during load

## Maintenance Guidelines

### Adding New Sections

1. Start with mobile layout (base classes)
2. Add tablet adjustments (md: prefix)
3. Add desktop refinements (lg: prefix)
4. Follow padding pattern: px-4 md:px-6 lg:px-10
5. Follow vertical spacing: py-10 md:py-16 lg:py-20

### Typography

1. Use responsive font classes
2. Headings: text-3xl sm:text-4xl md:text-5xl lg:text-6xl
3. Body: text-sm md:text-base
4. Small text: text-xs md:text-sm

### Spacing

1. Use consistent gap/padding scales
2. Increase spacing at larger breakpoints
3. Maintain visual hierarchy at all sizes

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- iOS Safari 12+
- Android Chrome 80+
- Responsive images with fallbacks
- CSS Grid with flexbox fallbacks

## Accessibility

- Touch targets meet WCAG 2.1 guidelines (44px minimum)
- Text scales with user preferences
- Focus states visible at all sizes
- Semantic HTML structure
- ARIA labels on interactive elements

## Common Patterns

### Responsive Container

```tsx
<div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-10">{/* Content */}</div>
```

### Responsive Grid

```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
  {/* Items */}
</div>
```

### Responsive Typography

```tsx
<h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
  Heading
</h2>
<p className="text-sm md:text-base lg:text-lg">
  Body text
</p>
```

### Responsive Spacing

```tsx
<section className="py-10 px-4 md:px-6 lg:px-10 md:py-16 lg:py-20">
  {/* Section content */}
</section>
```

## Troubleshooting

### Text Too Small on Mobile

- Check base font size in globals.css (should be 14px)
- Ensure text-xs is not used for body text
- Use text-sm or text-base minimum

### Horizontal Overflow

- Check for fixed widths without max-width
- Verify overflow-x: hidden on html/body
- Look for absolute positioned elements

### Layout Breaking at Breakpoints

- Test at exact breakpoint widths (768px, 1024px)
- Check grid column counts
- Verify padding doesn't cause overflow

### Touch Targets Too Small

- Minimum 44px × 44px for interactive elements
- Add padding to increase hit area
- Test on actual mobile devices

## Future Enhancements

- [ ] Add 2xl breakpoint support (1536px)
- [ ] Implement container queries for components
- [ ] Add fluid typography with clamp()
- [ ] Optimize for foldable devices
- [ ] Add print stylesheet
