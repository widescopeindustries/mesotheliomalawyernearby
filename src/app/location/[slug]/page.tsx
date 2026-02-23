import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Phone, MapPin, Clock, Shield, AlertTriangle, CheckCircle, Scale, Building, HelpCircle, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { TARGET_KEYWORDS, EXPOSURE_SITES, STATE_SOL } from '@/data/keywords'
import { EXPOSURE_SITE_DETAILS } from '@/data/exposure-sites'
import { SchemaMarkup } from '@/components/SchemaMarkup'
import { CallButton } from '@/components/CallButton'
import { QuickAnswer } from '@/components/QuickAnswer'
import { BLOG_POSTS } from '@/data/blog/posts'

interface LocationPageProps {
  params: {
    slug: string
  }
}

// Generate static params for all target locations
export async function generateStaticParams() {
  return TARGET_KEYWORDS.map((keyword) => ({
    slug: keyword.slug
  }))
}

// Generate metadata for each location page
export async function generateMetadata({ params }: LocationPageProps): Promise<Metadata> {
  const keyword = TARGET_KEYWORDS.find(k => k.slug === params.slug)

  if (!keyword) {
    return {
      title: 'Location Not Found',
      description: 'This location page is not available.'
    }
  }

  // Use custom meta title for state pages, otherwise generate city-based title
  const pageTitle = (keyword as any).metaTitle
    ? (keyword as any).metaTitle
    : `${keyword.city}, ${keyword.state} Mesothelioma Lawyer - Free Consultation | Veteran-Owned`

  const isStatePage = (keyword as any).isStatePage
  const locationDesc = isStatePage
    ? keyword.state
    : `${keyword.city}, ${keyword.state}`

  return {
    title: pageTitle,
    description: `Find an experienced mesothelioma attorney in ${locationDesc}. Veteran-owned referral service. Free consultation. We help asbestos exposure victims get the compensation they deserve.`,
    keywords: [
      `${keyword.state.toLowerCase()} mesothelioma lawyer`,
      `${keyword.state.toLowerCase()} mesothelioma attorney`,
      `${keyword.state.toLowerCase()} asbestos lawyer`,
      isStatePage ? `mesothelioma lawyer ${keyword.state.toLowerCase()}` : `${keyword.city.toLowerCase()} mesothelioma lawyer`,
      'mesothelioma lawsuit',
      'asbestos compensation',
      'veteran mesothelioma help'
    ],
    openGraph: {
      title: pageTitle,
      description: `Veteran-owned mesothelioma legal referral service for ${locationDesc} residents. Connect with experienced attorneys who specialize in asbestos exposure cases.`,
      type: 'website',
      url: `https://mesotheliomalawyernearby.com/location/${params.slug}`,
    },
    alternates: {
      canonical: `https://mesotheliomalawyernearby.com/location/${params.slug}`
    }
  }
}

