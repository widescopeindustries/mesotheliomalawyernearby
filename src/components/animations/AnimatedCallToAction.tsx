import { useCurrentFrame, useVideoConfig, spring, interpolate } from 'remotion';
import { Phone, Shield, Clock } from 'lucide-react';

export const AnimatedCallToAction = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Trust Badge animation
  const badgeOpacity = interpolate(frame, [0, 0.5 * fps], [0, 1], {
    extrapolateRight: 'clamp',
  });
  const badgeScale = spring({
    frame,
    fps,
    config: { damping: 200 },
  });

  // Main title animation with word reveal
  const titleWords = ["Get", "Immediate", "Legal", "Help", "Today"];
  const titleAnimations = titleWords.map((_, index) => {
    const wordOpacity = interpolate(frame, [(0.8 + index * 0.1) * fps, (1.2 + index * 0.1) * fps], [0, 1], {
      extrapolateRight: 'clamp',
    });
    const wordY = interpolate(frame, [(0.8 + index * 0.1) * fps, (1.2 + index * 0.1) * fps], [30, 0], {
      extrapolateRight: 'clamp',
    });
    return { opacity: wordOpacity, y: wordY };
  });

  // Description animation
  const descriptionOpacity = interpolate(frame, [1.5 * fps, 2.5 * fps], [0, 1], {
    extrapolateRight: 'clamp',
  });

  // Primary button animation with pulse effect
  const primaryButtonScale = spring({
    frame: frame - 2.5 * fps,
    fps,
    config: { damping: 8, stiffness: 150 },
    delay: 15,
  });
  const primaryButtonOpacity = interpolate(frame, [2.5 * fps, 3 * fps], [0, 1], {
    extrapolateRight: 'clamp',
  });

  // Button pulse animation
  const pulseProgress = spring({
    frame: frame - 3.5 * fps,
    fps,
    config: { damping: 10, stiffness: 100 },
  });
  const pulseScale = 1 + Math.sin(pulseProgress * Math.PI * 2) * 0.05;

  // Secondary button animation
  const secondaryButtonScale = spring({
    frame: frame - 3 * fps,
    fps,
    config: { damping: 15, stiffness: 200 },
    delay: 10,
  });
  const secondaryButtonOpacity = interpolate(frame, [3 * fps, 3.5 * fps], [0, 1], {
    extrapolateRight: 'clamp',
  });

  // Value props staggered animation
  const valuePropAnimations = [0, 1, 2].map((index) => {
    const propScale = spring({
      frame: frame - (4 + index * 0.15) * fps,
      fps,
      config: { damping: 200 },
      delay: 12,
    });
    const propOpacity = interpolate(frame, [(4 + index * 0.15) * fps, (4.5 + index * 0.15) * fps], [0, 1], {
      extrapolateRight: 'clamp',
    });
    return { scale: propScale, opacity: propOpacity };
  });

  // Emergency message animation
  const emergencyScale = spring({
    frame: frame - 5.5 * fps,
    fps,
    config: { damping: 15, stiffness: 200 },
    delay: 20,
  });
  const emergencyOpacity = interpolate(frame, [5.5 * fps, 6 * fps], [0, 1], {
    extrapolateRight: 'clamp',
  });

  // Warning icon animation
  const warningPulse = spring({
    frame: frame - 6 * fps,
    fps,
    config: { damping: 8, stiffness: 150 },
  });
  const warningScale = 1 + Math.sin(warningPulse * Math.PI * 2) * 0.15;

  const valueProps = [
    { icon: Clock, title: "Fast Response", subtitle: "We answer 24/7" },
    { icon: Shield, title: "No Risk", subtitle: "Free consultation" },
    { icon: Phone, title: "Immediate Help", subtitle: "Call right now" }
  ];

  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Trust Badge */}
          <div 
            className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm px-4 py-2 rounded-full mb-8"
            style={{ 
              opacity: badgeOpacity,
              transform: `scale(${badgeScale})`,
            }}
          >
            <Shield className="h-5 w-5 text-accent" />
            <span className="text-sm font-semibold text-accent-foreground">Veteran-Owned & Trusted</span>
          </div>

          {/* Main CTA Title with word-by-word animation */}
          <h2 className="font-serif text-3xl md:text-5xl font-bold mb-8">
            {titleWords.map((word, index) => (
              <span
                key={index}
                className="inline-block mx-1"
                style={{
                  opacity: titleAnimations[index].opacity,
                  transform: `translateY(${titleAnimations[index].y}px)`,
                }}
              >
                {word}
              </span>
            ))}
          </h2>

          {/* Description */}
          <p 
            className="text-xl mb-12 max-w-2xl mx-auto leading-relaxed"
            style={{ opacity: descriptionOpacity }}
          >
            Don&apos;t wait. Time is critical in mesothelioma cases. Call now for a
            <span className="font-bold"> free, no-obligation consultation</span> with experienced attorneys who understand your situation.
          </p>

          {/* Primary Action Button with pulse */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <a
              href="tel:682-999-0953"
              className="text-lg px-8 py-6 h-auto bg-accent text-accent-foreground hover:bg-accent/90 inline-flex items-center rounded-lg shadow-2xl transition-all"
              style={{ 
                opacity: primaryButtonOpacity,
                transform: `scale(${primaryButtonScale * pulseScale})`,
              }}
            >
              <Phone className="h-5 w-5 mr-2" />
              (682) 999-0953
              <span className="ml-2 text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded">24/7 Available</span>
            </a>

            {/* Secondary Button */}
            <button
              className="text-lg px-8 py-6 h-auto border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary rounded-lg transition-all shadow-xl"
              style={{ 
                opacity: secondaryButtonOpacity,
                transform: `scale(${secondaryButtonScale})`,
              }}
            >
              Start Online Chat
            </button>
          </div>

          {/* Value Props */}
          <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto mb-16">
            {valueProps.map((prop, index) => {
              const animation = valuePropAnimations[index];
              const Icon = prop.icon;
              return (
                <div 
                  key={index}
                  className="flex items-center gap-4 p-4 rounded-lg bg-primary-foreground/10"
                  style={{ 
                    opacity: animation.opacity,
                    transform: `scale(${animation.scale})`,
                  }}
                >
                  <div className="transition-all duration-200">
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

          {/* Emergency Message with warning animation */}
          <div 
            className="mt-16 p-8 bg-primary-foreground/10 border-2 border-accent/50 rounded-lg shadow-lg"
            style={{ 
              opacity: emergencyOpacity,
              transform: `scale(${emergencyScale})`,
            }}
          >
            <p 
              className="text-lg font-serif font-medium mb-2 flex items-center justify-center gap-2"
            >
              <span style={{ transform: `scale(${warningScale})` }}>⚠️</span>
              Time-Sensitive Information
            </p>
            <p className="text-base opacity-90">
              Every state has time limits for filing mesothelioma claims. Don&apos;t risk losing your right to compensation.
              Call now to understand your legal options before it&apos;s too late.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};