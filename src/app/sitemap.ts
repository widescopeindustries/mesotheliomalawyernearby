import { TARGET_KEYWORDS } from '@/data/keywords'

export default function sitemap() {
    const baseUrl = 'https://mesotheliomalawyernearby.vercel.app'

    // Get current date for lastModified
    const currentDate = new Date().toISOString()

    // Core pages
    const routes = [
        {
            url: baseUrl,
            lastModified: currentDate,
            changeFrequency: 'weekly' as const,
            priority: 1.0,
        },
        {
            url: `${baseUrl}/about`,
            lastModified: currentDate,
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/veteran-resources`,
            lastModified: currentDate,
            changeFrequency: 'monthly' as const,
            priority: 0.9,
        },
    ]

    // Add all programmatic location pages
    const locationPages = TARGET_KEYWORDS.map((keyword) => ({
        url: `${baseUrl}/location/${keyword.slug}`,
        lastModified: currentDate,
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }))

    return [...routes, ...locationPages]
}
