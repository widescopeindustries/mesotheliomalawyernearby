import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, AlertTriangle, Scale, Clock, Ship, Building2, Anchor } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { CallButton } from '@/components/CallButton'

export const metadata: Metadata = {
    title: 'Louisiana Mesothelioma Lawyers | Avondale Shipyard & Refinery Asbestos Claims',
    description: 'Louisiana has one of the highest mesothelioma rates in the U.S. due to shipyard and refinery asbestos exposure. Get a free case review from experienced mesothelioma attorneys.',
    keywords: 'Louisiana mesothelioma lawyer, Avondale shipyard asbestos, Baton Rouge mesothelioma attorney, New Orleans asbestos lawyer, Louisiana asbestos exposure, refinery asbestos Louisiana',
    alternates: {
        canonical: 'https://mesotheliomalawyernearby.com/louisiana-mesothelioma',
    },
}

export default function LouisianaMesotheliomaPage() {
    return (
        <main className="min-h-screen">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-16 md:py-24">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="text-center">
                        <span className="inline-block bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-semibold mb-6">
                            High Mesothelioma Rate State | Thousands Affected
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                            Louisiana Mesothelioma<br />
                            <span className="text-accent">Lawyers & Asbestos Claims</span>
                        </h1>
                        <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
                            Louisiana has one of the highest mesothelioma death rates in America due to decades of
                            shipyard and refinery work. If you were exposed, you may be entitled to substantial compensation.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <CallButton
                                phoneNumber="214-699-4543"
                                location="Louisiana Hero"
                                className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-5 text-xl"
                            />
                            <span className="text-lg opacity-80">Free Louisiana Case Review</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 bg-background">
                <div className="container mx-auto px-4 max-w-5xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                        Why Louisiana Has High Mesothelioma Rates
                    </h2>

                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            {
                                icon: Ship,
                                title: 'Shipbuilding Industry',
                                desc: 'Avondale Shipyard employed 26,000+ workers exposed to asbestos for decades',
                                stat: '26,000+'
                            },
                            {
                                icon: Building2,
                                title: 'Petrochemical Plants',
                                desc: 'Refineries along the Mississippi River corridor used asbestos extensively',
                                stat: '100+ Sites'
                            },
                            {
                                icon: Anchor,
                                title: 'Port Industries',
                                desc: 'New Orleans and Baton Rouge ports exposed thousands of longshoremen',
                                stat: 'Thousands'
                            },
                        ].map((item, i) => (
                            <Card key={i}>
                                <CardContent className="pt-6 text-center">
                                    <item.icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                                    <div className="text-2xl font-bold text-primary mb-2">{item.stat}</div>
                                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                                    <p className="text-muted-foreground">{item.desc}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Avondale Section */}
            <section className="py-16 bg-muted/30">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="prose prose-lg max-w-none">
                        <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                            <Ship className="h-8 w-8 text-primary" />
                            Avondale Shipyard: Louisiana's Largest Asbestos Exposure Site
                        </h2>

                        <p className="text-lg leading-relaxed mb-6">
                            Avondale Shipyard was the largest private employer in Louisiana for decades, with over 26,000 workers
                            at its peak. Operating from 1938 to 2014, the shipyard built destroyers, amphibious assault ships,
                            oil tankers, and container ships - all of which required extensive asbestos materials.
                        </p>

                        <div className="bg-destructive/10 border border-destructive/30 rounded-xl p-6 my-8">
                            <h4 className="text-xl font-bold text-destructive mb-2 flex items-center gap-2">
                                <AlertTriangle className="h-5 w-5" />
                                Critical Health Impact
                            </h4>
                            <p className="text-lg mb-0">
                                Louisiana's mesothelioma rates are significantly driven by Avondale exposure. Workers who built
                                ships in the 1960s-1980s are now being diagnosed with mesothelioma. The African American community,
                                which made up a large portion of Avondale's workforce, has been disproportionately affected.
                            </p>
                        </div>

                        <h3 className="text-2xl font-bold mb-4">Exposed Workers at Avondale</h3>

                        <ul className="text-lg space-y-2 mb-6">
                            <li><strong>Ship Insulators</strong> - Highest exposure; directly installed asbestos materials</li>
                            <li><strong>Pipefitters & Plumbers</strong> - Cut, fitted, and repaired asbestos-wrapped pipes</li>
                            <li><strong>Boilermakers</strong> - Worked in confined spaces with asbestos insulation</li>
                            <li><strong>Welders</strong> - Disturbed asbestos materials during welding operations</li>
                            <li><strong>Electricians</strong> - Handled asbestos-insulated wiring</li>
                            <li><strong>Painters</strong> - Applied asbestos-containing paints and coatings</li>
                            <li><strong>General Laborers</strong> - Secondary exposure from working nearby</li>
                        </ul>

                        <h2 className="text-3xl font-bold mb-6 mt-12">Louisiana Exposure Sites Beyond Avondale</h2>

                        <div className="grid md:grid-cols-2 gap-4 mb-8">
                            {[
                                { name: 'Baton Rouge Refineries', location: 'Baton Rouge' },
                                { name: 'ExxonMobil Baton Rouge', location: 'Baton Rouge' },
                                { name: 'Entergy Power Plants', location: 'Statewide' },
                                { name: 'Port of New Orleans', location: 'New Orleans' },
                                { name: 'Louisiana Offshore Oil Platforms', location: 'Gulf of Mexico' },
                                { name: 'Dow Chemical Louisiana', location: 'Plaquemine' },
                                { name: 'Kaiser Aluminum', location: 'Chalmette' },
                                { name: 'Georgia-Pacific Plants', location: 'Multiple Locations' }
                            ].map((site, i) => (
                                <Card key={i}>
                                    <CardContent className="py-3">
                                        <div className="font-bold">{site.name}</div>
                                        <div className="text-sm text-muted-foreground">{site.location}</div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>

                        <h2 className="text-3xl font-bold mb-6">Louisiana Asbestos Laws & Statute of Limitations</h2>

                        <Card className="mb-8">
                            <CardContent className="py-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
                                            <Clock className="h-5 w-5 text-primary" />
                                            Personal Injury Claims
                                        </h4>
                                        <p className="text-muted-foreground">
                                            <strong>1 year</strong> from date of diagnosis or discovery of asbestos-related illness
                                        </p>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
                                            <Scale className="h-5 w-5 text-primary" />
                                            Wrongful Death Claims
                                        </h4>
                                        <p className="text-muted-foreground">
                                            <strong>1 year</strong> from date of death
                                        </p>
                                    </div>
                                </div>
                                <p className="mt-4 text-destructive font-medium">
                                    ⚠️ Louisiana has one of the shortest statutes of limitations - act quickly!
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Cities Section */}
            <section className="py-16 bg-background">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-3xl font-bold text-center mb-8">
                        Louisiana Cities We Serve
                    </h2>

                    <div className="grid md:grid-cols-3 gap-4">
                        {[
                            { city: 'New Orleans', link: '/location/louisiana-new-orleans' },
                            { city: 'Baton Rouge', link: '/location/louisiana-baton-rouge' },
                            { city: 'Avondale', link: '/exposure-sites/avondale-shipyard' },
                            { city: 'Metairie', link: '/location/louisiana' },
                            { city: 'Shreveport', link: '/location/louisiana' },
                            { city: 'Lafayette', link: '/location/louisiana' },
                        ].map((item, i) => (
                            <Link key={i} href={item.link} className="group">
                                <Card className="hover:border-primary transition-colors">
                                    <CardContent className="py-4 flex items-center justify-between">
                                        <span className="font-medium">{item.city}</span>
                                        <ArrowRight className="h-5 w-5 text-primary group-hover:translate-x-1 transition-transform" />
                                    </CardContent>
                                </Card>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-primary text-primary-foreground">
                <div className="container mx-auto px-4 max-w-4xl text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Louisiana Residents Deserve Justice
                    </h2>
                    <p className="text-xl mb-8 opacity-90">
                        If you or a loved one worked at Avondale, Louisiana refineries, or other industrial sites and
                        have been diagnosed with mesothelioma, call us now. Louisiana's 1-year statute of limitations
                        means time is critical.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <CallButton
                            phoneNumber="214-699-4543"
                            location="Louisiana Landing Page CTA"
                            className="bg-accent hover:bg-accent/90 text-accent-foreground px-10 py-6 text-2xl"
                        />
                    </div>
                    <p className="mt-4 text-lg opacity-80">Free Consultation • No Win, No Fee</p>
                </div>
            </section>

            {/* Related Links */}
            <section className="py-12 bg-background">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h3 className="text-2xl font-bold mb-6">Related Louisiana Resources</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                        <Link href="/exposure-sites/avondale-shipyard" className="group">
                            <Card className="hover:border-primary transition-colors">
                                <CardContent className="py-4 flex items-center justify-between">
                                    <span className="font-medium">Avondale Shipyard Exposure Details</span>
                                    <ArrowRight className="h-5 w-5 text-primary group-hover:translate-x-1 transition-transform" />
                                </CardContent>
                            </Card>
                        </Link>
                        <Link href="/location/louisiana-baton-rouge" className="group">
                            <Card className="hover:border-primary transition-colors">
                                <CardContent className="py-4 flex items-center justify-between">
                                    <span className="font-medium">Baton Rouge Mesothelioma Attorneys</span>
                                    <ArrowRight className="h-5 w-5 text-primary group-hover:translate-x-1 transition-transform" />
                                </CardContent>
                            </Card>
                        </Link>
                        <Link href="/location/louisiana-new-orleans" className="group">
                            <Card className="hover:border-primary transition-colors">
                                <CardContent className="py-4 flex items-center justify-between">
                                    <span className="font-medium">New Orleans Asbestos Lawyers</span>
                                    <ArrowRight className="h-5 w-5 text-primary group-hover:translate-x-1 transition-transform" />
                                </CardContent>
                            </Card>
                        </Link>
                        <Link href="/veteran-resources" className="group">
                            <Card className="hover:border-primary transition-colors">
                                <CardContent className="py-4 flex items-center justify-between">
                                    <span className="font-medium">Veteran Asbestos Resources</span>
                                    <ArrowRight className="h-5 w-5 text-primary group-hover:translate-x-1 transition-transform" />
                                </CardContent>
                            </Card>
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    )
}
