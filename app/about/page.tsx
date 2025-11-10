// app/about/page.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import Image from "next/image"
import {
  Leaf,
  Users,
  Award,
  HeartHandshake,
  ShieldCheck,
  Globe,
  Calendar,
  MapPin,
  Phone,
  Mail,
  ChevronRight,
  Star,
} from "lucide-react"

export const metadata = {
  title: "About Jae Travel Expeditions - Your Trusted East African Safari Company",
  description:
    "Learn about Jae Travel Expeditions, a premier East African safari tour operator since 2010. Expert guides, sustainable tourism, and unforgettable experiences.",
  keywords:
    "about jae travel, safari company, east africa tour operator, wildlife conservation, luxury safaris, sustainable travel, kenya tanzania rwanda uganda safaris",
  openGraph: {
    title: "About Jae Travel Expeditions - Premier East African Safari Operator",
    description:
      "15+ years of excellence in sustainable, authentic, and inclusive safari adventures across Kenya, Tanzania, Rwanda, and Uganda.",
    images: ["/og-about.jpg"],
    url: "https://jaetravel.com/about",
  },
}

export default function About() {
  return (
    <>
      <main className="min-h-screen bg-gradient-to-b from-white to-orange-50">
        {/* Hero Section */}
        <section className="relative py-24 px-4 bg-gradient-to-br from-orange-600 via-orange-500 to-amber-600 text-white overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="relative max-w-7xl mx-auto text-center">
            <Badge className="mb-4 bg-white text-orange-600 hover:bg-white">
              Established 2010 • Nairobi, Kenya
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              About Jae Travel Expeditions
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 opacity-95">
              Your Gateway to Authentic, Sustainable, and Transformative East African Safari Experiences
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50 font-semibold">
                <Calendar className="mr-2 h-5 w-5" />
                Plan Your Safari
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-600">
                <Mail className="mr-2 h-5 w-5" />
                Contact Our Team
              </Button>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20 px-4 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <Badge variant="secondary" className="mb-4">
                Our Journey
              </Badge>
              <h2 className="text-4xl font-bold mb-6 text-orange-600">Our Story</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Founded in 2010 by <strong>James &quot;Jae&quot; Omondi</strong>, a third-generation Kenyan safari guide,
                  Jae Travel Expeditions began with a simple vision: to share the magic of East Africa&apos;s wild
                  places with the world in a way that honors both nature and people.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  What started as a single Land Cruiser and a passion for wildlife has grown into one of East
                  Africa&apos;s most respected safari operators, serving over <strong>10,000 travelers</strong> from
                  80+ countries.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Today, we operate across <strong>Kenya, Tanzania, Rwanda, and Uganda</strong>, with a team of
                  <strong>50+ certified guides</strong> who are not just experts in wildlife — they are storytellers,
                  conservationists, and ambassadors for their homeland.
                </p>
              </div>
            </div>
            <div className="relative h-96 rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/about/jae-team-safari.jpg"
                alt="Jae Travel Expeditions team on safari in Masai Mara"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <p className="text-sm font-medium">The Jae Travel Team • Masai Mara, 2024</p>
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-orange-200 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-3xl text-orange-600">15+ Years</CardTitle>
                  <Award className="h-8 w-8 text-orange-600" />
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Of excellence in East African safari tourism and wildlife conservation leadership
                </p>
              </CardContent>
            </Card>

            <Card className="border-orange-200 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-3xl text-orange-600">10,000+</CardTitle>
                  <Users className="h-8 w-8 text-orange-600" />
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Happy travelers who&apos;ve experienced life-changing safari adventures with us
                </p>
              </CardContent>
            </Card>

            <Card className="border-orange-200 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-3xl text-orange-600">50+</CardTitle>
                  <HeartHandshake className="h-8 w-8 text-orange-600" />
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Expert guides and staff dedicated to making your safari perfect and sustainable
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="max-w-7xl mx-auto" />

        {/* Core Values */}
        <section className="py-20 px-4 bg-gradient-to-b from-orange-50 to-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <Badge variant="secondary" className="mb-4">
                Our Foundation
              </Badge>
              <h2 className="text-4xl font-bold mb-6 text-orange-600">Our Core Values</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Every safari we design is built on these unbreakable principles
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Leaf className="h-10 w-10 text-green-600 mb-3" />
                  <CardTitle className="text-2xl">Sustainability First</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    We partner with <strong>WWF, African Wildlife Foundation</strong>, and local conservancies.
                    <strong> 10% of every booking</strong> funds anti-poaching, habitat restoration, and community
                    education programs.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Globe className="h-10 w-10 text-blue-600 mb-3" />
                  <CardTitle className="text-2xl">Authenticity Guaranteed</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    No staged encounters. No tourist traps. Only <strong>genuine cultural exchanges</strong> and
                    <strong> real wildlife moments</strong> guided by locals who live and breathe this land.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <ShieldCheck className="h-10 w-10 text-orange-600 mb-3" />
                  <CardTitle className="text-2xl">Uncompromising Quality</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    From <strong>hand-picked luxury lodges</strong> to <strong>custom-built safari vehicles</strong>
                    with USB charging and fridges — every detail is designed for comfort, safety, and immersion.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Users className="h-10 w-10 text-purple-600 mb-3" />
                  <CardTitle className="text-2xl">True Accessibility</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    We lead the industry in <strong>inclusive safari design</strong> — wheelchair-accessible
                    vehicles, sign language guides, and adaptive itineraries for travelers with disabilities.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <Badge variant="secondary" className="mb-4">
                The Jae Difference
              </Badge>
              <h2 className="text-4xl font-bold mb-6 text-orange-600">Why Choose Jae Travel</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We don&apos;t just take you on safari — we create experiences that change how you see the world
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Star className="h-8 w-8" />,
                  title: "Expert Local Guides",
                  desc: "Bronze, Silver & Gold-certified guides with 500+ safaris each. Fluent in English, French, German & Spanish.",
                },
                {
                  icon: <MapPin className="h-8 w-8" />,
                  title: "Exclusive Access",
                  desc: "Private conservancy partnerships mean off-road driving, night drives, and walking safaris unavailable in public parks.",
                },
                {
                  icon: <ShieldCheck className="h-8 w-8" />,
                  title: "All-Inclusive & Transparent",
                  desc: "No hidden fees. Park fees, meals, drinks, laundry, and emergency evacuation insurance included in every quote.",
                },
                {
                  icon: <Phone className="h-8 w-8" />,
                  title: "24/7 Concierge Support",
                  desc: "Dedicated trip manager + WhatsApp hotline. Real humans, not bots — before, during, and after your safari.",
                },
                {
                  icon: <Leaf className="h-8 w-8" />,
                  title: "Carbon Neutral Safaris",
                  desc: "Full carbon offset + tree planted per guest. Verified by Gold Standard. Track your impact in your trip portal.",
                },
                {
                  icon: <Users className="h-8 w-8" />,
                  title: "Community Impact",
                  desc: "Support 12 schools, 3 clinics, and 500+ women artisans through our bookings. See your impact report post-trip.",
                },
              ].map((item, i) => (
                <Card key={i} className="hover:shadow-lg transition-all duration-300 group">
                  <CardHeader>
                    <div className="text-orange-600 mb-3 group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Trust Badges */}
            <div className="mt-16 text-center">
              <p className="text-sm text-gray-500 mb-6">Trusted By</p>
              <div className="flex flex-wrap justify-center gap-8 items-center">
                <Badge variant="outline" className="text-lg px-4 py-2">
                  KATO Member
                </Badge>
                <Badge variant="outline" className="text-lg px-4 py-2">
                  ATTA Partner
                </Badge>
                <Badge variant="outline" className="text-lg px-4 py-2">
                  GSTC Certified
                </Badge>
                <Badge variant="outline" className="text-lg px-4 py-2">
                  4.9/5 on TripAdvisor
                </Badge>
                <Badge variant="outline" className="text-lg px-4 py-2">
                  BBC Featured
                </Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Team Leadership */}
        <section className="py-20 px-4 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              Meet Our Leadership
            </Badge>
            <h2 className="text-4xl font-bold mb-6 text-orange-600">Led by Passionate Experts</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "James 'Jae' Omondi",
                role: "Founder & Chief Safari Architect",
                bio: "30+ years guiding. Former KWS ranger. Speaks 5 languages. Passionate about gorilla conservation.",
                img: "/team/jae.jpg",
              },
              {
                name: "Dr. Amina Hassan",
                role: "Head of Sustainability",
                bio: "PhD in Conservation Biology. Leads carbon programs and community partnerships across 4 countries.",
                img: "/team/amina.jpg",
              },
              {
                name: "Michael Kipchoge",
                role: "Guest Experience Director",
                bio: "Hospitality veteran. Ensures every detail — from dietary needs to surprise celebrations — is perfect.",
                img: "/team/michael.jpg",
              },
            ].map((person, i) => (
              <Card key={i} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-64 bg-gray-200">
                  <Image
                    src={person.img}
                    alt={person.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{person.name}</CardTitle>
                  <p className="text-orange-600 font-medium">{person.role}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">{person.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-orange-600 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Ready for Your East African Adventure?</h2>
            <p className="text-xl mb-8 opacity-90">
              Let our experts design your perfect safari — tailored to your interests, pace, and budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50 font-semibold">
                <ChevronRight className="ml-2 h-5 w-5" />
                Get Your Free Safari Quote
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-600">
                <Phone className="mr-2 h-5 w-5" />
                Call +254 700 123 456
              </Button>
            </div>
            <p className="mt-6 text-sm opacity-75">
              <strong>100% customized</strong> • <strong>No obligation</strong> • <strong>Reply in &lt;2 hours</strong>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}