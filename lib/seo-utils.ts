// lib/seo-utils.ts

export interface TourSchemaData {
  name: string
  description: string
  url: string
  image?: string
  price?: number
  priceCurrency?: string
  duration?: string
  destination?: string
  rating?: number
  reviewCount?: number
}

export interface OrganizationSchemaData {
  name: string
  logo: string
  url: string
  description?: string
  sameAs?: string[]
  contactPoint?: {
    telephone?: string
    contactType?: string
    email?: string
    areaServed?: string[]
  }
  address?: {
    "@type": "PostalAddress"
    streetAddress?: string
    addressLocality?: string
    addressRegion?: string
    postalCode?: string
    addressCountry?: string
  }
}

export function generateTourSchema(tour: TourSchemaData) {
  return {
    "@context": "https://schema.org",
    "@type": "Tour",
    name: tour.name,
    description: tour.description,
    url: tour.url,
    image: tour.image || "https://jaetravel.com/safari-tour-default.jpg",
    offers: tour.price
      ? {
          "@type": "Offer",
          price: tour.price,
          priceCurrency: tour.priceCurrency || "USD",
          priceValidUntil: new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString().split("T")[0],
          availability: "https://schema.org/InStock",
          url: tour.url,
        }
      : undefined,
    duration: tour.duration,
    areaServed: tour.destination
      ? { "@type": "Place", name: tour.destination }
      : undefined,
    aggregateRating:
      tour.rating && tour.reviewCount
        ? {
            "@type": "AggregateRating",
            ratingValue: tour.rating.toFixed(1),
            reviewCount: tour.reviewCount,
            bestRating: 5,
            worstRating: 1,
          }
        : undefined,
  }
}

export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `https://jaetravel.com${item.url}`,
    })),
  }
}

export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer.replace(/<[^>]*>/g, ""),
      },
    })),
  }
}

export function generateOrganizationSchema(data: OrganizationSchemaData) {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "TravelAgency"],
    name: data.name,
    url: data.url,
    logo: data.logo.startsWith("http") ? data.logo : `https://jaetravel.com${data.logo}`,
    description: data.description || "Jae Travel Expeditions offers premium East African safari tours in Kenya, Tanzania, Rwanda, and Uganda with luxury accommodations and expert local guides.",
    foundingDate: "2015",
    sameAs: data.sameAs || [],
    address: data.address || {
      "@type": "PostalAddress",
      addressLocality: "Nairobi",
      addressRegion: "Nairobi County",
      addressCountry: "KE",
    },
    contactPoint: data.contactPoint || {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      telephone: "+254700123456",
      email: "info@jaetravel.co.ke",
      areaServed: ["KE", "TZ", "RW", "UG"],
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "East Africa Safari Tours",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Luxury Kenya Safari",
            serviceType: "Wildlife Safari",
            areaServed: "Kenya",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Gorilla Trekking Rwanda",
            serviceType: "Gorilla Tracking",
            areaServed: "Rwanda",
          },
        },
      ],
    },
  }
}