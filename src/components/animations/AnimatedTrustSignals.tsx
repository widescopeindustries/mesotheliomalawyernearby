import { useCurrentFrame, useVideoConfig, spring, interpolate } from 'remotion';
import { Shield, Award, Star, Users, CheckCircle, Clock } from 'lucide-react';

export const AnimatedTrustSignals = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Title animation
  const titleOpacity = interpolate(frame, [0, 1 * fps], [0, 1], {
    extrapolateRight: 'clamp',
  });
  const titleScale = spring({
    frame,
    fps,
    config: { damping: 200 },
  });

  // Subtitle animation
  const subtitleOpacity = interpolate(frame, [0.5 * fps, 1.5 * fps], [0, 1], {
    extrapolateRight: 'clamp',
  });

  // Main trust cards staggered animation
  const cardAnimations = [0, 1, 2, 3].map((index) => {
    const cardScale = spring({
      frame: frame - (2 + index * 0.15) * fps,
      fps,
      config: { damping: 15, stiffness: 200 },
      delay: 10,
    });
    const cardOpacity = interpolate(frame, [(2 + index * 0.15) * fps, (2.5 + index * 0.15) * fps], [0, 1], {
      extrapolateRight: 'clamp',
    });
    const cardRotate = interpolate(frame, [(2 + index * 0.15) * fps, (3 + index * 0.15) * fps], [5, 0], {
      extrapolateRight: 'clamp',
    });
    return { scale: cardScale, opacity: cardOpacity, rotate: cardRotate };
  });

  // Additional trust elements
  const trustElementAnimations = [0, 1, 2].map((index) => {
    const elementScale = spring({
      frame: frame - (4 + index * 0.1) * fps,
      fps,
      config: { damping: 200 },
      delay: 8,
    });
    const elementOpacity = interpolate(frame, [(4 + index * 0.1) * fps, (4.5 + index * 0.1) * fps], [0, 1], {
      extrapolateRight: 'clamp',
    });
    return { scale: elementScale, opacity: elementOpacity };
  });

  // Badge animations
  const badgeAnimations = [0, 1, 2, 3, 4].map((index) => {
    const badgeScale = spring({
      frame: frame - (5.5 + index * 0.08) * fps,
      fps,
      config: { damping: 20, stiffness: 200 },
      delay: 5,
    });
    const badgeOpacity = interpolate(frame, [(5.5 + index * 0.08) * fps, (6 + index * 0.08) * fps], [0, 1], {
      extrapolateRight: 'clamp',
    });
    return { scale: badgeScale, opacity: badgeOpacity };
  });

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
            className="font-serif text-3xl md:text-4xl font-bold text-center mb-6 text-foreground"
            style={{ 
              opacity: titleOpacity,
              transform: `scale(${titleScale})`,
            }}
          >
            Why Trust Our Service
          </h2>
          
          {/* Subtitle */}
          <p 
            className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto text-lg"
            style={{ opacity: subtitleOpacity }}
          >
            As a veteran-owned company, we built this service on the foundation of integrity, honor, and commitment to those who served.
          </p>

          {/* Main Trust Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {trustCards.map((card, index) => {
              const animation = cardAnimations[index];
              const Icon = card.icon;
              return (
                <div 
                  key={index}
                  className="text-center p-8 bg-background rounded-lg border shadow-lg"
                  style={{ 
                    opacity: animation.opacity,
                    transform: `scale(${animation.scale}) rotate(${animation.rotate}deg)`,
                  }}
                >
                  <div className="space-y-4 pt-6">
                    <div className="transition-all duration-200">
                      <Icon className="h-12 w-12 text-accent mx-auto" />
                    </div>
                    <h3 className="font-serif font-semibold text-lg">{card.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {card.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Additional Trust Elements */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {trustElements.map((element, index) => {
              const animation = trustElementAnimations[index];
              const Icon = element.icon;
              return (
                <div 
                  key={index}
                  className="flex items-center gap-4 p-8 bg-background rounded-lg border shadow-lg"
                  style={{ 
                    opacity: animation.opacity,
                    transform: `scale(${animation.scale})`,
                  }}
                >
                  <div className="transition-all duration-200">
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
            <h3 
              className="font-serif text-xl font-semibold"
              style={{ 
                opacity: interpolate(frame, [5 * fps, 5.5 * fps], [0, 1], {
                  extrapolateRight: 'clamp',
                })
              }}
            >
              Our Commitment to Excellence
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {badges.map((badge, index) => {
                const animation = badgeAnimations[index];
                const Icon = badge.icon;
                return (
                  <div 
                    key={index}
                    className="inline-flex items-center gap-2 px-6 py-3 text-sm border rounded-lg cursor-default bg-background"
                    style={{ 
                      opacity: animation.opacity,
                      transform: `scale(${animation.scale})`,
                    }}
                  >
                    <Icon className="h-4 w-4 mr-2" />
                    {badge.text}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};