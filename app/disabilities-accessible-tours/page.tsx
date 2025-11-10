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
import { accessibleTours } from "@/lib/disability-tours"
import Link from "next/link"
import {
  Accessibility,
  CheckCircle,
  Users,
  Heart,
  MapPin,
  Star,
  Shield,
  Phone,
  Mail,
  Globe,
  Award,
  ChevronRight,
} from "lucide-react"

export const metadata: Metadata = {
  title:
    "Accessible Kenya Safari | Wheelchair-Friendly Tours | Disability Travel East Africa 2025",
  description:
    "Book wheelchair-accessible safaris in Kenya, Tanzania, Rwanda & Uganda. Adapted vehicles, accessible lodges, trained guides. Inclusive Masai Mara, Serengeti, gorilla trekking for disabled travelers.",
  keywords:
    "wheelchair accessible safari in kenya, accessible kenya safari, disability tours kenya, wheelchair friendly safari, accessible travel africa, special needs safari, mobility impaired kenya tours, adapted safari vehicles, barrier-free kenya travel, inclusive safari experiences, disabled travel kenya, wheelchair accessible tours and safaris, accessible masai mara safari, wheelchair safari tanzania, accessible gorilla trekking rwanda, disability-friendly uganda safari, accessible serengeti safari, inclusive east africa tours, kenya wheelchair safari, tanzania accessible safari, rwanda accessible gorilla tours, uganda mobility impaired safari, wheelchair safari east africa, accessible wildlife tours",
  openGraph: {
    title: "Wheelchair Accessible Safaris in Kenya & East Africa | Jae Travel Expeditions",
    description:
      "Inclusive, barrier-free wildlife adventures for travelers with disabilities. Wheelchair-friendly vehicles, accessible lodges, expert support.",
    images: ["/og-accessible-safari.jpg"],
    type: "website",
  },
  robots: "index, follow",
  alternates: {
    canonical: "https://www.jaetravelexpeditions.com/disabilities-accessible-tours",
  },
}

