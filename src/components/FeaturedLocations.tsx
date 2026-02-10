'use client'

import { MapPin, ArrowRight, Search } from "lucide-react"
import Link from "next/link"
import { TARGET_KEYWORDS } from "@/data/keywords"
import { useState, useMemo } from "react"

export const FeaturedLocations = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [showAllStates, setShowAllStates] = useState(false)

  // Get unique states for the grid
  const statePages = useMemo(() => {
    return TARGET_KEYWORDS.filter(k => 'isStatePage' in k && k.isStatePage)
  }, [])

  // Filter locations based on search
  const filteredLocations = useMemo(() => {
    if (!searchQuery.trim()) return []
    const query = searchQuery.toLowerCase()
    return TARGET_KEYWORDS.filter(
      k => k.city.toLowerCase().includes(query) || k.state.toLowerCase().includes(query)
    ).slice(0, 8)
  }, [searchQuery])

  return (
    <section id="locations" className="py-20 md:py-28 bg-muted/40">
      <div className="container mx-auto px-6 md:px-8">
        <div className="max-w-5xl mx-auto">

          {/* Header */}
          <div className="text-center mb-12">
            <p className="text-secondary font-bold text-lg mb-4">Nationwide Coverage</p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
              Find a Lawyer in Your State
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We connect mesothelioma victims with experienced local attorneys.
              Select your state or search for your city below.
            </p>
          </div>

          {/* Search Box - large, easy to use */}
          <div className="max-w-xl mx-auto mb-12">
            <label htmlFor="location-search" className="block text-base font-bold text-foreground mb-3 text-center">
              Search for Your City or State
            </label>
            <div className="relative">
              <input
                id="location-search"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Type your city or state name..."
                className="w-full px-6 py-5 text-lg border-2 border-border rounded-2xl bg-background focus:ring-4 focus:ring-accent/30 focus:border-accent transition-all pr-14"
                aria-describedby="search-help"
              />
              <div className="absolute right-5 top-1/2 -translate-y-1/2">
                <Search className="h-6 w-6 text-muted-foreground" aria-hidden="true" role="img" />
              </div>
            </div>
            <p id="search-help" className="text-muted-foreground text-base mt-3 text-center">
              We serve {TARGET_KEYWORDS.length.toLocaleString()}+ locations across all 50 states
            </p>

            {/* Search Results */}
            {filteredLocations.length > 0 && (
              <div className="mt-4 bg-card border-2 border-border rounded-2xl shadow-card p-4 space-y-2">
                {filteredLocations.map((location) => (
                  <Link
                    key={location.slug}
                    href={`/location/${location.slug}`}
                    className="flex items-center gap-4 p-4 rounded-xl hover:bg-muted transition-colors min-h-touch"
                  >
                    <MapPin className="h-5 w-5 text-secondary flex-shrink-0" aria-hidden="true" role="img" />
                    <span className="text-lg font-medium text-foreground">
                      {'isStatePage' in location && location.isStatePage ? location.state : `${location.city}, ${location.state}`}
                    </span>
                    <ArrowRight className="h-5 w-5 text-muted-foreground ml-auto" aria-hidden="true" role="img" />
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* State Grid - larger cards, fewer columns for readability */}
          <div className="mb-10">
            <h3 className="text-xl font-bold text-center mb-8 text-foreground">
              Or Select Your State
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {(showAllStates ? statePages : statePages.slice(0, 12)).map((location) => (
                <Link
                  key={location.slug}
                  href={`/location/${location.slug}`}
                  className="group"
                >
                  <div className="bg-card border-2 border-border rounded-xl p-5 hover:border-accent hover:shadow-card transition-all min-h-touch flex items-center gap-4">
                    <div className="h-12 w-12 bg-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-secondary/20 transition-colors">
                      <MapPin className="h-6 w-6 text-secondary" aria-hidden="true" role="img" />
                    </div>
                    <div className="flex-1">
                      <span className="font-bold text-lg text-foreground group-hover:text-accent transition-colors">
                        {location.state}
                      </span>
                    </div>
                    <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-accent transition-colors" aria-hidden="true" role="img" />
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Show More Button */}
          {statePages.length > 12 && (
            <div className="text-center">
              <button
                onClick={() => setShowAllStates(!showAllStates)}
                className="inline-flex items-center gap-3 bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-xl font-bold text-lg transition-all min-h-touch"
                aria-expanded={showAllStates}
              >
                {showAllStates ? 'Show Less' : `View All ${statePages.length} States`}
                <ArrowRight className={`h-5 w-5 transition-transform ${showAllStates ? 'rotate-90' : ''}`} aria-hidden="true" role="img" />
              </button>
            </div>
          )}

          {/* Directory Link */}
          <div className="mt-12 text-center">
            <p className="text-muted-foreground text-lg mb-4">
              Looking for a specific city?
            </p>
            <Link
              href="/directory"
              className="inline-flex items-center gap-3 text-primary hover:text-primary/80 font-bold text-xl underline underline-offset-4 min-h-touch"
            >
              View Full Lawyer Directory
              <ArrowRight className="h-5 w-5" aria-hidden="true" role="img" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}