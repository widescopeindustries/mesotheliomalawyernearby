import { EnhancedCallToAction } from '@/components/EnhancedCallToAction'
import { EnhancedHeroSection } from '@/components/EnhancedHeroSection'
import { EnhancedTrustSignals } from '@/components/EnhancedTrustSignals'
import { EnhancedHowItWorks } from '@/components/EnhancedHowItWorks'
import { FeaturedLocations } from '@/components/FeaturedLocations'
import { TCPAConsentForm } from '@/components/TCPAConsentForm'

export default function AnimatedHome() {
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