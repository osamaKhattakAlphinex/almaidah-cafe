# Pages Documentation

## Overview

This document outlines all the pages created for the Almaidah Cafe website, their structure, and key features.

## Page Structure

### 1. Home Page (`/`)

**File:** `app/page.tsx`

**Sections:**

- Hero Section with CTA buttons
- Features Section (Why Almaidah?)
- Menu Section with category filters
- About Section with story and stats
- Gallery Section with masonry grid
- Testimonials Section with auto-slider
- Contact Section with map and form
- Footer with opening hours and social links

**Key Features:**

- Full-page hero with scroll indicator
- Animated section transitions
- Interactive menu filtering
- Auto-sliding testimonials
- Integrated Google Maps
- Contact form with validation

---

### 2. About Page (`/about`)

**File:** `app/about/page.tsx`

**Sections:**

1. **Hero Section**
   - Page title and introduction
   - Gradient background effects

2. **Main About Section** (Reused Component)
   - Two-column layout with image and story
   - Statistics showcase
   - Est. 2024 badge

3. **Our Story Section**
   - Detailed narrative about the cafe's founding
   - Quick info cards:
     - Location details
     - Opening hours breakdown
     - Contact information

4. **Our Values Section**
   - Three core values:
     - Quality First
     - Community Focused
     - Made with Love
   - Icon-based cards with descriptions

5. **Features Section** (Reused Component)
   - Lightning Fast Delivery
   - Freshly Made Daily
   - Located in Phase 6

6. **Testimonials Section** (Reused Component)
   - Auto-sliding customer reviews

**Unique Content:**

- Extended story narrative
- Detailed opening hours
- Core values presentation
- Multiple contact methods

---

### 3. Menu Page (`/menu`)

**File:** `app/menu/page.tsx`

**Sections:**

1. **Hero Section**
   - Menu introduction
   - Appetizing description

2. **Menu Highlights**
   - Four category highlights:
     - Signature Burgers
     - Wood-Fired Pizza
     - Shawarmas & Wraps
     - Beverages
   - Icon-based presentation

3. **Main Menu Section** (Reused Component)
   - Category filtering
   - Menu items grid
   - Add to order functionality

4. **Order CTA Section**
   - Prominent call-to-action
   - WhatsApp and phone order buttons
   - Gradient background card

5. **Special Notes Section**
   - Important menu information
   - Customization options
   - Dietary information
   - Pricing notes

**Key Features:**

- Visual menu highlights
- Easy ordering options
- Customer-friendly notes
- Responsive grid layout

---

### 4. Contact Page (`/contact`)

**File:** `app/contact/page.tsx`

**Sections:**

1. **Hero Section**
   - Welcoming message
   - Contact invitation

2. **Quick Contact Methods**
   - Three clickable cards:
     - Call Us (tel: link)
     - WhatsApp (direct link)
     - Visit Us (Google Maps)
   - Hover effects and animations

3. **Main Contact Section** (Reused Component)
   - Google Maps integration
   - Contact information cards
   - Contact form with validation

4. **Opening Hours Detailed**
   - Day-by-day schedule
   - Highlighted special days (Wed & Sun)
   - Visual table format

5. **FAQ Section**
   - Four common questions:
     - Delivery availability
     - Reservations policy
     - Vegetarian options
     - Payment methods
   - Expandable format

6. **Directions Section**
   - Get Directions CTA
   - Google Maps link

**Unique Content:**

- Multiple contact methods
- Detailed FAQ
- Complete opening hours
- Interactive contact cards

---

### 5. Gallery Page (`/gallery`)

**File:** `app/gallery/page.tsx`

**Sections:**

1. **Hero Section**
   - Camera icon
   - Gallery introduction

2. **Main Gallery Section** (Reused Component)
   - Masonry grid layout
   - Food photography
   - Responsive images

3. **Social Media Section**
   - Instagram link (purple gradient button)
   - Facebook link (blue button)
   - Follow us CTA

4. **Tag Us Section**
   - User-generated content invitation
   - @almaidahcafe handle
   - Engagement encouragement

**Key Features:**

- Visual-first design
- Social media integration
- User engagement focus
- Responsive masonry grid

---

## Common Elements Across Pages

### Navigation

- Fixed navbar with scroll effects
- Mobile-responsive menu
- Order Now button (WhatsApp link)
- Smooth scroll to sections

