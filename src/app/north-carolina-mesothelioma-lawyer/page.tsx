import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, AlertTriangle, Scale, Clock, Shield, MapPin, Building2 } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { CallButton } from '@/components/CallButton'

export const metadata: Metadata = {
    title: 'North Carolina Mesothelioma Lawyers | NC Asbestos Lawsuit & Claims',
    description: 'Find top North Carolina mesothelioma attorneys. Protecting asbestos victims in Charlotte, Raleigh, and Durham. Free case review. No fees unless we win.',
    keywords: 'North Carolina mesothelioma lawyer, NC asbestos attorney, Charlotte mesothelioma lawyer, Raleigh asbestos lawsuit, Winston-Salem asbestos exposure',
}

export default function NorthCarolinaLawyerPage() {
    return (
        <main className="min-h-screen">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-[#002868] to-[#0a3d91] text-white py-16 md:py-24">
                <div className="container mx-auto px-4 max-w-5xl text-center">
                    <Badge className="bg-[#bf0a30] text-white mb-6 py-1 px-4 text-sm font-bold uppercase tracking-widest border-none">
                        NC LEGAL PROTECTION • VETERAN-OWNED SERVICE
                    </Badge>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        North Carolina <span className="text-accent underline decoration-white/20 underline-offset-8">Mesothelioma Lawyers</span>
                    </h1>
                    <p className="text-xl md:text-2xl mb-10 opacity-90 max-w-3xl mx-auto leading-relaxed">
                        North Carolina’s industrial history in textiles, tobacco, and power generation left thousands
                        exposed to toxic asbestos. If you are facing a diagnosis, our specialized legal team can help
                        you secure the compensation you deserve.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <CallButton
                            phoneNumber="214-699-4543"
                            location="NC Landing Hero"
                            className="bg-[#bf0a30] hover:bg-[#a00828] text-white px-10 py-6 text-2xl font-black shadow-2xl border-none h-auto"
                            showBadge
                        />
                        <div className="text-left hidden md:block border-l border-white/20 pl-6">
                            <p className="text-sm font-bold flex items-center gap-2">
                                <Shield className="h-4 w-4 text-white" />
                                North Carolina Specialized
                            </p>
                            <p className="text-sm opacity-80 italic">Contingency based • Millions recovered</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quick Stats Grid */}
            <section className="py-16 bg-background">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="grid md:grid-cols-3 gap-8">
                        <Card className="border-t-4 border-t-[#002868] shadow-lg">
                            <CardContent className="p-8">
                                <Clock className="h-10 w-10 text-[#002868] mb-4" />
                                <h3 className="text-2xl font-bold mb-3">Discovery Rule</h3>
                                <p className="text-muted-foreground">In North Carolina, the statute of limitations typically begins when the disease is **diagnosed**, not when you were exposed.</p>
                            </CardContent>
                        </Card>
                        <Card className="border-t-4 border-t-[#bf0a30] shadow-lg">
                            <CardContent className="p-8">
                                <Building2 className="h-10 w-10 text-[#bf0a30] mb-4" />
                                <h3 className="text-2xl font-bold mb-3">Trust Access</h3>
                                <p className="text-muted-foreground">We facilitate claims against bankrupt companies through over **$30 Billion** in national asbestos trust funds.</p>
                            </CardContent>
                        </Card>
                        <Card className="border-t-4 border-t-[#002868] shadow-lg">
                            <CardContent className="p-8">
                                <Scale className="h-10 w-10 text-[#002868] mb-4" />
                                <h3 className="text-2xl font-bold mb-3">No Risk</h3>
                                <p className="text-muted-foreground">You pay **absolutely nothing** upfront. Our legal fees are paid only out of the final settlement or verdict.</p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* NC Specific Content */}
            <section className="py-16 bg-muted/30">
                <div className="container mx-auto px-4 max-w-5xl">
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">North Carolina Asbestos Exposure Hotspots</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            { name: 'Textile & Cotton Mills', city: 'Charlotte, Gastonia', note: 'Asbestos was used extensively in machinery insulation and fireproofing in NC mill villages.' },
                            { name: 'Duke Energy Power Plants', city: 'Statewide', note: 'Marshall, Allen, and Riverbend stations had heavy asbestos use in boilers and turbines.' },
                            { name: 'W.R. Grace Plant', city: 'Enoree/Davidson', note: 'Zonolite vermiculite processing plant was notorious for airborne asbestos fibers.' },
                            { name: 'Pulp & Paper Mills', city: 'Roanoke Rapids', note: 'High-temperature industrial processes required massive amounts of asbestos insulation.' },
                            { name: 'Tobacco Warehouses', city: 'Winston-Salem, Durham', note: 'Building infrastructure and heating systems utilized asbestos-containing materials.' },
                            { name: 'Camp Lejeune & Fort Bragg', city: 'Jacksonville, Fayetteville', note: 'Service members exposed via military housing and base infrastructure.' }
                        ].map((site, i) => (
                            <Card key={i} className="hover:shadow-lg transition-all border-none shadow-sm">
                                <CardContent className="p-6">
                                    <div className="flex justify-between items-start mb-2">
                                        <h4 className="font-bold text-xl text-[#002868]">{site.name}</h4>
                                        <Badge variant="outline" className="border-[#002868] text-[#002868]"><MapPin className="h-3 w-3 mr-1" /> {site.city}</Badge>
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
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">Protecting NC Families</h2>
                        <p className="text-xl text-muted-foreground italic">North Carolina has specific legal complexities. We ensure you have the local expertise to win.</p>
                    </div>

                    <div className="space-y-8">
                        {[
                            { title: 'Work History Discovery', desc: 'Our historians trace your exposure back to the 1960s, 70s, and 80s mills and plants.' },
                            { title: 'Full Family Protection', desc: 'If a loved one has passed, North Carolina allows for wrongful death claims to provide for surviving dependents.' },
                            { title: 'Veteran-First Approach', desc: 'As a veteran-owned company, we provide specialized support for those exposed at military bases like Camp Lejeune.' }
                        ].map((item, i) => (
                            <div key={i} className="flex gap-4 items-center bg-muted/30 p-6 rounded-2xl border">
                                <Shield className="h-8 w-8 text-[#bf0a30] shrink-0" />
                                <div>
                                    <h4 className="text-xl font-bold mb-1">{item.title}</h4>
                                    <p className="text-muted-foreground">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 text-center">
                        <CallButton
                            phoneNumber="214-699-4543"
                            location="NC Mid-page CTA"
                            className="bg-[#002868] hover:bg-[#001d4d] text-white px-12 py-8 text-2xl h-auto"
                            showBadge
                        />
                    </div>
                </div>
            </section>

            {/* City Links */}
            <section className="py-16 bg-muted/40">
                <div className="container mx-auto px-4 max-w-4xl text-center">
                    <h3 className="text-2xl font-bold mb-8">Serving All Of North Carolina</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                            { name: 'Charlotte', link: '/location/north-carolina-charlotte' },
                            { name: 'Raleigh', link: '/location/north-carolina-raleigh' },
                            { name: 'Durham', link: '/location/north-carolina-durham' },
                            { name: 'Greensboro', link: '/location/north-carolina' },
                            { name: 'Winston-Salem', link: '/location/north-carolina' },
                            { name: 'Fayetteville', link: '/location/north-carolina' },
                            { name: 'Wilmington', link: '/location/north-carolina' },
                            { name: 'Asheville', link: '/location/north-carolina' }
                        ].map((item, i) => (
                            <Link key={i} href={item.link} className="block p-3 bg-background rounded-lg border hover:border-[#002868] hover:text-[#002868] transition-all font-medium text-sm">
                                {item.name}
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
