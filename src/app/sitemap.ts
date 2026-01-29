import { TARGET_KEYWORDS } from '@/data/keywords'
import { EXPOSURE_SITE_DETAILS } from '@/data/exposure-sites'

export default function sitemap() {
    const baseUrl = 'https://mesotheliomalawyernearby.com'

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
        {
            url: `${baseUrl}/contact`,
            lastModified: currentDate,
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/types/peritoneal-mesothelioma`,
            lastModified: currentDate,
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/privacy-policy`,
            lastModified: currentDate,
            changeFrequency: 'yearly' as const,
            priority: 0.3,
        },
        {
            url: `${baseUrl}/terms-of-service`,
            lastModified: currentDate,
            changeFrequency: 'yearly' as const,
            priority: 0.3,
        },
        {
            url: `${baseUrl}/disclaimer`,
            lastModified: currentDate,
            changeFrequency: 'yearly' as const,
            priority: 0.3,
        },
    ]

    // Add all programmatic location pages
    const locationPages = TARGET_KEYWORDS.map((keyword) => ({
        url: `${baseUrl}/location/${keyword.slug}`,
        lastModified: currentDate,
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }))

    // Add all exposure site detail pages
    const exposureSitePages = EXPOSURE_SITE_DETAILS.map((site) => ({
        url: `${baseUrl}/exposure-sites/${site.id}`,
        lastModified: currentDate,
        changeFrequency: 'monthly' as const,
        priority: 0.8,
    }))

    return [...routes, ...locationPages, ...exposureSitePages]
}
