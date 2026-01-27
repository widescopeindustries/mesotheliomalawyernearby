'use client';

import { Button } from "@/components/ui/button"
import { Phone, Shield, Clock } from "lucide-react"
import { useScrollAnimation } from "@/lib/animations"

export const EnhancedCallToAction = () => {
  const { ref: badgeRef, isVisible: badgeVisible } = useScrollAnimation({ threshold: 0.1 });
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation({ threshold: 0.1 });
  const { ref: descriptionRef, isVisible: descriptionVisible } = useScrollAnimation({ threshold: 0.1 });
  const { ref: buttonsRef, isVisible: buttonsVisible } = useScrollAnimation({ threshold: 0.1 });
  
  const valuePropRefs = [useScrollAnimation(), useScrollAnimation(), useScrollAnimation()];
  const { ref: emergencyRef, isVisible: emergencyVisible } = useScrollAnimation({ threshold: 0.1 });

  const valueProps = [
    { icon: Clock, title: "Fast Response", subtitle: "We answer 24/7" },
    { icon: Shield, title: "No Risk", subtitle: "Free consultation" },
    { icon: Phone, title: "Immediate Help", subtitle: "Call right now" }
  ];

  return (
    <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Trust Badge */}
          <div 
            ref={badgeRef}
            className={`inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm px-4 py-2 rounded-full mb-8 transition-all duration-700 transform hover:bg-accent/30 ${
              badgeVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 -translate-y-4 scale-90'
            }`}
          >
            <Shield className="h-5 w-5 text-accent" />
            <span className="text-sm font-semibold text-accent-foreground">Veteran-Owned & Trusted</span>
          </div>

          {/* Main CTA Title */}
          <h2 
            ref={titleRef}
            className={`font-serif text-3xl md:text-5xl font-bold mb-8 transition-all duration-1000 transform ${
              titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
            }`}
          >
            Get Immediate Legal Help Today
          </h2>

          {/* Description */}
          <p 
            ref={descriptionRef}
            className={`text-xl mb-12 max-w-2xl mx-auto leading-relaxed transition-all duration-700 transform ${
              descriptionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            Don&apos;t wait. Time is critical in mesothelioma cases. Call now for a
            <span className="font-bold"> free, no-obligation consultation</span> with experienced attorneys who understand your situation.
          </p>

          {/* Action Buttons */}
          <div 
            ref={buttonsRef}
            className={`flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 transition-all duration-700 transform ${
              buttonsVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
            }`}
          >
            <Button
              size="lg"
              className="text-lg px-8 py-6 h-auto bg-accent text-accent-foreground hover:bg-accent/90 transition-all duration-300 hover:shadow-2xl hover:scale-105 animate-pulse-slow"
              asChild
            >
              <a href="tel:214-699-4543">
                <Phone className="h-5 w-5 mr-2" />
                (214) 699-4543
                <span className="ml-2 text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded">24/7 Available</span>
              </a>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 py-6 h-auto border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-all duration-300 hover:shadow-xl hover:scale-105"
            >
              Start Online Chat
            </Button>
          </div>

          {/* Value Props */}
          <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto mb-16">
            {valueProps.map((prop, index) => {
              const { ref, isVisible } = valuePropRefs[index];
              const Icon = prop.icon;
              return (
                <div 
                  key={index}
                  ref={ref}
                  className={`flex items-center gap-4 p-4 rounded-lg transition-all duration-700 transform hover:bg-primary-foreground/10 hover:scale-105 ${
                    isVisible ? 'opacity-100 translate-x-0' : `opacity-0 ${index % 2 === 0 ? '-translate-x-8' : 'translate-x-8'}`
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="transition-all duration-300 hover:scale-110">
                    <Icon className="h-6 w-6 flex-shrink-0 text-accent" />
                  </div>
                  <div className="text-left">
                    <h3 className="font-serif font-semibold text-base">{prop.title}</h3>
                    <p className="text-sm opacity-90">{prop.subtitle}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Emergency Message */}
          <div 
            ref={emergencyRef}
            className={`mt-16 p-8 bg-primary-foreground/10 border-2 border-accent/50 rounded-lg transition-all duration-1000 transform hover:border-accent hover:shadow-lg hover:scale-102 ${
              emergencyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <p className="text-lg font-serif font-medium mb-2 flex items-center justify-center gap-2">
              <span className="animate-pulse">⚠️</span>
              Time-Sensitive Information
            </p>
            <p className="text-base opacity-90">
              Every state has time limits for filing mesothelioma claims. Don&apos;t risk losing your right to compensation.
              Call now to understand your legal options before it&apos;s too late.
            </p>
          </div>
        </div>
      </div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-accent/5 rounded-full animate-float"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-secondary/5 rounded-full animate-float" style={{ animationDelay: '3s' }}></div>
      </div>
    </section>
  )
}