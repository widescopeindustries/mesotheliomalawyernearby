import type { Metadata } from 'next'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mesothelioma Legal Help - Veteran-Owned Legal Referral Service',
  description: 'Connect with experienced mesothelioma lawyers across the United States. Veteran-owned service providing trusted legal guidance for asbestos exposure victims.',
  keywords: ['mesothelioma lawyer', 'asbestos attorney', 'veteran owned legal', 'mesothelioma legal help', 'asbestos lawsuit'],
  openGraph: {
    title: 'Mesothelioma Legal Help - Veteran-Owned Service',
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
      <body className={inter.className}>{children}</body>
    </html>
  )
}