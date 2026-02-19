import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, AlertTriangle, Scale, Clock, Users, Shield, Anchor } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { CallButton } from '@/components/CallButton'

export const metadata: Metadata = {
    title: 'Philadelphia Naval Shipyard Asbestos Exposure & Mesothelioma Claims | Free Review',
    description: 'If you worked at the Philadelphia Naval Shipyard, you may have been exposed to toxic asbestos. Learn about compensation options and legal rights.',
    keywords: 'Philadelphia Naval Shipyard asbestos, Philly shipyard mesothelioma, naval shipyard cancer, asbestos lawyer Philadelphia, shipyard compensation',
    alternates: {
        canonical: 'https://mesotheliomalawyernearby.com/philadelphia-naval-shipyard',
    },
}

export default function PhiladelphiaShipyardPage() {
    return (
        <main className="min-h-screen">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-16 md:py-24">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="text-center">
                        <span className="inline-block bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-semibold mb-6 uppercase tracking-wider">
                            VETERAN-OWNED SUPPORT | PENNSYLVANIA ASBESTOS CLAIMS
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                            Philadelphia Naval Shipyard<br />
                            <span className="text-accent">Asbestos Exposure History</span>
                        </h1>
                        <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
                            The first naval shipyard in the United States and a major source of asbestos exposure.
                            If you or a loved one worked here and have a diagnosis, call us for a free case evaluation.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <CallButton
                                phoneNumber="214-699-4543"
                                location="Philadelphia Hero"
                                className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-5 text-xl font-bold border-none transition-all shadow-xl"
                                showBadge
                            />
                            <span className="text-lg opacity-80">Free & Confidential Case Review • No Upfront Cost</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Facts Grid */}
            <section className="py-16 bg-background">
                <div className="container mx-auto px-4 max-w-5xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                        Key Facts: Philadelphia Naval Shipyard (PNSY)
                    </h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { icon: Clock, label: 'Years Active', value: '1801-1996' },
                            { icon: Users, label: 'Workers Exposed', value: '40,000+' },
                            { icon: AlertTriangle, label: 'Site Status', value: 'High Risk' },
                            { icon: Scale, label: 'Compensation', value: 'Active Trusts' },
                        ].map((stat, i) => (
                            <Card key={i} className="text-center border-t-4 border-t-primary shadow-sm">
                                <CardContent className="pt-6">
                                    <stat.icon className="h-10 w-10 mx-auto mb-4 text-primary" />
                                    <div className="text-2xl lg:text-3xl font-bold text-primary mb-2">{stat.value}</div>
                                    <div className="text-muted-foreground font-medium">{stat.label}</div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* History Content */}
            <section className="py-16 bg-muted/30">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="prose prose-lg max-w-none">
                        <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                            <Anchor className="h-8 w-8 text-primary" />
                            A Legacy of Shipbuilding and Exposure
                        </h2>

                        <p className="text-lg leading-relaxed mb-6">
                            For nearly two centuries, the **Philadelphia Naval Shipyard** was a cornerstone of American
                            maritime power. During World War II, it became a massive industrial machine, employing
                            over 40,000 people. Unfortunately, that production came at a deadly cost: the widespread
                            use of asbestos insulation on every ship built or overhauled at the yard.
                        </p>

                        <h3 className="text-2xl font-bold mb-4">Widespread Asbestos Contamination</h3>
                        <p className="text-lg leading-relaxed mb-6">
                            Asbestos was used in almost every component of naval vessels until the late 1970s.
                            Steam pipes, boilers, engines, and even the tiles on the floor contained the mineral.
                            In the enclosed, poorly ventilated spaces of a ship's hull, workers breathed in fibers
                            that would eventually lead to mesothelioma, lung cancer, and asbestosis.
                        </p>

                        <div className="bg-destructive/10 border border-destructive/30 rounded-xl p-6 my-8">
                            <h4 className="text-xl font-bold text-destructive mb-2 flex items-center gap-2">
                                <AlertTriangle className="h-5 w-5" />
                                Latency Period Warning
                            </h4>
                            <p className="text-lg mb-0">
                                Mesothelioma has a long latency period—often **20 to 50 years** after initial exposure.
                                Many workers who were exposed in the 1960s, 70s, and 80s are only now beginning to
                                show symptoms of asbestos-related diseases.
                            </p>
                        </div>

                        <h3 className="text-2xl font-bold mb-4">High-Risk Trades at the Philly Yard</h3>
                        <ul className="grid md:grid-cols-2 gap-x-8 gap-y-2 text-lg mb-8 list-none p-0">
                            <li className="flex items-center gap-2 font-medium"><div className="h-2 w-2 bg-primary rounded-full"></div> Insulators & Laggers</li>
                            <li className="flex items-center gap-2 font-medium"><div className="h-2 w-2 bg-primary rounded-full"></div> Pipefitters & Steamfitters</li>
                            <li className="flex items-center gap-2 font-medium"><div className="h-2 w-2 bg-primary rounded-full"></div> Boilermakers</li>
                            <li className="flex items-center gap-2 font-medium"><div className="h-2 w-2 bg-primary rounded-full"></div> Electricians</li>
                            <li className="flex items-center gap-2 font-medium"><div className="h-2 w-2 bg-primary rounded-full"></div> Shipbuilders</li>
                            <li className="flex items-center gap-2 font-medium"><div className="h-2 w-2 bg-primary rounded-full"></div> Maintenance Personnel</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Compensation & CTA */}
            <section className="py-16 bg-background">
                <div className="container mx-auto px-4 max-w-4xl text-center">
                    <h2 className="text-3xl font-bold mb-8">What Compensation is Available?</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                        <Card className="hover:border-primary transition-all">
                            <CardContent className="p-6">
                                <Shield className="h-8 w-8 text-primary mx-auto mb-3" />
                                <h4 className="font-bold text-xl mb-2">Asbestos Trusts</h4>
                                <p className="text-muted-foreground text-sm">Pennsylvania workers have access to billions in court-ordered trust funds.</p>
                            </CardContent>
                        </Card>
                        <Card className="hover:border-primary transition-all">
                            <CardContent className="p-6">
                                <Users className="h-8 w-8 text-primary mx-auto mb-3" />
                                <h4 className="font-bold text-xl mb-2">Wrongful Death</h4>
                                <p className="text-muted-foreground text-sm">Families of deceased workers can file claims for lost support and medical costs.</p>
                            </CardContent>
                        </Card>
                        <Card className="hover:border-primary transition-all">
                            <CardContent className="p-6">
                                <Scale className="h-8 w-8 text-primary mx-auto mb-3" />
                                <h4 className="font-bold text-xl mb-2">Legal Action</h4>
                                <p className="text-muted-foreground text-sm">File direct claims against the negligent companies that manufactured the asbestos.</p>
                            </CardContent>
                        </Card>
                    </div>

                    <CallButton
                        phoneNumber="214-699-4543"
                        location="Philadelphia Bottom CTA"
                        className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-7 text-2xl font-bold shadow-2xl"
                        showBadge
                    />
                    <p className="mt-4 text-muted-foreground italic">Over $30 Billion Available Nationwide • Free Case Evaluation</p>
                </div>
            </section>

            {/* Related Links */}
            <section className="py-16 bg-muted/30">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h3 className="text-2xl font-bold mb-6">Pennsylvania Legal Resources</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Link href="/location/pennsylvania-philadelphia" className="group">
                            <Card className="hover:border-primary transition-colors">
                                <CardContent className="py-4 flex items-center justify-between">
                                    <span className="font-medium">Philadelphia Mesothelioma Lawyers</span>
                                    <ArrowRight className="h-5 w-5 text-primary group-hover:translate-x-1 transition-transform" />
                                </CardContent>
                            </Card>
                        </Link>
                        <Link href="/exposure-sites/philadelphia-naval-shipyard" className="group">
                            <Card className="hover:border-primary transition-colors">
                                <CardContent className="py-4 flex items-center justify-between">
                                    <span className="font-medium">PNSY Exposure Data Details</span>
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
