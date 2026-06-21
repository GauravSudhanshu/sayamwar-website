'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import type { Inquiry, InquiryStatus } from '@/lib/inquiries'

const STATUS_LABELS: Record<InquiryStatus, string> = {
  new: 'New',
  contacted: 'Contacted',
  booked: 'Booked',
  declined: 'Declined',
}

const STATUS_COLORS: Record<InquiryStatus, string> = {
  new: 'bg-red-100 text-red-700',
  contacted: 'bg-yellow-100 text-yellow-700',
  booked: 'bg-green-100 text-green-700',
  declined: 'bg-gray-100 text-gray-500',
}

const FILTERS: { label: string; value: InquiryStatus | 'all' }[] = [
  { label: 'All', value: 'all' },
  { label: 'New', value: 'new' },
  { label: 'Contacted', value: 'contacted' },
  { label: 'Booked', value: 'booked' },
  { label: 'Declined', value: 'declined' },
]

export default function InquiryTable({ inquiries: initial }: { inquiries: Inquiry[] }) {
  const [inquiries, setInquiries] = useState(initial)
  const [filter, setFilter] = useState<InquiryStatus | 'all'>('all')
  const [expanded, setExpanded] = useState<string | null>(null)
  const [updating, setUpdating] = useState<string | null>(null)
  const router = useRouter()

  const filtered = filter === 'all' ? inquiries : inquiries.filter(i => i.status === filter)
  const counts: Record<string, number> = { all: inquiries.length }
  inquiries.forEach(i => { counts[i.status] = (counts[i.status] ?? 0) + 1 })

  async function updateStatus(id: string, status: InquiryStatus) {
    setUpdating(id)
    await fetch('/api/admin/inquiries', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, status }),
    })
    setInquiries(prev => prev.map(i => i.id === id ? { ...i, status } : i))
    setUpdating(null)
    router.refresh()
  }

  return (
    <div className="space-y-4">
      {/* Filter tabs */}
      <div className="flex gap-2 flex-wrap">
        {FILTERS.map(f => (
          <button
            key={f.value}
            onClick={() => setFilter(f.value)}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
              filter === f.value
                ? 'bg-[#7B1818] text-white'
                : 'bg-white border border-gray-200 text-gray-600 hover:border-[#7B1818]'
            }`}
          >
            {f.label} {counts[f.value] ? `(${counts[f.value]})` : ''}
          </button>
        ))}
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
        {/* Desktop table */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100">
                <th className="px-5 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wide">Contact</th>
                <th className="px-5 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wide">Event</th>
                <th className="px-5 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wide">Date / Guests</th>
                <th className="px-5 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wide">Source</th>
                <th className="px-5 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wide">Received</th>
                <th className="px-5 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wide">Status</th>
                <th className="px-5 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wide">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {filtered.map(inq => (
                <>
                  <tr key={inq.id} className="hover:bg-gray-50/50 transition-colors">
                    <td className="px-5 py-4">
                      <p className="font-semibold text-gray-800">{inq.name || '—'}</p>
                      <a href={`tel:${inq.phone}`} className="text-[#7B1818] hover:underline text-xs">{inq.phone}</a>
                    </td>
                    <td className="px-5 py-4 text-gray-600">{inq.event || '—'}</td>
                    <td className="px-5 py-4">
                      <p className="text-gray-600 text-xs">{inq.date || '—'}</p>
                      <p className="text-gray-400 text-xs">{inq.guests ? `${inq.guests} guests` : '—'}</p>
                    </td>
                    <td className="px-5 py-4">
                      <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">
                        {inq.source === 'exit-popup' ? 'Popup' : 'Form'}
                      </span>
                    </td>
                    <td className="px-5 py-4 text-gray-400 text-xs">
                      {new Date(inq.createdAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })}
                      <br />
                      {new Date(inq.createdAt).toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' })}
                    </td>
                    <td className="px-5 py-4">
                      <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${STATUS_COLORS[inq.status]}`}>
                        {STATUS_LABELS[inq.status]}
                      </span>
                    </td>
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-2">
                        <a
                          href={`https://wa.me/91${inq.phone}?text=Hello%20${encodeURIComponent(inq.name)}!%20This%20is%20Sayamwar%20Hall.%20We%20received%20your%20inquiry%20for%20${encodeURIComponent(inq.event || 'your event')}.`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs bg-green-500 hover:bg-green-600 text-white px-2 py-1 rounded-lg transition-colors"
                        >
                          WhatsApp
                        </a>
                        <button
                          onClick={() => setExpanded(expanded === inq.id ? null : inq.id)}
                          className="text-xs text-gray-500 hover:text-gray-700 transition-colors"
                        >
                          {expanded === inq.id ? 'Less ▲' : 'More ▼'}
                        </button>
                      </div>
                    </td>
                  </tr>

                  {/* Expanded row */}
                  {expanded === inq.id && (
                    <tr key={`${inq.id}-exp`} className="bg-gray-50">
                      <td colSpan={7} className="px-5 py-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {inq.message && (
                            <div>
                              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Message</p>
                              <p className="text-sm text-gray-700">{inq.message}</p>
                            </div>
                          )}
                          <div>
                            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Update Status</p>
                            <div className="flex flex-wrap gap-2">
                              {(Object.keys(STATUS_LABELS) as InquiryStatus[]).map(s => (
                                <button
                                  key={s}
                                  disabled={inq.status === s || updating === inq.id}
                                  onClick={() => updateStatus(inq.id, s)}
                                  className={`text-xs px-3 py-1.5 rounded-lg font-semibold transition-colors disabled:opacity-50 ${
                                    inq.status === s
                                      ? 'ring-2 ring-offset-1 ring-[#7B1818] ' + STATUS_COLORS[s]
                                      : 'bg-white border border-gray-200 text-gray-600 hover:border-[#7B1818]'
                                  }`}
                                >
                                  {STATUS_LABELS[s]}
                                </button>
                              ))}
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  )}
                </>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile cards */}
        <div className="md:hidden divide-y divide-gray-100">
          {filtered.map(inq => (
            <div key={inq.id} className="p-4 space-y-3">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="font-semibold text-gray-800">{inq.name || '—'}</p>
                  <a href={`tel:${inq.phone}`} className="text-[#7B1818] text-sm">{inq.phone}</a>
                </div>
                <span className={`text-xs font-semibold px-2 py-0.5 rounded-full flex-shrink-0 ${STATUS_COLORS[inq.status]}`}>
                  {STATUS_LABELS[inq.status]}
                </span>
              </div>
              <div className="text-sm text-gray-600 grid grid-cols-2 gap-x-4 gap-y-1">
                <span className="text-gray-400 text-xs">Event</span>
                <span>{inq.event || '—'}</span>
                <span className="text-gray-400 text-xs">Date</span>
                <span>{inq.date || '—'}</span>
                <span className="text-gray-400 text-xs">Guests</span>
                <span>{inq.guests || '—'}</span>
                <span className="text-gray-400 text-xs">Received</span>
                <span>{new Date(inq.createdAt).toLocaleDateString('en-IN')}</span>
              </div>
              {inq.message && <p className="text-sm text-gray-600 italic">"{inq.message}"</p>}
              <div className="flex gap-2 flex-wrap">
                <a
                  href={`https://wa.me/91${inq.phone}`}
                  target="_blank" rel="noopener noreferrer"
                  className="text-xs bg-green-500 text-white px-3 py-1.5 rounded-lg font-semibold"
                >
                  WhatsApp
                </a>
                {(Object.keys(STATUS_LABELS) as InquiryStatus[]).filter(s => s !== inq.status).map(s => (
                  <button
                    key={s}
                    disabled={updating === inq.id}
                    onClick={() => updateStatus(inq.id, s)}
                    className="text-xs bg-white border border-gray-200 text-gray-600 px-3 py-1.5 rounded-lg disabled:opacity-50"
                  >
                    Mark {STATUS_LABELS[s]}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="px-5 py-12 text-center text-gray-400 text-sm">No inquiries for this filter.</div>
        )}
      </div>
    </div>
  )
}
