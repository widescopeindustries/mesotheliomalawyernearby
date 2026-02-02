import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Phone, Shield, CheckCircle, Scale, HelpCircle, Clock, FileText, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Mesothelioma Lawsuit | Filing Process, Timeline & Compensation | Veteran-Owned',
  description: 'Learn about the mesothelioma lawsuit process, timeline, and compensation. Understand how to file an asbestos claim. Free consultation. Veteran-owned service.',
  keywords: [
    'mesothelioma lawsuit',
    'mesothelioma claim',
    'asbestos lawsuit',
    'mesothelioma litigation',
    'mesothelioma settlement'
  ],
  openGraph: {
    title: 'Mesothelioma Lawsuit | Veteran-Owned Service',
    description: 'Complete guide to filing a mesothelioma lawsuit. Learn the process, timeline, and potential compensation.',
    type: 'website',
    url: 'https://mesotheliomalawyernearby.com/mesothelioma-lawsuit',
  },
  alternates: {
    canonical: 'https://mesotheliomalawyernearby.com/mesothelioma-lawsuit'
  }
}

export default function MesotheliomaLawsuitPage() {
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
              Mesothelioma Lawsuit
            </h1>

            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Filing a mesothelioma lawsuit can help you recover compensation for medical bills, lost
              income, and pain and suffering. Learn about the process, timeline, and what to expect.
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

      {/* Lawsuit Process */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <FileText className="h-8 w-8 text-primary" />
              <h2 className="text-3xl font-bold">The Mesothelioma Lawsuit Process</h2>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground mb-8">
                A mesothelioma lawsuit follows a structured legal process. While every case is unique,
                most follow these key steps. The entire process typically takes <strong>12-18 months</strong>,
                though some cases resolve faster through early settlement.
              </p>
            </div>

            <div className="space-y-4">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">1</div>
                    <div>
                      <h3 className="font-bold text-xl mb-2">Free Consultation &amp; Case Evaluation</h3>
                      <p className="text-muted-foreground">
                        An experienced mesothelioma attorney reviews your diagnosis, exposure history,
                        and potential claim. This initial consultation is free and confidential.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="flex justify-center">
                <ArrowRight className="h-6 w-6 text-primary rotate-90" />
              </div>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">2</div>
                    <div>
                      <h3 className="font-bold text-xl mb-2">Investigation &amp; Evidence Gathering</h3>
                      <p className="text-muted-foreground">
                        Your legal team investigates your asbestos exposure history, identifies responsible
                        companies, gathers medical records, and builds your case with expert testimony.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="flex justify-center">
                <ArrowRight className="h-6 w-6 text-primary rotate-90" />
              </div>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">3</div>
                    <div>
                      <h3 className="font-bold text-xl mb-2">Filing the Lawsuit</h3>
                      <p className="text-muted-foreground">
                        Your attorney files the complaint in the most favorable jurisdiction. This formally
                        begins the legal process and notifies defendants of the claims against them.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="flex justify-center">
                <ArrowRight className="h-6 w-6 text-primary rotate-90" />
              </div>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">4</div>
                    <div>
                      <h3 className="font-bold text-xl mb-2">Discovery &amp; Depositions</h3>
                      <p className="text-muted-foreground">
                        Both sides exchange evidence and take depositions. Your attorney may depose you
                        about your exposure history. Many cases settle during this phase.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="flex justify-center">
                <ArrowRight className="h-6 w-6 text-primary rotate-90" />
              </div>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">5</div>
                    <div>
                      <h3 className="font-bold text-xl mb-2">Settlement or Trial</h3>
                      <p className="text-muted-foreground">
                        Most mesothelioma cases settle before trial, providing faster compensation. If a
                        fair settlement is not offered, your attorney can take the case to trial where
                        verdicts are often significantly higher.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Funds vs Lawsuits */}
      <section className="py-16 bg-muted/40">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">
              Trust Fund Claims vs. Lawsuits
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold text-xl mb-3">Asbestos Trust Fund Claims</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span>Filed against bankrupt companies&apos; trust funds</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span>Faster resolution (typically 3-6 months)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span>Can file against multiple trusts simultaneously</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span>Over $30 billion available in trust funds</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold text-xl mb-3">Personal Injury Lawsuits</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span>Filed against solvent companies in court</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span>Potentially higher compensation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span>Trial verdicts average $2.4M+</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span>Most cases settle before trial</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <p className="text-center text-muted-foreground mt-6">
              Many mesothelioma victims pursue both trust fund claims and lawsuits simultaneously to
              maximize their total compensation.
            </p>
          </div>
        </div>
      </section>

      {/* Compensation */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">
              Mesothelioma Lawsuit Compensation
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

            <div className="mt-8">
              <h3 className="font-bold text-xl mb-4 text-center">Statutes of Limitations by State</h3>
              <p className="text-muted-foreground text-center">
                Each state has its own deadline for filing a mesothelioma lawsuit, typically ranging from
                <strong> 1 to 6 years</strong> from diagnosis. The clock starts when you are diagnosed or
                should have been diagnosed. Acting quickly is critical to preserve your legal rights.
              </p>
            </div>
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
                  <h3 className="font-bold text-lg mb-2">How long does a mesothelioma lawsuit take?</h3>
                  <p className="text-muted-foreground">
                    Most mesothelioma lawsuits take 12-18 months from filing to resolution. Cases that
                    settle during discovery can resolve faster (6-12 months). Trust fund claims are
                    typically faster at 3-6 months. Courts often expedite mesothelioma cases due to the
                    serious nature of the illness.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2">How much is a mesothelioma lawsuit worth?</h3>
                  <p className="text-muted-foreground">
                    Mesothelioma settlements average between $1 million and $1.4 million. Trial verdicts
                    average $2.4 million or more. The value of your case depends on factors including
                    your diagnosis, exposure history, responsible parties, lost wages, medical costs, and
                    the state where the lawsuit is filed.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2">Can I file a lawsuit if the company is bankrupt?</h3>
                  <p className="text-muted-foreground">
                    Yes. Bankrupt asbestos companies were required to establish trust funds to compensate
                    victims. Over $30 billion is available in these trusts. Your attorney can file claims
                    against multiple trusts while also pursuing lawsuits against solvent companies.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2">Do I have to go to court for a mesothelioma lawsuit?</h3>
                  <p className="text-muted-foreground">
                    Most mesothelioma cases settle out of court, so you may never need to appear in a
                    courtroom. If a deposition is needed, it can often be done at your home or attorney&apos;s
                    office. Your legal team handles the vast majority of the work.
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
              Start Your Free Mesothelioma Lawsuit Evaluation
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Find out how much your mesothelioma case may be worth. Free consultation,
              no obligation, and no fees unless you recover compensation.
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
              <Link href="/statistics" className="px-4 py-2 bg-muted hover:bg-primary/10 rounded-full text-sm font-medium transition-colors">
                Mesothelioma Statistics
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
