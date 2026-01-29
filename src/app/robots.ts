import { TARGET_KEYWORDS } from '@/data/keywords'

export default function robots() {
    const baseUrl = 'https://mesotheliomalawyernearby.com'

    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/api/', '/admin/'],
            },
        ],
        sitemap: `${baseUrl}/sitemap.xml`,
    }
}
