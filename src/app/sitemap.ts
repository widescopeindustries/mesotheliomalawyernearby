import { TARGET_KEYWORDS } from '@/data/keywords'
import { EXPOSURE_SITE_DETAILS } from '@/data/exposure-sites'

// Blog posts data - add new blog posts here
const BLOG_POSTS = [
    { slug: 'understanding-mesothelioma-diagnosis', title: 'Understanding Mesothelioma Diagnosis' },
    { slug: 'veterans-asbestos-exposure', title: 'Veterans and Asbestos Exposure' },
    { slug: 'mesothelioma-treatment-options', title: 'Mesothelioma Treatment Options' },
    { slug: 'asbestos-trust-funds-explained', title: 'Asbestos Trust Funds Explained' },
    { slug: 'filing-mesothelioma-lawsuit', title: 'Filing a Mesothelioma Lawsuit' },
]

export default function sitemap() {
    const baseUrl = 'https://mesotheliomalawyernearby.com'

    // Updated date - February 5, 2026
    const currentDate = '2026-02-05T00:00:00.000Z'

    // Core pages - Homepage and main navigation
    const corePages = [
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
            url: `${baseUrl}/contact`,
            lastModified: currentDate,
            changeFrequency: 'monthly' as const,
            priority: 0.9,
        },
        {
            url: `${baseUrl}/directory`,
            lastModified: currentDate,
            changeFrequency: 'weekly' as const,
            priority: 0.9,
        },
    ]

    // High-value landing pages
    const landingPages = [
        {
            url: `${baseUrl}/best-mesothelioma-lawyers`,
            lastModified: currentDate,
            changeFrequency: 'monthly' as const,
            priority: 0.9,
        },
        {
            url: `${baseUrl}/mesothelioma-lawyer-near-me`,
            lastModified: currentDate,
            changeFrequency: 'monthly' as const,
            priority: 0.9,
        },
        {
            url: `${baseUrl}/asbestos-lawyer`,
            lastModified: currentDate,
            changeFrequency: 'monthly' as const,
            priority: 0.9,
        },
        {
            url: `${baseUrl}/mesothelioma-lawsuit`,
            lastModified: currentDate,
            changeFrequency: 'monthly' as const,
            priority: 0.9,
        },
        {
            url: `${baseUrl}/veteran-resources`,
            lastModified: currentDate,
            changeFrequency: 'monthly' as const,
            priority: 0.9,
        },
    ]

    // Information pages
    const infoPages = [
        {
            url: `${baseUrl}/statistics`,
            lastModified: currentDate,
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/exposure-sites`,
            lastModified: currentDate,
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
    ]

    // Mesothelioma type pages
    const typePages = [
        {
            url: `${baseUrl}/types/peritoneal-mesothelioma`,
            lastModified: currentDate,
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/types/pleural-mesothelioma`,
            lastModified: currentDate,
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/types/pericardial-mesothelioma`,
            lastModified: currentDate,
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
    ]

    // Blog pages
    const blogMainPage = {
        url: `${baseUrl}/blog`,
        lastModified: currentDate,
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }

    const blogPostPages = BLOG_POSTS.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: currentDate,
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }))

    // Legal/policy pages (lower priority)
    const legalPages = [
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

    // Programmatic location pages (state + city = 1300+)
    const locationPages = TARGET_KEYWORDS.map((keyword) => ({
        url: `${baseUrl}/location/${keyword.slug}`,
        lastModified: currentDate,
        changeFrequency: 'monthly' as const,
        priority: ('isStatePage' in keyword && keyword.isStatePage) ? 0.8 : 0.7,
    }))

    // Exposure site detail pages
    const exposureSitePages = EXPOSURE_SITE_DETAILS.map((site) => ({
        url: `${baseUrl}/exposure-sites/${site.id}`,
        lastModified: currentDate,
        changeFrequency: 'monthly' as const,
        priority: 0.8,
    }))

    // Combine all pages
    return [
        ...corePages,
        ...landingPages,
        ...infoPages,
        ...typePages,
        blogMainPage,
        ...blogPostPages,
        ...legalPages,
        ...locationPages,
        ...exposureSitePages,
    ]
}
