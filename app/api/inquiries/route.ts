import { NextResponse } from 'next/server'
import { saveInquiry, type InquirySource } from '@/lib/inquiries'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, phone, event, date, guests, message, source } = body

    await saveInquiry({
      name: String(name ?? ''),
      phone: String(phone ?? ''),
      event: String(event ?? ''),
      date: String(date ?? ''),
      guests: String(guests ?? ''),
      message: String(message ?? ''),
      source: (source as InquirySource) ?? 'lead-form',
    })

    return NextResponse.json({ ok: true })
  } catch {
    // Silent fail — WhatsApp + Formspree still work even if this fails
    return NextResponse.json({ ok: false })
  }
}
