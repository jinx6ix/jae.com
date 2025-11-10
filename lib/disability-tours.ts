import type { AccessibleCountry } from "@/lib/types"

export interface AccessibleTour {
  excluded: string[]
  id: string
  slug: string
  title: string
  description: string
  shortDescription: string
  price: number
  currency: string
  image: string
  accessibilityFeatures: string[]
  adaptedVehicle: string
  wheelchairAccessible: boolean
  mobilityRequirements: string
  duration: string
  groupSize: string
  country: AccessibleCountry
  highlights: string[]
  included: string[]
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
  bestFor?: string[]
  popular?: boolean
}

export const accessibleTours: AccessibleTour[] = [
  {
    id: "acc-1",
    slug: "accessible-kenya-safari-experience",
    title: "Accessible Kenya Safari Experience",
    description: "A fully accessible safari experience designed for travelers with mobility challenges. Features wheelchair-accessible vehicles, accessible accommodations, accessible restrooms, trained guides for special needs, and tailored wildlife viewing to ensure everyone can enjoy East Africa's magnificent landscapes and wildlife.",
    shortDescription: "Fully accessible safari for people with mobility challenges",
    price: 2450,
    currency: "USD",
    image: "/placeholder.svg?key=acc-kenya",
    accessibilityFeatures: [
      "Wheelchair accessible safari vehicle",
      "Wheelchair accessible lodges",
      "Accessible restrooms throughout",
      "Trained accessibility specialists",
      "Customizable viewing platforms",
      "Medical support on staff",
      "Medication refrigeration",
      "Personal assistant welcome",
    ],
    adaptedVehicle: "Wheelchair-accessible safari vehicle with hydraulic lift and spacious interior",
    wheelchairAccessible: true,
    mobilityRequirements: "Designed for wheelchair users and people with mobility impairments",
    duration: "7 Days",
    groupSize: "4-8 people",
    country: "Kenya",
    highlights: [
      "Adapted wildlife viewing platforms",
      "Accessibility-focused lodges",
      "Trained guides for disability support",
      "Shorter safari durations available",
      "Accessible accommodation facilities",
      "Medical support available",
    ],
    included: [
      "Fully accessible accommodation",
      "All meals (dietary accommodations)",
      "Wheelchair-accessible vehicle",
      "Expert guide trained in accessibility",
      "Park fees",
      "Accessibility equipment as needed",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival and Accessible Lodging",
        description: "Arrive at accessible lodge in Nairobi. Full orientation with accessibility staff. Meet your accessibility specialist guide.",
      },
      {
        day: 2,
        title: "Masai Mara Access Tour",
        description: "Drive to Masai Mara in wheelchair-accessible vehicle. Afternoon game drive with adapted viewing platform. Accessible dinner.",
      },
      {
        day: 3,
        title: "Full Day Accessible Safari",
        description: "Morning and afternoon game drives with frequent rest breaks. Accessible lunch stop. Wildlife viewing from adapted platforms.",
      },
      {
        day: 4,
        title: "Cultural Visit - Accessible",
        description: "Visit accessible Maasai village. Cultural presentation brought to your viewing area. Accessible dining experience.",
      },
      {
        day: 5,
        title: "Optional Activities",
        description: "Choose from accessible activities: photography sessions, nature appreciation, or relaxation at lodge.",
      },
      {
        day: 6,
        title: "Relaxation and Reflection",
        description: "Gentle game drive or spa time. Accessible amenities at lodge. Evening dinner celebration.",
      },
      {
        day: 7,
        title: "Return Transfer",
        description: "Return to Nairobi airport with accessible vehicle assistance.",
      },
    ],
    rating: 4.8,
    reviewCount: 42,
    metaTitle: "Accessible Kenya Safari Experience for People with Disabilities | Jae Travel",
    metaDescription: "Book fully accessible Kenya safari with wheelchair-accessible vehicles, adapted lodges, and trained guides. Perfect for travelers with mobility challenges.",
    keywords: [
      "accessible kenya safari",
      "disability tours kenya",
      "wheelchair friendly safari",
      "accessible travel africa",
      "special needs safari",
      "mobility impaired kenya tours",
      "adapted safari vehicles",
      "barrier-free kenya travel",
      "inclusive safari experiences",
      "disabled travel kenya",
      "wheelchair accessible tours and safaris",
      "accessible masai mara safari",
      "kenya wheelchair safari",
      "accessible safari kenya masai mara",
      "disability inclusive tourism kenya",
    ],
    bestFor: [
      "Wheelchair users",
      "Mobility impaired travelers",
      "People with disabilities",
      "Families with special needs",
    ],
    excluded: [
      
    ]
  },
  {
    id: "acc-2",
    slug: "accessible-masai-mara-experience",
    title: "4-Day Accessible Masai Mara Experience",
    description: "A focused accessible safari in the Masai Mara with wheelchair-adapted vehicles, accessible tented camps, accessible restrooms, trained disability guides, and front-row seats to the Great Migration - specially designed so people with mobility challenges can fully experience Africa's most iconic wildlife spectacle.",
    shortDescription: "Adapted 4-day Masai Mara safari for accessibility",
    price: 1450,
    currency: "USD",
    image: "/placeholder.svg?key=acc-mara",
    accessibilityFeatures: [
      "Wheelchair adapted safari vehicle",
      "Accessible tented camp accommodation",
      "Wheelchair accessible bathroom facilities",
      "Disability awareness trained guides",
      "Adapted game drive platforms",
      "Rest stations every hour",
      "Customizable itinerary",
      "Priority wildlife viewing locations",
    ],
    adaptedVehicle: "Wheelchair-adapted Land Cruiser with hydraulic lift system",
    wheelchairAccessible: true,
    mobilityRequirements: "Wheelchair accessible - suitable for all mobility levels",
    duration: "4 Days",
    groupSize: "4-6 people",
    country: "Kenya",
    highlights: [
      "Great Migration viewing (seasonal)",
      "Wheelchair accessible game drives",
      "Accessible lodge with ramps",
      "Trained accessibility guide",
      "Adapted wildlife platforms",
      "Professional support staff",
      "Medical assistance available",
    ],
    included: [
      "Fully accessible accommodation",
      "All meals",
      "Wheelchair-adapted vehicle",
      "Accessibility specialist guide",
      "Park entrance fees",
      "Accessibility support services",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival at Accessible Camp",
        description: "Transfer to accessible Masai Mara camp. Orientation with accessibility staff. First accessible game drive.",
      },
      {
        day: 2,
        title: "Migration Tracking - Adapted",
        description: "Full day adapted safari tracking the Great Migration. Multiple rest stops. Accessible lunch and viewing platform.",
      },
      {
        day: 3,
        title: "Prime Wildlife Viewing",
        description: "Exclusive game drive times with accessible vehicles. Professional photography assistance. Accessible facilities.",
      },
      {
        day: 4,
        title: "Departure Day",
        description: "Early morning accessible game drive before return transfer to Nairobi.",
      },
    ],
    rating: 4.9,
    reviewCount: 38,
    metaTitle: "Accessible Masai Mara Safari 4 Days | Wheelchair Friendly | Jae Travel",
    metaDescription: "Book accessible Masai Mara safari with wheelchair-adapted vehicles and tented camps. Experience the Great Migration with disability support.",
    keywords: [
      "accessible masai mara safari",
      "wheelchair safari",
      "masai mara accessibility",
      "adapted safari masai mara",
      "disability friendly wildlife tour",
      "accessible wildlife viewing",
      "wheelchair accessible tour kenya",
      "special needs safari masai mara",
      "mobility accessible safari",
      "inclusive africa safari",
      "adapted game drive vehicle",
      "wheelchair accessible accommodation safari",
      "disability tourism masai mara",
      "barrier free safari experience",
      "accessible great migration",
    ],
    excluded: []
  },
  {
    id: "acc-3",
    slug: "tanzania-accessible-safari-adventure",
    title: "Tanzania Accessible Safari Adventure",
    description: "An inclusive journey through Tanzania's Serengeti and Ngorongoro Crater with adapted safari vehicles, accessible lodges, trained accessibility guides, accessible transportation, and inclusive dining. Designed so travelers with disabilities can experience Tanzania's most spectacular destinations.",
    shortDescription: "Accessible 8-day Tanzania safari adventure",
    price: 2950,
    currency: "USD",
    image: "/placeholder.svg?key=acc-tanzania",
    accessibilityFeatures: [
      "Wheelchair accessible safari vehicle",
      "Accessible lodges Serengeti & Ngorongoro",
      "Accessibility trained guides",
      "Adapted game viewing platforms",
      "Accessible transportation between parks",
      "Dietary accommodation available",
      "Medication refrigeration",
      "24/7 assistance available",
    ],
    adaptedVehicle: "Customized wheelchair-accessible safari vehicle",
    wheelchairAccessible: true,
    mobilityRequirements: "Suitable for wheelchair users and all mobility levels",
    duration: "8 Days",
    groupSize: "4-8 people",
    country: "Tanzania",
    highlights: [
      "Serengeti Great Migration adapted viewing",
      "Ngorongoro Crater accessible exploration",
      "Wheelchair-adapted game drives",
      "Accessible lodges",
      "Trained disability guides",
      "Medical support on staff",
      "Dietary customization",
    ],
    included: [
      "Accessible accommodation throughout",
      "All meals",
      "Adapted safari vehicles",
      "Accessibility specialist guide",
      "Park fees",
      "Inter-park transportation",
      "Accessibility equipment",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Arusha",
        description: "Arrive in Arusha airport. Transfer to accessible hotel. Orientation with accessibility team.",
      },
      {
        day: 2,
        title: "Transfer to Serengeti",
        description: "Transfer to Serengeti in accessible vehicle. Afternoon accessible game drive.",
      },
      {
        day: 3,
        title: "Serengeti Migration Tracking",
        description: "Full day adapted Serengeti safari. Multiple rest breaks. Accessible lunch platform.",
      },
      {
        day: 4,
        title: "Serengeti Continued",
        description: "Second day of Serengeti with optional shorter drives available. Relaxation time at lodge.",
      },
      {
        day: 5,
        title: "Transfer to Ngorongoro",
        description: "Drive to Ngorongoro rim. Accessible lodge arrival. Evening orientation.",
      },
      {
        day: 6,
        title: "Ngorongoro Crater Access",
        description: "Accessible crater rim views and accessible descent for those able. Wildlife from adapted platform.",
      },
      {
        day: 7,
        title: "Crater Continued",
        description: "Second day Ngorongoro with flexible accessible options. Relaxation at lodge.",
      },
      {
        day: 8,
        title: "Return to Arusha",
        description: "Transfer back to Arusha for departure flights.",
      },
    ],
    rating: 4.7,
    reviewCount: 29,
    metaTitle: "Tanzania Accessible Safari Adventure | Serengeti & Ngorongoro | Jae Travel",
    metaDescription: "Book accessible Tanzania safari through Serengeti and Ngorongoro Crater. Wheelchair-adapted vehicles, accessible lodges, and trained guides.",
    keywords: [
      "accessible tanzania safari",
      "disability travel tanzania",
      "wheelchair safari tanzania",
      "accessible serengeti",
      "accessible ngorongoro",
      "tanzania accessible tourism",
      "inclusive tanzania safari",
      "adapted safari tanzania",
      "wheelchair accessible tour tanzania",
      "special needs tanzania safari",
      "mobility impaired tanzania",
      "barrier-free tanzania adventure",
      "accessible great migration tanzania",
      "disability inclusive serengeti",
    ],
    excluded: [
      ]
  },
  {
    id: "acc-4",
    slug: "accessible-rwanda-gorilla-trekking",
    title: "Accessible Rwanda Gorilla Trekking",
    description: "Experience mountain gorillas in Rwanda with full accessibility considerations. Adapted vehicles, accessible accommodations, specially trained guides, accessible viewing platforms, shorter trek distances available, and complete medical support ensure everyone can witness these magnificent creatures.",
    shortDescription: "Accessible gorilla trekking in Rwanda",
    price: 2800,
    currency: "USD",
    image: "/mountain-gorillas-rwanda-volcanoes.jpg",
    accessibilityFeatures: [
      "Wheelchair accessible vehicle to trailhead",
      "Accessible lodge accommodation",
      "Trained accessibility guides",
      "Modified trek distances available",
      "Accessible viewing platforms",
      "Portable accessibility equipment",
      "Medical professionals on staff",
      "Private guiding options",
    ],
    adaptedVehicle: "Wheelchair-accessible vehicle to trailhead",
    wheelchairAccessible: true,
    mobilityRequirements: "Variable mobility options - shorter distances available",
    duration: "4 Days",
    groupSize: "4-6 people",
    country: "Rwanda",
    highlights: [
      "Mountain gorilla encounter",
      "Adapted trek options",
      "Accessible volcano views",
      "Golden monkey optional viewing",
      "Professional disability guides",
      "Luxury accessible lodge",
      "Medical support included",
    ],
    included: [
      "Accessible accommodation",
      "All meals",
      "Gorilla permit",
      "Professional adapted trek guide",
      "Vehicle to trailhead",
      "Park fees",
      "Medical support",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Kigali",
        description: "Arrive in Rwanda. Transfer to accessible hotel in Kigali. Evening orientation with accessibility team.",
      },
      {
        day: 2,
        title: "Transfer to Volcanoes",
        description: "Transfer to accessible lodge in Volcanoes National Park. Training session for gorilla trek.",
      },
      {
        day: 3,
        title: "Gorilla Trekking",
        description: "Modified gorilla trek with accessibility guide. Shorter or adapted paths as needed. Encounter mountain gorillas. Return to lodge.",
      },
      {
        day: 4,
        title: "Return to Kigali",
        description: "Rest or optional cultural visit. Transfer back to Kigali airport.",
      },
    ],
    rating: 4.9,
    reviewCount: 35,
    metaTitle: "Accessible Rwanda Gorilla Trekking | Disability Friendly | Jae Travel",
    metaDescription: "Trek mountain gorillas in Rwanda with full accessibility. Wheelchair-accessible vehicles, adapted treks, trained guides, and medical support.",
    keywords: [
      "accessible gorilla trekking rwanda",
      "wheelchair gorilla trek",
      "disability friendly gorilla trekking",
      "accessible rwanda safari",
      "inclusive gorilla experience",
      "adapted gorilla trek",
      "wheelchair accessible volcanoes",
      "mobility impaired gorilla trekking",
      "special needs gorilla rwanda",
      "accessible mountain gorillas",
      "barrier free gorilla experience",
      "inclusive rwanda tourism",
    ],
    excluded: []
  },
  {
    id: "acc-5",
    slug: "accessible-uganda-bwindi-gorillas",
    title: "Accessible Uganda Bwindi Gorilla Experience",
    description: "Trek mountain gorillas in Uganda's Bwindi Impenetrable Forest with complete accessibility accommodations. Adapted vehicles, accessible lodges, modified trek options, trained accessibility guides, oxygen support available, and full medical staff ensure an unforgettable gorilla experience.",
    shortDescription: "Accessible gorilla trekking in Uganda Bwindi Forest",
    price: 2650,
    currency: "USD",
    image: "/bwindi-forest-uganda-gorillas.jpg",
    accessibilityFeatures: [
      "Wheelchair accessible to Bwindi lodge",
      "Accessible forest lodge accommodation",
      "Modified trek routes available",
      "Professional disability guides",
      "Portable trek equipment",
      "Oxygen and medical support",
      "Private family options",
      "Flexible trekking durations",
    ],
    adaptedVehicle: "Wheelchair-accessible safari vehicle",
    wheelchairAccessible: true,
    mobilityRequirements: "Various trek options for different abilities",
    duration: "4 Days",
    groupSize: "4-6 people",
    country: "Uganda",
    highlights: [
      "Mountain gorilla encounter",
      "Adapted forest trek",
      "Accessible lodge in Bwindi",
      "Professional guides trained in accessibility",
      "Medical support available",
      "Flexible trek options",
      "Cultural activities adapted",
    ],
    included: [
      "Accessible accommodation",
      "All meals",
      "Gorilla permit",
      "Professional accessibility guide",
      "Adapted trek equipment",
      "Park fees",
      "Medical support services",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival and Accessible Transfer",
        description: "Arrive in Uganda. Transfer to accessible Bwindi lodge. Meet accessibility team and guides.",
      },
      {
        day: 2,
        title: "Gorilla Trekking Day",
        description: "Modified gorilla trek with accessibility guide. Multiple rest options. Encounter mountain gorillas in forest.",
      },
      {
        day: 3,
        title: "Forest Exploration",
        description: "Shorter optional forest walk or lodge relaxation. Cultural activities brought to accessible areas.",
      },
      {
        day: 4,
        title: "Return and Departure",
        description: "Final breakfast and return transfer to airport.",
      },
    ],
    rating: 4.8,
    reviewCount: 32,
    metaTitle: "Accessible Uganda Bwindi Gorilla Trekking | Wheelchair Friendly | Jae Travel",
    metaDescription: "Trek mountain gorillas in Uganda's Bwindi forest with full accessibility. Adapted vehicles, lodges, and disability-trained guides.",
    keywords: [
      "accessible uganda gorilla",
      "wheelchair bwindi trek",
      "disability friendly gorilla uganda",
      "accessible bwindi forest",
      "inclusive uganda safari",
      "adapted gorilla trekking uganda",
      "mobility accessible gorillas",
      "special needs gorilla uganda",
      "wheelchair accessible uganda",
      "barrier free gorilla trekking",
      "disability inclusive uganda",
    ],
    excluded: []
  },
  {
    id: "acc-6",
    slug: "east-africa-grand-accessible-safari",
    title: "East Africa Grand Accessible Safari",
    description: "The ultimate East African accessible safari across Kenya and Tanzania. Combines Maasai Mara, Serengeti, and Ngorongoro with premium accessible accommodations, wheelchair-adapted vehicles, trained disability guides, medical staff, and curated accessible experiences ensuring complete immersion.",
    shortDescription: "12-day grand accessible safari across Kenya and Tanzania",
    price: 5800,
    currency: "USD",
    image: "/placeholder.svg?key=grand-safari",
    accessibilityFeatures: [
      "Premium wheelchair accessible vehicles",
      "Five-star accessible lodges",
      "Disability accessibility specialists",
      "Complete medical team",
      "Oxygen and medical equipment",
      "Accessible transportation throughout",
      "Dietary accommodations",
      "24/7 support staff",
    ],
    adaptedVehicle: "Premium wheelchair-accessible safari vehicles",
    wheelchairAccessible: true,
    mobilityRequirements: "Luxury accessibility - all levels welcome",
    duration: "12 Days",
    groupSize: "4-10 people",
    country: "Multi-Country",
    highlights: [
      "Masai Mara Great Migration",
      "Serengeti adapted safari",
      "Ngorongoro Crater",
      "Premium accessible lodges",
      "Professional disability guides",
      "Complete medical support",
      "Customized itineraries",
      "VIP accessibility service",
    ],
    included: [
      "Premium accessible accommodations",
      "All meals and beverages",
      "All park fees",
      "Professional accessibility guides",
      "Premium vehicles",
      "Medical support",
      "Meals and snacks",
      "Inter-park transportation",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Nairobi",
        description: "Arrive in Nairobi. Transfer to premium accessible hotel. Orientation with entire accessibility team.",
      },
      {
        day: 2,
        title: "Transfer to Masai Mara",
        description: "Transfer to Masai Mara in premium accessible vehicle. Luxury lodge arrival and orientation.",
      },
      {
        day: 3,
        title: "Masai Mara Day 1",
        description: "Full day of adapted Masai Mara safari with premium accessibility services.",
      },
      {
        day: 4,
        title: "Masai Mara Day 2",
        description: "Second day with optional activities. Sunset safari from accessible platform.",
      },
      {
        day: 5,
        title: "Transfer to Serengeti",
        description: "Premium transfer to Serengeti accessible lodge.",
      },
      {
        day: 6,
        title: "Serengeti Day 1",
        description: "Full day Serengeti safari with complete accessibility support.",
      },
      {
        day: 7,
        title: "Serengeti Day 2",
        description: "Continued Serengeti with flexible accessible options.",
      },
      {
        day: 8,
        title: "Transfer to Ngorongoro",
        description: "Transfer to Ngorongoro rim accessible lodge.",
      },
      {
        day: 9,
        title: "Ngorongoro Crater",
        description: "Crater rim views and optional adapted descent.",
      },
      {
        day: 10,
        title: "Flexibility Day",
        description: "Choose from available activities or lodge relaxation.",
      },
      {
        day: 11,
        title: "Return to Arusha",
        description: "Transfer back to Arusha. Evening celebration dinner.",
      },
      {
        day: 12,
        title: "Departure",
        description: "Transfer to airport for departure flights.",
      },
    ],
    rating: 4.9,
    reviewCount: 18,
    metaTitle: "East Africa Grand Accessible Safari 12 Days | Luxury Accessibility | Jae Travel",
    metaDescription: "Experience the ultimate accessible safari across Kenya and Tanzania. Premium accessible lodges, trained guides, and complete medical support for 12 days.",
    keywords: [
      "grand accessible safari",
      "luxury disability safari",
      "east africa accessible tour",
      "wheelchair safari africa",
      "accessible kenya tanzania safari",
      "premium inclusive safari",
      "disability luxury travel",
      "accessible migration safari",
      "complete accessibility east africa",
      "inclusive multi-country safari",
    ],
    excluded: []
  },
]

export function getAccessibleTourBySlug(slug: string) {
  return accessibleTours.find((t) => t.slug === slug)
}

export function getAllAccessibleTours() {
  return accessibleTours
}
