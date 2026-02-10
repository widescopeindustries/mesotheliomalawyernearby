import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, AlertTriangle, Scale, Clock, Users, Shield, Anchor } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { CallButton } from '@/components/CallButton'

export const metadata: Metadata = {
    title: 'Long Beach Naval Shipyard Asbestos Exposure & Mesothelioma Claims | Free Review',
    description: 'If you worked at Long Beach Naval Shipyard (1943-1997), you were likely exposed to asbestos. Learn about compensation options and your legal rights today.',
    keywords: 'Long Beach Naval Shipyard asbestos, Long Beach mesothelioma lawyer, terminal island shipyard asbestos, naval shipyard lawsuit, Long Beach compensation',
}

export default function LongBeachShipyardPage() {
    return (
        <main className="min-h-screen">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-16 md:py-24">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="text-center">
                        <span className="inline-block bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-semibold mb-6 uppercase tracking-wider">
                            VETERAN-OWNED SUPPORT | CALIFORNIA ASBESTOS CLAIMS
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                            Long Beach Naval Shipyard<br />
                            <span className="text-accent">Asbestos Exposure Claims</span>
                        </h1>
                        <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
                            Over 17,000 workers were exposed to deadly asbestos at Long Beach Naval Shipyard.
                            Veterans and civilian workers diagnosed with mesothelioma may be entitled to significant compensation.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <CallButton
                                phoneNumber="214-699-4543"
                                location="Long Beach Hero"
                                className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-5 text-xl font-bold border-none"
                                showBadge
                            />
                            <span className="text-lg opacity-80">Free & Confidential Case Review • 24/7 Available</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Key Facts Section */}
            <section className="py-16 bg-background">
                <div className="container mx-auto px-4 max-w-5xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                        Long Beach Naval Shipyard: The Asbestos Legacy
                    </h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { icon: Clock, label: 'Years Active', value: '1943-1997' },
                            { icon: Users, label: 'Workers Exposed', value: '17,000+' },
                            { icon: AlertTriangle, label: 'High Risk', value: 'Terminal Island' },
                            { icon: Scale, label: 'Legal Status', value: 'Active Claims' },
                        ].map((stat, i) => (
                            <Card key={i} className="text-center border-t-4 border-t-primary shadow-sm hover:shadow-md transition-shadow">
                                <CardContent className="pt-6">
                                    <stat.icon className="h-10 w-10 mx-auto mb-4 text-primary" />
                                    <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                                    <div className="text-muted-foreground font-medium">{stat.label}</div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Detailed History */}
            <section className="py-16 bg-muted/30">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="prose prose-lg max-w-none">
                        <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                            <Anchor className="h-8 w-8 text-primary" />
                            Naval Service & Asbestos in Long Beach
                        </h2>

                        <p className="text-lg leading-relaxed mb-6">
                            Established in 1943 on Terminal Island, the **Long Beach Naval Shipyard (LBNSY)** was a vital
                            cog in the U.S. Navy's Pacific operations. From supporting the fleet in World War II to
                            overhauling massive aircraft carriers during the Vietnam War, thousands of sailors and
                            civilian tradespeople worked in environment saturated with asbestos.
                        </p>

                        <h3 className="text-2xl font-bold mb-4">Why Asbestos Was Used</h3>
                        <p className="text-lg leading-relaxed mb-6">
                            The Navy required high heat resistance and fireproofing for its vessels. Asbestos was the
                            "miracle mineral" used in engine rooms, boiler rooms, and throughout the ventilation
                            systems. When ships came into Long Beach for repair or overhaul, these materials were
                            ripped out and replaced, creating clouds of toxic dust.
                        </p>

                        <div className="bg-destructive/10 border border-destructive/30 rounded-xl p-6 my-8">
                            <h4 className="text-xl font-bold text-destructive mb-2 flex items-center gap-2">
                                <AlertTriangle className="h-5 w-5" />
                                Secondary Exposure Alert
                            </h4>
                            <p className="text-lg mb-0 text-destructive-foreground">
                                Many workers at Long Beach unknowingly brought asbestos fibers home on their hair and
                                clothing. Family members—wives who laundered clothes and children who hugged their
                                fathers—have also been diagnosed with mesothelioma from this secondary exposure.
                            </p>
                        </div>

                        <h3 className="text-2xl font-bold mb-4">High-Risk Occupations at Long Beach</h3>
                        <ul className="grid md:grid-cols-2 gap-x-8 gap-y-2 text-lg mb-8 list-none p-0">
                            <li className="flex items-center gap-2"><div className="h-2 w-2 bg-primary rounded-full"></div> <strong>Insulators & Pipefitters</strong></li>
                            <li className="flex items-center gap-2"><div className="h-2 w-2 bg-primary rounded-full"></div> <strong>Boilermakers</strong></li>
                            <li className="flex items-center gap-2"><div className="h-2 w-2 bg-primary rounded-full"></div> <strong>Welders & Burners</strong></li>
                            <li className="flex items-center gap-2"><div className="h-2 w-2 bg-primary rounded-full"></div> <strong>Electrical Workers</strong></li>
                            <li className="flex items-center gap-2"><div className="h-2 w-2 bg-primary rounded-full"></div> <strong>Machinists</strong></li>
                            <li className="flex items-center gap-2"><div className="h-2 w-2 bg-primary rounded-full"></div> <strong>Painters & Sandblasters</strong></li>
                        </ul>

                        <h3 className="text-2xl font-bold mb-6">Known Ships Serviced at Long Beach</h3>
                        <div className="grid md:grid-cols-2 gap-4 mb-8">
                            {[
                                'USS Kitty Hawk (CV-63)',
                                'USS Enterprise (CVN-65)',
                                'USS New Jersey (BB-62)',
                                'USS Missouri (BB-63)',
                                'USS Long Beach (CGN-9)',
                                'USS Ranger (CV-61)'
                            ].map((ship, i) => (
                                <div key={i} className="flex items-center gap-2 bg-background p-3 rounded-lg border shadow-sm">
                                    <Shield className="h-5 w-5 text-primary" />
                                    <span className="font-medium">{ship}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Compensation Section */}
            <section className="py-16 bg-background">
                <div className="container mx-auto px-4 max-w-4xl text-center">
                    <h2 className="text-3xl font-bold mb-8">Compensation Options for LBNSY Workers</h2>
                    <div className="grid md:grid-cols-3 gap-6 mb-12">
                        <Card className="hover:border-primary transition-all">
                            <CardContent className="p-6">
                                <h4 className="font-bold text-xl mb-3 text-primary">Asbestos Trust Funds</h4>
                                <p className="text-muted-foreground">Access over $30 Billion set aside for victims of bankrupt asbestos manufacturers.</p>
                            </CardContent>
                        </Card>
                        <Card className="hover:border-primary transition-all">
                            <CardContent className="p-6">
                                <h4 className="font-bold text-xl mb-3 text-primary">VA Benefits</h4>
                                <p className="text-muted-foreground">Mesothelioma is recognized as a 100% disability by the VA for service-connected exposure.</p>
                            </CardContent>
                        </Card>
                        <Card className="hover:border-primary transition-all">
                            <CardContent className="p-6">
                                <h4 className="font-bold text-xl mb-3 text-primary">Legal Settlements</h4>
                                <p className="text-muted-foreground">Private lawsuits against manufacturers often result in significant out-of-court settlements.</p>
                            </CardContent>
                        </Card>
                    </div>

                    <CallButton
                        phoneNumber="214-699-4543"
                        location="Long Beach Mid-page CTA"
                        className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-7 text-2xl font-bold shadow-2xl"
                        showBadge
                    />
                    <p className="mt-4 text-muted-foreground italic">Available 24/7 • No Fee Unless You Win • Veteran-Owned Referral Service</p>
                </div>
            </section>

            {/* California Specifics */}
            <section className="py-16 bg-muted/30">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-3xl font-bold mb-6">California Mesothelioma Laws</h2>
                    <p className="text-lg mb-6">
                        In California, the statute of limitations for mesothelioma is generally **two years** from the
                        date of diagnosis. Waiting even a few months can jeopardize your right to claim.
                        Because Long Beach was such a major hub, California courts have extensive experience
                        handling these complex asbestos cases.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Link href="/location/california-los-angeles" className="group">
                            <Card className="hover:border-primary transition-colors">
                                <CardContent className="py-4 flex items-center justify-between">
                                    <span className="font-medium">Los Angeles Mesothelioma Attorneys</span>
                                    <ArrowRight className="h-5 w-5 text-primary group-hover:translate-x-1 transition-transform" />
                                </CardContent>
                            </Card>
                        </Link>
                        <Link href="/location/california" className="group">
                            <Card className="hover:border-primary transition-colors">
                                <CardContent className="py-4 flex items-center justify-between">
                                    <span className="font-medium">California Asbestos Laws & Regulations</span>
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
