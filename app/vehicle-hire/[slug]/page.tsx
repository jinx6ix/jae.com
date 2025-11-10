// app/vehicle-hire/[slug]/page.tsx
import { getVehicleBySlug, getAllVehicles } from "@/lib/vehicles"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { SchemaRenderer } from "@/components/schema-renderer"
import { generateBreadcrumbSchema } from "@/lib/seo-utils"
import Link from "next/link"
import { CheckCircle, Truck } from "lucide-react"
import Image from "next/image"

export async function generateStaticParams() {
  const vehicles = getAllVehicles()
  return vehicles.map((v) => ({
    slug: v.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const vehicle = getVehicleBySlug(slug)
  if (!vehicle) return {}

  return {
    title: vehicle.metaTitle,
    description: vehicle.metaDescription,
    keywords: Array.isArray(vehicle.keywords) ? vehicle.keywords.join(", ") : vehicle.keywords || "",
  }
}

export default async function VehiclePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const vehicle = getVehicleBySlug(slug)
  if (!vehicle) notFound()

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Vehicle Hire", url: "/vehicle-hire" },
    { name: vehicle.name, url: `/vehicle-hire/${vehicle.slug}` },
  ]

  // Check if image exists, fallback to placeholder
  const imageSrc = vehicle.image || "/placeholder.svg"

  return (
    <main>
      <SchemaRenderer schema={generateBreadcrumbSchema(breadcrumbs)} />

      {/* Hero */}
      <section className="relative h-96 bg-slate-200 overflow-hidden">
        <Image
          src={imageSrc}
          alt={vehicle.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex items-end">
          <div className="p-8 text-white">
            <div className="flex items-center gap-2 mb-2">
              <Truck size={28} />
              <Badge className="bg-amber-600">Vehicle Rental</Badge>
            </div>
            <h1 className="text-4xl font-bold">{vehicle.name}</h1>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {/* Description */}
            <div className="mb-8">
              <p className="text-lg text-slate-700 leading-relaxed">{vehicle.longDescription}</p>
            </div>

            {/* Specs */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Vehicle Specifications</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-sm text-slate-600">Seating</div>
                    <div className="text-2xl font-bold">{vehicle.specs.seating}</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-sm text-slate-600">Transmission</div>
                    <div className="text-2xl font-bold">{vehicle.specs.transmission}</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-sm text-slate-600">Fuel</div>
                    <div className="text-2xl font-bold">{vehicle.specs.fuelType}</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-sm text-slate-600">Wheelbase</div>
                    <div className="text-2xl font-bold">{vehicle.specs.wheelBase}</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-sm text-slate-600">Ground Clearance</div>
                    <div className="text-2xl font-bold">{vehicle.specs.groundClearance}</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-sm text-slate-600">Daily Rate</div>
                    <div className="text-2xl font-bold text-amber-600">${vehicle.pricePerDay}</div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Features */}
            {vehicle.features && vehicle.features.length > 0 && (
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Features</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {vehicle.features.map((feature, idx) => (
                    <li key={idx} className="flex gap-2 text-slate-700">
                      <CheckCircle size={20} className="text-green-600 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Included Services */}
            {vehicle.includedServices && vehicle.includedServices.length > 0 && (
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Included Services</h2>
                <ul className="space-y-2">
                  {vehicle.includedServices.map((service, idx) => (
                    <li key={idx} className="flex gap-2 text-slate-700">
                      <CheckCircle size={20} className="text-green-600 flex-shrink-0" />
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Pricing */}
            {vehicle.rentalPeriods && vehicle.rentalPeriods.length > 0 && (
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Rental Periods & Pricing</h2>
                <div className="overflow-x-auto">
                  <table className="w-full border border-slate-300">
                    <thead className="bg-slate-100">
                      <tr>
                        <th className="p-3 text-left">Duration</th>
                        <th className="p-3 text-right">Daily Rate</th>
                        <th className="p-3 text-right">Total Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      {vehicle.rentalPeriods.map((period, idx) => (
                        <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                          <td className="p-3 font-semibold">{period.duration}</td>
                          <td className="p-3 text-right">${period.dailyRate}</td>
                          <td className="p-3 text-right font-bold text-amber-600">${period.totalPrice}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Add-ons */}
            {vehicle.addOns && vehicle.addOns.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold mb-4">Optional Add-ons</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {vehicle.addOns.map((addon, idx) => (
                    <Card key={idx}>
                      <CardContent className="pt-6 flex justify-between items-center">
                        <div className="font-semibold">{addon.name}</div>
                        <div className="text-lg font-bold text-amber-600">+${addon.price}</div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Booking Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <Card className="border-2 border-amber-600">
                <CardHeader className="bg-amber-600 text-white">
                  <CardTitle>Book {vehicle.name}</CardTitle>
                  <CardDescription className="text-amber-100">Secure your rental vehicle</CardDescription>
                </CardHeader>
                <CardContent className="pt-6 space-y-4">
                  <div className="bg-amber-50 p-4 rounded-lg">
                    <div className="text-sm text-slate-600 mb-1">Starting at</div>
                    <div className="text-3xl font-bold text-amber-600">${vehicle.pricePerDay}</div>
                    <div className="text-sm text-slate-600">per day</div>
                  </div>

                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-2">
                      <CheckCircle size={18} className="text-green-600" />
                      <span>Professional driver included</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle size={18} className="text-green-600" />
                      <span>Full insurance coverage</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle size={18} className="text-green-600" />
                      <span>GPS navigation system</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle size={18} className="text-green-600" />
                      <span>24/7 support available</span>
                    </div>
                  </div>

                  <Button className="w-full bg-amber-600 hover:bg-amber-700 py-6 text-lg font-bold">
                    Request Booking
                  </Button>

                  <p className="text-xs text-slate-600 text-center">
                    Our team will contact you within 2 hours to confirm availability and finalize details.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Related Vehicles */}
      <section className="py-12 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Other Available Vehicles</h2>
          <Link href="/vehicle-hire">
            <Button className="bg-amber-600 hover:bg-amber-700">View All Vehicles</Button>
          </Link>
        </div>
      </section>
    </main>
  )
}