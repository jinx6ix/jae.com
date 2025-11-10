

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { SchemaRenderer } from "@/components/schema-renderer"
import { generateBreadcrumbSchema, generateFAQSchema, generateOrganizationSchema } from "@/lib/seo-utils"

export const metadata = {
  title: "Jae Travel Expeditions - Premium East African Safari Tours | Kenya, Tanzania, Rwanda, Uganda",
  description:
    "Book luxury East Africa safari tours in Kenya, Tanzania, Rwanda & Uganda. Experience the Great Migration, gorilla trekking, Kilimanjaro climbs with expert guides, 5-star lodges & 24/7 support. Best prices guaranteed.",
  keywords:
    "east africa safari tours, kenya safari, tanzania safari, rwanda gorilla trekking, uganda safaris, luxury african safaris, masai mara safari, serengeti migration, mount kilimanjaro climbing, bwindi gorilla trekking, african wildlife tours, best east africa tour operator",
  openGraph: {
    title: "Premium East African Safari Tours - Jae Travel Expeditions",
    description: "Unforgettable wildlife adventures in Kenya, Tanzania, Rwanda & Uganda with luxury accommodations and expert local guides.",
    images: ["/og-east-africa-safaris.jpg"],
    type: "website",
  },
  robots: "index, follow",
  alternates: {
    canonical: "https://www.jaetravelexpeditions.com/",
  },
}

