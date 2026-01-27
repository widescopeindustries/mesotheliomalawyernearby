'use client';

import { Card, CardContent } from "@/components/ui/card"
import { Phone, MapPin, Users, CheckCircle } from "lucide-react"
import { useScrollAnimation } from "@/lib/animations"

export const EnhancedHowItWorks = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation({ threshold: 0.1 });
  const { ref: subtitleRef, isVisible: subtitleVisible } = useScrollAnimation({ threshold: 0.1 });
  
  const stepRefs = [useScrollAnimation(), useScrollAnimation(), useScrollAnimation(), useScrollAnimation()];
  const { ref: emergencyRef, isVisible: emergencyVisible } = useScrollAnimation({ threshold: 0.1 });

  const steps = [
    { 
      icon: Phone, 
      title: "Call or Click", 
      description: "Reach out 24/7 through our hotline or online form. No cost, no obligation."
    },
    { 
      icon: Users, 
      title: "Free Consultation", 
      description: "Speak with our legal team who understands mesothelioma cases and veteran exposure."
    },
    { 
      icon: MapPin, 
      title: "Match with Attorney", 
      description: "We connect you with experienced mesothelioma lawyers in your area who specialize in your type of case."
    },
    { 
      icon: CheckCircle, 
      title: "Get Legal Help", 
      description: "Your attorney begins working immediately on your case with no upfront costs to you."
    }
  ];

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 
              ref={titleRef}
              className={`font-serif text-3xl md:text-4xl font-bold mb-6 text-foreground transition-all duration-1000 transform ${
                titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
              }`}
            >
              How Our Service Works
            </h2>
            <p 
              ref={subtitleRef}
              className={`text-lg text-muted-foreground max-w-2xl mx-auto transition-all duration-700 transform ${
                subtitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              Getting legal help for mesothelioma should be simple. We&apos;ve streamlined the process to connect you quickly with experienced attorneys.
            </p>
          </div>

          {/* Step Cards */}
          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const { ref, isVisible } = stepRefs[index];
              const Icon = step.icon;
              return (
                <Card 
                  key={index}
                  ref={ref}
                  className={`relative transition-all duration-700 transform hover:shadow-xl hover:scale-105 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <CardContent className="p-8 text-center">
                    {/* Step Number */}
                    <div className={`absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold text-sm shadow-md transition-all duration-500 ${
                      isVisible ? 'scale-100' : 'scale-0'
                    }`}>
                      {index + 1}
                    </div>
                    
                    {/* Icon */}
                    <div className={`h-12 w-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-500 hover:bg-accent/30 hover:scale-110 ${
                      isVisible ? 'scale-100' : 'scale-0'
                    }`} style={{ transitionDelay: `${index * 150 + 100}ms` }}>
                      <Icon className="h-6 w-6 text-accent" />
                    </div>
                    
                    {/* Content */}
                    <h3 className="font-serif font-semibold text-lg mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Emergency Section */}
          <div 
            ref={emergencyRef}
            className={`mt-16 p-8 bg-accent/10 border-2 border-accent/30 rounded-lg transition-all duration-1000 transform hover:border-accent hover:shadow-lg hover:scale-102 ${
              emergencyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 hover:bg-accent/30 hover:scale-110 hover:rotate-12 animate-pulse-slow">
                <Phone className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h3 className="font-serif font-semibold text-lg text-foreground mb-1">Need Immediate Help?</h3>
                <p className="text-muted-foreground">
                  Time is critical in mesothelioma cases. Call us now at{' '}
                  <a href="tel:214-699-4543" className="font-bold text-accent hover:text-accent/80 transition-colors hover:underline">
                    (214) 699-4543
                  </a>{' '}
                  for immediate assistance. Our team is standing by 24/7 to help you understand your legal options.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-64 h-64 bg-primary/5 rounded-full animate-float"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-accent/5 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
    </section>
  )
}