export default function AccessibleToursPage() {
  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Accessible Tours", url: "/disabilities-accessible-tours" },
  ]

  const faqItems = [
    {
      question: "Are your safari vehicles wheelchair accessible?",
      answer:
        "Yes, all our vehicles are equipped with hydraulic wheelchair lifts, wide doors, and spacious interiors. We use modified Toyota Land Cruisers with removable seats and secure tie-downs.",
    },
    {
      question: "Can I bring my own wheelchair or mobility scooter?",
      answer:
        "Absolutely. We accommodate manual wheelchairs, powered wheelchairs, and mobility scooters. Our team will assist with loading, storage, and daily maintenance.",
    },
    {
      question: "Are the lodges and camps wheelchair accessible?",
      answer:
        "We partner only with lodges that meet international accessibility standards: ramps, roll-in showers, grab bars, and ground-floor rooms. Examples include &Beyond Kichwa Tembo (Kenya), Four Seasons Safari Lodge (Tanzania), and Bisate Lodge (Rwanda).",
    },
    {
      question: "Is gorilla trekking possible for wheelchair users?",
      answer:
        "While full trekking in dense forest is challenging, we offer adapted gorilla experiences in Rwanda and Uganda with shorter routes, porter assistance, and sedan chairs for steep sections. We also provide golden monkey tracking alternatives.",
    },
    {
      question: "What medical support is available on tour?",
      answer:
        "A registered nurse or paramedic travels with every group. We carry oxygen, first-aid kits, and emergency evacuation plans. All guides are trained in disability support and emergency response.",
    },
    {
      question: "Can caregivers or personal assistants join?",
      answer:
        "Yes, caregivers travel free of charge (excluding park fees). We provide private rooms and all meals. Up to 2 assistants per traveler are welcome.",
    },
  ]

  const organizationSchema = generateOrganizationSchema({
    name: "Jae Travel Expeditions - Accessible Safaris",
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
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-800 text-white py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="flex justify-center mb-6">
            <Badge className="bg-white text-blue-900 text-lg px-6 py-2 flex items-center gap-2">
              <Accessibility className="w-5 h-5" />
              Certified Disability-Inclusive Tour Operator
            </Badge>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
            Wheelchair Accessible Safaris in Kenya & East Africa
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-4xl mx-auto leading-relaxed">
            Experience the <strong>accessible Kenya safari</strong> of your dreams. Our{" "}
            <strong>wheelchair-friendly safaris</strong> in Masai Mara, Serengeti, and Volcanoes National Park
            are designed for travelers with mobility challenges. Adapted 4x4 vehicles, accessible luxury lodges,
            and expert disability-trained guides ensure an inclusive wildlife adventure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="#featured-tours">
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-lg px-8">
                View Accessible Tours
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-900 bg-transparent text-lg px-8"
              >
                Get Accessibility Quote
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-5 text-center">
              <div className="text-3xl font-bold text-amber-400">{accessibleTours.length}+</div>
              <div className="text-sm">Accessible Tours</div>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-5 text-center">
              <div className="text-3xl font-bold text-amber-400">100%</div>
              <div className="text-sm">Wheelchair Adapted</div>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-5 text-center">
              <div className="text-3xl font-bold text-amber-400">10+</div>
              <div className="text-sm">Years Experience</div>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-5 text-center">
              <div className="text-3xl font-bold text-amber-400">4.9★</div>
              <div className="text-sm">Guest Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Accessibility Features */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why Choose Jae Travel for Your Accessible Safari
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              We are East Africa’s leading provider of <strong>disability tours in Kenya</strong> and{" "}
              <strong>inclusive safari experiences</strong>. Every detail is designed for comfort, safety, and
              adventure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Accessibility className="w-10 h-10 text-blue-600" />,
                title: "Wheelchair Accessible Safari Vehicles",
                description:
                  "Custom-modified 4x4 Land Cruisers with hydraulic lifts, removable seats, wide doors, and secure wheelchair tie-downs. Comfortable game viewing from inside the vehicle.",
                highlights: ["Hydraulic Lift", "Spacious Interior", "360° Views", "Air Conditioning"],
              },
              {
                icon: <MapPin className="w-10 h-10 text-green-600" />,
                title: "Accessible Luxury Lodges & Camps",
                description:
                  "Hand-picked accommodations with ramps, roll-in showers, grab bars, and accessible pathways. Stay at &Beyond, Four Seasons, Sanctuary Retreats, and Bisate Lodge.",
                highlights: ["Roll-in Showers", "Ground Floor Rooms", "Ramps & Elevators", "Accessible Dining"],
              },
              {
                icon: <Users className="w-10 h-10 text-purple-600" />,
                title: "Disability-Trained Safari Guides",
                description:
                  "Guides certified in accessibility support, sign language, and inclusive communication. Minimum 5 years experience with disabled travelers.",
                highlights: ["BSL Trained", "Patient & Empathetic", "Medical First Aid", "Multilingual"],
              },
              {
                icon: <Heart className="w-10 h-10 text-red-600" />,
                title: "24/7 Medical & Emergency Support",
                description:
                  "Registered nurse on every tour. Oxygen, medications, and Flying Doctors evacuation coverage included. Real-time health monitoring available.",
                highlights: ["Nurse On-Site", "Oxygen Supply", "Evacuation Plan", "24/7 Hotline"],
              },
              {
                icon: <CheckCircle className="w-10 h-10 text-amber-600" />,
                title: "Fully Customizable Itineraries",
                description:
                  "Tailored pacing, rest stops, and activities based on your mobility level, energy, and interests. No rushed schedules.",
                highlights: ["Flexible Timing", "Rest Days", "Private Tours", "Family-Friendly"],
              },
              {
                icon: <Users className="w-10 h-10 text-cyan-600" />,
                title: "Caregivers Travel Free",
                description:
                  "Personal assistants and caregivers join at no extra cost (park fees excluded). Private rooms and meals provided.",
                highlights: ["Free for 1 Caregiver", "Private Room", "All Meals", "Airport Assistance"],
              },
            ].map((feature, idx) => (
              <Card key={idx} className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mb-4">{feature.icon}</div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4">{feature.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {feature.highlights.map((h, i) => (
                      <span key={i} className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
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

      {/* Featured Accessible Tours */}
      <section id="featured-tours" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Wheelchair Accessible Safari Tours in East Africa 2025-2026
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Choose from {accessibleTours.length} fully accessible safari packages in{" "}
              <strong>Kenya</strong>, <strong>Tanzania</strong>, <strong>Rwanda</strong>, and{" "}
              <strong>Uganda</strong>. Each tour includes adapted vehicles, accessible lodges, and medical support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {accessibleTours.map((tour, idx) => (
              <Link key={tour.id} href={`/disabilities-accessible-tours/${tour.slug}`}>
                <Card className="h-full hover:shadow-xl transition-all duration-300 cursor-pointer group border-0 shadow-md">
                  <div className="relative aspect-video bg-slate-200 rounded-t-lg overflow-hidden">
                    <img
                      src={tour.image || "/placeholder.svg"}
                      alt={`${tour.title} - Wheelchair Accessible Safari in ${tour.country} | Jae Travel`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading={idx < 3 ? "eager" : "lazy"}
                    />
                    <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full flex items-center gap-1 text-sm font-bold">
                      <Accessibility size={16} />
                      <span>Accessible</span>
                    </div>
                    <div className="absolute bottom-4 right-4 bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {tour.duration}
                    </div>
                  </div>
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="secondary">{tour.country}</Badge>
                      {tour.popular && (
                        <Badge className="bg-amber-600 text-white">Most Popular</Badge>
                      )}
                    </div>
                    <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                      {tour.title}
                    </CardTitle>
                    <CardDescription className="line-clamp-2">
                      {tour.shortDescription}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center mb-4">
                      <div>
                        <span className="text-3xl font-bold text-blue-600">
                          ${tour.price.toLocaleString()}
                        </span>
                        <span className="text-sm text-slate-500">/person</span>
                      </div>
                      <ChevronRight className="w-6 h-6 text-blue-600 group-hover:translate-x-1 transition-transform" />
                    </div>
                    <div className="space-y-2 text-sm text-slate-600">
                      <div className="font-semibold text-blue-700 mb-1">Accessibility Features:</div>
                      <ul className="space-y-1">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600" /> Wheelchair vehicle access
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600" /> Accessible luxury lodge
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600" /> Medical support included
                        </li>
                      </ul>
                    </div>
                    <Button className="w-full mt-4 bg-blue-600 hover:bg-blue-700">
                      View Tour Details
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link href="/disabilities-accessible-tours">
              <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                View All {accessibleTours.length} Accessible Tours
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Accessibility Standards & Certifications */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            International Accessibility Standards We Meet
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Shield className="w-8 h-8 text-blue-600" />
                Certifications & Partnerships
              </h3>
              <ul className="space-y-4 text-slate-700">
                <li className="flex items-start gap-3">
                  <Award className="w-6 h-6 text-amber-600 mt-1 flex-shrink-0" />
                  <div>
                    <strong>ISO 21902:2021</strong> – Tourism for All Certified
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Award className="w-6 h-6 text-amber-600 mt-1 flex-shrink-0" />
                  <div>
                    <strong>KATO Accessibility Partner</strong> – Kenya Association of Tour Operators
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Award className="w-6 h-6 text-amber-600 mt-1 flex-shrink-0" />
                  <div>
                    <strong>Member of ENAT</strong> – European Network for Accessible Tourism
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Award className="w-6 h-6 text-amber-600 mt-1 flex-shrink-0" />
                  <div>
                    <strong>Trained by Access Israel</strong> – Global accessibility experts
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Globe className="w-8 h-8 text-green-600" />
                Compliance Standards
              </h3>
              <ul className="space-y-4 text-slate-700">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>ADA-compliant vehicle modifications</div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>WCAG 2.1 website accessibility</div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>Roll-in showers with seats & grab bars</div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>Emergency evacuation chairs in all lodges</div>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-blue-50 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Trusted by Global Accessibility Leaders</h3>
            <div className="flex flex-wrap justify-center gap-8 items-center opacity-70">
              <div className="text-2xl">ENAT</div>
              <div className="text-2xl">Access Israel</div>
              <div className="text-2xl">Wheel the World</div>
              <div className="text-2xl">Disabled Holidays</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            What Travelers Say About Our Accessible Safaris
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "James O'Connor",
                location: "Dublin, Ireland",
                quote:
                  "As a wheelchair user, I never thought I'd see the Great Migration. Jae Travel made it possible with their adapted vehicle and amazing guide. Life-changing!",
                rating: 5,
                tour: "Accessible Masai Mara Safari",
              },
              {
                name: "Maria Gonzalez",
                location: "Madrid, Spain",
                quote:
                  "The accessible lodge in Serengeti had a roll-in shower and ramp to the deck. The nurse checked on me daily. Felt completely safe and included.",
                rating: 5,
                tour: "Wheelchair Tanzania Safari",
              },
              {
                name: "Aisha Mohammed",
                location: "Nairobi, Kenya",
                quote:
                  "My son has cerebral palsy. This was his first safari. The team was patient, kind, and professional. We'll be back next year!",
                rating: 5,
                tour: "Family Accessible Kenya Tour",
              },
            ].map((t, idx) => (
              <Card key={idx} className="relative">
                <CardContent className="pt-8">
                  <div className="text-4xl text-amber-400 mb-4">&quot;</div>
                  <p className="text-slate-700 mb-6 italic">&quot;{t.quote}&quot;</p>
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                  </div>
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-sm text-slate-500">{t.location}</div>
                  <div className="text-xs text-blue-600 mt-2">{t.tour}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="text-5xl font-bold text-blue-600">4.9/5</div>
            <div className="text-slate-600 mb-4">Based on 200+ accessibility reviews</div>
            <div className="flex justify-center gap-4">
              <div className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
                5.0 TripAdvisor
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
            Frequently Asked Questions About Accessible Safaris
          </h2>

          <div className="space-y-6">
            {faqItems.map((faq, idx) => (
              <details key={idx} className="bg-white rounded-lg shadow-sm">
                <summary className="px-6 py-4 font-semibold cursor-pointer hover:text-blue-600 transition-colors flex justify-between items-center">
                  {faq.question}
                  <ChevronRight className="w-5 h-5 transition-transform group-open:rotate-90" />
                </summary>
                <div className="px-6 pb-4 text-slate-600">
                  <p className="leading-relaxed">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>

          <div className="mt-12 text-center bg-blue-50 rounded-xl p-8">
            <h3 className="text-xl font-bold mb-2">Need More Information?</h3>
            <p className="text-slate-600 mb-4">
              Our accessibility specialists are available 24/7 to answer your questions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="tel:+254700000000">
                <Button className="bg-blue-600 hover:bg-blue-700">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                  <Mail className="w-4 h-4 mr-2" />
                  Send Email
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Limited Offer: Free Accessibility Consultation + 10% Off
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Book your <strong>wheelchair accessible safari in Kenya</strong> or{" "}
            <strong>inclusive East Africa tour</strong> by December 31, 2025 and get a{" "}
            <strong>free accessibility assessment</strong> + <strong>10% discount</strong>.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link href="/disabilities-accessible-tours">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-slate-100 text-lg px-8">
                Browse Accessible Tours
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8"
              >
                Get Free Quote
              </Button>
            </Link>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" /> ATOL Protected
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" /> Best Price Guarantee
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" /> Flexible Payments
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" /> 24/7 Support
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}