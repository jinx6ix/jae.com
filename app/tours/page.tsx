// app/tours/page.tsx - Server Component (no "use client")
import type { Metadata } from "next"
import { tours } from "@/lib/tours"
import { SchemaRenderer } from "@/components/schema-renderer"
import { generateBreadcrumbSchema } from "@/lib/seo-utils"
import { ToursClient } from "@/components/tours-client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { MapPin, Clock, Users, Camera, Tent, Star, Calendar, DollarSign, ChevronRight, Shield } from "lucide-react"

export const metadata: Metadata = {
  title: "East African Safari Tours | Kenya, Tanzania, Rwanda, Uganda | Jae Travel",
  description:
    "Discover the best safari tours in East Africa. Masai Mara, Serengeti, gorilla trekking, Amboseli, Ngorongoro, Lake Nakuru. Luxury, budget, family, photography & private tours available.",
  keywords:
    "safari tours Kenya, Masai Mara safari, Serengeti migration tour, gorilla trekking Rwanda, Tanzania safari packages, Uganda wildlife safari, luxury safari East Africa, budget safari Kenya, family safari tour, photography safari Kenya, private safari tour, best safari company Kenya, Jae Travel safaris",
  openGraph: {
    title: "Best Safari Tours in East Africa | Kenya • Tanzania • Rwanda • Uganda",
    description: "Handcrafted wildlife adventures. From Great Migration to mountain gorillas. 20+ expert-led tours with professional guides.",
    url: "https://jaetravel.com/tours",
    type: "website",
    images: [
      {
        url: "/og-safari-tours.jpg",
        width: 1200,
        height: 630,
        alt: "East African Safari Tours - Big Five, Migration, Gorillas | Jae Travel",
      },
    ],
  },
  alternates: {
    canonical: "/tours",
  },
}

