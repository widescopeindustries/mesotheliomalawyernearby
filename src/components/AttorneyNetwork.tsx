import { Card, CardContent } from '@/components/ui/card'
import { Shield, Scale, Award, Users, CheckCircle } from 'lucide-react'

const networkFeatures = [
  {
    icon: Scale,
    title: 'Specialized Mesothelioma Attorneys',
    description: 'Every attorney in our network focuses exclusively on asbestos litigation with proven track records in mesothelioma cases.',
  },
  {
    icon: Award,
    title: 'Billions Recovered',
    description: 'Our partner firms have collectively recovered billions of dollars for mesothelioma victims and their families nationwide.',
  },
  {
    icon: Users,
    title: 'Nationwide Coverage',
    description: 'We maintain partnerships with leading mesothelioma law firms across all 50 states, ensuring you get local expertise wherever you are.',
  },
]

const qualifications = [
  'Minimum 10+ years of asbestos litigation experience',
  'Proven track record of successful mesothelioma verdicts and settlements',
  'Resources to handle complex, multi-defendant cases',
  'Contingency fee basis - no upfront costs to you',
  'Experience with asbestos trust fund claims',
  'Understanding of VA benefits for veteran clients',
]

export function AttorneyNetwork() {
  return (
    <section className="py-20 bg-muted/40">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
              <Shield className="h-5 w-5 text-primary" />
              <span className="text-sm font-semibold text-primary">Vetted Attorney Network</span>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
              Our Attorney Network
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We don&apos;t work with just any lawyer. Every attorney in our network has been carefully
              vetted for their experience, results, and commitment to mesothelioma victims.
            </p>
          </div>

          {/* Network Features */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {networkFeatures.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-serif font-bold text-xl mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Qualification Criteria */}
          <Card className="border-2 border-primary/20">
            <CardContent className="p-8 md:p-12">
              <h3 className="font-serif text-2xl font-bold mb-8 text-center">
                What We Require From Our Partner Attorneys
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {qualifications.map((qual, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{qual}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
