import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { NAVY_SHIPS, VA_BENEFITS } from '@/data/keywords'
import { Ship, Anchor, Award, Heart, Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Veteran Mesothelioma Resources - Navy Asbestos Exposure Guide',
  description: 'Comprehensive guide for veterans exposed to asbestos during military service. Navy ship database, VA benefits, and legal help options.',
  keywords: ['veteran mesothelioma', 'navy asbestos exposure', 'va mesothelioma benefits', 'military asbestos claims'],
  openGraph: {
    title: 'Veteran Mesothelioma Resources - Military Asbestos Guide',
    description: 'Complete resource for veterans with mesothelioma from Navy asbestos exposure. VA benefits and legal help.',
    type: 'website',
    url: 'https://mesothelioma-legal-help.com/veteran-resources',
  },
  alternates: {
    canonical: 'https://mesothelioma-legal-help.com/veteran-resources'
  }
}

export default function VeteranResourcesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-yellow-400 text-black">
              Veteran-to-Veteran Support
            </Badge>
            
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Veterans: Mesothelioma From Military Service?
            </h1>
            
            <p className="text-xl mb-8 max-w-3xl mx-auto text-blue-100">
              As veterans who served our country, we understand your sacrifice. 
              One-third of all mesothelioma cases affect service members. 
              <span className="font-bold">You&apos;re not alone in this fight.</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button size="lg" className="text-lg px-8 py-6 h-auto bg-white text-blue-900 hover:bg-blue-50">
                <Phone className="h-5 w-5 mr-2" />
                (800) 123-4567
                <span className="ml-2 text-xs bg-red-600 text-white px-2 py-1 rounded">24/7 Veteran Line</span>
              </Button>
              
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 h-auto border-white text-white hover:bg-white hover:text-blue-900">
                VA Benefits Check
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Navy Ships Database */}
      <section className="py-16 bg-muted/40">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Navy Ships with Asbestos Exposure
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Find your ship. If you served on these vessels, you may have been exposed to asbestos.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {NAVY_SHIPS.map((ship, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className={`h-12 w-12 rounded-full flex items-center justify-center flex-shrink-0 ${
                        ship.risk === 'High' ? 'bg-red-100' : 'bg-yellow-100'
                      }`}>
                        <Ship className={`h-6 w-6 ${
                          ship.risk === 'High' ? 'text-red-600' : 'text-yellow-600'
                        }`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-lg mb-1">{ship.name}</h3>
                        <Badge variant="outline" className="text-xs mb-2">
                          {ship.class}
                        </Badge>
                        <Badge className={`text-xs ${
                          ship.risk === 'High' ? 'bg-red-600' : 'bg-yellow-600'
                        } text-white`}>
                          {ship.risk} Risk
                        </Badge>
                        <p className="text-sm text-muted-foreground mt-2">
                          Common asbestos locations: Engine rooms, boiler spaces, pipefitter work areas, deck machinery
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8 p-6 bg-blue-50 border border-blue-200 rounded-lg text-center">
              <h3 className="text-xl font-semibold text-blue-900 mb-3">
                <Anchor className="inline h-5 w-5 mr-2" />
                Don&apos;t See Your Ship?
              </h3>
              <p className="text-blue-800">
                Over 200 Navy ships contained asbestos. Contact us for help identifying your exposure source.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VA Benefits Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-green-200 shadow-xl">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="h-8 w-8 text-green-600" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">
                    VA Benefits You May Be Entitled To
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    The VA recognizes mesothelioma as service-connected. Here&apos;s what you deserve:
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center p-6 bg-green-50 rounded-lg">
                    <h3 className="font-bold text-lg mb-4 text-green-900">100% Disability</h3>
                    <div className="text-3xl font-bold text-green-600 mb-2">
                      {VA_BENEFITS.disability.rating}
                    </div>
                    <p className="text-sm text-green-800">Automatic for service-connected mesothelioma</p>
                  </div>

                  <div className="text-center p-6 bg-blue-50 rounded-lg">
                    <h3 className="font-bold text-lg mb-4 text-blue-900">Monthly Compensation</h3>
                    <div className="text-3xl font-bold text-blue-600 mb-2">
                      {VA_BENEFITS.disability.monthlyCompensation}
                    </div>
                    <p className="text-sm text-blue-800">Tax-free monthly payments</p>
                  </div>

                  <div className="text-center p-6 bg-purple-50 rounded-lg">
                    <h3 className="font-bold text-lg mb-4 text-purple-900">Healthcare</h3>
                    <div className="text-2xl font-bold text-purple-600 mb-2">
                      FREE
                    </div>
                    <p className="text-sm text-purple-800">{VA_BENEFITS.healthCare.eligibility}</p>
                  </div>
                </div>

                <div className="mt-8 grid md:grid-cols-2 gap-8">
                  <div className="text-center p-6 bg-gray-50 rounded-lg">
                    <h3 className="font-bold text-lg mb-4">Dependency Benefits</h3>
                    <div className="text-xl font-bold text-gray-700 mb-2">
                      {VA_BENEFITS.dependency.monthly}
                    </div>
                    <p className="text-sm text-gray-600">For spouse and children</p>
                  </div>

                  <div className="text-center p-6 bg-red-50 rounded-lg">
                    <h3 className="font-bold text-lg mb-4">No Cost Legal Help</h3>
                    <div className="text-xl font-bold text-red-600 mb-2">
                      $0 Upfront
                    </div>
                    <p className="text-sm text-red-800">Pay only if you win your case</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How to File Section */}
      <section className="py-16 bg-muted/40">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              How to File Your Mesothelioma Claim
            </h2>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-primary">1</span>
                </div>
                <h3 className="font-semibold text-lg mb-2">Get Diagnosis</h3>
                <p className="text-sm text-muted-foreground">
                  Official mesothelioma diagnosis from qualified physician
                </p>
              </div>

              <div className="text-center">
                <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-primary">2</span>
                </div>
                <h3 className="font-semibold text-lg mb-2">Prove Service Connection</h3>
                <p className="text-sm text-muted-foreground">
                  Show asbestos exposure during military service with medical evidence
                </p>
              </div>

              <div className="text-center">
                <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-primary">3</span>
                </div>
                <h3 className="font-semibold text-lg mb-2">File VA Claim</h3>
                <p className="text-sm text-muted-foreground">
                  Submit VA Form 21-526EZ with medical records and service documentation
                </p>
              </div>

              <div className="text-center">
                <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-primary">4</span>
                </div>
                <h3 className="font-semibold text-lg mb-2">Consider Legal Action</h3>
                <p className="text-sm text-muted-foreground">
                  File against asbestos manufacturers for additional compensation
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary-foreground/20 backdrop-blur-sm px-4 py-2 rounded-full mb-8">
              <Heart className="h-5 w-5" />
              <span className="text-sm font-semibold">Veterans Serving Veterans</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              You Served Our Country. Now Let Us Serve You.
            </h2>
            
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              As fellow veterans, we understand the unique challenges you face. 
              <span className="font-bold">Call now for confidential, no-obligation assistance.</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 h-auto bg-background text-foreground hover:bg-background/90"
                asChild
              >
                <a href="tel:(800) 123-4567">
                  <Phone className="h-5 w-5 mr-2" />
                  (800) 123-4567
                  <span className="ml-2 text-xs bg-green-600 text-white px-2 py-1 rounded">Veteran Line</span>
                </a>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-6 h-auto border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                Start VA Benefits Claim
              </Button>
            </div>

            <div className="mt-8 text-sm opacity-90">
              <p>Confidential • Free Consultation • Veteran-Owned Service</p>
              <p className="mt-2">© 2026 Widescope Industries LLC - Service-Disabled Veteran-Owned Small Business</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}