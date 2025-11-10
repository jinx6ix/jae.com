export interface Vehicle {
  id: string
  slug: string
  name: string
  description: string
  longDescription: string
  pricePerDay: number
  currency: string
  image: string
  specs: {
    seating: string
    transmission: string
    fuelType: string
    roofType: string  // <-- ADD THIS
    wheelBase: string
    groundClearance: string
  }
  features: string[]
  bestFor: string[]
  rentalPeriods: Array<{
    duration: string
    dailyRate: number
    totalPrice: number
  }>
  metaTitle: string
  metaDescription: string
  keywords: string[]
  includedServices: string[]
  addOns: Array<{
    name: string
    price: number
  }>
}

export const vehicles: Vehicle[] = [
  {
    id: "v1",
    slug: "toyota-landcruiser-safari-rental",
    name: "Toyota Land Cruiser",
    description:
      "The ultimate safari vehicle. The Toyota Land Cruiser is the gold standard for African safaris, trusted by professionals worldwide for its legendary reliability, excellent ground clearance, and superior comfort during extended game drives.",
    longDescription: `The Toyota Land Cruiser is the undisputed king of safari vehicles. Used by safari operators across East Africa for decades, this iconic 4x4 combines rugged durability with refined comfort. With its powerful diesel engine, excellent suspension, and superior visibility, the Land Cruiser provides the perfect platform for wildlife viewing.

The Land Cruiser's high roofline offers unobstructed views of the surrounding landscape. Its spacious interior comfortably accommodates up to 6 passengers plus a professional guide. The vehicle's reputation for reliability means you'll spend more time photographing wildlife and less time worrying about breakdowns.

Perfect for families, photographers, and serious wildlife enthusiasts, the Land Cruiser features pop-up roof panels for unobstructed wildlife photography, adjustable seats for optimal viewing angles, and a powerful air conditioning system to keep you cool during long game drives across the African savanna.

Our Land Cruisers are meticulously maintained, regularly serviced, and equipped with GPS navigation, first aid kits, and communication systems. Each vehicle has an experienced driver who knows the wildlife patterns and can position you perfectly for unforgettable wildlife encounters.`,
    pricePerDay: 450,
    currency: "USD",
    image: "/placeholder.svg?key=landcruiser",
    specs: {
      seating: "6-7 passengers",
      roofType: "Pop-up Roof",  // or "Fixed", "Panoramic", etc.
      transmission: "Automatic",
      fuelType: "Diesel",
      wheelBase: "Extended",
      groundClearance: "210mm",
    },
    features: [
      "Pop-up roof panels for photography",
      "Air conditioning system",
      "Power steering",
      "GPS navigation",
      "Premium suspension",
      "High ground clearance",
      "Spacious trunk space",
      "24/7 roadside assistance",
    ],
    bestFor: [
      "Safari enthusiasts",
      "Professional photographers",
      "Families seeking comfort",
      "Extended wildlife tours",
      "Off-road exploration",
    ],
    rentalPeriods: [
      { duration: "1 day", dailyRate: 450, totalPrice: 450 },
      { duration: "7 days", dailyRate: 400, totalPrice: 2800 },
      { duration: "14 days", dailyRate: 375, totalPrice: 5250 },
      { duration: "30 days", dailyRate: 350, totalPrice: 10500 },
    ],
    metaTitle: "Toyota Land Cruiser Safari Rental | Jae Travel Expeditions",
    metaDescription:
      "Rent a Toyota Land Cruiser for your East African safari. Luxury, reliability, and unmatched comfort for wildlife viewing.",
    keywords: [
      "Toyota Land Cruiser rental",
      "Safari vehicle hire",
      "Land Cruiser safari",
      "Kenya vehicle rental",
      "Tanzania safari rental",
      "Land Cruiser rental East Africa",
      "safari car rental",
      "best safari vehicle",
      "4x4 rental africa",
      "luxury safari car",
    ],
    includedServices: [
      "Experienced driver",
      "Fuel",
      "Insurance",
      "GPS navigation",
      "First aid kit",
      "Communication system",
    ],
    addOns: [
      { name: "GPS Tracker", price: 50 },
      { name: "WiFi Hotspot", price: 25 },
      { name: "Extra Driver", price: 200 },
    ],
  },
  {
    id: "v2",
    slug: "toyota-prado-safari-vehicle-rental",
    name: "Toyota Prado",
    description:
      "A perfect balance of comfort and capability. The Toyota Prado offers excellent off-road performance with premium comfort features. Ideal for families and small groups seeking a more accessible yet highly capable safari vehicle.",
    longDescription: `The Toyota Prado combines modern luxury with proven off-road capability. While slightly smaller than the Land Cruiser, the Prado offers surprising comfort and is excellent for smaller groups and families. Its advanced suspension system provides smooth rides even on rough safari routes.

The Prado features automatic transmission as standard, making it easier to navigate challenging terrain while maintaining comfort. The cabin is appointed with modern amenities including climate control, premium audio systems, and comfortable seating for up to 5 passengers plus driver.

Perfect for couples, small families, and those seeking a more intimate safari experience, the Prado combines Japanese engineering excellence with practical safari features. Its fuel efficiency means longer distances between refueling, while its reputation for reliability ensures peace of mind during your African adventure.

The Prado is particularly popular for accessing remote areas, as its smaller size allows navigation through narrower wildlife trails while its robust construction handles any terrain. Whether you're tracking elephants in Amboseli, crossing the Serengeti, or climbing to Ngorongoro crater, the Prado delivers both comfort and capability.`,
    pricePerDay: 350,
    currency: "USD",
    image: "/placeholder.svg?key=prado",
    specs: {
      seating: "5-6 passengers",
      transmission: "Automatic",
      fuelType: "Diesel",
      roofType: "Pop-up Roof",  // or "Fixed", "Panoramic", etc.
      wheelBase: "Standard",
      groundClearance: "190mm",
    },
    features: [
      "Climate control",
      "Premium audio system",
      "Electric windows",
      "Power steering",
      "Anti-lock braking",
      "Cruise control",
      "Good ground clearance",
      "Fuel efficient",
    ],
    bestFor: [
      "Small families",
      "Couples",
      "Budget-conscious travelers",
      "Comfort-focused safaris",
      "Remote area exploration",
    ],
    rentalPeriods: [
      { duration: "1 day", dailyRate: 350, totalPrice: 350 },
      { duration: "7 days", dailyRate: 300, totalPrice: 2100 },
      { duration: "14 days", dailyRate: 280, totalPrice: 3920 },
      { duration: "30 days", dailyRate: 260, totalPrice: 7800 },
    ],
    metaTitle: "Toyota Prado Safari Vehicle Rental | Jae Travel Expeditions",
    metaDescription:
      "Book Toyota Prado for safari in East Africa. Perfect for families seeking comfort and capability. Excellent rates on daily, weekly, and monthly rentals.",
    keywords: [
      "Toyota Prado rental",
      "Prado safari vehicle",
      "safari car rental",
      "Kenya vehicle rental",
      "affordable safari rental",
      "Prado 4x4 rental",
      "family safari vehicle",
      "safari car hire",
    ],
    includedServices: ["Experienced driver", "Fuel", "Insurance", "Navigation system", "Emergency kit"],
    addOns: [
      { name: "Child Car Seat", price: 30 },
      { name: "Roof Rack", price: 40 },
      { name: "Extra Driver", price: 150 },
    ],
  },
  {
    id: "v3",
    slug: "luxury-rooftop-camping-vehicle-rental",
    name: "Luxury Rooftop Camping Vehicle",
    description:
      "Experience safari sleeping under the stars. This specialized vehicle features a premium rooftop tent, making it perfect for adventurers wanting to sleep in nature while still enjoying comfort. Wake up to wildlife sounds and stunning African sunrises.",
    longDescription: `The Luxury Rooftop Camping Vehicle combines the thrill of outdoor adventure with genuine comfort. Featuring a premium rooftop tent with memory foam mattress, this vehicle transforms your safari into a truly immersive African experience.

The rooftop tent is waterproof, well-ventilated, and includes quality bedding and lighting. The vehicle base provides storage for camping gear, a kitchenette for basic meal preparation, and a portable shower/toilet system. Perfect for extended safari expeditions and wildlife enthusiasts who want maximum connection with nature.

The rooftop tent is elevated, providing safety from ground predators while offering 360-degree views of the African landscape. The vehicle includes basic cooking equipment, allowing you to prepare meals near your accommodation or purchase prepared meals from local providers.

This vehicle is ideal for photography safaris, wildlife researchers, adventure seekers, and nature enthusiasts who want an unforgettable experience. Many visitors report that sleeping under African stars with the sounds of wildlife around them was the highlight of their entire trip.

All vehicles are equipped with emergency communication systems, first aid kits, and experienced guides who can educate you about nocturnal wildlife and safety protocols. The rooftop design allows night sky photography opportunities rarely available in traditional lodges.`,
    pricePerDay: 550,
    currency: "USD",
    image: "/placeholder.svg?key=rooftop",
    specs: {
      seating: "4 passengers",
      transmission: "Automatic",
      roofType: "Pop-up Roof",  // or "Fixed", "Panoramic", etc.
      fuelType: "Diesel",
      wheelBase: "Extended",
      groundClearance: "220mm",
    },
    features: [
      "Premium rooftop tent",
      "Memory foam mattress",
      "Portable toilet",
      "Shower system",
      "Kitchenette",
      "LED lighting",
      "Storage compartments",
      "Emergency communication",
    ],
    bestFor: [
      "Adventure seekers",
      "Photography enthusiasts",
      "Wildlife researchers",
      "Budget adventurers",
      "Nature lovers",
      "Extended expeditions",
    ],
    rentalPeriods: [
      { duration: "1 day", dailyRate: 550, totalPrice: 550 },
      { duration: "7 days", dailyRate: 475, totalPrice: 3325 },
      { duration: "14 days", dailyRate: 450, totalPrice: 6300 },
      { duration: "30 days", dailyRate: 425, totalPrice: 12750 },
    ],
    metaTitle: "Luxury Rooftop Camping Vehicle Rental | Safari Sleep Under Stars",
    metaDescription:
      "Rent luxury rooftop camping vehicle for unforgettable African safari. Sleep under the stars with premium comfort and safety.",
    keywords: [
      "rooftop camping vehicle",
      "safari camping rental",
      "rooftop tent safari",
      "camping vehicle hire",
      "adventure safari rental",
      "outdoor sleeping safari",
      "rooftop tent accommodation",
      "budget adventure safari",
    ],
    includedServices: [
      "Rooftop tent with bedding",
      "Portable toilet",
      "Shower system",
      "Basic cooking equipment",
      "Safety equipment",
      "Guide services",
    ],
    addOns: [
      { name: "Photography Guide", price: 100 },
      { name: "Extra Bedding Set", price: 50 },
      { name: "Camping Stove", price: 40 },
    ],
  },
  {
    id: "v4",
    slug: "photography-converted-safari-vehicle-rental",
    name: "Photography Converted Vehicle",
    description:
      "Built specifically for wildlife photographers. This specialized vehicle features camera mounts, professional lighting equipment, stabilization systems, and multiple camera positions for capturing the perfect wildlife shot.",
    longDescription: `The Photography Converted Vehicle is designed by and for professional wildlife photographers. Every feature has been optimized to help you capture award-winning wildlife images. The vehicle features multiple camera positions, including side mounts, roof mounts, and stabilized platforms.

Advanced stabilization systems minimize vibration, ensuring crisp images even during movement. Professional-grade camera mounts accommodate telephoto lenses, reducing hand fatigue during long shooting sessions. Interior shooting positions allow photographing through side windows with reduced glare and reflections.

The vehicle includes equipment storage for professional camera gear, backup batteries, memory cards, and charging stations. LED lighting systems can assist with photography during low-light conditions. The experienced driver is trained to position the vehicle for optimal wildlife photography angles and understands wildlife behavior to anticipate perfect shots.

Perfect for professional photographers, photography tours, wildlife documentarians, and serious photography enthusiasts, this vehicle transforms your safari into a photography masterclass. The driver works in coordination with your shooting to position the vehicle for the best angles and lighting.

Premium features include GPS-guided routes to known wildlife hotspots, animal tracking capabilities, and driver expertise in wildlife behavior. Many professional safari photographers specifically request this vehicle type for their assignments.`,
    pricePerDay: 650,
    currency: "USD",
    image: "/placeholder.svg?key=photography",
    specs: {
      seating: "3-4 passengers",
      transmission: "Automatic",
      roofType: "Pop-up Roof",  // or "Fixed", "Panoramic", etc.
      fuelType: "Diesel",
      wheelBase: "Extended",
      groundClearance: "230mm",
    },
    features: [
      "Professional camera mounts",
      "Stabilization systems",
      "Roof shooting platform",
      "Side window mounts",
      "LED lighting systems",
      "Equipment storage",
      "Charging stations",
      "Wildlife tracking GPS",
    ],
    bestFor: [
      "Professional photographers",
      "Wildlife documentarians",
      "Photography tour groups",
      "Serious enthusiasts",
      "Magazine photographers",
      "Nature photographers",
    ],
    rentalPeriods: [
      { duration: "1 day", dailyRate: 650, totalPrice: 650 },
      { duration: "7 days", dailyRate: 575, totalPrice: 4025 },
      { duration: "14 days", dailyRate: 550, totalPrice: 7700 },
      { duration: "30 days", dailyRate: 525, totalPrice: 15750 },
    ],
    metaTitle: "Professional Photography Safari Vehicle Rental | Jae Travel Expeditions",
    metaDescription:
      "Book professional photography vehicle for wildlife photography safaris. Camera mounts, stabilization, and expert drivers for perfect shots.",
    keywords: [
      "photography safari vehicle",
      "professional camera vehicle",
      "wildlife photography rental",
      "photography tour vehicle",
      "photography safari car",
      "professional photography equipment",
      "wildlife photographer vehicle",
      "safari photography rental",
    ],
    includedServices: [
      "Professional camera mounts",
      "Stabilization equipment",
      "Photography expert driver",
      "GPS wildlife tracking",
      "Photography training",
      "Equipment support",
    ],
    addOns: [
      { name: "Professional Photography Guide", price: 200 },
      { name: "Drone Photography Setup", price: 300 },
      { name: "Backup Camera Equipment", price: 150 },
    ],
  },
  {
    id: "v5",
    slug: "wheelchair-accessible-safari-landcruiser-rental",
    name: "Wheelchair Accessible Safari Land Cruiser",
    description:
      "Fully accessible Land Cruiser with hydraulic wheelchair lift, accessible seating, and accessibility features. Designed for travelers with mobility challenges to enjoy world-class safari experiences safely and comfortably.",
    longDescription: `The Wheelchair Accessible Land Cruiser brings world-class safari experiences within reach of all travelers. This specially modified vehicle features a hydraulic wheelchair lift system, accessible seating arrangements, and comprehensive accessibility features developed in consultation with disability accessibility specialists.

The vehicle features an electronic wheelchair lift that operates safely and reliably in rugged African conditions. Once inside, the wheelchair can be secured using professional-grade tie-down systems. The interior has been reconfigured to provide wheelchair maneuvering space and accessible seating positions with excellent wildlife viewing angles.

Accessible features include accessible entry doors, widened aisles, and specially designed seating that accommodates various mobility needs. Climate control is optimized, and the vehicle includes accessible restroom facilities suitable for travelers with various disabilities.

The driver is specially trained in accessibility protocols and disability awareness. Medical equipment storage is available for oxygen, medications, or other medical devices. The vehicle comes equipped with communication systems and coordination with medical facilities along all safari routes.

Perfect for travelers with mobility impairments, wheelchair users, elderly adventurers, and anyone with specific accessibility needs, this vehicle ensures everyone can experience African wildlife. The spacious interior allows personal care attendants or family members to accompany travelers comfortably.`,
    pricePerDay: 550,
    currency: "USD",
    image: "/placeholder.svg?key=accessible",
    specs: {
      seating: "4-5 passengers",
      transmission: "Automatic",
      roofType: "Pop-up Roof",  // or "Fixed", "Panoramic", etc.

      fuelType: "Diesel",
      wheelBase: "Extended",
      groundClearance: "210mm",
    },
    features: [
      "Hydraulic wheelchair lift",
      "Wheelchair tie-down systems",
      "Accessible seating",
      "Wide entry door",
      "Climate control",
      "Accessible restroom",
      "Medical equipment storage",
      "Communication system",
    ],
    bestFor: [
      "Wheelchair users",
      "Mobility impaired travelers",
      "Elderly adventurers",
      "People with disabilities",
      "Accessible tourism",
      "Inclusive experiences",
    ],
    rentalPeriods: [
      { duration: "1 day", dailyRate: 550, totalPrice: 550 },
      { duration: "7 days", dailyRate: 500, totalPrice: 3500 },
      { duration: "14 days", dailyRate: 475, totalPrice: 6650 },
      { duration: "30 days", dailyRate: 450, totalPrice: 13500 },
    ],
    metaTitle: "Wheelchair Accessible Safari Land Cruiser | Jae Travel Expeditions",
    metaDescription:
      "Rent wheelchair-accessible Land Cruiser for safari. Hydraulic lift, accessible seating, trained drivers, medical support available.",
    keywords: [
      "wheelchair accessible vehicle",
      "accessible safari rental",
      "wheelchair safari car",
      "adapted vehicle rental",
      "disability accessible safari",
      "wheelchair vehicle hire",
      "accessible Land Cruiser",
    ],
    includedServices: [
      "Hydraulic wheelchair lift",
      "Accessibility trained driver",
      "Wheelchair tie-down systems",
      "Medical support coordination",
      "Communication systems",
      "Accessibility specialist consultation",
    ],
    addOns: [
      { name: "Medical Professional Escort", price: 200 },
      { name: "Additional Accessibility Equipment", price: 100 },
      { name: "Personal Attendant Accommodation", price: 150 },
    ],
  },
  {
    id: "v6",
    slug: "family-safari-minivan-rental",
    name: "Family Safari Minivan",
    description:
      "Perfect for families with young children. The family minivan features comfortable seating for up to 8 people, climate control, entertainment systems, and flexible configurations for family comfort during extended safari adventures.",
    longDescription: `The Family Safari Minivan is specifically designed for families wanting to experience African safaris together. With comfortable seating for up to 8 passengers, this vehicle eliminates the need for multiple rental vehicles while keeping families together for shared experiences.

The minivan features child-appropriate seating with adjustable configurations to accommodate different ages and sizes. Climate control keeps everyone comfortable during long game drives, while entertainment systems can provide content during downtime (though many families report that real wildlife provides more entertainment than any screen).

The vehicle includes a small refrigerator for snacks and beverages, making it convenient for families with young children who have frequent nutrition needs. Multiple storage compartments accommodate family luggage, camera equipment, and recreational items.

The family-friendly driver is experienced with children and can adjust the pace and focus of safari experience to maintain family enjoyment. The driver often shares educational information about wildlife in engaging ways that capture children's imagination.

Perfect for family safaris, multi-generational groups, family reunions, and any gathering where families want to share African safari adventures together, the minivan provides the space, comfort, and flexibility families need for unforgettable memories.`,
    pricePerDay: 400,
    currency: "USD",
    image: "/placeholder.svg?key=family",
    specs: {
      seating: "7-8 passengers",
      transmission: "Automatic",
      roofType: "Pop-up Roof",  // or "Fixed", "Panoramic", etc.

      fuelType: "Diesel",
      wheelBase: "Extended",
      groundClearance: "180mm",
    },
    features: [
      "Spacious seating for 8",
      "Climate control",
      "Entertainment system",
      "Refrigerator",
      "Multiple storage",
      "Child-friendly design",
      "Flexible seating",
      "Family-friendly driver",
    ],
    bestFor: [
      "Families with children",
      "Multi-generational groups",
      "Large groups",
      "Family reunions",
      "Shared safari experiences",
      "Comfortable safaris",
    ],
    rentalPeriods: [
      { duration: "1 day", dailyRate: 400, totalPrice: 400 },
      { duration: "7 days", dailyRate: 350, totalPrice: 2450 },
      { duration: "14 days", dailyRate: 325, totalPrice: 4550 },
      { duration: "30 days", dailyRate: 300, totalPrice: 9000 },
    ],
    metaTitle: "Family Safari Minivan Rental | Group Safari Vehicle | Jae Travel",
    metaDescription:
      "Book family safari minivan for up to 8 passengers. Perfect for families, groups, and multi-generational safaris with comfort and convenience.",
    keywords: [
      "family safari vehicle",
      "safari minivan rental",
      "group safari car",
      "family vacation safari",
      "large group safari rental",
      "family adventure vehicle",
      "safari van rental",
    ],
    includedServices: [
      "Family-friendly driver",
      "Climate control",
      "Entertainment system",
      "Refrigerator",
      "Child safety features",
      "Spacious storage",
    ],
    addOns: [
      { name: "Child Car Seat", price: 25 },
      { name: "Roof Rack System", price: 50 },
      { name: "Entertainment Packages", price: 75 },
    ],
  },
]

export function getVehicleBySlug(slug: string) {
  return vehicles.find((v) => v.slug === slug)
}

export function getAllVehicles() {
  return vehicles
}
