import { NextResponse } from 'next/server'
import { getAdminSession } from '@/lib/auth'
import { getInquiries, updateInquiryStatus, type InquiryStatus } from '@/lib/inquiries'

export async function GET() {
  if (!(await getAdminSession())) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const inquiries = await getInquiries()
  return NextResponse.json(inquiries)
}

export async function PATCH(request: Request) {
  if (!(await getAdminSession())) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const { id, status } = await request.json() as { id: string; status: InquiryStatus }
  await updateInquiryStatus(id, status)
  return NextResponse.json({ ok: true })
}
