import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { SchemaRenderer } from "@/components/schema-renderer"
import {
  generateBreadcrumbSchema,
  generateFAQSchema,
  generateOrganizationSchema,
} from "@/lib/seo-utils"
import { getAllDestinations } from "@/lib/destinations"
import Link from "next/link"
import {
  MapPin,
  Calendar,
  Clock,
  DollarSign,
  Users,
  Camera,
  TreePine,
  Heart,
  Star,
  ChevronRight,
  Globe,
  Shield,
  Award,
  Phone,
  Mail,
} from "lucide-react"
import Image from "next/image"

export const metadata: Metadata = {
  title:
    "East Africa Safari Destinations 2025 | Kenya, Tanzania, Rwanda, Uganda | Jae Travel Expeditions",
  description:
    "Compare Kenya, Tanzania, Rwanda & Uganda safari destinations. Best time to visit, top attractions, wildlife, costs, accessibility. Plan your perfect East African adventure.",
  keywords:
    "east africa destinations, kenya safari destinations, tanzania safari parks, rwanda gorilla trekking, uganda wildlife tours, best african safari countries, masai mara serengeti comparison, east africa travel guide, best time to visit kenya tanzania, safari destinations east africa, national parks kenya tanzania rwanda uganda, great migration serengeti, gorilla trekking volcanoes national park, bwindi impenetrable forest, amboseli national park, ngorongoro crater, lake nakuru, queen elizabeth national park",
  openGraph: {
    title: "East Africa Safari Destinations Guide | Kenya, Tanzania, Rwanda, Uganda",
    description:
      "In-depth comparison of East Africa's top safari destinations. Wildlife, best time to visit, costs, accessibility, and expert recommendations.",
    images: ["/og-east-africa-destinations.jpg"],
    type: "website",
  },
  robots: "index, follow",
  alternates: {
    canonical: "https://www.jaetravelexpeditions.com/destinations",
  },
}

