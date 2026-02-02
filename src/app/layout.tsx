import type { Metadata } from 'next'
import './globals.css'
import { Inter, Merriweather } from 'next/font/google'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { StickyMobileCTA } from '@/components/StickyMobileCTA'
import Script from 'next/script'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const merriweather = Merriweather({
  weight: ['300', '400', '700', '900'],
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Best Mesothelioma Lawyers Near Me | Veteran-Owned Legal Referral',
  description: 'Find the best mesothelioma lawyers near you. Free case evaluation. Veteran-owned referral service connecting asbestos exposure victims with top-rated attorneys. No upfront costs.',
  keywords: ['best mesothelioma lawyers near me', 'mesothelioma attorney assistance', 'mesothelioma lawyer near me', 'asbestos attorney', 'veteran owned legal', 'mesothelioma lawsuit'],
  openGraph: {
    title: 'Best Mesothelioma Lawyers Near Me | Veteran-Owned Service',
    description: 'Veteran-owned legal referral service. Connect with top-rated mesothelioma attorneys. Free consultation.',
    type: 'website',
    url: 'https://mesotheliomalawyernearby.vercel.app',
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
        {/* Google tag (gtag.js) */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-TE3T9D4KC0" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-TE3T9D4KC0');
          `}
        </Script>
      </head>
      <body className={`${inter.variable} ${merriweather.variable} font-sans`}>
        <Header />
        {children}
        <Footer />
        <StickyMobileCTA />
      </body>
    </html>
  )
}