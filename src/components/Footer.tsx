import Link from 'next/link'
import { Shield, Phone, Mail, MapPin } from 'lucide-react'

export function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-primary text-primary-foreground">
            {/* Main Footer */}
            <div className="container mx-auto px-4 py-16">
                <div className="grid md:grid-cols-4 gap-12">
                    {/* Brand */}
                    <div className="md:col-span-1">
                        <Link href="/" className="flex items-center gap-2 mb-4 transition-opacity hover:opacity-80">
                            <Shield className="h-8 w-8 text-accent" />
                            <div className="flex flex-col">
                                <span className="font-serif font-bold text-lg leading-tight">Mesothelioma</span>
                                <span className="text-xs opacity-80 leading-tight">Lawyer Nearby</span>
                            </div>
                        </Link>
                        <p className="text-sm opacity-90 mb-4">
                            Veteran-owned legal referral service connecting mesothelioma victims with experienced attorneys.
                        </p>
                        <div className="flex items-center gap-2 text-sm">
                            <Shield className="h-4 w-4 text-accent" />
                            <span className="text-accent font-semibold">SDVOSB Certified</span>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-serif font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2 text-sm opacity-90">
                            <li><Link href="/" className="hover:text-accent transition-colors">Home</Link></li>
                            <li><Link href="/about" className="hover:text-accent transition-colors">About Us</Link></li>
                            <li><Link href="/veteran-resources" className="hover:text-accent transition-colors">Veteran Resources</Link></li>
                            <li><Link href="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h3 className="font-serif font-semibold mb-4">Legal</h3>
                        <ul className="space-y-2 text-sm opacity-90">
                            <li><Link href="/privacy-policy" className="hover:text-accent transition-colors">Privacy Policy</Link></li>
                            <li><Link href="/terms-of-service" className="hover:text-accent transition-colors">Terms of Service</Link></li>
                            <li><Link href="/disclaimer" className="hover:text-accent transition-colors">Legal Disclaimer</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="font-serif font-semibold mb-4">Contact Us</h3>
                        <ul className="space-y-3 text-sm opacity-90">
                            <li>
                                <a href="tel:682-999-0953" className="flex items-center gap-2 hover:text-accent transition-colors">
                                    <Phone className="h-4 w-4" />
                                    (682) 999-0953
                                </a>
                            </li>
                            <li>
                                <a href="mailto:mesolawyernearme@gmail.com" className="flex items-center gap-2 hover:text-accent transition-colors break-all">
                                    <Mail className="h-4 w-4 flex-shrink-0" />
                                    mesolawyernearme@gmail.com
                                </a>
                            </li>
                            <li className="flex items-start gap-2">
                                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                                <span>Serving clients nationwide</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-primary-foreground/20">
                <div className="container mx-auto px-4 py-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-80">
                        <p>© {currentYear} Widescope Industries LLC. All rights reserved.</p>
                        <p className="text-center">
                            Service-Disabled Veteran-Owned Small Business (SDVOSB)
                        </p>
                    </div>
                </div>
            </div>

            {/* Disclaimer */}
            <div className="bg-primary/80 py-6">
                <div className="container mx-auto px-4">
                    <p className="text-xs opacity-70 text-center max-w-4xl mx-auto">
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
