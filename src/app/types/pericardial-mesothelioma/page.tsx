import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Phone, Shield, AlertTriangle, CheckCircle, Scale, HelpCircle, Clock, Heart } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Pericardial Mesothelioma Lawyer | Heart Lining Cancer Legal Help | Veteran-Owned',
  description: 'Find experienced pericardial mesothelioma attorneys who specialize in heart lining asbestos cancer cases. Veteran-owned service. Free consultation.',
  keywords: [
    'pericardial mesothelioma lawyer',
    'pericardial mesothelioma attorney',
    'heart mesothelioma lawyer',
    'asbestos heart cancer lawyer',
    'pericardial mesothelioma compensation'
  ],
  openGraph: {
    title: 'Pericardial Mesothelioma Lawyer | Veteran-Owned Service',
    description: 'Specialized legal help for pericardial mesothelioma victims. The rarest form of mesothelioma affecting the heart lining.',
    type: 'website',
    url: 'https://mesotheliomalawyernearby.com/types/pericardial-mesothelioma',
  },
  alternates: {
    canonical: 'https://mesotheliomalawyernearby.com/types/pericardial-mesothelioma'
  }
}

export default function PericardialMesotheliomaPage() {
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
              Pericardial Mesothelioma Lawyer
            </h1>

            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Pericardial mesothelioma is the rarest form of this asbestos cancer, affecting the lining
              of the heart. Our veteran-owned service connects victims and families with experienced
              mesothelioma attorneys.
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

      {/* What is Pericardial Mesothelioma */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <Heart className="h-8 w-8 text-primary" />
              <h2 className="text-3xl font-bold">What is Pericardial Mesothelioma?</h2>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground mb-6">
                Pericardial mesothelioma is an extremely rare cancer that develops in the pericardium, the
                thin membrane surrounding the heart. It accounts for <strong>less than 1% of all mesothelioma
                cases</strong>, with only about 200 cases documented in medical literature. Like all
                mesothelioma types, it is linked to asbestos exposure.
              </p>

              <Card className="mb-8">
                <CardContent className="p-6">
                  <h3 className="font-bold text-xl mb-4">Common Symptoms</h3>
                  <ul className="grid md:grid-cols-2 gap-3">
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <span>Chest pain</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <span>Heart palpitations or irregular heartbeat</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <span>Difficulty breathing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <span>Fatigue and weakness</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <span>Fluid around the heart (pericardial effusion)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <span>Night sweats and fever</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <p className="text-lg text-muted-foreground">
                Pericardial mesothelioma is extremely aggressive and is often diagnosed at an advanced
                stage. Due to its rarity and nonspecific symptoms, it is frequently <strong>diagnosed
                post-mortem</strong>. When diagnosed in living patients, treatment options are limited
                but may include surgery, chemotherapy, and radiation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Legal Help is Critical */}
      <section className="py-16 bg-muted/40">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">
              Legal Options for Pericardial Mesothelioma
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold text-xl mb-3">Personal Injury Claims</h3>
                  <p className="text-muted-foreground">
                    Patients diagnosed with pericardial mesothelioma can file personal injury lawsuits
                    against the companies responsible for their asbestos exposure. These cases are often
                    expedited due to the severity of the disease.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold text-xl mb-3">Wrongful Death Claims</h3>
                  <p className="text-muted-foreground">
                    Because pericardial mesothelioma is often diagnosed post-mortem or progresses rapidly,
                    family members frequently pursue wrongful death claims on behalf of their loved one.
                    Surviving spouses, children, and dependents may be eligible.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold text-xl mb-3">Trust Fund Claims</h3>
                  <p className="text-muted-foreground">
                    Over $30 billion in asbestos trust funds exist to compensate victims. Families of
                    pericardial mesothelioma patients can file claims against multiple trusts to recover
                    compensation, even if the responsible companies are bankrupt.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold text-xl mb-3">VA Benefits for Veterans</h3>
                  <p className="text-muted-foreground">
                    Veterans who develop pericardial mesothelioma from military asbestos exposure may
                    qualify for VA disability benefits, healthcare, and additional compensation through
                    legal claims.
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
              Compensation for Pericardial Mesothelioma
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
                  <h3 className="font-bold text-lg mb-2">What is pericardial mesothelioma?</h3>
                  <p className="text-muted-foreground">
                    Pericardial mesothelioma is an extremely rare cancer that forms in the pericardium,
                    the protective membrane surrounding the heart. It is caused by asbestos exposure
                    and accounts for less than 1% of all mesothelioma diagnoses. It is one of the most
                    aggressive forms of the disease.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2">How rare is pericardial mesothelioma?</h3>
                  <p className="text-muted-foreground">
                    Pericardial mesothelioma is extremely rare, with fewer than 200 cases documented in
                    medical literature worldwide. It represents less than 1% of all mesothelioma
                    diagnoses. Its rarity makes it challenging to diagnose, and many cases are only
                    confirmed after death.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2">Can family members file a lawsuit for pericardial mesothelioma?</h3>
                  <p className="text-muted-foreground">
                    Yes. Because pericardial mesothelioma is often diagnosed late or post-mortem, wrongful
                    death lawsuits filed by family members are common. Surviving spouses, children, and
                    dependents can pursue compensation for medical bills, funeral costs, lost income, and
                    loss of companionship.
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
              Get Your Free Pericardial Mesothelioma Case Review
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
              <Link href="/types/pleural-mesothelioma" className="px-4 py-2 bg-muted hover:bg-primary/10 rounded-full text-sm font-medium transition-colors">
                Pleural Mesothelioma
              </Link>
              <Link href="/directory" className="px-4 py-2 bg-muted hover:bg-primary/10 rounded-full text-sm font-medium transition-colors">
                Lawyer Directory
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
