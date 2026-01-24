'use client'

import { Button } from '@/components/ui/button'
import { Phone } from 'lucide-react'
import { useEffect, useState } from 'react'

export function StickyMobileCTA() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA after scrolling 300px
      setIsVisible(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      className={`md:hidden fixed bottom-0 left-0 right-0 z-50 p-4 bg-gradient-to-t from-background to-transparent transition-all duration-300 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
      }`}
    >
      <Button
        asChild
        size="lg"
        className="w-full bg-accent hover:bg-accent/90 text-accent-foreground transition-all duration-200 hover:shadow-2xl shadow-lg py-6"
      >
        <a href="tel:682-999-0953" className="flex items-center justify-center gap-2 text-lg font-semibold">
          <Phone className="h-5 w-5" />
          Call Now: (682) 999-0953
        </a>
      </Button>
    </div>
  )
}
