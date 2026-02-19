import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Phone, Shield, MapPin, Clock, CheckCircle, Scale, Search } from 'lucide-react'
import Link from 'next/link'
import { TARGET_KEYWORDS, STATE_SOL } from '@/data/keywords'

export const metadata: Metadata = {
  title: 'Mesothelioma Lawyer Directory | Find Attorneys by State | Veteran-Owned',
  description: 'Complete mesothelioma lawyer directory. Find experienced asbestos attorneys in all 50 states. Veteran-owned referral service. Free consultations available 24/7.',
  keywords: [
    'mesothelioma lawyer directory',
    'mesothelioma attorney directory',
    'find mesothelioma lawyer',
    'asbestos lawyer directory',
    'mesothelioma lawyer by state'
  ],
  openGraph: {
    title: 'Mesothelioma Lawyer Directory | Find Attorneys Nationwide',
    description: 'Browse our comprehensive directory of mesothelioma lawyers organized by state. Veteran-owned service with free consultations.',
    type: 'website',
    url: 'https://mesotheliomalawyernearby.com/directory',
  },
  alternates: {
    canonical: 'https://mesotheliomalawyernearby.com/directory'
  }
}

const regions = {
  'Northeast': ['Connecticut', 'Delaware', 'Maine', 'Massachusetts', 'Maryland', 'New Hampshire', 'New Jersey', 'New York', 'Pennsylvania', 'Rhode Island', 'Vermont'],
  'Southeast': ['Alabama', 'Arkansas', 'Florida', 'Georgia', 'Kentucky', 'Louisiana', 'Mississippi', 'North Carolina', 'South Carolina', 'Tennessee', 'Virginia', 'West Virginia'],
  'Midwest': ['Illinois', 'Indiana', 'Iowa', 'Kansas', 'Michigan', 'Minnesota', 'Missouri', 'Nebraska', 'North Dakota', 'Ohio', 'Oklahoma', 'South Dakota', 'Wisconsin'],
  'West': ['Alaska', 'Arizona', 'California', 'Colorado', 'Hawaii', 'Idaho', 'Montana', 'Nevada', 'New Mexico', 'Oregon', 'Texas', 'Utah', 'Washington', 'Wyoming'],
}

