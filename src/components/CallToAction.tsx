'use client'

import { Button } from "@/components/ui/button"
import { Phone, Shield, Clock } from "lucide-react"
import { trackPhoneClick } from "@/components/Analytics"

export const CallToAction = () => {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm px-4 py-2 rounded-full mb-8 transition-all duration-200 hover:bg-accent/30">
            <Shield className="h-5 w-5 text-accent" />
            <span className="text-sm font-semibold text-accent-foreground">Veteran-Owned & Trusted</span>
          </div>

          {/* Main CTA */}
          <h2 className="font-serif text-3xl md:text-5xl font-bold mb-8">
            Get Immediate Legal Help Today
          </h2>

          <p className="text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
            Don&apos;t wait. Time is critical in mesothelioma cases. Call now for a
            <span className="font-bold"> free, no-obligation consultation</span> with experienced attorneys who understand your situation.
          </p>

          {/* Primary Action */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button
              size="lg"
              className="text-lg px-8 py-6 h-auto bg-accent text-accent-foreground hover:bg-accent/90 transition-all duration-200 hover:shadow-2xl"
              asChild
            >
              <a
                href="tel:214-699-4543"
                onClick={() => trackPhoneClick('214-699-4543', 'CTA Section')}
              >
                <Phone className="h-5 w-5 mr-2" />
                (214) 699-4543
                <span className="ml-2 text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded">24/7 Available</span>
              </a>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 py-6 h-auto border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-all duration-200 hover:shadow-xl"
            >
              Start Online Chat
            </Button>
          </div>

          {/* Value Props */}
          <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="flex items-center gap-4 p-4 rounded-lg transition-all duration-200 hover:bg-primary-foreground/10">
              <div className="transition-all duration-200 hover:scale-110">
                <Clock className="h-6 w-6 flex-shrink-0 text-accent" />
              </div>
              <div className="text-left">
                <h3 className="font-serif font-semibold text-base">Fast Response</h3>
                <p className="text-sm opacity-90">We answer 24/7</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 rounded-lg transition-all duration-200 hover:bg-primary-foreground/10">
              <div className="transition-all duration-200 hover:scale-110">
                <Shield className="h-6 w-6 flex-shrink-0 text-accent" />
              </div>
              <div className="text-left">
                <h3 className="font-serif font-semibold text-base">No Risk</h3>
                <p className="text-sm opacity-90">Free consultation</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 rounded-lg transition-all duration-200 hover:bg-primary-foreground/10">
              <div className="transition-all duration-200 hover:scale-110">
                <Phone className="h-6 w-6 flex-shrink-0 text-accent" />
              </div>
              <div className="text-left">
                <h3 className="font-serif font-semibold text-base">Immediate Help</h3>
                <p className="text-sm opacity-90">Call right now</p>
              </div>
            </div>
          </div>

          {/* Emergency Message */}
          <div className="mt-16 p-8 bg-primary-foreground/10 border-2 border-accent/50 rounded-lg transition-all duration-200 hover:border-accent">
            <p className="text-lg font-serif font-medium mb-2">
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