import { Metadata } from 'next'
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { Award, Heart, Users, Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Us - Veteran-Owned Mesothelioma Legal Referral Service',
  description: 'Learn about our veteran-owned mesothelioma legal referral service. Built on integrity, service, and commitment to helping asbestos exposure victims find experienced legal help.',
  keywords: ['about mesothelioma lawyer nearby', 'veteran owned legal service', 'sdvosb mesothelioma', 'asbestos legal referral'],
  openGraph: {
    title: 'About Us - Veteran-Owned Mesothelioma Legal Service',
    description: 'A veteran-owned company dedicated to connecting mesothelioma victims with experienced legal representation.',
    type: 'website',
    url: 'https://mesotheliomalawyernearby.com/about',
  },
  alternates: {
    canonical: 'https://mesotheliomalawyernearby.com/about',
  },
}

const SDVOSB_LOGO_URL = "/images/sba-sdvosb-logo.png"
const OWNER_PORTRAIT_URL = "/images/owner-portrait.jpg"
const SBA_VERIFICATION_URL = "https://veterans.certify.sba.gov/#search"

export default function AboutPage() {
  return (
    <main>
      <div className="bg-background">
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-primary">
            Veterans Serving Those Who Served: Built on a Foundation of Honor
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            Mesothelioma Lawyer Nearby is a veteran-owned platform dedicated to connecting asbestos exposure victims with experienced legal representation. We&apos;re not just another directory; we&apos;re your fellow service members committed to helping you navigate the legal process with dignity and respect.
          </p>
        </div>
      </div>

      {/* Our Mission Section */}
      <div className="py-16 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Our Mission</h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              To empower mesothelioma victims and their families with reliable, compassionate guidance and connect them with the most qualified,
              experienced legal professionals in the country. We believe in <strong className="text-foreground">integrity, service,
                and unwavering support</strong> — because facing mesothelioma is challenging enough without having to worry about finding trustworthy legal help.
            </p>
            <div className="mt-8 inline-flex items-center gap-2 bg-background/80 backdrop-blur-sm px-6 py-3 rounded-full border border-primary/20">
              <Heart className="h-5 w-5 text-primary" />
              <span className="text-sm font-semibold text-foreground">Serving with Honor and Compassion</span>
            </div>
          </div>
        </div>
      </div>

      {/* Veteran-Owned Section */}
      <div className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-foreground">
              A Service-Disabled Veteran-Owned Small Business
            </h2>

            <Card className="overflow-hidden shadow-xl border-2 border-primary/20">
              <div className="md:flex">
                <div className="md:w-2/5 bg-gradient-to-br from-primary/10 to-primary/20 p-12 flex flex-col items-center justify-center">
                  <Image
                    src={SDVOSB_LOGO_URL}
                    alt="SBA Certified Service-Disabled Veteran-Owned Small Business Logo"
                    className="w-48 h-48 mb-6"
                    width={240}
                    height={300}
                    loading="lazy"
                    sizes="192px"
                  />
                  <a
                    href={SBA_VERIFICATION_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-center text-primary hover:underline font-semibold flex items-center gap-2"
                  >
                    <Award className="h-5 w-5" />
                    Verify Our Certification
                  </a>
                </div>
                <div className="md:w-3/5 p-8 md:p-12">
                  <div className="flex flex-col md:flex-row gap-6 mb-6">
                    <div className="flex-1">
                      <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
                        Mesothelioma Lawyer Nearby is proudly owned and operated by{" "}
                        <strong className="font-semibold text-foreground">Widescope Industries LLC</strong>,
                        a Texas-based, Service-Disabled Veteran-Owned Small Business (SDVOSB) officially certified
                        by the U.S. Small Business Administration (SBA).
                      </p>
                      <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
                        This certification represents more than just a business credential — it embodies our core values:{" "}
                        <strong className="font-semibold text-foreground">integrity, discipline, and an unwavering
                          commitment to service</strong>. These principles guide our mission to serve mesothelioma victims
                        and their families with the same honor and dedication that defined our military service.
                      </p>
                    </div>
                    <div className="flex flex-col items-center md:items-start">
                      <Image
                        src={OWNER_PORTRAIT_URL}
                        alt="Owner Portrait - Veteran Service-Disabled Business Owner"
                        className="w-56 h-auto rounded-lg shadow-lg mb-3"
                        width={720}
                        height={1560}
                        loading="lazy"
                        sizes="224px"
                        quality={90}
                      />
                      <p className="text-sm text-center md:text-left text-muted-foreground italic max-w-[224px]">
                        &quot;New Mission, Same Commitment to Service and Honor.&quot;
                      </p>
                    </div>
                  </div>
                  <div className="bg-primary/10 border-l-4 border-primary p-4 rounded">
                    <p className="text-sm md:text-base text-foreground font-medium">
                      When you use our service, you&apos;re supporting a veteran-owned business dedicated to helping
                      fellow veterans and all Americans affected by asbestos exposure with the same commitment to excellence
                      that defined our military service.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-16 bg-muted/40">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">What Drives Us</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 text-primary mx-auto mb-4">
                  <Heart className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Our Purpose</h3>
                <p className="text-muted-foreground">
                  To provide mesothelioma victims with a compassionate, reliable resource to find experienced legal representation without additional stress.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 text-primary mx-auto mb-4">
                  <Award className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Our Values</h3>
                <p className="text-muted-foreground">
                  Honesty, integrity, and compassionate service. We operate with the same values that guided our military service.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 text-primary mx-auto mb-4">
                  <Users className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Our Community</h3>
                <p className="text-muted-foreground">
                  We are veterans serving veterans and all Americans affected by asbestos exposure. Your fight is our fight.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Special Veteran Support Section */}
      <div className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-primary/20 shadow-xl">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 text-primary mx-auto mb-4">
                    <Phone className="w-8 h-8" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                    Special Support for Veterans
                  </h2>
                </div>
                <div className="space-y-4 text-center">
                  <p className="text-lg text-muted-foreground">
                    We understand the unique challenges veterans face when dealing with mesothelioma, including:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 mt-6">
                    <div className="text-left p-4 bg-muted/30 rounded-lg">
                      <h4 className="font-semibold text-foreground mb-2">VA Claims & Benefits</h4>
                      <p className="text-sm text-muted-foreground">
                        Guidance on navigating VA disability claims related to asbestos exposure during service
                      </p>
                    </div>
                    <div className="text-left p-4 bg-muted/30 rounded-lg">
                      <h4 className="font-semibold text-foreground mb-2">Military Exposure Sites</h4>
                      <p className="text-sm text-muted-foreground">
                        Knowledge of military bases and installations where asbestos exposure was common
                      </p>
                    </div>
                    <div className="text-left p-4 bg-muted/30 rounded-lg">
                      <h4 className="font-semibold text-foreground mb-2">Veteran-to-Veteran Support</h4>
                      <p className="text-sm text-muted-foreground">
                        Understanding the unique bond and shared experiences among service members
                      </p>
                    </div>
                    <div className="text-left p-4 bg-muted/30 rounded-lg">
                      <h4 className="font-semibold text-foreground mb-2">Service Connection</h4>
                      <p className="text-sm text-muted-foreground">
                        Help establishing service connection for asbestos-related illnesses
                      </p>
                    </div>
                  </div>
                  <div className="mt-8 p-4 bg-primary/10 border-l-4 border-primary rounded">
                    <p className="text-sm md:text-base text-foreground font-medium">
                      As veterans who&apos;ve transitioned to civilian life, we understand the challenges you face.
                      Let us help you connect with legal professionals who respect your service and understand your unique situation.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  )
}