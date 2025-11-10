// app/disabilities-accessible-tours/[slug]/page.tsx
import { getAccessibleTourBySlug, getAllAccessibleTours } from "@/lib/disability-tours"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { SchemaRenderer } from "@/components/schema-renderer"
import { generateBreadcrumbSchema, generateTourSchema } from "@/lib/seo-utils"
import {
  Accessibility,
  CheckCircle,
  Users,
  MapPin,
  Calendar,
  DollarSign,
  Shield,
  HeartHandshake,
  Globe,
  Award,
  Clock,
  Star,
  Info,
  AlertCircle,
} from "lucide-react"
import BookingForm from "@/components/booking-form"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import type { Tour } from "@/lib/all-tours"
import { AccessibleCountry } from "@/lib/types"

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
    title: `${tour.metaTitle} | #1 Wheelchair Accessible Tour in ${tour.country}`,
    description: tour.metaDescription,
    keywords: Array.isArray(tour.keywords)
      ? tour.keywords.join(", ")
      : tour.keywords || "",
    openGraph: {
      title: tour.title,
      description: tour.description,
      url: `https://jaetravel.com/disabilities-accessible-tours/${tour.slug}`,
      images: [
        {
          url: tour.image || "/placeholder.svg",
          width: 1200,
          height: 630,
          alt: `${tour.title} - Fully Accessible Experience`,
        },
      ],
      siteName: "JAE Travel",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: tour.title,
      description: tour.description,
      images: [tour.image || "/placeholder.svg"],
    },
    robots: "index, follow",
    alternates: {
      canonical: `https://jaetravel.com/disabilities-accessible-tours/${tour.slug}`,
    },
  }
}

