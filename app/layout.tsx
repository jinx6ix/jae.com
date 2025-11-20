// app/layout.tsx
import type React from "react"
import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { SchemaRenderer } from "@/components/schema-renderer"
import { generateOrganizationSchema } from "@/lib/seo-utils"
import "./globals.css"
import { Analytics } from "@vercel/analytics/react"
import Script from "next/script"

export const metadata: Metadata = {
  metadataBase: new URL("https://jaetravel.com"),
  title: {
    default: "Jae Travel Expeditions | East African Safari Tours & Packages",
    template: "%s | Jae Travel Expeditions",
  },
  description:
    "Discover authentic East African safaris in Kenya, Tanzania, Rwanda & Uganda. Expert local guides, luxury lodges, 4x4 vehicles, and unforgettable wildlife experiences. Book your dream safari today.",
  keywords:
    "east africa safari, kenya safari tours, tanzania safari packages, rwanda gorilla trekking, uganda wildlife safari, masai mara migration, serengeti safari, luxury safari kenya, budget safari tanzania, private safari east africa, jae travel expeditions",
  generator: "Next.js 16",
  applicationName: "Jae Travel Expeditions",
  referrer: "origin-when-cross-origin",
  authors: [{ name: "Jae Travel Team", url: "https://jaetravel.com/about" }],
  creator: "Jae Travel Expeditions",
  publisher: "Jae Travel Expeditions",
  formatDetection: { email: true, telephone: true, address: false },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: "https://jaetravel.com",
    languages: {
      "en-US": "https://jaetravel.com",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://jaetravel.com",
    siteName: "Jae Travel Expeditions",
    title: "Jae Travel Expeditions - East African Safari Tours",
    description: "Expert-led wildlife safaris across Kenya, Tanzania, Rwanda & Uganda. Luxury, budget, family, photography & private tours.",
    images: [
      {
        url: "/og-home.jpg",
        width: 1200,
        height: 630,
        alt: "Jae Travel Expeditions - Big Five Safari in Masai Mara, Kenya",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@jaetravel",
    creator: "@jaetravel",
    title: "JaeTravel Expeditions - East African Safaris",
    description: "Book your perfect safari in Kenya, Tanzania, Rwanda or Uganda. Expert guides, 4x4 vehicles, luxury lodges.",
    images: ["/twitter-home.jpg"],
  },
  appleWebApp: {
    capable: true,
    title: "JaeTravel Expeditions",
    statusBarStyle: "black-translucent",
  },
  icons: {
    icon: ["/favicon.ico", "/icon-192.png", "/icon-512.png"],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  themeColor: "#ea580c",
}

const organizationSchema = generateOrganizationSchema({
  name: "Jae Travel Expeditions",
  url: "https://jaetravel.com",
  logo: "https://jaetravel.com/logo.png",
  description: "Premier East African safari tour operator based in Nairobi, Kenya. Specializing in wildlife safaris, gorilla trekking, and luxury travel experiences.",
  sameAs: [
    "https://www.facebook.com/jaetravelexpeditions",
    "https://www.instagram.com/jaetravelexpeditions",
    "https://twitter.com/jaetravel",
  ],
  contactPoint: {
    telephone: "+254700123456",
    contactType: "Customer Service",
    email: "info@jaetravel.co.ke",
    areaServed: ["KE", "TZ", "RW", "UG"],
    // availableLanguage removed — not valid in schema.org ContactPoint
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Westlands Business Centre, 3rd Floor",
    addressLocality: "Westlands, Nairobi",
    addressRegion: "Nairobi",
    postalCode: "00100",
    addressCountry: "KE",
  },
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
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
    <html lang="en" className="scroll-smooth">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, viewport-fit=cover" />
        <meta name="theme-color" content="#ea580c" />

        {/* Apple Touch Icon - Fixed */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />

        {/* Preconnect */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Structured Data */}
        <SchemaRenderer schema={organizationSchema} />

        {/* PWA */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Jae Travel" />

        {/* Favicon Set */}
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />

        {/* Preload Critical Assets */}
        <link rel="preload" href="/fonts/inter-variable-latin.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/hero-bg.jpg" as="image" />


      </head>

      <body className="font-sans antialiased bg-white text-slate-900">
        {/* Skip to content */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 bg-orange-600 text-white px-4 py-2 rounded-lg font-semibold"
        >
          Skip to main content
        </a>

        {/* EAT Time (Server-rendered) */}
        <div className="sr-only">
          Current time in Nairobi, Kenya (EAT): {eatTime} on {eatDate}
        </div>

        <Navigation />

        <main id="main-content" className="min-h-screen">
          {children}
        </main>

        <Footer />

        <Analytics />
      </body>
    </html>
  )
}