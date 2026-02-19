import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { MapPin, AlertTriangle, Shield, Building, ArrowRight, Search, Factory, Ship, Landmark } from 'lucide-react'
import Link from 'next/link'
import { EXPOSURE_SITE_DETAILS } from '@/data/exposure-sites'

export const metadata: Metadata = {
    title: 'Asbestos Exposure Sites Directory | Military, Industrial & Manufacturing',
    description: 'Comprehensive database of known asbestos exposure sites across the United States. Find history and legal help for shipyards, power plants, and factories.',
    keywords: 'asbestos exposure sites, shipyard asbestos, power plant asbestos, industrial asbestos sites, mesothelioma risk locations',
    alternates: {
        canonical: 'https://mesotheliomalawyernearby.com/exposure-sites',
    },
}

export default function ExposureSitesHub() {
    const siteTypes = Array.from(new Set(EXPOSURE_SITE_DETAILS.map(s => s.type)))

    return (
        <main className="min-h-screen">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-red-900 to-black text-white py-16 md:py-24">
                <div className="container mx-auto px-4 max-w-5xl text-center">
                    <Badge className="bg-red-600 text-white mb-6 py-1 px-4 text-sm font-bold uppercase tracking-widest border-none">
                        National Exposure Database
                    </Badge>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        Asbestos Exposure <span className="text-red-500">Sites Directory</span>
                    </h1>
                    <p className="text-xl md:text-2xl mb-10 opacity-90 max-w-3xl mx-auto leading-relaxed">
                        Identify high-risk shipyards, power plants, and industrial facilities with
                        documented asbestos exposure. Each site record includes history, products used, and legal status.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-16 bg-background">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="grid lg:grid-cols-4 gap-8">
                        {/* Sidebar Filters */}
                        <aside className="lg:col-span-1 space-y-8">
                            <div>
                                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                                    <Search className="h-5 w-5" /> Filter by Type
                                </h3>
                                <div className="space-y-2">
                                    {siteTypes.map(type => (
                                        <div key={type} className="flex items-center gap-2">
                                            <div className="h-2 w-2 bg-red-500 rounded-full"></div>
                                            <span className="text-sm text-muted-foreground">{type}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <Card className="bg-muted/50 border-none">
                                <CardContent className="p-6">
                                    <Shield className="h-8 w-8 text-primary mb-4" />
                                    <h4 className="font-bold mb-2">Legal Support</h4>
                                    <p className="text-sm text-muted-foreground mb-4">
                                        If you worked at any of these sites, you may have access to asbestos trust funds.
                                    </p>
                                    <Button className="w-full" asChild>
                                        <Link href="/contact">Free Evaluation</Link>
                                    </Button>
                                </CardContent>
                            </Card>
                        </aside>

                        {/* Sites Grid */}
                        <div className="lg:col-span-3">
                            <div className="grid md:grid-cols-2 gap-6">
                                {EXPOSURE_SITE_DETAILS.map((site) => (
                                    <Card key={site.id} className="group hover:border-primary transition-all">
                                        <CardContent className="p-6">
                                            <div className="flex justify-between items-start mb-4">
                                                <Badge variant="outline" className="text-xs uppercase">
                                                    {site.type}
                                                </Badge>
                                                <span className="text-xs font-bold text-muted-foreground italic">
                                                    {site.yearsActive}
                                                </span>
                                            </div>

                                            <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                                                {site.name}
                                            </h3>

                                            <p className="flex items-center gap-1 text-sm text-muted-foreground mb-4 font-medium">
                                                <MapPin className="h-3 w-3 text-red-500" />
                                                {site.city}, {site.state}
                                            </p>

                                            <div className="space-y-3 mb-6">
                                                <div className="flex items-center gap-2 text-sm">
                                                    <AlertTriangle className="h-4 w-4 text-orange-500" />
                                                    <span>Peak: <strong>{site.peakExposure}</strong></span>
                                                </div>
                                                <p className="text-sm text-muted-foreground line-clamp-2 italic">
                                                    "{site.history}"
                                                </p>
                                            </div>

                                            <Link
                                                href={`/exposure-sites/${site.id}`}
                                                className="inline-flex items-center gap-2 text-primary font-bold hover:underline"
                                            >
                                                View Exposure Report <ArrowRight className="h-4 w-4" />
                                            </Link>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
