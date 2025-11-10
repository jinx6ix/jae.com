// app/contact/page.tsx
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { SchemaRenderer } from "@/components/schema-renderer"
import { generateBreadcrumbSchema } from "@/lib/seo-utils"
import { Mail, Phone, MapPin, Clock, Calendar, MessageCircle, Globe, Shield, ChevronRight, Badge } from "lucide-react"

export const metadata = {
  title: "Contact Jae Travel | Safari Booking Kenya, Tanzania, Rwanda | Phone & Email",
  description:
    "Contact Jae Travel Expeditions in Nairobi, Kenya. Call +254 700 123 456, WhatsApp, or email info@jaetravel.co.ke. Book your safari, get custom quotes, or plan your dream East African adventure.",
  keywords:
    "contact jae travel, jae travel phone number, safari booking Kenya, jae travel email, nairobi safari company contact, east africa tours contact, book safari Kenya, jae travel whatsapp, safari inquiry form, custom safari quote",
  openGraph: {
    title: "Contact Jae Travel Expeditions | Nairobi, Kenya",
    description: "Reach our expert safari team 24/7. Phone, WhatsApp, email, or form. Plan your Masai Mara, Serengeti, or gorilla trekking safari today.",
    url: "https://jaetravel.com/contact",
    type: "website",
    images: [
      {
        url: "/og-contact.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Jae Travel - Nairobi Safari Experts",
      },
    ],
  },
  alternates: {
    canonical: "/contact",
  },
}

