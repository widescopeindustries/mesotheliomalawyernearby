import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Calendar, Clock, ArrowLeft, Phone, Share2, Shield } from 'lucide-react'
import { BLOG_POSTS, getPostBySlug, getRecentPosts, BlogPost } from '@/data/blog/posts'

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug
  }))
}

// Generate metadata for each blog post
export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = getPostBySlug(params.slug)

  if (!post) {
    return {
      title: 'Article Not Found',
      description: 'This article could not be found.'
    }
  }

  return {
    title: `${post.title} | Mesothelioma Lawyer Nearby`,
    description: post.description,
    keywords: post.keywords,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt || post.publishedAt,
      authors: [post.author],
    },
    alternates: {
      canonical: `https://mesotheliomalawyernearby.com/blog/${params.slug}`
    }
  }
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

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  const recentPosts = getRecentPosts(3).filter(p => p.slug !== post.slug)

  // Create Article schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.description,
    "author": {
      "@type": "Organization",
      "name": post.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "Mesothelioma Lawyer Nearby",
      "logo": {
        "@type": "ImageObject",
        "url": "https://mesotheliomalawyernearby.com/logo.png"
      }
    },
    "datePublished": post.publishedAt,
    "dateModified": post.updatedAt || post.publishedAt,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://mesotheliomalawyernearby.com/blog/${post.slug}`
    }
  }

  return (
    <div className="min-h-screen">
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Article Header */}
      <section className="bg-gradient-to-br from-primary/10 to-primary/5 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link 
              href="/blog"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-6 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Resources
            </Link>

            <Badge className={`mb-4 ${categoryColors[post.category]}`}>
              {categoryLabels[post.category]}
            </Badge>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
              {post.title}
            </h1>

            <p className="text-xl text-muted-foreground mb-6">
              {post.description}
            </p>

            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-primary" />
                {post.author}
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                {new Date(post.publishedAt).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric'
                })}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                {post.readTime}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <article 
                  className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-foreground prose-p:text-muted-foreground prose-a:text-primary prose-strong:text-foreground"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />

                {/* Article CTA */}
                <div className="mt-12 p-8 bg-accent/10 border-2 border-accent/30 rounded-lg">
                  <h3 className="font-serif text-xl font-bold mb-3">
                    Need Legal Help?
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    If you or a loved one has been diagnosed with mesothelioma, 
                    our team can connect you with experienced attorneys who specialize in asbestos cases.
                  </p>
                  <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
                    <a href="tel:214-699-4543">
                      <Phone className="h-5 w-5 mr-2" />
                      Call (214) 699-4543 - Free Consultation
                    </a>
                  </Button>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1 space-y-8">
                {/* Quick Contact Card */}
                <Card className="sticky top-24">
                  <CardContent className="p-6">
                    <h3 className="font-serif font-semibold mb-4">Get Free Legal Help</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      24/7 support from our veteran-owned referral service.
                    </p>
                    <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground mb-4" asChild>
                      <a href="tel:214-699-4543">
                        <Phone className="h-4 w-4 mr-2" />
                        (214) 699-4543
                      </a>
                    </Button>
                    <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
                      <Shield className="h-3 w-3" />
                      SDVOSB Certified
                    </div>
                  </CardContent>
                </Card>

                {/* Related Posts */}
                {recentPosts.length > 0 && (
                  <div>
                    <h3 className="font-serif font-semibold mb-4">Related Articles</h3>
                    <div className="space-y-4">
                      {recentPosts.map((relatedPost) => (
                        <Link key={relatedPost.slug} href={`/blog/${relatedPost.slug}`}>
                          <Card className="hover:border-primary/50 transition-all">
                            <CardContent className="p-4">
                              <Badge className={`mb-2 text-xs ${categoryColors[relatedPost.category]}`}>
                                {categoryLabels[relatedPost.category]}
                              </Badge>
                              <h4 className="font-medium text-sm line-clamp-2 hover:text-primary transition-colors">
                                {relatedPost.title}
                              </h4>
                            </CardContent>
                          </Card>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
