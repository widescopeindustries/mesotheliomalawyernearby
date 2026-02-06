import type { Metadata, Viewport } from 'next'
import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { StickyMobileCTA } from '@/components/StickyMobileCTA'
import { GoogleAnalytics } from '@/lib/analytics'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5, // Allow users to zoom up to 500% for accessibility
}

export const metadata: Metadata = {
  title: 'Mesothelioma Lawyers | Free Consultation | Veteran-Owned',
  description: 'Find experienced mesothelioma lawyers who understand your situation. Free case evaluation. Veteran-owned service. We help asbestos exposure victims get the compensation they deserve. No upfront costs.',
  keywords: ['mesothelioma lawyer', 'asbestos attorney', 'mesothelioma lawsuit', 'veteran legal help', 'asbestos exposure lawyer'],
  metadataBase: new URL('https://mesotheliomalawyernearby.com'),
  openGraph: {
    title: 'Mesothelioma Lawyers | Veteran-Owned Service',
    description: 'Veteran-owned legal referral service. Connect with experienced mesothelioma attorneys. Free consultation. No pressure.',
    type: 'website',
    url: 'https://mesotheliomalawyernearby.com',
    siteName: 'Mesothelioma Lawyer Nearby',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Preload Atkinson Hyperlegible font for accessibility */}
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:ital,wght@0,400;0,700;1,400;1,700&display=swap"
          rel="stylesheet"
        />
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID || "G-TE3T9D4KC0"} />
      </head>
      <body className="font-sans antialiased">
        {/* Skip link for keyboard navigation - accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-accent focus:text-accent-foreground focus:px-6 focus:py-3 focus:rounded-lg focus:font-bold"
        >
          Skip to main content
        </a>

        <Header />
        <main id="main-content" role="main">
          {children}
        </main>
        <Footer />
        <StickyMobileCTA />
      </body>
    </html>
  )
}