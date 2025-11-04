import { NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

// Environment variables
const LEAD_MODE = process.env.LEAD_MODE || "make" // 'make' or 'resend'
const MAKE_WEBHOOK_URL = process.env.MAKE_WEBHOOK_URL || ""
const RESEND_API_KEY = process.env.RESEND_API_KEY || ""
const RESEND_FROM = process.env.RESEND_FROM || "TemetkezésPro <hello@temetkezespro.hu>"
const RESEND_TO = process.env.RESEND_TO || "info@temetkezespro.hu"
const ALLOWED_ORIGINS = process.env.ALLOWED_ORIGINS
  ? process.env.ALLOWED_ORIGINS.split(",")
  : []

// Initialize Resend if needed
const resend = LEAD_MODE === "resend" && RESEND_API_KEY ? new Resend(RESEND_API_KEY) : null

interface LeadData {
  name: string
  email: string
  phone: string
  company?: string
  city?: string
  message?: string
  consent: boolean
}

// Validation helpers
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

function isValidPhone(phone: string): boolean {
  const phoneRegex = /^[\d\s\-\+\(\)]+$/
  return phoneRegex.test(phone) && phone.replace(/\D/g, "").length >= 9
}

// Send via Make.com webhook
async function sendToMake(data: LeadData): Promise<{ success: boolean; error?: string }> {
  if (!MAKE_WEBHOOK_URL) {
    return { success: false, error: "Make webhook URL not configured" }
  }

  try {
    const response = await fetch(MAKE_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...data,
        timestamp: new Date().toISOString(),
        source: "temetkezespro-landing",
      }),
    })

    if (!response.ok) {
      return { success: false, error: "Failed to send to Make.com" }
    }

    return { success: true }
  } catch (error) {
    console.error("Make.com webhook error:", error)
    return { success: false, error: "Network error sending to Make.com" }
  }
}

// Send via Resend email
async function sendViaResend(data: LeadData): Promise<{ success: boolean; error?: string }> {
  if (!resend) {
    return { success: false, error: "Resend not configured" }
  }

  try {
    const emailHtml = `
      <h2>Új érdeklődés - TemetkezésPro</h2>
      <p><strong>Név:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Telefon:</strong> ${data.phone}</p>
      ${data.company ? `<p><strong>Cég:</strong> ${data.company}</p>` : ""}
      ${data.city ? `<p><strong>Település:</strong> ${data.city}</p>` : ""}
      ${data.message ? `<p><strong>Üzenet:</strong><br>${data.message.replace(/\n/g, "<br>")}</p>` : ""}
      <p><strong>GDPR hozzájárulás:</strong> ${data.consent ? "Igen" : "Nem"}</p>
      <p><strong>Időpont:</strong> ${new Date().toLocaleString("hu-HU")}</p>
    `

    await resend.emails.send({
      from: RESEND_FROM,
      to: RESEND_TO,
      subject: `Új érdeklődés: ${data.name} - ${data.company || "Nincs megadva"}`,
      html: emailHtml,
    })

    return { success: true }
  } catch (error) {
    console.error("Resend email error:", error)
    return { success: false, error: "Failed to send email via Resend" }
  }
}

export async function POST(request: NextRequest) {
  try {
    // Check if webhook is configured
    if (LEAD_MODE === "make" && !MAKE_WEBHOOK_URL) {
      console.error("MAKE_WEBHOOK_URL is not configured")
      return NextResponse.json(
        { error: "A webhook nincs beállítva. Kérjük, vegye fel a kapcsolatot az adminisztrátorral." },
        { status: 500 }
      )
    }

    if (LEAD_MODE === "resend" && !RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not configured")
      return NextResponse.json(
        { error: "Az email szolgáltatás nincs beállítva. Kérjük, vegye fel a kapcsolatot az adminisztrátorral." },
        { status: 500 }
      )
    }

    // CSRF check
    const origin = request.headers.get("origin")
    if (ALLOWED_ORIGINS.length > 0) {
      const isAllowedOrigin =
        origin && ALLOWED_ORIGINS.some((allowed) => origin.includes(allowed))
      if (!isAllowedOrigin) {
        return NextResponse.json({ error: "Origin not allowed" }, { status: 403 })
      }
    }

    // Parse body
    const body = await request.json()
    const { name, email, phone, company, city, message, consent } = body

    // Validate required fields
    if (!name || !email || !phone || !consent) {
      return NextResponse.json(
        { error: "Kötelező mezők hiányoznak" },
        { status: 400 }
      )
    }

    // Validate email format
    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: "Érvénytelen email cím" },
        { status: 400 }
      )
    }

    // Validate phone format
    if (!isValidPhone(phone)) {
      return NextResponse.json(
        { error: "Érvénytelen telefonszám" },
        { status: 400 }
      )
    }

    const leadData: LeadData = {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone.trim(),
      company: company?.trim(),
      city: city?.trim(),
      message: message?.trim(),
      consent: Boolean(consent),
    }

    // Send lead data
    let result
    if (LEAD_MODE === "resend") {
      result = await sendViaResend(leadData)
    } else {
      result = await sendToMake(leadData)
    }

    if (!result.success) {
      return NextResponse.json(
        { error: result.error || "Hiba történt" },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Lead API error:", error)
    const errorMessage = error instanceof Error ? error.message : "Ismeretlen hiba"
    console.error("Error details:", errorMessage)
    return NextResponse.json(
      {
        error: "Hiba történt a küldés során",
        details: process.env.NODE_ENV === "development" ? errorMessage : undefined
      },
      { status: 500 }
    )
  }
}
