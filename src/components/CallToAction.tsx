'use client'

import { Button } from "@/components/ui/button"
import { Phone, Shield, AlertTriangle } from "lucide-react"
import { trackPhoneClick } from "@/components/Analytics"

export const CallToAction = () => {
  return (
    <section className="py-20 md:py-28 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 md:px-8">
        <div className="max-w-4xl mx-auto text-center">

          {/* Reassuring headline */}
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-8 leading-tight">
            Ready to Talk? We&apos;re Here to Listen
          </h2>

          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            You don&apos;t have to figure this out alone. Our experienced team
            is ready to answer your questions and explain your options.
          </p>

          {/* Urgency warning - gentle, not aggressive */}
          <div className="bg-amber-500/20 border border-amber-400/40 rounded-2xl p-6 md:p-8 mb-10 max-w-2xl mx-auto">
            <div className="flex items-start gap-4">
              <AlertTriangle className="h-8 w-8 text-amber-300 flex-shrink-0 mt-1" aria-hidden="true" />
              <div className="text-left">
                <h3 className="font-bold text-lg md:text-xl text-amber-100 mb-2">
                  Time Limits May Apply
                </h3>
                <p className="text-amber-100/90 text-base md:text-lg">
                  Each state has deadlines (called &quot;statutes of limitations&quot;) for filing
                  mesothelioma claims. It&apos;s worth calling to find out what applies to your situation.
                </p>
              </div>
            </div>
          </div>

          {/* Primary phone CTA */}
          <div className="flex flex-col items-center gap-6 mb-10">
            <a
              href="tel:214-699-4543"
              aria-label="Call us now at 214-699-4543"
              onClick={() => trackPhoneClick('214-699-4543', 'CTA Section')}
              className="group inline-flex items-center gap-4 bg-accent hover:bg-accent/90 text-accent-foreground px-10 py-7 md:px-14 md:py-8 rounded-2xl shadow-elevated hover:shadow-xl transition-all duration-200"
            >
              <Phone className="h-9 w-9 md:h-11 md:w-11" aria-hidden="true" />
              <span className="text-2xl md:text-4xl font-bold">
                (214) 699-4543
              </span>
            </a>

            <p className="text-primary-foreground/80 text-lg">
              Available 24 hours a day, 7 days a week
            </p>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-10">
            <div className="flex items-center gap-3 text-primary-foreground/90">
              <Shield className="h-6 w-6" aria-hidden="true" />
              <span className="text-base md:text-lg font-medium">Veteran-Owned</span>
            </div>
            <div className="flex items-center gap-3 text-primary-foreground/90">
              <Phone className="h-6 w-6" aria-hidden="true" />
              <span className="text-base md:text-lg font-medium">Free Consultation</span>
            </div>
            <div className="flex items-center gap-3 text-primary-foreground/90">
              <Shield className="h-6 w-6" aria-hidden="true" />
              <span className="text-base md:text-lg font-medium">No Upfront Fees</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}