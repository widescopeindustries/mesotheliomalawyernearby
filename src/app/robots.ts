import { TARGET_KEYWORDS } from '@/data/keywords'

export default function robots() {
    const baseUrl = 'https://mesothelioma-legal-help.com'

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
