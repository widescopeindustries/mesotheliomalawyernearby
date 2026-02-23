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
import { COMMON_FAQS } from '@/data/keywords'

const homepageFaqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  'mainEntity': COMMON_FAQS.map(faq => ({
    '@type': 'Question',
    'name': faq.question,
    'acceptedAnswer': {
      '@type': 'Answer',
      'text': faq.answer
    }
  }))
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <SchemaMarkup />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageFaqSchema) }}
      />
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