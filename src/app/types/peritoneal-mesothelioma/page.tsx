import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Phone, Shield, AlertTriangle, CheckCircle, Scale, HelpCircle, Heart, Clock } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Peritoneal Mesothelioma Lawyer | Abdominal Cancer Legal Help | Veteran-Owned',
  description: 'Find experienced peritoneal mesothelioma attorneys who specialize in abdominal asbestos cancer cases. Veteran-owned service. Free consultation. Get the compensation you deserve.',
  keywords: [
    'peritoneal mesothelioma lawyer',
    'abdominal mesothelioma attorney',
    'peritoneal cancer lawsuit',
    'asbestos abdominal cancer lawyer',
    'mesothelioma compensation'
  ],
  openGraph: {
    title: 'Peritoneal Mesothelioma Lawyer | Veteran-Owned Service',
    description: 'Specialized legal help for peritoneal (abdominal) mesothelioma victims. Connect with attorneys who understand this rare cancer.',
    type: 'website',
    url: 'https://mesotheliomalawyernearby.com/types/peritoneal-mesothelioma',
  },
  alternates: {
    canonical: 'https://mesotheliomalawyernearby.com/types/peritoneal-mesothelioma'
  }
}

export default function PeritonealMesotheliomaPage() {
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
              Peritoneal Mesothelioma Lawyer
            </h1>

            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Peritoneal mesothelioma affects the abdominal lining and requires specialized legal representation. 
              Our veteran-owned service connects you with attorneys who understand this rare cancer.
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

      {/* What is Peritoneal Mesothelioma */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <Heart className="h-8 w-8 text-primary" />
              <h2 className="text-3xl font-bold">What is Peritoneal Mesothelioma?</h2>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground mb-6">
                Peritoneal mesothelioma is a rare and aggressive cancer that develops in the peritoneum—the 
                thin membrane lining the abdominal cavity. It accounts for approximately <strong>20% of all 
                mesothelioma cases</strong>, with pleural (lung) mesothelioma being more common.
              </p>

              <Card className="mb-8">
                <CardContent className="p-6">
                  <h3 className="font-bold text-xl mb-4">Common Symptoms</h3>
                  <ul className="grid md:grid-cols-2 gap-3">
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <span>Abdominal pain or swelling</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <span>Unexplained weight loss</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <span>Nausea or vomiting</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <span>Loss of appetite</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <span>Bowel obstruction</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <span>Fluid buildup (ascites)</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <p className="text-lg text-muted-foreground">
                Like all forms of mesothelioma, peritoneal mesothelioma is caused by asbestos exposure. 
                The latency period is typically <strong>20-50 years</strong>, meaning symptoms often don&apos;t 
                appear until decades after exposure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Specialized Representation */}
      <section className="py-16 bg-muted/40">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">
              Why You Need Specialized Legal Representation
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold text-xl mb-3">Complex Medical Evidence</h3>
                  <p className="text-muted-foreground">
                    Peritoneal mesothelioma cases require attorneys who understand the unique medical 
                    aspects of abdominal asbestos cancer and can work with specialized oncologists.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold text-xl mb-3">Exposure History Investigation</h3>
                  <p className="text-muted-foreground">
                    Experienced attorneys have investigators who can trace your asbestos exposure 
                    back 30-50 years to identify responsible parties.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold text-xl mb-3">Multiple Compensation Sources</h3>
                  <p className="text-muted-foreground">
                    Victims may be entitled to compensation from lawsuits, trust funds, VA benefits, 
                    and workers&apos; compensation. Specialists know how to maximize recovery.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold text-xl mb-3">Time-Sensitive Cases</h3>
                  <p className="text-muted-foreground">
                    Statutes of limitations vary by state (1-6 years). Given the aggressive nature 
                    of peritoneal mesothelioma, quick action is essential.
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
              Compensation for Peritoneal Mesothelioma
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
                  <h3 className="font-bold text-lg mb-2">How is peritoneal mesothelioma different from pleural?</h3>
                  <p className="text-muted-foreground">
                    Peritoneal mesothelioma affects the abdominal lining while pleural affects the lung lining. 
                    Peritoneal is less common (20% vs 75%) but may have slightly better treatment options 
                    including HIPEC (heated chemotherapy) surgery.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2">Can I file a lawsuit if I was exposed decades ago?</h3>
                  <p className="text-muted-foreground">
                    Yes. The statute of limitations typically begins from diagnosis, not exposure. 
                    Since peritoneal mesothelioma has a 20-50 year latency period, most victims 
                    can still file claims.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2">What if the company that exposed me is bankrupt?</h3>
                  <p className="text-muted-foreground">
                    Many asbestos companies have established trust funds totaling over $30 billion 
                    specifically to compensate victims. Experienced attorneys know how to file 
                    claims against multiple trusts.
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
              Get Your Free Peritoneal Mesothelioma Case Review
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
            <h2 className="text-2xl font-bold mb-6">Find a Lawyer in Your State</h2>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/location/new-mexico" className="px-4 py-2 bg-muted hover:bg-primary/10 rounded-full text-sm font-medium transition-colors">
                New Mexico
              </Link>
              <Link href="/location/california-los-angeles" className="px-4 py-2 bg-muted hover:bg-primary/10 rounded-full text-sm font-medium transition-colors">
                Los Angeles, CA
              </Link>
              <Link href="/location/texas-houston" className="px-4 py-2 bg-muted hover:bg-primary/10 rounded-full text-sm font-medium transition-colors">
                Houston, TX
              </Link>
              <Link href="/location/new-york-new-york-city" className="px-4 py-2 bg-muted hover:bg-primary/10 rounded-full text-sm font-medium transition-colors">
                New York City
              </Link>
              <Link href="/location/illinois-chicago" className="px-4 py-2 bg-muted hover:bg-primary/10 rounded-full text-sm font-medium transition-colors">
                Chicago, IL
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
