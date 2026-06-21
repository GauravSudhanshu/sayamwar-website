'use client'
import { useState } from 'react'

interface LeadFormProps {
  eventType?: string
}

const FORMSPREE_ID = 'xbdeqoln'

export default function LeadForm({ eventType = '' }: LeadFormProps) {
  const [form, setForm] = useState({ name: '', phone: '', event: eventType, date: '', guests: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Save to admin dashboard + Formspree (both fire-and-forget)
    await Promise.allSettled([
      fetch('/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, source: 'lead-form' }),
      }),
      fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          event: form.event,
          date: form.date,
          guests: form.guests,
          message: form.message,
          _subject: `New Inquiry: ${form.event || 'General'} — ${form.name}`,
          _replyto: 'sayamwarbanquetrooms@gmail.com',
        }),
      }),
    ])

    // Open WhatsApp
    const msg = encodeURIComponent(
      `Hello! I want to inquire about Sayamwar Hall & Homestay.\nName: ${form.name}\nPhone: ${form.phone}\nEvent: ${form.event}\nDate: ${form.date}\nGuests: ${form.guests}\nMessage: ${form.message}`
    )
    window.open(`https://wa.me/917646028228?text=${msg}`, '_blank')

    setLoading(false)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="text-center py-10">
        <div className="w-16 h-16 rounded-full bg-[#C9A84C]/15 flex items-center justify-center mx-auto mb-5 border border-[#C9A84C]/30">
          <span className="text-[#C9A84C] text-2xl">✦</span>
        </div>
        <h3 className="font-[var(--font-playfair)] text-2xl font-bold text-[#3D0A0A] mb-2">Inquiry Received</h3>
        <div className="w-10 h-px bg-[#C9A84C] mx-auto mb-4" />
        <p className="text-[#3D0A0A]/55 text-sm leading-relaxed">Your inquiry has been sent via WhatsApp. We&apos;ll respond within minutes.</p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-6 text-xs text-[#C9A84C] tracking-widest uppercase hover:text-[#8B6914] transition-colors"
        >
          Submit another inquiry
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          required
          type="text"
          placeholder="Your Name *"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="luxury-input"
        />
        <input
          required
          type="tel"
          placeholder="Phone Number *"
          pattern="[0-9]{10}"
          title="Enter 10-digit phone number"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          className="luxury-input"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <select
          value={form.event}
          onChange={(e) => setForm({ ...form, event: e.target.value })}
          className="luxury-input"
        >
          <option value="">Select Event Type</option>
          <option value="Wedding">Wedding</option>
          <option value="Birthday Party">Birthday Party</option>
          <option value="Engagement">Engagement</option>
          <option value="Corporate Event">Corporate Event</option>
          <option value="Room Booking">Room Booking</option>
          <option value="Other">Other</option>
        </select>
        <input
          type="date"
          value={form.date}
          onChange={(e) => setForm({ ...form, date: e.target.value })}
          className="luxury-input"
        />
      </div>
      <input
        type="number"
        placeholder="Number of Guests"
        value={form.guests}
        onChange={(e) => setForm({ ...form, guests: e.target.value })}
        className="luxury-input"
      />
      <textarea
        rows={3}
        placeholder="Additional requirements or message..."
        value={form.message}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
        className="luxury-input resize-none"
      />
      <button
        type="submit"
        disabled={loading}
        className="btn-gold w-full justify-center text-sm disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
      >
        {loading ? 'Sending…' : '💬 Send Inquiry via WhatsApp'}
      </button>
      <p className="text-center text-xs text-[#3D0A0A]/40 tracking-wide">
        Or call:{' '}
        <a href="tel:7646028228" className="text-[#C9A84C] font-semibold hover:text-[#8B6914] transition-colors">7646028228</a>
      </p>
    </form>
  )
}
