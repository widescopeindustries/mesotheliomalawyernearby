import { Button } from "@/components/ui/button"
import { Phone, Shield, Clock } from "lucide-react"
import Link from "next/link"

export const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary/10 to-primary/5 py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Veteran Badge */}
          <div className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm px-4 py-2 rounded-full mb-8 transition-all duration-200 hover:bg-accent/30">
            <Shield className="h-5 w-5 text-accent" />
            <span className="text-sm font-semibold text-accent-foreground">Service-Disabled Veteran-Owned</span>
          </div>

          <h1 className="font-serif text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-8">
            Get Experienced Legal Help for
            <span className="text-primary"> Mesothelioma</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Connect with specialized mesothelioma lawyers who understand the urgency of your situation.
            As a veteran-owned service, we&apos;re committed to helping you get the compensation you deserve.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6 h-auto transition-all duration-200 hover:shadow-xl" asChild>
              <a href="tel:682-999-0953" aria-label="Call us 24/7 at (682) 999-0953">
                <Phone className="h-5 w-5 mr-2" aria-hidden="true" />
                (682) 999-0953
                <span className="ml-2 text-xs bg-accent-foreground/20 text-accent-foreground px-2 py-1 rounded">24/7</span>
              </a>
            </Button>
            <Link href="/about">
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 h-auto border-2 transition-all duration-200 hover:bg-muted hover:shadow-lg">
                Learn About Us
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="flex items-center gap-4 p-4 rounded-lg transition-all duration-200 hover:bg-muted/50">
              <div className="h-12 w-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 transition-all duration-200 hover:bg-accent/30 hover:scale-110">
                <Phone className="h-6 w-6 text-accent" />
              </div>
              <div className="text-left">
                <h2 className="font-serif font-semibold text-foreground text-base">Immediate Help</h2>
                <p className="text-sm text-muted-foreground">Available 24/7</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 rounded-lg transition-all duration-200 hover:bg-muted/50">
              <div className="h-12 w-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 transition-all duration-200 hover:bg-accent/30 hover:scale-110">
                <Shield className="h-6 w-6 text-accent" />
              </div>
              <div className="text-left">
                <h2 className="font-serif font-semibold text-foreground text-base">Veteran Trusted</h2>
                <p className="text-sm text-muted-foreground">SDVOSB Certified</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 rounded-lg transition-all duration-200 hover:bg-muted/50">
              <div className="h-12 w-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 transition-all duration-200 hover:bg-accent/30 hover:scale-110">
                <Clock className="h-6 w-6 text-accent" />
              </div>
              <div className="text-left">
                <h2 className="font-serif font-semibold text-foreground text-base">Fast Response</h2>
                <p className="text-sm text-muted-foreground">Quick Legal Action</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}