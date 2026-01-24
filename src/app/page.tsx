import { CallToAction } from '@/components/CallToAction'
import { HeroSection } from '@/components/HeroSection'
import { TrustSignals } from '@/components/TrustSignals'
import { HowItWorks } from '@/components/HowItWorks'
import { FeaturedLocations } from '@/components/FeaturedLocations'
import { TCPAConsentForm } from '@/components/TCPAConsentForm'
import { AdminDashboard } from '@/components/AdminDashboard'

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <TrustSignals />
      <HowItWorks />
      <FeaturedLocations />
      <TCPAConsentForm />
      <AdminDashboard />
    </main>
  )
}