import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, ArrowRight } from "lucide-react"
import Link from "next/link"
import { TARGET_KEYWORDS } from "@/data/keywords"

export const FeaturedLocations = () => {
  // Show first 12 locations
  const featuredLocations = TARGET_KEYWORDS.slice(0, 12)

  return (
    <section id="locations" className="py-16 bg-muted/40">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4">Nationwide Coverage</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Find a Mesothelioma Lawyer Near You
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We connect mesothelioma victims with experienced local attorneys across the United States.
              Select your location for a free consultation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
            {featuredLocations.map((location) => (
              <Link
                key={location.slug}
                href={`/location/${location.slug}`}
                className="group"
              >
                <Card className="h-full hover:shadow-lg hover:border-primary/50 transition-all group-hover:-translate-y-1">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                          {location.city}
                        </h3>
                        <p className="text-sm text-muted-foreground">{location.state}</p>
                      </div>
                      <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {/* Show More Link */}
          <div className="text-center mt-8">
            <p className="text-muted-foreground mb-4">
              Serving {TARGET_KEYWORDS.length}+ locations nationwide
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {TARGET_KEYWORDS.slice(12).map((location) => (
                <Link
                  key={location.slug}
                  href={`/location/${location.slug}`}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {location.city}, {location.state}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}