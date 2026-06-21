import { getInquiries } from '@/lib/inquiries'
import InquiryTable from './_components/InquiryTable'

export const dynamic = 'force-dynamic'

export default async function InquiriesPage() {
  const inquiries = await getInquiries()

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-gray-900">Inquiries</h2>
          <p className="text-gray-500 text-sm mt-1">{inquiries.length} total submissions</p>
        </div>
      </div>

      {inquiries.length === 0 ? (
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm px-8 py-16 text-center">
          <p className="text-4xl mb-4">📋</p>
          <p className="font-semibold text-gray-700">No inquiries yet</p>
          <p className="text-gray-400 text-sm mt-1">Form submissions from your website will appear here.</p>
        </div>
      ) : (
        <InquiryTable inquiries={inquiries} />
      )}
    </div>
  )
}