export default function DirectoryPage() {
  const localPhone = '(214) 699-4543'

  const statePages = TARGET_KEYWORDS.filter(k => (k as any).isStatePage)

  const getStateSlug = (stateName: string) => {
    const page = statePages.find(k => k.state === stateName)
    return page ? `/location/${page.slug}` : null
  }

  const getCitiesForState = (stateName: string) => {
    return TARGET_KEYWORDS.filter(k => k.state === stateName && !(k as any).isStatePage)
  }

  const getSOL = (stateName: string) => {
    return STATE_SOL[stateName as keyof typeof STATE_SOL]
  }

  // Directory schema markup
  const directorySchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Mesothelioma Lawyer Directory",
    "description": "Comprehensive directory of mesothelioma lawyers organized by state",
    "numberOfItems": statePages.length,
    "itemListElement": statePages.map((page, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": `${page.state} Mesothelioma Lawyer`,
      "url": `https://mesotheliomalawyernearby.com/location/${page.slug}`
    }))
  }

  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(directorySchema) }}
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
              Mesothelioma Lawyer Directory
            </h1>

            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Find experienced mesothelioma attorneys in your state. Our veteran-owned referral service
              connects asbestos exposure victims with qualified lawyers across the country.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center gap-2 bg-background px-4 py-2 rounded-full shadow-sm">
                <MapPin className="h-5 w-5 text-accent" />
                <span className="text-sm font-medium">{statePages.length}+ Locations</span>
              </div>
              <div className="flex items-center gap-2 bg-background px-4 py-2 rounded-full shadow-sm">
                <Clock className="h-5 w-5 text-accent" />
                <span className="text-sm font-medium">24/7 Available</span>
              </div>
              <div className="flex items-center gap-2 bg-background px-4 py-2 rounded-full shadow-sm">
                <Scale className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">$0 Unless You Win</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="text-lg px-8 py-6 h-auto bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
                <a href={`tel:${localPhone.replace(/[^\d]/g, '')}`}>
                  <Phone className="h-5 w-5 mr-2" />
                  {localPhone}
                  <span className="ml-2 text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded">Free Call</span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Directory by Region */}
      {Object.entries(regions).map(([regionName, states]) => (
        <section key={regionName} className={`py-16 ${regionName === 'Southeast' || regionName === 'West' ? 'bg-muted/40' : 'bg-background'}`}>
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-10">{regionName} States</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {states.map(stateName => {
                const slug = getStateSlug(stateName)
                const cities = getCitiesForState(stateName)
                const sol = getSOL(stateName)

                return (
                  <Card key={stateName} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="font-bold text-xl">{stateName}</h3>
                        <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
                      </div>

                      {sol && (
                        <p className="text-sm text-muted-foreground mb-3">
                          Filing deadline: <strong>{sol.personal}</strong> (personal injury)
                        </p>
                      )}

                      {cities.length > 0 && (
                        <div className="mb-4">
                          <p className="text-xs text-muted-foreground mb-2">Major regions &amp; cities:</p>
                          <div className="flex flex-wrap gap-1">
                            {cities.map(city => (
                              <Link
                                key={city.slug}
                                href={`/location/${city.slug}`}
                                className="text-[10px] px-1.5 py-0.5 bg-muted hover:bg-primary/20 rounded-md transition-colors border border-transparent hover:border-primary/30"
                              >
                                {city.city}
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}

                      {slug ? (
                        <Button variant="outline" size="sm" className="w-full" asChild>
                          <Link href={slug}>
                            <Search className="h-4 w-4 mr-2" />
                            Find {stateName} Lawyers
                          </Link>
                        </Button>
                      ) : (
                        <Button size="sm" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
                          <a href={`tel:${localPhone.replace(/[^\d]/g, '')}`}>
                            <Phone className="h-4 w-4 mr-2" />
                            Call for {stateName} Help
                          </a>
                        </Button>
                      )}
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Don&apos;t See Your State? We Still Help.
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Our network of mesothelioma attorneys serves all 50 states. Call us for a free consultation
              regardless of where you live.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="text-lg px-8 py-6 h-auto bg-accent text-accent-foreground hover:bg-accent/90" asChild>
                <a href={`tel:${localPhone.replace(/[^\d]/g, '')}`}>
                  <Phone className="h-5 w-5 mr-2" />
                  Call Now: {localPhone}
                </a>
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 h-auto border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                <Link href="/contact">Request Free Consultation</Link>
              </Button>
            </div>

            <p className="mt-8 text-sm opacity-75">
              <Shield className="h-4 w-4 inline mr-1" />
              SDVOSB Certified Veteran-Owned Service
            </p>
          </div>
        </div>
      </section>

      {/* Related Pages */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-6">Related Resources</h2>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/mesothelioma-lawyer-near-me" className="px-4 py-2 bg-muted hover:bg-primary/10 rounded-full text-sm font-medium transition-colors">
                Find a Lawyer Near Me
              </Link>
              <Link href="/best-mesothelioma-lawyers" className="px-4 py-2 bg-muted hover:bg-primary/10 rounded-full text-sm font-medium transition-colors">
                Best Mesothelioma Lawyers
              </Link>
              <Link href="/types/peritoneal-mesothelioma" className="px-4 py-2 bg-muted hover:bg-primary/10 rounded-full text-sm font-medium transition-colors">
                Peritoneal Mesothelioma
              </Link>
              <Link href="/mesothelioma-lawsuit" className="px-4 py-2 bg-muted hover:bg-primary/10 rounded-full text-sm font-medium transition-colors">
                Mesothelioma Lawsuit Guide
              </Link>
              <Link href="/veteran-resources" className="px-4 py-2 bg-muted hover:bg-primary/10 rounded-full text-sm font-medium transition-colors">
                Veteran Resources
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
