import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, AlertTriangle, Scale, Clock, Users, Shield } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { CallButton } from '@/components/CallButton'

export const metadata: Metadata = {
    title: 'Hunters Point Naval Shipyard Asbestos Exposure & Mesothelioma Claims | Free Case Review',
    description: 'Hunters Point Naval Shipyard workers exposed to asbestos from 1941-1974 may be entitled to compensation. Learn about your legal rights and get a free case evaluation.',
    keywords: 'Hunters Point asbestos, Hunters Point mesothelioma, San Francisco shipyard asbestos, naval shipyard cancer, Hunters Point lawsuit, Hunters Point compensation',
    alternates: {
        canonical: 'https://mesotheliomalawyernearby.com/hunters-point-mesothelioma',
    },
}

export default function HuntersPointMesotheliomaPage() {
    return (
        <main className="min-h-screen">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-16 md:py-24">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="text-center">
                        <span className="inline-block bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-semibold mb-6">
                            Superfund Site | Active Litigation
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                            Hunters Point Naval Shipyard<br />
                            <span className="text-accent">Asbestos Exposure Claims</span>
                        </h1>
                        <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
                            Over 18,000 workers were exposed to deadly asbestos at Hunters Point from 1941-1974.
                            If you or a family member worked there, you may be entitled to significant compensation.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <CallButton
                                phoneNumber="214-699-4543"
                                location="Hunters Point Hero"
                                className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-5 text-xl"
                            />
                            <span className="text-lg opacity-80">Free & Confidential Case Review</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Key Facts Section */}
            <section className="py-16 bg-background">
                <div className="container mx-auto px-4 max-w-5xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                        Key Facts About Hunters Point Asbestos Exposure
                    </h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { icon: Clock, label: 'Years Active', value: '1941-1974' },
                            { icon: Users, label: 'Workers Exposed', value: '18,000+' },
                            { icon: AlertTriangle, label: 'Status', value: 'Superfund Site' },
                            { icon: Scale, label: 'Claims', value: 'Still Active' },
                        ].map((stat, i) => (
                            <Card key={i} className="text-center">
                                <CardContent className="pt-6">
                                    <stat.icon className="h-10 w-10 mx-auto mb-4 text-primary" />
                                    <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                                    <div className="text-muted-foreground">{stat.label}</div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Detailed Information */}
            <section className="py-16 bg-muted/30">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="prose prose-lg max-w-none">
                        <h2 className="text-3xl font-bold mb-6">History of Asbestos Use at Hunters Point</h2>

                        <p className="text-lg leading-relaxed mb-6">
                            Hunters Point Naval Shipyard in San Francisco was a critical military facility during World War II
                            and the Korean War. The shipyard served as a major ship repair and maintenance center, with over
                            18,000 workers employed at its peak. Like all naval shipyards of that era, Hunters Point used
                            asbestos extensively in ship construction and repair.
                        </p>

                        <h3 className="text-2xl font-bold mb-4">Who Was Exposed?</h3>

                        <p className="text-lg leading-relaxed mb-4">
                            Workers in the following trades faced the highest asbestos exposure at Hunters Point:
                        </p>

                        <ul className="text-lg space-y-2 mb-6">
                            <li><strong>Insulators</strong> - Directly handled asbestos insulation materials</li>
                            <li><strong>Pipefitters</strong> - Worked with asbestos pipe coverings daily</li>
                            <li><strong>Boilermakers</strong> - Exposed in confined boiler rooms</li>
                            <li><strong>Electricians</strong> - Handled asbestos wire insulation</li>
                            <li><strong>Shipfitters</strong> - Assembled ships with asbestos components</li>
                            <li><strong>Welders</strong> - Worked near asbestos insulation being disturbed</li>
                        </ul>

                        <div className="bg-destructive/10 border border-destructive/30 rounded-xl p-6 my-8">
                            <h4 className="text-xl font-bold text-destructive mb-2 flex items-center gap-2">
                                <AlertTriangle className="h-5 w-5" />
                                Environmental Justice Issue
                            </h4>
                            <p className="text-lg mb-0">
                                A disproportionate number of African American workers, many who migrated from the South during
                                the Great Migration, were assigned the most hazardous insulation and boiler room work at Hunters Point.
                                These communities continue to experience elevated rates of mesothelioma and asbestos-related diseases.
                            </p>
                        </div>

                        <h3 className="text-2xl font-bold mb-4">Asbestos Products Used at Hunters Point</h3>

                        <div className="grid md:grid-cols-2 gap-4 mb-8">
                            {[
                                'Pipe insulation',
                                'Boiler covering',
                                'Ship deck materials',
                                'Electrical components',
                                'Friction materials',
                                'Cement products',
                                'Fireproofing sprays',
                                'Gaskets and seals'
                            ].map((product, i) => (
                                <div key={i} className="flex items-center gap-2 bg-muted p-3 rounded-lg">
                                    <Shield className="h-5 w-5 text-primary" />
                                    <span className="font-medium">{product}</span>
                                </div>
                            ))}
                        </div>

                        <h3 className="text-2xl font-bold mb-4">Ships Serviced at Hunters Point</h3>
                        <p className="text-lg leading-relaxed mb-6">
                            Maintenance and overhaul of these vessels created significant asbestos dust throughout
                            the shipyard dry docks and repair slips:
                        </p>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                            {[
                                'USS Hornet (CV-12)',
                                'USS Hancock (CV-19)',
                                'USS Shangri-La (CV-38)',
                                'USS Midway (CV-41)',
                                'USS Coral Sea (CV-43)',
                                'USS Franklin D. Roosevelt',
                                'USS Ranger (CV-61)',
                                'USS Independence (CV-62)'
                            ].map((ship, i) => (
                                <div key={i} className="flex items-center gap-2 bg-background p-3 rounded-lg border shadow-sm">
                                    <Shield className="h-4 w-4 text-primary" />
                                    <span className="text-sm font-semibold">{ship}</span>
                                </div>
                            ))}
                        </div>

                        <h3 className="text-2xl font-bold mb-4">Compensation Options for Hunters Point Workers</h3>

                        <p className="text-lg leading-relaxed mb-4">
                            Former Hunters Point workers diagnosed with mesothelioma or other asbestos-related diseases may
                            have multiple avenues for compensation:
                        </p>

                        <div className="space-y-4 mb-8">
                            {[
                                {
                                    title: 'Asbestos Trust Fund Claims',
                                    desc: 'Over $30 billion available from bankrupt asbestos companies'
                                },
                                {
                                    title: 'Personal Injury Lawsuits',
                                    desc: 'Claims against solvent manufacturers and contractors'
                                },
                                {
                                    title: 'Veterans Benefits',
                                    desc: 'VA disability benefits for military personnel exposed during service'
                                },
                                {
                                    title: 'Wrongful Death Claims',
                                    desc: 'Family members may file claims for deceased workers'
                                }
                            ].map((option, i) => (
                                <Card key={i}>
                                    <CardContent className="py-4">
                                        <h4 className="font-bold text-lg mb-1">{option.title}</h4>
                                        <p className="text-muted-foreground">{option.desc}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-primary text-primary-foreground">
                <div className="container mx-auto px-4 max-w-4xl text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Worked at Hunters Point? Get Your Free Case Review Today.
                    </h2>
                    <p className="text-xl mb-8 opacity-90">
                        Time limits apply to mesothelioma claims. Don't wait to explore your legal options.
                        Our team specializes in helping former shipyard workers and their families.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <CallButton
                            phoneNumber="214-699-4543"
                            location="Hunters Point Landing Page CTA"
                            className="bg-accent hover:bg-accent/90 text-accent-foreground px-10 py-6 text-2xl"
                        />
                    </div>
                    <p className="mt-4 text-lg opacity-80">Available 24/7 • No Fee Unless You Win</p>
                </div>
            </section>

            {/* Related Links */}
            <section className="py-12 bg-background">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h3 className="text-2xl font-bold mb-6">Related Resources</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                        <Link href="/exposure-sites/hunters-point-naval-shipyard" className="group">
                            <Card className="hover:border-primary transition-colors">
                                <CardContent className="py-4 flex items-center justify-between">
                                    <span className="font-medium">Hunters Point Exposure Site Details</span>
                                    <ArrowRight className="h-5 w-5 text-primary group-hover:translate-x-1 transition-transform" />
                                </CardContent>
                            </Card>
                        </Link>
                        <Link href="/location/california-san-francisco" className="group">
                            <Card className="hover:border-primary transition-colors">
                                <CardContent className="py-4 flex items-center justify-between">
                                    <span className="font-medium">San Francisco Mesothelioma Lawyers</span>
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
                        <Link href="/exposure-sites" className="group">
                            <Card className="hover:border-primary transition-colors">
                                <CardContent className="py-4 flex items-center justify-between">
                                    <span className="font-medium">All Exposure Sites</span>
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
