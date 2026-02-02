import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Phone, Shield, CheckCircle, Scale, HelpCircle, Clock, MapPin, Building, Globe } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Mesothelioma Lawyer Near Me | Find Local Asbestos Attorneys | Veteran-Owned',
  description: 'Find a mesothelioma lawyer near you. Search by state for experienced asbestos attorneys. Free consultation. Veteran-owned service connecting victims nationwide.',
  keywords: [
    'mesothelioma lawyer near me',
    'mesothelioma attorney near me',
    'local mesothelioma lawyer',
    'asbestos lawyer near me',
    'mesothelioma law firm near me'
  ],
  openGraph: {
    title: 'Mesothelioma Lawyer Near Me | Veteran-Owned Service',
    description: 'Find experienced mesothelioma lawyers in your area. State-by-state directory of top asbestos attorneys.',
    type: 'website',
    url: 'https://mesotheliomalawyernearby.com/mesothelioma-lawyer-near-me',
  },
  alternates: {
    canonical: 'https://mesotheliomalawyernearby.com/mesothelioma-lawyer-near-me'
  }
}

export default function MesotheliomaLawyerNearMePage() {
  const localPhone = '(214) 699-4543'

  const stateLinks = [
    { name: 'Alabama', slug: 'alabama' },
    { name: 'Alaska', slug: 'alaska' },
    { name: 'Arizona', slug: 'arizona' },
    { name: 'Arkansas', slug: 'arkansas' },
    { name: 'California', slug: 'california' },
    { name: 'Colorado', slug: 'colorado' },
    { name: 'Connecticut', slug: 'connecticut' },
    { name: 'Delaware', slug: 'delaware' },
    { name: 'Florida', slug: 'florida' },
    { name: 'Georgia', slug: 'georgia' },
    { name: 'Hawaii', slug: 'hawaii' },
    { name: 'Idaho', slug: 'idaho' },
    { name: 'Illinois', slug: 'illinois' },
    { name: 'Indiana', slug: 'indiana' },
    { name: 'Iowa', slug: 'iowa' },
    { name: 'Kansas', slug: 'kansas' },
    { name: 'Kentucky', slug: 'kentucky' },
    { name: 'Louisiana', slug: 'louisiana' },
    { name: 'Maine', slug: 'maine' },
    { name: 'Maryland', slug: 'maryland' },
    { name: 'Massachusetts', slug: 'massachusetts' },
    { name: 'Michigan', slug: 'michigan' },
    { name: 'Minnesota', slug: 'minnesota' },
    { name: 'Mississippi', slug: 'mississippi' },
    { name: 'Missouri', slug: 'missouri' },
    { name: 'Montana', slug: 'montana' },
    { name: 'Nebraska', slug: 'nebraska' },
    { name: 'Nevada', slug: 'nevada' },
    { name: 'New Hampshire', slug: 'new-hampshire' },
    { name: 'New Jersey', slug: 'new-jersey' },
    { name: 'New Mexico', slug: 'new-mexico' },
    { name: 'New York', slug: 'new-york' },
    { name: 'North Carolina', slug: 'north-carolina' },
    { name: 'North Dakota', slug: 'north-dakota' },
    { name: 'Ohio', slug: 'ohio' },
    { name: 'Oklahoma', slug: 'oklahoma' },
    { name: 'Oregon', slug: 'oregon' },
    { name: 'Pennsylvania', slug: 'pennsylvania' },
    { name: 'Rhode Island', slug: 'rhode-island' },
    { name: 'South Carolina', slug: 'south-carolina' },
    { name: 'South Dakota', slug: 'south-dakota' },
    { name: 'Tennessee', slug: 'tennessee' },
    { name: 'Texas', slug: 'texas' },
    { name: 'Utah', slug: 'utah' },
    { name: 'Vermont', slug: 'vermont' },
    { name: 'Virginia', slug: 'virginia' },
    { name: 'Washington', slug: 'washington' },
    { name: 'West Virginia', slug: 'west-virginia' },
    { name: 'Wisconsin', slug: 'wisconsin' },
    { name: 'Wyoming', slug: 'wyoming' },
  ]

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
              Mesothelioma Lawyer Near Me
            </h1>

            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Find experienced mesothelioma attorneys in your area. Whether you need local court
              expertise or national firm resources, we connect you with the right legal representation.
            </p>

            {/* Trust Signals */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center gap-2 bg-background px-4 py-2 rounded-full shadow-sm">
                <Clock className="h-5 w-5 text-accent" />
                <span className="text-sm font-medium">24/7 Available</span>
              </div>
              <div className="flex items-center gap-2 bg-background px-4 py-2 rounded-full shadow-sm">
                <CheckCircle className="h-5 w-5 text-secondary" />
                <span className="text-sm font-medium">Free Consultation</span>
              </div>
              <div className="flex items-center gap-2 bg-background px-4 py-2 rounded-full shadow-sm">
                <Scale className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">$0 Unless You Win</span>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="text-lg px-8 py-6 h-auto bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
                <a href={`tel:${localPhone.replace(/[^\d]/g, '')}`}>
                  <Phone className="h-5 w-5 mr-2" />
                  {localPhone}
                  <span className="ml-2 text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded">Free Call</span>
                </a>
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 h-auto border-2" asChild>
                <Link href="/contact">Request Callback</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Local Matters */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <MapPin className="h-8 w-8 text-primary" />
              <h2 className="text-3xl font-bold">Finding Mesothelioma Lawyers in Your Area</h2>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground mb-6">
                When searching for a mesothelioma lawyer near you, it helps to understand both the
                advantages of local representation and the benefits of working with a national firm.
                The best approach often combines both: a national firm with local counsel in your state.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Local vs National */}
      <section className="py-16 bg-muted/40">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">
              Local vs. National Mesothelioma Firms
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Building className="h-6 w-6 text-primary" />
                    <h3 className="font-bold text-xl">Why Local Matters</h3>
                  </div>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span>Knowledge of state-specific statutes of limitations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span>Familiarity with local courts and judges</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span>Understanding of regional asbestos exposure sites</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span>In-person meetings when needed</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Globe className="h-6 w-6 text-accent" />
                    <h3 className="font-bold text-xl">Why National Firms Excel</h3>
                  </div>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span>Vast resources for investigation and litigation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span>Extensive asbestos trust fund expertise</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span>Can file in the most favorable jurisdiction</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span>Database of exposure sites and responsible companies</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* State Directory Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 justify-center mb-8">
              <MapPin className="h-8 w-8 text-primary" />
              <h2 className="text-3xl font-bold">Find a Lawyer by State</h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {stateLinks.map((state) => (
                <Link
                  key={state.slug}
                  href={`/location/${state.slug}`}
                  className="px-4 py-3 bg-muted hover:bg-primary/10 rounded-lg text-sm font-medium transition-colors text-center"
                >
                  {state.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Compensation */}
      <section className="py-16 bg-muted/40">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">
              Mesothelioma Compensation Overview
            </h2>

            <Card className="border-2 border-primary/20">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-3 gap-8 text-center">
                  <div>
                    <div className="text-3xl font-bold text-accent">$1M - $1.4M</div>
                    <p className="text-muted-foreground">Average Settlement</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-secondary">$2.4M+</div>
                    <p className="text-muted-foreground">Average Trial Verdict</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-accent">$30B+</div>
                    <p className="text-muted-foreground">In Asbestos Trust Funds</p>
                  </div>
                </div>
                <p className="text-center text-sm text-muted-foreground mt-6">
                  *Results vary based on individual circumstances
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 justify-center mb-8">
              <HelpCircle className="h-8 w-8 text-primary" />
              <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
            </div>

            <div className="space-y-4">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2">Do I need a mesothelioma lawyer in my state?</h3>
                  <p className="text-muted-foreground">
                    While having a lawyer familiar with your state&apos;s laws is helpful, it is not
                    strictly required. Many top mesothelioma firms operate nationwide and partner with
                    local counsel when needed. The most important factor is choosing an attorney with
                    deep asbestos litigation experience.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2">Can I hire an out-of-state mesothelioma lawyer?</h3>
                  <p className="text-muted-foreground">
                    Yes. Mesothelioma attorneys routinely represent clients across state lines. They can
                    apply for pro hac vice admission in your state&apos;s courts or partner with local
                    counsel. Many cases are also filed in federal court, which has no state residency
                    requirement for attorneys.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2">How do I find a mesothelioma lawyer near me?</h3>
                  <p className="text-muted-foreground">
                    The fastest way is to call our veteran-owned service at {localPhone} for a free
                    consultation. We will connect you with experienced mesothelioma attorneys who serve
                    your area. You can also browse our state-by-state directory above.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Find a Mesothelioma Lawyer Near You Today
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Get connected with an experienced mesothelioma attorney in your area.
              Free consultation, no obligation, and no cost unless you win.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="text-lg px-8 py-6 h-auto bg-accent text-accent-foreground hover:bg-accent/90"
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
                className="text-lg px-8 py-6 h-auto border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                asChild
              >
                <Link href="/contact">Request Free Consultation</Link>
              </Button>
            </div>

            <p className="mt-8 text-sm opacity-75">
              <Shield className="h-4 w-4 inline mr-1" />
              SDVOSB Certified Veteran-Owned Service • Serving Clients Nationwide
            </p>
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-6">Related Resources</h2>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/directory" className="px-4 py-2 bg-muted hover:bg-primary/10 rounded-full text-sm font-medium transition-colors">
                Lawyer Directory
              </Link>
              <Link href="/best-mesothelioma-lawyers" className="px-4 py-2 bg-muted hover:bg-primary/10 rounded-full text-sm font-medium transition-colors">
                Best Mesothelioma Lawyers
              </Link>
              <Link href="/asbestos-lawyer" className="px-4 py-2 bg-muted hover:bg-primary/10 rounded-full text-sm font-medium transition-colors">
                Asbestos Lawyer
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
