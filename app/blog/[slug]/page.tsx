// app/blog/[slug]/page.tsx
import { getBlogPostBySlug, getAllBlogPosts } from "@/lib/blog-posts"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, User, Calendar, Share2, MessageCircle, ChevronRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { SchemaRenderer } from "@/components/schema-renderer"
import { generateBreadcrumbSchema, generateFAQSchema } from "@/lib/seo-utils"
import { format } from "date-fns"

export async function generateStaticParams() {
  const posts = getAllBlogPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)
  if (!post) return {}

  const publishDate = new Date(post.publishedDate)
  const modifiedDate = post.updatedDate ? new Date(post.updatedDate) : publishDate

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    keywords: post.keywords.join(", "),
    authors: [{ name: post.author }],
    publisher: "Jae Travel Expeditions",
    metadataBase: new URL("https://jaetravel.com"),
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      url: `https://jaetravel.com/blog/${post.slug}`,
      publishedTime: publishDate.toISOString(),
      modifiedTime: modifiedDate.toISOString(),
      authors: [post.author],
      section: post.category,
      tags: post.tags,
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.image],
      creator: "@jaetravel",
    },
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)
  if (!post) notFound()

  const allPosts = getAllBlogPosts()
  const relatedPosts = allPosts
    .filter((p) => p.category === post.category && p.id !== post.id)
    .slice(0, 3)

  const publishDate = new Date(post.publishedDate)
  const modifiedDate = post.updatedDate ? new Date(post.updatedDate) : publishDate

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Blog", url: "/blog" },
    { name: post.title, url: `/blog/${post.slug}` },
  ]

  const faqItems = post.faq || []

  const now = new Date()
  const eatTime = now.toLocaleTimeString("en-KE", {
    timeZone: "Africa/Nairobi",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  })
  const eatDate = now.toLocaleDateString("en-KE", {
    timeZone: "Africa/Nairobi",
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <>
      <SchemaRenderer schema={generateBreadcrumbSchema(breadcrumbs)} />
      {faqItems.length > 0 && <SchemaRenderer schema={generateFAQSchema(faqItems)} />}

      <main className="min-h-screen bg-white">
        {/* Hero */}
        <section className="relative h-96 md:h-[70vh] overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 text-white">
            <div className="max-w-5xl mx-auto">
              <Badge className="bg-blue-600 text-white mb-4 text-lg px-4 py-1">{post.category}</Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">{post.title}</h1>
              <div className="flex flex-wrap items-center gap-6 text-lg">
                <span className="flex items-center gap-2">
                  <User className="w-5 h-5" />
                  {post.author}
                </span>
                <span className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  {format(publishDate, "MMMM d, yyyy")}
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  {post.readTime} min read
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            {/* Share */}
            <div className="flex gap-3 mb-8">
              <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                <Share2 className="w-4 h-4" />
                Share
              </button>
              <button className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition">
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </button>
            </div>

            {/* Tags */}
            {post.tags.length > 0 && (
              <div className="flex gap-2 flex-wrap mb-10">
                {post.tags.map((tag) => (
                  <Badge key={tag} className="bg-orange-100 text-orange-900 hover:bg-orange-200 transition">
                    {tag}
                  </Badge>
                ))}
              </div>
            )}

            {/* Article */}
            <article className="prose prose-lg prose-slate max-w-none mb-16">
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </article>

            {/* Updated */}
            {post.updatedDate && (
              <p className="text-sm text-slate-500 italic mb-12">
                Last updated: {format(modifiedDate, "MMMM d, yyyy 'at' h:mm a")} EAT
              </p>
            )}

            {/* Author Bio */}
            <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200 mb-16">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-slate-300 rounded-full border-2 border-white shadow-lg" />
                  <div>
                    <CardTitle className="text-xl">{post.author}</CardTitle>
                    <p className="text-slate-600">Safari Expert</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700 leading-relaxed">
                  {post.authorBio || `${post.author} is an experienced safari guide and travel writer with deep knowledge of East African wildlife and destinations.`}
                </p>
              </CardContent>
            </Card>

            {/* FAQ */}
            {faqItems.length > 0 && (
              <div className="mb-16">
                <h2 className="text-3xl font-bold mb-8 text-slate-900">Frequently Asked Questions</h2>
                <div className="space-y-6">
                  {faqItems.map((faq, i) => (
                    <details key={i} className="group border-b border-slate-200 pb-4">
                      <summary className="flex justify-between items-center cursor-pointer font-semibold text-lg text-slate-800">
                        {faq.question}
                        <span className="text-orange-600 group-open:rotate-180 transition-transform">Down Arrow</span>
                      </summary>
                      <p className="mt-3 text-slate-600 pl-4 leading-relaxed">{faq.answer}</p>
                    </details>
                  ))}
                </div>
              </div>
            )}

            {/* CTA */}
            <div className="bg-gradient-to-r from-orange-600 to-amber-600 text-white p-8 rounded-2xl text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Ready to Book Your Safari?</h2>
              <p className="text-xl mb-6">Let our experts plan your perfect adventure</p>
              <div className="flex gap-4 justify-center flex-wrap">
                <Link href="/contact">
                  <button className="bg-white text-orange-600 px-8 py-3 rounded-lg font-bold hover:bg-orange-50 transition">
                    Get Custom Quote
                  </button>
                </Link>
                <Link href="/tours">
                  <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white/10 transition">
                    Browse Tours
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="py-16 px-4 bg-slate-100">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-12 text-slate-900">You Might Also Like</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedPosts.map((relatedPost) => (
                  <Link key={relatedPost.id} href={`/blog/${relatedPost.slug}`}>
                    <Card className="h-full hover:shadow-2xl transition-all duration-300 cursor-pointer border-slate-200 group">
                      <div className="aspect-video bg-slate-200 relative overflow-hidden">
                        <Image
                          src={relatedPost.image}
                          alt={relatedPost.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                      </div>
                      <CardHeader>
                        <Badge className="bg-blue-600 text-white mb-2">{relatedPost.category}</Badge>
                        <CardTitle className="text-xl line-clamp-2 group-hover:text-blue-600 transition-colors">
                          {relatedPost.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-slate-600 line-clamp-2 mb-4">{relatedPost.excerpt}</p>
                        <div className="flex items-center justify-between text-sm">
                          <span className="flex items-center gap-1 text-slate-600">
                            <User className="w-4 h-4" />
                            {relatedPost.author}
                          </span>
                          <span className="text-orange-600 font-semibold flex items-center gap-1">
                            Read More <ChevronRight className="w-4 h-4" />
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Newsletter */}
        <section className="py-16 px-4 bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Stay Updated on Safari News</h2>
            <p className="text-xl mb-8">
              Get migration reports, photography tips, and exclusive travel deals weekly
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-6 py-4 rounded-lg text-slate-900 placeholder-slate-500"
              />
              <button className="bg-amber-500 text-blue-900 px-8 py-4 rounded-lg font-bold hover:bg-amber-600 transition">
                Subscribe
              </button>
            </form>
            <p className="text-sm mt-4 opacity-90">
              12,000+ travelers trust our newsletter • Unsubscribe anytime
            </p>
          </div>
        </section>

        {/* EAT Time */}
        <div className="sr-only">
          Article published on {format(publishDate, "yyyy-MM-dd")} at {eatTime} EAT in Nairobi, Kenya.
          Current time: {eatTime} on {eatDate}.
        </div>
      </main>
    </>
  )
}