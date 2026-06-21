import { kvGet, kvSet, kvLPush, kvLRange, kvLLen } from './kv'

export type InquiryStatus = 'new' | 'contacted' | 'booked' | 'declined'
export type InquirySource = 'lead-form' | 'exit-popup'

export interface Inquiry {
  id: string
  name: string
  phone: string
  event: string
  date: string
  guests: string
  message: string
  status: InquiryStatus
  source: InquirySource
  createdAt: string
}

const INQUIRIES_LIST = 'inquiries:list'
const INQUIRY_KEY = (id: string) => `inquiry:${id}`

export async function saveInquiry(
  data: Omit<Inquiry, 'id' | 'status' | 'createdAt'>
): Promise<Inquiry> {
  const id = `inq_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`
  const inquiry: Inquiry = {
    ...data,
    id,
    status: 'new',
    createdAt: new Date().toISOString(),
  }
  await kvSet(INQUIRY_KEY(id), inquiry)
  await kvLPush(INQUIRIES_LIST, id)
  return inquiry
}

export async function getInquiries(): Promise<Inquiry[]> {
  try {
    const ids = await kvLRange<string>(INQUIRIES_LIST, 0, -1)
    const items = await Promise.all(ids.map(id => kvGet<Inquiry>(INQUIRY_KEY(id))))
    return items.filter(Boolean) as Inquiry[]
  } catch {
    return []
  }
}

export async function updateInquiryStatus(id: string, status: InquiryStatus): Promise<void> {
  const inquiry = await kvGet<Inquiry>(INQUIRY_KEY(id))
  if (inquiry) {
    await kvSet(INQUIRY_KEY(id), { ...inquiry, status })
  }
}

export async function getInquiryCount(): Promise<number> {
  try {
    return kvLLen(INQUIRIES_LIST)
  } catch {
    return 0
  }
}

export async function getNewInquiryCount(): Promise<number> {
  const all = await getInquiries()
  return all.filter(i => i.status === 'new').length
}
