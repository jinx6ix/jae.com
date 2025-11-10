"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import type { Tour } from "@/lib/all-tours"
import { AlertCircle, CheckCircle } from "lucide-react"

interface BookingFormProps {
  tour: Tour
}

export default function BookingForm({ tour }: BookingFormProps) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    startDate: "",
    participants: 1,
  })
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null)

  const totalPrice = tour.price * formData.participants

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setMessage(null)

    try {
      const response = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          tourId: tour.id,
          tourName: tour.title,
          tourPrice: tour.price,
          totalPrice,
        }),
      })

      const data = await response.json()

      if (response.ok) {
        setMessage({
          type: "success",
          text: "Booking confirmed! Check your email for details.",
        })
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          startDate: "",
          participants: 1,
        })
      } else {
        setMessage({
          type: "error",
          text: data.error || "Booking failed. Please try again.",
        })
      }
    } catch (error) {
      setMessage({
        type: "error",
        text: "An error occurred. Please try again later.",
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <Card className="border-2 border-amber-600">
      <CardHeader className="bg-amber-600 text-white">
        <CardTitle>Book This Tour</CardTitle>
        <CardDescription className="text-amber-100">Reserve your spot on this amazing adventure</CardDescription>
      </CardHeader>

      <CardContent className="pt-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Price Display */}
          <div className="bg-slate-100 p-4 rounded-lg mb-6">
            <div className="flex justify-between mb-2">
              <span className="text-slate-700">Price per person</span>
              <span className="font-bold">${tour.price.toLocaleString()}</span>
            </div>
            <div className="flex justify-between border-t pt-2">
              <span className="font-bold">Total</span>
              <span className="text-2xl font-bold text-amber-600">${totalPrice.toLocaleString()}</span>
            </div>
          </div>

          {/* Form Fields */}
          <div>
            <label className="text-sm font-semibold block mb-2">First Name</label>
            <Input
              type="text"
              required
              value={formData.firstName}
              onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
              placeholder="John"
            />
          </div>

          <div>
            <label className="text-sm font-semibold block mb-2">Last Name</label>
            <Input
              type="text"
              required
              value={formData.lastName}
              onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
              placeholder="Doe"
            />
          </div>

          <div>
            <label className="text-sm font-semibold block mb-2">Email</label>
            <Input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="john@example.com"
            />
          </div>

          <div>
            <label className="text-sm font-semibold block mb-2">Phone</label>
            <Input
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="+254 700 000000"
            />
          </div>

          <div>
            <label className="text-sm font-semibold block mb-2">Start Date</label>
            <Input
              type="date"
              required
              value={formData.startDate}
              onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
            />
          </div>

          <div>
            <label className="text-sm font-semibold block mb-2">Number of Participants</label>
            <Input
              type="number"
              min="1"
              max="20"
              required
              value={formData.participants}
              onChange={(e) => setFormData({ ...formData, participants: Number.parseInt(e.target.value) })}
            />
          </div>

          {/* Message Display */}
          {message && (
            <div
              className={`p-3 rounded-lg flex gap-2 ${
                message.type === "success" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
              }`}
            >
              {message.type === "success" ? <CheckCircle size={20} /> : <AlertCircle size={20} />}
              <span className="text-sm">{message.text}</span>
            </div>
          )}

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={loading}
            className="w-full bg-amber-600 hover:bg-amber-700 py-6 text-lg font-bold"
          >
            {loading ? "Processing..." : "Complete Booking"}
          </Button>

          <p className="text-xs text-slate-600 text-center">
            Your booking is secure. You'll receive confirmation via email within 2 hours.
          </p>
        </form>
      </CardContent>
    </Card>
  )
}
