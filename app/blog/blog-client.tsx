"use client"

import { useState, useMemo } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Search, Tag, BookOpen, Calendar, Clock, User, } from "lucide-react"
import type { BlogPost } from "@/lib/blog-posts"
import Image from "next/image"

interface BlogClientProps {
  initialPosts: BlogPost[]
}

export default function BlogClient({ initialPosts }: BlogClientProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const categories = [...new Set(initialPosts.map((p) => p.category))]
  const allTags = [...new Set(initialPosts.flatMap((p) => p.tags))].slice(0, 15)

  const filteredPosts = useMemo(() => {
    let result = initialPosts

    if (selectedCategory) {
      result = result.filter((p) => p.category === selectedCategory)
    }

    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(query) ||
          p.excerpt.toLowerCase().includes(query) ||
          p.content.toLowerCase().includes(query) ||
          p.tags.some((t) => t.toLowerCase().includes(query)) ||
          p.author.toLowerCase().includes(query)
      )
    }

    return result
      .sort((a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime())
      .slice(0, 12)
  }, [searchQuery, selectedCategory, initialPosts])

  return (
    <>
      {/* Search & Filters */}
      <section className="py-12 px-4 bg-slate-100 border-y">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                <Search className="w-5 h-5" />
                Search Articles
              </h3>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                <Input
                  placeholder="Search titles, content, tags..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-6 text-lg"
                />
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                <Tag className="w-5 h-5" />
                Filter by Category
              </h3>
              <div className="flex flex-wrap gap-2">
                <Button
                  variant={selectedCategory === null ? "default" : "outline"}
                  onClick={() => setSelectedCategory(null)}
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  All ({initialPosts.length})
                </Button>
                {categories.map((cat) => {
                  const count = initialPosts.filter((p) => p.category === cat).length
                  return (
                    <Button
                      key={cat}
                      variant={selectedCategory === cat ? "default" : "outline"}
                      onClick={() => setSelectedCategory(cat)}
                      className={selectedCategory === cat ? "bg-blue-600 hover:bg-blue-700" : ""}
                    >
                      {cat} ({count})
                    </Button>
                  )
                })}
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5" />
                Popular Tags
              </h3>
              <div className="flex flex-wrap gap-2">
                {allTags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    className="cursor-pointer hover:bg-blue-100 transition-colors"
                    onClick={() => setSearchQuery(tag)}
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900">
              {selectedCategory ? `${selectedCategory} Articles` : "Latest Posts"}
            </h2>
            <p className="text-lg text-slate-600">
              {filteredPosts.length} {filteredPosts.length === 1 ? "article" : "articles"} found
            </p>
          </div>

          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <Link key={post.id} href={`/blog/${post.slug}`}>
                  <Card className="h-full hover:shadow-xl transition-all duration-300 cursor-pointer border-slate-200 group">
                    <div className="aspect-video bg-slate-200 relative overflow-hidden">
                      <Image
                        src={post.image || "/placeholder.svg?height=300&width=500"}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        width={500}
                        height={300}
                      />
                    </div>
                    <CardHeader>
                      <div className="flex items-center justify-between mb-3">
                        <Badge className="bg-blue-600 text-white">{post.category}</Badge>
                        <span className="text-sm text-slate-500 flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {post.readTime} min
                        </span>
                      </div>
                      <CardTitle className="text-xl line-clamp-2 group-hover:text-blue-600 transition-colors">
                        {post.title}
                      </CardTitle>
                      <CardDescription className="line-clamp-3">
                        {post.excerpt}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between text-sm text-slate-600 mb-3">
                        <span className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          {post.author}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {new Date(post.publishedDate).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {post.tags.slice(0, 3).map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                        {post.tags.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{post.tags.length - 3}
                          </Badge>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          ) : (
            <Card className="border-dashed">
              <CardContent className="pt-16 text-center">
                <h3 className="text-2xl font-bold mb-2">No articles found</h3>
                <p className="text-slate-600 mb-6">
                  Try adjusting your search or filter.
                </p>
                <Button
                  onClick={() => {
                    setSearchQuery("")
                    setSelectedCategory(null)
                  }}
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  Clear Filters
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Never Miss a Safari Update</h2>
          <p className="text-xl mb-8">
            Get migration reports, photography tips, and exclusive travel deals delivered weekly.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex-grow bg-white/20 border-white/30 placeholder-white/70 text-white"
            />
            <Button className="bg-amber-500 hover:bg-amber-600 text-blue-900 font-bold">
              Subscribe
            </Button>
          </form>
          <p className="text-sm mt-4 opacity-90">
            12,000+ travelers trust our weekly newsletter
          </p>
        </div>
      </section>
    </>
  )
}