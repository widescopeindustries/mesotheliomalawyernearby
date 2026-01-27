# Remotion Animations Documentation

## Overview
This mesothelioma lawyer website has been enhanced with perfectly placed animations using Remotion for video content and scroll-triggered animations for the web version.

## Animation Components

### 1. Remotion Video Animations
- **Location**: `src/components/animations/`
- **Components**:
  - `AnimatedHeroSection.tsx` - Hero section with text reveal and phone button animations
  - `AnimatedTrustSignals.tsx` - Trust signals with staggered card animations
  - `AnimatedHowItWorks.tsx` - Step-by-step process with sequential animations
  - `AnimatedCallToAction.tsx` - CTA section with pulse effects and word-by-word reveal

### 2. Enhanced Web Components
- **Location**: `src/components/`
- **Components**:
  - `EnhancedHeroSection.tsx` - Web version with scroll-triggered animations
  - `EnhancedTrustSignals.tsx` - Trust signals with intersection observer animations
  - `EnhancedHowItWorks.tsx` - Process steps with staggered entrance effects
  - `EnhancedCallToAction.tsx` - CTA with hover states and background animations

## Animation Features

### Hero Section
- **Veteran Badge**: Scale and fade-in animation on scroll
- **Title**: Multi-word reveal with individual timing
- **Phone Button**: Pulse animation with hover effects
- **Feature Cards**: Staggered entrance with alternating directions
- **Background**: Floating elements for depth

### Trust Signals
- **Cards**: Staggered entrance with rotation and scale effects
- **Trust Elements**: Alternating slide directions
- **Badges**: Sequential appearance with hover states
- **Icons**: Scale and rotation on hover

### How It Works
- **Step Cards**: Sequential appearance with number badge animations
- **Icons**: Scale-in effects with delays
- **Emergency Section**: Urgent call-to-action with pulse effects
- **Background**: Subtle floating elements

### Call to Action
- **Title**: Word-by-word reveal effect
- **Buttons**: Primary button with continuous pulse
- **Value Props**: Staggered entrance with hover effects
- **Emergency Message**: Warning icon with animation

## Usage Instructions

### For Remotion Video Export
```bash
npm run build  # Build your Next.js app
npx remotion render Hero out/video.mp4
```

### For Web Version
Replace the original components in `src/app/page.tsx`:

```tsx
import { EnhancedHeroSection } from '@/components/EnhancedHeroSection'
import { EnhancedTrustSignals } from '@/components/EnhancedTrustSignals'
import { EnhancedHowItWorks } from '@/components/EnhancedHowItWorks'
import { EnhancedCallToAction } from '@/components/EnhancedCallToAction'

export default function Home() {
  return (
    <main className="min-h-screen">
      <EnhancedHeroSection />
      <EnhancedTrustSignals />
      <EnhancedHowItWorks />
      <FeaturedLocations />
      <TCPAConsentForm />
      <EnhancedCallToAction />
    </main>
  )
}
```

## Animation Utilities

### useScrollAnimation Hook
```tsx
const { ref, isVisible } = useScrollAnimation({ 
  threshold: 0.1, 
  rootMargin: '0px', 
  triggerOnce: true 
});
```

### useStaggeredAnimation Hook
```tsx
const { visibleItems, showItem, reset } = useStaggeredAnimation(itemCount, 150);
```

## CSS Animations
Custom animations added to `tailwind.config.js`:
- `animate-fade-in` - Fade and slide up
- `animate-slide-up/left/right` - Directional slides
- `animate-scale-in` - Scale from 0.8 to 1
- `animate-bounce-in` - Bouncy entrance effect
- `animate-pulse-slow` - Gentle pulse (3s duration)
- `animate-float` - Floating effect (6s duration)
- `animate-glow` - Glowing shadow effect

## Animation Timing
- **Fast transitions**: 300-500ms for hover states
- **Medium transitions**: 600-700ms for entrance animations
- **Slow effects**: 2-6s for continuous animations
- **Stagger delays**: 80-200ms between sequential elements

## Performance Considerations
- Uses `useRef` for intersection observer targets
- Debounced scroll events to prevent performance issues
- CSS transforms instead of layout changes
- Hardware-accelerated animations where possible

## Browser Support
- Modern browsers with Intersection Observer API
- CSS animations supported in all browsers
- Fallback animations for older browsers

## Customization
To modify animation timing or effects:
1. Update `tailwind.config.js` for CSS animations
2. Modify component delays and durations in component files
3. Adjust intersection observer thresholds in `useScrollAnimation`
4. Customize spring physics in Remotion components