export default function DestinationsPage() {
  const destinations = getAllDestinations()
  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Destinations", url: "/destinations" },
  ]

  const faqItems = [
    {
      question: "Which East African country is best for safaris?",
      answer:
        "It depends on your priorities. Kenya offers the most accessible infrastructure and iconic Masai Mara. Tanzania has the vast Serengeti and Ngorongoro Crater. Rwanda is best for gorilla trekking. Uganda provides exceptional value and diverse experiences.",
    },
    {
      question: "When is the best time to see the Great Migration?",
      answer:
        "The wildebeest migration crosses the Mara River in Kenya's Masai Mara from July to October. In Tanzania's Serengeti, the calving season in Ndutu occurs January to March. December to June offers excellent viewing in southern Serengeti.",
    },
    {
      question: "How much does an East African safari cost?",
      answer:
        "Budget safaris start at $250/day. Mid-range tours average $450–$800/day. Luxury safaris range $800–$2,000+/day. Prices include accommodations, meals, park fees, guides, and transport. Gorilla permits add $700–$1,500 per person.",
    },
    {
      question: "Is East Africa safe for tourists?",
      answer:
        "Yes. Kenya, Tanzania, Rwanda, and Uganda are among Africa's safest tourist destinations. All have stable governments, professional tourism industries, and low crime rates in safari areas. We provide 24/7 support and emergency evacuation coverage.",
    },
    {
      question: "Do I need a visa for East Africa?",
      answer:
        "Kenya, Rwanda, and Uganda offer e-visas online. Tanzania requires visas on arrival or e-visa. The East Africa Tourist Visa ($100) allows travel between Kenya, Rwanda, and Uganda for 90 days.",
    },
  ]

  const organizationSchema = generateOrganizationSchema({
    name: "Jae Travel Expeditions",
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

      {/* Hero Section - SEO Optimized */}
      <section className="relative bg-gradient-to-r from-slate-900 to-slate-800 text-white py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="flex justify-center mb-6">
            <Badge className="bg-amber-600 text-white text-lg px-6 py-2 flex items-center gap-2">
              <Globe className="w-5 h-5" />
              Expert East Africa Destination Guide 2025-2026
            </Badge>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
            East Africa Safari Destinations: Kenya • Tanzania • Rwanda • Uganda
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-slate-200 max-w-4xl mx-auto leading-relaxed">
            Compare <strong>Kenya safari destinations</strong>, <strong>Tanzania national parks</strong>, 
            <strong>Rwanda gorilla trekking</strong>, and <strong>Uganda wildlife tours</strong>. 
            Discover the best time to visit, top attractions, costs, and insider tips from local experts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="#destinations">
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-lg px-8">
                Explore All Destinations
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-slate-900 bg-transparent text-lg px-8"
              >
                Get Free Itinerary
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-5 text-center">
              <div className="text-3xl font-bold text-amber-400">4</div>
              <div className="text-sm">Countries</div>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-5 text-center">
              <div className="text-3xl font-bold text-amber-400">20+</div>
              <div className="text-sm">National Parks</div>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-5 text-center">
              <div className="text-3xl font-bold text-amber-400">500+</div>
              <div className="text-sm">Safari Tours</div>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-5 text-center">
              <div className="text-3xl font-bold text-amber-400">4.9★</div>
              <div className="text-sm">Guest Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Destinations Grid - Enhanced */}
      <section id="destinations" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Top East African Safari Destinations 2025
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Explore Kenya, Tanzania, Rwanda, and Uganda — each offering unique wildlife, landscapes, and cultural experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {destinations.map((destination, idx) => (
              <Card
                key={destination.id}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 group border-0 shadow-lg"
              >
                <div className="relative aspect-video bg-slate-200 overflow-hidden">
                  <Image
                    src={destination.image || "/placeholder.svg"}
                    alt={`${destination.name} Safari Destination - ${destination.country} | Jae Travel`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading={idx < 2 ? "eager" : "lazy"}
                    width={600}
                    height={400}
                  />
                  <div className="absolute top-4 left-4 bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                    <MapPin size={16} />
                    {destination.country}
                  </div>
                  {destination.featured && (
                    <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                      Featured
                    </div>
                  )}
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-2xl flex items-center gap-2 group-hover:text-amber-600 transition-colors">
                      <destination.icon className="w-8 h-8 text-amber-600" />
                      {destination.name}
                    </CardTitle>
                    <Badge variant="secondary" className="text-xs">
                      {destination.tourCount} Tours
                    </Badge>
                  </div>
                  <CardDescription className="text-base">
                    {destination.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-5">
                  <p className="text-slate-700 leading-relaxed">
                    {destination.longDescription}
                  </p>

                  {/* Key Stats */}
                  <div className="grid grid-cols-3 gap-4 text-center bg-slate-50 p-4 rounded-lg">
                    <div>
                      <div className="text-2xl font-bold text-amber-600">
                        ${destination.priceRange.min}+
                      </div>
                      <div className="text-xs text-slate-600">Per Day</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-green-600">
                        {destination.bestTimeToVisit.split("–")[0]}
                      </div>
                      <div className="text-xs text-slate-600">Best Month</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-purple-600">
                        {destination.wildlifeRating}/5
                      </div>
                      <div className="text-xs text-slate-600">Wildlife</div>
                    </div>
                  </div>

                  {/* Top Attractions */}
                  <div>
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <Star className="w-5 h-5 text-amber-600" />
                      Top Attractions
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {destination.highlights.slice(0, 4).map((highlight, i) => (
                        <div
                          key={i}
                          className="text-sm text-slate-600 flex items-center gap-2 bg-white px-3 py-2 rounded-lg border"
                        >
                          <span className="text-amber-600">Check</span>
                          {highlight}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Best Time */}
                  <div className="bg-amber-50 p-4 rounded-lg flex items-start gap-3">
                    <Calendar className="text-amber-600 flex-shrink-0 mt-0.5" size={20} />
                    <div>
                      <div className="font-semibold text-sm">Best Time to Visit</div>
                      <div className="text-sm text-slate-700">{destination.bestTimeToVisit}</div>
                      {destination.migrationNote && (
                        <div className="text-xs text-amber-700 mt-1 font-medium">
                          {destination.migrationNote}
                        </div>
                      )}
                    </div>
                  </div>

                  <Link href={`/destinations/${destination.slug}`}>
                    <Button className="w-full bg-amber-600 hover:bg-amber-700 group">
                      Explore {destination.name} Tours
                      <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Destination Comparison */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            Which East African Destination is Right for You?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              {
                icon: <Camera className="w-8 h-8 text-amber-600" />,
                title: "Best for Great Migration",
                country: "Tanzania",
                description:
                  "Serengeti National Park offers the most dramatic river crossings and vast herds. July–October for Mara River drama.",
                badge: "Iconic",
              },
              {
                icon: <TreePine className="w-8 h-8 text-green-600" />,
                title: "Best for Gorilla Trekking",
                country: "Rwanda",
                description:
                  "Volcanoes National Park has 12 habituated gorilla families. Easiest access, shortest treks, luxury lodges.",
                badge: "Premium",
              },
              {
                icon: <Users className="w-8 h-8 text-blue-600" />,
                title: "Best Accessibility & Infrastructure",
                country: "Kenya",
                description:
                  "Most developed roads, shortest flights, wheelchair-friendly options. Ideal for first-time safari visitors.",
                badge: "Easiest",
              },
              {
                icon: <DollarSign className="w-8 h-8 text-purple-600" />,
                title: "Best Value for Money",
                country: "Uganda",
                description:
                  "Exceptional wildlife at lower costs. Bwindi gorillas, Queen Elizabeth NP, fewer tourists, authentic experiences.",
                badge: "Budget-Friendly",
              },
            ].map((item, idx) => (
              <Card key={idx} className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-3xl">{item.icon}</div>
                    <Badge className="bg-amber-100 text-amber-700">{item.badge}</Badge>
                  </div>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-lg font-bold text-amber-600 mb-2">{item.country}</div>
                  <p className="text-slate-700">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Detailed Comparison Table */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="bg-amber-600 text-white p-6">
              <h3 className="text-2xl font-bold text-center">
                East Africa Safari Comparison 2025
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-100">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">Category</th>
                    <th className="px-6 py-4 text-center font-semibold">Kenya</th>
                    <th className="px-6 py-4 text-center font-semibold">Tanzania</th>
                    <th className="px-6 py-4 text-center font-semibold">Rwanda</th>
                    <th className="px-6 py-4 text-center font-semibold">Uganda</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  <tr>
                    <td className="px-6 py-4 font-medium">Great Migration</td>
                    <td className="px-6 py-4 text-center text-amber-600">★★★★☆</td>
                    <td className="px-6 py-4 text-center text-amber-600">★★★★★</td>
                    <td className="px-6 py-4 text-center">—</td>
                    <td className="px-6 py-4 text-center">—</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="px-6 py-4 font-medium">Gorilla Trekking</td>
                    <td className="px-6 py-4 text-center">—</td>
                    <td className="px-6 py-4 text-center">—</td>
                    <td className="px-6 py-4 text-center text-green-600">★★★★★</td>
                    <td className="px-6 py-4 text-center text-green-600">★★★★☆</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium">Accessibility</td>
                    <td className="px-6 py-4 text-center text-blue-600">★★★★★</td>
                    <td className="px-6 py-4 text-center">★★★☆☆</td>
                    <td className="px-6 py-4 text-center">★★★★☆</td>
                    <td className="px-6 py-4 text-center">★★★☆☆</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="px-6 py-4 font-medium">Daily Cost (Luxury)</td>
                    <td className="px-6 py-4 text-center">$800–$1,500</td>
                    <td className="px-6 py-4 text-center">$1,000–$2,000</td>
                    <td className="px-6 py-4 text-center">$1,200–$3,000</td>
                    <td className="px-6 py-4 text-center">$600–$1,200</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium">Best For</td>
                    <td className="px-6 py-4 text-center text-sm">First-timers, families</td>
                    <td className="px-6 py-4 text-center text-sm">Epic wildlife drama</td>
                    <td className="px-6 py-4 text-center text-sm">Gorillas & luxury</td>
                    <td className="px-6 py-4 text-center text-sm">Value & authenticity</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Jae Travel */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            Why Choose Jae Travel for Your East African Safari
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: <Award className="w-10 h-10 text-amber-600" />,
                title: "Local East African Experts",
                description:
                  "Born and raised in Kenya, Tanzania, Rwanda, and Uganda. Our guides speak 5+ languages and know every park intimately.",
              },
              {
                icon: <Shield className="w-10 h-10 text-green-600" />,
                title: "ATOL & KATO Protected",
                description:
                  "Fully bonded and insured. Members of KATO, TATO, AUTO. Your booking and payments are 100% secure.",
              },
              {
                icon: <Heart className="w-10 h-10 text-red-600" />,
                title: "Sustainable & Responsible",
                description:
                  "Carbon offset flights, support for Rhino Ark and Gorilla Doctors. Maximum 6 guests per vehicle.",
              },
            ].map((item, idx) => (
              <Card key={idx} className="text-center">
                <CardHeader>
                  <div className="mx-auto mb-4">{item.icon}</div>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-amber-50 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Trusted by Leading Publications</h3>
            <div className="flex flex-wrap justify-center gap-8 items-center opacity-70">
              <div className="text-2xl">Lonely Planet</div>
              <div className="text-2xl">Condé Nast Traveller</div>
              <div className="text-2xl">National Geographic</div>
              <div className="text-2xl">BBC Travel</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            East Africa Safari FAQs
          </h2>

          <div className="space-y-6">
            {faqItems.map((faq, idx) => (
              <details key={idx} className="bg-white rounded-lg shadow-sm">
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

          <div className="mt-12 text-center bg-white rounded-xl p-8 shadow-sm">
            <h3 className="text-xl font-bold mb-2">Need Personalized Advice?</h3>
            <p className="text-slate-600 mb-6">
              Our East Africa destination experts are available 24/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="tel:+254700000000">
                <Button className="bg-amber-600 hover:bg-amber-700">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" className="border-amber-600 text-amber-600 hover:bg-amber-50">
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
            Save 10% on 2026 East Africa Safari Bookings
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Book any <strong>Kenya</strong>, <strong>Tanzania</strong>, <strong>Rwanda</strong>, or 
            <strong>Uganda safari</strong> by December 31, 2025 and get{" "}
            <strong>10% off + free destination guide</strong>.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link href="/tours">
              <Button size="lg" className="bg-white text-amber-600 hover:bg-slate-100 text-lg px-8">
                View All Safari Tours
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-amber-600 text-lg px-8"
              >
                Get Free Itinerary
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