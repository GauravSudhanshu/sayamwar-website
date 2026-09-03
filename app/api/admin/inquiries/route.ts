import { NextResponse } from 'next/server'
import { getAdminSession } from '@/lib/auth'
import {
  getInquiries,
  getInquiry,
  markQualifiedLeadTracked,
  updateInquiryStatus,
  type InquiryStatus,
} from '@/lib/inquiries'

const GA4_MEASUREMENT_ID = process.env.GA4_MEASUREMENT_ID
const GA4_API_SECRET = process.env.GA4_API_SECRET

async function trackQualifiedLead(clientId: string, eventType: string, source: string): Promise<boolean> {
  if (!GA4_MEASUREMENT_ID || !GA4_API_SECRET) {
    console.warn('[qualified_lead] skipped: GA4_MEASUREMENT_ID or GA4_API_SECRET not configured')
    return false
  }

  try {
    const res = await fetch(
      `https://www.google-analytics.com/mp/collect?measurement_id=${GA4_MEASUREMENT_ID}&api_secret=${GA4_API_SECRET}`,
      {
        method: 'POST',
        body: JSON.stringify({
          client_id: clientId,
          events: [{
            name: 'qualified_lead',
            params: {
              event_category: 'lead',
              event_type: eventType || 'unspecified',
              source,
            },
          }],
        }),
      }
    )

    console.log('[qualified_lead] GA4 collect response status:', res.status)
    return res.ok
  } catch (err) {
    console.error('[qualified_lead] send failed:', err)
    return false
  }
}

export async function GET() {
  if (!(await getAdminSession())) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const inquiries = await getInquiries()
  return NextResponse.json(inquiries)
}

export async function PATCH(request: Request) {
  if (!(await getAdminSession())) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const { id, status } = await request.json() as { id: string; status: InquiryStatus }
  const inquiry = await getInquiry(id)

  if (!inquiry) return NextResponse.json({ error: 'Inquiry not found' }, { status: 404 })

  // Only send the qualified_lead event once, and only when the original
  // visitor's GA4 client ID was captured with the inquiry.
  if (status === 'qualified' && inquiry.clientId && !inquiry.qualifiedLeadTrackedAt) {
    const tracked = await trackQualifiedLead(inquiry.clientId, inquiry.event, inquiry.source)
    if (tracked) {
      await markQualifiedLeadTracked(id)
    }
  }

  await updateInquiryStatus(id, status)
  return NextResponse.json({ ok: true })
}
