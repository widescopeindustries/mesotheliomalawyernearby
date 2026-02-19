import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Hunters Point Naval Shipyard Asbestos Exposure & Mesothelioma Claims | Free Case Review',
    description: 'Hunters Point Naval Shipyard workers exposed to asbestos from 1941-1974 may be entitled to compensation. Learn about your legal rights and get a free case evaluation.',
    keywords: 'Hunters Point asbestos, Hunters Point mesothelioma, San Francisco shipyard asbestos, naval shipyard cancer, Hunters Point lawsuit, Hunters Point compensation',
    openGraph: {
        title: 'Hunters Point Naval Shipyard Mesothelioma Claims',
        description: 'Over 18,000 workers were exposed to asbestos at Hunters Point. Get your free case review today.',
    },
    alternates: {
        canonical: 'https://mesotheliomalawyernearby.com/hunters-point-mesothelioma',
    },
}

export default function HuntersPointLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
}
