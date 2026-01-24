import { Button } from "@/components/ui/button"
import { Phone, Shield, Clock } from "lucide-react"

export const CallToAction = () => {
  return (
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 bg-primary-foreground/20 backdrop-blur-sm px-4 py-2 rounded-full mb-8">
            <Shield className="h-5 w-5" />
            <span className="text-sm font-semibold">Veteran-Owned & Trusted</span>
          </div>

          {/* Main CTA */}
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Get Immediate Legal Help Today
          </h2>
          
          <p className="text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
            Don&apos;t wait. Time is critical in mesothelioma cases. Call now for a 
            <span className="font-bold"> free, no-obligation consultation</span> with experienced attorneys who understand your situation.
          </p>

          {/* Primary Action */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 h-auto bg-background text-foreground hover:bg-background/90"
              asChild
            >
              <a href="tel:800-123-4567">
                <Phone className="h-5 w-5 mr-2" />
                (800) 123-4567
                <span className="ml-2 text-xs bg-green-600 text-white px-2 py-1 rounded">24/7 Available</span>
              </a>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-6 h-auto border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              Start Online Chat
            </Button>
          </div>

          {/* Value Props */}
          <div className="grid md:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="flex items-center gap-3">
              <Clock className="h-6 w-6 flex-shrink-0" />
              <div className="text-left">
                <h4 className="font-semibold">Fast Response</h4>
                <p className="text-sm opacity-90">We answer 24/7</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Shield className="h-6 w-6 flex-shrink-0" />
              <div className="text-left">
                <h4 className="font-semibold">No Risk</h4>
                <p className="text-sm opacity-90">Free consultation</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="h-6 w-6 flex-shrink-0" />
              <div className="text-left">
                <h4 className="font-semibold">Immediate Help</h4>
                <p className="text-sm opacity-90">Call right now</p>
              </div>
            </div>
          </div>

          {/* Emergency Message */}
          <div className="mt-12 p-6 bg-primary-foreground/10 border border-primary-foreground/20 rounded-lg">
            <p className="text-lg font-medium mb-2">
              ⚠️ Time-Sensitive Information
            </p>
            <p className="text-base opacity-90">
              Every state has time limits for filing mesothelioma claims. Don&apos;t risk losing your right to compensation. 
              Call now to understand your legal options before it&apos;s too late.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}