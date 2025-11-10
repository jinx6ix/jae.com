import nodemailer from "nodemailer"

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "84.16.249.171",
  port: Number.parseInt(process.env.SMTP_PORT || "465"),
  secure: true,
  auth: {
    user: process.env.SMTP_USER || "info@jaetravel.co.ke",
    pass: process.env.SMTP_PASS || "",
  },
})

export async function sendBookingConfirmation(
  customerEmail: string,
  tourName: string,
  bookingDetails: {
    bookingId: string
    price: number
    currency: string
    startDate: string
    endDate: string
    participants: number
  },
) {
  try {
    const htmlContent = `
      <h2>Booking Confirmation - Jae Travel Expeditions</h2>
      <p>Dear Valued Customer,</p>
      <p>Thank you for booking with Jae Travel Expeditions!</p>
      
      <h3>Booking Details:</h3>
      <ul>
        <li><strong>Booking ID:</strong> ${bookingDetails.bookingId}</li>
        <li><strong>Tour:</strong> ${tourName}</li>
        <li><strong>Price:</strong> ${bookingDetails.currency} ${bookingDetails.price}</li>
        <li><strong>Start Date:</strong> ${bookingDetails.startDate}</li>
        <li><strong>End Date:</strong> ${bookingDetails.endDate}</li>
        <li><strong>Number of Participants:</strong> ${bookingDetails.participants}</li>
      </ul>
      
      <p>We will contact you shortly with more details about your safari adventure.</p>
      <p>Best regards,<br/>Jae Travel Expeditions Team</p>
    `

    const adminEmail = process.env.ADMIN_EMAIL || "info@jaetravel.co.ke"

    await transporter.sendMail({
      from: adminEmail,
      to: customerEmail,
      cc: adminEmail,
      subject: `Booking Confirmation - ${tourName}`,
      html: htmlContent,
    })

    return { success: true }
  } catch (error) {
    console.error("Email sending failed:", error)
    return { success: false, error: error instanceof Error ? error.message : "Unknown error" }
  }
}

export async function sendBookingNotificationToAdmin(
  tourName: string,
  customerName: string,
  customerEmail: string,
  bookingDetails: any,
) {
  try {
    const htmlContent = `
      <h2>New Booking Received</h2>
      <p><strong>Tour:</strong> ${tourName}</p>
      <p><strong>Customer Name:</strong> ${customerName}</p>
      <p><strong>Customer Email:</strong> ${customerEmail}</p>
      <p><strong>Booking Details:</strong></p>
      <pre>${JSON.stringify(bookingDetails, null, 2)}</pre>
    `

    const adminEmail = process.env.ADMIN_EMAIL || "info@jaetravel.co.ke"

    await transporter.sendMail({
      from: adminEmail,
      to: adminEmail,
      subject: `New Booking: ${tourName}`,
      html: htmlContent,
    })

    return { success: true }
  } catch (error) {
    console.error("Admin notification failed:", error)
    return { success: false }
  }
}
