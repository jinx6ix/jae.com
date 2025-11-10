// app/destinations/[slug]/page.tsx
import { getDestinationBySlug, getAllDestinations } from "@/lib/destinations"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { SchemaRenderer } from "@/components/schema-renderer"
import {
  generateBreadcrumbSchema,
  generateFAQSchema,
  generateOrganizationSchema,
} from "@/lib/seo-utils"
import { toursByCountry } from "@/lib/all-tours"
import { TourCard } from "@/components/tour-card"
import Link from "next/link"
import {
  Calendar,
  Zap,
  Star,
  Clock,
  DollarSign,
  Users,
  ChevronRight,
  Phone,
  Mail,
  Shield,
  Award,
  Globe,
  Heart,
  Landmark,
} from "lucide-react"

export async function generateStaticParams() {
  const destinations = getAllDestinations()
  return destinations.map((dest) => ({
    slug: dest.slug,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const destination = getDestinationBySlug(slug)
  if (!destination) return {}

  return {
    title: destination.metaTitle,
    description: destination.metaDescription,
    keywords: destination.keywords.join(", "),
    openGraph: {
      title: `${destination.name} Safari 2025 | Jae Travel Expeditions`,
      description: destination.metaDescription,
      url: `https://www.jaetravelexpeditions.com/destinations/${destination.slug}`,
      images: [
        {
          url: destination.image,
          width: 1200,
          height: 630,
          alt: `${destination.name} Safari Destination`,
        },
      ],
      type: "website",
    },
    robots: "index, follow",
    alternates: {
      canonical: `https://www.jaetravelexpeditions.com/destinations/${destination.slug}`,
    },
  }
}

export default async function DestinationPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const destination = getDestinationBySlug(slug)
  if (!destination) notFound()

  const tours = toursByCountry[destination.country as keyof typeof toursByCountry] || []
  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Destinations", url: "/destinations" },
    { name: destination.name, url: `/destinations/${destination.slug}` },
  ]

  const faqItems = [
    {
      question: `What is the best time to visit ${destination.name} for safari?`,
      answer: `${destination.bestTimeToVisit}. This is the dry season with optimal wildlife viewing. Migration patterns: ${destination.migrationNote || "N/A"}.`,
    },
    {
      question: `How much does a safari in ${destination.name} cost?`,
      answer: `Daily rates start from $${destination.priceRange.min}/person. Luxury tours: $${destination.priceRange.max || 2000}+. Includes park fees, guide, transport, and lodging.`,
    },
    {
      question: `Is ${destination.name} safe for tourists?`,
      answer: `Yes. ${destination.country} is one of Africa's safest destinations. We provide 24/7 support, emergency evacuation, and local expert guides.`,
    },
    {
      question: `Do I need a visa to visit ${destination.name}?`,
      answer: `Most nationalities get visas on arrival or e-visa. East Africa Tourist Visa ($100) covers Kenya, Rwanda, Uganda for 90 days.`,
    },
    {
      question: `What wildlife can I see in ${destination.name}?`,
      answer: `Expect the Big Five, Great Migration (if applicable), gorillas (Rwanda/Uganda), and 500+ bird species. Wildlife rating: ${destination.wildlifeRating}/5.`,
    },
  ]

  const organizationSchema = generateOrganizationSchema({
    name: `Jae Travel - ${destination.name} Safari Experts`,
    logo: "/logo.png",
    url: "https://www.jaetravelexpeditions.com",
    sameAs: [
      "https://facebook.com/jaetravelexpeditions",
      "https://instagram.com/jaetravelexpeditions",
      "https://twitter.com/jaetravel",
    ],
  })

  return (
    <main>
      <SchemaRenderer schema={generateBreadcrumbSchema(breadcrumbs)} />
      <SchemaRenderer schema={generateFAQSchema(faqItems)} />
      <SchemaRenderer schema={organizationSchema} />

      {/* Hero Section - Full Width, Immersive */}
      <section className="relative h-screen min-h-[600px] bg-slate-200 overflow-hidden">
        <Image
          src={destination.image || "/placeholder.svg"}
          alt={`${destination.name} Safari Destination - Jae Travel`}
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <Badge className="bg-amber-600 text-white text-lg px-4 py-1">
                <Globe className="w-4 h-4 mr-1" />
                {destination.country}
              </Badge>
              {destination.featured && (
                <Badge className="bg-green-600 text-white">Featured Destination</Badge>
              )}
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 text-balance">
              {destination.name} Safari Adventures
            </h1>
            <p className="text-xl md:text-2xl mb-6 max-w-4xl leading-relaxed">
              {destination.description}. Home to{" "}
              <strong>
                {destination.highlights.length}+ iconic attractions
              </strong>
              . Rated {destination.wildlifeRating}/5 for wildlife.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link href="#tours">
                <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-lg px-8">
                  View {tours.length} Tours
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-amber-600 bg-transparent text-lg px-8"
                >
                  Get Free Quote
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-5 text-center">
                <div className="text-3xl font-bold text-amber-400">
                  ${destination.priceRange.min}+
                </div>
                <div className="text-sm">Per Day</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-5 text-center">
                <div className="text-3xl font-bold text-amber-400">
                  {tours.length}
                </div>
                <div className="text-sm">Tours Available</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-5 text-center">
                <div className="text-3xl font-bold text-amber-400">
                  {destination.wildlifeRating}/5
                </div>
                <div className="text-sm">Wildlife Rating</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-5 text-center">
                <div className="text-3xl font-bold text-amber-400">
                  {destination.tourCount}
                </div>
                <div className="text-sm">Total Tours</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why Visit {destination.name}?
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Discover the magic of {destination.country}&apos;s premier safari destination.
            </p>
          </div>

          <div className="prose prose-lg prose-slate max-w-none mx-auto mb-16">
            {destination.longDescription.split("\n\n").map((para, i) => (
              <p key={i} className="mb-6 leading-relaxed text-slate-700">
                {para}
              </p>
            ))}
          </div>

          {/* Key Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Calendar className="w-12 h-12 text-blue-600 mx-auto mb-3" />
                <CardTitle>Best Time to Visit</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-bold text-lg">{destination.bestTimeToVisit}</p>
                {destination.migrationNote && (
                  <p className="text-sm text-amber-700 mt-2 font-medium">
                    {destination.migrationNote}
                  </p>
                )}
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <DollarSign className="w-12 h-12 text-green-600 mx-auto mb-3" />
                <CardTitle>Daily Cost</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-bold text-lg">
                  ${destination.priceRange.min}–$
                  {destination.priceRange.max || "Custom"}
                </p>
                <p className="text-sm text-slate-600">Per person, all-inclusive</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Star className="w-12 h-12 text-amber-600 mx-auto mb-3" />
                <CardTitle>Wildlife Rating</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-6 h-6 ${
                        i < destination.wildlifeRating
                          ? "fill-amber-400 text-amber-400"
                          : "text-slate-300"
                      }`}
                    />
                  ))}
                </div>
                <p className="text-sm text-slate-600">
                  Based on Big Five, migration, primates
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Top Attractions */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            Top {destination.attractions.length} Attractions in {destination.name}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {destination.attractions.map((attraction, idx) => (
              <Card
                key={idx}
                className="h-full hover:shadow-xl transition-all duration-300 group"
              >
                <CardHeader>
                  <div className="flex items-start gap-3">
                    <div className="bg-amber-100 p-2 rounded-full group-hover:bg-amber-200 transition-colors">
                      <Zap className="w-6 h-6 text-amber-600" />
                    </div>
                    <CardTitle className="text-xl group-hover:text-amber-600 transition-colors">
                      {attraction.name}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 leading-relaxed">
                    {attraction.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* All Highlights */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Landmark className="w-8 h-8 text-amber-600" />
              All {destination.highlights.length} Highlights
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {destination.highlights.map((highlight, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 text-slate-700 bg-slate-50 px-4 py-3 rounded-lg"
                >
                  <span className="text-amber-600 font-bold text-lg">Check</span>
                  <span className="font-medium">{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tours Section */}
      {tours.length > 0 && (
        <section id="tours" className="py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                {tours.length} Safari Tours in {destination.name}
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Choose from luxury lodges, budget camps, or private fly-in safaris. All tours include expert guides and 4x4 vehicles.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {tours.slice(0, 6).map((tour, idx) => (
                <div
                  key={tour.id}
                  className="group"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <TourCard tour={tour} />
                </div>
              ))}
            </div>

            {tours.length > 6 && (
              <div className="text-center">
                <Link href={`/tours?destination=${destination.slug}`}>
                  <Button size="lg" className="bg-amber-600 hover:bg-amber-700">
                    View All {tours.length} Tours
                    <ChevronRight className="w-5 h-5 ml-1" />
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Why Choose Jae Travel */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            Why Book {destination.name} Safari with Jae Travel?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: <Award className="w-10 h-10 text-amber-600" />,
                title: "Local {destination.country} Experts",
                desc: "Born in East Africa. Fluent in Swahili, local dialects. 10+ years guiding in {destination.name}.",
              },
              {
                icon: <Shield className="w-10 h-10 text-green-600" />,
                title: "Fully Protected & Insured",
                desc: "ATOL bonded. KATO/TATO members. Emergency evacuation cover. 24/7 support hotline.",
              },
              {
                icon: <Heart className="w-10 h-10 text-red-600" />,
                title: "Sustainable & Ethical",
                desc: "Carbon offset. Support local communities. Max 6 guests per vehicle. No off-road driving.",
              },
            ].map((item, idx) => (
              <Card key={idx} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto mb-4">{item.icon}</div>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-amber-50 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Trusted by Global Travelers</h3>
            <div className="flex flex-wrap justify-center gap-8 items-center opacity-70">
              <div className="text-2xl">TripAdvisor</div>
              <div className="text-2xl">Lonely Planet</div>
              <div className="text-2xl">BBC Travel</div>
              <div className="text-2xl">Condé Nast</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            {destination.name} Safari FAQs
          </h2>

          <div className="space-y-6">
            {faqItems.map((faq, idx) => (
              <details
                key={idx}
                className="bg-slate-50 rounded-lg shadow-sm group"
              >
                <summary className="px-6 py-4 font-semibold cursor-pointer hover:text-amber-600 transition-colors flex justify-between items-center">
                  {faq.question}
                  <ChevronRight className="w-5 h-5 transition-transform group-open:rotate-90" />
                </summary>
                <div className="px-6 pb-4 text-slate-600">
                  <p className="leading-relaxed">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>

          <div className="mt-12 text-center bg-amber-50 rounded-xl p-8">
            <h3 className="text-xl font-bold mb-2">Need a Custom {destination.name} Itinerary?</h3>
            <p className="text-slate-600 mb-6">
              Our {destination.country} specialists are available 24/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="tel:+254700000000">
                <Button className="bg-amber-600 hover:bg-amber-700">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  variant="outline"
                  className="border-amber-600 text-amber-600 hover:bg-amber-50"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Get Free Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-amber-600 to-amber-700 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Save 10% on {destination.name} Safari Bookings
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Book by December 31, 2025 and get{" "}
            <strong>10% off + free destination guide</strong>.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link href={`/tours?destination=${destination.slug}`}>
              <Button size="lg" className="bg-white text-amber-600 hover:bg-slate-100 text-lg px-8">
                View All Tours
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-amber-600 text-lg px-8"
              >
                Get Free Quote
              </Button>
            </Link>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5" /> ATOL Protected
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5" /> Best Price Guarantee
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" /> Flexible Payments
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5" /> 24/7 Support
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}