export default function Contact() {
  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Contact", url: "/contact" },
  ]

  // Current time in EAT (Kenya Time) - Server-side
  const now = new Date()
  const eatTime = now.toLocaleTimeString("en-KE", {
    timeZone: "Africa/Nairobi",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  })
  const eatDate = now.toLocaleDateString("en-KE", {
    timeZone: "Africa/Nairobi",
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <>
      <SchemaRenderer schema={generateBreadcrumbSchema(breadcrumbs)} />
      <main className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
        {/* Hero */}
        <section className="bg-gradient-to-r from-orange-600 to-amber-600 text-white py-20 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Contact Jae Travel</h1>
            <p className="text-xl md:text-2xl text-orange-100 max-w-4xl mx-auto mb-8">
              Your East African safari starts with a conversation. Our Nairobi-based team is ready to help 24/7.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Badge className="bg-white text-orange-600 text-lg px-6 py-2">Open Now</Badge>
              <Badge className="bg-white text-orange-600 text-lg px-6 py-2">
                <Clock className="w-5 h-5 inline mr-1" />
                {eatTime} EAT
              </Badge>
              <Badge className="bg-white text-orange-600 text-lg px-6 py-2">
                <Calendar className="w-5 h-5 inline mr-1" />
                {eatDate}
              </Badge>
            </div>
          </div>
        </section>

        {/* Contact Info + Form */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left: Contact Details */}
              <div className="space-y-10">
                <div>
                  <h2 className="text-4xl font-bold mb-6 text-orange-900">Get In Touch</h2>
                  <p className="text-lg text-slate-700 mb-8">
                    Whether you&apos;re ready to book your <strong>Masai Mara safari</strong>, need a <strong>custom gorilla trekking itinerary</strong>, or just have questions — we&apos;re here to help.
                  </p>
                </div>

                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl mb-1">Email Us</h3>
                      <p className="text-lg">
                        <a
                          href="mailto:info@jaetravel.co.ke"
                          className="text-orange-600 hover:underline font-semibold"
                        >
                          info@jaetravel.co.ke
                        </a>
                      </p>
                      <p className="text-sm text-slate-600 mt-1">Replies within 2 hours during business hours</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl mb-1">WhatsApp / Call</h3>
                      <p className="text-lg">
                        <a
                          href="tel:+254700123456"
                          className="text-orange-600 hover:underline font-semibold"
                        >
                          +254 700 123 456
                        </a>
                      </p>
                      <p className="text-sm text-slate-600 mt-1">Available 24/7 for urgent inquiries</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl mb-1">Visit Our Office</h3>
                      <p className="text-lg font-medium">Jae Travel Expeditions</p>
                      <p className="text-slate-700">
                        Westlands Business Centre, 3rd Floor<br />
                        Westlands, Nairobi, Kenya
                      </p>
                      <p className="text-sm text-slate-600 mt-1">By appointment only</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl mb-1">Business Hours (EAT)</h3>
                      <p className="text-slate-700">
                        <strong>Mon–Fri:</strong> 8:00 AM – 6:00 PM<br />
                        <strong>Saturday:</strong> 9:00 AM – 4:00 PM<br />
                        <strong>Sunday:</strong> Emergency support only
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mt-8">
                  <div className="flex items-center gap-3">
                    <Shield className="w-8 h-8 text-amber-600" />
                    <div>
                      <p className="font-bold text-amber-900">100% Secure & Confidential</p>
                      <p className="text-sm text-amber-700">Your privacy is our priority. All inquiries are encrypted.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Contact Form */}
              <div>
                <h2 className="text-4xl font-bold mb-6 text-orange-900">Send Us a Message</h2>
                <Card className="border-orange-200 shadow-xl">
                  <CardContent className="pt-6">
                    <form className="space-y-5">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-semibold text-slate-700 mb-2">
                            Full Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            required
                            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
                            placeholder="John Doe"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-slate-700 mb-2">
                            Email <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="email"
                            required
                            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
                            placeholder="john@example.com"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">
                          Phone (with country code)
                        </label>
                        <input
                          type="tel"
                          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
                          placeholder="+1 555 123 4567"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">
                          Subject <span className="text-red-500">*</span>
                        </label>
                        <select
                          required
                          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
                        >
                          <option value="">Select an option</option>
                          <option value="booking">Safari Booking Inquiry</option>
                          <option value="custom">Custom Itinerary Request</option>
                          <option value="vehicle">Vehicle Rental</option>
                          <option value="group">Group Travel</option>
                          <option value="general">General Question</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">
                          Message <span className="text-red-500">*</span>
                        </label>
                        <textarea
                          rows={6}
                          required
                          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition resize-none"
                          placeholder="Tell us about your travel dates, group size, budget, and interests..."
                        />
                      </div>

                      <Button
                        type="submit"
                        className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 text-lg rounded-lg shadow-lg transition-all duration-300"
                      >
                        Send Message
                      </Button>

                      <p className="text-center text-sm text-slate-500 mt-4">
                        We respond to all inquiries within <strong>2 hours</strong> during business hours.
                      </p>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Actions */}
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-orange-900">Start Planning Your Safari</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Link href="/tours">
                <Card className="h-full text-center hover:shadow-xl transition-shadow cursor-pointer border-orange-100 group">
                  <CardContent className="pt-8">
                    <Globe className="w-12 h-12 mx-auto mb-4 text-orange-600 group-hover:scale-110 transition-transform" />
                    <h3 className="text-xl font-bold mb-2">Browse All Tours</h3>
                    <p className="text-slate-600 mb-4">Explore 20+ handcrafted safari packages</p>
                    <span className="text-orange-600 font-semibold flex items-center justify-center gap-1">
                      View Tours <ChevronRight className="w-4 h-4" />
                    </span>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/vehicle-hire">
                <Card className="h-full text-center hover:shadow-xl transition-shadow cursor-pointer border-orange-100 group">
                  <CardContent className="pt-8">
                    <div className="w-12 h-12 mx-auto mb-4 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center">
                      <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M3 5a2 2 0 012-2h10a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z" />
                        <path d="M7 7h6v2H7V7z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold mb-2">Rent Safari Vehicle</h3>
                    <p className="text-slate-600 mb-4">Land Cruisers, Prados, camping 4x4s</p>
                    <span className="text-orange-600 font-semibold flex items-center justify-center gap-1">
                      View Fleet <ChevronRight className="w-4 h-4" />
                    </span>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/destinations">
                <Card className="h-full text-center hover:shadow-xl transition-shadow cursor-pointer border-orange-100 group">
                  <CardContent className="pt-8">
                    <MapPin className="w-12 h-12 mx-auto mb-4 text-orange-600 group-hover:scale-110 transition-transform" />
                    <h3 className="text-xl font-bold mb-2">Explore Destinations</h3>
                    <p className="text-slate-600 mb-4">Kenya, Tanzania, Rwanda, Uganda</p>
                    <span className="text-orange-600 font-semibold flex items-center justify-center gap-1">
                      View Map <ChevronRight className="w-4 h-4" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-orange-900">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {[
                {
                  q: "How quickly do you respond to inquiries?",
                  a: "We reply to all messages within 2 hours during business hours (8 AM – 6 PM EAT). After-hours and weekend inquiries are answered by 9 AM the next business day.",
                },
                {
                  q: "Can I book a safari on WhatsApp?",
                  a: "Yes! WhatsApp is our fastest channel. Send us your dates, group size, and interests to +254 700 123 456 and get a quote in minutes.",
                },
                {
                  q: "Do you offer payment plans?",
                  a: "Yes. Pay 30% deposit to secure your booking, balance due 30 days before departure. We accept bank transfer, M-Pesa, and credit cards.",
                },
                {
                  q: "Is travel insurance required?",
                  a: "Highly recommended. We can include comprehensive coverage in your package or help you purchase it separately.",
                },
              ].map((faq, i) => (
                <details key={i} className="group border-b border-slate-200 pb-4">
                  <summary className="flex justify-between items-center cursor-pointer font-semibold text-lg text-slate-800">
                    {faq.q}
                    <span className="text-orange-600 group-open:rotate-180 transition-transform">Down Arrow</span>
                  </summary>
                  <p className="mt-3 text-slate-600 pl-4 leading-relaxed">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 px-4 bg-gradient-to-r from-orange-600 to-amber-600 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Your African Adventure Awaits
            </h2>
            <p className="text-xl mb-10">
              Let our Nairobi-based experts design your perfect safari. Contact us now — we&apos;re open!
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button asChild size="lg" className="bg-white text-orange-600 hover:bg-orange-50 font-bold text-lg px-8">
                <a href="https://wa.me/254700123456" target="_blank" rel="noopener">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Chat on WhatsApp
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-orange-700 font-bold text-lg px-8">
                <a href="tel:+254700123456">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </a>
              </Button>
            </div>
            <p className="mt-8 text-lg">
              WhatsApp/Call: <a href="tel:+254700123456" className="underline font-bold">+254 700 123 456</a> | 
              Email: <a href="mailto:info@jaetravel.co.ke" className="underline font-bold">info@jaetravel.co.ke</a>
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}