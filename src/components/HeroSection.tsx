'use client'

import { Button } from "@/components/ui/button"
import { Phone, Shield, Clock, Heart } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { trackPhoneClick } from "@/components/Analytics"

export const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-b from-muted/50 to-background py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-6 md:px-8">
        <div className="max-w-4xl mx-auto text-center">

          {/* Veteran Trust Badge - prominent and reassuring */}
          <div className="inline-flex items-center gap-4 bg-secondary/10 backdrop-blur-sm px-6 py-3 rounded-full mb-10">
            <Image
              src="/images/sba-sdvosb-logo.png"
              alt="Service-Disabled Veteran-Owned Small Business Certification"
              width={32}
              height={32}
              className="object-contain"
            />
            <span className="text-base font-bold text-secondary">
              Service-Disabled Veteran-Owned Business
            </span>
          </div>

          {/* Main Headline - large, clear, reassuring */}
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-8 leading-tight">
            Get Trusted Legal Help for{' '}
            <span className="text-primary">Mesothelioma</span>
          </h1>

          {/* Subheadline - empathetic, not salesy */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-6 max-w-3xl mx-auto leading-relaxed">
            We understand this is a difficult time. Our veteran-owned service
            connects you with experienced mesothelioma lawyers who care about
            helping you and your family.
          </p>

          {/* Reassurance message - reduces anxiety */}
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            <Heart className="inline h-5 w-5 text-secondary mr-2" aria-hidden="true" role="img" />
            Take your time. We&apos;re here to answer questions, not pressure you.
          </p>

          {/* Primary CTA - large, accessible phone button */}
          <div className="flex flex-col gap-6 items-center mb-16">
            {/* Phone Number - Huge and Clickable */}
            <a
              href="tel:214-699-4543"
              aria-label="Call us anytime at 214-699-4543"
              onClick={() => trackPhoneClick('214-699-4543', 'Hero Section')}
              className="group inline-flex items-center gap-4 bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 md:px-12 md:py-7 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200"
            >
              <Phone className="h-8 w-8 md:h-10 md:w-10" aria-hidden="true" role="img" />
              <span className="text-2xl md:text-3xl font-bold">
                (214) 699-4543
              </span>
              <span className="bg-accent-foreground/20 text-accent-foreground px-4 py-2 rounded-full text-base font-semibold">
                24/7
              </span>
            </a>

            {/* Secondary CTA */}
            <Link href="/about" className="group">
              <Button
                variant="outline"
                size="lg"
                className="text-lg md:text-xl px-8 py-5 h-auto border-2 hover:bg-muted rounded-xl min-h-[56px]"
              >
                Learn About Our Service
              </Button>
            </Link>
          </div>

          {/* Trust Indicators - Cards for visual clarity */}
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto">
            {/* Card 1 */}
            <div className="bg-card rounded-2xl p-6 md:p-8 shadow-card border border-border">
              <div className="h-14 w-14 rounded-full bg-secondary/15 flex items-center justify-center mb-5 mx-auto">
                <Phone className="h-7 w-7 text-secondary" aria-hidden="true" role="img" />
              </div>
              <h2 className="font-bold text-xl text-foreground mb-2">
                Immediate Help
              </h2>
              <p className="text-muted-foreground text-base">
                Speak with someone right away. Available 24 hours a day, 7 days a week.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-card rounded-2xl p-6 md:p-8 shadow-card border border-border">
              <div className="h-14 w-14 rounded-full bg-secondary/15 flex items-center justify-center mb-5 mx-auto">
                <Shield className="h-7 w-7 text-secondary" aria-hidden="true" role="img" />
              </div>
              <h2 className="font-bold text-xl text-foreground mb-2">
                Veteran-Owned
              </h2>
              <p className="text-muted-foreground text-base">
                SDVOSB certified. We proudly serve our fellow veterans and their families.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-card rounded-2xl p-6 md:p-8 shadow-card border border-border">
              <div className="h-14 w-14 rounded-full bg-secondary/15 flex items-center justify-center mb-5 mx-auto">
                <Clock className="h-7 w-7 text-secondary" aria-hidden="true" role="img" />
              </div>
              <h2 className="font-bold text-xl text-foreground mb-2">
                No Upfront Costs
              </h2>
              <p className="text-muted-foreground text-base">
                Free consultation. You only pay if we help you get compensation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}