### Footer

- Four-column layout (responsive)
- Logo and tagline
- Quick navigation links
- Opening hours summary
- Social media icons
- Copyright information
- Floating WhatsApp button

### Animations

- Framer Motion page transitions
- Scroll-triggered animations
- Hover effects on interactive elements
- Smooth fade-in/slide-in effects

### Responsive Design

- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Responsive typography (14px mobile, 16px desktop)
- Flexible grid layouts
- Touch-friendly buttons (44px minimum)

---

## Page-Specific Features

### About Page

- Extended storytelling
- Values showcase
- Detailed contact info cards
- Multiple reused components

### Menu Page

- Category highlights
- Special notes section
- Dual CTA buttons
- Menu customization info

### Contact Page

- Multiple contact methods
- Comprehensive FAQ
- Detailed opening hours
- Interactive contact cards

### Gallery Page

- Social media focus
- User engagement CTA
- Visual-heavy design
- Brand handle promotion

---

## SEO Considerations

### Meta Information

Each page should include:

- Unique page title
- Meta description
- Open Graph tags
- Canonical URL

### Recommended Titles

- Home: "Almaidah Cafe - Authentic Fast Food in Hayatabad, Peshawar"
- About: "About Us - Almaidah Cafe | Our Story & Values"
- Menu: "Our Menu - Burgers, Pizza, Shawarma | Almaidah Cafe"
- Contact: "Contact Us - Almaidah Cafe Hayatabad | Location & Hours"
- Gallery: "Gallery - Food Photos | Almaidah Cafe Peshawar"

---

## Navigation Links

### Main Navigation

- Home: `/`
- Menu: `/menu`
- About: `/about`
- Gallery: `/gallery`
- Contact: `/contact`

### Footer Links

Same as main navigation

### External Links

- WhatsApp: `https://wa.me/923454295298`
- Instagram: `https://www.instagram.com/almaidahcafe`
- Facebook: `https://www.facebook.com/almaidahcafepeshawar/`
- Google Maps: `https://maps.google.com/?q=Almaidah+Cafe+Peshawar`
- Phone: `tel:+923454295298`

---

## Component Reusability

### Reused Components

- `<About />` - Used on Home and About pages
- `<Features />` - Used on Home and About pages
- `<Menu />` - Used on Home and Menu pages
- `<Gallery />` - Used on Home and Gallery pages
- `<Testimonials />` - Used on Home and About pages
- `<Contact />` - Used on Home and Contact pages

### Benefits

- Consistent design across pages
- Easier maintenance
- Reduced code duplication
- Faster page load times

---

## Performance Optimization

### Images

- Use Next.js Image component
- Lazy loading for below-fold images
- Responsive image sizes
- WebP format with fallbacks

### Code Splitting

- Automatic with Next.js App Router
- Component-level code splitting
- Dynamic imports for heavy components

### Caching

- Static page generation where possible
- API route caching
- Browser caching headers

---

## Accessibility

### WCAG Compliance

- Semantic HTML structure
- ARIA labels on interactive elements
- Keyboard navigation support
- Focus-visible states (gold rings)
- Sufficient color contrast
- Alt text on images

### Screen Reader Support

- Proper heading hierarchy
- Descriptive link text
- Form labels and validation
- Skip-to-content links

---

## Future Enhancements

### Potential Additions

- [ ] Online ordering system
- [ ] User accounts and order history
- [ ] Loyalty program page
- [ ] Blog/News section
- [ ] Careers page
- [ ] Catering services page
- [ ] Special offers page
- [ ] Nutrition information

### Technical Improvements

- [ ] Add structured data (Schema.org)
- [ ] Implement PWA features
- [ ] Add page transitions
- [ ] Optimize Core Web Vitals
- [ ] Add analytics tracking
- [ ] Implement A/B testing

---

## Maintenance Guidelines

### Regular Updates

- Update menu items and prices
- Refresh gallery images
- Add new testimonials
- Update opening hours for holidays
- Keep social media links current

### Content Review

- Check for broken links monthly
- Update contact information as needed
- Refresh "About" story periodically
- Add seasonal menu items
- Update FAQ based on customer questions

### Technical Maintenance

- Monitor page load times
- Check mobile responsiveness
- Test form submissions
- Verify map integration
- Update dependencies regularly
