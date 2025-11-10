// components/tour-card.tsx
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import type { Tour } from "@/lib/tours" // Fix import path
import { Star } from "lucide-react"
import Image from "next/image"

interface TourCardProps {
  tour: Tour
  variant?: "default" | "compact"
}

export function TourCard({ tour, variant = "default" }: TourCardProps) {
  const discountPercentage = tour.originalPrice
    ? Math.round(((tour.originalPrice - tour.price) / tour.originalPrice) * 100)
    : 0

  return (
    <Link href={`/tours/${tour.slug}`}>
      <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer overflow-hidden">
        <div className="relative aspect-video bg-slate-200 overflow-hidden">
          <Image
            src={tour.image || "/placeholder.svg"}
            alt={tour.title}
            className="w-full h-full object-cover hover:scale-105 transition-transform"
            width={500}
            height={500}
          />
          {tour.isOnOffer && discountPercentage > 0 && (
            <div className="absolute top-3 right-3 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold">
              -{discountPercentage}%
            </div>
          )}
          <Badge className="absolute top-3 left-3 bg-blue-600">{tour.country}</Badge>
        </div>

        <CardHeader>
          <CardTitle className="text-lg line-clamp-2">{tour.title}</CardTitle>
          {variant === "default" && (
            <CardDescription className="line-clamp-2">{tour.description}</CardDescription>
          )}
        </CardHeader>

        <CardContent>
          <div className="space-y-3">
            {/* Rating */}
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className={i < Math.floor(tour.rating) ? "fill-amber-400 text-amber-400" : "text-slate-300"}
                  />
                ))}
              </div>
              <span className="text-sm text-slate-600">
                {tour.rating} ({tour.reviewCount} reviews)
              </span>
            </div>

            {/* Duration and Difficulty - only show if they exist */}
            {(tour.duration || tour.difficulty) && (
              <div className="flex gap-2 text-sm">
                {tour.duration && <Badge variant="outline">{tour.duration}</Badge>}
                {tour.difficulty && <Badge variant="outline">{tour.difficulty}</Badge>}
              </div>
            )}

            {/* Price */}
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold text-amber-600">${tour.price.toLocaleString()}</span>
              {tour.originalPrice && (
                <span className="text-sm text-slate-500 line-through">${tour.originalPrice.toLocaleString()}</span>
              )}
            </div>

            {/* Category Badge */}
            {tour.category && (
              <div>
                <Badge className="bg-slate-200 text-slate-900">{tour.category}</Badge>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}