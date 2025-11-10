export interface Tour {
  id: string
  slug: string
  title: string
  description: string
  shortDescription: string
  price: number
  currency: string
  originalPrice?: number
  image: string
  gallery?: string[]
  duration: string
  groupSize: string
  difficulty: string
  region: string
  country: "Kenya" | "Tanzania" | "Rwanda" | "Uganda" | "Multi-Country"
  highlights: string[]
  included: string[]
  excluded: string[]
  itinerary: Array<{
    day: number
    title: string
    description: string
  }>
  rating: number
  reviewCount: number
  metaTitle: string
  metaDescription: string
  keywords: string[]
  category: "Safari" | "Trekking" | "Cultural" | "Beach" | "Adventure" | "Luxury" | "Budget" | "Accessible"
  isPopular?: boolean
  isOnOffer?: boolean
  bestFor?: string[]
  bookingUrl: string
}

export const tourCategories = ["Safari", "Trekking", "Cultural", "Beach", "Adventure", "Luxury", "Budget", "Accessible"]

export const tourDifficulties = ["Easy", "Moderate", "Challenging", "Very Challenging"]
