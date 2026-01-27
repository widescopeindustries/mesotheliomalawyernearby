import { useCurrentFrame, useVideoConfig, spring, interpolate } from 'remotion';
import { Phone, Shield, Clock } from 'lucide-react';

export const AnimatedHeroSection = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Veteran badge animation
  const badgeOpacity = interpolate(frame, [0, 0.5 * fps], [0, 1], {
    extrapolateRight: 'clamp',
  });
  const badgeScale = spring({
    frame,
    fps,
    config: { damping: 200 },
  });

  // Title typewriter effect
  const titleText = "Get Experienced Legal Help for";
  const titleProgress = interpolate(frame, [0.5 * fps, 2 * fps], [0, titleText.length], {
    extrapolateRight: 'clamp',
  });
  const displayedTitle = titleText.slice(0, Math.floor(titleProgress));

  // Mesothelioma highlight animation
  const mesotheliomaScale = spring({
    frame: frame - 2 * fps,
    fps,
    config: { damping: 20, stiffness: 200 },
    delay: 10,
  });

  // Description fade-in
  const descriptionOpacity = interpolate(frame, [2 * fps, 3 * fps], [0, 1], {
    extrapolateRight: 'clamp',
  });

  // Phone button animation
  const phoneScale = spring({
    frame: frame - 3 * fps,
    fps,
    config: { damping: 15, stiffness: 200 },
    delay: 15,
  });

  // Feature cards staggered animation
  const cardAnimations = [0, 1, 2].map((index) => {
    const cardScale = spring({
      frame: frame - (3.5 + index * 0.2) * fps,
      fps,
      config: { damping: 200 },
      delay: 10,
    });
    const cardOpacity = interpolate(frame, [(3.5 + index * 0.2) * fps, (4 + index * 0.2) * fps], [0, 1], {
      extrapolateRight: 'clamp',
    });
    return { scale: cardScale, opacity: cardOpacity };
  });

  return (
    <section className="relative bg-gradient-to-br from-primary/10 to-primary/5 py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Veteran Badge */}
          <div 
            className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm px-4 py-2 rounded-full mb-8"
            style={{ 
              opacity: badgeOpacity,
              transform: `scale(${badgeScale})`,
            }}
          >
            <Shield className="h-5 w-5 text-accent" />
            <span className="text-sm font-semibold text-accent-foreground">Service-Disabled Veteran-Owned</span>
          </div>

          {/* Animated Title */}
          <h1 className="font-serif text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-8">
            {displayedTitle}
            <span 
              className="text-primary inline-block"
              style={{ transform: `scale(${mesotheliomaScale})` }}
            >
              Mesothelioma
            </span>
            {titleProgress < titleText.length && (
              <span className="animate-pulse">|</span>
            )}
          </h1>

          {/* Description */}
          <p 
            className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed"
            style={{ opacity: descriptionOpacity }}
          >
            Connect with specialized mesothelioma lawyers who understand the urgency of your situation.
            As a veteran-owned service, we&apos;re committed to helping you get the compensation you deserve.
          </p>

          {/* Phone Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <a 
              href="tel:682-999-0953" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6 h-auto inline-flex items-center rounded-lg transition-all hover:shadow-xl"
              style={{ transform: `scale(${phoneScale})` }}
              aria-label="Call us 24/7 at (682) 999-0953"
            >
              <Phone className="h-5 w-5 mr-2" aria-hidden="true" />
              (682) 999-0953
              <span className="ml-2 text-xs bg-accent-foreground/20 text-accent-foreground px-2 py-1 rounded">24/7</span>
            </a>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {[
              { icon: Phone, title: "Immediate Help", subtitle: "Available 24/7" },
              { icon: Shield, title: "Veteran Trusted", subtitle: "SDVOSB Certified" },
              { icon: Clock, title: "Fast Response", subtitle: "Quick Legal Action" }
            ].map((item, index) => {
              const animation = cardAnimations[index];
              const Icon = item.icon;
              return (
                <div 
                  key={index}
                  className="flex items-center gap-4 p-4 rounded-lg bg-muted/50"
                  style={{ 
                    opacity: animation.opacity,
                    transform: `scale(${animation.scale})`,
                  }}
                >
                  <div className="h-12 w-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <Icon className="h-6 w-6 text-accent" />
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
    </section>
  );
};