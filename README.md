# Al Maidah Cafe

A modern Next.js 14 application built with the App Router architecture, featuring a sophisticated black and golden yellow brand identity.

## Brand Colors

- **Near-Black**: `#0a0a0a` - Primary background color (softer on eyes than pure black)
- **Golden Yellow**: `#EFB713` - Primary accent and text color
- **Dark Gold**: `#C99A0E` - Hover states and darker accents
- **Cream**: `#FDF6DC` - Subtle warm backgrounds and highlights

## CSS Variables

The project uses CSS variables for consistent theming:

- `--gold`: #EFB713
- `--black`: #0a0a0a

## Design Features

- **Custom Box Shadow**: `shadow-glow-gold` - Golden glow effect for interactive elements
- **Noise Texture**: `bg-noise` - Subtle grain overlay for warm, aged-cafe aesthetic
- **Diagonal Lines**: `bg-diagonal-lines` and `bg-diagonal-lines-subtle` - Repeating diagonal pattern for texture
- **Cafe Divider**: `.cafe-divider` with `.cafe-divider-icon` - Decorative section separator with centered diamond
- **Smooth Scroll**: Global smooth scrolling behavior enabled
- **Custom Selection**: Text selection highlights in gold with black text
- **Typography**:
  - Display font (Playfair Display) for headings - `font-display`
  - Body font (Nunito Sans) for readable content - `font-body`

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Theme Management**: next-themes
- **Fonts**: Google Fonts (Nunito Sans & Playfair Display)

## Project Structure

```
almaidah-cafe/
├── app/                 # Next.js App Router pages and layouts
│   ├── demo/           # Demo page with navbar showcase
│   ├── showcase/       # Design system showcase
│   └── ...
├── components/          # Reusable React components
│   ├── ui/             # UI components (buttons, cards, etc.)
│   ├── Navbar.tsx      # Main navigation component
│   ├── Hero.tsx        # Hero section component
│   └── theme-provider.tsx
├── lib/                # Utility functions and helpers
├── public/             # Static assets (images, fonts, etc.)
│   └── hero-bg.jpg    # Hero background image (add your own)
├── styles/             # Additional styles (if needed)
└── ...config files
```

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Design System

### Colors

- Use `bg-brand-black` and `text-brand-gold` for primary styling
- Use `bg-brand-gold` and `text-brand-black` for CTAs and highlights
- Hover states use opacity variations or `brand-darkgold`
- CSS variables: `var(--gold)` and `var(--black)` available globally

### Typography

- **Display Font**: Playfair Display - Use `font-display` for headings
- **Body Font**: Nunito Sans - Use `font-body` for body text

### Decorative Elements

- **Cafe Divider**: Use `.cafe-divider` with `.cafe-divider-icon` for section separators
- **Background Textures**:
  - `.bg-noise` - Subtle grain texture
  - `.bg-diagonal-lines` - Diagonal stripe pattern
  - `.bg-diagonal-lines-subtle` - More subtle diagonal pattern

### Components

All components follow the black and gold color scheme with consistent hover effects and transitions.

#### Key Components

- **Navbar**: Sticky navigation with backdrop blur, animated links, and mobile hamburger menu
- **Hero**: Full-viewport hero section with layered backgrounds, dramatic typography, and CTAs
- **Button**: Primary, outline, and ghost variants with hover animations
- **Card**: Content cards with golden borders and hover effects
- **CafeDivider**: Decorative section separator with diamond icon

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## License

MIT
