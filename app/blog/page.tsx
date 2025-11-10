// app/blog/page.tsx
import type { Metadata } from "next"
import { SchemaRenderer } from "@/components/schema-renderer"
import { generateBreadcrumbSchema } from "@/lib/seo-utils"
import { getAllBlogPosts } from "@/lib/blog-posts"
import BlogClient from "./blog-client"
import Image from "next/image"
import { Clock, TrendingUp, Star, ChevronRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Safari Blog | East Africa Travel Guides, Tips & Stories | Jae Travel",
  description:
    "Read expert safari guides, wildlife photography tips, packing lists, migration updates, and real traveler stories from Kenya, Tanzania, Rwanda, and Uganda. Updated weekly.",
  keywords:
    "safari blog, east africa travel blog, masai mara migration updates, gorilla trekking guide, kenya safari tips, tanzania travel advice, best time to visit serengeti, wildlife photography tips, safari packing list, jae travel blog",
  openGraph: {
    title: "Jae Travel Blog | Expert Safari & Travel Guides",
    description: "Your ultimate resource for planning the perfect East African safari. Real stories, expert tips, and up-to-date wildlife news.",
    url: "https://jaetravel.com/blog",
    type: "website",
    images: [
      {
        url: "/og-blog.jpg",
        width: 1200,
        height: 630,
        alt: "Jae Travel Safari Blog - Expert Guides & Stories",
      },
    ],
  },
  alternates: {
    canonical: "/blog",
  },
}

export default function BlogPage() {
  const posts = getAllBlogPosts()
  const featuredPosts = posts
    .filter((p) => p.featured)
    .sort((a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime())
    .slice(0, 3)

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Blog", url: "/blog" },
  ]

  // Server-side EAT time
  const now = new Date()
  const eatTime = now.toLocaleTimeString("en-KE", {
    timeZone: "Africa/Nairobi",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  })

  return (
    <>
      <SchemaRenderer schema={generateBreadcrumbSchema(breadcrumbs)} />

      <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        {/* Hero */}
        <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white py-20 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20" />
          <div className="max-w-7xl mx-auto relative z-10 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Jae Travel Safari Blog</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto mb-8">
              Expert guides, wildlife updates, photography tips, and real traveler stories from the heart of East Africa
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <div className="bg-amber-500 text-white text-lg px-6 py-2 rounded-full flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                {posts.length} Articles
              </div>
              <div className="bg-white text-blue-900 text-lg px-6 py-2 rounded-full flex items-center gap-2">
                <Clock className="w-5 h-5" />
                Updated {eatTime} EAT
              </div>
              <div className="bg-green-600 text-white text-lg px-6 py-2 rounded-full flex items-center gap-2">
                <Star className="w-5 h-5" />
                4.9/5 Reader Rating
              </div>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto text-lg leading-relaxed space-y-6 text-slate-700">
            <p>
              <strong>Jae Travel Safari Blog</strong> is your go-to resource for planning the ultimate East African adventure. Whether you&apos;re tracking the <strong>Great Wildebeest Migration</strong> in the <strong>Masai Mara</strong> or <strong>Serengeti</strong>, preparing for <strong>gorilla trekking in Rwanda</strong>, or capturing the perfect wildlife shot in <strong>Amboseli</strong>, our expert guides deliver real, actionable advice.
            </p>
            <p>
              Written by professional safari guides, wildlife photographers, and local experts with decades of experience, every article is packed with insider tips, seasonal updates, and conservation insights. From <strong>budget packing lists</strong> to <strong>luxury lodge reviews</strong>, <strong>Swahili phrases</strong> to <strong>anti-poaching initiatives</strong>, we cover it all.
            </p>
            <p>
              Updated weekly with migration reports, baby animal sightings, and exclusive behind-the-scenes stories from our guides in the field. Join over <strong>12,000 travelers</strong> who rely on our blog for authentic, up-to-date safari intelligence.
            </p>
          </div>
        </section>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <section className="py-16 px-4 bg-gradient-to-r from-amber-50 to-orange-50">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-12 text-orange-900">Featured Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {featuredPosts.map((post) => (
                  <a key={post.id} href={`/blog/${post.slug}`} className="block group">
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 border-amber-200">
                      <div className="aspect-video bg-slate-200 relative overflow-hidden">
                        <Image
                          src={post.image || "/placeholder.svg?height=400&width=600"}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          loading="lazy"
                          width={600}
                          height={400}
                        />
                        <div className="absolute top-4 left-4">
                          <span className="bg-amber-600 text-white text-xs font-bold px-3 py-1 rounded-full animate-pulse">
                            Featured
                          </span>
                        </div>
                      </div>
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-3">
                          <span className="bg-blue-600 text-white text-xs px-3 py-1 rounded-full">
                            {post.category}
                          </span>
                          <span className="text-sm text-slate-500 flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {post.readTime} min
                          </span>
                        </div>
                        <h3 className="text-xl font-bold line-clamp-2 group-hover:text-orange-600 transition-colors mb-2">
                          {post.title}
                        </h3>
                        <p className="text-slate-600 line-clamp-2 text-sm mb-3">{post.excerpt}</p>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-slate-600">{post.author}</span>
                          <span className="text-orange-600 font-semibold flex items-center gap-1">
                            Read More <ChevronRight className="w-4 h-4" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Client-Side Interactive Blog */}
        <BlogClient initialPosts={posts} />
      </main>
    </>
  )
}