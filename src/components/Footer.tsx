import Link from 'next/link'
import { Shield, Phone, Mail, MapPin } from 'lucide-react'

export function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-primary text-primary-foreground pb-24 lg:pb-0" role="contentinfo">
            {/* Main Footer - generous padding for elderly readability */}
            <div className="container mx-auto px-6 md:px-8 py-16 md:py-20">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10">

                    {/* Brand */}
                    <div className="md:col-span-2 lg:col-span-1">
                        <Link
                            href="/"
                            className="flex items-center gap-3 mb-6 transition-opacity hover:opacity-80 min-h-touch"
                            aria-label="Mesothelioma Lawyer Nearby - Go to homepage"
                        >
                            <Shield className="h-10 w-10 text-accent" aria-hidden="true" role="img" />
                            <div className="flex flex-col">
                                <span className="font-serif font-bold text-xl leading-tight">
                                    Mesothelioma
                                </span>
                                <span className="text-base opacity-90 leading-tight">
                                    Lawyer Nearby
                                </span>
                            </div>
                        </Link>
                        <p className="text-base opacity-90 mb-6 leading-relaxed">
                            Veteran-owned legal referral service connecting mesothelioma
                            victims with experienced attorneys who care.
                        </p>
                        <div className="inline-flex items-center gap-3 bg-accent/20 px-4 py-2 rounded-lg">
                            <Shield className="h-5 w-5 text-accent" aria-hidden="true" role="img" />
                            <span className="text-accent font-bold text-base">SDVOSB Certified</span>
                        </div>
                    </div>

                    {/* Quick Links - larger text, more spacing */}
                    <div>
                        <h3 className="font-serif font-bold text-lg mb-6">Quick Links</h3>
                        <ul className="space-y-4">
                            <li>
                                <Link href="/" className="text-base opacity-90 hover:opacity-100 hover:text-accent transition-colors inline-flex items-center min-h-touch">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/directory" className="text-base opacity-90 hover:opacity-100 hover:text-accent transition-colors inline-flex items-center min-h-touch">
                                    Lawyer Directory
                                </Link>
                            </li>
                            <li>
                                <Link href="/mesothelioma-lawyer-near-me" className="text-base opacity-90 hover:opacity-100 hover:text-accent transition-colors inline-flex items-center min-h-touch">
                                    Find a Lawyer Near Me
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="text-base opacity-90 hover:opacity-100 hover:text-accent transition-colors inline-flex items-center min-h-touch">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-base opacity-90 hover:opacity-100 hover:text-accent transition-colors inline-flex items-center min-h-touch">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h3 className="font-serif font-bold text-lg mb-6">Resources</h3>
                        <ul className="space-y-4">
                            <li>
                                <Link href="/veteran-resources" className="text-base opacity-90 hover:opacity-100 hover:text-accent transition-colors inline-flex items-center min-h-touch">
                                    Veteran Resources
                                </Link>
                            </li>
                            <li>
                                <Link href="/blog" className="text-base opacity-90 hover:opacity-100 hover:text-accent transition-colors inline-flex items-center min-h-touch">
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link href="/types/pleural-mesothelioma" className="text-base opacity-90 hover:opacity-100 hover:text-accent transition-colors inline-flex items-center min-h-touch">
                                    Pleural Mesothelioma
                                </Link>
                            </li>
                            <li>
                                <Link href="/statistics" className="text-base opacity-90 hover:opacity-100 hover:text-accent transition-colors inline-flex items-center min-h-touch">
                                    Mesothelioma Statistics
                                </Link>
                            </li>
                            <li>
                                <Link href="/exposure-sites" className="text-base opacity-90 hover:opacity-100 hover:text-accent transition-colors inline-flex items-center min-h-touch">
                                    Exposure Sites Directory
                                </Link>
                            </li>
                            <li>
                                <Link href="/privacy-policy" className="text-base opacity-90 hover:opacity-100 hover:text-accent transition-colors inline-flex items-center min-h-touch">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="/disclaimer" className="text-base opacity-90 hover:opacity-100 hover:text-accent transition-colors inline-flex items-center min-h-touch">
                                    Legal Disclaimer
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact - large touch targets */}
                    <div>
                        <h3 className="font-serif font-bold text-lg mb-6">Contact Us</h3>
                        <ul className="space-y-4">
                            <li>
                                <a
                                    href="tel:214-699-4543"
                                    className="flex items-center gap-3 text-lg font-bold hover:text-accent transition-colors min-h-touch"
                                    aria-label="Call us at (214) 699-4543"
                                >
                                    <Phone className="h-5 w-5" aria-hidden="true" role="img" />
                                    (214) 699-4543
                                </a>
                            </li>
                            <li>
                                <a
                                    href="mailto:info@mesotheliomalawyernearby.com"
                                    className="flex items-center gap-3 text-base opacity-90 hover:opacity-100 hover:text-accent transition-colors min-h-touch break-all"
                                    aria-label="Email us"
                                >
                                    <Mail className="h-5 w-5 flex-shrink-0" aria-hidden="true" role="img" />
                                    info@mesotheliomalawyernearby.com
                                </a>
                            </li>
                            <li className="flex items-center gap-3 text-base opacity-90 min-h-touch">
                                <MapPin className="h-5 w-5 flex-shrink-0" aria-hidden="true" role="img" />
                                <span>316 Brandywine Ave, Streetman, TX 75859</span>
                            </li>
                        </ul>

                        {/* Prominent phone CTA */}
                        <a
                            href="tel:214-699-4543"
                            className="mt-6 inline-flex items-center gap-3 bg-accent hover:bg-accent/90 text-accent-foreground px-6 py-4 rounded-xl font-bold text-lg transition-all min-h-touch"
                            aria-label="Call us now"
                        >
                            <Phone className="h-5 w-5" aria-hidden="true" role="img" />
                            Call Now - Free
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-primary-foreground/20">
                <div className="container mx-auto px-6 md:px-8 py-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-base opacity-80">
                        <p>© {currentYear} Widescope Industries LLC. All rights reserved.</p>
                        <p className="text-center">
                            Service-Disabled Veteran-Owned Small Business (SDVOSB)
                        </p>
                        <a href="https://www.veteranownedbusiness.com" target="_blank" rel="noopener noreferrer">
                            <img src="https://www.veteranownedbusiness.com/images/banner_links/SDVOSB-Member-Badge-Horizontal.jpg" alt="Veteran Owned Business Directory, Get your free listing, now!" style={{ maxWidth: '200px', height: 'auto' }} />
                        </a>
                    </div>
                </div>
            </div>

            {/* Disclaimer - readable */}
            <div className="bg-primary/80 py-8">
                <div className="container mx-auto px-6 md:px-8">
                    <p className="text-sm opacity-80 text-center max-w-4xl mx-auto leading-relaxed">
                        <strong>Legal Disclaimer:</strong> This website is a legal referral service and is not a law firm.
                        We do not provide legal advice. The information on this website is for general informational purposes only
                        and should not be construed as legal advice. Contacting us does not create an attorney-client relationship.
                        Results may vary depending on your particular facts and legal circumstances.
                    </p>
                </div>
            </div>
        </footer>
    )
}
