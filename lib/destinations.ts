// @/lib/destinations.ts
import { ComponentType } from "react"
import { MapPin, Mountain, Trees,MountainSnow } from "lucide-react"

export interface Destination {
  id: string
  slug: string
  name: string
  country: string
  description: string
  longDescription: string
  bestTimeToVisit: string
  highlights: string[]
  image: string
  gallery?: string[]
  metaTitle: string
  metaDescription: string
  keywords: string[]
  attractions: Array<{
    name: string
    description: string
  }>
  topRankedKeywords?: string[]
  icon: ComponentType<{ className?: string }>
  featured?: boolean
  tourCount: number
  priceRange: { min: number; max?: number }
  wildlifeRating: number
  migrationNote?: string
}

export const destinations: Destination[] = [
  {
    id: "kenya",
    slug: "kenya",
    name: "Kenya",
    country: "Kenya",
    description: "Experience Africa's most iconic safari destination",
    longDescription: `Kenya is the crown jewel of East African safari destinations. From the vast plains of Masai Mara to the snow-capped peaks of Mount Kenya, this country offers unparalleled wildlife viewing opportunities and authentic cultural experiences. Home to the Big Five and host to the annual Great Migration, Kenya attracts over one million visitors annually who come to experience its natural wonders.

Kenya's diverse ecosystems span from coastal beaches to mountain forests, savanna plains to Great Rift Valley formations. The country\'s exceptional wildlife conservation efforts have made it a leader in sustainable tourism. With world-class lodges, experienced guides, and excellent infrastructure, Kenya remains the most accessible and popular safari destination in East Africa.

The Kenyan people are warm and welcoming, with rich cultural traditions spanning over 40 different ethnic groups. Visitors can experience authentic Maasai culture, visit local markets, and participate in community tourism initiatives. Kenya\'s safari experiences cater to all budgets and preferences, from luxury tented camps to budget-friendly options.`,
    bestTimeToVisit: "June to October (dry season) and January to February",
    highlights: [
      "Masai Mara National Reserve - Great Migration",
      "Mount Kenya - Africa's second highest peak",
      "Amboseli National Park - Kilimanjaro views",
      "Tsavo National Parks - Vast wilderness",
      "Lake Nakuru - Flamingos and wildlife",
      "Mombasa beaches and coral reefs",
      "Maasai cultural villages",
      "Hell's Gate National Park",
    ],
    image: "/placeholder.svg?key=kenya-safari",
    gallery: ["/placeholder.svg?key=kenya1", "/placeholder.svg?key=kenya2", "/placeholder.svg?key=kenya3"],
    metaTitle: "Kenya Safari Tours | Masai Mara & Wildlife | Jae Travel Expeditions",
    metaDescription: "Book Kenya safari tours to Masai Mara, Mount Kenya, and Amboseli. Witness the Great Migration, Big Five, and authentic Maasai culture with expert guides.",
    keywords: [
      "Kenya safari tours",
      "Masai Mara safari",
      "Kenya wildlife",
      "Great Migration Kenya",
      "Mount Kenya climbing",
      "Amboseli safari",
      "Kenya luxury safari",
      "Kenya budget safari",
      "Kenya adventure tours",
      "Big Five safari Kenya",
      "Kenya gorilla trekking",
      "Kenya cultural tours",
      "Nairobi to safari",
      "Kenya safari packages",
      "best time Kenya safari",
    ],
    attractions: [
      {
        name: "Masai Mara National Reserve",
        description: "Kenya's largest and most famous safari destination, home to the annual Great Migration of over 2 million wildebeest and zebras.",
      },
      {
        name: "Mount Kenya",
        description: "Africa's second-highest peak at 5,199m. Popular trekking destination with diverse ecosystems.",
      },
      {
        name: "Amboseli National Park",
        description: "Famous for large elephant herds and spectacular views of Mount Kilimanjaro in Tanzania.",
      },
      {
        name: "Lake Nakuru",
        description: "Alkaline lake known for its stunning flamingo populations and abundant birdlife.",
      },
      {
        name: "Tsavo National Parks",
        description: "Kenya's largest national park system with diverse wildlife and red elephants.",
      },
    ],
    topRankedKeywords: [
      "best safari kenya",
      "kenya safari tour package",
      "masai mara safari 2025",
      "kenya wildlife tours",
      "affordable kenya safari",
    ],
    icon: MapPin,
    featured: true,
    tourCount: 48,
    priceRange: { min: 350 },
    wildlifeRating: 5,
    migrationNote: "Great Migration: July–October in Masai Mara",
  },
  {
    id: "tanzania",
    slug: "tanzania",
    name: "Tanzania",
    country: "Tanzania",
    description: "Witness Earth's greatest natural spectacle",
    longDescription: `Tanzania is home to some of the world\'s most spectacular natural wonders and wildlife experiences. The Serengeti National Park is famous for hosting the annual Great Migration, one of the seven natural wonders of the world. Mount Kilimanjaro, Africa\'s highest peak, attracts thousands of climbers annually who seek the ultimate African adventure.

The country\'s diverse landscape includes the Ngorongoro Crater, the world\'s largest intact volcanic caldera, which supports an incredibly dense wildlife population. Lake Tanganyika, one of the deepest and oldest lakes in the world, offers unique experiences including chimpanzee trekking at Mahale Mountains.

Tanzania has been a leader in wildlife conservation, with some of Africa\'s best-managed national parks and game reserves. The country\'s safari experiences are known for authenticity and exclusivity, with vast wilderness areas experiencing fewer visitors than neighboring countries. From budget safaris to ultra-luxury camps, Tanzania offers exceptional value and unforgettable wildlife encounters.

Zanzibar, Tanzania\'s legendary spice island, provides the perfect beach complement to a safari adventure. The historic Stone Town combines African, Arab, and Indian influences, offering cultural immersion and world-class diving opportunities.`,
    bestTimeToVisit: "June to October (dry season) and December to February",
    highlights: [
      "Serengeti National Park - Great Migration",
      "Mount Kilimanjaro - Africa's highest peak",
      "Ngorongoro Crater - World's largest caldera",
      "Zanzibar - Spice island paradise",
      "Lake Tanganyika - Chimpanzee trekking",
      "Tarangire National Park - Elephant herds",
      "Lake Manyara - Tree-climbing lions",
      "Ruaha National Park - Remote wilderness",
    ],
    image: "/placeholder.svg?key=tanzania-safari",
    gallery: ["/placeholder.svg?key=tanzania1", "/placeholder.svg?key=tanzania2", "/placeholder.svg?key=tanzania3"],
    metaTitle: "Tanzania Safari Tours | Serengeti & Kilimanjaro | Jae Travel Expeditions",
    metaDescription: "Book Tanzania safari tours to Serengeti, Kilimanjaro, and Ngorongoro. Experience the Great Migration and Africa's highest peak with expert guides.",
    keywords: [
      "Tanzania safari tours",
      "Serengeti safari",
      "Mount Kilimanjaro climbing",
      "Tanzania wildlife",
      "Ngorongoro Crater safari",
      "Great Migration Tanzania",
      "Zanzibar tour",
      "Tanzania luxury safari",
      "Tanzania adventure tours",
      "Kilimanjaro expedition",
      "Serengeti Great Migration",
      "Tanzania cultural tours",
      "Tarangire National Park",
      "Tanzania safari packages",
      "best safari Tanzania",
    ],
    attractions: [
      {
        name: "Serengeti National Park",
        description: "UNESCO World Heritage Site hosting the annual Great Migration and home to the Big Five.",
      },
      {
        name: "Mount Kilimanjaro",
        description: "At 5,895m, Africa's highest peak. The Machame Route offers the best climbing experience.",
      },
      {
        name: "Ngorongoro Crater",
        description: "The world's largest intact volcanic caldera with exceptionally dense wildlife populations.",
      },
      {
        name: "Zanzibar",
        description: "Historic spice island with pristine beaches, Stone Town UNESCO site, and diving opportunities.",
      },
      {
        name: "Lake Tanganyika",
        description: "One of the world's deepest lakes. Home to Mahale Mountains and wild chimpanzees.",
      },
    ],
    topRankedKeywords: [
      "serengeti migration tour",
      "kilimanjaro climb guide",
      "tanzania all inclusive safari",
      "ngorongoro crater tour",
      "zanzibar spice tour",
    ],
    icon: Trees,
    featured: true,
    tourCount: 62,
    priceRange: { min: 450, max: 2000 },
    wildlifeRating: 5,
    migrationNote: "Great Migration: Year-round in Serengeti ecosystem",
  },
  {
    id: "rwanda",
    slug: "rwanda",
    name: "Rwanda",
    country: "Rwanda",
    description: "Land of a Thousand Hills and Mountain Gorillas",
    longDescription: `Rwanda, known as the Land of a Thousand Hills, is one of Africa\'s most spectacular and accessible destinations. The country is world-famous for its mountain gorilla trekking experiences in Volcanoes National Park, where visitors can encounter these magnificent primates in their natural habitat.

Beyond gorillas, Rwanda offers remarkable conservation efforts, stunning landscapes, and remarkable cultural resilience. The country has established itself as a leader in sustainable tourism and community-based tourism initiatives. Nyungwe Forest, one of Africa\'s oldest rainforests, offers canopy walks and chimpanzee tracking experiences in an otherworldly setting.

Rwanda is uniquely positioned as an ideal African destination for travelers seeking authenticity, conservation focus, and cultural immersion. The country\'s excellent roads and infrastructure make it one of the easiest East African countries to navigate. From luxury eco-lodges to budget options, Rwanda accommodates all travel styles and budgets.

The warm and welcoming Rwandan people share their story of resilience and recovery. Tourism plays a vital role in the country\'s economy and conservation efforts, with proceeds supporting wildlife protection and community development initiatives.`,
    bestTimeToVisit: "December to February and June to September",
    highlights: [
      "Mountain gorilla trekking - Volcanoes NP",
      "Golden monkey tracking",
      "Nyungwe Forest - Canopy walks",
      "Akagera National Park - Big Five",
      "Lake Kivu - Beach relaxation",
      "Kigali - City culture and history",
      "Bisesero - Chimpanzee viewing",
      "Gishwati-Mukura NP - Pristine wilderness",
    ],
    image: "/mountain-gorillas-rwanda-volcanoes.jpg",
    gallery: [
      "/mountain-gorillas-rwanda-volcanoes.jpg",
      "/placeholder.svg?key=rwanda1",
      "/placeholder.svg?key=rwanda2",
    ],
    metaTitle: "Rwanda Gorilla Trekking & Tours | Land of Thousand Hills | Jae Travel",
    metaDescription: "Trek mountain gorillas in Rwanda's Volcanoes National Park. Explore the Land of a Thousand Hills with expert guides and luxury accommodations.",
    keywords: [
      "Rwanda gorilla trekking",
      "Mountain gorilla Rwanda",
      "Volcanoes National Park",
      "Rwanda safari tours",
      "Nyungwe Forest",
      "Rwanda adventure",
      "Lake Kivu Rwanda",
      "Rwanda cultural tours",
      "Akagera National Park",
      "Rwanda wildlife",
      "Rwanda luxury travel",
      "Rwanda eco-tourism",
      "Kigali Rwanda",
      "Rwanda travel guide",
      "best time Rwanda safari",
    ],
    attractions: [
      {
        name: "Mountain Gorillas - Volcanoes National Park",
        description: "Trek the critically endangered mountain gorillas in their natural habitat. One of Africa's most extraordinary experiences.",
      },
      {
        name: "Nyungwe Forest",
        description: "Ancient rainforest offering canopy walks, chimpanzee tracking, and incredible biodiversity.",
      },
      {
        name: "Golden Monkeys - Volcanoes Park",
        description: "Unique primate species found only in Rwanda's Volcanoes National Park.",
      },
      {
        name: "Akagera National Park",
        description: "Rwanda's only savanna park, offering Big Five game viewing and wilderness experiences.",
      },
      {
        name: "Lake Kivu",
        description: "Africa's largest lake (by surface area), perfect for relaxation and water activities.",
      },
    ],
    topRankedKeywords: [
      "gorilla trekking rwanda cost",
      "mountain gorilla permit price",
      "volcanoes national park rwanda",
      "rwanda gorilla best time visit",
      "most affordable gorilla trekking",
    ],
    icon: Mountain,
    featured: false,
    tourCount: 28,
    priceRange: { min: 1200 },
    wildlifeRating: 4,
  },
  {
    id: "uganda",
    slug: "uganda",
    name: "Uganda",
    country: "Uganda",
    description: "The Pearl of Africa - Primates and Adventure",
    longDescription: `Uganda, often called the Pearl of Africa by Winston Churchill, is one of the continent\'s most biodiverse and welcoming nations. The country is famous for mountain gorilla trekking in Bwindi Impenetrable Forest, offering visitors a chance to encounter these gentle giants in their natural habitat.

Beyond gorillas, Uganda\'s attractions include vast Queen Elizabeth National Park, where visitors can spot the legendary tree-climbing lions on the crater lakes. The adrenaline-pumping Murchison Falls, where the Nile River crashes dramatically through a narrow gorge, provides spectacular wildlife viewing and adventure opportunities.

Uganda is home to more primate species than any other African country. Visitors can track endangered mountain gorillas, chimpanzees, golden monkeys, and numerous other primate species in their natural forests. The country\'s exceptional birding, with over 1,000 bird species, makes it a paradise for ornithologists.

Adventure seekers find unlimited opportunities in Uganda, from white-water rafting on the Nile River in Jinja to mountaineering on the Rwenzori Mountains. The country\'s exceptional value, warm people, and growing tourism infrastructure make it an increasingly popular destination for travelers seeking authentic African experiences.`,
    bestTimeToVisit: "June to August and December to February",
    highlights: [
      "Mountain gorilla trekking - Bwindi Forest",
      "Murchison Falls - Spectacular waterfall",
      "Queen Elizabeth National Park - Tree-climbing lions",
      "Chimpanzee tracking - Kibale Forest",
      "Rwenzori Mountains - Mountain climbing",
      "Lake Mburo National Park - Wildlife",
      "White-water rafting - Jinja on the Nile",
      "Fort Portal - Crater lakes",
    ],
    image: "/bwindi-forest-uganda-gorillas.jpg",
    gallery: ["/bwindi-forest-uganda-gorillas.jpg", "/placeholder.svg?key=uganda1", "/placeholder.svg?key=uganda2"],
    metaTitle: "Uganda Safari & Gorilla Trekking | Bwindi Forest | Jae Travel Expeditions",
    metaDescription: "Trek mountain gorillas in Uganda's Bwindi Impenetrable Forest. Experience Murchison Falls, Kibale chimpanzees, and the Pearl of Africa with expert guides.",
    keywords: [
      "Uganda gorilla trekking",
      "Bwindi Impenetrable Forest",
      "Uganda safari tours",
      "Murchison Falls Uganda",
      "Queen Elizabeth National Park",
      "Chimpanzee tracking Uganda",
      "Kibale Forest",
      "Uganda wildlife tours",
      "Rwenzori Mountains",
      "Uganda adventure",
      "White water rafting Jinja",
      "Uganda cultural tours",
      "Lake Mburo safari",
      "Uganda safari packages",
      "best safari Uganda",
    ],
    attractions: [
      {
        name: "Mountain Gorillas - Bwindi Forest",
        description: "Trek the endangered mountain gorillas in Uganda's most biodiverse forest. One of Africa's ultimate wildlife experiences.",
      },
      {
        name: "Murchison Falls",
        description: "Where the Nile River crashes through a narrow gorge. Spectacular safari experience with incredible wildlife viewing.",
      },
      {
        name: "Queen Elizabeth National Park",
        description: "Home to the legendary tree-climbing lions, this park offers diverse ecosystems and abundant wildlife.",
      },
      {
        name: "Kibale Forest National Park",
        description: "One of Africa's richest forests for primate diversity. Home to chimpanzees and 13 other primate species.",
      },
      {
        name: "Rwenzori Mountains",
        description: "The Mountains of the Moon. Africa's third highest mountain range with challenging climbing routes.",
      },
    ],
    topRankedKeywords: [
      "uganda gorilla permit cost",
      "bwindi gorilla best time",
      "uganda gorilla vs rwanda cost",
      "murchison falls white water rafting",
      "tree climbing lions uganda queen elizabeth",
    ],
    icon: MountainSnow,
    featured: false,
    tourCount: 35,
    priceRange: { min: 300 },
    wildlifeRating: 4,
  },
]

export function getDestinationBySlug(slug: string): Destination | undefined {
  return destinations.find((d) => d.slug === slug)
}

export function getAllDestinations(): Destination[] {
  return destinations
}