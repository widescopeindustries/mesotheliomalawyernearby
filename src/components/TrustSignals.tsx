import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Award, Star, Users, CheckCircle, Clock } from "lucide-react"

export const TrustSignals = () => {
  return (
    <section className="py-20 bg-muted/40">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-6 text-foreground">
            Why Trust Our Service
          </h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto text-lg">
            As a veteran-owned company, we built this service on the foundation of integrity, honor, and commitment to those who served.
          </p>
          
          {/* Main Trust Signals */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <Card className="text-center p-8 transition-all duration-200 hover:shadow-xl hover:scale-105 hover:border-accent">
              <CardContent className="space-y-4 pt-6">
                <div className="transition-all duration-200 hover:scale-110">
                  <Shield className="h-12 w-12 text-accent mx-auto" />
                </div>
                <h3 className="font-serif font-semibold text-lg">SDVOSB Certified</h3>
                <p className="text-sm text-muted-foreground">
                  Service-Disabled Veteran-Owned Small Business, officially recognized by the SBA
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 transition-all duration-200 hover:shadow-xl hover:scale-105 hover:border-accent">
              <CardContent className="space-y-4 pt-6">
                <div className="transition-all duration-200 hover:scale-110">
                  <Award className="h-12 w-12 text-secondary mx-auto" />
                </div>
                <h3 className="font-serif font-semibold text-lg">Experienced Attorneys</h3>
                <p className="text-sm text-muted-foreground">
                  Connect with lawyers who specialize in mesothelioma cases with proven track records
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 transition-all duration-200 hover:shadow-xl hover:scale-105 hover:border-accent">
              <CardContent className="space-y-4 pt-6">
                <div className="transition-all duration-200 hover:scale-110">
                  <Star className="h-12 w-12 text-accent mx-auto" />
                </div>
                <h3 className="font-serif font-semibold text-lg">24/7 Support</h3>
                <p className="text-sm text-muted-foreground">
                  Round-the-clock assistance because we understand the urgency of your situation
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 transition-all duration-200 hover:shadow-xl hover:scale-105 hover:border-accent">
              <CardContent className="space-y-4 pt-6">
                <div className="transition-all duration-200 hover:scale-110">
                  <Users className="h-12 w-12 text-primary mx-auto" />
                </div>
                <h3 className="font-serif font-semibold text-lg">Veteran-to-Veteran</h3>
                <p className="text-sm text-muted-foreground">
                  Special understanding of veterans&apos; unique asbestos exposure during service
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Additional Trust Elements */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="flex items-center gap-4 p-8 bg-background rounded-lg border transition-all duration-200 hover:shadow-lg hover:border-accent">
              <div className="transition-all duration-200 hover:scale-110">
                <CheckCircle className="h-8 w-8 text-secondary flex-shrink-0" />
              </div>
              <div>
                <h4 className="font-serif font-semibold mb-1">No Upfront Costs</h4>
                <p className="text-sm text-muted-foreground">Free consultation, no hidden fees</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-8 bg-background rounded-lg border transition-all duration-200 hover:shadow-lg hover:border-accent">
              <div className="transition-all duration-200 hover:scale-110">
                <Clock className="h-8 w-8 text-primary flex-shrink-0" />
              </div>
              <div>
                <h4 className="font-serif font-semibold mb-1">Quick Response</h4>
                <p className="text-sm text-muted-foreground">Immediate attention to your case</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-8 bg-background rounded-lg border transition-all duration-200 hover:shadow-lg hover:border-accent">
              <div className="transition-all duration-200 hover:scale-110">
                <Shield className="h-8 w-8 text-accent flex-shrink-0" />
              </div>
              <div>
                <h4 className="font-serif font-semibold mb-1">Confidential & Secure</h4>
                <p className="text-sm text-muted-foreground">Your information is always protected</p>
              </div>
            </div>
          </div>

          {/* Certifications & Badges */}
          <div className="text-center space-y-8">
            <h3 className="font-serif text-xl font-semibold">Our Commitment to Excellence</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="outline" className="px-6 py-3 text-sm transition-all duration-200 hover:bg-accent hover:text-accent-foreground hover:border-accent cursor-default">
                <Shield className="h-4 w-4 mr-2" />
                SBA SDVOSB Certified
              </Badge>
              <Badge variant="outline" className="px-6 py-3 text-sm transition-all duration-200 hover:bg-accent hover:text-accent-foreground hover:border-accent cursor-default">
                <Award className="h-4 w-4 mr-2" />
                Veteran-Owned Business
              </Badge>
              <Badge variant="outline" className="px-6 py-3 text-sm transition-all duration-200 hover:bg-accent hover:text-accent-foreground hover:border-accent cursor-default">
                <Star className="h-4 w-4 mr-2" />
                Trusted Legal Network
              </Badge>
              <Badge variant="outline" className="px-6 py-3 text-sm transition-all duration-200 hover:bg-accent hover:text-accent-foreground hover:border-accent cursor-default">
                <CheckCircle className="h-4 w-4 mr-2" />
                BBB Accredited
              </Badge>
              <Badge variant="outline" className="px-6 py-3 text-sm transition-all duration-200 hover:bg-accent hover:text-accent-foreground hover:border-accent cursor-default">
                <Users className="h-4 w-4 mr-2" />
                Veteran Advocate
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}