export default function LocationPage({ params }: LocationPageProps) {
  const keyword = TARGET_KEYWORDS.find(k => k.slug === params.slug)

  if (!keyword) {
    return <div>Location not found</div>
  }

  const exposureSites = EXPOSURE_SITES[keyword.state as keyof typeof EXPOSURE_SITES] || []
  const stateSol = STATE_SOL[keyword.state as keyof typeof STATE_SOL]
  const localPhone = '(214) 699-4543'

  // Check if this is a state-level page
  const isStatePage = (keyword as any).isStatePage || keyword.city === 'Statewide'
  const displayLocation = isStatePage ? keyword.state : `${keyword.city}, ${keyword.state}`
  const h1Title = isStatePage
    ? `${keyword.state} Mesothelioma Lawyer`
    : `${keyword.city}, ${keyword.state} Mesothelioma Lawyer`

  // Location-specific FAQs for GEO optimization
  const locationFaqs = [
    {
      question: `How do I find a mesothelioma lawyer in ${keyword.state}?`,
      answer: `Mesothelioma lawyers in ${keyword.state} typically work on contingency — no upfront cost. Most firms offer free consultations. Cases involving asbestos exposure at ${keyword.state} job sites or military bases are common. Settlements typically range from $1–$1.4M.`
    },
    {
      question: `How long does a mesothelioma lawsuit take in ${keyword.state}?`,
      answer: `Most mesothelioma lawsuits in ${keyword.state} are resolved within 12 to 18 months. Some cases settle in as little as 90 days through asbestos trust fund claims. Your attorney will work to expedite the process given the urgency of mesothelioma cases.`
    },
    {
      question: `What compensation can mesothelioma victims receive in ${keyword.state}?`,
      answer: `Mesothelioma victims in ${keyword.state} may recover compensation for medical expenses, lost wages, pain and suffering, and loss of consortium. The average mesothelioma settlement is $1 million to $1.4 million, with trial verdicts averaging $2.4 million or more.`
    },
    {
      question: `Is there a statute of limitations for mesothelioma claims in ${keyword.state}?`,
      answer: `Yes, ${keyword.state} has a statute of limitations for mesothelioma claims.${stateSol ? ` You have ${stateSol.personal} from diagnosis to file a personal injury claim and ${stateSol.wrongfulDeath} for wrongful death claims.` : ' The deadline varies — contact an attorney immediately after diagnosis to protect your rights.'}`
    },
    {
      question: `Do mesothelioma lawyers in ${keyword.state} work on contingency?`,
      answer: `Yes, virtually all mesothelioma lawyers in ${keyword.state} work on a contingency fee basis. This means you pay nothing upfront and owe no legal fees unless your attorney wins compensation for you. Typical contingency fees range from 25% to 40% of the recovery.`
    },
    {
      question: `What is the average mesothelioma settlement in ${keyword.state}?`,
      answer: `The average mesothelioma settlement in ${keyword.state} ranges from $1 million to $1.4 million. However, amounts vary based on exposure history, responsible companies, medical costs, and other factors. Some ${keyword.state} cases have resulted in settlements exceeding $2 million.`
    }
  ]

  // FAQPage JSON-LD schema for GEO optimization
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': locationFaqs.map(faq => ({
      '@type': 'Question',
      'name': faq.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': faq.answer
      }
    }))
  }

  return (
    <div className="min-h-screen">
      <SchemaMarkup />
      {/* FAQPage JSON-LD Schema for GEO optimization */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-primary/5 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-primary/20 text-primary">
              <Shield className="h-4 w-4 mr-1 inline" />
              Veteran-Owned Service
            </Badge>

            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              {h1Title}
            </h1>

            <p className="text-xl text-muted-foreground mb-6 max-w-3xl mx-auto">
              If you or a loved one was diagnosed with mesothelioma in {displayLocation}, our veteran-owned
              service connects you with experienced attorneys who fight for maximum compensation.
            </p>

            {/* Key Stats with Citations - GEO optimization */}
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-8 max-w-3xl mx-auto text-sm text-muted-foreground">
              <span>Mesothelioma affects approximately <strong className="text-foreground">3,000 Americans</strong> each year <cite className="not-italic text-xs">(American Cancer Society)</cite>.</span>
              <span>The average mesothelioma settlement is <strong className="text-foreground">$1 million to $1.4 million</strong> <cite className="not-italic text-xs">(Mesothelioma Center, 2024)</cite>.</span>
              <span>Over <strong className="text-foreground">70% of mesothelioma cases</strong> are linked to occupational asbestos exposure <cite className="not-italic text-xs">(National Cancer Institute)</cite>.</span>
            </div>

            {/* Trust Signals */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center gap-2 bg-background px-4 py-2 rounded-full shadow-sm transition-all duration-200 hover:shadow-md hover:bg-muted">
                <Clock className="h-5 w-5 text-accent" />
                <span className="text-sm font-medium">24/7 Available</span>
              </div>
              <div className="flex items-center gap-2 bg-background px-4 py-2 rounded-full shadow-sm transition-all duration-200 hover:shadow-md hover:bg-muted">
                <CheckCircle className="h-5 w-5 text-secondary" />
                <span className="text-sm font-medium">Free Consultation</span>
              </div>
              <div className="flex items-center gap-2 bg-background px-4 py-2 rounded-full shadow-sm transition-all duration-200 hover:shadow-md hover:bg-muted">
                <Scale className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">$0 Unless You Win</span>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <CallButton
                phoneNumber={localPhone}
                location={`${displayLocation} Hero`}
                className="bg-accent hover:bg-accent/90 text-accent-foreground hover:shadow-xl"
                showBadge
              />
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 h-auto border-2 transition-all duration-200 hover:bg-muted hover:shadow-lg" asChild>
                <Link href="/contact">Request Callback</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Statute of Limitations Warning */}
      {stateSol && (
        <section className="py-8 bg-red-50 border-y border-red-200">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto flex items-start gap-4">
              <AlertTriangle className="h-8 w-8 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-xl font-bold text-red-900 mb-2">
                  ⏰ {keyword.state} Statute of Limitations Warning
                </h2>
                <p className="text-red-800">
                  In {keyword.state}, you have <strong>{stateSol.personal}</strong> from diagnosis to file
                  a personal injury claim and <strong>{stateSol.wrongfulDeath}</strong> for wrongful death claims.
                  {stateSol.notes && ` ${stateSol.notes}.`}
                  <strong> Don&apos;t wait - contact an attorney today.</strong>
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Quick Answer Box - GEO optimization (above main content) */}
      <section className="py-8 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <QuickAnswer
              question={`How do I find a mesothelioma lawyer in ${keyword.state}?`}
              answer={`Mesothelioma victims in ${keyword.state} may be entitled to compensation through lawsuits, trust funds, or VA claims. The average mesothelioma settlement is $1–$1.4 million. Most attorneys work on contingency — no upfront cost.${stateSol ? ` In ${keyword.state}, you have ${stateSol.personal} from diagnosis to file a personal injury claim.` : ''}`}
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4">
              Why Choose Mesothelioma Lawyer Nearby in {displayLocation}?
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
              As a veteran-owned service, we understand the urgency of mesothelioma cases and the
              importance of working with attorneys who specialize in asbestos litigation.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center transition-all duration-200 hover:shadow-xl hover:scale-105 hover:border-accent/50">
                <CardContent className="p-8">
                  <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-200 hover:bg-primary/20 hover:scale-110">
                    <Scale className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl font-bold mb-3">Specialized Attorneys</h3>
                  <p className="text-muted-foreground">
                    We only connect you with attorneys who specialize in mesothelioma and
                    asbestos cases - not general practice lawyers.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center transition-all duration-200 hover:shadow-xl hover:scale-105 hover:border-accent/50">
                <CardContent className="p-8">
                  <div className="h-16 w-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-200 hover:bg-secondary/20 hover:scale-110">
                    <CheckCircle className="h-8 w-8 text-secondary" />
                  </div>
                  <h3 className="font-serif text-xl font-bold mb-3">No Upfront Costs</h3>
                  <p className="text-muted-foreground">
                    All attorneys in our network work on contingency - you pay nothing
                    unless you receive compensation.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center transition-all duration-200 hover:shadow-xl hover:scale-105 hover:border-accent/50">
                <CardContent className="p-8">
                  <div className="h-16 w-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-200 hover:bg-accent/20 hover:scale-110">
                    <Shield className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="font-serif text-xl font-bold mb-3">Veteran-Owned</h3>
                  <p className="text-muted-foreground">
                    Our SDVOSB-certified business understands military asbestos exposure
                    and serves with honor.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Local Exposure Sites */}
      {exposureSites.length > 0 && (
        <section className="py-16 bg-muted/40">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center gap-3 justify-center mb-4">
                <Building className="h-8 w-8 text-primary" />
                <h2 className="text-3xl font-bold">
                  Known Asbestos Exposure Sites in {keyword.state}
                </h2>
              </div>
              <p className="text-center text-muted-foreground mb-8 max-w-3xl mx-auto">
                Many {keyword.state} residents were exposed to asbestos at these locations.
                Click on any site to learn about its history and how workers were affected.
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {exposureSites.map((site, index) => {
                  // Check if we have a detailed page for this site
                  const detailedSite = EXPOSURE_SITE_DETAILS.find(
                    s => s.name === site.name || s.city === site.city
                  )

                  const cardContent = (
                    <Card className={`h-full ${detailedSite ? 'hover:shadow-lg hover:border-primary/50 transition-all cursor-pointer group-hover:-translate-y-1' : 'hover:shadow-md transition-shadow'}`}>
                      <CardContent className="p-4">
                        <div className="flex items-start gap-3">
                          <div className="h-10 w-10 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                            <AlertTriangle className="h-5 w-5 text-red-600" />
                          </div>
                          <div className="flex-1">
                            <h3 className={`font-semibold ${detailedSite ? 'group-hover:text-primary transition-colors' : ''}`}>
                              {site.name}
                            </h3>
                            <p className="text-sm text-muted-foreground">{site.city}, {keyword.state}</p>
                            <Badge variant="outline" className="mt-1 text-xs">{site.type}</Badge>
                          </div>
                          {detailedSite && (
                            <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
                          )}
                        </div>
                        {detailedSite && (
                          <p className="text-xs text-primary mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                            View detailed history →
                          </p>
                        )}
                      </CardContent>
                    </Card>
                  )

                  if (detailedSite) {
                    return (
                      <Link key={index} href={`/exposure-sites/${detailedSite.id}`} className="group">
                        {cardContent}
                      </Link>
                    )
                  }

                  return <div key={index}>{cardContent}</div>
                })}
              </div>

              <p className="text-center text-sm text-muted-foreground mt-8">
                This is not a complete list. Many other workplaces in {keyword.state} used asbestos.
                Contact us to investigate your exposure history.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Compensation Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">
              Compensation for {displayLocation} Mesothelioma Victims
            </h2>

            <Card className="border-2 border-primary/20">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-serif text-xl font-bold mb-4">What You May Recover:</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                        <span><strong>Medical Expenses</strong> - Past and future treatment costs</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                        <span><strong>Lost Wages</strong> - Income lost due to illness</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                        <span><strong>Pain & Suffering</strong> - Physical and emotional distress</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                        <span><strong>Loss of Consortium</strong> - Impact on family relationships</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                        <span><strong>Punitive Damages</strong> - When companies acted recklessly</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-accent/10 p-8 rounded-lg transition-all duration-200 hover:bg-accent/15">
                    <h3 className="font-serif text-xl font-bold mb-4">Average Compensation:</h3>
                    <div className="space-y-4">
                      <div>
                        <div className="text-3xl font-bold text-accent">$1 - $1.4 Million</div>
                        <p className="text-sm text-muted-foreground">Average Settlement</p>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-secondary">$2.4 Million+</div>
                        <p className="text-sm text-muted-foreground">Average Trial Verdict</p>
                      </div>
                      <div>
                        <div className="text-xl font-bold text-accent">$30+ Billion</div>
                        <p className="text-sm text-muted-foreground">Available in Asbestos Trust Funds</p>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground mt-4">
                      *Results vary based on individual circumstances
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section - Location-specific for GEO optimization */}
      <section className="py-16 bg-muted/40">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 justify-center mb-8">
              <HelpCircle className="h-8 w-8 text-primary" />
              <h2 className="text-3xl font-bold">
                {keyword.state} Mesothelioma FAQ
              </h2>
            </div>

            <div className="space-y-4">
              {locationFaqs.map((faq, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg mb-2">{faq.question}</h3>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Get Your Free {displayLocation} Mesothelioma Case Review
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Time is critical. Contact us today for a free, confidential consultation with
              an experienced mesothelioma attorney.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <CallButton
                phoneNumber={localPhone}
                location={`${displayLocation} Footer`}
                className="bg-accent text-accent-foreground hover:bg-accent/90 hover:shadow-2xl"
              />
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-6 h-auto border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-all duration-200 hover:shadow-xl"
                asChild
              >
                <Link href="/contact">Request Free Consultation</Link>
              </Button>
            </div>

            <p className="mt-8 text-sm opacity-75">
              <Shield className="h-4 w-4 inline mr-1" />
              SDVOSB Certified Veteran-Owned Service • Serving {keyword.state} Residents Nationwide
            </p>
          </div>
        </div>
      </section>

      {/* Learn More About Mesothelioma */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-6">Learn More About Mesothelioma</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
              <Link href="/types/pleural-mesothelioma" className="px-4 py-3 bg-muted hover:bg-primary/10 rounded-lg text-sm font-medium transition-colors text-center">
                Pleural Mesothelioma
              </Link>
              <Link href="/types/peritoneal-mesothelioma" className="px-4 py-3 bg-muted hover:bg-primary/10 rounded-lg text-sm font-medium transition-colors text-center">
                Peritoneal Mesothelioma
              </Link>
              <Link href="/types/pericardial-mesothelioma" className="px-4 py-3 bg-muted hover:bg-primary/10 rounded-lg text-sm font-medium transition-colors text-center">
                Pericardial Mesothelioma
              </Link>
              <Link href="/mesothelioma-lawsuit" className="px-4 py-3 bg-muted hover:bg-primary/10 rounded-lg text-sm font-medium transition-colors text-center">
                Mesothelioma Lawsuit Guide
              </Link>
              <Link href="/asbestos-lawyer" className="px-4 py-3 bg-muted hover:bg-primary/10 rounded-lg text-sm font-medium transition-colors text-center">
                Asbestos Lawyer
              </Link>
              <Link href="/directory" className="px-4 py-3 bg-muted hover:bg-primary/10 rounded-lg text-sm font-medium transition-colors text-center">
                Lawyer Directory
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Blog Articles */}
      <section className="py-12 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-6">Mesothelioma Resources & Guides</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {BLOG_POSTS.slice(0, 3).map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="block p-4 bg-background rounded-lg border hover:border-primary/50 hover:shadow-sm transition-all group"
                >
                  <span className="text-xs font-semibold uppercase tracking-wide text-primary opacity-70">
                    {post.category === 'legal-process' ? 'Legal Process' :
                     post.category === 'veteran' ? 'Veterans' :
                     post.category === 'medical' ? 'Medical Info' :
                     post.category === 'state-guide' ? 'State Guide' : 'Exposure Site'}
                  </span>
                  <h3 className="font-semibold text-sm mt-2 leading-snug group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <span className="text-primary text-xs font-medium mt-2 inline-block">Read more →</span>
                </Link>
              ))}
            </div>
            <div className="text-center mt-4">
              <Link href="/blog" className="text-primary hover:underline text-sm font-medium">
                View all mesothelioma resources →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Locations */}
      <section className="py-16 bg-muted/40">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-4">
              Other {keyword.state} Locations
            </h2>
            {/* Same-state cities first */}
            {TARGET_KEYWORDS.filter(k => k.state === keyword.state && k.slug !== keyword.slug).length > 0 && (
              <div className="flex flex-wrap justify-center gap-3 mb-6">
                {TARGET_KEYWORDS.filter(k => k.state === keyword.state && k.slug !== keyword.slug).map((location) => (
                  <Link
                    key={location.slug}
                    href={`/location/${location.slug}`}
                    className="px-4 py-2 bg-background hover:bg-primary/10 rounded-full text-sm font-medium transition-colors"
                  >
                    <MapPin className="h-3 w-3 inline mr-1" />
                    {(location as any).isStatePage ? `${location.state} (Statewide)` : location.city}
                  </Link>
                ))}
              </div>
            )}

            <h3 className="text-lg font-semibold text-center mb-4 text-muted-foreground">Nationwide Coverage</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {TARGET_KEYWORDS.filter(k => k.state !== keyword.state && (k as any).isStatePage).slice(0, 12).map((location) => (
                <Link
                  key={location.slug}
                  href={`/location/${location.slug}`}
                  className="px-4 py-2 bg-background hover:bg-primary/10 rounded-full text-sm font-medium transition-colors"
                >
                  {location.state}
                </Link>
              ))}
              <Link href="/directory" className="px-4 py-2 bg-accent/10 hover:bg-accent/20 rounded-full text-sm font-medium transition-colors text-accent">
                View All States →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}