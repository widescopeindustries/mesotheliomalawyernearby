import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Phone, MapPin, Clock, Shield, AlertTriangle, CheckCircle, Scale, Building, HelpCircle, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { TARGET_KEYWORDS, EXPOSURE_SITES, STATE_SOL, COMMON_FAQS } from '@/data/keywords'
import { EXPOSURE_SITE_DETAILS } from '@/data/exposure-sites'

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

  return {
    title: `${keyword.city}, ${keyword.state} Mesothelioma Lawyer - Free Consultation | Veteran-Owned`,
    description: `Find an experienced mesothelioma attorney in ${keyword.city}, ${keyword.state}. Veteran-owned referral service. Free consultation. We help asbestos exposure victims get the compensation they deserve.`,
    keywords: [
      `${keyword.city.toLowerCase()} mesothelioma lawyer`,
      `${keyword.state.toLowerCase()} mesothelioma attorney`,
      `${keyword.city.toLowerCase()} asbestos lawyer`,
      `${keyword.state.toLowerCase()} asbestos attorney`,
      'mesothelioma lawsuit',
      'asbestos compensation',
      'veteran mesothelioma help'
    ],
    openGraph: {
      title: `${keyword.city}, ${keyword.state} Mesothelioma Lawyers | Veteran-Owned Service`,
      description: `Veteran-owned mesothelioma legal referral service for ${keyword.city} residents. Connect with experienced attorneys who specialize in asbestos exposure cases.`,
      type: 'website',
      url: `https://mesotheliomalawyernearby.vercel.app/location/${params.slug}`,
    },
    alternates: {
      canonical: `https://mesotheliomalawyernearby.vercel.app/location/${params.slug}`
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
  const localPhone = '(682) 999-0953'
  const selectedFaqs = COMMON_FAQS.slice(0, 5)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-primary/5 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-primary/20 text-primary">
              <Shield className="h-4 w-4 mr-1 inline" />
              Veteran-Owned Service
            </Badge>

            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              {keyword.city}, {keyword.state} Mesothelioma Lawyer
            </h1>

            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              If you or a loved one was diagnosed with mesothelioma in {keyword.city}, our veteran-owned
              service connects you with experienced attorneys who fight for maximum compensation.
            </p>

            {/* Trust Signals */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center gap-2 bg-background px-4 py-2 rounded-full shadow-sm">
                <Clock className="h-5 w-5 text-green-600" />
                <span className="text-sm font-medium">24/7 Available</span>
              </div>
              <div className="flex items-center gap-2 bg-background px-4 py-2 rounded-full shadow-sm">
                <CheckCircle className="h-5 w-5 text-blue-600" />
                <span className="text-sm font-medium">Free Consultation</span>
              </div>
              <div className="flex items-center gap-2 bg-background px-4 py-2 rounded-full shadow-sm">
                <Scale className="h-5 w-5 text-purple-600" />
                <span className="text-sm font-medium">$0 Unless You Win</span>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="text-lg px-8 py-6 h-auto bg-green-600 hover:bg-green-700" asChild>
                <a href={`tel:${localPhone.replace(/[^\d]/g, '')}`}>
                  <Phone className="h-5 w-5 mr-2" />
                  {localPhone}
                  <span className="ml-2 text-xs bg-white/20 px-2 py-1 rounded">Free Call</span>
                </a>
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 h-auto" asChild>
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

      {/* Why Choose Us */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4">
              Why Choose Mesothelioma Lawyer Nearby in {keyword.city}?
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
              As a veteran-owned service, we understand the urgency of mesothelioma cases and the
              importance of working with attorneys who specialize in asbestos litigation.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Scale className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Specialized Attorneys</h3>
                  <p className="text-muted-foreground">
                    We only connect you with attorneys who specialize in mesothelioma and
                    asbestos cases - not general practice lawyers.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">No Upfront Costs</h3>
                  <p className="text-muted-foreground">
                    All attorneys in our network work on contingency - you pay nothing
                    unless you receive compensation.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Veteran-Owned</h3>
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
              Compensation for {keyword.city} Mesothelioma Victims
            </h2>

            <Card className="border-2 border-primary/20">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold mb-4">What You May Recover:</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span><strong>Medical Expenses</strong> - Past and future treatment costs</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span><strong>Lost Wages</strong> - Income lost due to illness</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span><strong>Pain & Suffering</strong> - Physical and emotional distress</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span><strong>Loss of Consortium</strong> - Impact on family relationships</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span><strong>Punitive Damages</strong> - When companies acted recklessly</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-primary/5 p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-4">Average Compensation:</h3>
                    <div className="space-y-4">
                      <div>
                        <div className="text-3xl font-bold text-primary">$1 - $1.4 Million</div>
                        <p className="text-sm text-muted-foreground">Average Settlement</p>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-primary">$2.4 Million+</div>
                        <p className="text-sm text-muted-foreground">Average Trial Verdict</p>
                      </div>
                      <div>
                        <div className="text-xl font-bold text-green-600">$30+ Billion</div>
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

      {/* FAQ Section */}
      <section className="py-16 bg-muted/40">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 justify-center mb-8">
              <HelpCircle className="h-8 w-8 text-primary" />
              <h2 className="text-3xl font-bold">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-4">
              {selectedFaqs.map((faq, index) => (
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
              Get Your Free {keyword.city} Mesothelioma Case Review
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Time is critical. Contact us today for a free, confidential consultation with
              an experienced mesothelioma attorney.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="text-lg px-8 py-6 h-auto bg-white text-primary hover:bg-gray-100"
                asChild
              >
                <a href={`tel:${localPhone.replace(/[^\d]/g, '')}`}>
                  <Phone className="h-5 w-5 mr-2" />
                  Call Now: {localPhone}
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-6 h-auto border-white text-white hover:bg-white hover:text-primary"
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

      {/* Related Locations */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-8">
              Other Locations We Serve
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {TARGET_KEYWORDS.filter(k => k.slug !== keyword.slug).slice(0, 8).map((location) => (
                <Link
                  key={location.slug}
                  href={`/location/${location.slug}`}
                  className="px-4 py-2 bg-muted hover:bg-primary/10 rounded-full text-sm font-medium transition-colors"
                >
                  <MapPin className="h-3 w-3 inline mr-1" />
                  {location.city}, {location.state}
                </Link>
              ))}
            </div>
            <p className="text-center text-muted-foreground mt-4 text-sm">
              We connect mesothelioma victims with attorneys nationwide
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}