export default function ToursPage() {
  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Tours", url: "/tours" },
  ]

  const featuredTours = tours
    .filter((tour) => tour.featured)
    .slice(0, 3)

  const tourCategories = [
    {
      title: "Classic Wildlife Safaris",
      description: "Experience the Big Five in Kenya & Tanzania's iconic national parks.",
      icon: <Camera className="w-8 h-8 text-green-600" />,
      count: tours.filter(t => t.category === "Safari").length,
      href: "/tours?category=wildlife",
    },
    {
      title: "Gorilla & Primate Trekking",
      description: "Track endangered mountain gorillas in Rwanda & Uganda's misty volcanoes.",
      icon: <Users className="w-8 h-8 text-amber-600" />,
      count: tours.filter(t => t.category === "Trekking").length,
      href: "/tours?category=primate",
    },
    {
      title: "Great Migration Spectacles",
      description: "Witness millions of wildebeest cross the Mara River in real time.",
      icon: <MapPin className="w-8 h-8 text-blue-600" />,
      count: tours.filter(t => t.category === "Safari").length,
      href: "/tours?category=migration",
    },
    {
      title: "Luxury & Honeymoon Safaris",
      description: "Private lodges, hot air balloons, and romantic bush dinners.",
      icon: <Star className="w-8 h-8 text-purple-600" />,
      count: tours.filter(t => t.category === "Luxury").length,
      href: "/tours?category=luxury",
    },
  ]

  return (
    <main>
      <SchemaRenderer schema={generateBreadcrumbSchema(breadcrumbs)} />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-600 to-amber-500 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            East African Safari Tours
          </h1>
          <p className="text-xl md:text-2xl text-orange-50 max-w-4xl mx-auto mb-8">
            Discover {tours.length} handcrafted wildlife adventures across <strong>Kenya</strong>, <strong>Tanzania</strong>, <strong>Rwanda</strong>, and <strong>Uganda</strong>. From the thunder of the Great Migration to intimate gorilla encounters — every journey is led by expert local guides.
          </p>
          <div className="flex flex-wrap gap-3 justify-center mb-10">
            <Badge className="bg-white text-orange-600 text-lg px-5 py-2">20+ Expert Tours</Badge>
            <Badge className="bg-white text-orange-600 text-lg px-5 py-2">4.9/5 Guest Rating</Badge>
            <Badge className="bg-white text-orange-600 text-lg px-5 py-2">Since 2015</Badge>
          </div>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50 font-semibold">
              View All Tours
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-orange-700">
              Get Custom Quote
            </Button>
          </div>
        </div>
      </section>

      {/* Intro Paragraphs */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-lg leading-relaxed space-y-6 text-slate-700">
          <p>
            <strong>Jae Travel</strong> offers the <strong>best safari tours in East Africa</strong>, meticulously designed for every traveler — whether you&apos;re chasing the <strong>Great Wildebeest Migration</strong> in the <strong>Masai Mara</strong> or <strong>Serengeti</strong>, tracking endangered <strong>mountain gorillas</strong> in <strong>Volcanoes National Park</strong>, or witnessing elephant herds against <strong>Mount Kilimanjaro</strong> in <strong>Amboseli</strong>.
          </p>
          <p>
            With over <strong>10 years of experience</strong>, we’ve curated safari packages that balance adventure, comfort, and conservation. All tours include <strong>professional driver-guides</strong>, <strong>4x4 safari vehicles</strong> with pop-up roofs, <strong>park fees</strong>, <strong>meals</strong>, and <strong>accommodation</strong> — from luxury lodges to intimate tented camps.
          </p>
          <p>
            Whether you’re a <strong>family with kids</strong>, a <strong>honeymoon couple</strong>, a <strong>wildlife photographer</strong>, or a <strong>solo adventurer</strong>, we have the perfect safari. Explore <strong>Kenya safari tours</strong>, <strong>Tanzania migration safaris</strong>, <strong>Rwanda gorilla trekking</strong>, and <strong>Uganda primate adventures</strong> — all in one place.
          </p>
        </div>
      </section>

      {/* Tour Categories */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Explore by Safari Type</h2>
          <p className="text-center text-lg text-slate-600 max-w-3xl mx-auto mb-12">
            Choose from classic game drives, primate trekking, migration spectacles, or luxury escapes.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tourCategories.map((cat, idx) => (
              <Link key={idx} href={cat.href}>
                <Card className="h-full hover:shadow-xl transition-shadow cursor-pointer border-orange-100">
                  <CardHeader>
                    <div className="mb-3">{cat.icon}</div>
                    <CardTitle className="text-xl">{cat.title}</CardTitle>
                    <CardDescription>{cat.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-orange-600 font-semibold">
                      {cat.count} Tours Available <ChevronRight className="inline w-4 h-4 ml-1" />
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Tours */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Featured Safari Tours</h2>
          <p className="text-center text-lg text-slate-600 max-w-3xl mx-auto mb-12">
            Our most popular wildlife adventures — handpicked for unforgettable experiences.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredTours.map((tour) => (
              <Card key={tour.id} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="aspect-video bg-slate-200 relative">
                  <img
                    src={tour.image || "/placeholder.svg"}
                    alt={`${tour.name} - ${tour.destinations.join(", ")} Safari Tour | Jae Travel`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-amber-600 text-white">Featured</Badge>
                  </div>
                  {tour.bestTime && (
                    <div className="absolute top-4 right-4">
                      <Badge variant="secondary" className="bg-white text-green-700">
                        <Calendar className="w-3 h-3 mr-1" />
                        {tour.bestTime}
                      </Badge>
                    </div>
                  )}
                </div>
                <CardHeader>
                  <CardTitle className="text-xl line-clamp-2">{tour.name}</CardTitle>
                  <CardDescription className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {tour.destinations.slice(0, 2).join(" • ")}
                    {tour.destinations.length > 2 && ` +${tour.destinations.length - 2} more`}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4 text-slate-500" />
                      {tour.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="w-4 h-4 text-slate-500" />
                      {tour.groupSize}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-slate-600">From</p>
                      <p className="text-2xl font-bold text-amber-600">
                        ${tour.priceFrom}
                        <span className="text-sm font-normal text-slate-600"> / person</span>
                      </p>
                    </div>
                    <Link href={`/tours/${tour.slug}`}>
                      <Button className="bg-amber-600 hover:bg-amber-700">
                        View Tour
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Why Travel With Jae Travel</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield className="w-10 h-10 text-green-600" />,
                title: "100% Local Expertise",
                desc: "Kenyan-owned & operated. Our guides are born in the bush and know every animal track.",
              },
              {
                icon: <DollarSign className="w-10 h-10 text-amber-600" />,
                title: "Best Price Guarantee",
                desc: "No middlemen. Direct lodge contracts mean you pay less for the same experience.",
              },
              {
                icon: <Tent className="w-10 h-10 text-blue-600" />,
                title: "Sustainable Safaris",
                desc: "Carbon-neutral tours. We support anti-poaching units and community projects.",
              },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="mb-4 flex justify-center">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Client Component */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">All Safari Tours</h2>
          <p className="text-center text-lg text-slate-600 max-w-3xl mx-auto mb-12">
            Filter by destination, duration, budget, or activity. Find your perfect East African adventure.
          </p>
          <ToursClient />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              {
                q: "When is the best time for the Great Migration?",
                a: "July–October for river crossings in Masai Mara. June–July & January–February in Serengeti for calving season.",
              },
              {
                q: "Do you offer private or group joining tours?",
                a: "Both! Private tours for flexibility. Joining tours for budget travelers (max 6 per vehicle).",
              },
              {
                q: "Are gorilla permits included?",
                a: "Yes. We secure permits 6+ months in advance. Rwanda ($1,500) and Uganda ($700) permits included in price.",
              },
              {
                q: "What is your cancellation policy?",
                a: "Full refund 60+ days before departure. 50% refund 30–59 days. No refund under 30 days.",
              },
            ].map((faq, i) => (
              <details key={i} className="group border-b pb-4">
                <summary className="flex justify-between items-center cursor-pointer font-semibold text-lg text-slate-800">
                  {faq.q}
                  <span className="text-amber-600 group-open:rotate-180 transition-transform">Down Arrow</span>
                </summary>
                <p className="mt-3 text-slate-600 pl-4">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-amber-600 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready for Your African Safari Adventure?
          </h2>
          <p className="text-xl mb-10">
            Let our experts design your dream East African journey. Contact us today for a free quote.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-amber-600 hover:bg-slate-100 font-bold">
                Get Free Quote
              </Button>
            </Link>
            <Link href="/vehicle-hire">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-amber-700">
                Rent Safari Vehicle
              </Button>
            </Link>
          </div>
          <p className="mt-8 text-lg">
            Call/WhatsApp: <a href="tel:+254700123456" className="underline font-semibold">+254 700 123 456</a> | 
            Email: <a href="mailto:tours@jaetravel.com" className="underline font-semibold">tours@jaetravel.com</a>
          </p>
        </div>
      </section>
    </main>
  )
}