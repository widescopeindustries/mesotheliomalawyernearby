import { useEffect, useRef, useState } from 'react';

interface AnimationConfig {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export const useScrollAnimation = (config: AnimationConfig = {}) => {
  const { threshold = 0.1, rootMargin = '0px', triggerOnce = true } = config;
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold, rootMargin, triggerOnce]);

  return { ref, isVisible };
};

export const useStaggeredAnimation = (itemCount: number, baseDelay: number = 100) => {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());

  const showItem = (index: number) => {
    setTimeout(() => {
      setVisibleItems(prev => new Set(prev).add(index));
    }, index * baseDelay);
  };

  const reset = () => {
    setVisibleItems(new Set());
  };

  return { visibleItems, showItem, reset };
};

// CSS animation classes for web
export const animationClasses = {
  fadeIn: 'animate-fade-in',
  slideUp: 'animate-slide-up',
  slideLeft: 'animate-slide-left',
  slideRight: 'animate-slide-right',
  scaleIn: 'animate-scale-in',
  bounceIn: 'animate-bounce-in',
  pulse: 'animate-pulse-slow',
  float: 'animate-float',
  glow: 'animate-glow',
  typewriter: 'animate-typewriter',
  highlight: 'animate-highlight',
};

// CSS-in-JS animation styles for more complex animations
export const createAnimationStyle = (animation: string, delay: number = 0) => ({
  animation: `${animation} 0.6s ease-out ${delay}ms both`,
});