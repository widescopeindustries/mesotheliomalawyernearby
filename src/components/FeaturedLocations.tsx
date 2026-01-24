import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, TrendingUp, Users } from "lucide-react"
import Link from "next/link"

// Featured high-value locations
const featuredLocations = [
  {
    state: "New Mexico",
    city: "Albuquerque",
    description: "Experienced attorneys serving asbestos victims",
    slug: "new-mexico/albuquerque"
  },
  {
    state: "Missouri",
    city: "St. Louis",
    description: "Trusted legal representation for mesothelioma cases",
    slug: "missouri/st-louis"
  },
  {
    state: "Texas",
    city: "Houston",
    description: "Specialized lawyers with industrial exposure expertise",
    slug: "texas/houston"
  },
  {
    state: "California",
    city: "Los Angeles",
    description: "Leading mesothelioma legal advocates",
    slug: "california/los-angeles"
  },
  {
    state: "New York",
    city: "Buffalo",
    description: "Dedicated to helping asbestos exposure victims",
    slug: "new-york/buffalo"
  },
  {
    state: "Ohio",
    city: "Cleveland",
    description: "Expert legal support for manufacturing workers",
    slug: "ohio/cleveland"
  }
]

export const FeaturedLocations = () => {
  return (
    <section className="py-16 bg-muted/40">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Featured Locations
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We connect mesothelioma victims with experienced local attorneys across the United States.
              Our focused approach ensures you get specialized legal help in your area.
            </p>
          </div>

          {/* Main Location Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {featuredLocations.map((location, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-1">
                        {location.city}, {location.state}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        {location.description}
                      </p>
                      <Link href={`/location/${location.slug}`}>
                        <Button variant="outline" size="sm">
                          View Local Attorneys
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Value Proposition */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Targeted Markets</h3>
              <p className="text-sm text-muted-foreground">
                We focus on high-value locations where specialized legal representation makes the biggest impact
              </p>
            </div>
            <div className="text-center">
              <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Local Expertise</h3>
              <p className="text-sm text-muted-foreground">
                Each attorney network understands local asbestos exposure sites and state-specific regulations
              </p>
            </div>
            <div className="text-center">
              <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">National Reach</h3>
              <p className="text-sm text-muted-foreground">
                From coast to coast, we connect you with qualified mesothelioma lawyers in your community
              </p>
            </div>
          </div>

          {/* CTA for All Locations */}
          <div className="text-center p-8 bg-background rounded-lg border">
            <h3 className="text-xl font-semibold mb-3">Don&apos;t See Your Location?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              We serve mesothelioma victims across all 50 states. Even if your city isn&apos;t featured,
              we can connect you with experienced legal help in your area.
            </p>
            <Button size="lg">
              Find Legal Help in Your State
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}