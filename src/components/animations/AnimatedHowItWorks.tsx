import { useCurrentFrame, useVideoConfig, spring, interpolate } from 'remotion';
import { Phone, MapPin, Users, CheckCircle } from 'lucide-react';

export const AnimatedHowItWorks = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Title animation
  const titleOpacity = interpolate(frame, [0, 1 * fps], [0, 1], {
    extrapolateRight: 'clamp',
  });

  // Subtitle animation
  const subtitleOpacity = interpolate(frame, [0.5 * fps, 1.5 * fps], [0, 1], {
    extrapolateRight: 'clamp',
  });

  // Step cards staggered animation with connecting line effect
  const stepAnimations = [0, 1, 2, 3].map((index) => {
    const cardScale = spring({
      frame: frame - (2 + index * 0.2) * fps,
      fps,
      config: { damping: 15, stiffness: 200 },
      delay: 12,
    });
    const cardOpacity = interpolate(frame, [(2 + index * 0.2) * fps, (2.5 + index * 0.2) * fps], [0, 1], {
      extrapolateRight: 'clamp',
    });
    const cardY = interpolate(frame, [(2 + index * 0.2) * fps, (3 + index * 0.2) * fps], [50, 0], {
      extrapolateRight: 'clamp',
    });
    
    // Number badge animation
    const numberScale = spring({
      frame: frame - (2.5 + index * 0.2) * fps,
      fps,
      config: { damping: 8, stiffness: 300 },
      delay: 8,
    });
    
    // Icon animation
    const iconScale = spring({
      frame: frame - (2.8 + index * 0.2) * fps,
      fps,
      config: { damping: 20, stiffness: 200 },
      delay: 10,
    });
    
    return { 
      scale: cardScale, 
      opacity: cardOpacity, 
      y: cardY,
      numberScale: numberScale,
      iconScale: iconScale
    };
  });

  // Emergency section animation
  const emergencyScale = spring({
    frame: frame - 5 * fps,
    fps,
    config: { damping: 200 },
    delay: 20,
  });
  const emergencyOpacity = interpolate(frame, [5 * fps, 5.5 * fps], [0, 1], {
    extrapolateRight: 'clamp',
  });

  // Phone pulse animation in emergency section
  const phonePulse = spring({
    frame: frame - 5.5 * fps,
    fps,
    config: { damping: 8, stiffness: 150 },
  });
  const phoneScale = 1 + Math.sin(phonePulse * Math.PI * 2) * 0.1;

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
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 
              className="font-serif text-3xl md:text-4xl font-bold mb-6 text-foreground"
              style={{ opacity: titleOpacity }}
            >
              How Our Service Works
            </h2>
            <p 
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
              style={{ opacity: subtitleOpacity }}
            >
              Getting legal help for mesothelioma should be simple. We&apos;ve streamlined the process to connect you quickly with experienced attorneys.
            </p>
          </div>

          {/* Step Cards */}
          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const animation = stepAnimations[index];
              const Icon = step.icon;
              return (
                <div 
                  key={index}
                  className="relative bg-background rounded-lg border shadow-lg"
                  style={{ 
                    opacity: animation.opacity,
                    transform: `scale(${animation.scale}) translateY(${animation.y}px)`,
                  }}
                >
                  <div className="p-8 text-center">
                    {/* Step Number */}
                    <div 
                      className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold text-sm shadow-md"
                      style={{ transform: `translateX(-50%) scale(${animation.numberScale})` }}
                    >
                      {index + 1}
                    </div>
                    
                    {/* Icon */}
                    <div 
                      className="h-12 w-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4"
                      style={{ transform: `scale(${animation.iconScale})` }}
                    >
                      <Icon className="h-6 w-6 text-accent" />
                    </div>
                    
                    {/* Content */}
                    <h3 className="font-serif font-semibold text-lg mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Emergency Section */}
          <div 
            className="mt-16 p-8 bg-accent/10 border-2 border-accent/30 rounded-lg shadow-lg"
            style={{ 
              opacity: emergencyOpacity,
              transform: `scale(${emergencyScale})`,
            }}
          >
            <div className="flex items-center gap-4">
              <div 
                className="h-12 w-12 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ transform: `scale(${phoneScale})` }}
              >
                <Phone className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h3 className="font-serif font-semibold text-lg text-foreground mb-1">Need Immediate Help?</h3>
                <p className="text-muted-foreground">
                  Time is critical in mesothelioma cases. Call us now at{' '}
                  <a 
                    href="tel:682-999-0953" 
                    className="font-bold text-accent hover:text-accent/80 transition-colors"
                  >
                    (682) 999-0953
                  </a>{' '}
                  for immediate assistance. Our team is standing by 24/7 to help you understand your legal options.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};