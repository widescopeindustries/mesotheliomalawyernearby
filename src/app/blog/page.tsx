import { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Calendar, Clock, ArrowRight, BookOpen } from 'lucide-react'
import { BLOG_POSTS, BlogPost } from '@/data/blog/posts'
import { TARGET_KEYWORDS } from '@/data/keywords'

export const metadata: Metadata = {
  title: 'Mesothelioma Resources & Guides | Expert Legal Information',
  description: 'Expert guides on mesothelioma lawsuits, asbestos exposure, state laws, and veterans benefits. Free resources from our veteran-owned legal referral service.',
  keywords: ['mesothelioma guide', 'asbestos lawsuit information', 'mesothelioma resources', 'veteran asbestos exposure'],
  alternates: {
    canonical: 'https://mesotheliomalawyernearby.com/blog',
  },
}

const categoryLabels: Record<BlogPost['category'], string> = {
  'state-guide': 'State Guide',
  'exposure-site': 'Exposure Site',
  'medical': 'Medical Info',
  'veteran': 'Veterans',
  'legal-process': 'Legal Process',
}

const categoryColors: Record<BlogPost['category'], string> = {
  'state-guide': 'bg-blue-100 text-blue-800',
  'exposure-site': 'bg-red-100 text-red-800',
  'medical': 'bg-green-100 text-green-800',
  'veteran': 'bg-purple-100 text-purple-800',
  'legal-process': 'bg-amber-100 text-amber-800',
}

export default function BlogPage() {
  const posts = [...BLOG_POSTS].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  )

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-primary/5 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/20 px-4 py-2 rounded-full mb-6">
              <BookOpen className="h-5 w-5 text-primary" />
              <span className="text-sm font-semibold text-primary">Resources & Guides</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Mesothelioma Legal Resources
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Expert guides on mesothelioma lawsuits, state laws, asbestos exposure sites, 
              and veterans benefits. Written by our veteran-owned legal referral team.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {posts.length === 0 ? (
              <div className="text-center py-16">
                <BookOpen className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                <h2 className="text-2xl font-semibold mb-2">Content Coming Soon</h2>
                <p className="text-muted-foreground max-w-md mx-auto">
                  We&apos;re building a comprehensive library of mesothelioma resources. 
                  Check back soon for expert guides on state laws, exposure sites, and legal processes.
                </p>
                <div className="mt-8">
                  <Link 
                    href="/"
                    className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-accent-foreground px-6 py-3 rounded-lg font-semibold transition-all"
                  >
                    Return Home
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post) => (
                  <Link key={post.slug} href={`/blog/${post.slug}`}>
                    <Card className="h-full hover:shadow-lg transition-all duration-200 hover:border-primary/50 group">
                      <CardContent className="p-6">
                        <Badge className={`mb-4 ${categoryColors[post.category]}`}>
                          {categoryLabels[post.category]}
                        </Badge>
                        <h2 className="font-serif text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                          {post.title}
                        </h2>
                        <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                          {post.description}
                        </p>
                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {new Date(post.publishedAt).toLocaleDateString('en-US', {
                              month: 'short',
                              day: 'numeric',
                              year: 'numeric'
                            })}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {post.readTime}
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Find a Lawyer by State */}
      <section className="py-12 bg-muted/40 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl font-bold mb-2 text-center">Find a Mesothelioma Lawyer by State</h2>
            <p className="text-muted-foreground text-sm text-center mb-6">
              Our veteran-owned referral service connects victims with experienced attorneys nationwide.
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {TARGET_KEYWORDS
                .filter((k) => (k as any).isStatePage)
                .sort((a, b) => ((b as any).volume || 0) - ((a as any).volume || 0))
                .slice(0, 20)
                .map((k) => (
                  <Link
                    key={k.slug}
                    href={`/location/${k.slug}`}
                    className="px-4 py-2 bg-background hover:bg-primary/10 border border-border rounded-full text-sm font-medium transition-colors"
                  >
                    {k.state}
                  </Link>
                ))}
              <Link
                href="/directory"
                className="px-4 py-2 bg-accent/10 hover:bg-accent/20 text-accent border border-accent/30 rounded-full text-sm font-medium transition-colors"
              >
                All States →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Landing Pages */}
      <section className="py-10 bg-background border-t border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-lg font-bold mb-4 text-center">Legal Resources</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { href: '/best-mesothelioma-lawyers', label: 'Top Mesothelioma Lawyers' },
                { href: '/mesothelioma-lawyer-near-me', label: 'Find a Lawyer Near Me' },
                { href: '/asbestos-lawyer', label: 'Asbestos Lawyer' },
                { href: '/mesothelioma-lawsuit', label: 'Lawsuit Guide' },
                { href: '/veteran-resources', label: 'Veterans Resources' },
                { href: '/asbestos-trust-funds-explained', label: 'Trust Funds' },
                { href: '/types/pleural-mesothelioma', label: 'Pleural Mesothelioma' },
                { href: '/exposure-sites', label: 'Exposure Sites' },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-4 py-2 bg-muted hover:bg-primary/10 rounded-lg text-sm font-medium transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Need Immediate Legal Help?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Don&apos;t wait. Call now for a free, confidential consultation.
            </p>
            <a 
              href="tel:214-699-4543"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 rounded-lg font-bold text-lg transition-all"
            >
              Call (214) 699-4543 - 24/7
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
