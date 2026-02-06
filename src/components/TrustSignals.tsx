import { Shield, Award, Star, Users, CheckCircle, Clock, Heart } from "lucide-react"

export const TrustSignals = () => {
  return (
    <section className="py-20 md:py-28 bg-muted/50">
      <div className="container mx-auto px-6 md:px-8">
        <div className="max-w-5xl mx-auto">

          {/* Section Header - larger, clearer */}
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
              Why Families Trust Us
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              As a veteran-owned company, we built this service on the foundation of
              integrity, honor, and commitment to helping families like yours.
            </p>
          </div>

          {/* Main Trust Cards - larger text, more padding, no hover effects that confuse */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">

            {/* Card 1 */}
            <div className="bg-card rounded-2xl p-8 md:p-10 shadow-card border border-border">
              <div className="flex items-start gap-5">
                <div className="h-16 w-16 rounded-2xl bg-secondary/15 flex items-center justify-center flex-shrink-0">
                  <Shield className="h-8 w-8 text-secondary" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-bold text-xl md:text-2xl text-foreground mb-3">
                    Veteran-Owned &amp; Operated
                  </h3>
                  <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                    Service-Disabled Veteran-Owned Small Business (SDVOSB) certified.
                    We understand the sacrifices you&apos;ve made.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-card rounded-2xl p-8 md:p-10 shadow-card border border-border">
              <div className="flex items-start gap-5">
                <div className="h-16 w-16 rounded-2xl bg-secondary/15 flex items-center justify-center flex-shrink-0">
                  <Award className="h-8 w-8 text-secondary" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-bold text-xl md:text-2xl text-foreground mb-3">
                    Experienced Attorneys
                  </h3>
                  <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                    We connect you with lawyers who specialize in mesothelioma cases
                    and have helped families secure millions in compensation.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-card rounded-2xl p-8 md:p-10 shadow-card border border-border">
              <div className="flex items-start gap-5">
                <div className="h-16 w-16 rounded-2xl bg-secondary/15 flex items-center justify-center flex-shrink-0">
                  <Clock className="h-8 w-8 text-secondary" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-bold text-xl md:text-2xl text-foreground mb-3">
                    24/7 Support
                  </h3>
                  <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                    We&apos;re available around the clock because we understand the urgency
                    of your situation. Call anytime, day or night.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-card rounded-2xl p-8 md:p-10 shadow-card border border-border">
              <div className="flex items-start gap-5">
                <div className="h-16 w-16 rounded-2xl bg-secondary/15 flex items-center justify-center flex-shrink-0">
                  <Heart className="h-8 w-8 text-secondary" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-bold text-xl md:text-2xl text-foreground mb-3">
                    Compassionate Care
                  </h3>
                  <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                    We treat every family with dignity and respect. We&apos;re here to
                    help, not to pressure you. Take your time.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Simple Trust Indicators - no confusing badges */}
          <div className="grid sm:grid-cols-3 gap-6 md:gap-8">
            <div className="flex items-center gap-4 bg-card rounded-xl p-6 border border-border">
              <CheckCircle className="h-8 w-8 text-secondary flex-shrink-0" aria-hidden="true" />
              <div>
                <h4 className="font-bold text-lg text-foreground">No Upfront Costs</h4>
                <p className="text-muted-foreground text-base">Free consultation, always</p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-card rounded-xl p-6 border border-border">
              <Star className="h-8 w-8 text-secondary flex-shrink-0" aria-hidden="true" />
              <div>
                <h4 className="font-bold text-lg text-foreground">Quick Response</h4>
                <p className="text-muted-foreground text-base">We call you back fast</p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-card rounded-xl p-6 border border-border">
              <Users className="h-8 w-8 text-secondary flex-shrink-0" aria-hidden="true" />
              <div>
                <h4 className="font-bold text-lg text-foreground">Veterans First</h4>
                <p className="text-muted-foreground text-base">We understand your service</p>
              </div>
            </div>
          </div>

          {/* Certification Badges - simple and clear */}
          <div className="mt-16 text-center">
            <p className="text-lg text-muted-foreground mb-6">Officially Recognized</p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              <div className="inline-flex items-center gap-2 bg-card border border-border px-6 py-3 rounded-xl">
                <Shield className="h-5 w-5 text-secondary" aria-hidden="true" />
                <span className="font-semibold text-foreground">SBA SDVOSB</span>
              </div>
              <div className="inline-flex items-center gap-2 bg-card border border-border px-6 py-3 rounded-xl">
                <Award className="h-5 w-5 text-secondary" aria-hidden="true" />
                <span className="font-semibold text-foreground">Veteran-Owned</span>
              </div>
              <div className="inline-flex items-center gap-2 bg-card border border-border px-6 py-3 rounded-xl">
                <CheckCircle className="h-5 w-5 text-secondary" aria-hidden="true" />
                <span className="font-semibold text-foreground">BBB Accredited</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}