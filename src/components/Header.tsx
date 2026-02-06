'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Phone, Menu, X, Shield } from 'lucide-react'
import { useState } from 'react'
import { trackPhoneClick } from '@/components/Analytics'

export function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    const navigation = [
        { name: 'Home', href: '/' },
        { name: 'About Us', href: '/about' },
        { name: 'Veteran Resources', href: '/veteran-resources' },
        { name: 'Find a Lawyer', href: '/directory' },
        { name: 'Contact', href: '/contact' },
    ]

    return (
        <header className="bg-background border-b-2 border-border sticky top-0 z-50">
            <nav className="container mx-auto px-4 md:px-6" aria-label="Main navigation">
                <div className="flex items-center justify-between h-20 md:h-24">

                    {/* Logo - larger and clearer */}
                    <Link
                        href="/"
                        className="flex items-center gap-3 transition-opacity hover:opacity-80 focus:opacity-80 min-h-touch"
                        aria-label="Mesothelioma Lawyer Nearby - Go to homepage"
                    >
                        <Shield className="h-10 w-10 text-primary" aria-hidden="true" />
                        <div className="flex flex-col">
                            <span className="font-serif font-bold text-xl leading-tight text-foreground">
                                Mesothelioma
                            </span>
                            <span className="text-sm text-muted-foreground leading-tight">
                                Lawyer Nearby
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Navigation - larger touch targets */}
                    <div className="hidden lg:flex items-center gap-2">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-base font-medium text-muted-foreground hover:text-foreground hover:bg-muted px-4 py-3 rounded-lg transition-colors min-h-touch flex items-center"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>

                    {/* CTA Button - Desktop */}
                    <div className="hidden lg:flex items-center">
                        <a
                            href="tel:214-699-4543"
                            onClick={() => trackPhoneClick('214-699-4543', 'Header Desktop')}
                            className="inline-flex items-center gap-3 bg-accent hover:bg-accent/90 text-accent-foreground px-6 py-4 rounded-xl font-bold text-lg transition-all duration-200 hover:shadow-lg min-h-touch"
                            aria-label="Call us at 214-699-4543"
                        >
                            <Phone className="h-5 w-5" aria-hidden="true" />
                            (214) 699-4543
                        </a>
                    </div>

                    {/* Mobile: Phone + Menu - large touch targets */}
                    <div className="flex lg:hidden items-center gap-3">
                        {/* Always visible phone button on mobile */}
                        <a
                            href="tel:214-699-4543"
                            onClick={() => trackPhoneClick('214-699-4543', 'Header Mobile')}
                            className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-accent-foreground px-4 py-3 rounded-xl font-bold text-base transition-all duration-200 min-h-touch min-w-touch"
                            aria-label="Call us at 214-699-4543"
                        >
                            <Phone className="h-5 w-5" aria-hidden="true" />
                            <span className="hidden sm:inline">Call Now</span>
                        </a>

                        {/* Mobile menu button - large touch target */}
                        <button
                            className="p-3 transition-colors hover:bg-muted rounded-xl min-h-touch min-w-touch flex items-center justify-center"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                            aria-expanded={mobileMenuOpen}
                        >
                            {mobileMenuOpen ? (
                                <X className="h-7 w-7" aria-hidden="true" />
                            ) : (
                                <Menu className="h-7 w-7" aria-hidden="true" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation - large, easy to tap */}
                {mobileMenuOpen && (
                    <div className="lg:hidden py-6 border-t-2 border-border" role="navigation" aria-label="Mobile navigation">
                        <div className="flex flex-col gap-2">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="text-lg font-medium text-muted-foreground hover:text-foreground hover:bg-muted px-4 py-4 rounded-xl transition-colors min-h-touch flex items-center"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}

                            {/* Phone CTA in mobile menu */}
                            <a
                                href="tel:214-699-4543"
                                onClick={() => {
                                    trackPhoneClick('214-699-4543', 'Header Mobile Menu')
                                    setMobileMenuOpen(false)
                                }}
                                className="flex items-center justify-center gap-3 bg-accent hover:bg-accent/90 text-accent-foreground px-6 py-5 rounded-xl font-bold text-xl mt-4 min-h-[60px]"
                                aria-label="Call us at 214-699-4543"
                            >
                                <Phone className="h-6 w-6" aria-hidden="true" />
                                (214) 699-4543
                            </a>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    )
}
