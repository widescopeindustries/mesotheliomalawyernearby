import { Card, CardContent } from '@/components/ui/card'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    quote: "After my husband was diagnosed with mesothelioma from his years working at the shipyard, we didn't know where to turn. Mesothelioma Lawyer Nearby connected us with an attorney who truly understood our situation. The settlement helped cover his medical bills and gave our family financial security.",
    name: 'Sandra M.',
    location: 'Virginia',
    relationship: 'Spouse of Navy Veteran',
    stars: 5,
  },
  {
    quote: "As a retired pipefitter, I was exposed to asbestos for over 20 years without knowing the risks. The attorney I was matched with through this service recovered compensation from multiple trust funds. The process was handled with care and professionalism every step of the way.",
    name: 'Robert T.',
    location: 'Pennsylvania',
    relationship: 'Retired Pipefitter',
    stars: 5,
  },
  {
    quote: "When my father was diagnosed, time was critical. The team responded within hours of my call and had us speaking with a specialized attorney the same day. Being a veteran-owned service, they understood the military exposure my father experienced on his Navy destroyer.",
    name: 'Jennifer K.',
    location: 'Texas',
    relationship: 'Daughter of Veteran',
    stars: 5,
  },
  {
    quote: "I was skeptical at first, but the no-cost consultation put my mind at ease. The lawyer they connected me with had decades of mesothelioma experience and explained every option clearly. We secured compensation from an asbestos trust fund without ever going to trial.",
    name: 'Michael D.',
    location: 'Ohio',
    relationship: 'Construction Worker',
    stars: 5,
  },
]

export function Testimonials() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
              What Families Are Saying
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Real stories from families we&apos;ve helped navigate the mesothelioma legal process.
              Names have been changed to protect client privacy.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: testimonial.stars }).map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  
                  <div className="relative mb-6">
                    <Quote className="h-8 w-8 text-primary/20 absolute -top-2 -left-2" />
                    <p className="text-muted-foreground italic pl-6">
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>
                  </div>

                  <div className="border-t pt-4">
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.relationship} &mdash; {testimonial.location}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <p className="text-center text-xs text-muted-foreground mt-8">
            * Names changed for privacy. Testimonials represent individual experiences and results may vary.
            Past results do not guarantee future outcomes.
          </p>
        </div>
      </div>
    </section>
  )
}
