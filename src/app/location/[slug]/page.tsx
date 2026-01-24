import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Phone, MapPin, Users, Clock, Shield, AlertTriangle } from 'lucide-react'
import Link from 'next/link'
import { TARGET_KEYWORDS, EXPOSURE_SITES } from '@/data/keywords'

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
    title: `${keyword.city}, ${keyword.state} Mesothelioma Lawyer - Veteran-Owned Legal Help`,
    description: `Connect with experienced mesothelioma attorneys in ${keyword.city}, ${keyword.state}. As a veteran-owned service, we understand the urgency of asbestos exposure cases. Free consultation.`,
    keywords: [
      `${keyword.city.toLowerCase()} mesothelioma lawyer`,
      `${keyword.state.toLowerCase()} mesothelioma attorney`, 
      'asbestos lawsuit',
      'veteran mesothelioma help',
      'mesothelioma compensation'
    ],
    openGraph: {
      title: `${keyword.city}, ${keyword.state} Mesothelioma Lawyers | Veteran-Owned Service`,
      description: `Veteran-owned mesothelioma legal referral service for ${keyword.city} residents. Get help from experienced attorneys who understand asbestos exposure cases.`,
      type: 'website',
      url: `https://mesothelioma-legal-help.com/location/${params.slug}`,
    },
    alternates: {
      canonical: `https://mesothelioma-legal-help.com/location/${params.slug}`
    }
  }
}

export default function LocationPage({ params }: LocationPageProps) {
  const keyword = TARGET_KEYWORDS.find(k => k.slug === params.slug)
  
  if (!keyword) {
    return <div>Location not found</div>
  }

  const exposureSites = EXPOSURE_SITES[keyword.state as keyof typeof EXPOSURE_SITES] || []
  const phoneNumbers = {
    'new-mexico/albuquerque': '(505) 555-0123',
    'missouri/st-louis': '(314) 555-0123', 
    'california/los-angeles': '(213) 555-0123',
    'new-jersey/newark': '(973) 555-0123',
    'montana/billings': '(406) 555-0123',
    'kentucky/louisville': '(502) 555-0123',
    'illinois/chicago': '(312) 555-0123',
    'michigan/detroit': '(313) 555-0123'
  }

  const localPhone = phoneNumbers[keyword.slug as keyof typeof phoneNumbers] || '(800) 123-4567'

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-primary/5 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-green-100 text-green-800">
              KD {keyword.kd} • CPC ${keyword.cpc}
            </Badge>
            
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              {keyword.city}, {keyword.state} Mesothelioma Lawyer
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Veterans helping {keyword.city} residents get experienced legal help for mesothelioma. 
              <span className="font-semibold text-primary">Free consultation, no upfront costs.</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button size="lg" className="text-lg px-8 py-6 h-auto bg-green-600 hover:bg-green-700 text-white">
                <Phone className="h-5 w-5 mr-2" />
                {localPhone}
                <span className="ml-2 text-xs bg-yellow-400 text-black px-2 py-1 rounded">24/7</span>
              </Button>
              
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 h-auto">
                Check Eligibility Free
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">{keyword.volume}</div>
                <div className="text-sm text-muted-foreground">Monthly Searches</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">{keyword.kd}</div>
                <div className="text-sm text-muted-foreground">Keyword Difficulty</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">${keyword.cpc}</div>
                <div className="text-sm text-muted-foreground">Cost Per Click</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local Asbestos Exposure Sites */}
      {exposureSites.length > 0 && (
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                Known Asbestos Exposure Sites in {keyword.state}
              </h2>
              <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
                If you or a loved one worked at these {keyword.state} facilities, you may have been exposed to asbestos. 
                Time is critical for mesothelioma cases.
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {exposureSites.map((site, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-3">
                        <div className="h-10 w-10 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <AlertTriangle className="h-5 w-5 text-red-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">{site.name}</h3>
                          <p className="text-sm text-muted-foreground">{site.city}</p>
                          <Badge variant="outline" className="text-xs">
                            {site.type}
                          </Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="mt-12 p-6 bg-red-50 border border-red-200 rounded-lg text-center">
                <h3 className="text-xl font-semibold text-red-900 mb-3">
                  ⚠️ Time-Sensitive: Your Rights At Risk
                </h3>
                <p className="text-red-800">
                  {keyword.state} has strict time limits for filing mesothelioma claims. 
                  Don&apos;t wait - call now to protect your right to compensation.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Veteran-Specific Support */}
      <section className="py-16 bg-muted/40">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-primary/20 shadow-xl">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-8 w-8 text-primary" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">
                    Veteran-to-Veteran Support
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    As service-disabled veterans, we understand the unique challenges you face. 
                    One-third of all mesothelioma cases affect veterans.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-semibold text-lg mb-4">Military Exposure</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <div className="h-2 w-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span>Naval ships with asbestos insulation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="h-2 w-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span>Military bases and training facilities</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="h-2 w-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span>Shipyards and drydocks</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="h-2 w-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span>Military housing construction</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-lg mb-4">VA Benefits Available</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <div className="h-2 w-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span>100% disability rating for mesothelioma</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="h-2 w-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Free VA healthcare</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="h-2 w-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Dependency benefits for family</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="h-2 w-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span>No-cost VA claims assistance</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-8 text-center">
                  <Link href="/veteran-resources">
                    <Button variant="outline" size="lg" className="text-lg px-8 py-6 h-auto">
                      Veteran Resources Center
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Locally */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              How {keyword.city} Mesothelioma Claims Work
            </h2>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">1. Call Us</h3>
                <p className="text-sm text-muted-foreground">
                  Free consultation with {keyword.state}-licensed attorneys who understand local exposure sites
                </p>
              </div>

              <div className="text-center">
                <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">2. Local Review</h3>
                <p className="text-sm text-muted-foreground">
                  We match you with attorneys experienced with {keyword.city} asbestos exposure cases
                </p>
              </div>

              <div className="text-center">
                <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">3. File Claim</h3>
                <p className="text-sm text-muted-foreground">
                  Your attorney files against companies responsible for your asbestos exposure
                </p>
              </div>

              <div className="text-center">
                <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">4. Get Compensation</h3>
                <p className="text-sm text-muted-foreground">
                  No fees unless you win. Average settlement: $1M - $1.4M
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary-foreground/20 backdrop-blur-sm px-4 py-2 rounded-full mb-8">
              <Shield className="h-5 w-5" />
              <span className="text-sm font-semibold">Veteran-Owned • Trusted • Confidential</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {keyword.city} Residents: Get Legal Help Now
            </h2>
            
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Don&apos;t let time run out on your mesothelioma claim. 
              <span className="font-bold">Call today for immediate help from attorneys who understand {keyword.state} asbestos exposure cases.</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 h-auto bg-background text-foreground hover:bg-background/90"
                asChild
              >
                <a href={`tel:${localPhone}`}>
                  <Phone className="h-5 w-5 mr-2" />
                  {localPhone}
                  <span className="ml-2 text-xs bg-green-600 text-white px-2 py-1 rounded">Call Now</span>
                </a>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-6 h-auto border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                Start Free Assessment
              </Button>
            </div>

            <div className="mt-8 text-sm opacity-90">
              <p>24/7 Availability • Free Consultation • No Upfront Costs</p>
              <p className="mt-2">© 2026 Widescope Industries LLC - Service-Disabled Veteran-Owned Small Business</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}