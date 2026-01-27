import { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Calendar, Clock, ArrowRight, BookOpen } from 'lucide-react'
import { BLOG_POSTS, BlogPost } from '@/data/blog/posts'

export const metadata: Metadata = {
  title: 'Mesothelioma Resources & Guides | Expert Legal Information',
  description: 'Expert guides on mesothelioma lawsuits, asbestos exposure, state laws, and veterans benefits. Free resources from our veteran-owned legal referral service.',
  keywords: ['mesothelioma guide', 'asbestos lawsuit information', 'mesothelioma resources', 'veteran asbestos exposure'],
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
