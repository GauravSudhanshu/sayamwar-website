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

    // Send to Formspree (email backup)
    try {
      await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
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
        }),
      })
    } catch (_) {
      // Silent fail — WhatsApp still works
    }

    // Open WhatsApp
    const msg = `Hello! I want to inquire about Sayamwar Hall & Homestay.%0AName: ${form.name}%0APhone: ${form.phone}%0AEvent: ${form.event}%0ADate: ${form.date}%0AGuests: ${form.guests}%0AMessage: ${form.message}`
    window.open(`https://wa.me/917646028228?text=${msg}`, '_blank')

    setLoading(false)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="text-center py-8">
        <div className="text-5xl mb-3">✅</div>
        <h3 className="text-xl font-bold text-[#7B1818] mb-2">Inquiry Sent!</h3>
        <p className="text-gray-600 text-sm">Your inquiry has been sent via WhatsApp. We&apos;ll also follow up on your phone number shortly.</p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-4 text-sm text-[#7B1818] underline"
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
          className="border border-gray-300 rounded px-4 py-2.5 text-sm focus:outline-none focus:border-[#7B1818] w-full"
        />
        <input
          required
          type="tel"
          placeholder="Phone Number *"
          pattern="[0-9]{10}"
          title="Enter 10-digit phone number"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          className="border border-gray-300 rounded px-4 py-2.5 text-sm focus:outline-none focus:border-[#7B1818] w-full"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <select
          value={form.event}
          onChange={(e) => setForm({ ...form, event: e.target.value })}
          className="border border-gray-300 rounded px-4 py-2.5 text-sm focus:outline-none focus:border-[#7B1818] w-full text-gray-600"
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
          className="border border-gray-300 rounded px-4 py-2.5 text-sm focus:outline-none focus:border-[#7B1818] w-full"
        />
      </div>
      <input
        type="number"
        placeholder="Number of Guests"
        value={form.guests}
        onChange={(e) => setForm({ ...form, guests: e.target.value })}
        className="border border-gray-300 rounded px-4 py-2.5 text-sm focus:outline-none focus:border-[#7B1818] w-full"
      />
      <textarea
        rows={3}
        placeholder="Additional requirements or message..."
        value={form.message}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
        className="border border-gray-300 rounded px-4 py-2.5 text-sm focus:outline-none focus:border-[#7B1818] w-full resize-none"
      />
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-[#7B1818] hover:bg-[#5A0F0F] disabled:opacity-60 text-white py-3 rounded font-bold text-sm transition-colors"
      >
        {loading ? 'Sending...' : 'Send Inquiry via WhatsApp 💬'}
      </button>
      <p className="text-center text-xs text-gray-500">
        Or call us directly:{' '}
        <a href="tel:7646028228" className="text-[#7B1818] font-bold">7646028228</a>
      </p>
    </form>
  )
}
