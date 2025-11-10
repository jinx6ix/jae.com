// app/disabilities-accessible-tours/[slug]/page.tsx
import { getAccessibleTourBySlug, getAllAccessibleTours } from "@/lib/disability-tours"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { SchemaRenderer } from "@/components/schema-renderer"
import { generateBreadcrumbSchema, generateTourSchema } from "@/lib/seo-utils"
import { Accessibility, CheckCircle, Users, MapPin, Calendar, DollarSign } from "lucide-react"
import BookingForm from "@/components/booking-form"
import Image from "next/image"

export async function generateStaticParams() {
  const tours = getAllAccessibleTours()
  return tours.map((tour) => ({
    slug: tour.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const tour = getAccessibleTourBySlug(slug)
  if (!tour) return {}

  return {
    title: tour.metaTitle,
    description: tour.metaDescription,
    keywords: Array.isArray(tour.keywords) ? tour.keywords.join(", ") : tour.keywords || "",
    openGraph: {
      title: tour.title,
      description: tour.description,
      url: `https://jaetravel.com/disabilities-accessible-tours/${tour.slug}`,
      images: [
        {
          url: tour.image || "/placeholder.svg",
          width: 1200,
          height: 630,
        },
      ],
    },
  }
}

export default async function AccessibleTourPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const tour = getAccessibleTourBySlug(slug)
  if (!tour) notFound()

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Accessible Tours", url: "/disabilities-accessible-tours" },
    { name: tour.title, url: `/disabilities-accessible-tours/${tour.slug}` },
  ]

  const tourSchema = generateTourSchema({
    name: tour.title,
    description: tour.description,
    url: `https://jaetravel.com/disabilities-accessible-tours/${tour.slug}`,
    image: tour.image || "/placeholder.svg",
    price: tour.price,
    priceCurrency: tour.currency,
    duration: tour.duration,
    destination: tour.country,
    rating: tour.rating,
    reviewCount: tour.reviewCount,
  })

  // Check if image exists, fallback to placeholder
  const imageSrc = tour.image || "/placeholder.svg"

  return (
    <main>
      <SchemaRenderer schema={generateBreadcrumbSchema(breadcrumbs)} />
      <SchemaRenderer schema={tourSchema} />

      {/* Hero Section */}
      <section className="relative h-96 bg-slate-200 overflow-hidden">
        <Image
          src={imageSrc}
          alt={tour.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex items-end">
          <div className="p-8 text-white">
            <div className="flex items-center gap-2 mb-2">
              <Accessibility size={28} />
              <Badge className="bg-white text-blue-600">Fully Accessible</Badge>
            </div>
            <h1 className="text-4xl font-bold">{tour.title}</h1>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {/* Description */}
            <div className="mb-8">
              <p className="text-lg text-slate-700 leading-relaxed mb-6">{tour.description}</p>
            </div>

            {/* Quick Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
              <Card>
                <CardContent className="pt-6">
                  <Calendar size={28} className="text-blue-600 mb-2" />
                  <div className="text-sm text-slate-600">Duration</div>
                  <div className="font-bold">{tour.duration}</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <Users size={28} className="text-green-600 mb-2" />
                  <div className="text-sm text-slate-600">Group Size</div>
                  <div className="font-bold">{tour.groupSize}</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <MapPin size={28} className="text-red-600 mb-2" />
                  <div className="text-sm text-slate-600">Country</div>
                  <div className="font-bold">{tour.country}</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <DollarSign size={28} className="text-amber-600 mb-2" />
                  <div className="text-sm text-slate-600">Price</div>
                  <div className="font-bold">${tour.price}</div>
                </CardContent>
              </Card>
            </div>

            {/* Accessibility Features */}
            {tour.accessibilityFeatures && tour.accessibilityFeatures.length > 0 && (
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Accessibility Features</h2>
                <ul className="space-y-2">
                  {tour.accessibilityFeatures.map((feature, idx) => (
                    <li key={idx} className="flex gap-3 text-slate-700">
                      <CheckCircle className="text-green-600 flex-shrink-0" size={20} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Adapted Vehicle */}
            {tour.adaptedVehicle && (
              <div className="mb-8 bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2">Adapted Vehicle</h3>
                <p className="text-slate-700">{tour.adaptedVehicle}</p>
              </div>
            )}

            {/* Itinerary */}
            {tour.itinerary && tour.itinerary.length > 0 && (
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-6">Itinerary</h2>
                <div className="space-y-4">
                  {tour.itinerary.map((day) => (
                    <Card key={day.day}>
                      <CardHeader>
                        <CardTitle className="text-lg">
                          Day {day.day}: {day.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-slate-700">{day.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {/* Included/Excluded */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {tour.included && tour.included.length > 0 && (
                <div>
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <CheckCircle className="text-green-600" /> Included
                  </h3>
                  <ul className="space-y-2">
                    {tour.included.map((item, idx) => (
                      <li key={idx} className="flex gap-2 text-slate-700">
                        <CheckCircle size={20} className="text-green-600 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              {tour.excluded && tour.excluded.length > 0 && (
                <div>
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <span className="text-red-600">✗</span> Excluded
                  </h3>
                  <ul className="space-y-2">
                    {tour.excluded.map((item, idx) => (
                      <li key={idx} className="flex gap-2 text-slate-700">
                        <span className="text-red-600 flex-shrink-0">✗</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Booking Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <BookingForm tour={tour as any} />

              <Card className="mt-6 border-blue-200 bg-blue-50">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Accessibility className="text-blue-600" />
                    Accessibility Support
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-slate-700">
                  {tour.mobilityRequirements && (
                    <p>
                      <strong>Mobility Requirements:</strong> {tour.mobilityRequirements}
                    </p>
                  )}
                  <p>
                    <strong>Wheelchair Accessible:</strong> {tour.wheelchairAccessible ? "Yes" : "No"}
                  </p>
                  <p className="text-xs text-slate-600 mt-4">
                    Need custom accommodations? Contact our accessibility team to discuss your specific needs.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}