export default async function AccessibleTourPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const tour = getAccessibleTourBySlug(slug)
  if (!tour) notFound()

  const validCountries: AccessibleCountry[] = [
    "Kenya",
    "Tanzania",
    "Rwanda",
    "Uganda",
    "Multi-Country",
  ]

  const safeCountry: AccessibleCountry = validCountries.includes(tour.country as AccessibleCountry)
    ? tour.country
    : "Kenya"

  const bookingTour: Tour = {
    ...tour,
    country: safeCountry,
    excluded: tour.excluded || [], // ← Fix: boolean → string[]
    difficulty: "Easy",
    url: `https://jaetravel.com/disabilities-accessible-tours/${tour.slug}`,
    region: safeCountry,
    category: "Accessible",
    bookingUrl: `https://jaetravel.com/book?tour=${tour.id}`,
  }

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
    offers: {
      "@type": "Offer",
      price: tour.price,
      priceCurrency: tour.currency,
      availability: "https://schema.org/InStock",
      url: `https://jaetravel.com/disabilities-accessible-tours/${tour.slug}`,
    },
  })

  const imageSrc = tour.image || "/placeholder.svg"

  return (
    <main className="min-h-screen bg-linear-to-b from-slate-50 to-white">
      <SchemaRenderer schema={generateBreadcrumbSchema(breadcrumbs)} />
      <SchemaRenderer schema={tourSchema} />

      {/* Hero Section */}
      <section className="relative h-96 md:h-[500px] bg-linear-to-b from-black/60 to-black/30 overflow-hidden">
        <Image
          src={imageSrc}
          alt={`${tour.title} - Fully wheelchair accessible tour in ${tour.country}`}
          fill
          className="object-cover brightness-75"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 text-white">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <Badge className="bg-emerald-600 text-white px-4 py-1 text-sm">
                <Accessibility className="w-4 h-4 mr-1" />
                100% Accessible
              </Badge>
              <Badge variant="secondary" className="bg-white/20 backdrop-blur text-white">
                <Award className="w-4 h-4 mr-1" />
                #1 Rated in {tour.country}
              </Badge>
              {tour.popular && (
                <Badge className="bg-amber-500 text-white">
                  <Star className="w-4 h-4 mr-1" />
                  Most Popular
                </Badge>
              )}
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-3 leading-tight">
              {tour.title}
            </h1>
            <p className="text-lg md:text-xl text-slate-100 max-w-4xl">
              {tour.shortDescription}
            </p>
            <div className="flex flex-wrap gap-4 mt-6">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-emerald-400" />
                <span className="font-medium">{tour.country}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-emerald-400" />
                <span className="font-medium">{tour.duration}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-emerald-400" />
                <span className="font-medium">Max {tour.groupSize} guests</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-12">
            {/* Trust Badges */}
            <div className="flex flex-wrap gap-6 justify-center md:justify-start">
              <div className="flex items-center gap-2 text-slate-600">
                <Shield className="w-5 h-5 text-emerald-600" />
                <span className="text-sm font-medium">Certified Accessible</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600">
                <HeartHandshake className="w-5 h-5 text-blue-600" />
                <span className="text-sm font-medium">Inclusive Excellence</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600">
                <Globe className="w-5 h-5 text-purple-600" />
                <span className="text-sm font-medium">Global Standards</span>
              </div>
            </div>

            <Separator />

            {/* Detailed Description */}
            <article className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold mb-6">Experience True Accessibility</h2>
              <p className="text-lg text-slate-700 leading-relaxed">
                {tour.description}
              </p>
              <p className="text-slate-600 mt-4">
                Designed from the ground up with accessibility in mind, this tour eliminates barriers and maximizes inclusion. 
                Every step—from boarding our adapted vehicles to exploring historic sites—has been tested and approved by 
                accessibility experts and real travelers with mobility challenges.
              </p>
            </article>

            {/* Quick Info Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Card className="border-emerald-100 bg-emerald-50">
                <CardContent className="pt-6 text-center">
                  <Calendar className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
                  <div className="text-sm text-slate-600">Duration</div>
                  <div className="font-bold text-lg">{tour.duration}</div>
                </CardContent>
              </Card>
              <Card className="border-blue-100 bg-blue-50">
                <CardContent className="pt-6 text-center">
                  <Users className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-sm text-slate-600">Group Size</div>
                  <div className="font-bold text-lg">{tour.groupSize}</div>
                </CardContent>
              </Card>
              <Card className="border-purple-100 bg-purple-50">
                <CardContent className="pt-6 text-center">
                  <MapPin className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                  <div className="text-sm text-slate-600">Destination</div>
                  <div className="font-bold text-lg">{tour.country}</div>
                </CardContent>
              </Card>
              <Card className="border-amber-100 bg-amber-50">
                <CardContent className="pt-6 text-center">
                  <DollarSign className="w-8 h-8 text-amber-600 mx-auto mb-2" />
                  <div className="text-sm text-slate-600">Starting at</div>
                  <div className="font-bold text-lg">${tour.price}</div>
                </CardContent>
              </Card>
            </div>

            {/* Accessibility Features */}
            {Array.isArray(tour.accessibilityFeatures) && tour.accessibilityFeatures.length > 0 && (
              <div>
                <h2 className="text-3xl font-bold mb-6">Accessibility Features</h2>
                <Alert className="mb-6 border-emerald-200 bg-emerald-50">
                  <Info className="h-5 w-5 text-emerald-700" />
                  <AlertTitle>Guaranteed Accessibility</AlertTitle>
                  <AlertDescription>
                    All features listed below are verified on-site and maintained to international accessibility standards.
                  </AlertDescription>
                </Alert>
                <div className="grid md:grid-cols-2 gap-4">
                  {tour.accessibilityFeatures.map((feature: string, idx: number) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-4 bg-white border border-slate-200 rounded-lg shadow-sm"
                    >
                      <CheckCircle className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="text-slate-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Adapted Vehicle */}
            {tour.adaptedVehicle && (
              <Card className="border-blue-200 bg-linear-to-r from-blue-50 to-cyan-50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <Accessibility className="w-7 h-7 text-blue-600" />
                    Adapted Vehicle Information
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 leading-relaxed">{tour.adaptedVehicle}</p>
                  <div className="mt-6 p-4 bg-white rounded-lg border">
                    <h4 className="font-semibold mb-2">Vehicle Specifications:</h4>
                    <ul className="space-y-1 text-sm text-slate-600">
                      <li>Hydraulic lift with 800kg capacity</li>
                      <li>Wide entry (90cm+) with low-angle ramp</li>
                      <li>Secure wheelchair tie-downs (4-point system)</li>
                      <li>Adjustable seating for companions</li>
                      <li>Climate control with individual zones</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Detailed Itinerary */}
            {Array.isArray(tour.itinerary) && tour.itinerary.length > 0 && (
              <div>
                <h2 className="text-3xl font-bold mb-6">Day-by-Day Itinerary</h2>
                <div className="space-y-6">
                  {tour.itinerary.map((day, index) => (
                    <Card key={day.day} className="overflow-hidden">
                      <CardHeader className="bg-linear-to-r from-slate-50 to-slate-100">
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-xl flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold">
                              {day.day}
                            </div>
                            {day.title}
                          </CardTitle>
                          {index === 0 && (
                            <Badge className="bg-emerald-600">Departure Day</Badge>
                          )}
                          {index === tour.itinerary.length - 1 && (
                            <Badge variant="secondary">Return Day</Badge>
                          )}
                        </div>
                      </CardHeader>
                      <CardContent className="pt-4">
                        <p className="text-slate-700 leading-relaxed">{day.description}</p>
                        <div className="mt-4 flex flex-wrap gap-2">
                          <Badge variant="outline" className="text-xs">
                            <Clock className="w-3 h-3 mr-1" />
                            Full Day
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            <Accessibility className="w-3 h-3 mr-1" />
                            Fully Accessible
                          </Badge>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {/* Included / Excluded */}
            <div className="grid md:grid-cols-2 gap-8">
              {Array.isArray(tour.included) && tour.included.length > 0 && (
                <Card className="border-emerald-200 bg-emerald-50">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-emerald-700">
                      <CheckCircle className="w-6 h-6" />
                      What&apos;s Included
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {tour.included.map((item: string, idx: number) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                          <span className="text-slate-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )}

              {Array.isArray(tour.excluded) && tour.excluded.length > 0 && (
                <Card className="border-red-200 bg-red-50">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-red-700">
                      <AlertCircle className="w-6 h-6" />
                      What&apos;s Not Included
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {tour.excluded.map((item: string, idx: number) => (
                        <li key={idx} className="flex items-start gap-3">
                          <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                          <span className="text-slate-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Best For Section */}
            {tour.bestFor && tour.bestFor.length > 0 && (
              <Card className="bg-linear-to-r from-purple-50 to-pink-50 border-purple-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Star className="w-6 h-6 text-purple-600" />
                    Perfect For
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-3">
                    {tour.bestFor.map((group, idx) => (
                      <Badge key={idx} variant="secondary" className="text-sm py-1 px-3">
                        {group}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* FAQ Preview */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Common Questions</h2>
              <div className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Do I need to bring my own wheelchair?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600">
                      No. We provide complimentary, high-quality manual and powered wheelchairs upon request. 
                      You&apos;re welcome to bring your own for familiarity.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Can companions join without mobility needs?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600">
                      Absolutely. All our tours welcome mixed-ability groups. Companions receive the same premium experience.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Booking Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <Card className="border-2 border-emerald-200 shadow-xl">
                <CardHeader className="bg-emerald-600 text-white">
                  <CardTitle className="text-xl">Book Now</CardTitle>
                  <p className="text-emerald-50">Starting at <span className="text-3xl font-bold">${tour.price}</span></p>
                </CardHeader>
                <CardContent className="pt-6">
                  <BookingForm tour={bookingTour} />
                </CardContent>
              </Card>

              <Card className="border-blue-200 bg-blue-50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Shield className="w-6 h-6 text-blue-600" />
                    Accessibility Guarantee
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-sm">
                  <div>
                    <strong className="text-slate-800">Mobility Level:</strong>{" "}
                    {tour.mobilityRequirements || "All levels supported"}
                  </div>
                  <div>
                    <strong className="text-slate-800">Wheelchair Access:</strong>{" "}
                    <span className="text-emerald-600 font-bold">
                      {tour.wheelchairAccessible ? "Full Access" : "Partial"}
                    </span>
                  </div>
                  <Separator />
                  <Alert className="border-amber-200 bg-amber-50">
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription className="text-xs">
                      Need special accommodations? Call our accessibility team at{" "}
                      <a href="tel:+254700000000" className="underline font-medium">
                        +254 700 000 000
                      </a>
                    </AlertDescription>
                  </Alert>
                  <Button variant="outline" className="w-full" asChild>
                    <a href="/accessibility-policy">View Full Policy</a>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Award className="w-5 h-5 text-amber-600" />
                    Traveler Ratings
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-5 h-5 ${
                            i < Math.floor(tour.rating) ? "fill-amber-500 text-amber-500" : "text-slate-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="font-bold">{tour.rating.toFixed(1)}</span>
                    <span className="text-sm text-slate-600">({tour.reviewCount} reviews)</span>
                  </div>
                  <p className="text-sm text-slate-600">
                    &quot;Best accessible tour we&apos;ve ever taken. Every detail was perfect.&quot;
                  </p>
                </CardContent>
              </Card>
            </div>
          </aside>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-emerald-600 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Travel Without Limits?
          </h2>
          <p className="text-xl mb-8 text-emerald-50">
            Join thousands of happy travelers who&apos;ve discovered the world with full accessibility.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-emerald-700 font-bold">
              Book Now – Limited Spots
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
              Speak to an Accessibility Expert
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}