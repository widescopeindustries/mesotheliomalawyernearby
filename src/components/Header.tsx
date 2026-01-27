'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Phone, Menu, X, Shield } from 'lucide-react'
import { useState } from 'react'

export function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    const navigation = [
        { name: 'Home', href: '/' },
        { name: 'About Us', href: '/about' },
        { name: 'Veteran Resources', href: '/veteran-resources' },
        { name: 'Find a Lawyer', href: '/#locations' },
        { name: 'Contact', href: '/contact' },
    ]

    return (
        <header className="bg-background border-b border-border sticky top-0 z-50">
            <nav className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 transition-opacity hover:opacity-80">
                        <Shield className="h-8 w-8 text-primary" />
                        <div className="flex flex-col">
                            <span className="font-serif font-bold text-lg leading-tight text-foreground">Mesothelioma</span>
                            <span className="text-xs text-muted-foreground leading-tight">Lawyer Nearby</span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-6">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>

                    {/* CTA Button - Desktop */}
                    <div className="hidden md:flex items-center gap-4">
                        <Button asChild size="sm" className="bg-accent hover:bg-accent/90 text-accent-foreground transition-all duration-200 hover:shadow-lg">
                            <a href="tel:214-699-4543" className="flex items-center gap-2">
                                <Phone className="h-4 w-4" />
                                (214) 699-4543
                            </a>
                        </Button>
                    </div>

                    {/* Mobile: Phone + Menu */}
                    <div className="flex md:hidden items-center gap-2">
                        {/* Always visible phone button on mobile */}
                        <Button asChild size="sm" className="bg-accent hover:bg-accent/90 text-accent-foreground transition-all duration-200 hover:shadow-lg">
                            <a href="tel:214-699-4543" className="flex items-center gap-1 text-xs">
                                <Phone className="h-4 w-4" />
                                <span className="hidden sm:inline">Call Now</span>
                            </a>
                        </Button>

                        {/* Mobile menu button */}
                        <button
                            className="p-2 transition-colors hover:bg-muted rounded-md"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                        >
                            {mobileMenuOpen ? (
                                <X className="h-6 w-6" />
                            ) : (
                                <Menu className="h-6 w-6" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {mobileMenuOpen && (
                    <div className="md:hidden py-4 border-t">
                        <div className="flex flex-col gap-4">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="text-sm font-medium text-muted-foreground hover:text-foreground"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <Button asChild size="sm" className="bg-accent hover:bg-accent/90 text-accent-foreground transition-all duration-200 hover:shadow-lg w-full mt-2">
                                <a href="tel:214-699-4543" className="flex items-center justify-center gap-2">
                                    <Phone className="h-4 w-4" />
                                    (214) 699-4543
                                </a>
                            </Button>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    )
}
