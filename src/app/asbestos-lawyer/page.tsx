import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Phone, Shield, AlertTriangle, CheckCircle, Scale, HelpCircle, Clock, HardHat, Anchor, Siren } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Asbestos Mesothelioma Lawyer | Asbestos Exposure Attorney | Veteran-Owned',
  description: 'Find experienced asbestos mesothelioma lawyers. Get legal help for asbestos-related diseases including mesothelioma, asbestosis, and lung cancer. Free consultation.',
  keywords: [
    'asbestos mesothelioma lawyer',
    'asbestos exposure attorney',
    'asbestos lawyer',
    'asbestos cancer lawyer',
    'asbestos litigation attorney'
  ],
  openGraph: {
    title: 'Asbestos Mesothelioma Lawyer | Veteran-Owned Service',
    description: 'Legal help for asbestos exposure victims. Connect with attorneys who specialize in asbestos-related disease claims.',
    type: 'website',
    url: 'https://mesotheliomalawyernearby.com/asbestos-lawyer',
  },
  alternates: {
    canonical: 'https://mesotheliomalawyernearby.com/asbestos-lawyer'
  }
}

export default function AsbestosLawyerPage() {
  const localPhone = '(214) 699-4543'

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
              Asbestos Mesothelioma Lawyer
            </h1>

            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Asbestos exposure causes mesothelioma, lung cancer, and other deadly diseases. If you or a
              loved one was exposed, an experienced asbestos lawyer can help you pursue the compensation you deserve.
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

      {/* Asbestos-Related Diseases */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <Siren className="h-8 w-8 text-primary" />
              <h2 className="text-3xl font-bold">Diseases Caused by Asbestos Exposure</h2>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground mb-6">
                Asbestos is a naturally occurring mineral that was widely used in construction, shipbuilding,
                and manufacturing. When disturbed, tiny asbestos fibers become airborne and can be inhaled or
                ingested, leading to serious diseases decades later.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold text-xl mb-3">Mesothelioma</h3>
                  <p className="text-muted-foreground">
                    An aggressive cancer of the lining of the lungs, abdomen, or heart. Almost exclusively
                    caused by asbestos exposure. Latency period of 20-50 years.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold text-xl mb-3">Asbestosis</h3>
                  <p className="text-muted-foreground">
                    Chronic lung disease caused by inhaling asbestos fibers. Causes scarring of lung
                    tissue, making breathing progressively more difficult over time.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold text-xl mb-3">Lung Cancer</h3>
                  <p className="text-muted-foreground">
                    Asbestos exposure significantly increases the risk of lung cancer, especially when
                    combined with smoking. Can develop in one or both lungs.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Who is at Risk */}
      <section className="py-16 bg-muted/40">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">
              Who Is at Risk for Asbestos Exposure?
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <HardHat className="h-6 w-6 text-primary" />
                    <h3 className="font-bold text-xl">Construction Workers</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Electricians, plumbers, roofers, insulation installers, and demolition workers were
                    routinely exposed to asbestos in building materials including insulation, floor tiles,
                    roofing, and cement products.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Shield className="h-6 w-6 text-accent" />
                    <h3 className="font-bold text-xl">Military Veterans</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Veterans, especially those who served in the Navy, were heavily exposed to asbestos
                    on ships, in barracks, and at military facilities. Veterans account for approximately
                    30% of all mesothelioma diagnoses.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Anchor className="h-6 w-6 text-secondary" />
                    <h3 className="font-bold text-xl">Shipyard Workers</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Shipyard workers faced some of the highest levels of asbestos exposure. Ships were
                    built with extensive asbestos insulation in boiler rooms, engine rooms, and throughout
                    the vessel.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <HardHat className="h-6 w-6 text-primary" />
                    <h3 className="font-bold text-xl">Industrial Workers</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Power plant workers, auto mechanics, railroad workers, firefighters, and factory
                    workers were commonly exposed to asbestos in their workplaces.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Claims */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">
              Types of Asbestos Legal Claims
            </h2>

            <Card className="mb-8">
              <CardContent className="p-6">
                <ul className="grid md:grid-cols-2 gap-4">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <div>
                      <strong>Personal Injury Lawsuits</strong>
                      <p className="text-muted-foreground text-sm">Filed by those diagnosed with asbestos-related diseases against responsible companies.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <div>
                      <strong>Wrongful Death Claims</strong>
                      <p className="text-muted-foreground text-sm">Filed by family members when a loved one dies from an asbestos-related disease.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <div>
                      <strong>Asbestos Trust Fund Claims</strong>
                      <p className="text-muted-foreground text-sm">Claims against $30B+ in funds set up by bankrupt asbestos companies to compensate victims.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <div>
                      <strong>VA Benefits</strong>
                      <p className="text-muted-foreground text-sm">Veterans exposed to asbestos during service may qualify for VA disability benefits and healthcare.</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Compensation */}
      <section className="py-16 bg-muted/40">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">
              Asbestos Mesothelioma Compensation
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
                  <h3 className="font-bold text-lg mb-2">What diseases does asbestos cause?</h3>
                  <p className="text-muted-foreground">
                    Asbestos exposure can cause mesothelioma (cancer of the lung, abdominal, or heart
                    lining), asbestosis (chronic lung scarring), lung cancer, pleural thickening, and
                    pleural effusions. Mesothelioma is the most serious and is almost exclusively caused
                    by asbestos.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2">How long after asbestos exposure can I sue?</h3>
                  <p className="text-muted-foreground">
                    Asbestos diseases have a latency period of 20-50 years. The statute of limitations
                    typically begins at diagnosis, not at the time of exposure. This means you can file
                    a claim even if you were exposed decades ago. However, once diagnosed, time limits
                    vary by state (usually 1-3 years), so acting quickly is important.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2">What is an asbestos trust fund?</h3>
                  <p className="text-muted-foreground">
                    When asbestos companies went bankrupt, courts required them to establish trust funds
                    to compensate victims. Over $30 billion exists in these trusts today. An experienced
                    asbestos lawyer can identify which trusts you may be eligible to file claims against,
                    often recovering compensation from multiple trusts.
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
              Speak With an Asbestos Mesothelioma Lawyer Today
            </h2>
            <p className="text-xl mb-8 opacity-90">
              If you were exposed to asbestos, you may be entitled to significant compensation.
              Contact us for a free, confidential case review.
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
              <Link href="/mesothelioma-lawsuit" className="px-4 py-2 bg-muted hover:bg-primary/10 rounded-full text-sm font-medium transition-colors">
                Mesothelioma Lawsuit Guide
              </Link>
              <Link href="/types/peritoneal-mesothelioma" className="px-4 py-2 bg-muted hover:bg-primary/10 rounded-full text-sm font-medium transition-colors">
                Peritoneal Mesothelioma
              </Link>
              <Link href="/types/pleural-mesothelioma" className="px-4 py-2 bg-muted hover:bg-primary/10 rounded-full text-sm font-medium transition-colors">
                Pleural Mesothelioma
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
