export interface Tour {
  id: string
  slug: string
  title: string
  description: string
  shortDescription?: string
  price: number
  currency: string
  originalPrice?: number
  image: string
  gallery?: string[]
  duration: string
  groupSize: string
  difficulty: string
  url: string
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

  // 👇 Add these to fix the type mismatch
  featured?: boolean
  name?: string
  destinations?: string[]
  bestTime?: string
  priceFrom?: number
}

export const tours: Tour[] = [
  {
    id: "kenya-masai-mara",
    slug: "masai-mara-luxury-safari",
    title: "Masai Mara Luxury Safari",
    description: "Experience the wildlife of Masai Mara with luxury accommodations and expert guides. Includes game drives and meals.",
    shortDescription: "Witness the Great Migration and Big Five in Kenya's most iconic reserve",
    price: 3500,
    currency: "USD",
    originalPrice: 4200,
    image: "/masai-mara-migration.jpg",
    gallery: ["/masai-mara-migration.jpg", "/magestic-maasai-serengeti.jpg"],
    duration: "3 Days",
    groupSize: "4-12 people",
    difficulty: "Easy",
    region: "East Africa",
    country: "Kenya",
    highlights: [
      "Great Migration viewing",
      "Big Five wildlife spotting",
      "Luxury lodge accommodation",
      "Expert naturalist guides",
      "Game drives at sunrise and sunset"
    ],
    included: [
      "Accommodation in luxury lodge",
      "All meals and snacks",
      "Park entrance fees",
      "Expert guide services",
      "Game drive vehicle"
    ],
    excluded: ["International flights", "Travel insurance", "Personal expenses", "Visa fees", "Gratuities"],
    itinerary: [
      {
        day: 1,
        title: "Arrival and Lodge Check-in",
        description: "Arrival and lodge check-in. Settle into your luxury accommodation."
      },
      {
        day: 2,
        title: "Morning and Evening Game Drives",
        description: "Morning and evening game drives tracking wildlife. Optional hot air balloon ride available."
      },
      {
        day: 3,
        title: "Departure",
        description: "Optional morning game drive before departure."
      }
    ],
    rating: 4.8,
    reviewCount: 128,
    metaTitle: "Masai Mara Luxury Safari | Jae Travel Expeditions",
    metaDescription: "Book your Masai Mara Luxury Safari with Jae Travel. Enjoy game drives, luxury lodges, and expert guides in Kenya's most iconic park.",
    keywords: ["Masai Mara Safari", "Luxury Kenya Safari", "Kenya Wildlife Tours", "Great Migration"],
    category: "Luxury",
    isPopular: true,
    isOnOffer: true,
    bestFor: ["Wildlife enthusiasts", "Photographers", "Luxury travelers"],
    bookingUrl: "/booking/masai-mara-luxury-safari",
    url: ""
  },
  {
    id: "kenya-amboseli",
    slug: "amboseli-safari",
    title: "Amboseli Safari Adventure",
    description: "Explore Amboseli National Park with guided game drives and spectacular views of Mount Kilimanjaro.",
    shortDescription: "Elephants with Mount Kilimanjaro backdrop",
    price: 2800,
    currency: "USD",
    image: "/Amboseli-National-Park-Elephantsssss.jpg",
    gallery: ["/Amboseli-National-Park-Elephantsssss.jpg", "/amboseli-elephants-00007.jpg"],
    duration: "3 Days",
    groupSize: "4-10 people",
    difficulty: "Easy",
    region: "East Africa",
    country: "Kenya",
    highlights: [
      "Mount Kilimanjaro views",
      "Large elephant herds",
      "Professional wildlife viewing",
      "Scenic landscapes",
      "Bird watching opportunities"
    ],
    included: [
      "Accommodation in safari lodge",
      "All meals",
      "Park entrance fees",
      "Expert guide services",
      "Game drive vehicle"
    ],
    excluded: ["International flights", "Travel insurance", "Personal expenses", "Visa fees"],
    itinerary: [
      {
        day: 1,
        title: "Arrival and Orientation",
        description: "Arrival and lodge check-in with orientation session."
      },
      {
        day: 2,
        title: "Full Day Game Drives",
        description: "Morning and evening game drives focusing on elephant viewing with Kilimanjaro backdrop."
      },
      {
        day: 3,
        title: "Departure",
        description: "Morning game drive before departure."
      }
    ],
    rating: 4.7,
    reviewCount: 95,
    metaTitle: "Amboseli Safari Adventure | Jae Travel Expeditions",
    metaDescription: "Discover Amboseli Safari with breathtaking views of Mount Kilimanjaro. Guided game drives and luxury stays included.",
    keywords: ["Amboseli Safari", "Kenya Tours", "Kilimanjaro Safari", "Amboseli National Park"],
    category: "Safari",
    isPopular: true,
    bestFor: ["Photographers", "Nature lovers", "Elephant enthusiasts"],
    bookingUrl: "/booking/amboseli-safari",
    url: ""
  },
  {
    id: "tanzania-serengeti",
    slug: "serengeti-migration-tour",
    title: "Serengeti Migration Safari",
    description: "Witness the Great Migration in Serengeti with guided tours and comfortable lodges. Includes daily game drives and meals.",
    shortDescription: "Witness nature's most spectacular Great Migration",
    price: 4200,
    currency: "USD",
    originalPrice: 5000,
    image: "/Serengeti-National-Park-Africa-Kenya-Safaris2.jpg",
    gallery: ["/Serengeti-National-Park-Africa-Kenya-Safaris2.jpg", "/serengeti-day-trip.jpeg"],
    duration: "4 Days",
    groupSize: "4-12 people",
    difficulty: "Easy",
    region: "East Africa",
    country: "Tanzania",
    highlights: [
      "Great Migration witnessing",
      "Expert wildlife tracking",
      "Comfortable lodge accommodation",
      "Daily game drives",
      "Cultural experiences"
    ],
    included: [
      "Lodge accommodation",
      "All meals included",
      "Park entrance fees",
      "Expert guide services",
      "Game drive vehicle"
    ],
    excluded: ["International flights", "Travel insurance", "Personal expenses", "Visa fees"],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Serengeti",
        description: "Arrival in Serengeti and lodge check-in."
      },
      {
        day: 2,
        title: "Migration Tracking",
        description: "Game drives tracking the migration patterns and wildlife movements."
      },
      {
        day: 3,
        title: "Cultural Visit",
        description: "Cultural visit and continued wildlife viewing."
      },
      {
        day: 4,
        title: "Departure",
        description: "Final game drive before departure."
      }
    ],
    rating: 4.9,
    reviewCount: 97,
    metaTitle: "Serengeti Migration Safari | Jae Travel Expeditions",
    metaDescription: "Experience the Great Migration in Serengeti with expert guides, luxury lodges, and unforgettable wildlife encounters.",
    keywords: ["Serengeti Migration", "Tanzania Safari", "Great Migration Tour", "Serengeti National Park"],
    category: "Luxury",
    isPopular: true,
    isOnOffer: true,
    bestFor: ["Wildlife photographers", "Adventure seekers", "Nature lovers"],
    bookingUrl: "/booking/serengeti-migration-tour",
    url: ""
  },
  {
    id: "tanzania-ngorongoro",
    url: "/tours/ngorongoro-crater-safari",
    slug: "ngorongoro-crater-safari",
    title: "Ngorongoro Crater Safari",
    description: "Explore the Ngorongoro Crater with guided game drives and luxury accommodation. Ideal for families and photographers.",
    shortDescription: "World's largest intact caldera with dense wildlife",
    price: 2800,
    currency: "USD",
    image: "/Ngorongoro-Crater.jpg",
    gallery: ["/Ngorongoro-Crater.jpg"],
    duration: "3 Days",
    groupSize: "4-10 people",
    difficulty: "Easy",
    region: "East Africa",
    country: "Tanzania",
    highlights: [
      "World's largest caldera",
      "Dense wildlife populations",
      "Family-friendly experience",
      "Photography opportunities",
      "Expert guided tours"
    ],
    included: [
      "Luxury accommodation",
      "All meals included",
      "Park entrance fees",
      "Expert guide services",
      "Game drive vehicle"
    ],
    excluded: ["International flights", "Travel insurance", "Personal expenses", "Visa fees"],
    itinerary: [
      {
        day: 1,
        title: "Arrival and Check-in",
        description: "Arrival and lodge check-in near Ngorongoro Crater."
      },
      {
        day: 2,
        title: "Full-day Crater Exploration",
        description: "Full-day game drive in the crater exploring diverse wildlife."
      },
      {
        day: 3,
        title: "Departure",
        description: "Morning activities before departure."
      }
    ],
    rating: 4.7,
    reviewCount: 64,
    metaTitle: "Ngorongoro Crater Safari | Jae Travel Expeditions",
    metaDescription: "Book your Ngorongoro Crater Safari with Jae Travel. A perfect adventure for families, photographers, and nature lovers.",
    keywords: ["Ngorongoro Safari", "Tanzania Wildlife Tours", "Family Safari", "Crater Tour"],
    category: "Safari",
    isPopular: true,
    bestFor: ["Families", "Photographers", "Wildlife enthusiasts"],
    bookingUrl: "/booking/ngorongoro-crater-safari"
  },
  {
    id: "uganda-bwindi",
    slug: "bwindi-gorilla-trek",
    title: "Bwindi Gorilla Trekking",
    description: "Trek the dense forests of Bwindi to see mountain gorillas up close with expert guides. Includes park fees and accommodations.",
    shortDescription: "Trek mountain gorillas in Bwindi Impenetrable Forest",
    price: 3200,
    currency: "USD",
    image: "/bwindi-forest-uganda-gorilla-safaris.jpg",
    gallery: ["/bwindi-forest-uganda-gorilla-safaris.jpg", "/Magical-encounters-with-the-mountain-gorillas-of-Bwindi.jpg"],
    duration: "3 Days",
    groupSize: "4-8 people",
    difficulty: "Challenging",
    region: "East Africa",
    country: "Uganda",
    highlights: [
      "Mountain gorilla encounters",
      "Expert primate guides",
      "Dense forest trekking",
      "Conservation education",
      "Cultural interactions"
    ],
    included: [
      "Lodge accommodation",
      "All meals included",
      "Gorilla trekking permits",
      "Expert guide services",
      "Park entrance fees"
    ],
    excluded: ["International flights", "Travel insurance", "Personal expenses", "Visa fees"],
    itinerary: [
      {
        day: 1,
        title: "Arrival at Lodge",
        description: "Arrival at lodge and trekking preparation briefing."
      },
      {
        day: 2,
        title: "Gorilla Trekking Experience",
        description: "Full day gorilla trekking experience in Bwindi Forest."
      },
      {
        day: 3,
        title: "Cultural Visit and Departure",
        description: "Cultural visit and departure."
      }
    ],
    rating: 4.8,
    reviewCount: 80,
    metaTitle: "Bwindi Gorilla Trekking | Jae Travel Expeditions",
    metaDescription: "Embark on a Bwindi Gorilla Trekking safari. See mountain gorillas up close and explore Uganda's lush forests.",
    keywords: ["Bwindi Gorilla Trek", "Uganda Safari", "Gorilla Trekking Tours", "Mountain Gorillas"],
    category: "Trekking",
    isPopular: true,
    bestFor: ["Adventure seekers", "Wildlife enthusiasts", "Photographers"],
    bookingUrl: "/booking/bwindi-gorilla-trek",
    url: ""
  },
  {
    id: "rwanda-volcanoes",
    slug: "volcanoes-national-park-safari",
    title: "Rwanda Gorilla Safari",
    description: "Explore Volcanoes National Park in Rwanda to trek gorillas and experience local culture.",
    shortDescription: "Gorilla trekking in Rwanda's Volcanoes National Park",
    price: 3800,
    currency: "USD",
    originalPrice: 4500,
    image: "/Volcanoes-National-Park-Rwanda-Natural-World-Kenya-Safaris.jpg",
    gallery: ["/Volcanoes-National-Park-Rwanda-Natural-World-Kenya-Safaris.jpg", "/mountain-gorillas-rwanda-volcanoes.jpg"],
    duration: "3 Days",
    groupSize: "4-8 people",
    difficulty: "Challenging",
    region: "East Africa",
    country: "Rwanda",
    highlights: [
      "Volcanoes National Park exploration",
      "Mountain gorilla trekking",
      "Local cultural experiences",
      "Expert wildlife guides",
      "Luxury accommodations"
    ],
    included: [
      "Luxury accommodation",
      "All meals included",
      "Gorilla trekking permits",
      "Expert guide services",
      "Cultural tour fees"
    ],
    excluded: ["International flights", "Travel insurance", "Personal expenses", "Visa fees"],
    itinerary: [
      {
        day: 1,
        title: "Arrival and Lodge Check-in",
        description: "Arrival and lodge check-in with orientation."
      },
      {
        day: 2,
        title: "Gorilla Trekking",
        description: "Gorilla trekking in Volcanoes National Park."
      },
      {
        day: 3,
        title: "Cultural Tour and Departure",
        description: "Cultural tour and departure."
      }
    ],
    rating: 4.9,
    reviewCount: 72,
    metaTitle: "Rwanda Gorilla Safari | Jae Travel Expeditions",
    metaDescription: "Book your Rwanda Gorilla Safari in Volcanoes National Park. Trek gorillas, enjoy cultural tours, and luxury accommodations.",
    keywords: ["Rwanda Gorilla Safari", "Volcanoes National Park", "Gorilla Trekking Rwanda", "Rwanda Tours"],
    category: "Trekking",
    isPopular: true,
    isOnOffer: true,
    bestFor: ["Adventure travelers", "Wildlife photographers", "Cultural explorers"],
    bookingUrl: "/booking/volcanoes-national-park-safari",
    url: ""
  },
  {
    id: "1",
    slug: "masai-mara-safari-adventure",
    title: "Masai Mara Safari Adventure",
    description: "Experience the great migration and witness the Big Five in Kenya's most iconic national reserve.",
    shortDescription: "5-day safari adventure in Masai Mara",
    price: 1200,
    currency: "USD",
    image: "/magestic-maasai-serengeti.jpg",
    gallery: ["/magestic-maasai-serengeti.jpg"],
    duration: "5 Days",
    groupSize: "4-12 people",
    difficulty: "Easy",
    region: "East Africa",
    country: "Kenya",
    highlights: [
      "Great Migration viewing",
      "Big Five wildlife",
      "Expert safari guides",
      "Comfortable accommodations",
      "Cultural experiences"
    ],
    included: [
      "Lodge accommodation",
      "All meals included",
      "Park entrance fees",
      "Expert guide services",
      "Game drive vehicle"
    ],
    excluded: ["International flights", "Travel insurance", "Personal expenses", "Visa fees"],
    itinerary: [
      {
        day: 1,
        title: "Arrival and Lodge Check-in",
        description: "Arrival and lodge check-in."
      },
      {
        day: 2,
        title: "Morning and Evening Game Drives",
        description: "Morning and evening game drives."
      },
      {
        day: 3,
        title: "Full Day Wildlife Viewing",
        description: "Full day of wildlife viewing and migration tracking."
      },
      {
        day: 4,
        title: "Cultural Activities",
        description: "Cultural activities and additional game drives."
      },
      {
        day: 5,
        title: "Departure",
        description: "Final game drive before departure."
      }
    ],
    rating: 4.9,
    reviewCount: 156,
    metaTitle: "Masai Mara Safari Adventure - 5 Days | Jae Travel Expeditions",
    metaDescription: "Experience the great migration and witness the Big Five in Masai Mara. 5-day safari with expert guides, luxury lodges, and unforgettable wildlife encounters.",
    keywords: ["Masai Mara", "Kenya Safari", "Big Five", "Great Migration", "Wildlife Safari"],
    category: "Safari",
    isPopular: true,
    bestFor: ["Wildlife enthusiasts", "First-time safari goers", "Families"],
    bookingUrl: "/booking/masai-mara-safari-adventure",
    url: ""
  },
  {
    id: "2",
    slug: "amboseli-elephant-safari",
    title: "Amboseli Elephant Safari",
    description: "Get close to elephants with Mount Kilimanjaro backdrop in Amboseli National Park.",
    shortDescription: "Close elephant encounters with Kilimanjaro views",
    price: 980,
    currency: "USD",
    image: "/amboseli-elephants-00007.jpg",
    gallery: ["/amboseli-elephants-00007.jpg"],
    duration: "4 Days",
    groupSize: "4-10 people",
    difficulty: "Easy",
    region: "East Africa",
    country: "Kenya",
    highlights: [
      "Close elephant viewing",
      "Mount Kilimanjaro backdrop",
      "Professional photography opportunities",
      "Bird watching",
      "Cultural interactions"
    ],
    included: [
      "Lodge accommodation",
      "All meals included",
      "Park entrance fees",
      "Expert guide services",
      "Game drive vehicle"
    ],
    excluded: ["International flights", "Travel insurance", "Personal expenses", "Visa fees"],
    itinerary: [
      {
        day: 1,
        title: "Arrival and Orientation",
        description: "Arrival and lodge check-in with orientation."
      },
      {
        day: 2,
        title: "Elephant Viewing Drives",
        description: "Game drives focusing on elephant herds and wildlife."
      },
      {
        day: 3,
        title: "Full Day Exploration",
        description: "Full day exploring Amboseli's diverse ecosystems."
      },
      {
        day: 4,
        title: "Departure",
        description: "Morning game drive before departure."
      }
    ],
    rating: 4.7,
    reviewCount: 89,
    metaTitle: "Amboseli Elephant Safari - 4 Days | Jae Travel Expeditions",
    metaDescription: "Get close to elephants with Mount Kilimanjaro backdrop. 4-day Amboseli safari with spectacular views and abundant wildlife.",
    keywords: ["Amboseli", "Elephant Safari", "Kilimanjaro", "Kenya Wildlife"],
    category: "Safari",
    isPopular: true,
    bestFor: ["Elephant lovers", "Photographers", "Nature enthusiasts"],
    bookingUrl: "/booking/amboseli-elephant-safari",
    url: ""
  },
  {
    id: "3",
    slug: "samburu-game-reserve",
    title: "Samburu Game Reserve",
    description: "Discover unique wildlife in the northern frontier.",
    shortDescription: "Unique northern Kenya wildlife experience",
    price: 750,
    currency: "USD",
    image: "/Samburu_National_Reserve,_Kenya-26December2012.jpg",
    gallery: ["/Samburu_National_Reserve,_Kenya-26December2012.jpg"],
    duration: "3 Days",
    groupSize: "4-8 people",
    difficulty: "Easy",
    region: "East Africa",
    country: "Kenya",
    highlights: [
      "Unique northern species",
      "Grevy's zebra viewing",
      "Reticulated giraffes",
      "Cultural experiences",
      "Remote wilderness"
    ],
    included: [
      "Lodge accommodation",
      "All meals included",
      "Park entrance fees",
      "Expert guide services",
      "Game drive vehicle"
    ],
    excluded: ["International flights", "Travel insurance", "Personal expenses", "Visa fees"],
    itinerary: [
      {
        day: 1,
        title: "Arrival and Check-in",
        description: "Arrival and lodge check-in in Samburu."
      },
      {
        day: 2,
        title: "Full-day Game Drives",
        description: "Full-day game drives exploring unique wildlife species."
      },
      {
        day: 3,
        title: "Departure",
        description: "Morning activities before departure."
      }
    ],
    rating: 4.6,
    reviewCount: 45,
    metaTitle: "Samburu Game Reserve Safari - 3 Days | Jae Travel Expeditions",
    metaDescription: "Discover unique wildlife in the northern frontier of Kenya at Samburu Game Reserve. See rare species like Grevy's zebra and reticulated giraffe.",
    keywords: ["Samburu", "Game Reserve", "Northern Kenya", "Unique Wildlife"],
    category: "Safari",
    bestFor: ["Wildlife enthusiasts", "Adventure seekers", "Photographers"],
    bookingUrl: "/booking/samburu-game-reserve",
    url: ""
  },
  {
    id: "4",
    slug: "lake-nakuru-flamingo-spectacle",
    title: "Lake Nakuru Flamingo Tour",
    description: "Witness thousands of flamingos in their natural habitat.",
    shortDescription: "Flamingo watching at Lake Nakuru",
    price: 450,
    currency: "USD",
    originalPrice: 550,
    image: "/lake-nakuru-flamingos-in-red-sunset-590x390.jpg",
    gallery: ["/lake-nakuru-flamingos-in-red-sunset-590x390.jpg"],
    duration: "2 Days",
    groupSize: "4-8 people",
    difficulty: "Easy",
    region: "East Africa",
    country: "Kenya",
    highlights: [
      "Thousands of flamingos",
      "Bird watching paradise",
      "Lake ecosystem",
      "Photography opportunities",
      "Nature walks"
    ],
    included: [
      "Lodge accommodation",
      "All meals included",
      "Park entrance fees",
      "Expert bird guide",
      "Transportation"
    ],
    excluded: ["International flights", "Travel insurance", "Personal expenses", "Visa fees"],
    itinerary: [
      {
        day: 1,
        title: "Arrival and Afternoon Game Drive",
        description: "Arrival and afternoon game drive focusing on bird watching."
      },
      {
        day: 2,
        title: "Morning Bird Watching and Departure",
        description: "Morning bird watching session before departure."
      }
    ],
    rating: 4.5,
    reviewCount: 67,
    metaTitle: "Lake Nakuru Flamingo Tour - 2 Days | Jae Travel Expeditions",
    metaDescription: "Witness thousands of flamingos in their natural habitat at Lake Nakuru. Perfect for bird watchers and photographers.",
    keywords: ["Lake Nakuru", "Flamingos", "Bird Watching", "Kenya"],
    category: "Budget",
    isPopular: true,
    isOnOffer: true,
    bestFor: ["Bird watchers", "Photographers", "Budget travelers"],
    bookingUrl: "/booking/lake-nakuru-flamingo-spectacle",
    url: ""
  },
  {
    id: "5",
    slug: "tsavo-east-west-adventure",
    title: "Tsavo East & West Safari",
    description: "Explore Kenya's largest national park.",
    shortDescription: "Kenya's largest national park adventure",
    price: 1350,
    currency: "USD",
    image: "/tsavo-west-national-park-chyulu-gate.jpg.webp",
    gallery: ["/tsavo-west-national-park-chyulu-gate.jpg.webp"],
    duration: "6 Days",
    groupSize: "4-12 people",
    difficulty: "Easy",
    region: "East Africa",
    country: "Kenya",
    highlights: [
      "Kenya's largest park",
      "Red elephant herds",
      "Diverse landscapes",
      "Mzima Springs",
      "Lugard Falls"
    ],
    included: [
      "Lodge accommodation",
      "All meals included",
      "Park entrance fees",
      "Expert guide services",
      "Game drive vehicle"
    ],
    excluded: ["International flights", "Travel insurance", "Personal expenses", "Visa fees"],
    itinerary: [
      {
        day: 1,
        title: "Arrival at Tsavo East",
        description: "Arrival and check-in at Tsavo East lodge."
      },
      {
        day: 2,
        title: "Tsavo East Exploration",
        description: "Game drives in Tsavo East focusing on red elephants."
      },
      {
        day: 3,
        title: "Continue Tsavo East",
        description: "Further exploration of Tsavo East's diverse wildlife."
      },
      {
        day: 4,
        title: "Transfer to Tsavo West",
        description: "Transfer to Tsavo West and afternoon game drive."
      },
      {
        day: 5,
        title: "Tsavo West Exploration",
        description: "Full day exploring Tsavo West including Mzima Springs."
      },
      {
        day: 6,
        title: "Departure",
        description: "Morning game drive before departure."
      }
    ],
    rating: 4.8,
    reviewCount: 73,
    metaTitle: "Tsavo East & West Safari - 6 Days | Jae Travel Expeditions",
    metaDescription: "Explore Kenya's largest national park with our Tsavo East & West Safari. See red elephants, diverse landscapes, and abundant wildlife.",
    keywords: ["Tsavo", "National Park", "Kenya Safari", "Red Elephants"],
    category: "Safari",
    isPopular: true,
    bestFor: ["Adventure seekers", "Wildlife enthusiasts", "Photographers"],
    bookingUrl: "/booking/tsavo-east-west-adventure",
    url: ""
  },
  {
    id: "6",
    slug: "mombasa-coastal-safari",
    title: "Mombasa Beach & Safari",
    description: "Combine safari adventures with beach relaxation.",
    shortDescription: "Safari and beach combination package",
    price: 1600,
    currency: "USD",
    image: "/Mombasa-beach-2-1960x800.webp",
    gallery: ["/Mombasa-beach-2-1960x800.webp"],
    duration: "7 Days",
    groupSize: "4-10 people",
    difficulty: "Easy",
    region: "East Africa",
    country: "Kenya",
    highlights: [
      "Safari adventure",
      "Beach relaxation",
      "Cultural experiences",
      "Water sports",
      "Coastal cuisine"
    ],
    included: [
      "Safari lodge accommodation",
      "Beach resort stay",
      "All meals included",
      "Park entrance fees",
      "Some water sports"
    ],
    excluded: ["International flights", "Travel insurance", "Personal expenses", "Visa fees"],
    itinerary: [
      {
        day: 1,
        title: "Safari Begins - Tsavo East",
        description: "Arrival and start of safari in Tsavo East."
      },
      {
        day: 2,
        title: "Game Drives",
        description: "Full day of game drives in Tsavo East."
      },
      {
        day: 3,
        title: "Continue Safari",
        description: "Additional safari experiences and wildlife viewing."
      },
      {
        day: 4,
        title: "Transfer to Mombasa",
        description: "Transfer to Mombasa beach resort."
      },
      {
        day: 5,
        title: "Beach Relaxation",
        description: "Beach relaxation and optional water sports."
      },
      {
        day: 6,
        title: "Cultural Tours",
        description: "Cultural tours and beach activities."
      },
      {
        day: 7,
        title: "Departure",
        description: "Final beach time before departure."
      }
    ],
    rating: 4.7,
    reviewCount: 91,
    metaTitle: "Mombasa Beach & Safari - 7 Days | Jae Travel Expeditions",
    metaDescription: "Combine safari adventures with beach relaxation on our Mombasa Beach & Safari package. Perfect blend of wildlife and coastal paradise.",
    keywords: ["Mombasa", "Beach Safari", "Coastal Kenya", "Safari and Beach"],
    category: "Beach",
    isPopular: true,
    bestFor: ["Families", "Couples", "Adventure and relaxation seekers"],
    bookingUrl: "/booking/mombasa-coastal-safari",
    url: ""
  },
  {
    id: "7",
    slug: "mount-kenya-climbing-expedition",
    title: "Mount Kenya Climbing",
    description: "Challenge yourself with Africa's second highest peak.",
    shortDescription: "Climb Africa's second highest peak",
    price: 1100,
    currency: "USD",
    image: "/mt-kenya.jpg",
    gallery: ["/mt-kenya.jpg"],
    duration: "5 Days",
    groupSize: "4-8 people",
    difficulty: "Challenging",
    region: "East Africa",
    country: "Kenya",
    highlights: [
      "Africa's second highest peak",
      "Point Lenana summit",
      "Mountain climbing experience",
      "Stunning views",
      "Expert mountain guides"
    ],
    included: [
      "Mountain hut accommodation",
      "All meals on mountain",
      "Professional guides",
      "Porter services",
      "Park fees and permits"
    ],
    excluded: ["International flights", "Travel insurance", "Personal gear", "Visa fees"],
    itinerary: [
      {
        day: 1,
        title: "Arrival and Briefing",
        description: "Arrival and climbing preparation briefing."
      },
      {
        day: 2,
        title: "Start Climbing",
        description: "Begin climbing expedition to first camp."
      },
      {
        day: 3,
        title: "Continue Ascent",
        description: "Continue climbing through various zones."
      },
      {
        day: 4,
        title: "Summit Day",
        description: "Reach Point Lenana summit and begin descent."
      },
      {
        day: 5,
        title: "Departure",
        description: "Complete descent and departure."
      }
    ],
    rating: 4.4,
    reviewCount: 38,
    metaTitle: "Mount Kenya Climbing Expedition - 5 Days | Jae Travel Expeditions",
    metaDescription: "Challenge yourself with Africa's second highest peak on our Mount Kenya climbing expedition. Reach Point Lenana with expert guides.",
    keywords: ["Mount Kenya", "Climbing", "Trekking", "Mountain Expedition"],
    category: "Adventure",
    bestFor: ["Mountain climbers", "Adventure seekers", "Fitness enthusiasts"],
    bookingUrl: "/booking/mount-kenya-climbing-expedition",
    url: ""
  },
  {
    id: "8",
    slug: "laikipia-conservancy",
    title: "Laikipia Conservancy",
    description: "Experience conservation in action.",
    shortDescription: "Conservation-focused safari experience",
    price: 1250,
    currency: "USD",
    image: "/laikipia-kenya-photography-safari.jpg",
    gallery: ["/laikipia-kenya-photography-safari.jpg"],
    duration: "4 Days",
    groupSize: "4-8 people",
    difficulty: "Easy",
    region: "East Africa",
    country: "Kenya",
    highlights: [
      "Conservation activities",
      "Community engagement",
      "Wildlife protection",
      "Educational experiences",
      "Sustainable tourism"
    ],
    included: [
      "Conservancy accommodation",
      "All meals included",
      "Conservation activity fees",
      "Expert guide services",
      "Community visit fees"
    ],
    excluded: ["International flights", "Travel insurance", "Personal expenses", "Visa fees"],
    itinerary: [
      {
        day: 1,
        title: "Arrival and Orientation",
        description: "Arrival and conservation program orientation."
      },
      {
        day: 2,
        title: "Conservation Activities",
        description: "Participate in conservation activities and game drives."
      },
      {
        day: 3,
        title: "Community Visits",
        description: "Community visits and continued conservation work."
      },
      {
        day: 4,
        title: "Departure",
        description: "Final conservation activities before departure."
      }
    ],
    rating: 4.8,
    reviewCount: 52,
    metaTitle: "Laikipia Conservancy Experience - 4 Days | Jae Travel Expeditions",
    metaDescription: "Experience conservation in action at Laikipia Conservancy. Engage with wildlife protection efforts and community development.",
    keywords: ["Laikipia", "Conservancy", "Conservation", "Community Tourism"],
    category: "Cultural",
    bestFor: ["Conservation enthusiasts", "Educational travelers", "Community-focused tourists"],
    bookingUrl: "/booking/laikipia-conservancy",
    url: ""
  },
  {
    id: "9",
    slug: "hell-gate-lake-naivasha-adventure",
    title: "Hell's Gate Adventure",
    description: "Bike and hike through dramatic landscapes.",
    shortDescription: "Biking and hiking adventure in Hell's Gate",
    price: 380,
    currency: "USD",
    image: "/Hells-Gate-National-Park.jpg",
    gallery: ["/Hells-Gate-National-Park.jpg"],
    duration: "2 Days",
    groupSize: "4-12 people",
    difficulty: "Moderate",
    region: "East Africa",
    country: "Kenya",
    highlights: [
      "Biking through park",
      "Gorge hiking",
      "Dramatic landscapes",
      "Boat safari",
      "Adventure activities"
    ],
    included: [
      "Accommodation",
      "All meals included",
      "Bike rental",
      "Park entrance fees",
      "Boat safari"
    ],
    excluded: ["International flights", "Travel insurance", "Personal expenses", "Visa fees"],
    itinerary: [
      {
        day: 1,
        title: "Biking and Gorge Hiking",
        description: "Biking in Hell's Gate and gorge hiking adventure."
      },
      {
        day: 2,
        title: "Boat Safari and Departure",
        description: "Boat safari on Lake Naivasha and departure."
      }
    ],
    rating: 4.3,
    reviewCount: 84,
    metaTitle: "Hell's Gate Adventure Tour - 2 Days | Jae Travel Expeditions",
    metaDescription: "Bike and hike through dramatic landscapes at Hell's Gate National Park. Unique safari experience with cycling and gorge exploration.",
    keywords: ["Hell's Gate", "Adventure", "Biking", "Lake Naivasha"],
    category: "Adventure",
    isPopular: true,
    bestFor: ["Adventure seekers", "Active travelers", "Nature enthusiasts"],
    bookingUrl: "/booking/hell-gate-lake-naivasha-adventure",
    url: ""
  },
  {
    id: "10",
    slug: "maasai-cultural-experience",
    title: "Maasai Cultural Experience",
    description: "Immerse yourself in Maasai culture.",
    shortDescription: "Authentic Maasai cultural immersion",
    price: 650,
    currency: "USD",
    image: "/magestic-maasai-serengeti.jpg",
    gallery: ["/magestic-maasai-serengeti.jpg"],
    duration: "3 Days",
    groupSize: "4-12 people",
    difficulty: "Easy",
    region: "East Africa",
    country: "Kenya",
    highlights: [
      "Traditional Maasai ceremonies",
      "Cultural immersion",
      "Traditional dances",
      "Village life experience",
      "Handicraft workshops"
    ],
    included: [
      "Traditional accommodation",
      "All meals included",
      "Cultural activity fees",
      "Expert local guides",
      "Transportation"
    ],
    excluded: ["International flights", "Travel insurance", "Personal expenses", "Visa fees"],
    itinerary: [
      {
        day: 1,
        title: "Arrival and Welcome Ceremony",
        description: "Arrival and traditional Maasai welcome ceremony."
      },
      {
        day: 2,
        title: "Cultural Activities",
        description: "Cultural activities, traditional dances, and village tour."
      },
      {
        day: 3,
        title: "Departure",
        description: "Final cultural experiences before departure."
      }
    ],
    rating: 4.6,
    reviewCount: 96,
    metaTitle: "Maasai Cultural Experience - 3 Days | Jae Travel Expeditions",
    metaDescription: "Immerse yourself in Maasai culture with our authentic cultural experience. Learn traditions, participate in ceremonies, and stay in a Maasai village.",
    keywords: ["Maasai", "Cultural Experience", "Kenya Culture", "Traditional Village"],
    category: "Cultural",
    isPopular: true,
    bestFor: ["Cultural enthusiasts", "Educational travelers", "Family learning"],
    bookingUrl: "/booking/maasai-cultural-experience",
    url: ""
  },
  {
    id: "11",
    slug: "aberdare-national-park-safari",
    title: "Aberdare National Park",
    description: "Mountain forest safari experience.",
    shortDescription: "Mountain forest wildlife adventure",
    price: 720,
    currency: "USD",
    image: "/Aberdare.jpg",
    gallery: ["/Aberdare.jpg"],
    duration: "3 Days",
    groupSize: "4-8 people",
    difficulty: "Easy",
    region: "East Africa",
    country: "Kenya",
    highlights: [
      "Mountain forest ecosystem",
      "Rare wildlife species",
      "Waterfall views",
      "Forest walks",
      "Bird watching"
    ],
    included: [
      "Lodge accommodation",
      "All meals included",
      "Park entrance fees",
      "Expert guide services",
      "Forest walk guides"
    ],
    excluded: ["International flights", "Travel insurance", "Personal expenses", "Visa fees"],
    itinerary: [
      {
        day: 1,
        title: "Arrival and Check-in",
        description: "Arrival and lodge check-in in Aberdare."
      },
      {
        day: 2,
        title: "Forest Exploration",
        description: "Forest walks and game viewing in mountain environment."
      },
      {
        day: 3,
        title: "Departure",
        description: "Morning activities before departure."
      }
    ],
    rating: 4.5,
    reviewCount: 41,
    metaTitle: "Aberdare National Park Safari - 3 Days | Jae Travel Expeditions",
    metaDescription: "Experience a mountain forest safari in Aberdare National Park. See rare bongo antelopes, elephants, and stunning waterfalls.",
    keywords: ["Aberdare", "National Park", "Mountain Safari", "Forest Wildlife"],
    category: "Safari",
    bestFor: ["Nature lovers", "Bird watchers", "Adventure seekers"],
    bookingUrl: "/booking/aberdare-national-park-safari",
    url: ""
  },
  {
    id: "12",
    slug: "diani-beach-safari-combo",
    title: "Diani Beach Safari Combo",
    description: "Ultimate Kenya safari and beach experience.",
    shortDescription: "Safari and Diani Beach combination",
    price: 1800,
    currency: "USD",
    image: "/Kenia-Mombasa-Diani-Beach-Leopard-Beach-Resort-strand-long-beach-LBR_1.jpg",
    gallery: ["/Kenia-Mombasa-Diani-Beach-Leopard-Beach-Resort-strand-long-beach-LBR_1.jpg"],
    duration: "8 Days",
    groupSize: "4-10 people",
    difficulty: "Easy",
    region: "East Africa",
    country: "Kenya",
    highlights: [
      "Tsavo West safari",
      "Diani Beach relaxation",
      "Snorkeling and diving",
      "Cultural tours",
      "Luxury accommodations"
    ],
    included: [
      "Safari lodge accommodation",
      "Beach resort stay",
      "All meals included",
      "Park entrance fees",
      "Some water activities"
    ],
    excluded: ["International flights", "Travel insurance", "Personal expenses", "Visa fees"],
    itinerary: [
      {
        day: 1,
        title: "Safari Start - Tsavo West",
        description: "Arrival and start of safari in Tsavo West."
      },
      {
        day: 2,
        title: "Game Drives",
        description: "Full day of game drives in Tsavo West."
      },
      {
        day: 3,
        title: "Continue Safari",
        description: "Additional wildlife viewing and experiences."
      },
      {
        day: 4,
        title: "Transfer to Diani",
        description: "Transfer to Diani Beach resort."
      },
      {
        day: 5,
        title: "Beach Relaxation",
        description: "Beach relaxation and water activities."
      },
      {
        day: 6,
        title: "Water Sports",
        description: "Snorkeling, diving, and beach activities."
      },
      {
        day: 7,
        title: "Cultural Experiences",
        description: "Cultural tours and final beach day."
      },
      {
        day: 8,
        title: "Departure",
        description: "Final beach time before departure."
      }
    ],
    rating: 4.9,
    reviewCount: 108,
    metaTitle: "Diani Beach Safari Combo - 8 Days | Jae Travel Expeditions",
    metaDescription: "Experience the ultimate Kenya safari and beach experience at Diani Beach. Perfect combination of wildlife adventures and tropical paradise.",
    keywords: ["Diani Beach", "Beach Safari", "Kenya Coast", "Safari Beach Combo"],
    category: "Beach",
    isPopular: true,
    bestFor: ["Families", "Couples", "Luxury travelers"],
    bookingUrl: "/booking/diani-beach-safari-combo",
    url: ""
  },
  {
    id: "13",
    slug: "serengeti-wildlife-safari",
    title: "Serengeti Wildlife Safari",
    description: "Explore the endless plains of Serengeti and witness incredible wildlife diversity.",
    shortDescription: "7-day Serengeti wildlife exploration",
    price: 1800,
    currency: "USD",
    image: "/serengeti-day-trip.jpeg",
    gallery: ["/serengeti-day-trip.jpeg"],
    duration: "7 Days",
    groupSize: "4-12 people",
    difficulty: "Easy",
    region: "East Africa",
    country: "Tanzania",
    highlights: [
      "Endless Serengeti plains",
      "Incredible wildlife diversity",
      "Expert tracking guides",
      "Luxury camp accommodation",
      "Sunset game drives"
    ],
    included: [
      "Luxury camp accommodation",
      "All meals included",
      "Park entrance fees",
      "Expert guide services",
      "Game drive vehicle"
    ],
    excluded: ["International flights", "Travel insurance", "Personal expenses", "Visa fees"],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Arusha",
        description: "Arrival in Arusha and preparation for safari."
      },
      {
        day: 2,
        title: "Enter Serengeti",
        description: "Travel to Serengeti and first game drive."
      },
      {
        day: 3,
        title: "Wildlife Tracking",
        description: "Full day tracking wildlife across Serengeti."
      },
      {
        day: 4,
        title: "Continue Exploration",
        description: "Further exploration of Serengeti's diverse ecosystems."
      },
      {
        day: 5,
        title: "Predator Focus",
        description: "Focus on predator viewing and behavior."
      },
      {
        day: 6,
        title: "Final Game Drives",
        description: "Final extensive game drives in Serengeti."
      },
      {
        day: 7,
        title: "Departure via Arusha",
        description: "Return to Arusha for departure."
      }
    ],
    rating: 4.8,
    reviewCount: 142,
    metaTitle: "Serengeti Wildlife Safari - 7 Days | Jae Travel Expeditions",
    metaDescription: "Explore the endless plains of Serengeti on a 7-day wildlife safari. Experience incredible biodiversity and stunning landscapes.",
    keywords: ["Serengeti", "Wildlife Safari", "Tanzania", "African Safari", "Big Five"],
    category: "Safari",
    isPopular: true,
    bestFor: ["Wildlife enthusiasts", "Photographers", "Nature lovers"],
    bookingUrl: "/booking/serengeti-wildlife-safari",
    url: ""
  },
  {
    id: "14",
    slug: "ngorongoro-crater-tour",
    title: "Ngorongoro Crater Tour",
    description: "Visit the world's largest intact caldera.",
    shortDescription: "World's largest caldera exploration",
    price: 950,
    currency: "USD",
    image: "/Ngorongoro-Crater.jpg",
    gallery: ["/Ngorongoro-Crater.jpg"],
    duration: "3 Days",
    groupSize: "4-10 people",
    difficulty: "Easy",
    region: "East Africa",
    country: "Tanzania",
    highlights: [
      "World's largest caldera",
      "Dense wildlife populations",
      "Flamingo flocks",
      "Scenic viewpoints",
      "Conservation area"
    ],
    included: [
      "Lodge accommodation",
      "All meals included",
      "Park entrance fees",
      "Expert guide services",
      "Crater descent permit"
    ],
    excluded: ["International flights", "Travel insurance", "Personal expenses", "Visa fees"],
    itinerary: [
      {
        day: 1,
        title: "Arrival and Lodge Check-in",
        description: "Arrival and check-in at crater rim lodge."
      },
      {
        day: 2,
        title: "Full-day Crater Tour",
        description: "Full-day exploration inside Ngorongoro Crater."
      },
      {
        day: 3,
        title: "Departure",
        description: "Morning activities before departure."
      }
    ],
    rating: 4.9,
    reviewCount: 118,
    metaTitle: "Ngorongoro Crater Tour - 3 Days | Jae Travel Expeditions",
    metaDescription: "Visit the world's largest intact caldera at Ngorongoro Crater. Witness dense wildlife populations in this natural wonder.",
    keywords: ["Ngorongoro", "Crater", "Caldera", "Tanzania Safari"],
    category: "Safari",
    isPopular: true,
    bestFor: ["Families", "Photographers", "Wildlife enthusiasts"],
    bookingUrl: "/booking/ngorongoro-crater-tour",
    url: ""
  },
  {
    id: "15",
    slug: "kilimanjaro-climbing-expedition",
    title: "Kilimanjaro Climbing",
    description: "Conquer Africa's highest peak.",
    shortDescription: "Reach the summit of Africa's highest peak",
    price: 2200,
    currency: "USD",
    image: "/kilimanjaro-moutain-climbing.jpg",
    gallery: ["/kilimanjaro-moutain-climbing.jpg", "/mount-kilimanjaro-snow-peak.jpg"],
    duration: "9 Days",
    groupSize: "4-12 people",
    difficulty: "Very Challenging",
    region: "East Africa",
    country: "Tanzania",
    highlights: [
      "Africa's highest peak",
      "Uhuru Peak summit",
      "Multiple climate zones",
      "Expert mountain guides",
      "Breathtaking views"
    ],
    included: [
      "Mountain accommodation",
      "All meals on mountain",
      "Professional guides",
      "Porter services",
      "Park fees and permits"
    ],
    excluded: ["International flights", "Travel insurance", "Personal gear", "Visa fees"],
    itinerary: [
      {
        day: 1,
        title: "Arrival and Briefing",
        description: "Arrival and briefing on climbing route and preparation."
      },
      {
        day: 2,
        title: "Machame Gate to Machame Camp",
        description: "Start climbing from Machame Gate to Machame Camp."
      },
      {
        day: 3,
        title: "Machame to Shira Plateau",
        description: "Trek to Shira Plateau with acclimatization."
      },
      {
        day: 4,
        title: "Shira to Barranco Camp",
        description: "Continue to Barranco Camp with scenic views."
      },
      {
        day: 5,
        title: "Barranco to Karanga Valley",
        description: "Trek through Karanga Valley to camp."
      },
      {
        day: 6,
        title: "Karanga to Barafu Camp",
        description: "Reach Barafu Camp, final rest before summit."
      },
      {
        day: 7,
        title: "Summit Day",
        description: "Midnight departure, summit Uhuru Peak at sunrise."
      },
      {
        day: 8,
        title: "Final Descent",
        description: "Descend to Mweka Gate."
      },
      {
        day: 9,
        title: "Departure",
        description: "Rest and recovery before departure."
      }
    ],
    rating: 4.7,
    reviewCount: 76,
    metaTitle: "Kilimanjaro Climbing Expedition - 9 Days | Jae Travel Expeditions",
    metaDescription: "Conquer Africa's highest peak on our Mount Kilimanjaro climbing expedition. Reach Uhuru Peak with experienced guides.",
    keywords: ["Kilimanjaro", "Climbing", "Trekking", "Summit", "Machame Route"],
    category: "Adventure",
    isPopular: true,
    bestFor: ["Adventure seekers", "Mountain climbers", "Fitness enthusiasts"],
    bookingUrl: "/booking/kilimanjaro-climbing-expedition",
    url: ""
  },
  {
    id: "16",
    slug: "tarangire-national-park-safari",
    title: "Tarangire Elephant Safari",
    description: "See large herds of elephants.",
    shortDescription: "Elephant-focused safari in Tarangire",
    price: 1100,
    currency: "USD",
    image: "/boabab-tarangire-national-park.jpg",
    gallery: ["/boabab-tarangire-national-park.jpg"],
    duration: "4 Days",
    groupSize: "4-8 people",
    difficulty: "Easy",
    region: "East Africa",
    country: "Tanzania",
    highlights: [
      "Large elephant herds",
      "Ancient baobab trees",
      "River ecosystem",
      "Bird diversity",
      "Photography opportunities"
    ],
    included: [
      "Lodge accommodation",
      "All meals included",
      "Park entrance fees",
      "Expert guide services",
      "Game drive vehicle"
    ],
    excluded: ["International flights", "Travel insurance", "Personal expenses", "Visa fees"],
    itinerary: [
      {
        day: 1,
        title: "Arrival and Check-in",
        description: "Arrival and lodge check-in in Tarangire."
      },
      {
        day: 2,
        title: "Elephant Focus Drives",
        description: "Game drives focusing on elephant herds and behavior."
      },
      {
        day: 3,
        title: "Full Park Exploration",
        description: "Full exploration of Tarangire's diverse wildlife."
      },
      {
        day: 4,
        title: "Departure",
        description: "Morning game drive before departure."
      }
    ],
    rating: 4.6,
    reviewCount: 63,
    metaTitle: "Tarangire Elephant Safari - 4 Days | Jae Travel Expeditions",
    metaDescription: "See large herds of elephants in Tarangire National Park. Famous for its elephant population and ancient baobab trees.",
    keywords: ["Tarangire", "Elephant Safari", "Tanzania", "Baobab Trees"],
    category: "Safari",
    bestFor: ["Elephant enthusiasts", "Photographers", "Wildlife lovers"],
    bookingUrl: "/booking/tarangire-national-park-safari",
    url: ""
  },
  {
    id: "17",
    slug: "lake-manyara-national-park-safari",
    title: "Lake Manyara Tree Climbing Lions",
    description: "Witness unique tree-climbing lions.",
    shortDescription: "Tree-climbing lions experience",
    price: 580,
    currency: "USD",
    image: "/Lake Manyara banner.jpg",
    gallery: ["/Lake Manyara banner.jpg"],
    duration: "2 Days",
    groupSize: "4-8 people",
    difficulty: "Easy",
    region: "East Africa",
    country: "Tanzania",
    highlights: [
      "Tree-climbing lions",
      "Lake ecosystem",
      "Bird watching",
      "Compact park exploration",
      "Unique wildlife behavior"
    ],
    included: [
      "Lodge accommodation",
      "All meals included",
      "Park entrance fees",
      "Expert guide services",
      "Game drive vehicle"
    ],
    excluded: ["International flights", "Travel insurance", "Personal expenses", "Visa fees"],
    itinerary: [
      {
        day: 1,
        title: "Arrival and Afternoon Drive",
        description: "Arrival and afternoon game drive focusing on lions."
      },
      {
        day: 2,
        title: "Morning Drive and Departure",
        description: "Morning game drive and departure."
      }
    ],
    rating: 4.4,
    reviewCount: 54,
    metaTitle: "Lake Manyara Tree Climbing Lions Safari - 2 Days | Jae Travel Expeditions",
    metaDescription: "Witness unique tree-climbing lions in Lake Manyara National Park. Compact park with diverse ecosystems and abundant birdlife.",
    keywords: ["Lake Manyara", "Tree Climbing Lions", "Tanzania Safari", "Bird Watching"],
    category: "Safari",
    bestFor: ["Wildlife enthusiasts", "Bird watchers", "Photographers"],
    bookingUrl: "/booking/lake-manyara-national-park-safari",
    url: ""
  },
  {
    id: "18",
    slug: "zanzibar-beach-holiday",
    title: "Zanzibar Spice Island",
    description: "Explore the spice island paradise.",
    shortDescription: "Beach relaxation and spice tours in Zanzibar",
    price: 1300,
    currency: "USD",
    image: "/zanzibar-stone-town-view-min-800x600.jpg",
    gallery: ["/zanzibar-stone-town-view-min-800x600.jpg", "/zanzibar-beach.jpg"],
    duration: "5 Days",
    groupSize: "2-8 people",
    difficulty: "Easy",
    region: "East Africa",
    country: "Tanzania",
    highlights: [
      "Pristine beaches",
      "Historic Stone Town",
      "Spice plantation tours",
      "Water sports activities",
      "Cultural experiences"
    ],
    included: [
      "Beach resort accommodation",
      "All meals included",
      "Spice tour fees",
      "Stone Town tour",
      "Some water sports"
    ],
    excluded: ["International flights", "Travel insurance", "Personal expenses", "Visa fees"],
    itinerary: [
      {
        day: 1,
        title: "Arrival and Stone Town Tour",
        description: "Arrival and guided tour of historic Stone Town."
      },
      {
        day: 2,
        title: "Beach Relaxation",
        description: "Beach relaxation and optional water sports."
      },
      {
        day: 3,
        title: "Spice Tours",
        description: "Spice plantation tours and cultural experiences."
      },
      {
        day: 4,
        title: "Water Activities",
        description: "Water sports and beach activities."
      },
      {
        day: 5,
        title: "Departure",
        description: "Final relaxation before departure."
      }
    ],
    rating: 4.8,
    reviewCount: 134,
    metaTitle: "Zanzibar Spice Island Holiday - 5 Days | Jae Travel Expeditions",
    metaDescription: "Explore the spice island paradise of Zanzibar. White sand beaches, historic Stone Town, and aromatic spice plantations.",
    keywords: ["Zanzibar", "Spice Island", "Beach Holiday", "Stone Town", "Tanzania Coast"],
    category: "Beach",
    isPopular: true,
    bestFor: ["Beach lovers", "Couples", "Cultural explorers"],
    bookingUrl: "/booking/zanzibar-beach-holiday",
    url: ""
  },
  {
    id: "19",
    slug: "ruaha-national-park-safari",
    title: "Ruaha National Park",
    description: "Tanzania's largest national park.",
    shortDescription: "Tanzania's largest park wilderness experience",
    price: 1450,
    currency: "USD",
    image: "/ruaha-national-park-featured.jpg",
    gallery: ["/ruaha-national-park-featured.jpg"],
    duration: "6 Days",
    groupSize: "4-8 people",
    difficulty: "Moderate",
    region: "East Africa",
    country: "Tanzania",
    highlights: [
      "Tanzania's largest park",
      "Remote wilderness",
      "Large elephant populations",
      "Diverse predators",
      "Authentic safari experience"
    ],
    included: [
      "Bush camp accommodation",
      "All meals included",
      "Park entrance fees",
      "Expert guide services",
      "Game drive vehicle"
    ],
    excluded: ["International flights", "Travel insurance", "Personal expenses", "Visa fees"],
    itinerary: [
      {
        day: 1,
        title: "Arrival and Check-in",
        description: "Arrival and check-in at Ruaha bush camp."
      },
      {
        day: 2,
        title: "Wildlife Exploration",
        description: "Game drives exploring Ruaha's vast wilderness."
      },
      {
        day: 3,
        title: "Elephant Tracking",
        description: "Focus on elephant herds and behavior."
      },
      {
        day: 4,
        title: "Predator Viewing",
        description: "Predator tracking and viewing opportunities."
      },
      {
        day: 5,
        title: "Full Day Exploration",
        description: "Full day exploring remote areas of Ruaha."
      },
      {
        day: 6,
        title: "Departure",
        description: "Morning game drive before departure."
      }
    ],
    rating: 4.5,
    reviewCount: 47,
    metaTitle: "Ruaha National Park Safari - 6 Days | Jae Travel Expeditions",
    metaDescription: "Explore Tanzania's largest national park at Ruaha. Remote wilderness with large elephant populations and diverse predators.",
    keywords: ["Ruaha", "National Park", "Tanzania Safari", "Wilderness"],
    category: "Safari",
    bestFor: ["Adventure seekers", "Wildlife enthusiasts", "Remote experience lovers"],
    bookingUrl: "/booking/ruaha-national-park-safari",
    url: ""
  },
  {
    id: "20",
    slug: "selous-game-reserve-safari",
    title: "Selous Game Reserve",
    description: "Africa's largest game reserve.",
    shortDescription: "Africa's largest game reserve adventure",
    price: 1350,
    currency: "USD",
    image: "/SELOUS-GAME-RESERVE.jpg",
    gallery: ["/SELOUS-GAME-RESERVE.jpg"],
    duration: "5 Days",
    groupSize: "4-8 people",
    difficulty: "Easy",
    region: "East Africa",
    country: "Tanzania",
    highlights: [
      "Africa's largest reserve",
      "Boat safaris",
      "Walking safaris",
      "Rufiji River ecosystem",
      "Diverse wildlife"
    ],
    included: [
      "Lodge accommodation",
      "All meals included",
      "Park entrance fees",
      "Boat safari",
      "Walking safari guide"
    ],
    excluded: ["International flights", "Travel insurance", "Personal expenses", "Visa fees"],
    itinerary: [
      {
        day: 1,
        title: "Arrival and Check-in",
        description: "Arrival and lodge check-in in Selous."
      },
      {
        day: 2,
        title: "Game Drives and Boat Safari",
        description: "Game drives and boat safari on Rufiji River."
      },
      {
        day: 3,
        title: "Walking Safari",
        description: "Walking safari experience with armed guide."
      },
      {
        day: 4,
        title: "Full Day Exploration",
        description: "Full day exploring Selous' diverse habitats."
      },
      {
        day: 5,
        title: "Departure",
        description: "Morning activities before departure."
      }
    ],
    rating: 4.7,
    reviewCount: 59,
    metaTitle: "Selous Game Reserve Safari - 5 Days | Jae Travel Expeditions",
    metaDescription: "Explore Africa's largest game reserve at Selous. Boat safaris on the Rufiji River and walking safaris available.",
    keywords: ["Selous", "Game Reserve", "Tanzania", "Boat Safari", "Walking Safari"],
    category: "Safari",
    bestFor: ["Adventure seekers", "Nature lovers", "Photographers"],
    bookingUrl: "/booking/selous-game-reserve-safari",
    url: ""
  },
  {
    id: "21",
    slug: "mikumi-national-park",
    title: "Mikumi National Park",
    description: "Accessible wildlife viewing.",
    shortDescription: "Accessible wildlife viewing near Dar es Salaam",
    price: 750,
    currency: "USD",
    image: "/Mikumi2017.jpg",
    gallery: ["/Mikumi2017.jpg"],
    duration: "3 Days",
    groupSize: "4-8 people",
    difficulty: "Easy",
    region: "East Africa",
    country: "Tanzania",
    highlights: [
      "Accessible location",
      "Abundant wildlife",
      "Easy game viewing",
      "Bird watching",
      "Family-friendly"
    ],
    included: [
      "Lodge accommodation",
      "All meals included",
      "Park entrance fees",
      "Expert guide services",
      "Game drive vehicle"
    ],
    excluded: ["International flights", "Travel insurance", "Personal expenses", "Visa fees"],
    itinerary: [
      {
        day: 1,
        title: "Arrival and Afternoon Drive",
        description: "Arrival and afternoon game drive in Mikumi."
      },
      {
        day: 2,
        title: "Full-day Game Drive",
        description: "Full-day game drive exploring Mikumi's wildlife."
      },
      {
        day: 3,
        title: "Departure",
        description: "Morning activities before departure."
      }
    ],
    rating: 4.3,
    reviewCount: 42,
    metaTitle: "Mikumi National Park Safari - 3 Days | Jae Travel Expeditions",
    metaDescription: "Enjoy accessible wildlife viewing in Mikumi National Park. Close to Dar es Salaam with abundant wildlife.",
    keywords: ["Mikumi", "National Park", "Wildlife Viewing", "Tanzania"],
    category: "Budget",
    bestFor: ["Families", "First-time safari goers", "Budget travelers"],
    bookingUrl: "/booking/mikumi-national-park",
    url: ""
  },
  {
    id: "22",
    slug: "arusha-cultural-tour",
    title: "Arusha Cultural Tour",
    description: "Experience local Tanzanian culture.",
    shortDescription: "Tanzanian cultural immersion in Arusha",
    price: 420,
    currency: "USD",
    image: "/Cultural-Heritage-Centre-Arusha-Tanzania.jpg",
    gallery: ["/Cultural-Heritage-Centre-Arusha-Tanzania.jpg"],
    duration: "2 Days",
    groupSize: "4-12 people",
    difficulty: "Easy",
    region: "East Africa",
    country: "Tanzania",
    highlights: [
      "Local markets",
      "Cultural centers",
      "Maasai village visit",
      "Traditional crafts",
      "Cultural performances"
    ],
    included: [
      "Hotel accommodation",
      "All meals included",
      "Cultural activity fees",
      "Expert local guides",
      "Transportation"
    ],
    excluded: ["International flights", "Travel insurance", "Personal expenses", "Visa fees"],
    itinerary: [
      {
        day: 1,
        title: "City Tour and Cultural Centers",
        description: "City tour and visits to cultural heritage centers."
      },
      {
        day: 2,
        title: "Maasai Village Visit and Departure",
        description: "Maasai village visit and cultural experiences before departure."
      }
    ],
    rating: 4.2,
    reviewCount: 38,
    metaTitle: "Arusha Cultural Tour - 2 Days | Jae Travel Expeditions",
    metaDescription: "Experience local Tanzanian culture in Arusha. Visit markets, cultural centers, and traditional Maasai villages.",
    keywords: ["Arusha", "Cultural Tour", "Tanzania Culture", "Maasai Village"],
    category: "Cultural",
    bestFor: ["Cultural enthusiasts", "Educational travelers", "Family learning"],
    bookingUrl: "/booking/arusha-cultural-tour",
    url: ""
  },
  {
    id: "23",
    slug: "katavi-national-park-safari",
    title: "Katavi National Park",
    description: "Remote wilderness experience.",
    shortDescription: "Remote wilderness safari in Katavi",
    price: 1600,
    currency: "USD",
    image: "/Katavi-National-Park-600x400.png",
    gallery: ["/Katavi-National-Park-600x400.png"],
    duration: "4 Days",
    groupSize: "4-6 people",
    difficulty: "Moderate",
    region: "East Africa",
    country: "Tanzania",
    highlights: [
      "Remote wilderness",
      "Untouched ecosystem",
      "Large buffalo herds",
      "Hippo pools",
      "Authentic safari"
    ],
    included: [
      "Bush camp accommodation",
      "All meals included",
      "Park entrance fees",
      "Expert guide services",
      "Game drive vehicle"
    ],
    excluded: ["International flights", "Travel insurance", "Personal expenses", "Visa fees"],
    itinerary: [
      {
        day: 1,
        title: "Arrival and Check-in",
        description: "Arrival and check-in at remote bush camp."
      },
      {
        day: 2,
        title: "Wilderness Exploration",
        description: "Game drives in remote wilderness areas."
      },
      {
        day: 3,
        title: "Continue Exploration",
        description: "Further exploration of Katavi's untouched areas."
      },
      {
        day: 4,
        title: "Departure",
        description: "Morning game drive before departure."
      }
    ],
    rating: 4.6,
    reviewCount: 31,
    metaTitle: "Katavi National Park Safari - 4 Days | Jae Travel Expeditions",
    metaDescription: "Experience remote wilderness in Katavi National Park. One of Tanzania's most untouched safari destinations.",
    keywords: ["Katavi", "National Park", "Wilderness", "Remote Safari", "Tanzania"],
    category: "Adventure",
    bestFor: ["Adventure seekers", "Wilderness lovers", "Experienced safari goers"],
    bookingUrl: "/booking/katavi-national-park-safari",
    url: ""
  },
  {
    id: "24",
    slug: "mahale-mountains-national-park-chimpanzee-trekking",
    title: "Mahale Chimpanzee Trek",
    description: "Trek with wild chimpanzees.",
    shortDescription: "Chimpanzee trekking in Mahale Mountains",
    price: 2100,
    currency: "USD",
    image: "/Chimp-Group-Mahale-Mountain-JEP_8612.jpg",
    gallery: ["/Chimp-Group-Mahale-Mountain-JEP_8612.jpg"],
    duration: "6 Days",
    groupSize: "4-6 people",
    difficulty: "Challenging",
    region: "East Africa",
    country: "Tanzania",
    highlights: [
      "Wild chimpanzee trekking",
      "Lake Tanganyika shores",
      "Mountain forest",
      "Remote paradise",
      "Primate research"
    ],
    included: [
      "Lodge accommodation",
      "All meals included",
      "Chimpanzee permits",
      "Expert primate guides",
      "Boat transfers"
    ],
    excluded: ["International flights", "Travel insurance", "Personal expenses", "Visa fees"],
    itinerary: [
      {
        day: 1,
        title: "Arrival at Lake Tanganyika",
        description: "Arrival at Lake Tanganyika and lodge check-in."
      },
      {
        day: 2,
        title: "Chimpanzee Trekking",
        description: "First chimpanzee trekking experience in Mahale Mountains."
      },
      {
        day: 3,
        title: "Continue Trekking",
        description: "Further chimpanzee observation and trekking."
      },
      {
        day: 4,
        title: "Forest Exploration",
        description: "Forest exploration and additional primate viewing."
      },
      {
        day: 5,
        title: "Lake Activities",
        description: "Lake Tanganyika activities and relaxation."
      },
      {
        day: 6,
        title: "Departure",
        description: "Final activities before departure."
      }
    ],
    rating: 4.9,
    reviewCount: 44,
    metaTitle: "Mahale Chimpanzee Trek - 6 Days | Jae Travel Expeditions",
    metaDescription: "Trek with wild chimpanzees in Mahale Mountains National Park. Remote paradise on Lake Tanganyika shores.",
    keywords: ["Mahale", "Chimpanzee Trek", "Tanzania", "Lake Tanganyika", "Primate Trekking"],
    category: "Trekking",
    bestFor: ["Primate enthusiasts", "Adventure seekers", "Wildlife researchers"],
    bookingUrl: "/booking/mahale-mountains-national-park-chimpanzee-trekking",
    url: ""
  },
  {
    id: "25",
    slug: "pemba-island-diving",
    title: "Pemba Island Diving",
    description: "World-class diving experience.",
    shortDescription: "World-class diving in Pemba Island",
    price: 980,
    currency: "USD",
    image: "/Pemba-Island-15.jpg",
    gallery: ["/Pemba-Island-15.jpg"],
    duration: "4 Days",
    groupSize: "4-8 people",
    difficulty: "Moderate",
    region: "East Africa",
    country: "Tanzania",
    highlights: [
      "World-class diving",
      "Pristine coral reefs",
      "Diverse marine life",
      "Crystal-clear waters",
      "Marine conservation"
    ],
    included: [
      "Beach resort accommodation",
      "All meals included",
      "Diving equipment",
      "Professional dive guides",
      "Boat transfers"
    ],
    excluded: ["International flights", "Travel insurance", "Personal expenses", "Visa fees"],
    itinerary: [
      {
        day: 1,
        title: "Arrival and Orientation",
        description: "Arrival and diving orientation and preparation."
      },
      {
        day: 2,
        title: "Diving Expeditions",
        description: "Multiple diving expeditions to best sites."
      },
      {
        day: 3,
        title: "Continue Diving",
        description: "Additional diving experiences and marine life viewing."
      },
      {
        day: 4,
        title: "Departure",
        description: "Final water activities before departure."
      }
    ],
    rating: 4.5,
    reviewCount: 56,
    metaTitle: "Pemba Island Diving - 4 Days | Jae Travel Expeditions",
    metaDescription: "Experience world-class diving in Pemba Island. Pristine coral reefs, diverse marine life, and crystal-clear waters.",
    keywords: ["Pemba Island", "Diving", "Scuba Diving", "Tanzania", "Coral Reefs"],
    category: "Adventure",
    bestFor: ["Divers", "Marine enthusiasts", "Adventure seekers"],
    bookingUrl: "/booking/pemba-island-diving",
    url: ""
  },
  {
    id: "26",
    slug: "stone-town-heritage-tour",
    title: "Stone Town Heritage Tour",
    description: "Explore UNESCO World Heritage site.",
    shortDescription: "UNESCO World Heritage site exploration",
    price: 350,
    currency: "USD",
    image: "/31719088_tourists-on-a-typical-narrow-street-in-stone-town-zanzibar-e1713023620250.jpg",
    gallery: ["/31719088_tourists-on-a-typical-narrow-street-in-stone-town-zanzibar-e1713023620250.jpg"],
    duration: "2 Days",
    groupSize: "4-12 people",
    difficulty: "Easy",
    region: "East Africa",
    country: "Tanzania",
    highlights: [
      "UNESCO World Heritage",
      "Historic architecture",
      "Spice markets",
      "Swahili culture",
      "Guided walking tours"
    ],
    included: [
      "Hotel accommodation",
      "All meals included",
      "Heritage tour fees",
      "Expert local guides",
      "Spice tour"
    ],
    excluded: ["International flights", "Travel insurance", "Personal expenses", "Visa fees"],
    itinerary: [
      {
        day: 1,
        title: "Guided Walking Tour",
        description: "Guided walking tour of Stone Town's historic sites."
      },
      {
        day: 2,
        title: "Spice Tour and Departure",
        description: "Spice tour and additional cultural experiences before departure."
      }
    ],
    rating: 4.4,
    reviewCount: 72,
    metaTitle: "Stone Town Heritage Tour - 2 Days | Jae Travel Expeditions",
    metaDescription: "Explore UNESCO World Heritage site in Stone Town, Zanzibar. Historic architecture, spice markets, and Swahili culture.",
    keywords: ["Stone Town", "Heritage Tour", "UNESCO", "Zanzibar", "Cultural Tour"],
    category: "Cultural",
    bestFor: ["History enthusiasts", "Cultural explorers", "Educational travelers"],
    bookingUrl: "/booking/stone-town-heritage-tour",
    url: ""
  },
  {
    id: "27",
    slug: "northern-circuit-safari",
    title: "Northern Circuit Safari",
    description: "Complete northern Tanzania experience.",
    shortDescription: "Complete northern Tanzania safari circuit",
    price: 2800,
    currency: "USD",
    image: "/Game-Drive-north-of-Serengeti-National-Park.jpg",
    gallery: ["/Game-Drive-north-of-Serengeti-National-Park.jpg"],
    duration: "10 Days",
    groupSize: "4-12 people",
    difficulty: "Easy",
    region: "East Africa",
    country: "Tanzania",
    highlights: [
      "Complete northern circuit",
      "Multiple national parks",
      "Diverse ecosystems",
      "Comprehensive wildlife",
      "Expert guided tour"
    ],
    included: [
      "Lodge and camp accommodation",
      "All meals included",
      "All park entrance fees",
      "Expert guide services",
      "Game drive vehicle"
    ],
    excluded: ["International flights", "Travel insurance", "Personal expenses", "Visa fees"],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Arusha",
        description: "Arrival in Arusha and safari preparation."
      },
      {
        day: 2,
        title: "Tarangire National Park",
        description: "Travel to and explore Tarangire National Park."
      },
      {
        day: 3,
        title: "Lake Manyara",
        description: "Explore Lake Manyara National Park."
      },
      {
        day: 4,
        title: "Serengeti Entry",
        description: "Enter Serengeti National Park."
      },
      {
        day: 5,
        title: "Serengeti Exploration",
        description: "Full day exploring Serengeti's vast plains."
      },
      {
        day: 6,
        title: "Continue Serengeti",
        description: "Additional Serengeti wildlife viewing."
      },
      {
        day: 7,
        title: "Ngorongoro Conservation",
        description: "Travel to Ngorongoro Conservation Area."
      },
      {
        day: 8,
        title: "Ngorongoro Crater",
        description: "Full day inside Ngorongoro Crater."
      },
      {
        day: 9,
        title: "Cultural Experiences",
        description: "Cultural visits and final game drives."
      },
      {
        day: 10,
        title: "Departure",
        description: "Return to Arusha for departure."
      }
    ],
    rating: 4.9,
    reviewCount: 87,
    metaTitle: "Northern Circuit Safari - 10 Days | Jae Travel Expeditions",
    metaDescription: "Experience the complete northern Tanzania safari circuit. Visit Serengeti, Ngorongoro, Tarangire, and Lake Manyara.",
    keywords: ["Northern Circuit", "Tanzania Safari", "Comprehensive Safari", "Multi-Park Safari"],
    category: "Luxury",
    isPopular: true,
    bestFor: ["First-time safari goers", "Comprehensive experience seekers", "Wildlife enthusiasts"],
    bookingUrl: "/booking/northern-circuit-safari",
    url: ""
  },
  {
    id: "28",
    slug: "gorilla-trekking-experience",
    title: "Rwanda Gorilla Trekking Experience",
    description: "Get up close with mountain gorillas in Volcanoes National Park, Rwanda.",
    shortDescription: "Mountain gorilla trekking in Rwanda",
    price: 2500,
    currency: "USD",
    image: "/gorilla-trekking-experience-13.jpg",
    gallery: ["/gorilla-trekking-experience-13.jpg"],
    duration: "3 Days",
    groupSize: "4-8 people",
    difficulty: "Challenging",
    region: "East Africa",
    country: "Rwanda",
    highlights: [
      "Mountain gorilla encounter",
      "Volcanoes National Park",
      "Expert primate guides",
      "Luxury accommodations",
      "Cultural tours"
    ],
    included: [
      "Luxury lodge accommodation",
      "All meals included",
      "Gorilla trekking permits",
      "Expert guide services",
      "Cultural tour fees"
    ],
    excluded: ["International flights", "Travel insurance", "Personal expenses", "Visa fees"],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Kigali",
        description: "Arrival in Kigali and transfer to Volcanoes National Park."
      },
      {
        day: 2,
        title: "Gorilla Trekking",
        description: "Gorilla trekking experience in Volcanoes National Park."
      },
      {
        day: 3,
        title: "Cultural Tour and Departure",
        description: "Cultural tour and return to Kigali for departure."
      }
    ],
    rating: 5.0,
    reviewCount: 98,
    metaTitle: "Rwanda Gorilla Trekking Experience - 3 Days | Jae Travel Expeditions",
    metaDescription: "Get up close with mountain gorillas in Volcanoes National Park. 3-day gorilla trekking experience with expert guides and luxury accommodations.",
    keywords: ["Gorilla Trekking", "Rwanda", "Mountain Gorillas", "Volcanoes National Park"],
    category: "Trekking",
    isPopular: true,
    bestFor: ["Wildlife enthusiasts", "Adventure seekers", "Photographers"],
    bookingUrl: "/booking/gorilla-trekking-experience",
    url: ""
  },
  {
    id: "29",
    slug: "nyungwe-forest-canopy-walk",
    title: "Nyungwe Forest Canopy Walk",
    description: "Walk among the treetops.",
    shortDescription: "Canopy walk in ancient rainforest",
    price: 450,
    currency: "USD",
    image: "/nyungwe-forests.jpg",
    gallery: ["/nyungwe-forests.jpg"],
    duration: "2 Days",
    groupSize: "4-8 people",
    difficulty: "Moderate",
    region: "East Africa",
    country: "Rwanda",
    highlights: [
      "Canopy walkway",
      "Ancient rainforest",
      "Chimpanzee tracking",
      "Bird watching",
      "Forest exploration"
    ],
    included: [
      "Lodge accommodation",
      "All meals included",
      "Canopy walk fees",
      "Expert guide services",
      "Chimpanzee tracking"
    ],
    excluded: ["International flights", "Travel insurance", "Personal expenses", "Visa fees"],
    itinerary: [
      {
        day: 1,
        title: "Arrival and Forest Orientation",
        description: "Arrival and forest orientation with canopy walk preparation."
      },
      {
        day: 2,
        title: "Canopy Walk and Chimpanzee Tracking",
        description: "Canopy walk experience and chimpanzee tracking before departure."
      }
    ],
    rating: 4.6,
    reviewCount: 51,
    metaTitle: "Nyungwe Forest Canopy Walk - 2 Days | Jae Travel Expeditions",
    metaDescription: "Walk among the treetops in Nyungwe Forest, Rwanda. Experience the canopy walk and track chimpanzees in ancient rainforest.",
    keywords: ["Nyungwe Forest", "Canopy Walk", "Rwanda", "Chimpanzee Tracking"],
    category: "Adventure",
    bestFor: ["Nature lovers", "Adventure seekers", "Bird watchers"],
    bookingUrl: "/booking/nyungwe-forest-canopy-walk",
    url: ""
  },
  {
    id: "30",
    slug: "lake-kivu-relaxation",
    title: "Lake Kivu Relaxation",
    description: "Relax by Africa's great lake.",
    shortDescription: "Relaxation at Africa's great lake",
    price: 380,
    currency: "USD",
    image: "/Lake-Kivu-Islands.jpg",
    gallery: ["/Lake-Kivu-Islands.jpg"],
    duration: "3 Days",
    groupSize: "2-8 people",
    difficulty: "Easy",
    region: "East Africa",
    country: "Rwanda",
    highlights: [
      "Lake Kivu relaxation",
      "Island hopping",
      "Pristine beaches",
      "Mountain views",
      "Water activities"
    ],
    included: [
      "Lakeside accommodation",
      "All meals included",
      "Boat tour fees",
      "Some water activities",
      "Transportation"
    ],
    excluded: ["International flights", "Travel insurance", "Personal expenses", "Visa fees"],
    itinerary: [
      {
        day: 1,
        title: "Arrival and Beach Relaxation",
        description: "Arrival and beach relaxation at Lake Kivu."
      },
      {
        day: 2,
        title: "Boat Tour and Island Visits",
        description: "Boat tour and island hopping experiences."
      },
      {
        day: 3,
        title: "Departure",
        description: "Final relaxation before departure."
      }
    ],
    rating: 4.4,
    reviewCount: 43,
    metaTitle: "Lake Kivu Relaxation - 3 Days | Jae Travel Expeditions",
    metaDescription: "Relax by Africa's great lake at Lake Kivu, Rwanda. Pristine beaches, island hopping, and stunning mountain views.",
    keywords: ["Lake Kivu", "Relaxation", "Rwanda", "Beach Holiday"],
    category: "Beach",
    bestFor: ["Relaxation seekers", "Couples", "Nature lovers"],
    bookingUrl: "/booking/lake-kivu-relaxation",
    url: ""
  },
  {
    id: "31",
    slug: "akagera-national-park-safari",
    title: "Akagera National Park",
    description: "Rwanda's only savanna park.",
    shortDescription: "Savanna safari in Rwanda's Akagera",
    price: 520,
    currency: "USD",
    image: "/Akagera-national-park-1-750x450.jpg",
    gallery: ["/Akagera-national-park-1-750x450.jpg"],
    duration: "2 Days",
    groupSize: "4-8 people",
    difficulty: "Easy",
    region: "East Africa",
    country: "Rwanda",
    highlights: [
      "Rwanda's savanna park",
      "Big Five viewing",
      "Boat safaris",
      "Lake Ihema",
      "Conservation success"
    ],
    included: [
      "Lodge accommodation",
      "All meals included",
      "Park entrance fees",
      "Game drives",
      "Boat safari"
    ],
    excluded: ["International flights", "Travel insurance", "Personal expenses", "Visa fees"],
    itinerary: [
      {
        day: 1,
        title: "Arrival and Afternoon Game Drive",
        description: "Arrival and afternoon game drive in Akagera."
      },
      {
        day: 2,
        title: "Full-day Game Drive and Boat Safari",
        description: "Full-day game drive and boat safari before departure."
      }
    ],
    rating: 4.5,
    reviewCount: 48,
    metaTitle: "Akagera National Park Safari - 2 Days | Jae Travel Expeditions",
    metaDescription: "Explore Rwanda's only savanna park at Akagera National Park. Big Five safari with boat cruises on Lake Ihema.",
    keywords: ["Akagera", "National Park", "Rwanda Safari", "Big Five"],
    category: "Safari",
    bestFor: ["Wildlife enthusiasts", "First-time safari goers", "Conservation supporters"],
    bookingUrl: "/booking/akagera-national-park-safari",
    url: ""
  },
  {
    id: "32",
    slug: "kigali-city-tour",
    title: "Kigali City Tour",
    description: "Explore the clean city of Kigali.",
    shortDescription: "Comprehensive Kigali city exploration",
    price: 150,
    currency: "USD",
    image: "/kigali-photo-600x300.jpg",
    gallery: ["/kigali-photo-600x300.jpg"],
    duration: "1 Day",
    groupSize: "4-12 people",
    difficulty: "Easy",
    region: "East Africa",
    country: "Rwanda",
    highlights: [
      "Genocide Memorial",
      "Vibrant markets",
      "Modern cultural centers",
      "City landmarks",
      "Local cuisine"
    ],
    included: [
      "Expert local guide",
      "All entrance fees",
      "Lunch included",
      "Transportation",
      "Cultural experiences"
    ],
    excluded: ["International flights", "Travel insurance", "Personal expenses", "Visa fees"],
    itinerary: [
      {
        day: 1,
        title: "Full-day City Tour",
        description: "Full-day city tour including Genocide Memorial, markets, and cultural sites."
      }
    ],
    rating: 4.3,
    reviewCount: 67,
    metaTitle: "Kigali City Tour - 1 Day | Jae Travel Expeditions",
    metaDescription: "Explore the clean city of Kigali, Rwanda. Visit the Genocide Memorial, vibrant markets, and modern cultural centers.",
    keywords: ["Kigali", "City Tour", "Rwanda", "Genocide Memorial"],
    category: "Cultural",
    bestFor: ["Cultural enthusiasts", "Educational travelers", "City explorers"],
    bookingUrl: "/booking/kigali-city-tour",
    url: ""
  },
  {
    id: "33",
    slug: "golden-monkey-tracking",
    title: "Golden Monkey Tracking",
    description: "Track rare golden monkeys.",
    shortDescription: "Rare golden monkey tracking experience",
    price: 680,
    currency: "USD",
    image: "/golden-monkey-trekking.jpg",
    gallery: ["/golden-monkey-trekking.jpg"],
    duration: "2 Days",
    groupSize: "4-6 people",
    difficulty: "Moderate",
    region: "East Africa",
    country: "Rwanda",
    highlights: [
      "Golden monkey tracking",
      "Bamboo forests",
      "Volcanoes National Park",
      "Primate behavior",
      "Cultural visits"
    ],
    included: [
      "Lodge accommodation",
      "All meals included",
      "Golden monkey permits",
      "Expert primate guides",
      "Cultural visit fees"
    ],
    excluded: ["International flights", "Travel insurance", "Personal expenses", "Visa fees"],
    itinerary: [
      {
        day: 1,
        title: "Arrival and Briefing",
        description: "Arrival and golden monkey tracking preparation briefing."
      },
      {
        day: 2,
        title: "Golden Monkey Tracking and Cultural Visit",
        description: "Golden monkey tracking and cultural visit before departure."
      }
    ],
    rating: 4.7,
    reviewCount: 39,
    metaTitle: "Golden Monkey Tracking - 2 Days | Jae Travel Expeditions",
    metaDescription: "Track rare golden monkeys in Rwanda. Unique primate experience in Volcanoes National Park's bamboo forests.",
    keywords: ["Golden Monkey", "Tracking", "Rwanda", "Primate Trekking"],
    category: "Trekking",
    bestFor: ["Primate enthusiasts", "Wildlife photographers", "Adventure seekers"],
    bookingUrl: "/booking/golden-monkey-tracking",
    url: ""
  },
  {
    id: "34",
    slug: "bwindi-gorilla-trekking",
    title: "Bwindi Gorilla Trekking",
    description: "Trek mountain gorillas in Bwindi Impenetrable Forest, Uganda.",
    shortDescription: "Mountain gorilla trekking in Uganda",
    price: 2200,
    currency: "USD",
    image: "/Magical-encounters-with-the-mountain-gorillas-of-Bwindi.jpg",
    gallery: ["/Magical-encounters-with-the-mountain-gorillas-of-Bwindi.jpg"],
    duration: "4 Days",
    groupSize: "4-8 people",
    difficulty: "Challenging",
    region: "East Africa",
    country: "Uganda",
    highlights: [
      "Mountain gorilla encounters",
      "Bwindi Impenetrable Forest",
      "Expert primate guides",
      "Comfortable accommodations",
      "Conservation education"
    ],
    included: [
      "Lodge accommodation",
      "All meals included",
      "Gorilla trekking permits",
      "Expert guide services",
      "Park entrance fees"
    ],
    excluded: ["International flights", "Travel insurance", "Personal expenses", "Visa fees"],
    itinerary: [
      {
        day: 1,
        title: "Arrival and Lodge Check-in",
        description: "Arrival and lodge check-in with trekking preparation."
      },
      {
        day: 2,
        title: "Gorilla Trekking",
        description: "Full day gorilla trekking in Bwindi Forest."
      },
      {
        day: 3,
        title: "Additional Gorilla Trekking",
        description: "Optional second gorilla trek or forest activities."
      },
      {
        day: 4,
        title: "Departure",
        description: "Morning activities before departure."
      }
    ],
    rating: 4.9,
    reviewCount: 87,
    metaTitle: "Bwindi Gorilla Trekking - 4 Days | Jae Travel Expeditions",
    metaDescription: "Trek mountain gorillas in Bwindi Impenetrable Forest. 4-day Uganda gorilla trekking with expert guides and comfortable accommodations.",
    keywords: ["Bwindi", "Gorilla Trekking", "Uganda", "Mountain Gorillas"],
    category: "Trekking",
    isPopular: true,
    bestFor: ["Wildlife enthusiasts", "Adventure seekers", "Conservation supporters"],
    bookingUrl: "/booking/bwindi-gorilla-trekking",
    url: ""
  },
  {
    id: "35",
    slug: "queen-elizabeth-national-park-safari",
    title: "Queen Elizabeth Safari",
    description: "Diverse wildlife in scenic landscapes at Queen Elizabeth National Park.",
    shortDescription: "Diverse wildlife safari in Queen Elizabeth Park",
    price: 1150,
    currency: "USD",
    image: "/Queen-Elizabeth-National-Park.jpg",
    gallery: ["/Queen-Elizabeth-National-Park.jpg"],
    duration: "5 Days",
    groupSize: "4-8 people",
    difficulty: "Easy",
    region: "East Africa",
    country: "Uganda",
    highlights: [
      "Diverse wildlife",
      "Kazinga Channel boat safari",
      "Scenic landscapes",
      "Tree-climbing lions",
      "Bird watching paradise"
    ],
    included: [
      "Lodge accommodation",
      "All meals included",
      "Park entrance fees",
      "Game drives",
      "Boat safari"
    ],
    excluded: ["International flights", "Travel insurance", "Personal expenses", "Visa fees"],
    itinerary: [
      {
        day: 1,
        title: "Arrival",
        description: "Arrival and lodge check-in in Queen Elizabeth Park."
      },
      {
        day: 2,
        title: "Game Drives",
        description: "Game drives exploring diverse wildlife habitats."
      },
      {
        day: 3,
        title: "Boat Safari",
        description: "Boat safari on Kazinga Channel."
      },
      {
        day: 4,
        title: "Additional Exploration",
        description: "Additional game drives and wildlife viewing."
      },
      {
        day: 5,
        title: "Departure",
        description: "Morning activities before departure."
      }
    ],
    rating: 4.6,
    reviewCount: 76,
    metaTitle: "Queen Elizabeth Safari - 5 Days | Jae Travel Expeditions",
    metaDescription: "Experience diverse wildlife in scenic landscapes at Queen Elizabeth National Park. 5-day safari with game drives and boat cruises.",
    keywords: ["Queen Elizabeth", "National Park", "Uganda Safari", "Wildlife", "Kazinga Channel"],
    category: "Safari",
    isPopular: true,
    bestFor: ["Wildlife enthusiasts", "Bird watchers", "Photographers"],
    bookingUrl: "/booking/queen-elizabeth-national-park-safari",
    url: ""
  },
  {
    id: "36",
    slug: "murchison-falls-national-park-safari",
    title: "Murchison Falls Adventure",
    description: "Witness the powerful Murchison Falls.",
    shortDescription: "Murchison Falls and wildlife adventure",
    price: 980,
    currency: "USD",
    image: "/murchison-falls.webp",
    gallery: ["/murchison-falls.webp"],
    duration: "4 Days",
    groupSize: "4-8 people",
    difficulty: "Easy",
    region: "East Africa",
    country: "Uganda",
    highlights: [
      "Murchison Falls",
      "Powerful waterfall",
      "Game drives",
      "Boat safari",
      "Diverse wildlife"
    ],
    included: [
      "Lodge accommodation",
      "All meals included",
      "Park entrance fees",
      "Game drives",
      "Boat safari to falls"
    ],
    excluded: ["International flights", "Travel insurance", "Personal expenses", "Visa fees"],
    itinerary: [
      {
        day: 1,
        title: "Arrival and Lodge Check-in",
        description: "Arrival and lodge check-in near Murchison Falls."
      },
      {
        day: 2,
        title: "Game Drives",
        description: "Game drives exploring Murchison Falls National Park."
      },
      {
        day: 3,
        title: "Boat Safari to Falls",
        description: "Boat safari to the base of Murchison Falls."
      },
      {
        day: 4,
        title: "Departure",
        description: "Morning activities before departure."
      }
    ],
    rating: 4.7,
    reviewCount: 64,
    metaTitle: "Murchison Falls Adventure - 4 Days | Jae Travel Expeditions",
    metaDescription: "Witness the powerful Murchison Falls in Uganda. Game drives, boat safaris, and spectacular waterfall views.",
    keywords: ["Murchison Falls", "Adventure", "Uganda", "Waterfall Safari"],
    category: "Adventure",
    bestFor: ["Nature lovers", "Adventure seekers", "Photographers"],
    bookingUrl: "/booking/murchison-falls-national-park-safari",
    url: ""
  },
  {
    id: "37",
    slug: "kibale-national-park-chimpanzee-trekking",
    title: "Kibale Chimpanzee Tracking",
    description: "Track our closest relatives.",
    shortDescription: "Chimpanzee tracking in Kibale Forest",
    price: 750,
    currency: "USD",
    image: "/kibale-national-park-chimpanzees-uganda-590x390.jpg",
    gallery: ["/kibale-national-park-chimpanzees-uganda-590x390.jpg"],
    duration: "3 Days",
    groupSize: "4-6 people",
    difficulty: "Moderate",
    region: "East Africa",
    country: "Uganda",
    highlights: [
      "Chimpanzee tracking",
      "Primate capital",
      "Forest exploration",
      "Bigodi wetland",
      "Bird watching"
    ],
    included: [
      "Lodge accommodation",
      "All meals included",
      "Chimpanzee permits",
      "Expert primate guides",
      "Wetland walk"
    ],
    excluded: ["International flights", "Travel insurance", "Personal expenses", "Visa fees"],
    itinerary: [
      {
        day: 1,
        title: "Arrival and Lodge Check-in",
        description: "Arrival and lodge check-in with tracking preparation."
      },
      {
        day: 2,
        title: "Chimpanzee Tracking",
        description: "Chimpanzee tracking in Kibale National Park."
      },
      {
        day: 3,
        title: "Bigodi Wetland Walk and Departure",
        description: "Bigodi wetland walk and departure."
      }
    ],
    rating: 4.5,
    reviewCount: 58,
    metaTitle: "Kibale Chimpanzee Tracking - 3 Days | Jae Travel Expeditions",
    metaDescription: "Track our closest relatives in Kibale National Park, Uganda. Primate capital of the world with 13 primate species.",
    keywords: ["Kibale", "Chimpanzee Tracking", "Uganda", "Primate Safari"],
    category: "Trekking",
    bestFor: ["Primate enthusiasts", "Nature lovers", "Wildlife researchers"],
    bookingUrl: "/booking/kibale-national-park-chimpanzee-trekking",
    url: ""
  },
  {
    id: "38",
    slug: "lake-mburo-national-park-safari",
    title: "Lake Mburo National Park",
    description: "Compact park with diverse wildlife.",
    shortDescription: "Compact wildlife park experience",
    price: 420,
    currency: "USD",
    image: "/lake-mburo-national-park.jpg",
    gallery: ["/lake-mburo-national-park.jpg"],
    duration: "2 Days",
    groupSize: "4-8 people",
    difficulty: "Easy",
    region: "East Africa",
    country: "Uganda",
    highlights: [
      "Compact park exploration",
      "Zebra viewing",
      "Boat safari",
      "Impala herds",
      "Easy accessibility"
    ],
    included: [
      "Lodge accommodation",
      "All meals included",
      "Park entrance fees",
      "Game drives",
      "Boat safari"
    ],
    excluded: ["International flights", "Travel insurance", "Personal expenses", "Visa fees"],
    itinerary: [
      {
        day: 1,
        title: "Arrival and Afternoon Game Drive",
        description: "Arrival and afternoon game drive in Lake Mburo."
      },
      {
        day: 2,
        title: "Morning Game Drive and Boat Safari",
        description: "Morning game drive and boat safari before departure."
      }
    ],
    rating: 4.3,
    reviewCount: 41,
    metaTitle: "Lake Mburo National Park Safari - 2 Days | Jae Travel Expeditions",
    metaDescription: "Explore a compact park with diverse wildlife at Lake Mburo National Park, Uganda. Zebras, impalas, and boat safaris.",
    keywords: ["Lake Mburo", "National Park", "Uganda Safari", "Boat Safari"],
    category: "Budget",
    bestFor: ["Budget travelers", "Families", "First-time safari goers"],
    bookingUrl: "/booking/lake-mburo-national-park-safari",
    url: ""
  },
  {
    id: "39",
    slug: "rwenzori-mountains-hiking",
    title: "Rwenzori Mountains Hiking",
    description: "Hike the Mountains of the Moon.",
    shortDescription: "Hiking the Mountains of the Moon",
    price: 1800,
    currency: "USD",
    image: "/Rwenzori-Mountains-03_1600p.jpg",
    gallery: ["/Rwenzori-Mountains-03_1600p.jpg"],
    duration: "7 Days",
    groupSize: "4-6 people",
    difficulty: "Very Challenging",
    region: "East Africa",
    country: "Uganda",
    highlights: [
      "Mountains of the Moon",
      "Alpine vegetation",
      "Challenging trek",
      "Unique ecosystems",
      "Expert mountain guides"
    ],
    included: [
      "Mountain hut accommodation",
      "All meals on mountain",
      "Professional guides",
      "Porter services",
      "Park fees and permits"
    ],
    excluded: ["International flights", "Travel insurance", "Personal gear", "Visa fees"],
    itinerary: [
      {
        day: 1,
        title: "Arrival and Briefing",
        description: "Arrival and hiking preparation briefing."
      },
      {
        day: 2,
        title: "Start Hiking",
        description: "Begin hiking through various vegetation zones."
      },
      {
        day: 3,
        title: "Continue Ascent",
        description: "Continue ascending through different ecosystems."
      },
      {
        day: 4,
        title: "Higher Altitude",
        description: "Reach higher altitude zones with unique flora."
      },
      {
        day: 5,
        title: "Peak Exploration",
        description: "Explore high peaks and alpine areas."
      },
      {
        day: 6,
        title: "Begin Descent",
        description: "Start descent through different routes."
      },
      {
        day: 7,
        title: "Complete Descent and Departure",
        description: "Complete descent and departure."
      }
    ],
    rating: 4.8,
    reviewCount: 35,
    metaTitle: "Rwenzori Mountains Hiking - 7 Days | Jae Travel Expeditions",
    metaDescription: "Hike the Mountains of the Moon in Rwenzori Mountains, Uganda. Challenging trek through unique alpine vegetation.",
    keywords: ["Rwenzori", "Mountains", "Hiking", "Uganda", "Mountains of the Moon"],
    category: "Adventure",
    bestFor: ["Experienced hikers", "Mountain enthusiasts", "Adventure seekers"],
    bookingUrl: "/booking/rwenzori-mountains-hiking",
    url: ""
  },
  {
    id: "40",
    slug: "jinja-adventure-tour",
    title: "Jinja White Water Rafting",
    description: "Adventure at the source of the Nile.",
    shortDescription: "White water rafting on the Nile",
    price: 350,
    currency: "USD",
    image: "/6-days-gorilla-tracking-and-rafting-jinja.jpg",
    gallery: ["/6-days-gorilla-tracking-and-rafting-jinja.jpg"],
    duration: "2 Days",
    groupSize: "4-12 people",
    difficulty: "Moderate",
    region: "East Africa",
    country: "Uganda",
    highlights: [
      "White water rafting",
      "Source of the Nile",
      "Adventure activities",
      "River Nile experience",
      "Adrenaline sports"
    ],
    included: [
      "Hotel accommodation",
      "All meals included",
      "Rafting equipment",
      "Professional guides",
      "Safety equipment"
    ],
    excluded: ["International flights", "Travel insurance", "Personal expenses", "Visa fees"],
    itinerary: [
      {
        day: 1,
        title: "Arrival and Nile Source Visit",
        description: "Arrival and visit to the source of the Nile."
      },
      {
        day: 2,
        title: "White Water Rafting and Departure",
        description: "White water rafting experience and departure."
      }
    ],
    rating: 4.6,
    reviewCount: 92,
    metaTitle: "Jinja White Water Rafting - 2 Days | Jae Travel Expeditions",
    metaDescription: "Experience adventure at the source of the Nile in Jinja, Uganda. World-class white water rafting and adrenaline activities.",
    keywords: ["Jinja", "White Water Rafting", "Nile River", "Adventure", "Uganda"],
    category: "Adventure",
    isPopular: true,
    bestFor: ["Adventure seekers", "Thrill enthusiasts", "Active travelers"],
    bookingUrl: "/booking/jinja-adventure-tour",
    url: ""
  },
  {
    id: "41",
    slug: "lake-bunyonyi-relaxation-tour",
    title: "Lake Bunyonyi Relaxation",
    description: "Relax by Uganda's deepest lake.",
    shortDescription: "Relaxation at Uganda's deepest lake",
    price: 450,
    currency: "USD",
    image: "/lake_bunyonyi__uganda-the-pearl-of-africa.webp",
    gallery: ["/lake_bunyonyi__uganda-the-pearl-of-africa.webp"],
    duration: "3 Days",
    groupSize: "2-8 people",
    difficulty: "Easy",
    region: "East Africa",
    country: "Uganda",
    highlights: [
      "Uganda's deepest lake",
      "Island hopping",
      "Scenic beauty",
      "Canoeing",
      "Peaceful atmosphere"
    ],
    included: [
      "Lakeside accommodation",
      "All meals included",
      "Canoe rental",
      "Island hopping tour",
      "Transportation"
    ],
    excluded: ["International flights", "Travel insurance", "Personal expenses", "Visa fees"],
    itinerary: [
      {
        day: 1,
        title: "Arrival and Lake Orientation",
        description: "Arrival and orientation to Lake Bunyonyi."
      },
      {
        day: 2,
        title: "Island Hopping and Canoeing",
        description: "Island hopping and canoeing experiences."
      },
      {
        day: 3,
        title: "Departure",
        description: "Final relaxation before departure."
      }
    ],
    rating: 4.4,
    reviewCount: 47,
    metaTitle: "Lake Bunyonyi Relaxation - 3 Days | Jae Travel Expeditions",
    metaDescription: "Relax by Uganda's deepest lake at Lake Bunyonyi. Scenic beauty, island hopping, and peaceful atmosphere.",
    keywords: ["Lake Bunyonyi", "Relaxation", "Uganda", "Island Hopping"],
    category: "Beach",
    bestFor: ["Relaxation seekers", "Couples", "Nature lovers"],
    bookingUrl: "/booking/lake-bunyonyi-relaxation-tour",
    url: ""
  },
  {
    id: "42",
    slug: "ssese-islands-beach-holiday",
    title: "Ssese Islands Beach Holiday",
    description: "Beach paradise on Lake Victoria.",
    shortDescription: "Tropical beach holiday on Lake Victoria",
    price: 650,
    currency: "USD",
    image: "/Travel-to-Ssese-islands.jpg",
    gallery: ["/Travel-to-Ssese-islands.jpg"],
    duration: "4 Days",
    groupSize: "2-8 people",
    difficulty: "Easy",
    region: "East Africa",
    country: "Uganda",
    highlights: [
      "Tropical beaches",
      "Lake Victoria",
      "Water sports",
      "Island exploration",
      "Relaxation"
    ],
    included: [
      "Island resort accommodation",
      "All meals included",
      "Water sports equipment",
      "Island exploration tours",
      "Boat transfers"
    ],
    excluded: ["International flights", "Travel insurance", "Personal expenses", "Visa fees"],
    itinerary: [
      {
        day: 1,
        title: "Arrival and Beach Relaxation",
        description: "Arrival and beach relaxation on Ssese Islands."
      },
      {
        day: 2,
        title: "Water Sports and Island Exploration",
        description: "Water sports and exploration of different islands."
      },
      {
        day: 3,
        title: "Continue Island Activities",
        description: "Additional water activities and island experiences."
      },
      {
        day: 4,
        title: "Departure",
        description: "Final beach time before departure."
      }
    ],
    rating: 4.5,
    reviewCount: 53,
    metaTitle: "Ssese Islands Beach Holiday - 4 Days | Jae Travel Expeditions",
    metaDescription: "Experience beach paradise on Lake Victoria at Ssese Islands, Uganda. Tropical beaches, water sports, and relaxation.",
    keywords: ["Ssese Islands", "Beach Holiday", "Lake Victoria", "Uganda"],
    category: "Beach",
    bestFor: ["Beach lovers", "Couples", "Relaxation seekers"],
    bookingUrl: "/booking/ssese-islands-beach-holiday",
    url: ""
  },
  {
    id: "43",
    slug: "lake-naivasha-boat-safari",
    title: "Lake Naivasha Boat Safari",
    description: "Boat safari on freshwater Lake Naivasha with hippos, birds, and Crescent Island walking safari.",
    shortDescription: "Boat safari and walking safari experience",
    price: 150,
    currency: "USD",
    image: "/Lake-Naivasha-National-Park-750x450.jpg",
    gallery: ["/Lake-Naivasha-National-Park-750x450.jpg"],
    duration: "1 Day",
    groupSize: "4-8 people",
    difficulty: "Easy",
    region: "East Africa",
    country: "Kenya",
    highlights: [
      "Boat safari",
      "Hippo viewing",
      "Bird watching",
      "Crescent Island walk",
      "Freshwater lake ecosystem"
    ],
    included: [
      "Boat safari",
      "Walking safari guide",
      "Park entrance fees",
      "Expert naturalist guide",
      "Lunch included"
    ],
    excluded: ["International flights", "Travel insurance", "Personal expenses", "Visa fees"],
    itinerary: [
      {
        day: 1,
        title: "Boat Safari and Walking Safari",
        description: "Boat safari on Lake Naivasha and walking safari on Crescent Island."
      }
    ],
    rating: 4.3,
    reviewCount: 61,
    metaTitle: "Lake Naivasha Boat Safari - 1 Day | Jae Travel Expeditions",
    metaDescription: "Enjoy a boat safari on freshwater Lake Naivasha with hippos, birds, and Crescent Island walking safari.",
    keywords: ["Lake Naivasha", "Boat Safari", "Kenya", "Crescent Island"],
    category: "Budget",
    bestFor: ["Bird watchers", "Nature lovers", "Budget travelers"],
    bookingUrl: "/booking/lake-naivasha-boat-safari",
    url: ""
  },
  {
    id: "44",
    slug: "kenya-disability-safari",
    title: "Accessible Kenya Safari Experience",
    description: "A fully accessible safari experience designed for travelers with mobility challenges, featuring wheelchair-accessible vehicles, accommodations, and tailored wildlife viewing.",
    shortDescription: "Fully accessible safari for travelers with mobility challenges",
    price: 2450,
    currency: "USD",
    image: "/wheelchair-accessible-tanzania-safari.webp",
    gallery: ["/wheelchair-accessible-tanzania-safari.webp", "/Tineke-in-Kenya.png"],
    duration: "7 Days",
    groupSize: "4-8 people",
    difficulty: "Easy",
    region: "East Africa",
    country: "Kenya",
    highlights: [
      "Wheelchair-accessible vehicles",
      "Adapted accommodations",
      "Tailored wildlife viewing",
      "Expert accessible guides",
      "Inclusive experiences"
    ],
    included: [
      "Accessible accommodation",
      "All meals included",
      "Accessible transportation",
      "Expert guide services",
      "Park entrance fees"
    ],
    excluded: ["International flights", "Travel insurance", "Personal expenses", "Visa fees"],
    itinerary: [
      {
        day: 1,
        title: "Arrival and Orientation",
        description: "Arrival and orientation with accessibility briefing."
      },
      {
        day: 2,
        title: "Accessible Game Drives",
        description: "First accessible game drives with adapted vehicles."
      },
      {
        day: 3,
        title: "Wildlife Viewing",
        description: "Continued wildlife viewing with accessibility features."
      },
      {
        day: 4,
        title: "Cultural Accessibility",
        description: "Accessible cultural experiences and interactions."
      },
      {
        day: 5,
        title: "Specialized Viewing",
        description: "Specialized wildlife viewing opportunities."
      },
      {
        day: 6,
        title: "Leisure Day",
        description: "Leisure day with optional accessible activities."
      },
      {
        day: 7,
        title: "Departure",
        description: "Final experiences before departure."
      }
    ],
    rating: 4.8,
    reviewCount: 42,
    metaTitle: "Accessible Kenya Safari Experience for People with Disabilities | Jae Travel Expeditions",
    metaDescription: "A fully accessible safari experience designed for travelers with mobility challenges in Kenya. Wheelchair-accessible vehicles and accommodations.",
    keywords: ["Accessible Safari Kenya", "Disability Travel Kenya", "Wheelchair Safari", "Accessible Wildlife Tours"],
    category: "Accessible",
    isPopular: true,
    bestFor: ["Travelers with mobility challenges", "Accessible travel", "Inclusive tourism"],
    bookingUrl: "/booking/kenya-disability-safari",
    url: ""
  },
  {
    id: "45",
    slug: "accessible-masai-mara-safari",
    title: "4-Day Accessible Masai Mara Experience",
    description: "A focused accessible safari in the Masai Mara with wheelchair-adapted vehicles, accessible tented camps, and front-row seats to the Great Migration.",
    shortDescription: "Accessible Masai Mara safari experience",
    price: 1450,
    currency: "USD",
    image: "/Tineke-in-Kenya.png",
    gallery: ["/Tineke-in-Kenya.png"],
    duration: "4 Days",
    groupSize: "4-6 people",
    difficulty: "Easy",
    region: "East Africa",
    country: "Kenya",
    highlights: [
      "Wheelchair-adapted vehicles",
      "Accessible tented camps",
      "Great Migration viewing",
      "Front-row wildlife access",
      "Expert accessible guides"
    ],
    included: [
      "Accessible tented camp",
      "All meals included",
      "Adapted vehicle safari",
      "Expert guide services",
      "Park entrance fees"
    ],
    excluded: ["International flights", "Travel insurance", "Personal expenses", "Visa fees"],
    itinerary: [
      {
        day: 1,
        title: "Arrival and Camp Setup",
        description: "Arrival and accessible camp setup and orientation."
      },
      {
        day: 2,
        title: "Accessible Game Drives",
        description: "Accessible game drives in adapted vehicles."
      },
      {
        day: 3,
        title: "Migration Viewing",
        description: "Great Migration viewing from accessible locations."
      },
      {
        day: 4,
        title: "Departure",
        description: "Final accessible game drive before departure."
      }
    ],
    rating: 4.9,
    reviewCount: 38,
    metaTitle: "Accessible Masai Mara Safari for People with Disabilities | Jae Travel Expeditions",
    metaDescription: "A focused accessible safari in the Masai Mara with wheelchair-adapted vehicles and accessible tented camps.",
    keywords: ["Accessible Masai Mara", "Disability Safari Kenya", "Wheelchair Masai Mara"],
    category: "Accessible",
    isPopular: true,
    bestFor: ["Travelers with mobility challenges", "Accessible wildlife viewing", "Inclusive travel"],
    bookingUrl: "/booking/accessible-masai-mara-safari",
    url: ""
  },
  {
    id: "46",
    slug: "tanzania-accessible-safari",
    title: "Tanzania Accessible Safari Adventure",
    description: "An inclusive journey through Tanzania's Serengeti and Ngorongoro Crater with adapted safari vehicles, accessible lodges, and unforgettable wildlife encounters.",
    shortDescription: "Accessible Tanzania safari adventure",
    price: 2950,
    currency: "USD",
    image: "/WhatsApp-Image-2025-01-15-at-12.06.45-PM.webp",
    gallery: ["/WhatsApp-Image-2025-01-15-at-12.06.45-PM.webp"],
    duration: "8 Days",
    groupSize: "4-6 people",
    difficulty: "Easy",
    region: "East Africa",
    country: "Tanzania",
    highlights: [
      "Adapted safari vehicles",
      "Accessible lodges",
      "Serengeti exploration",
      "Ngorongoro Crater access",
      "Inclusive wildlife encounters"
    ],
    included: [
      "Accessible lodge accommodation",
      "All meals included",
      "Adapted vehicle safari",
      "Expert guide services",
      "All park entrance fees"
    ],
    excluded: ["International flights", "Travel insurance", "Personal expenses", "Visa fees"],
    itinerary: [
      {
        day: 1,
        title: "Arrival and Orientation",
        description: "Arrival in Tanzania and accessibility orientation."
      },
      {
        day: 2,
        title: "Travel to Serengeti",
        description: "Travel to Serengeti with accessible transport."
      },
      {
        day: 3,
        title: "Serengeti Accessible Safari",
        description: "Accessible game drives in Serengeti."
      },
      {
        day: 4,
        title: "Continue Serengeti",
        description: "Further Serengeti exploration with accessibility."
      },
      {
        day: 5,
        title: "Ngorongoro Travel",
        description: "Travel to Ngorongoro Conservation Area."
      },
      {
        day: 6,
        title: "Ngorongoro Crater",
        description: "Accessible Ngorongoro Crater exploration."
      },
      {
        day: 7,
        title: "Cultural Accessibility",
        description: "Accessible cultural experiences."
      },
      {
        day: 8,
        title: "Departure",
        description: "Return and departure."
      }
    ],
    rating: 4.7,
    reviewCount: 29,
    metaTitle: "Tanzania Accessible Safari Adventure | Jae Travel Expeditions",
    metaDescription: "An inclusive journey through Tanzania's Serengeti and Ngorongoro Crater with adapted safari vehicles and accessible lodges.",
    keywords: ["Accessible Tanzania Safari", "Disability Travel Tanzania", "Wheelchair Safari Tanzania"],
    category: "Accessible",
    bestFor: ["Travelers with mobility challenges", "Accessible adventure", "Inclusive wildlife experiences"],
    bookingUrl: "/booking/tanzania-accessible-safari",
    url: ""
  },
  {
    id: "49",
    slug: "east-africa-grand-accessible-safari",
    title: "East Africa Grand Accessible Safari",
    description: "The ultimate East African accessible safari across Kenya and Tanzania, combining Maasai Mara, Serengeti, and Ngorongoro with premium accessible accommodations.",
    shortDescription: "Multi-country accessible safari experience",
    price: 5800,
    currency: "USD",
    image: "/ngorongoro-header-3.jpg",
    gallery: ["/ngorongoro-header-3.jpg"],
    duration: "12 Days",
    groupSize: "4-6 people",
    difficulty: "Easy",
    region: "East Africa",
    country: "Multi-Country",
    highlights: [
      "Multi-country accessible safari",
      "Premium accessible accommodations",
      "Maasai Mara access",
      "Serengeti exploration",
      "Ngorongoro Crater experience"
    ],
    included: [
      "Premium accessible accommodations",
      "All meals included",
      "All park entrance fees",
      "Adapted vehicle transfers",
      "Expert accessible guides"
    ],
    excluded: ["International flights", "Travel insurance", "Personal expenses", "Visa fees"],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Nairobi",
        description: "Arrival in Nairobi and accessibility briefing."
      },
      {
        day: 2,
        title: "Travel to Maasai Mara",
        description: "Travel to Maasai Mara with accessible transport."
      },
      {
        day: 3,
        title: "Maasai Mara Accessible Safari",
        description: "Accessible game drives in Maasai Mara."
      },
      {
        day: 4,
        title: "Continue Maasai Mara",
        description: "Further Maasai Mara exploration."
      },
      {
        day: 5,
        title: "Travel to Serengeti",
        description: "Cross-border travel to Serengeti."
      },
      {
        day: 6,
        title: "Serengeti Accessible Safari",
        description: "Accessible game drives in Serengeti."
      },
      {
        day: 7,
        title: "Continue Serengeti",
        description: "Additional Serengeti exploration."
      },
      {
        day: 8,
        title: "Travel to Ngorongoro",
        description: "Travel to Ngorongoro Conservation Area."
      },
      {
        day: 9,
        title: "Ngorongoro Crater",
        description: "Accessible Ngorongoro Crater exploration."
      },
      {
        day: 10,
        title: "Cultural Accessibility",
        description: "Accessible cultural experiences."
      },
      {
        day: 11,
        title: "Return Travel",
        description: "Return travel with accessible transport."
      },
      {
        day: 12,
        title: "Departure",
        description: "Final experiences and departure."
      }
    ],
    rating: 4.9,
    reviewCount: 18,
    metaTitle: "East Africa Grand Accessible Safari | Jae Travel Expeditions",
    metaDescription: "The ultimate East African accessible safari across Kenya and Tanzania with premium accessible accommodations.",
    keywords: [
      "East Africa Accessible Safari",
      "Multi-Country Safari",
      "Disability Travel East Africa",
      "Grand Safari",
    ],
    category: "Accessible",
    isPopular: true,
    bestFor: ["Travelers with mobility challenges", "Luxury accessible travel", "Multi-country experience seekers"],
    bookingUrl: "/booking/east-africa-grand-accessible-safari",
    url: ""
  },
  {
    id: "50",
    slug: "carnivore-experience",
    title: "Carnivore Experience",
    description: "Indulge in a unique dining adventure at the famous Carnivore Restaurant in Nairobi, featuring exotic game meats and vibrant Kenyan hospitality.",
    shortDescription: "Exotic game meat dining experience",
    price: 150,
    currency: "USD",
    image: "/carnivore-dining.jpg",
    gallery: ["/carnivore-dining.jpg"],
    duration: "1 Day",
    groupSize: "2-8 people",
    difficulty: "Easy",
    region: "East Africa",
    country: "Kenya",
    highlights: [
      "Exotic game meats",
      "Famous Carnivore Restaurant",
      "Kenyan hospitality",
      "Unique dining experience",
      "Cultural cuisine"
    ],
    included: [
      "Multi-course meal",
      "Game meat selection",
      "Traditional sides",
      "Non-alcoholic beverages",
      "Transportation to restaurant"
    ],
    excluded: ["International flights", "Travel insurance", "Personal expenses", "Visa fees"],
    itinerary: [
      {
        day: 1,
        title: "Carnivore Restaurant Experience",
        description: "Half-day dining experience at Nairobi's famous Carnivore Restaurant."
      }
    ],
    rating: 4.7,
    reviewCount: 25,
    metaTitle: "Carnivore Experience | Jae Travel Expeditions",
    metaDescription: "Enjoy a unique dining adventure at Nairobi's Carnivore Restaurant with exotic game meats and Kenyan hospitality.",
    keywords: [
      "Carnivore Restaurant",
      "Nairobi Dining",
      "Kenya Food Tour",
      "Game Meat Experience"
    ],
    category: "Cultural",
    bestFor: ["Food enthusiasts", "Cultural explorers", "Adventurous eaters"],
    bookingUrl: "/tours/carnivore-experience",
    url: ""
  },
  {
    id: "51",
    slug: "safari-madoa-doa",
    title: "Safari Madoa Doa",
    description: "Embark on an exclusive safari adventure through Kenya's premier wildlife reserves, spotting the Big Five in their natural habitat.",
    shortDescription: "Exclusive Big Five safari adventure",
    price: 3200,
    currency: "USD",
    image: "/madoa-doa-safari.jpg",
    gallery: ["/madoa-doa-safari.jpg"],
    duration: "7 Days",
    groupSize: "4-8 people",
    difficulty: "Easy",
    region: "East Africa",
    country: "Kenya",
    highlights: [
      "Big Five spotting",
      "Exclusive reserves",
      "Premium wildlife viewing",
      "Expert tracking guides",
      "Luxury accommodations"
    ],
    included: [
      "Luxury lodge accommodation",
      "All meals included",
      "All park entrance fees",
      "Expert guide services",
      "Premium game drive vehicle"
    ],
    excluded: ["International flights", "Travel insurance", "Personal expenses", "Visa fees"],
    itinerary: [
      {
        day: 1,
        title: "Arrival and Briefing",
        description: "Arrival and exclusive safari briefing."
      },
      {
        day: 2,
        title: "First Reserve Exploration",
        description: "Game drives in premier wildlife reserve."
      },
      {
        day: 3,
        title: "Big Five Tracking",
        description: "Focus on Big Five wildlife tracking."
      },
      {
        day: 4,
        title: "Second Reserve",
        description: "Transfer to second exclusive reserve."
      },
      {
        day: 5,
        title: "Continue Wildlife Viewing",
        description: "Additional premium wildlife experiences."
      },
      {
        day: 6,
        title: "Final Reserve Exploration",
        description: "Explore final premier reserve."
      },
      {
        day: 7,
        title: "Departure",
        description: "Final experiences before departure."
      }
    ],
    rating: 4.8,
    reviewCount: 15,
    metaTitle: "Safari Madoa Doa | Jae Travel Expeditions",
    metaDescription: "Experience a 7-day exclusive safari in Kenya, spotting the Big Five in premier wildlife reserves.",
    keywords: [
      "Kenya Safari",
      "Big Five Safari",
      "Wildlife Adventure",
      "Madoa Doa Safari"
    ],
    category: "Luxury",
    isPopular: true,
    bestFor: ["Luxury travelers", "Wildlife enthusiasts", "Exclusive experience seekers"],
    bookingUrl: "/tours/safari-madoa-doa",
    url: ""
  },
  {
    id: "52",
    slug: "best-of-zanzibar",
    title: "Best of Zanzibar",
    description: "Discover the tropical paradise of Zanzibar with its pristine beaches, historic Stone Town, and vibrant spice tours.",
    shortDescription: "Complete Zanzibar island experience",
    price: 2500,
    currency: "USD",
    image: "/zanzibar-beach.jpg",
    gallery: ["/zanzibar-beach.jpg", "/zanzibar-stone-town-view-min-800x600.jpg"],
    duration: "8 Days",
    groupSize: "2-8 people",
    difficulty: "Easy",
    region: "East Africa",
    country: "Tanzania",
    highlights: [
      "Pristine beaches",
      "Historic Stone Town",
      "Spice plantation tours",
      "Cultural experiences",
      "Water activities"
    ],
    included: [
      "Beach resort accommodation",
      "All meals included",
      "Stone Town tour",
      "Spice tour fees",
      "Some water activities"
    ],
    excluded: ["International flights", "Travel insurance", "Personal expenses", "Visa fees"],
    itinerary: [
      {
        day: 1,
        title: "Arrival and Stone Town",
        description: "Arrival and Stone Town orientation."
      },
      {
        day: 2,
        title: "Stone Town Exploration",
        description: "Comprehensive Stone Town exploration."
      },
      {
        day: 3,
        title: "Spice Tour",
        description: "Spice plantation tour and cultural experiences."
      },
      {
        day: 4,
        title: "Beach Transfer",
        description: "Transfer to beach resort and relaxation."
      },
      {
        day: 5,
        title: "Beach Activities",
        description: "Beach relaxation and water sports."
      },
      {
        day: 6,
        title: "Island Exploration",
        description: "Island exploration and additional activities."
      },
      {
        day: 7,
        title: "Cultural Immersion",
        description: "Cultural immersion and final experiences."
      },
      {
        day: 8,
        title: "Departure",
        description: "Final relaxation before departure."
      }
    ],
    rating: 4.9,
    reviewCount: 22,
    metaTitle: "Best of Zanzibar | Jae Travel Expeditions",
    metaDescription: "Explore Zanzibar's beaches, Stone Town, and spice tours on an 8-day cultural and beach adventure.",
    keywords: [
      "Zanzibar Tour",
      "Stone Town",
      "Spice Tour",
      "Tanzania Beach Holiday"
    ],
    category: "Beach",
    isPopular: true,
    bestFor: ["Beach lovers", "Cultural explorers", "Couples"],
    bookingUrl: "/tours/best-of-zanzibar",
    url: ""
  },
  {
    id: "53",
    slug: "classic-sky-safari-2",
    title: "Classic Sky Safari 2",
    description: "Soar above East Africa's iconic landscapes on a luxury sky safari, visiting Amboseli, Meru, and the Maasai Mara.",
    shortDescription: "Luxury aerial safari experience",
    price: 6500,
    currency: "USD",
    image: "/sky-safari.jpg",
    gallery: ["/sky-safari.jpg"],
    duration: "10 Days",
    groupSize: "4-8 people",
    difficulty: "Easy",
    region: "East Africa",
    country: "Kenya",
    highlights: [
      "Aerial safari views",
      "Luxury air travel",
      "Multiple park access",
      "Exclusive experiences",
      "Premium accommodations"
    ],
    included: [
      "Luxury lodge accommodation",
      "All meals included",
      "Private air transfers",
      "All park entrance fees",
      "Premium guide services"
    ],
    excluded: ["International flights", "Travel insurance", "Personal expenses", "Visa fees"],
    itinerary: [
      {
        day: 1,
        title: "Arrival and Briefing",
        description: "Arrival and luxury safari briefing."
      },
      {
        day: 2,
        title: "Amboseli Aerial Arrival",
        description: "Aerial transfer to Amboseli and first game drives."
      },
      {
        day: 3,
        title: "Amboseli Exploration",
        description: "Amboseli wildlife viewing with Kilimanjaro backdrop."
      },
      {
        day: 4,
        title: "Meru Aerial Transfer",
        description: "Aerial transfer to Meru National Park."
      },
      {
        day: 5,
        title: "Meru Wildlife",
        description: "Meru National Park exploration."
      },
      {
        day: 6,
        title: "Maasai Mara Transfer",
        description: "Aerial transfer to Maasai Mara."
      },
      {
        day: 7,
        title: "Maasai Mara Safari",
        description: "Comprehensive Maasai Mara game drives."
      },
      {
        day: 8,
        title: "Continue Mara",
        description: "Additional Maasai Mara experiences."
      },
      {
        day: 9,
        title: "Final Aerial Views",
        description: "Final aerial safari and experiences."
      },
      {
        day: 10,
        title: "Departure",
        description: "Return and departure."
      }
    ],
    rating: 5.0,
    reviewCount: 12,
    metaTitle: "Classic Sky Safari 2 | Jae Travel Expeditions",
    metaDescription: "Experience a 10-day luxury sky safari over Kenya's Amboseli, Meru, and Maasai Mara.",
    keywords: [
      "Sky Safari",
      "Luxury Safari Kenya",
      "Maasai Mara",
      "Amboseli Tour"
    ],
    category: "Luxury",
    isPopular: true,
    bestFor: ["Luxury travelers", "Aerial enthusiasts", "Exclusive experience seekers"],
    bookingUrl: "/tours/classic-sky-safari-2",
    url: ""
  },
  {
    id: "54",
    slug: "nairobi-national-park-tour",
    title: "Nairobi National Park Tour",
    description: "Explore Nairobi National Park, a unique wildlife haven near the city, home to rhinos, lions, and stunning savanna views.",
    shortDescription: "Wildlife park near Nairobi city",
    price: 200,
    currency: "USD",
    image: "/nairobi-park.jpg",
    gallery: ["/nairobi-park.jpg"],
    duration: "1 Day",
    groupSize: "4-8 people",
    difficulty: "Easy",
    region: "East Africa",
    country: "Kenya",
    highlights: [
      "City-adjacent wildlife",
      "Rhino viewing",
      "Lion spotting",
      "Savanna landscapes",
      "Easy accessibility"
    ],
    included: [
      "Park entrance fees",
      "Expert guide services",
      "Game drive vehicle",
      "Lunch included",
      "Hotel pickup and dropoff"
    ],
    excluded: ["International flights", "Travel insurance", "Personal expenses", "Visa fees"],
    itinerary: [
      {
        day: 1,
        title: "Nairobi National Park Exploration",
        description: "Half-day wildlife tour in Nairobi National Park, home to rhinos and lions."
      }
    ],
    rating: 4.6,
    reviewCount: 30,
    metaTitle: "Nairobi National Park Tour | Jae Travel Expeditions",
    metaDescription: "Discover wildlife near Nairobi with a half-day tour of Nairobi National Park, home to rhinos and lions.",
    keywords: [
      "Nairobi National Park",
      "Kenya Wildlife Tour",
      "Day Safari Nairobi",
      "Rhino Safari"
    ],
    category: "Budget",
    bestFor: ["City travelers", "First-time safari goers", "Budget-conscious travelers"],
    bookingUrl: "/tours/nairobi-national-park-tour",
    url: ""
  },
  {
    id: "55",
    slug: "visit-a-thousand-hills-distilleries",
    title: "Visit a Thousand Hills Distilleries",
    description: "Experience Rwanda's artisanal spirit scene with a tour of Thousand Hills Distilleries, tasting premium local beverages.",
    shortDescription: "Rwandan distillery tour and tasting",
    price: 100,
    currency: "USD",
    image: "/thousand-hills-distillery.jpg",
    gallery: ["/thousand-hills-distillery.jpg"],
    duration: "1 Day",
    groupSize: "4-8 people",
    difficulty: "Easy",
    region: "East Africa",
    country: "Rwanda",
    highlights: [
      "Artisanal spirits",
      "Distillery tour",
      "Local beverage tasting",
      "Rwandan craftsmanship",
      "Cultural experience"
    ],
    included: [
      "Distillery tour",
      "Beverage tasting",
      "Expert guide",
      "Transportation",
      "Light snacks"
    ],
    excluded: ["International flights", "Travel insurance", "Personal expenses", "Visa fees"],
    itinerary: [
      {
        day: 1,
        title: "Thousand Hills Distillery Tour",
        description: "Half-day distillery tour in Rwanda with premium local spirit tasting."
      }
    ],
    rating: 4.5,
    reviewCount: 10,
    metaTitle: "Visit a Thousand Hills Distilleries | Jae Travel Expeditions",
    metaDescription: "Tour Rwanda's Thousand Hills Distilleries and taste premium local spirits on a half-day experience.",
    keywords: [
      "Rwanda Distillery Tour",
      "Thousand Hills Distillery",
      "Local Spirits Rwanda",
      "Cultural Tour Rwanda"
    ],
    category: "Cultural",
    bestFor: ["Food and drink enthusiasts", "Cultural explorers", "Local experience seekers"],
    bookingUrl: "/tours/visit-a-thousand-hills-distilleries",
    url: ""
  },
  {
    id: "56",
    slug: "this-is-africa-nyamirambo-womens-center",
    title: "Nyamirambo Women's Center",
    description: "Immerse yourself in Rwandan culture with a visit to Nyamirambo Women's Center, exploring local crafts and community initiatives.",
    shortDescription: "Rwandan women's community center visit",
    price: 80,
    currency: "USD",
    image: "/nyamirambo-center.jpg",
    gallery: ["/nyamirambo-center.jpg"],
    duration: "1 Day",
    groupSize: "4-12 people",
    difficulty: "Easy",
    region: "East Africa",
    country: "Rwanda",
    highlights: [
      "Women's empowerment",
      "Local crafts",
      "Community initiatives",
      "Cultural immersion",
      "Educational experience"
    ],
    included: [
      "Center tour",
      "Craft demonstration",
      "Cultural activities",
      "Expert local guide",
      "Transportation"
    ],
    excluded: ["International flights", "Travel insurance", "Personal expenses", "Visa fees"],
    itinerary: [
      {
        day: 1,
        title: "Nyamirambo Women's Center Visit",
        description: "Half-day cultural tour exploring Rwandan crafts and community initiatives at Nyamirambo Women's Center."
      }
    ],
    rating: 4.8,
    reviewCount: 15,
    metaTitle: "Nyamirambo Women's Center Tour | Jae Travel Expeditions",
    metaDescription: "Explore Rwandan culture and crafts at Nyamirambo Women's Center in Kigali on a half-day tour.",
    keywords: [
      "Nyamirambo Women's Center",
      "Rwanda Cultural Tour",
      "Kigali Community Tour",
      "African Crafts"
    ],
    category: "Cultural",
    bestFor: ["Cultural enthusiasts", "Community supporters", "Educational travelers"],
    bookingUrl: "/tours/this-is-africa-nyamirambo-womens-center",
    url: ""
  },
  {
    id: "57",
    slug: "relaxation-at-the-beach",
    title: "Relaxation at the Beach",
    description: "Unwind on the pristine beaches of East Africa, enjoying sun, sand, and sea in a serene coastal escape.",
    shortDescription: "Beach relaxation getaway",
    price: 1200,
    currency: "USD",
    image: "/beach-relaxation.jpg",
    gallery: ["/beach-relaxation.jpg"],
    duration: "5 Days",
    groupSize: "2-8 people",
    difficulty: "Easy",
    region: "East Africa",
    country: "Tanzania",
    highlights: [
      "Pristine beaches",
      "Serene coastal escape",
      "Sun and sand",
      "Water activities",
      "Relaxation focus"
    ],
    included: [
      "Beach resort accommodation",
      "All meals included",
      "Some water activities",
      "Beach equipment",
      "Resort amenities"
    ],
    excluded: ["International flights", "Travel insurance", "Personal expenses", "Visa fees"],
    itinerary: [
      {
        day: 1,
        title: "Arrival and Beach Setup",
        description: "Arrival and beach resort check-in."
      },
      {
        day: 2,
        title: "Beach Relaxation",
        description: "Full day of beach relaxation and sun."
      },
      {
        day: 3,
        title: "Water Activities",
        description: "Optional water sports and activities."
      },
      {
        day: 4,
        title: "Coastal Exploration",
        description: "Coastal walks and exploration."
      },
      {
        day: 5,
        title: "Departure",
        description: "Final beach time before departure."
      }
    ],
    rating: 4.7,
    reviewCount: 20,
    metaTitle: "Relaxation at the Beach | Jae Travel Expeditions",
    metaDescription: "Unwind on East Africa's pristine beaches with a 5-day coastal retreat.",
    keywords: [
      "Beach Holiday East Africa",
      "Coastal Retreat",
      "Tanzania Beach Tour",
      "Relaxation Tour"
    ],
    category: "Beach",
    bestFor: ["Relaxation seekers", "Couples", "Beach lovers"],
    bookingUrl: "/tours/relaxation-at-the-beach",
    url: ""
  },
  {
    id: "58",
    slug: "safari-dwika",
    title: "Safari Dwika",
    description: "Join an adventurous safari through Tanzania's iconic parks, witnessing diverse wildlife and stunning landscapes.",
    shortDescription: "Adventurous Tanzania safari",
    price: 3500,
    currency: "USD",
    image: "/dwika-safari.jpg",
    gallery: ["/dwika-safari.jpg"],
    duration: "7 Days",
    groupSize: "4-8 people",
    difficulty: "Easy",
    region: "East Africa",
    country: "Tanzania",
    highlights: [
      "Iconic Tanzanian parks",
      "Diverse wildlife",
      "Stunning landscapes",
      "Adventure focus",
      "Comprehensive experience"
    ],
    included: [
      "Lodge and camp accommodation",
      "All meals included",
      "All park entrance fees",
      "Expert guide services",
      "Game drive vehicle"
    ],
    excluded: ["International flights", "Travel insurance", "Personal expenses", "Visa fees"],
    itinerary: [
      {
        day: 1,
        title: "Arrival and Preparation",
        description: "Arrival and safari preparation in Tanzania."
      },
      {
        day: 2,
        title: "First Park Exploration",
        description: "Game drives in first iconic national park."
      },
      {
        day: 3,
        title: "Continue Wildlife Viewing",
        description: "Additional wildlife experiences and tracking."
      },
      {
        day: 4,
        title: "Second Park Transfer",
        description: "Transfer to second iconic park."
      },
      {
        day: 5,
        title: "Second Park Exploration",
        description: "Comprehensive exploration of second park."
      },
      {
        day: 6,
        title: "Final Park Experiences",
        description: "Final wildlife viewing and experiences."
      },
      {
        day: 7,
        title: "Departure",
        description: "Return and departure."
      }
    ],
    rating: 4.8,
    reviewCount: 18,
    metaTitle: "Safari Dwika | Jae Travel Expeditions",
    metaDescription: "Experience a 7-day safari adventure through Tanzania's iconic wildlife parks.",
    keywords: [
      "Tanzania Safari",
      "Wildlife Tour",
      "Dwika Safari",
      "East Africa Adventure"
    ],
    category: "Safari",
    isPopular: true,
    bestFor: ["Adventure seekers", "Wildlife enthusiasts", "Comprehensive experience lovers"],
    bookingUrl: "/tours/safari-dwika",
    url: ""
  }
]

