import { NextResponse } from 'next/server'
import { saveInquiry, type InquirySource } from '@/lib/inquiries'

const GA4_MEASUREMENT_ID = process.env.GA4_MEASUREMENT_ID
const GA4_API_SECRET = process.env.GA4_API_SECRET

// GA4's _ga cookie looks like "GA1.1.<client_id>" — client_id is the last two dot-separated segments.
function getGaClientId(cookieHeader: string | null): string {
  const match = cookieHeader?.match(/_ga=GA\d\.\d\.(\d+\.\d+)/)
  return match?.[1] ?? `${Date.now()}.${Math.floor(Math.random() * 1e10)}`
}

// Fires the lead conversion server-side via the GA4 Measurement Protocol so it
// can't be dropped by client-side ad blockers (which commonly target gtag calls
// named after well-known conversion events like "generate_lead").
async function trackServerLead(clientId: string, eventType: string, source: string) {
  if (!GA4_MEASUREMENT_ID || !GA4_API_SECRET) {
    console.warn('[generate_lead] skipped: GA4_MEASUREMENT_ID or GA4_API_SECRET not set in this environment')
    return
  }
  try {
    console.log('[generate_lead] sending', { clientId, eventType, source })
    const res = await fetch(
      `https://www.google-analytics.com/mp/collect?measurement_id=${GA4_MEASUREMENT_ID}&api_secret=${GA4_API_SECRET}`,
      {
        method: 'POST',
        body: JSON.stringify({
          client_id: clientId,
          events: [{
            name: 'generate_lead',
            params: { event_category: 'lead', event_type: eventType || 'unspecified', source },
          }],
        }),
      }
    )
    console.log('[generate_lead] GA4 collect response status:', res.status)
  } catch (err) {
    console.error('[generate_lead] send failed:', err)
    // Non-critical — the inquiry itself is already saved regardless
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, phone, event, date, guests, food, budget, message, source } = body

    await saveInquiry({
      name: String(name ?? ''),
      phone: String(phone ?? ''),
      event: String(event ?? ''),
      date: String(date ?? ''),
      guests: String(guests ?? ''),
      food: String(food ?? ''),
      budget: String(budget ?? ''),
      message: String(message ?? ''),
      source: (source as InquirySource) ?? 'lead-form',
    })

    await trackServerLead(getGaClientId(request.headers.get('cookie')), String(event ?? ''), String(source ?? 'lead-form'))

    return NextResponse.json({ ok: true })
  } catch {
    // Silent fail — WhatsApp + Formspree still work even if this fails
    return NextResponse.json({ ok: false })
  }
}
