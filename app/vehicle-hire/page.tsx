import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { SchemaRenderer } from "@/components/schema-renderer"
import { generateBreadcrumbSchema } from "@/lib/seo-utils"
import { getAllVehicles } from "@/lib/vehicles"
import Link from "next/link"
import { Truck, Users, MapPin, Zap, Shield, Clock, Camera, Tent, Accessibility, Car } from "lucide-react"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Safari Vehicle Rental | Land Cruiser, Prado, Camping Vehicles | Jae Travel",
  description:
    "Rent safari vehicles in East Africa. Toyota Land Cruiser, Prado, luxury rooftop camping, photography vehicles, wheelchair-accessible, and family minivans. Professional drivers included.",
  keywords:
    "safari vehicle rental, Land Cruiser rental, Prado rental, camping vehicle, photography vehicle, vehicle hire africa, safari car rental, east africa vehicles, 4x4 safari hire Kenya, Toyota Prado rental Nairobi, pop-up roof Land Cruiser, wheelchair accessible safari van, family safari minivan, professional driver guide, Masai Mara vehicle hire, Serengeti safari rental",
  openGraph: {
    title: "Safari Vehicle Rental in Kenya & East Africa | Jae Travel",
    description: "Premium 4x4 safari vehicles with expert driver-guides. Land Cruisers, Prados, camping-equipped, photography & accessible options available.",
    url: "https://jaetravel.com/vehicle-hire",
    type: "website",
    images: [
      {
        url: "/og-safari-vehicles.jpg",
        width: 1200,
        height: 630,
        alt: "Safari Vehicle Fleet - Land Cruiser, Prado, Camping & Photography Vehicles",
      },
    ],
  },
  alternates: {
    canonical: "/vehicle-hire",
  },
}