export const toursByCountry = {
  Kenya: tours.filter((t) => t.country === "Kenya"),
  Tanzania: tours.filter((t) => t.country === "Tanzania"),
  Rwanda: tours.filter((t) => t.country === "Rwanda"),
  Uganda: tours.filter((t) => t.country === "Uganda"),
  "Multi-Country": tours.filter((t) => t.country === "Multi-Country"),
}

export const toursOnOffer = tours.filter((t) => t.isOnOffer)
export const popularTours = tours.filter((t) => t.isPopular)

export const toursByCategory = (category: string) => {
  return tours.filter((t) => t.category === category)
}

export function getTourBySlug(slug: string) {
  return tours.find((t) => t.slug === slug)
}

export function getTourById(id: string) {
  return tours.find((t) => t.id === id)
}

export function searchTours(query: string) {
  const searchTerm = query.toLowerCase()
  return tours.filter(
    (t) =>
      t.title.toLowerCase().includes(searchTerm) ||
      t.description.toLowerCase().includes(searchTerm) ||
      t.keywords.some((k) => k.toLowerCase().includes(searchTerm)),
  )
}

export function filterTours(options: {
  country?: string
  maxPrice?: number
  minPrice?: number
  category?: string
  difficulty?: string
}) {
  return tours.filter((t) => {
    if (options.country && t.country !== options.country) return false
    if (options.maxPrice && t.price > options.maxPrice) return false
    if (options.minPrice && t.price < options.minPrice) return false
    if (options.category && t.category !== options.category) return false
    if (options.difficulty && t.difficulty !== options.difficulty) return false
    return true
  })
}