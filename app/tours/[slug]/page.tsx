// app/tours/[slug]/page.tsx
import { tours } from "@/lib/tours"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { SchemaRenderer } from "@/components/schema-renderer"
import { generateTourSchema, generateBreadcrumbSchema } from "@/lib/seo-utils"
import Link from "next/link"
import BookingForm from "@/components/booking-form"
import { Calendar, Clock, Users, MapPin, Star, Shield, ChevronRight, Camera, Tent } from "lucide-react"
import { Button } from "@/components/ui/button"

// Force dynamic to prevent static generation issues
export const dynamic = 'force-dynamic'

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const tour = tours.find((t) => t.slug === slug)

  if (!tour) {
    return {
      title: 'Tour Not Found | Jae Travel',
      description: 'The requested safari tour could not be found.',
    }
  }

  return {
    title: tour.metaTitle || `${tour.title} | Jae Travel Safari Tours`,
    description: tour.metaDescription || tour.description,
    keywords: Array.isArray(tour.keywords) ? tour.keywords.join(", ") : tour.keywords || "",
    openGraph: {
      title: tour.title,
      description: tour.description,
      url: `https://jaetravel.com/tours/${tour.slug}`,
      type: "website",
      images: [
        {
          url: tour.image || "/og-default.jpg",
          width: 1200,
          height: 630,
          alt: `${tour.title} - Safari Tour in ${tour.country}`,
        },
      ],
    },
    alternates: {
      canonical: `/tours/${tour.slug}`,
    },
  }
}