export default function VehicleHirePage() {
  const vehicles = getAllVehicles()
  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Vehicle Hire", url: "/vehicle-hire" },
  ]

  const benefits = [
    {
      icon: <Truck className="w-8 h-8 text-blue-600" />,
      title: "Professional Fleet",
      description: "Well-maintained vehicles including Toyota Land Cruiser and Prado models.",
    },
    {
      icon: <Users className="w-8 h-8 text-green-600" />,
      title: "Expert Drivers",
      description: "Experienced guides who know wildlife patterns and routes intimately.",
    },
    {
      icon: <Shield className="w-8 h-8 text-amber-600" />,
      title: "Full Insurance",
      description: "Comprehensive insurance coverage included with all rentals.",
    },
    {
      icon: <MapPin className="w-8 h-8 text-red-600" />,
      title: "All Terrains",
      description: "Access remote areas safely with vehicles designed for African conditions.",
    },
    {
      icon: <Zap className="w-8 h-8 text-purple-600" />,
      title: "GPS Navigation",
      description: "Advanced navigation systems and communication equipment included.",
    },
    {
      icon: <Clock className="w-8 h-8 text-cyan-600" />,
      title: "Flexible Periods",
      description: "Daily, weekly, monthly rates with special discounts on longer rentals.",
    },
  ]

  return (
    <main>
      <SchemaRenderer schema={generateBreadcrumbSchema(breadcrumbs)} />

      {/* Hero */}
      <section className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Safari Vehicle Rental in Kenya & East Africa</h1>
          <p className="text-xl text-slate-200 max-w-3xl mx-auto mb-6">
            Experience the ultimate African safari with our premium fleet of 4x4 vehicles, including extended Toyota Land Cruisers with pop-up roofs, luxury Prados, fully equipped rooftop camping vehicles, specialized photography rigs, wheelchair-accessible vans, and spacious family minivans. Every rental includes a professional English-speaking driver-guide.
          </p>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto mb-8">
            Based in Nairobi, Jae Travel offers reliable, well-maintained safari vehicles for Masai Mara, Serengeti, Amboseli, Tsavo, Lake Nakuru, Samburu, and beyond. Whether you&apos;re a solo photographer, a couple on honeymoon, a family with kids, or a group needing accessibility, we have the perfect vehicle for your adventure.
          </p>
          <Badge className="bg-amber-600 text-white text-base px-4 py-2">6 Specialized Vehicle Types Available</Badge>
        </div>
      </section>

      {/* Intro Paragraphs */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-lg leading-relaxed space-y-6">
          <p>
            <strong>Safari vehicle rental in Kenya</strong> has never been easier. At Jae Travel, we specialize in providing high-quality, purpose-built 4x4 safari vehicles that guarantee comfort, safety, and unmatched wildlife viewing. All our vehicles feature <strong>pop-up roofs</strong> for 360° game viewing, guaranteed window seats, fridge/cooler boxes, charging ports, and HF radios for safety in remote areas.
          </p>
          <p>
            Our fleet includes the legendary <strong>Toyota Land Cruiser (extended version)</strong> – the gold standard for African safaris – alongside the versatile <strong>Toyota Prado TX</strong>, luxury rooftop tent-equipped campers, custom photography vehicles with bean bags and gimbal mounts, <strong>wheelchair-accessible safari vans</strong> with hydraulic lifts, and comfortable 7–9 seater family minivans with child seats available.
          </p>
          <p>
            Every vehicle comes with a <strong>professional driver-guide</strong> who is also a certified field guide, trained in wildlife behavior, photography assistance, and emergency first aid. We handle all fuel, maintenance, park fees for the driver, and comprehensive insurance – you just focus on the adventure.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-center">Why Choose Jae Travel for Safari Vehicle Hire</h2>
          <p className="text-center text-lg text-slate-600 max-w-3xl mx-auto mb-12">
            We don’t just rent vehicles – we deliver complete safari solutions with unmatched reliability, local expertise, and attention to detail.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, idx) => (
              <Card key={idx} className="h-full">
                <CardContent className="pt-6 flex flex-col h-full">
                  <div className="mb-4">{benefit.icon}</div>
                  <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
                  <p className="text-slate-700 grow">
                    {benefit.description}
                    {idx === 0 && " All vehicles undergo daily safety checks and are serviced every 5,000 km."}
                    {idx === 1 && " Our guides average 12+ years of experience and speak English, French, German, or Spanish."}
                    {idx === 2 && " Includes third-party, theft, and collision damage waiver (CDW) with zero excess."}
                    {idx === 3 && " High ground clearance, snorkels, and off-road tires ensure access to even the most remote corners."}
                    {idx === 4 && " Garmin inReach, satellite phones, and live GPS tracking for your peace of mind."}
                    {idx === 5 && " Save up to 25% on rentals over 10 days. Monthly rates available for long-term expeditions."}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Vehicles Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-center">Our Safari Vehicle Fleet</h2>
          <p className="text-center text-lg text-slate-600 max-w-3xl mx-auto mb-12">
            Choose from 6 specialized vehicle types designed for every safari style – from luxury game drives to multi-week overland camping expeditions.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {vehicles.map((vehicle) => (
              <Card key={vehicle.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-slate-200 overflow-hidden relative">
                  <Image
                    src={vehicle.image || "/placeholder.svg"}
                    alt={`${vehicle.name} - ${vehicle.description} | Jae Travel Safari Vehicle Rental`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    width={600}
                    height={400}
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-amber-600 text-white">From ${vehicle.pricePerDay}/day</Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    {vehicle.name.includes("Land Cruiser") && <Truck className="w-6 h-6" />}
                    {vehicle.name.includes("Prado") && <Car className="w-6 h-6" />}
                    {vehicle.name.includes("Camping") && <Tent className="w-6 h-6" />}
                    {vehicle.name.includes("Photography") && <Camera className="w-6 h-6" />}
                    {vehicle.name.includes("Wheelchair") && <Accessibility className="w-6 h-6" />}
                    {vehicle.name}
                  </CardTitle>
                  <CardDescription>{vehicle.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Quick Stats */}
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <div className="text-sm text-slate-600">Seating</div>
                      <div className="font-bold">{vehicle.specs.seating}</div>
                    </div>
                    <div>
                      <div className="text-sm text-slate-600">Daily Rate</div>
                      <div className="font-bold text-amber-600">${vehicle.pricePerDay}</div>
                    </div>
                    <div>
                      <div className="text-sm text-slate-600">Fuel / Roof</div>
                      <div className="font-bold">{vehicle.specs.fuelType} / {vehicle.specs.roofType}</div>
                    </div>
                  </div>

                  {/* Features */}
                  <div>
                    <div className="font-semibold mb-2 text-sm">Key Features:</div>
                    <ul className="text-sm text-slate-600 space-y-1">
                      {vehicle.features?.slice(0, 3).map((feat, i) => (
                        <li key={i}>• {feat}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Best For */}
352                  <div>
                    <div className="font-semibold mb-2 text-sm">Best For:</div>
                    <div className="flex flex-wrap gap-1">
                      {vehicle.bestFor.slice(0, 3).map((item, idx) => (
                        <Badge key={idx} variant="outline">
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <Link href={`/vehicle-hire/${vehicle.slug}`}>
                    <Button className="w-full bg-amber-600 hover:bg-amber-700">View Details & Book</Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Comparison Table */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Safari Vehicle Comparison Table</h2>
          <p className="text-center text-slate-600 mb-8 max-w-3xl mx-auto">
            Compare seating, pricing, features, and ideal use cases side-by-side to find your perfect safari vehicle.
          </p>
          <div className="overflow-x-auto rounded-lg shadow">
            <table className="w-full border border-slate-300 bg-white">
              <thead className="bg-slate-900 text-white">
                <tr>
                  <th className="p-4 text-left">Vehicle Type</th>
                  <th className="p-4 text-center">Seating</th>
                  <th className="p-4 text-center">Daily Rate (USD)</th>
                  <th className="p-4 text-center">Roof Type</th>
                  <th className="p-4 text-center">Best For</th>
                  <th className="p-4 text-center">Key Feature</th>
                </tr>
              </thead>
<tbody>
          {vehicles.map((vehicle, idx) => (
            <tr
              key={idx}
              className={`${
                idx % 2 === 0 ? "bg-white" : "bg-slate-50"
              } hover:bg-amber-50 transition-colors`}
            >
              <td className="p-4 font-bold border-b">{vehicle.name}</td>
              <td className="p-4 text-center border-b">{vehicle.specs.seating}</td>
              <td className="p-4 text-center font-bold text-amber-600 border-b">
                ${vehicle.pricePerDay}
              </td>
              <td className="p-4 text-center border-b">{vehicle.specs.roofType}</td>
              <td className="p-4 text-sm border-b">{vehicle.bestFor.join(", ")}</td>
              <td className="p-4 text-sm border-b">
                {vehicle.features?.[0] ?? "Premium 4x4"}
              </td>
            </tr>
          ))}
        </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              {
                q: "Do you provide drivers with the vehicles?",
                a: "Yes. Every safari vehicle rental includes a professional English-speaking driver-guide. Self-drive is not permitted on safari due to park regulations and safety."
              },
              {
                q: "What is included in the daily rate?",
                a: "Unlimited mileage, fuel, driver’s salary & allowance, comprehensive insurance, VAT, pop-up roof usage, fridge, charging ports, binoculars, and park fees for the driver."
              },
              {
                q: "Can I rent a vehicle for just one day?",
                a: "Yes. We offer daily, weekly, and monthly rentals. One-day rentals are ideal for Nairobi excursions or airport transfers with game drives."
              },
              {
                q: "Are child seats available?",
                a: "Absolutely. We provide booster seats and baby seats at no extra cost upon request."
              },
              {
                q: "Do you offer airport pickup in the safari vehicle?",
                a: "Yes. We can collect you directly from Jomo Kenyatta (NBO) or Wilson Airport and begin your safari immediately."
              },
              {
                q: "What happens in case of a breakdown?",
                a: "24/7 roadside assistance and a replacement vehicle within 6 hours in major parks. All vehicles carry spare tires, tools, and satellite communication."
              }
            ].map((faq, i) => (
              <details key={i} className="group border-b pb-4">
                <summary className="flex justify-between items-center cursor-pointer font-semibold text-lg">
                  {faq.q}
                  <span className="text-amber-600 group-open:rotate-180 transition-transform">Down Arrow</span>
                </summary>
                <p className="mt-2 text-slate-600 pl-4">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-amber-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Book Your Safari Vehicle?</h2>
          <p className="text-lg mb-8">
            Select your ideal 4x4, choose your dates, and let our team handle permits, routes, and logistics. Start planning your dream East African safari today.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/tours">
              <Button size="lg" className="bg-white text-amber-600 hover:bg-slate-100">
                Browse Safari Tours
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-amber-700 bg-transparent">
                Get a Custom Quote
              </Button>
            </Link>
          </div>
          <p className="mt-8 text-sm">
            Call/WhatsApp: <a href="tel:+254700123456" className="underline">+254 700 123 456</a> | 
            Email: <a href="mailto:vehicles@jaetravel.com" className="underline">vehicles@jaetravel.com</a>
          </p>
        </div>
      </section>
    </main>
  )
}