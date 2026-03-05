import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Phone, MapPin, Calendar, Users, AlertTriangle, Shield, Building, Scale, FileText, Clock, Search } from 'lucide-react'
import Link from 'next/link'
import { EXPOSURE_SITE_DETAILS, getExposureSiteById } from '@/data/exposure-sites'
import { CallButton } from '@/components/CallButton'

interface ExposureSitePageProps {
    params: {
        id: string
    }
}

export const dynamicParams = false

// Generate static params for all exposure sites
export async function generateStaticParams() {
    return EXPOSURE_SITE_DETAILS.map((site) => ({
        id: site.id
    }))
}

// Generate metadata for each exposure site page
export async function generateMetadata({ params }: ExposureSitePageProps): Promise<Metadata> {
    const site = getExposureSiteById(params.id)

    if (!site) {
        return {
            title: 'Site Not Found',
            description: 'This exposure site page is not available.'
        }
    }

    return {
        title: `${site.name} Asbestos Exposure - ${site.city}, ${site.state} | Mesothelioma Help`,
        description: `History of asbestos exposure at ${site.name} in ${site.city}, ${site.state}. Workers from ${site.yearsActive} may be eligible for compensation. Free case review.`,
        keywords: [
            `${site.name} asbestos`,
            `${site.name} mesothelioma`,
            `${site.city} asbestos exposure`,
            `${site.state} asbestos lawyer`,
            `${site.type.toLowerCase()} asbestos`,
        ],
        openGraph: {
            title: `${site.name} Asbestos Exposure History`,
            description: `Detailed history of asbestos exposure at ${site.name}. Learn about worker exposure, health impacts, and legal options.`,
            type: 'article',
            url: `https://mesotheliomalawyernearby.com/exposure-sites/${params.id}`,
        },
        alternates: {
            canonical: `https://mesotheliomalawyernearby.com/exposure-sites/${params.id}`
        }
    }
}

