import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Phone, Mail, MapPin, Clock, Shield } from 'lucide-react'
import { ContactForm } from '@/components/ContactForm'

export const metadata: Metadata = {
    title: 'Contact Us - Mesothelioma Lawyer Nearby',
    description: 'Get in touch with our veteran-owned mesothelioma legal referral service. Free consultation available 24/7.',
    openGraph: {
        title: 'Contact Mesothelioma Lawyer Nearby',
        description: 'Connect with experienced mesothelioma attorneys. Free, confidential consultation.',
        type: 'website',
        url: 'https://mesotheliomalawyernearby.vercel.app/contact',
    },
    alternates: {
        canonical: 'https://mesotheliomalawyernearby.vercel.app/contact',
    },
}

export default function ContactPage() {
    return (
        <main className="min-h-screen">
            {/* Hero */}
            <section className="bg-gradient-to-br from-primary/10 to-primary/5 py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 bg-primary/20 px-4 py-2 rounded-full mb-6">
                            <Shield className="h-5 w-5 text-primary" />
                            <span className="text-sm font-semibold text-primary">Veteran-Owned Service</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                            Contact Us
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Ready to discuss your mesothelioma case? We&apos;re here to help 24/7.
                            Get a free, confidential consultation with no obligation.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Info + Form */}
            <section className="py-16 bg-background">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid lg:grid-cols-2 gap-12">
                            {/* Contact Information */}
                            <div>
                                <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
                                <p className="text-muted-foreground mb-8">
                                    Our team of veterans is standing by to help you navigate this difficult time.
                                    We understand the urgency of mesothelioma cases and respond quickly.
                                </p>

                                <div className="space-y-6">
                                    <Card>
                                        <CardContent className="p-6">
                                            <div className="flex items-start gap-4">
                                                <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                                                    <Phone className="h-6 w-6 text-green-600" />
                                                </div>
                                                <div>
                                                    <h3 className="font-semibold text-lg mb-1">Call Us Now</h3>
                                                    <a href="tel:682-999-0953" className="text-2xl font-bold text-primary hover:underline">
                                                        (682) 999-0953
                                                    </a>
                                                    <p className="text-sm text-muted-foreground mt-1">Available 24/7</p>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>

                                    <Card>
                                        <CardContent className="p-6">
                                            <div className="flex items-start gap-4">
                                                <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                                                    <Mail className="h-6 w-6 text-blue-600" />
                                                </div>
                                                <div>
                                                    <h3 className="font-semibold text-lg mb-1">Email Us</h3>
                                                    <a href="mailto:mesolawyernearme@gmail.com" className="text-primary hover:underline">
                                                        mesolawyernearme@gmail.com
                                                    </a>
                                                    <p className="text-sm text-muted-foreground mt-1">We respond within 24 hours</p>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>

                                    <Card>
                                        <CardContent className="p-6">
                                            <div className="flex items-start gap-4">
                                                <div className="h-12 w-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                                                    <Clock className="h-6 w-6 text-purple-600" />
                                                </div>
                                                <div>
                                                    <h3 className="font-semibold text-lg mb-1">Hours</h3>
                                                    <p className="font-medium">24 Hours / 7 Days a Week</p>
                                                    <p className="text-sm text-muted-foreground mt-1">Emergency assistance always available</p>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>

                                    <Card>
                                        <CardContent className="p-6">
                                            <div className="flex items-start gap-4">
                                                <div className="h-12 w-12 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                                                    <MapPin className="h-6 w-6 text-yellow-600" />
                                                </div>
                                                <div>
                                                    <h3 className="font-semibold text-lg mb-1">Service Area</h3>
                                                    <p className="font-medium">Nationwide Coverage</p>
                                                    <p className="text-sm text-muted-foreground mt-1">We connect you with attorneys across all 50 states</p>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                            </div>

                            {/* Contact Form */}
                            <div>
                                <Card className="border-2 border-primary/20">
                                    <CardContent className="p-8">
                                        <h2 className="text-2xl font-bold mb-2">Request Free Consultation</h2>
                                        <p className="text-muted-foreground mb-6">
                                            Fill out the form below and we&apos;ll contact you within 24 hours.
                                        </p>
                                        <ContactForm />
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Contact Us */}
            <section className="py-16 bg-muted/40">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-2xl font-bold mb-8">Why Contact Mesothelioma Lawyer Nearby?</h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="p-6 bg-background rounded-lg">
                                <h3 className="font-semibold mb-2">Free Consultation</h3>
                                <p className="text-sm text-muted-foreground">
                                    No cost, no obligation. We&apos;ll review your case for free.
                                </p>
                            </div>
                            <div className="p-6 bg-background rounded-lg">
                                <h3 className="font-semibold mb-2">Veteran-Owned</h3>
                                <p className="text-sm text-muted-foreground">
                                    SDVOSB certified. We understand veteran asbestos exposure.
                                </p>
                            </div>
                            <div className="p-6 bg-background rounded-lg">
                                <h3 className="font-semibold mb-2">Experienced Network</h3>
                                <p className="text-sm text-muted-foreground">
                                    We only work with attorneys who specialize in mesothelioma cases.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
