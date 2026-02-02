import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Phone, Shield, CheckCircle, Scale, HelpCircle, Clock, Award, Star, Users, Gavel } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Best Mesothelioma Lawyers | Top-Rated Asbestos Attorneys | Veteran-Owned',
  description: 'Find the best mesothelioma lawyers with proven track records. Learn what to look for in a top mesothelioma attorney. Free consultation. Veteran-owned service.',
  keywords: [
    'best mesothelioma lawyer',
    'top mesothelioma attorney',
    'best asbestos lawyer',
    'mesothelioma law firm',
    'mesothelioma attorney ratings'
  ],
  openGraph: {
    title: 'Best Mesothelioma Lawyers | Veteran-Owned Service',
    description: 'Connect with the best mesothelioma lawyers in America. Proven track records, contingency fees, and nationwide representation.',
    type: 'website',
    url: 'https://mesotheliomalawyernearby.com/best-mesothelioma-lawyers',
  },
  alternates: {
    canonical: 'https://mesotheliomalawyernearby.com/best-mesothelioma-lawyers'
  }
}

export default function BestMesotheliomaLawyersPage() {
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
              Best Mesothelioma Lawyers
            </h1>

            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Choosing the right mesothelioma lawyer can mean the difference between a low settlement and
              maximum compensation. We connect you with the best attorneys in asbestos litigation.
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

      {/* How to Choose the Best Mesothelioma Lawyer */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <Award className="h-8 w-8 text-primary" />
              <h2 className="text-3xl font-bold">How to Choose the Best Mesothelioma Lawyer</h2>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground mb-6">
                Not all personal injury lawyers are qualified to handle mesothelioma cases. Asbestos litigation
                is a highly specialized area of law that requires specific expertise, resources, and a proven
                track record. Here is what to look for when choosing the best mesothelioma lawyer for your case.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Criteria */}
      <section className="py-16 bg-muted/40">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">
              What Makes a Great Mesothelioma Attorney
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Gavel className="h-6 w-6 text-primary" />
                    <h3 className="font-bold text-xl">Asbestos Case Experience</h3>
                  </div>
                  <p className="text-muted-foreground">
                    The best mesothelioma lawyers have decades of experience handling asbestos cases
                    specifically. They understand the medical science, know the responsible companies,
                    and have established relationships with expert witnesses.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Star className="h-6 w-6 text-accent" />
                    <h3 className="font-bold text-xl">Proven Settlement Track Record</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Look for attorneys who can demonstrate a history of successful settlements and
                    verdicts in mesothelioma cases. Top firms have recovered billions for asbestos
                    victims and their families.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Scale className="h-6 w-6 text-secondary" />
                    <h3 className="font-bold text-xl">Contingency Fee Basis</h3>
                  </div>
                  <p className="text-muted-foreground">
                    The best mesothelioma lawyers work on contingency, meaning you pay nothing upfront
                    and nothing at all unless you win. This ensures your attorney is fully motivated to
                    maximize your compensation.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Users className="h-6 w-6 text-primary" />
                    <h3 className="font-bold text-xl">National Reach &amp; Resources</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Top mesothelioma law firms have nationwide capabilities with investigators, medical
                    experts, and the resources to take on large asbestos corporations. They can file
                    in the jurisdiction most favorable to your case.
                  </p>
                </CardContent>
              </Card>

              <Card className="md:col-span-2">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Gavel className="h-6 w-6 text-accent" />
                    <h3 className="font-bold text-xl">Trial Experience</h3>
                  </div>
                  <p className="text-muted-foreground">
                    While most mesothelioma cases settle, the best attorneys are prepared to go to trial.
                    Defendants offer higher settlements when they know your lawyer has a strong trial
                    record. An attorney who has never been to trial may leave money on the table.
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
              What the Best Lawyers Can Win for You
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
                  <h3 className="font-bold text-lg mb-2">How do I find the best mesothelioma lawyer?</h3>
                  <p className="text-muted-foreground">
                    Look for attorneys who specialize exclusively in asbestos litigation, have a proven
                    track record of multi-million dollar settlements, work on contingency, and have the
                    resources to investigate your exposure history. Our service connects you with
                    pre-vetted, top-rated mesothelioma attorneys nationwide.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2">What should I look for in a mesothelioma attorney?</h3>
                  <p className="text-muted-foreground">
                    Key factors include years of asbestos litigation experience, number of cases handled,
                    settlement and verdict history, trial willingness, client reviews, and whether they
                    offer free consultations with no obligation. The best firms also have in-house
                    medical and investigation teams.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2">How much do mesothelioma lawyers cost?</h3>
                  <p className="text-muted-foreground">
                    The best mesothelioma lawyers charge nothing upfront. They work on a contingency fee
                    basis, typically 33-40% of your recovery. If you don&apos;t win, you owe nothing. There
                    are no hidden costs or hourly fees.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2">Do I need a local mesothelioma lawyer?</h3>
                  <p className="text-muted-foreground">
                    Not necessarily. The best mesothelioma law firms handle cases nationwide and can
                    file in whichever jurisdiction offers the best advantage for your case. National
                    firms often have more resources and experience than local general practice attorneys.
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
              Connect With the Best Mesothelioma Lawyers Today
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Don&apos;t settle for less. Get matched with a top-rated mesothelioma attorney
              who will fight for maximum compensation on your behalf.
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
              <Link href="/mesothelioma-lawyer-near-me" className="px-4 py-2 bg-muted hover:bg-primary/10 rounded-full text-sm font-medium transition-colors">
                Find a Lawyer Near You
              </Link>
              <Link href="/mesothelioma-lawsuit" className="px-4 py-2 bg-muted hover:bg-primary/10 rounded-full text-sm font-medium transition-colors">
                Mesothelioma Lawsuit Guide
              </Link>
              <Link href="/types/peritoneal-mesothelioma" className="px-4 py-2 bg-muted hover:bg-primary/10 rounded-full text-sm font-medium transition-colors">
                Peritoneal Mesothelioma
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
