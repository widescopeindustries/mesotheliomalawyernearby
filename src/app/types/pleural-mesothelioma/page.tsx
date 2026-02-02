import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Phone, Shield, AlertTriangle, CheckCircle, Scale, HelpCircle, Clock, Stethoscope } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Pleural Mesothelioma Lawyer | Lung Lining Cancer Legal Help | Veteran-Owned',
  description: 'Find experienced pleural mesothelioma attorneys who specialize in lung lining asbestos cancer cases. Veteran-owned service. Free consultation. Get the compensation you deserve.',
  keywords: [
    'pleural mesothelioma lawyer',
    'pleural mesothelioma attorney',
    'lung mesothelioma lawyer',
    'asbestos lung cancer lawyer',
    'pleural mesothelioma compensation'
  ],
  openGraph: {
    title: 'Pleural Mesothelioma Lawyer | Veteran-Owned Service',
    description: 'Specialized legal help for pleural mesothelioma victims. The most common form of mesothelioma affecting the lung lining.',
    type: 'website',
    url: 'https://mesotheliomalawyernearby.com/types/pleural-mesothelioma',
  },
  alternates: {
    canonical: 'https://mesotheliomalawyernearby.com/types/pleural-mesothelioma'
  }
}

export default function PleuralMesotheliomaPage() {
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
              Pleural Mesothelioma Lawyer
            </h1>

            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Pleural mesothelioma is the most common form of this asbestos cancer, accounting for
              approximately 75% of all cases. Our veteran-owned service connects you with attorneys
              who specialize in pleural mesothelioma claims.
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

      {/* What is Pleural Mesothelioma */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <Stethoscope className="h-8 w-8 text-primary" />
              <h2 className="text-3xl font-bold">What is Pleural Mesothelioma?</h2>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground mb-6">
                Pleural mesothelioma is a cancer that develops in the pleura, the thin membrane that
                lines the lungs and chest cavity. It is the most common type of mesothelioma, representing
                approximately <strong>75% of all diagnosed cases</strong>. This cancer is caused by inhaling
                asbestos fibers, which become embedded in the lung lining and cause cellular damage over
                decades.
              </p>

              <Card className="mb-8">
                <CardContent className="p-6">
                  <h3 className="font-bold text-xl mb-4">Common Symptoms</h3>
                  <ul className="grid md:grid-cols-2 gap-3">
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <span>Chest pain or tightness</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <span>Shortness of breath</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <span>Persistent dry cough</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <span>Fatigue and weakness</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <span>Fluid buildup (pleural effusion)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <span>Unexplained weight loss</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <p className="text-lg text-muted-foreground">
                Like all forms of mesothelioma, pleural mesothelioma has a latency period of
                <strong> 20-50 years</strong>. Symptoms often mimic less serious respiratory conditions,
                which can lead to delayed diagnosis. Early detection is critical for treatment options
                and legal action.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Specialized Legal Help */}
      <section className="py-16 bg-muted/40">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">
              Why You Need a Specialized Pleural Mesothelioma Lawyer
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold text-xl mb-3">Distinguishing from Lung Cancer</h3>
                  <p className="text-muted-foreground">
                    Pleural mesothelioma is often misdiagnosed as lung cancer. An experienced attorney
                    understands the medical distinctions and works with oncologists to ensure your
                    diagnosis supports your legal claim.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold text-xl mb-3">Proving Asbestos Exposure</h3>
                  <p className="text-muted-foreground">
                    Because pleural mesothelioma results from inhaling asbestos fibers, your attorney
                    must trace your occupational or environmental exposure history, often spanning
                    decades and multiple employers.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold text-xl mb-3">Maximizing Compensation</h3>
                  <p className="text-muted-foreground">
                    Specialized attorneys know how to identify all liable parties and pursue multiple
                    compensation sources including lawsuits, trust funds, VA benefits, and workers&apos;
                    compensation claims simultaneously.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold text-xl mb-3">Expedited Legal Process</h3>
                  <p className="text-muted-foreground">
                    Given the aggressive nature of pleural mesothelioma, experienced lawyers know how to
                    expedite cases. Many courts offer accelerated dockets for mesothelioma patients to
                    ensure timely resolution.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Compensation */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">
              Compensation for Pleural Mesothelioma
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
      <section className="py-16 bg-muted/40">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 justify-center mb-8">
              <HelpCircle className="h-8 w-8 text-primary" />
              <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
            </div>

            <div className="space-y-4">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2">What is pleural mesothelioma?</h3>
                  <p className="text-muted-foreground">
                    Pleural mesothelioma is a cancer of the pleura, the thin membrane lining the lungs
                    and chest wall. It is the most common type of mesothelioma, making up about 75% of
                    all cases. It is caused by inhaling asbestos fibers that become lodged in the lung
                    lining, causing cancerous changes over 20-50 years.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2">How is pleural mesothelioma different from lung cancer?</h3>
                  <p className="text-muted-foreground">
                    While both affect the lungs, pleural mesothelioma develops in the lining around the
                    lungs (pleura), whereas lung cancer grows within the lung tissue itself. Mesothelioma
                    is almost exclusively caused by asbestos, while lung cancer has many causes. The
                    distinction matters for both treatment and legal claims.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2">What is the prognosis for pleural mesothelioma?</h3>
                  <p className="text-muted-foreground">
                    Prognosis depends on the stage at diagnosis, cell type, and overall health. Early-stage
                    pleural mesothelioma treated with surgery and chemotherapy may have a median survival
                    of 18-31 months. Newer treatments including immunotherapy are improving outcomes.
                    Early diagnosis is critical.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2">Can I file a lawsuit for pleural mesothelioma?</h3>
                  <p className="text-muted-foreground">
                    Yes. If you were diagnosed with pleural mesothelioma due to asbestos exposure, you
                    have the legal right to pursue compensation from the companies responsible for your
                    exposure. The statute of limitations begins at diagnosis, so it is important to
                    contact an attorney promptly.
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
              Get Your Free Pleural Mesothelioma Case Review
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Time is critical. Contact us today for a free, confidential consultation with
              an experienced mesothelioma attorney.
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
            <h2 className="text-2xl font-bold mb-6">Other Mesothelioma Types</h2>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/types/peritoneal-mesothelioma" className="px-4 py-2 bg-muted hover:bg-primary/10 rounded-full text-sm font-medium transition-colors">
                Peritoneal Mesothelioma
              </Link>
              <Link href="/types/pericardial-mesothelioma" className="px-4 py-2 bg-muted hover:bg-primary/10 rounded-full text-sm font-medium transition-colors">
                Pericardial Mesothelioma
              </Link>
              <Link href="/directory" className="px-4 py-2 bg-muted hover:bg-primary/10 rounded-full text-sm font-medium transition-colors">
                Lawyer Directory
              </Link>
              <Link href="/mesothelioma-lawsuit" className="px-4 py-2 bg-muted hover:bg-primary/10 rounded-full text-sm font-medium transition-colors">
                Mesothelioma Lawsuit Guide
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
