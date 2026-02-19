import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, AlertTriangle, Scale, Clock, Shield, MapPin, Gavel } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { CallButton } from '@/components/CallButton'

export const metadata: Metadata = {
    title: 'Tennessee Mesothelioma Lawyers | Asbestos Lawsuit & Claims Help',
    description: 'Find experienced Tennessee mesothelioma attorneys. We help asbestos victims in Nashville, Memphis, and Knoxville get maximum compensation. Free consultation.',
    keywords: 'Tennessee mesothelioma lawyer, Nashville asbestos attorney, Memphis mesothelioma lawsuit, Tennessee asbestos exposure, Knoxville mesothelioma claims',
}

export default function TennesseeLawyerPage() {
    return (
        <main className="min-h-screen">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-16 md:py-24">
                <div className="container mx-auto px-4 max-w-5xl text-center">
                    <Badge className="bg-accent text-accent-foreground mb-6 py-1 px-4 text-sm font-bold uppercase tracking-widest">
                        Tennessee Legal Support • Top-Rated Network
                    </Badge>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        Tennessee <span className="text-accent underline decoration-accent/30 underline-offset-8">Mesothelioma Lawyers</span>
                    </h1>
                    <p className="text-xl md:text-2xl mb-10 opacity-90 max-w-3xl mx-auto leading-relaxed">
                        Tennessee workers in power plants, factories, and construction sites faced decades of hidden asbestos exposure.
                        If you are struggling with a diagnosis, our veteran-owned service connects you with the state&apos;s leading legal experts.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <CallButton
                            phoneNumber="214-699-4543"
                            location="TN Landing Hero"
                            className="bg-accent hover:bg-accent/90 text-accent-foreground px-10 py-6 text-2xl font-black shadow-2xl border-none"
                            showBadge
                        />
                        <div className="text-left hidden md:block">
                            <p className="text-sm font-bold opacity-100 flex items-center gap-2">
                                <Shield className="h-4 w-4 text-accent" />
                                No Upfront Fees
                            </p>
                            <p className="text-sm opacity-80 italic">Contingency based • We only win if you win</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quick Facts Section */}
            <section className="py-16 bg-background">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="grid md:grid-cols-3 gap-8">
                        <Card className="border-l-4 border-l-primary shadow-lg overflow-hidden">
                            <CardContent className="p-8">
                                <Clock className="h-10 w-10 text-primary mb-4" />
                                <h3 className="text-2xl font-bold mb-3">1 Year Statute</h3>
                                <p className="text-muted-foreground">Tennessee has a strict **one-year** statute of limitations for mesothelioma claims. Acting fast is critical to protecting your case.</p>
                            </CardContent>
                        </Card>
                        <Card className="border-l-4 border-l-accent shadow-lg overflow-hidden">
                            <CardContent className="p-8">
                                <Gavel className="h-10 w-10 text-accent mb-4" />
                                <h3 className="text-2xl font-bold mb-3">$1.4M Average</h3>
                                <p className="text-muted-foreground">National average mesothelioma settlements range from **$1M to $1.4M**. We help you maximize your claim value.</p>
                            </CardContent>
                        </Card>
                        <Card className="border-l-4 border-l-primary shadow-lg overflow-hidden">
                            <CardContent className="p-8">
                                <Shield className="h-10 w-10 text-primary mb-4" />
                                <h3 className="text-2xl font-bold mb-3">No Out-of-Pocket</h3>
                                <p className="text-muted-foreground">Our referral network works on a **contingency basis**. There are zero upfront costs for you or your family.</p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Tennessee Exposure Hubs */}
            <section className="py-16 bg-muted/30">
                <div className="container mx-auto px-4 max-w-5xl">
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Top Asbestos Risk Sites in Tennessee</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            { name: 'TVA Power Plants', city: 'Statewide', note: 'Kingston, Bull Run, and Cumberland plants used massive amounts of asbestos insulation.' },
                            { name: 'DuPont Plant', city: 'Old Hickory', note: 'Heavy use of asbestos in chemical processing and manufacturing equipment.' },
                            { name: 'Oak Ridge National Lab', city: 'Oak Ridge', note: 'Decades of industrial and scientific exposure during nuclear research.' },
                            { name: 'Memphis Ford Assembly', city: 'Memphis', note: 'Automotive workers exposed via friction materials and plant infrastructure.' },
                            { name: 'Nashville Glass Plant', city: 'Nashville', note: 'High-heat glass manufacturing required extensive asbestos heat shields.' },
                            { name: 'Chattanooga Foundries', city: 'Chattanooga', note: 'Industrial workers suffered from concentrated airborne fibers.' }
                        ].map((site, i) => (
                            <Card key={i} className="hover:shadow-md transition-shadow">
                                <CardContent className="p-6">
                                    <div className="flex justify-between items-start mb-2">
                                        <h4 className="font-bold text-xl">{site.name}</h4>
                                        <Badge variant="secondary"><MapPin className="h-3 w-3 mr-1" /> {site.city}</Badge>
                                    </div>
                                    <p className="text-muted-foreground text-sm leading-relaxed">{site.note}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Compensation Strategy Section */}
            <section className="py-20 bg-background overflow-hidden relative">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">Your Legal Strategy</h2>
                        <p className="text-xl text-muted-foreground">We don't just find a lawyer; we find the **right** strategy for your specific exposure.</p>
                    </div>

                    <div className="space-y-12">
                        {[
                            { step: '01', title: 'Evidence Gathering', desc: 'Our team helps trace your employment history to identify the exact companies and products that caused your exposure.' },
                            { step: '02', title: 'Trust Fund Filing', desc: 'We often secure compensation through bankruptcy trusts—meaning you may not even have to go to court.' },
                            { step: '03', title: 'Medical Support', desc: 'We connect you with Tennessee medical experts specializing in advanced mesothelioma treatments.' }
                        ].map((item, i) => (
                            <div key={i} className="flex gap-6 items-start">
                                <div className="text-4xl font-black text-primary/20 shrink-0">{item.step}</div>
                                <div>
                                    <h4 className="text-2xl font-bold mb-2">{item.title}</h4>
                                    <p className="text-lg text-muted-foreground italic">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 text-center">
                        <CallButton
                            phoneNumber="214-699-4543"
                            location="TN Mid-page CTA"
                            className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-8 text-2xl"
                            showBadge
                        />
                    </div>
                </div>
            </section>

            {/* City Directories */}
            <section className="py-16 bg-muted/40">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h3 className="text-2xl font-bold mb-8 text-center">Tennessee Area Specialists</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {[
                            { name: 'Nashville Lawyers', link: '/location/tennessee-nashville' },
                            { name: 'Memphis Attorneys', link: '/location/tennessee-memphis' },
                            { name: 'Knoxville Legal Help', link: '/location/tennessee-knoxville' },
                            { name: 'Chattanooga Experts', link: '/location/tennessee-chattanooga' },
                            { name: 'Oak Ridge Claims', link: '/exposure-sites-oak-ridge' },
                            { name: 'TVA Claims Support', link: '/contact' }
                        ].map((item, i) => (
                            <Link key={i} href={item.link} className="group">
                                <Card className="hover:border-primary transition-colors border-2 text-center bg-background">
                                    <CardContent className="py-4">
                                        <span className="font-bold group-hover:text-primary transition-colors">{item.name}</span>
                                    </CardContent>
                                </Card>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    )
}

function Badge({ children, className, variant }: { children: React.ReactNode, className?: string, variant?: string }) {
    return (
        <span className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground ${className}`}>
            {children}
        </span>
    )
}
