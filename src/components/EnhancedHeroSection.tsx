'use client';

import { Button } from "@/components/ui/button"
import { Phone, Shield, Clock } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useScrollAnimation } from "@/lib/animations"

export const EnhancedHeroSection = () => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation({ threshold: 0.1 });
  const { ref: badgeRef, isVisible: badgeVisible } = useScrollAnimation({ threshold: 0.1 });
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation({ threshold: 0.1 });
  const { ref: descriptionRef, isVisible: descriptionVisible } = useScrollAnimation({ threshold: 0.1 });
  const { ref: buttonRef, isVisible: buttonVisible } = useScrollAnimation({ threshold: 0.1 });
  
  const featureRefs = [useScrollAnimation(), useScrollAnimation(), useScrollAnimation()];

  return (
    <section ref={heroRef} className="relative bg-gradient-to-br from-primary/10 to-primary/5 py-20 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Veteran Badge */}
          <div 
            ref={badgeRef}
            className={`inline-flex items-center gap-3 bg-accent/20 backdrop-blur-sm px-4 py-2 rounded-full mb-8 transition-all duration-700 transform ${
              badgeVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
            }`}
          >
            <Image 
              src="/images/sba-sdvosb-logo.png" 
              alt="SDVOSB Logo" 
              width={24} 
              height={24}
              className="object-contain"
            />
            <span className="text-sm font-semibold text-accent-foreground">Service-Disabled Veteran-Owned</span>
          </div>

          <h1 ref={titleRef} className={`font-serif text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-8 transition-all duration-1000 transform ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Get Experienced Legal Help for
            <span className="text-primary inline-block transition-all duration-700 hover:scale-110"> Mesothelioma</span>
          </h1>

          <p 
            ref={descriptionRef}
            className={`text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed transition-all duration-700 transform ${
              descriptionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            Connect with specialized mesothelioma lawyers who understand the urgency of your situation.
            As a veteran-owned service, we&apos;re committed to helping you get the compensation you deserve.
          </p>

          <div 
            ref={buttonRef}
            className={`flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 transition-all duration-700 transform ${
              buttonVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
            }`}
          >
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6 h-auto transition-all duration-300 hover:shadow-xl hover:scale-105 animate-pulse-slow" asChild>
              <a href="tel:214-699-4543" aria-label="Call us 24/7 at (214) 699-4543">
                <Phone className="h-5 w-5 mr-2" aria-hidden="true" />
                (214) 699-4543
                <span className="ml-2 text-xs bg-accent-foreground/20 text-accent-foreground px-2 py-1 rounded">24/7</span>
              </a>
            </Button>
            <Link href="/about">
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 h-auto border-2 transition-all duration-300 hover:bg-muted hover:shadow-lg hover:scale-105">
                Learn About Us
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {[
              { icon: Phone, title: "Immediate Help", subtitle: "Available 24/7" },
              { icon: Shield, title: "Veteran Trusted", subtitle: "SDVOSB Certified" },
              { icon: Clock, title: "Fast Response", subtitle: "Quick Legal Action" }
            ].map((item, index) => {
              const { ref, isVisible } = featureRefs[index];
              return (
                <div 
                  key={index}
                  ref={ref}
                  className={`flex items-center gap-4 p-4 rounded-lg transition-all duration-700 transform hover:bg-muted/50 hover:scale-105 ${
                    isVisible ? 'opacity-100 translate-x-0' : `opacity-0 ${index % 2 === 0 ? '-translate-x-8' : 'translate-x-8'}`
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="h-12 w-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 transition-all duration-300 hover:bg-accent/30 hover:scale-110 hover:rotate-12">
                    <item.icon className="h-6 w-6 text-accent" />
                  </div>
                  <div className="text-left">
                    <h2 className="font-serif font-semibold text-foreground text-base">{item.title}</h2>
                    <p className="text-sm text-muted-foreground">{item.subtitle}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-accent/5 rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-secondary/5 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
      </div>
    </section>
  )
}