export default function Home() {
  const breadcrumbs = [{ name: "Home", url: "/" }]

  const featuredTours = [
    {
      title: "Masai Mara Luxury Safari - Witness the Great Migration",
      description: "5-Day all-inclusive luxury safari in Kenya's Masai Mara with game drives, hot air balloon rides, and stays at &Beyond Kichwa Tembo Camp. See the Big Five and the wildebeest migration.",
      price: 3500,
      duration: "5 Days / 4 Nights",
      country: "Kenya",
      link: "/tours/masai-mara-luxury-safari",
      image: "/masai-mara-safari-elephants.jpg",
      highlights: ["Great Migration", "Big Five", "Luxury Tented Camp", "Hot Air Balloon"],
    },
    {
      title: "Mount Kilimanjaro Climbing Expedition - Machame Route",
      description: "7-Day guided climb to Africa's highest peak via the scenic Machame Route. Professional porters, high-altitude cooks, and 98% success rate. Includes pre-climb briefing in Arusha.",
      price: 2200,
      duration: "7 Days / 6 Nights",
      country: "Tanzania",
      link: "/tours/kilimanjaro-climbing-expedition",
      image: "/mount-kilimanjaro-snow-peak.jpg",
      highlights: ["Uhuru Peak 5,895m", "98% Success Rate", "All Meals Included", "Professional Guides"],
    },
    {
      title: "Rwanda Gorilla Trekking in Volcanoes National Park",
      description: "3-Day gorilla trekking adventure with permits to see mountain gorillas in their natural habitat. Stay at Bisate Lodge with volcanic views. Includes golden monkey tracking option.",
      price: 2500,
      duration: "3 Days / 2 Nights",
      country: "Rwanda",
      link: "/tours/gorilla-trekking-experience",
      image: "/mountain-gorillas-rwanda-volcanoes.jpg",
      highlights: ["1-Hour with Gorillas", "Gorilla Permit Included", "Luxury Lodge", "Expert Trackers"],
    },
    {
      title: "Bwindi Impenetrable Forest Gorilla Trekking",
      description: "4-Day Uganda gorilla safari in Bwindi with two trekking permits. Stay at Sanctuary Gorilla Forest Camp. High chance of seeing multiple gorilla families.",
      price: 2200,
      duration: "4 Days / 3 Nights",
      country: "Uganda",
      link: "/tours/bwindi-gorilla-trekking",
      image: "/bwindi-forest-uganda-gorillas.jpg",
      highlights: ["2 Trekking Permits", "90% Success Rate", "Eco-Luxury Camp", "Bird Watching"],
    },
  ]

  const faqItems = [
    {
      question: "What is the best time for East Africa safari tours?",
      answer: "The best time depends on your priorities. For the Great Migration in Masai Mara and Serengeti, visit July-October. For gorilla trekking in Rwanda and Uganda, June-September and December-February offer dry weather and easier trekking conditions. Tanzania's calving season in Ndutu is January-March."
    },
    {
      question: "Are gorilla trekking permits included in the price?",
      answer: "Yes, all our Rwanda and Uganda gorilla trekking packages include the official gorilla permit ($1,500 in Rwanda, $700 in Uganda). We handle all permit bookings in advance to secure your preferred dates."
    },
    {
      question: "What is included in your luxury safari packages?",
      answer: "All packages include: airport transfers, all park fees and conservation charges, professional English-speaking guides, 4x4 safari vehicles, luxury accommodations, all meals, bottled water, and 24/7 emergency support. International flights are excluded."
    },
    {
      question: "Is travel insurance required for African safaris?",
      answer: "Yes, comprehensive travel insurance with medical evacuation coverage is mandatory. We recommend policies that cover trip cancellation, medical emergencies, and adventure activities like gorilla trekking and mountain climbing."
    },
    {
      question: "How physically demanding is gorilla trekking?",
      answer: "Gorilla trekking can be moderately to very challenging depending on gorilla family location. Treks last 2-8 hours through dense forest and steep terrain. Good fitness level is required. We offer porter services and have options for less demanding families."
    }
  ]

  const organizationSchema = generateOrganizationSchema({
    name: "Jae Travel Expeditions",
    logo: "/logo.png",
    url: "https://www.jaetravelexpeditions.com",
    sameAs: [
      "https://facebook.com/jaetravelexpeditions",
      "https://instagram.com/jaetravelexpeditions",
      "https://twitter.com/jaetravel"
    ]
  })

  return (
    <main>
      <SchemaRenderer schema={generateBreadcrumbSchema(breadcrumbs)} />
      <SchemaRenderer schema={generateFAQSchema(faqItems)} />
      <SchemaRenderer schema={organizationSchema} />

      {/* Hero Section - Rich Content for SEO */}
      <section className="relative bg-gradient-to-r from-slate-900 to-slate-800 text-white py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
            Premium East African Safari Tours & Wildlife Adventures
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-slate-200 text-balance max-w-4xl mx-auto leading-relaxed">
            Discover the best <strong>East Africa safari tours</strong> in <strong>Kenya</strong>, <strong>Tanzania</strong>, 
            <strong>Rwanda</strong>, and <strong>Uganda</strong>. Experience the Great Migration in Masai Mara, 
            trek mountain gorillas in Volcanoes National Park, climb Mount Kilimanjaro, and explore the Serengeti 
            with expert local guides and luxury accommodations. Jae Travel Expeditions has been crafting 
            unforgettable African safari experiences since 2015.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link href="/tours">
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-lg px-8">
                Explore All Safari Tours
              </Button>
            </Link>
            <Link href="/destinations">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-slate-900 bg-transparent text-lg px-8"
              >
                View All Destinations
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto text-center">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-3xl font-bold text-amber-400">500+</div>
              <div className="text-sm">Happy Travelers</div>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-3xl font-bold text-amber-400">98%</div>
              <div className="text-sm">Success Rate</div>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-3xl font-bold text-amber-400">10+</div>
              <div className="text-sm">Years Experience</div>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-3xl font-bold text-amber-400">24/7</div>
              <div className="text-sm">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Tours - Enhanced for SEO */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured East African Safari Tours & Packages 2025-2026
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Explore our handpicked <strong>luxury safari packages</strong> across East Africa&apos;s most iconic 
              destinations. Each tour is designed by local experts to maximize wildlife sightings and 
              cultural immersion while ensuring comfort and safety.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {featuredTours.map((tour, idx) => (
              <Link key={idx} href={tour.link}>
                <Card className="hover:shadow-xl transition-all duration-300 h-full cursor-pointer group border-0 shadow-lg">
                  <div className="aspect-video bg-slate-200 rounded-t-lg overflow-hidden relative">
                    <img
                      src={tour.image || "/placeholder.svg"}
                      alt={`${tour.title} - ${tour.country} Safari Tour | Jae Travel Expeditions`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading={idx < 2 ? "eager" : "lazy"}
                    />
                    <div className="absolute top-4 right-4 bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {tour.duration}
                    </div>
                  </div>
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-sm bg-slate-100 px-3 py-1 rounded-full">{tour.country}</span>
                    </div>
                    <CardTitle className="text-xl group-hover:text-amber-600 transition-colors">
                      {tour.title}
                    </CardTitle>
                    <CardDescription className="line-clamp-2">{tour.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center mb-3">
                      <div>
                        <span className="text-3xl font-bold text-amber-600">
                          ${tour.price.toLocaleString()}
                        </span>
                        <span className="text-sm text-slate-500">/person</span>
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-slate-500">From</div>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {tour.highlights.slice(0, 3).map((highlight, i) => (
                        <span key={i} className="text-xs bg-amber-100 text-amber-700 px-2 py-1 rounded">
                          {highlight}
                        </span>
                      ))}
                    </div>
                    <Button className="w-full bg-amber-600 hover:bg-amber-700">
                      View Details
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link href="/tours">
              <Button size="lg" variant="outline" className="border-amber-600 text-amber-600 hover:bg-amber-50">
                View All {featuredTours.length}+ Safari Tours
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Destination Highlights */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            Explore East Africa&apos;s Top Safari Destinations
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Kenya Safaris",
                description: "Home to the Masai Mara and the Great Migration. See millions of wildebeest cross the Mara River. Best time: July-October.",
                icon: "🦁",
                link: "/destinations/kenya",
                highlights: ["Masai Mara", "Amboseli", "Samburu", "Lake Nakuru"]
              },
              {
                name: "Tanzania Safaris",
                description: "The Serengeti, Ngorongoro Crater, and Zanzibar beaches. Witness the wildebeest calving season in Ndutu.",
                icon: "🌅",
                link: "/destinations/tanzania",
                highlights: ["Serengeti", "Ngorongoro", "Zanzibar", "Kilimanjaro"]
              },
              {
                name: "Rwanda Gorilla Trekking",
                description: "Track endangered mountain gorillas in Volcanoes National Park. 12 habituated gorilla families available.",
                icon: "🦍",
                link: "/destinations/rwanda",
                highlights: ["Volcanoes NP", "Golden Monkeys", "Kigali City", "Lake Kivu"]
              },
              {
                name: "Uganda Safaris",
                description: "Bwindi Impenetrable Forest and Queen Elizabeth National Park. Highest gorilla population density.",
                icon: "🌴",
                link: "/destinations/uganda",
                highlights: ["Bwindi Forest", "Queen Elizabeth NP", "Murchison Falls", "Chimp Tracking"]
              }
            ].map((dest, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="text-4xl mb-3">{dest.icon}</div>
                  <CardTitle>
                    <Link href={dest.link} className="hover:text-amber-600 transition-colors">
                      {dest.name}
                    </Link>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4">{dest.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {dest.highlights.map((h, i) => (
                      <span key={i} className="text-xs bg-slate-100 px-2 py-1 rounded">
                        {h}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us - Expanded Content */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            Why Choose Jae Travel Expeditions for Your East African Safari
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto text-center mb-16 leading-relaxed">
            With over 10 years of experience and 500+ 5-star reviews, we&apos;re East Africa&apos;s most trusted 
            luxury safari operator. ATOL protected and members of KATO, TATO, and AUTO.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Expert Local Guides",
                description: "All our guides are born and raised in East Africa with minimum 10 years experience. Certified by KPSGA (Kenya), TALA (Tanzania), and RDB (Rwanda). They speak English, French, German, and Spanish.",
                icon: "🎓"
              },
              {
                title: "Luxury Accommodations",
                description: "Hand-selected 4 and 5-star lodges and tented camps: &Beyond, Four Seasons Safari Lodge, Singita, Sanctuary Retreats, Bisate Lodge, and Mahali Mzuri. Private plunge pools, spa treatments, and gourmet dining.",
                icon: "⭐"
              },
              {
                title: "All-Inclusive Transparent Pricing",
                description: "No hidden fees. All prices include park fees ($100+/day), conservation fees, gorilla permits, full board meals, unlimited game drives, domestic flights, and airport transfers. What you see is what you pay.",
                icon: "💰"
              },
              {
                title: "24/7 Concierge Support",
                description: "Dedicated trip coordinator available via WhatsApp before, during, and after your safari. Emergency medical evacuation coverage included. Real-time flight monitoring and itinerary adjustments.",
                icon: "📞"
              },
              {
                title: "Sustainable & Responsible Tourism",
                description: "Carbon offset program, partnerships with Rhino Ark, Gorilla Doctors, and Jane Goodall Institute. Maximum 6 guests per vehicle. Support local communities through school visits and artisan cooperatives.",
                icon: "🌱"
              },
              {
                title: "Accessible Safari Options",
                description: "Modified 4x4 vehicles with wheelchair lifts, accessible lodges with ramps, sign language guides, and tailored itineraries for travelers with mobility challenges, visual/hearing impairments, or special needs.",
                icon: "♿"
              }
            ].map((feature, idx) => (
              <Card key={idx} className="h-full">
                <CardHeader>
                  <div className="text-3xl mb-3">{feature.icon}</div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-slate-600">
                  <p className="leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 bg-amber-50 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Trusted by Leading Travel Publications</h3>
            <div className="flex flex-wrap justify-center gap-8 items-center opacity-70">
              <div className="text-2xl">🌍 Lonely Planet</div>
              <div className="text-2xl">✈️ Condé Nast Traveller</div>
              <div className="text-2xl">📰 National Geographic</div>
              <div className="text-2xl">📸 BBC Travel</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            What Our Travelers Say About Their East African Safari
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah & Michael Thompson",
                location: "London, UK",
                quote: "The Masai Mara luxury safari exceeded all expectations. Our guide Joseph knew every animal's name and behavior. The hot air balloon ride over the migration was magical!",
                rating: 5,
                tour: "Masai Mara Luxury Safari"
              },
              {
                name: "Dr. Rajesh Patel",
                location: "Nairobi, Kenya",
                quote: "Climbed Kilimanjaro with Jae Travel and summited on my 50th birthday! The team was incredibly supportive, food was excellent, and equipment top-notch.",
                rating: 5,
                tour: "Kilimanjaro Machame Route"
              },
              {
                name: "Emma Larsson",
                location: "Stockholm, Sweden",
                quote: "Seeing mountain gorillas in Rwanda was a life-changing experience. The permit process was seamless, lodge was stunning, and we even saw golden monkeys!",
                rating: 5,
                tour: "Rwanda Gorilla Trekking"
              }
            ].map((testimonial, idx) => (
              <Card key={idx} className="relative">
                <CardContent className="pt-8">
                  <div className="text-4xl text-amber-400 mb-4">{'"'}</div>
                  <p className="text-slate-700 mb-6 italic">&quot;{testimonial.quote}&quot;</p>
                  <div className="flex items-center gap-2 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-amber-400">★</span>
                    ))}
                  </div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-slate-500">{testimonial.location}</div>
                  <div className="text-xs text-amber-600 mt-2">{testimonial.tour}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="text-5xl font-bold text-amber-600">4.9/5</div>
            <div className="text-slate-600 mb-4">Based on 500+ reviews</div>
            <div className="flex justify-center gap-4">
              <div className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
                ★★★★★ TripAdvisor
              </div>
              <div className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
                4.9 Google Reviews
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            Frequently Asked Questions About East African Safaris
          </h2>
          
          <div className="space-y-6">
            {faqItems.map((faq, idx) => (
              <details key={idx} className="bg-white rounded-lg shadow-sm">
                <summary className="px-6 py-4 font-semibold cursor-pointer hover:text-amber-600 transition-colors">
                  {faq.question}
                </summary>
                <div className="px-6 pb-4 text-slate-600">
                  <p className="leading-relaxed">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-slate-600 mb-4">
              Still have questions about your East Africa safari tour?
            </p>
            <Link href="/contact">
              <Button className="bg-amber-600 hover:bg-amber-700">
                Contact Our Safari Experts
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section - Final Conversion */}
      <section className="py-20 px-4 bg-gradient-to-r from-amber-600 to-amber-700 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Limited Time: Save 10% on 2026 East Africa Safari Bookings
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Book your dream <strong>Kenya safari</strong>, <strong>Tanzania wildlife tour</strong>, 
            or <strong>Rwanda gorilla trekking</strong> adventure by December 31, 2025 and 
            receive 10% off + free airport transfers. Contact our experts for custom itineraries.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link href="/tours">
              <Button size="lg" className="bg-white text-amber-600 hover:bg-slate-100 text-lg px-8">
                Browse All Safari Tours
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-amber-600 text-lg px-8">
                Get Free Quote
              </Button>
            </Link>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <span>✓ ATOL Protected</span>
            </div>
            <div className="flex items-center gap-2">
              <span>✓ Best Price Guarantee</span>
            </div>
            <div className="flex items-center gap-2">
              <span>✓ Flexible Payments</span>
            </div>
            <div className="flex items-center gap-2">
              <span>✓ 24/7 Support</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}