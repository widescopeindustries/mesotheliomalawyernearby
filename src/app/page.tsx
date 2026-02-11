import { CallToAction } from '@/components/CallToAction'
import { HeroSection } from '@/components/HeroSection'
import { TrustSignals } from '@/components/TrustSignals'
import { HowItWorks } from '@/components/HowItWorks'
import { FeaturedLocations } from '@/components/FeaturedLocations'
import { TCPAConsentForm } from '@/components/TCPAConsentForm'
import { FAQSection } from '@/components/FAQSection'
import { MesotheliomaInfo } from '@/components/MesotheliomaInfo'
import { SchemaMarkup } from '@/components/SchemaMarkup'
import { AttorneyNetwork } from '@/components/AttorneyNetwork'
import { Testimonials } from '@/components/Testimonials'

export default function Home() {
  return (
    <main className="min-h-screen">
      <SchemaMarkup />
      <HeroSection />
      <TrustSignals />
      <MesotheliomaInfo />
      <AttorneyNetwork />
      <Testimonials />
      <HowItWorks />
      <FeaturedLocations />
      <FAQSection />
      <TCPAConsentForm />
      <CallToAction />
    </main>
  )
}