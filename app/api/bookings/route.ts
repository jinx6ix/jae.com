import { sendBookingConfirmation, sendBookingNotificationToAdmin } from "@/lib/email-service"
import { type NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { firstName, lastName, email, phone, startDate, participants, tourId, tourName, tourPrice, totalPrice } = body

    // Generate booking ID
    const bookingId = `JAE-${Date.now()}-${Math.random().toString(36).substr(2, 9).toUpperCase()}`

    // Send confirmation email to customer
    const customerEmailResult = await sendBookingConfirmation(email, tourName, {
      bookingId,
      price: totalPrice,
      currency: "USD",
      startDate,
      endDate: new Date(new Date(startDate).getTime() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString(),
      participants,
    })

    // Send notification to admin
    const adminEmailResult = await sendBookingNotificationToAdmin(tourName, `${firstName} ${lastName}`, email, {
      bookingId,
      tourId,
      tourName,
      tourPrice,
      totalPrice,
      participants,
      startDate,
      customerName: `${firstName} ${lastName}`,
      customerEmail: email,
      customerPhone: phone,
    })

    if (!customerEmailResult.success || !adminEmailResult.success) {
      console.error("Email sending failed")
    }

    return NextResponse.json({
      success: true,
      bookingId,
      message: "Booking confirmed! Check your email for details.",
    })
  } catch (error) {
    console.error("Booking error:", error)
    return NextResponse.json({ error: "Failed to process booking" }, { status: 500 })
  }
}