export default function ExposureSitePage({ params }: ExposureSitePageProps) {
    const site = getExposureSiteById(params.id)

    if (!site) {
        notFound()
    }

    return (
        <main className="min-h-screen">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-red-900/10 to-orange-900/10 py-16 border-b">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="flex flex-wrap gap-2 mb-4">
                            <Badge variant="outline" className="bg-red-100 text-red-800 border-red-300">
                                <AlertTriangle className="h-3 w-3 mr-1" />
                                Known Asbestos Exposure Site
                            </Badge>
                            <Badge variant="outline">
                                <Building className="h-3 w-3 mr-1" />
                                {site.type}
                            </Badge>
                        </div>

                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                            {site.name}
                        </h1>

                        <p className="text-xl text-muted-foreground mb-6">
                            <MapPin className="h-5 w-5 inline mr-2" />
                            {site.city}, {site.state}
                        </p>

                        {/* Quick Stats */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                            <Card>
                                <CardContent className="p-4 text-center">
                                    <Calendar className="h-6 w-6 mx-auto mb-2 text-primary" />
                                    <div className="text-sm text-muted-foreground">Years Active</div>
                                    <div className="font-semibold">{site.yearsActive}</div>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardContent className="p-4 text-center">
                                    <AlertTriangle className="h-6 w-6 mx-auto mb-2 text-red-600" />
                                    <div className="text-sm text-muted-foreground">Peak Exposure</div>
                                    <div className="font-semibold">{site.peakExposure}</div>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardContent className="p-4 text-center">
                                    <Users className="h-6 w-6 mx-auto mb-2 text-blue-600" />
                                    <div className="text-sm text-muted-foreground">Est. Workers</div>
                                    <div className="font-semibold text-sm">{site.estimatedWorkers}</div>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardContent className="p-4 text-center">
                                    <Building className="h-6 w-6 mx-auto mb-2 text-purple-600" />
                                    <div className="text-sm text-muted-foreground">Facility Type</div>
                                    <div className="font-semibold text-sm">{site.type}</div>
                                </CardContent>
                            </Card>
                        </div>

                        {/* CTA */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <CallButton
                                phoneNumber="214-699-4543"
                                location={`Exposure Site: ${site.name} Hero`}
                                className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-xl"
                            />
                            <Button variant="outline" size="lg" className="text-lg px-8 py-6 h-auto" asChild>
                                <Link href="/contact">Request Callback</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Alert Banner */}
            <section className="py-6 bg-yellow-50 border-b border-yellow-200">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto flex items-start gap-4">
                        <Clock className="h-6 w-6 text-yellow-700 flex-shrink-0 mt-1" />
                        <p className="text-yellow-800">
                            <strong>Important:</strong> If you or a loved one worked at {site.name} and have been diagnosed
                            with mesothelioma, lung cancer, or asbestosis, you may be entitled to significant compensation.
                            Statutes of limitations apply - <strong>contact an attorney today</strong>.
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-16 bg-background">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        {/* History Section */}
                        <div className="mb-12">
                            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                                <FileText className="h-6 w-6 text-primary" />
                                History of {site.name}
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                {site.history}
                            </p>
                        </div>

                        {/* Asbestos Products Used */}
                        <Card className="mb-12 border-red-200">
                            <CardContent className="p-6">
                                <h2 className="text-xl font-bold mb-4 text-red-800">
                                    ⚠️ Asbestos Products Used at This Facility
                                </h2>
                                <div className="grid md:grid-cols-2 gap-2">
                                    {site.asbestosProducts.map((product, index) => (
                                        <div key={index} className="flex items-center gap-2">
                                            <div className="h-2 w-2 bg-red-500 rounded-full"></div>
                                            <span>{product}</span>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>

                        {/* Exposure Details */}
                        <div className="mb-12">
                            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                                <AlertTriangle className="h-6 w-6 text-red-600" />
                                Worker Exposure at {site.name}
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                {site.exposureDetails}
                            </p>
                        </div>

                        {/* Health Impact */}
                        <Card className="mb-12 bg-blue-50 border-blue-200">
                            <CardContent className="p-6">
                                <h2 className="text-xl font-bold mb-4 text-blue-800">
                                    🏥 Health Impact on Workers
                                </h2>
                                <p className="text-blue-900 leading-relaxed">
                                    {site.healthImpact}
                                </p>
                            </CardContent>
                        </Card>

                        {/* Legal History */}
                        <div className="mb-12">
                            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                                <Scale className="h-6 w-6 text-purple-600" />
                                Legal History &amp; Compensation
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                {site.legalHistory}
                            </p>
                        </div>

                        {/* Current Status */}
                        <Card className="mb-12 bg-gray-50">
                            <CardContent className="p-6">
                                <h2 className="text-xl font-bold mb-4">
                                    📍 Current Status
                                </h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    {site.currentStatus}
                                </p>
                            </CardContent>
                        </Card>

                        {/* CTA Card */}
                        <Card className="border-2 border-primary bg-primary/5">
                            <CardContent className="p-8 text-center">
                                <Shield className="h-12 w-12 mx-auto mb-4 text-primary" />
                                <h2 className="text-2xl font-bold mb-4">
                                    Worked at {site.name}? You May Be Entitled to Compensation
                                </h2>
                                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                                    If you or a family member worked at this facility and has been diagnosed with
                                    mesothelioma, asbestosis, or lung cancer, contact our veteran-owned legal referral
                                    service today. We connect you with experienced attorneys who specialize in asbestos cases.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <CallButton
                                        phoneNumber="214-699-4543"
                                        location={`Exposure Site: ${site.name} Footer`}
                                        className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-6 text-xl"
                                        label="Call for Legal Consultation"
                                    />
                                    <Button variant="outline" size="lg" className="text-lg px-8" asChild>
                                        <Link href="/contact">Free Case Evaluation</Link>
                                    </Button>
                                </div>
                                <p className="text-sm text-muted-foreground mt-4">
                                    🔒 Confidential • No Upfront Costs • Veteran-Owned Service
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Other Sites in State */}
            <section className="py-12 bg-muted/40">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-xl font-bold mb-6 text-center">
                            Other Known Exposure Sites
                        </h2>
                        <div className="flex flex-wrap justify-center gap-3">
                            {EXPOSURE_SITE_DETAILS.filter(s => s.id !== site.id).slice(0, 8).map((otherSite) => (
                                <Link
                                    key={otherSite.id}
                                    href={`/exposure-sites/${otherSite.id}`}
                                    className="px-4 py-2 bg-background hover:bg-primary/10 rounded-full text-sm font-medium transition-colors border"
                                >
                                    {otherSite.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
