// components/tours-client.tsx
"use client"

import { useState, useMemo, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { TourCard } from "@/components/tour-card"
import { tours } from "@/lib/tours"

const TOURS_PER_PAGE = 12

const SearchIcon = () => <span>🔍</span>
const ChevronLeftIcon = () => <span>←</span>
const ChevronRightIcon = () => <span>→</span>

export function ToursClient() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [maxPrice, setMaxPrice] = useState(10000)
  const [sortBy, setSortBy] = useState("featured")
  const [currentPage, setCurrentPage] = useState(1)

  const countries = ["Kenya", "Tanzania", "Rwanda", "Uganda", "Multi-Country"]
  const categories = ["Safari", "Trekking", "Cultural", "Beach", "Adventure", "Luxury", "Budget", "Accessible"]

  const filteredTours = useMemo(() => {
    let result = tours.filter((tour) => {
      if (selectedCountry && tour.country !== selectedCountry) return false
      if (selectedCategory && tour.category !== selectedCategory) return false
      if (tour.price > maxPrice) return false
      return true
    })

    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      result = result.filter(
        (t) =>
          t.title.toLowerCase().includes(query) ||
          t.description.toLowerCase().includes(query) ||
          t.keywords.some((k) => k.toLowerCase().includes(query)),
      )
    }

    // Sort logic remains the same
    switch (sortBy) {
      case "price-low":
        result.sort((a, b) => a.price - b.price)
        break
      case "price-high":
        result.sort((a, b) => b.price - a.price)
        break
      case "rating":
        result.sort((a, b) => b.rating - a.rating)
        break
      case "featured":
      default:
        result.sort((a, b) => {
          if (a.country === "Kenya" && b.country !== "Kenya") return -1
          if (a.country !== "Kenya" && b.country === "Kenya") return 1
          return (b.isPopular ? 1 : -1) - (a.isPopular ? 1 : -1)
        })
    }

    return result
  }, [searchQuery, selectedCountry, selectedCategory, maxPrice, sortBy])

  // Reset to page 1 when filters change
  useEffect(() => {
    setCurrentPage(1)
  }, [searchQuery, selectedCountry, selectedCategory, maxPrice, sortBy])

  const totalPages = Math.ceil(filteredTours.length / TOURS_PER_PAGE)
  const startIndex = (currentPage - 1) * TOURS_PER_PAGE
  const endIndex = startIndex + TOURS_PER_PAGE
  const currentTours = filteredTours.slice(startIndex, endIndex)

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1)
  }

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1)
  }

  return (
    <>
      {/* Search and Filters */}
      <section className="bg-white py-8 px-4 border-b sticky top-16 z-10 shadow-sm">
        <div className="max-w-6xl mx-auto">
          {/* Search Bar */}
          <div className="mb-6 relative">
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-orange-400 text-xl">
              <SearchIcon />
            </div>
            <Input
              placeholder="Search tours by name, destination, or keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 py-6 text-lg border-orange-200 focus:border-orange-500 bg-orange-50"
            />
          </div>

          {/* Filter Controls */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {/* Country Filter */}
            <div>
              <label className="text-sm font-semibold block mb-2 text-orange-900">Country</label>
              <select
                value={selectedCountry || ""}
                onChange={(e) => setSelectedCountry(e.target.value || null)}
                className="w-full border border-orange-200 rounded-lg p-2 bg-orange-50 text-orange-900 focus:border-orange-500"
              >
                <option value="">All Countries</option>
                {countries.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </select>
            </div>

            {/* Category Filter */}
            <div>
              <label className="text-sm font-semibold block mb-2 text-orange-900">Category</label>
              <select
                value={selectedCategory || ""}
                onChange={(e) => setSelectedCategory(e.target.value || null)}
                className="w-full border border-orange-200 rounded-lg p-2 bg-orange-50 text-orange-900 focus:border-orange-500"
              >
                <option value="">All Categories</option>
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            {/* Price Filter */}
            <div>
              <label className="text-sm font-semibold block mb-2 text-orange-900">Max Price: ${maxPrice}</label>
              <input
                title="Max Price"
                type="range"
                min="0"
                max="10000"
                step="100"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number.parseInt(e.target.value))}
                className="w-full accent-orange-500"
              />
            </div>

            {/* Sort */}
            <div>
              <label className="text-sm font-semibold block mb-2 text-orange-900">Sort By</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full border border-orange-200 rounded-lg p-2 bg-orange-50 text-orange-900 focus:border-orange-500"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>

            {/* Clear Filters */}
            <div className="flex items-end">
              <Button
                onClick={() => {
                  setSearchQuery("")
                  setSelectedCountry(null)
                  setSelectedCategory(null)
                  setMaxPrice(10000)
                  setSortBy("featured")
                  setCurrentPage(1)
                }}
                className="w-full border-orange-200 text-orange-600 hover:bg-orange-50 border bg-white"
              >
                Clear All
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Tours Grid with Pagination */}
      <section className="py-12 px-4 bg-orange-50">
        <div className="max-w-6xl mx-auto">
          {currentTours.length > 0 ? (
            <>
              <div className="mb-6 flex justify-between items-center">
                <p className="text-slate-600">
                  Showing <strong className="text-orange-600">{startIndex + 1}-{Math.min(endIndex, filteredTours.length)}</strong> of{" "}
                  <strong className="text-orange-600">{filteredTours.length}</strong> tours
                </p>
                
                {/* Pagination Controls */}
                {totalPages > 1 && (
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={handlePrevPage}
                      disabled={currentPage === 1}
                      className="flex items-center gap-1 border-orange-200 text-orange-600 hover:bg-orange-50"
                    >
                      <ChevronLeftIcon />
                      Previous
                    </Button>
                    
                    <span className="text-sm text-slate-600 mx-2">
                      Page {currentPage} of {totalPages}
                    </span>
                    
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={handleNextPage}
                      disabled={currentPage === totalPages}
                      className="flex items-center gap-1 border-orange-200 text-orange-600 hover:bg-orange-50"
                    >
                      Next
                      <ChevronRightIcon />
                    </Button>
                  </div>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {currentTours.map((tour) => (
                  <TourCard key={tour.id} tour={tour} />
                ))}
              </div>

              {/* Bottom Pagination */}
              {totalPages > 1 && (
                <div className="mt-8 flex justify-center">
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={handlePrevPage}
                      disabled={currentPage === 1}
                      className="flex items-center gap-1 border-orange-200 text-orange-600 hover:bg-orange-50"
                    >
                      <ChevronLeftIcon />
                      Previous
                    </Button>
                    
                    <div className="flex items-center gap-1 mx-4">
                      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                        <Button
                          key={page}
                          variant={currentPage === page ? "default" : "outline"}
                          size="sm"
                          onClick={() => setCurrentPage(page)}
                          className={
                            currentPage === page
                              ? "bg-orange-500 text-white hover:bg-orange-600"
                              : "border-orange-200 text-orange-600 hover:bg-orange-50"
                          }
                        >
                          {page}
                        </Button>
                      ))}
                    </div>
                    
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={handleNextPage}
                      disabled={currentPage === totalPages}
                      className="flex items-center gap-1 border-orange-200 text-orange-600 hover:bg-orange-50"
                    >
                      Next
                      <ChevronRightIcon />
                    </Button>
                  </div>
                </div>
              )}
            </>
          ) : (
            <Card className="p-8 text-center border-orange-200 bg-white">
              <p className="text-xl text-slate-600">
                No tours found matching your criteria. Try adjusting your filters.
              </p>
            </Card>
          )}
        </div>
      </section>
    </>
  )
}