'use client';

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Award, Star, Users, CheckCircle, Clock } from "lucide-react"
import { useScrollAnimation, useStaggeredAnimation } from "@/lib/animations"

export const EnhancedTrustSignals = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation({ threshold: 0.1 });
  const { ref: subtitleRef, isVisible: subtitleVisible } = useScrollAnimation({ threshold: 0.1 });
  
  const { visibleItems, showItem, reset } = useStaggeredAnimation(4, 150);
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation({ threshold: 0.1 });
  
  const trustCardRefs = [useScrollAnimation(), useScrollAnimation(), useScrollAnimation(), useScrollAnimation()];
  const trustElementRefs = [useScrollAnimation(), useScrollAnimation(), useScrollAnimation()];
  const badgeRefs = [useScrollAnimation(), useScrollAnimation(), useScrollAnimation(), useScrollAnimation(), useScrollAnimation()];

  // Trigger staggered animations when cards become visible
  if (cardsVisible && visibleItems.size === 0) {
    for (let i = 0; i < 4; i++) {
      showItem(i);
    }
  }

  const trustCards = [
    { icon: Shield, title: "SDVOSB Certified", description: "Service-Disabled Veteran-Owned Small Business, officially recognized by the SBA" },
    { icon: Award, title: "Experienced Attorneys", description: "Connect with lawyers who specialize in mesothelioma cases with proven track records" },
    { icon: Star, title: "24/7 Support", description: "Round-the-clock assistance because we understand the urgency of your situation" },
    { icon: Users, title: "Veteran-to-Veteran", description: "Special understanding of veterans&apos; unique asbestos exposure during service" }
  ];

  const trustElements = [
    { icon: CheckCircle, title: "No Upfront Costs", subtitle: "Free consultation, no hidden fees" },
    { icon: Clock, title: "Quick Response", subtitle: "Immediate attention to your case" },
    { icon: Shield, title: "Confidential & Secure", subtitle: "Your information is always protected" }
  ];

  const badges = [
    { icon: Shield, text: "SBA SDVOSB Certified" },
    { icon: Award, text: "Veteran-Owned Business" },
    { icon: Star, text: "Trusted Legal Network" },
    { icon: CheckCircle, text: "BBB Accredited" },
    { icon: Users, text: "Veteran Advocate" }
  ];

  return (
    <section className="py-20 bg-muted/40">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Title */}
          <h2 
            ref={titleRef}
            className={`font-serif text-3xl md:text-4xl font-bold text-center mb-6 text-foreground transition-all duration-1000 transform ${
              titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
            }`}
          >
            Why Trust Our Service
          </h2>
          
          {/* Subtitle */}
          <p 
            ref={subtitleRef}
            className={`text-center text-muted-foreground mb-16 max-w-2xl mx-auto text-lg transition-all duration-700 transform ${
              subtitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            As a veteran-owned company, we built this service on the foundation of integrity, honor, and commitment to those who served.
          </p>

          {/* Main Trust Cards */}
          <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {trustCards.map((card, index) => {
              const { ref, isVisible } = trustCardRefs[index];
              const Icon = card.icon;
              return (
                <Card 
                  key={index}
                  ref={ref}
                  className={`text-center p-8 transition-all duration-700 transform hover:shadow-xl hover:scale-105 hover:border-accent ${
                    isVisible ? 'opacity-100 translate-y-0 rotate-0' : 'opacity-0 translate-y-12 rotate-3'
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <CardContent className="space-y-4 pt-6">
                    <div className="transition-all duration-300 hover:scale-110">
                      <Icon className="h-12 w-12 text-accent mx-auto" />
                    </div>
                    <h3 className="font-serif font-semibold text-lg">{card.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {card.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Additional Trust Elements */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {trustElements.map((element, index) => {
              const { ref, isVisible } = trustElementRefs[index];
              const Icon = element.icon;
              return (
                <div 
                  key={index}
                  ref={ref}
                  className={`flex items-center gap-4 p-8 bg-background rounded-lg border transition-all duration-700 transform hover:shadow-lg hover:border-accent hover:scale-102 ${
                    isVisible ? 'opacity-100 translate-x-0' : `opacity-0 ${index % 2 === 0 ? '-translate-x-8' : 'translate-x-8'}`
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="transition-all duration-300 hover:scale-110">
                    <Icon className="h-8 w-8 text-secondary flex-shrink-0" />
                  </div>
                  <div>
                    <h3 className="font-serif font-semibold mb-1 text-base">{element.title}</h3>
                    <p className="text-sm text-muted-foreground">{element.subtitle}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Certifications & Badges */}
          <div className="text-center space-y-8">
            <h3 className="font-serif text-xl font-semibold animate-fade-in">
              Our Commitment to Excellence
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {badges.map((badge, index) => {
                const { ref, isVisible } = badgeRefs[index];
                const Icon = badge.icon;
                return (
                  <div
                    key={index}
                    ref={ref}
                    className="inline-flex items-center gap-2 px-6 py-3 text-sm border rounded-lg transition-all duration-700 hover:bg-accent hover:text-accent-foreground hover:border-accent cursor-default transform hover:scale-105"
                    style={{ 
                      transitionDelay: `${index * 80}ms`,
                      opacity: isVisible ? 1 : 0,
                      transform: `scale(${isVisible ? 1 : 0.9})`,
                    }}
                  >
                    <Icon className="h-4 w-4 mr-2" />
                    {badge.text}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-10 left-10 w-32 h-32 bg-accent/5 rounded-full animate-float"></div>
            <div className="absolute bottom-10 right-10 w-48 h-48 bg-primary/5 rounded-full animate-float" style={{ animationDelay: '3s' }}></div>
          </div>
        </div>
      </div>
    </section>
  )
}