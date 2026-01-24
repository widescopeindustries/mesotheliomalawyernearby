import { Button } from "@/components/ui/button"
import { Phone, Shield, Clock } from "lucide-react"
import Link from "next/link"

export const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary/10 to-primary/5 py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Veteran Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm px-4 py-2 rounded-full mb-8">
            <Shield className="h-5 w-5 text-primary" />
            <span className="text-sm font-semibold text-primary">Service-Disabled Veteran-Owned</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6">
            Get Experienced Legal Help for
            <span className="text-primary"> Mesothelioma</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Connect with specialized mesothelioma lawyers who understand the urgency of your situation.
            As a veteran-owned service, we&apos;re committed to helping you get the compensation you deserve.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="text-lg px-8 py-6 h-auto">
              <Phone className="h-5 w-5 mr-2" />
              (682) 999-0953
              <span className="ml-2 text-xs bg-green-100 text-green-800 px-2 py-1 rounded">24/7</span>
            </Button>
            <Link href="/about">
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 h-auto">
                Learn About Us
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <div className="text-left">
                <h3 className="font-semibold">Immediate Help</h3>
                <p className="text-sm text-muted-foreground">Available 24/7</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <div className="text-left">
                <h3 className="font-semibold">Veteran Trusted</h3>
                <p className="text-sm text-muted-foreground">SDVOSB Certified</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <div className="text-left">
                <h3 className="font-semibold">Fast Response</h3>
                <p className="text-sm text-muted-foreground">Quick Legal Action</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}