import { Card, CardContent } from "@/components/ui/card"
import { Phone, MapPin, Users, CheckCircle } from "lucide-react"

export const HowItWorks = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6 text-foreground">
              How Our Service Works
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Getting legal help for mesothelioma should be simple. We&apos;ve streamlined the process to connect you quickly with experienced attorneys.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {/* Step 1 */}
            <Card className="relative transition-all duration-200 hover:shadow-xl hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold text-sm transition-all duration-200 hover:scale-110 shadow-md">
                  1
                </div>
                <div className="h-12 w-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-200 hover:bg-accent/30 hover:scale-110">
                  <Phone className="h-6 w-6 text-accent" aria-hidden="true" role="img" />
                </div>
                <h3 className="font-serif font-semibold text-lg mb-2">Call or Click</h3>
                <p className="text-sm text-muted-foreground">
                  Reach out 24/7 through our hotline or online form. No cost, no obligation.
                </p>
              </CardContent>
            </Card>

            {/* Step 2 */}
            <Card className="relative transition-all duration-200 hover:shadow-xl hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold text-sm transition-all duration-200 hover:scale-110 shadow-md">
                  2
                </div>
                <div className="h-12 w-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-200 hover:bg-accent/30 hover:scale-110">
                  <Users className="h-6 w-6 text-accent" aria-hidden="true" role="img" />
                </div>
                <h3 className="font-serif font-semibold text-lg mb-2">Free Consultation</h3>
                <p className="text-sm text-muted-foreground">
                  Speak with our legal team who understands mesothelioma cases and veteran exposure.
                </p>
              </CardContent>
            </Card>

            {/* Step 3 */}
            <Card className="relative transition-all duration-200 hover:shadow-xl hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold text-sm transition-all duration-200 hover:scale-110 shadow-md">
                  3
                </div>
                <div className="h-12 w-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-200 hover:bg-accent/30 hover:scale-110">
                  <MapPin className="h-6 w-6 text-accent" aria-hidden="true" role="img" />
                </div>
                <h3 className="font-serif font-semibold text-lg mb-2">Match with Attorney</h3>
                <p className="text-sm text-muted-foreground">
                  We connect you with experienced mesothelioma lawyers in your area who specialize in your type of case.
                </p>
              </CardContent>
            </Card>

            {/* Step 4 */}
            <Card className="relative transition-all duration-200 hover:shadow-xl hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold text-sm transition-all duration-200 hover:scale-110 shadow-md">
                  4
                </div>
                <div className="h-12 w-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-200 hover:bg-accent/30 hover:scale-110">
                  <CheckCircle className="h-6 w-6 text-accent" aria-hidden="true" role="img" />
                </div>
                <h3 className="font-serif font-semibold text-lg mb-2">Get Legal Help</h3>
                <p className="text-sm text-muted-foreground">
                  Your attorney begins working immediately on your case with no upfront costs to you.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Emergency Section */}
          <div className="mt-16 p-8 bg-accent/10 border-2 border-accent/30 rounded-lg transition-all duration-200 hover:border-accent hover:shadow-lg">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-200 hover:bg-accent/30 hover:scale-110">
                <Phone className="h-6 w-6 text-accent" aria-hidden="true" role="img" />
              </div>
              <div>
                <h3 className="font-serif font-semibold text-lg text-foreground mb-1">Need Immediate Help?</h3>
                <p className="text-muted-foreground">
                  Time is critical in mesothelioma cases. Call us now at{' '}
                  <a href="tel:214-699-4543" className="font-bold text-accent hover:text-accent/80 transition-colors">
                    (214) 699-4543
                  </a>{' '}
                  for immediate assistance. Our team is standing by 24/7 to help you understand your legal options.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}