export default async function TourPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const tour = tours.find((t) => t.slug === slug)

  if (!tour) {
    console.error(`Tour not found for slug: ${slug}`)
    notFound()
  }

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Tours", url: "/tours" },
    { name: tour.title, url: `/tours/${tour.slug}` },
  ]

  const tourSchema = generateTourSchema({
    name: tour.title,
    description: tour.description,
    url: `https://jaetravel.com/tours/${tour.slug}`,
    image: tour.image,
    price: tour.price,
    priceCurrency: tour.currency || "USD",
    duration: tour.duration || '',
    destination: tour.country,
    rating: tour.rating,
    reviewCount: tour.reviewCount,
  })

  const StarIcon = ({ filled }: { filled: boolean }) => (
    <span className={`text-lg ${filled ? "text-amber-500" : "text-slate-300"}`}>★</span>
  )

  return (
    <main>
      <SchemaRenderer schema={generateBreadcrumbSchema(breadcrumbs)} />
      <SchemaRenderer schema={tourSchema} />

      {/* Hero Section */}
      <section className="relative h-96 md:h-screen max-h-96 md:max-h-screen overflow-hidden">
        <img
          src={tour.image || "/placeholder.svg?height=800&width=1600"}
          alt={`${tour.title} - Safari in ${tour.country} | Jae Travel`}
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        <div className="absolute bottom-8 left-8 text-white max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-3">{tour.title}</h1>
          <div className="flex gap-3 flex-wrap">
            <Badge className="bg-orange-600 text-white text-lg px-4 py-1">{tour.country}</Badge>
            {tour.duration && <Badge className="bg-white/90 text-orange-900 text-lg px-4 py-1">{tour.duration}</Badge>}
            {tour.difficulty && <Badge className="bg-white/90 text-orange-900 text-lg px-4 py-1">{tour.difficulty}</Badge>}
          </div>
        </div>
        {tour.isOnOffer && tour.originalPrice && (
          <div className="absolute top-6 right-6 bg-red-600 text-white px-6 py-3 rounded-full font-bold text-lg shadow-lg animate-pulse">
            OFFER: ${tour.originalPrice} → ${tour.price}
          </div>
        )}
      </section>

      {/* Main Content */}
      <section className="py-12 px-4 bg-orange-50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Content */}
          <div className="lg:col-span-2 space-y-8">

            {/* Quick Info Card */}
            <Card className="border-orange-200 shadow-lg">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <div className="flex gap-2 mb-3">
                      {tour.category === "Safari" && <Camera className="w-6 h-6 text-green-600" />}
                      {tour.category === "Adventure" && <Users className="w-6 h-6 text-amber-600" />}
                      {tour.category === "Cultural" && <MapPin className="w-6 h-6 text-blue-600" />}
                      {tour.category === "Luxury" && <Star className="w-6 h-6 text-purple-600" />}
                      <span className="capitalize font-semibold text-orange-900">{tour.category} Safari</span>
                    </div>
                    <p className="text-lg text-slate-700 leading-relaxed">{tour.description}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon key={i} filled={i < Math.floor(tour.rating)} />
                    ))}
                  </div>
                  <span className="font-semibold text-slate-700">
                    {tour.rating} ({tour.reviewCount} reviews)
                  </span>
                </div>
                <div className="text-3xl font-bold text-orange-600">
                  From ${tour.price} <span className="text-sm font-normal text-slate-600">/ person</span>
                </div>
              </CardContent>
            </Card>

            {/* Itinerary - FIXED: No more object rendering error */}
            <Card className="border-orange-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-orange-900 flex items-center gap-2">
                  <Calendar className="w-6 h-6" />
                  Detailed Itinerary
                </CardTitle>
              </CardHeader>
              <CardContent>
                {tour.itinerary && Array.isArray(tour.itinerary) && tour.itinerary.length > 0 ? (
                  <div className="space-y-6">
                    {tour.itinerary.map((day, index) => (
                      <div
                        key={index}
                        className="flex gap-4 border-b border-orange-100 pb-5 last:border-0 last:pb-0"
                      >
                        <div className="flex-shrink-0 w-12 h-12 bg-orange-100 text-orange-700 rounded-full flex items-center justify-center font-bold text-lg">
                          {day.day || index + 1}
                        </div>
                        <div className="flex-grow">
                          <h3 className="font-bold text-lg text-slate-800 mb-1">
                            {day.title || `Day ${index + 1}`}
                          </h3>
                          <p className="text-slate-600 leading-relaxed">{day.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-slate-500 italic">Detailed itinerary coming soon.</p>
                )}
              </CardContent>
            </Card>

            {/* Tour Highlights */}
            {tour.highlights && tour.highlights.length > 0 && (
              <Card className="border-orange-200">
                <CardHeader>
                  <CardTitle className="text-xl text-orange-900">Tour Highlights</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {tour.highlights.map((hl, i) => (
                      <li key={i} className="flex items-start gap-2 text-slate-700">
                        <span className="text-orange-600 mt-1">•</span>
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {tour.duration && (
                <Card className="border-orange-200">
                  <CardContent className="pt-6 text-center">
                    <Clock className="w-8 h-8 mx-auto mb-2 text-orange-600" />
                    <div className="text-sm text-slate-600">Duration</div>
                    <div className="font-bold text-orange-900">{tour.duration}</div>
                  </CardContent>
                </Card>
              )}
              {tour.groupSize && (
                <Card className="border-orange-200">
                  <CardContent className="pt-6 text-center">
                    <Users className="w-8 h-8 mx-auto mb-2 text-orange-600" />
                    <div className="text-sm text-slate-600">Group</div>
                    <div className="font-bold text-orange-900">{tour.groupSize}</div>
                  </CardContent>
                </Card>
              )}
              {tour.difficulty && (
                <Card className="border-orange-200">
                  <CardContent className="pt-6 text-center">
                    <Tent className="w-8 h-8 mx-auto mb-2 text-orange-600" />
                    <div className="text-sm text-slate-600">Difficulty</div>
                    <div className="font-bold text-orange-900">{tour.difficulty}</div>
                  </CardContent>
                </Card>
              )}
              <Card className="border-orange-200">
                <CardContent className="pt-6 text-center">
                  <MapPin className="w-8 h-8 mx-auto mb-2 text-orange-600" />
                  <div className="text-sm text-slate-600">Region</div>
                  <div className="font-bold text-orange-900">{tour.country}</div>
                </CardContent>
              </Card>
            </div>

            {/* Included / Excluded */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-green-700 flex items-center gap-2">
                    <Shield className="w-5 h-5" />
                    Included
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-1 text-sm text-slate-600">
                    {tour.included?.map((item, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="text-green-600">Check</span> {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-red-700 flex items-center gap-2">
                    <span className="text-lg">Cross</span>
                    Not Included
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-1 text-sm text-slate-600">
                    {tour.excluded?.map((item, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="text-red-600">Cross</span> {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Right Column - Booking */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-white rounded-xl shadow-xl p-6 border border-orange-200">
              <div className="text-center mb-6">
                <p className="text-sm text-slate-600">Starting Price</p>
                <p className="text-4xl font-bold text-orange-600">${tour.price}</p>
                <p className="text-sm text-slate-500">per person</p>
              </div>
              <BookingForm tour={tour} />
            </div>
          </div>
        </div>
      </section>

      {/* Similar Tours */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-orange-900 text-center">
            More {tour.country} Safari Tours
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tours
              .filter((t) => t.country === tour.country && t.id !== tour.id)
              .slice(0, 3)
              .map((similarTour) => (
                <Link key={similarTour.id} href={`/tours/${similarTour.slug}`}>
                  <Card className="h-full hover:shadow-xl transition-all duration-300 cursor-pointer border-orange-100 group">
                    <div className="aspect-video bg-slate-200 overflow-hidden">
                      <img
                        src={similarTour.image || "/placeholder.svg?height=300&width=600"}
                        alt={`${similarTour.title} - ${similarTour.country} Safari`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-lg line-clamp-2 group-hover:text-orange-600 transition-colors">
                        {similarTour.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-between items-center">
                        <div className="text-2xl font-bold text-orange-600">${similarTour.price}</div>
                        <ChevronRight className="w-5 h-5 text-orange-600 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-orange-600 to-amber-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Book Your Safari?</h2>
          <p className="text-xl mb-8">
            Secure your spot today. Limited availability during peak migration season.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button asChild size="lg" className="bg-white text-orange-600 hover:bg-orange-50 font-bold">
              <Link href="#booking">Book Now</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-orange-700">
              <Link href="/contact">Get Custom Quote</Link>
            </Button>
          </div>
          <p className="mt-8 text-lg">
            Call/WhatsApp: <a href="tel:+254700123456" className="underline font-bold">+254 700 123 456</a> | 
            Email: <a href="mailto:tours@jaetravel.com" className="underline font-bold">tours@jaetravel.com</a>
          </p>
        </div>
      </section>
    </main>
  )
}