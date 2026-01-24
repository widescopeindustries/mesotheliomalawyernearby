import type { Metadata } from 'next'
import './globals.css'
import { Inter } from 'next/font/google'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mesothelioma Lawyer Nearby - Veteran-Owned Legal Referral Service',
  description: 'Connect with experienced mesothelioma lawyers across the United States. Veteran-owned service providing trusted legal guidance for asbestos exposure victims.',
  keywords: ['mesothelioma lawyer', 'asbestos attorney', 'veteran owned legal', 'mesothelioma lawyer nearby', 'asbestos lawsuit'],
  openGraph: {
    title: 'Mesothelioma Lawyer Nearby - Veteran-Owned Service',
    description: 'Trusted legal referral service connecting mesothelioma victims with experienced attorneys.',
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
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}