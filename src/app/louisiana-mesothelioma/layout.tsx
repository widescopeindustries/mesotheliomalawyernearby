import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Louisiana Mesothelioma Lawyers | Avondale Shipyard & Refinery Asbestos Claims',
    description: 'Louisiana has one of the highest mesothelioma rates in the U.S. due to shipyard and refinery asbestos exposure. Get a free case review from experienced mesothelioma attorneys.',
    keywords: 'Louisiana mesothelioma lawyer, Avondale shipyard asbestos, Baton Rouge mesothelioma attorney, New Orleans asbestos lawyer, Louisiana asbestos exposure, refinery asbestos Louisiana',
    openGraph: {
        title: 'Louisiana Mesothelioma Lawyers',
        description: 'Louisiana has one of the highest mesothelioma rates due to Avondale Shipyard and refinery exposure. Free case review.',
    }
}

export default function LouisianaLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
}
