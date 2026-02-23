import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Calendar, Clock, ArrowLeft, ArrowRight, Phone, Share2, Shield } from 'lucide-react'
import { BLOG_POSTS, getPostBySlug, getRecentPosts, BlogPost } from '@/data/blog/posts'
import { TARGET_KEYWORDS } from '@/data/keywords'

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

  // Blog-specific FAQs for GEO optimization (5 per topic)
  const blogFaqMap: Record<string, { question: string; answer: string }[]> = {
    'veterans-asbestos-exposure': [
      { question: 'Were Navy veterans exposed to asbestos?', answer: 'Yes. Between the 1930s and 1980s, asbestos was used extensively in Navy ships for fireproofing and insulation. Engine rooms, boiler rooms, pipe insulation, and sleeping quarters all contained asbestos materials. Navy veterans are the largest group of mesothelioma patients in the United States.' },
      { question: 'Can veterans file a mesothelioma lawsuit and get VA benefits?', answer: 'Yes. Veterans can pursue both VA disability benefits and a civil lawsuit against asbestos manufacturers simultaneously. Filing a lawsuit does not affect VA benefits — these are separate systems.' },
      { question: 'What VA benefits are available for mesothelioma?', answer: 'Veterans with service-connected mesothelioma are eligible for 100% disability compensation (approximately $3,621.95/month), free VA healthcare, and their survivors may receive Dependency and Indemnity Compensation (DIC).' },
      { question: 'Which Navy ships had the most asbestos?', answer: 'Aircraft carriers like the USS America, USS Midway, and USS Enterprise had the highest amounts of asbestos due to their size and extensive machinery. Battleships, cruisers, and repair ships were also high-risk. Nearly every Navy ship built before 1980 contained asbestos.' },
      { question: 'How long after asbestos exposure does mesothelioma develop?', answer: 'Mesothelioma has a latency period of 20 to 50 years. A veteran exposed to asbestos in the 1970s may not develop symptoms until 2025 or later. This is why many Vietnam-era veterans are only now being diagnosed.' },
    ],
    'understanding-mesothelioma-diagnosis': [
      { question: 'What are the four types of mesothelioma?', answer: 'The four types are pleural mesothelioma (lungs, most common), peritoneal mesothelioma (abdomen, about 20% of cases), pericardial mesothelioma (heart, rare), and testicular mesothelioma (testes, rarest form).' },
      { question: 'Is mesothelioma often misdiagnosed?', answer: 'Yes. Because mesothelioma is rare, it is frequently misdiagnosed as lung cancer, pneumonia, or other conditions. Getting a second opinion from a mesothelioma specialist at a major cancer center is strongly recommended.' },
      { question: 'What should I do after a mesothelioma diagnosis?', answer: 'Seek a second opinion from a mesothelioma specialist, gather your work and exposure history, contact a mesothelioma attorney to understand your legal options, and explore both medical treatment and financial compensation.' },
      { question: 'What are the stages of mesothelioma?', answer: 'Mesothelioma is staged from I to IV. Stages I and II are considered early-stage with more treatment options. Stages III and IV are advanced, with treatment focusing on symptom management and extending life.' },
      { question: 'Can I file a lawsuit after a mesothelioma diagnosis?', answer: 'Yes. Most mesothelioma patients are eligible to file a lawsuit against the companies responsible for their asbestos exposure. Attorneys work on contingency, so there is no upfront cost.' },
    ],
    'mesothelioma-treatment-options': [
      { question: 'What is the standard treatment for mesothelioma?', answer: 'The standard of care is multimodal therapy, which typically combines surgery, chemotherapy, and radiation. The specific approach depends on the type, stage, and location of the mesothelioma.' },
      { question: 'Is immunotherapy effective for mesothelioma?', answer: 'Yes. Immunotherapy drugs like Opdivo (nivolumab) and Yervoy (ipilimumab) have been approved as first-line treatments for pleural mesothelioma, particularly for patients who are not candidates for surgery.' },
      { question: 'Are there clinical trials for mesothelioma?', answer: 'Yes. Ongoing clinical trials are testing new treatments including gene therapy, targeted therapy, and combination immunotherapy approaches. Your oncologist or a mesothelioma specialist can help identify trials you may qualify for.' },
      { question: 'What is the life expectancy for mesothelioma patients?', answer: 'Life expectancy varies by stage and type. With treatment, the median survival is 12 to 21 months for pleural mesothelioma. Early-stage patients who receive aggressive treatment can live significantly longer.' },
      { question: 'Does insurance cover mesothelioma treatment?', answer: 'Most insurance plans cover standard mesothelioma treatments. Veterans may receive free treatment through the VA. Additionally, legal compensation from lawsuits or trust funds can help cover treatment costs not covered by insurance.' },
    ],
    'asbestos-trust-funds-explained': [
      { question: 'What are asbestos trust funds?', answer: 'Asbestos trust funds were established by bankrupt asbestos companies under court order to compensate future victims. Over $30 billion currently remains in these funds to pay mesothelioma victims and their families.' },
      { question: 'How do I file an asbestos trust fund claim?', answer: 'An experienced asbestos attorney files the claim on your behalf. You need to prove you worked with the company\'s asbestos products and have a qualifying diagnosis. Unlike lawsuits, trust fund claims do not require a trial.' },
      { question: 'How long does a trust fund claim take?', answer: 'Trust fund claims are typically resolved faster than lawsuits — often within a few months. Some trusts offer expedited review processes that can pay out in as little as 90 days.' },
      { question: 'Can I file multiple trust fund claims?', answer: 'Yes. If you were exposed to asbestos products from multiple companies, you can file claims with each company\'s trust fund. An experienced attorney can identify all the trusts you may be eligible to claim from.' },
      { question: 'Do I need a lawyer for a trust fund claim?', answer: 'While not legally required, having an experienced asbestos attorney significantly increases your chances of a successful claim and maximizes your payout. Attorneys work on contingency, so there is no upfront cost.' },
    ],
    'filing-mesothelioma-lawsuit': [
      { question: 'How do I file a mesothelioma lawsuit?', answer: 'The process starts with hiring a specialized asbestos law firm. Your legal team will gather your work history and medical records, identify responsible companies, file the complaint, and handle settlement negotiations or trial preparation.' },
      { question: 'How long does a mesothelioma lawsuit take?', answer: 'Most mesothelioma lawsuits are resolved within 12 to 18 months. Some cases settle faster through negotiation, while others may go to trial. Courts often expedite mesothelioma cases due to the serious nature of the illness.' },
      { question: 'What is the average mesothelioma lawsuit settlement?', answer: 'The average mesothelioma settlement ranges from $1 million to $1.4 million. Trial verdicts average $2.4 million or more. Actual amounts depend on exposure history, responsible companies, and case specifics.' },
      { question: 'Do I have to go to court for a mesothelioma lawsuit?', answer: 'Most mesothelioma cases (over 95%) settle out of court. If your case does go to trial, your attorney handles the majority of the process. Many depositions can be done remotely to minimize travel.' },
      { question: 'What is the statute of limitations for mesothelioma lawsuits?', answer: 'The statute of limitations varies by state, ranging from 1 to 6 years from the date of diagnosis. Some states have very short windows, so it is critical to contact an attorney immediately after diagnosis.' },
    ],
  }

  const blogFaqs = blogFaqMap[post.slug] || []

  // FAQPage JSON-LD schema for GEO optimization
  const faqSchema = blogFaqs.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': blogFaqs.map(faq => ({
      '@type': 'Question',
      'name': faq.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': faq.answer
      }
    }))
  } : null

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
      {/* FAQPage JSON-LD Schema for GEO optimization */}
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

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

                {/* Helpful Resources */}
                {post.relatedLandingPages?.length > 0 && (
                  <div>
                    <h3 className="font-serif font-semibold mb-4">Helpful Resources</h3>
                    <div className="space-y-2">
                      {post.relatedLandingPages.map((page) => (
                        <Link
                          key={page.href}
                          href={page.href}
                          className="flex items-center gap-2 text-sm text-primary hover:text-primary/80 hover:underline py-1"
                        >
                          <ArrowRight className="h-3 w-3 flex-shrink-0" />
                          {page.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {/* Find a Lawyer in Your State */}
                {post.relatedLocationSlugs?.length > 0 && (
                  <div>
                    <h3 className="font-serif font-semibold mb-3">Find a Lawyer By State</h3>
                    <div className="flex flex-wrap gap-2">
                      {post.relatedLocationSlugs.map((slug) => {
                        const location = TARGET_KEYWORDS.find((k) => k.slug === slug)
                        if (!location) return null
                        return (
                          <Link
                            key={slug}
                            href={`/location/${slug}`}
                            className="inline-block bg-muted hover:bg-primary/10 text-sm font-medium px-3 py-1.5 rounded-full transition-colors"
                          >
                            {location.state}
                          </Link>
                        )
                      })}
                      <Link
                        href="/directory"
                        className="inline-block bg-accent/10 hover:bg-accent/20 text-accent text-sm font-medium px-3 py-1.5 rounded-full transition-colors"
                      >
                        All States →
                      </Link>
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
