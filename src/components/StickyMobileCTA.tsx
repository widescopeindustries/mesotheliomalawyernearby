'use client'

import { useState, useEffect } from 'react'
import { Phone } from 'lucide-react'
import { trackPhoneClick } from '@/components/Analytics'

export function StickyMobileCTA() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      // Show after scrolling 200px - user is engaged
      if (window.scrollY > 200) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility, { passive: true })
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  // Only show on mobile/tablet
  if (!isVisible) return null

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 lg:hidden"
      style={{
        paddingBottom: 'max(16px, env(safe-area-inset-bottom))'
      }}
    >
      {/* Gradient fade for visual clarity */}
      <div className="absolute inset-x-0 -top-8 h-8 bg-gradient-to-t from-accent/20 to-transparent pointer-events-none" />

      {/* Main CTA - full width, thumb reachable */}
      <a
        href="tel:214-699-4543"
        onClick={() => trackPhoneClick('214-699-4543', 'Sticky Mobile CTA')}
        className="flex items-center justify-center gap-4 bg-accent text-accent-foreground w-full py-5 px-6 shadow-[0_-4px_20px_rgba(0,0,0,0.2)] font-bold text-xl"
        aria-label="Call us now at 214-699-4543"
      >
        <div className="flex items-center gap-4">
          <div className="bg-accent-foreground/20 p-2 rounded-full">
            <Phone className="h-6 w-6" aria-hidden="true" />
          </div>
          <div className="flex flex-col items-start">
            <span className="text-sm font-medium opacity-90">Call Now - Free Consultation</span>
            <span className="text-2xl font-bold">(214) 699-4543</span>
          </div>
        </div>
        <span className="bg-accent-foreground/20 text-sm px-3 py-1.5 rounded-full font-semibold">
          24/7
        </span>
      </a>
    </div>
  )
}
