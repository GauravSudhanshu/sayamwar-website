'use client'
import { useState } from 'react'
import { trackAdsConversion } from './ConversionTracker'

interface LeadFormProps {
  eventType?: string
}

const FORMSPREE_ID = 'xbdeqoln'
const ADS_CONVERSION_SEND_TO = 'AW-18212601463/fDLjCNncpt4cEPf8uOxD' // "Submit lead form (2)"

export default function LeadForm({ eventType = '' }: LeadFormProps) {
  const [form, setForm] = useState({
    name: '', phone: '', event: eventType, date: '',
    guests: '', food: '', budget: '', message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    const [inquiryResult] = await Promise.allSettled([
      fetch('/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, source: 'lead-form' }),
      }),
      fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: form.name, phone: form.phone, event: form.event,
          date: form.date, guests: form.guests,
          food_preference: form.food, budget: form.budget,
          message: form.message,
          _subject: `New Inquiry: ${form.event || 'General'} — ${form.name}`,
          _replyto: 'care@sayamwar.com',
        }),
      }),
    ])

    let inquirySucceeded = false
    if (inquiryResult.status === 'fulfilled' && inquiryResult.value.ok) {
      try {
        const data = await inquiryResult.value.json()
        inquirySucceeded = data.ok === true
      } catch {
        inquirySucceeded = false
      }
    }

    if (inquirySucceeded) {
      trackAdsConversion(ADS_CONVERSION_SEND_TO)
    }

    const msg = encodeURIComponent(
      `Hello! I want to enquire about Sayamwar Hall & Homestay.\n` +
      `Name: ${form.name}\n` +
      `Phone: ${form.phone}\n` +
      `Event: ${form.event}\n` +
      `Date: ${form.date}\n` +
      `Guests: ${form.guests}\n` +
      `Food Preference: ${form.food || 'Not specified'}\n` +
      `Budget: ${form.budget || 'Not specified'}\n` +
      `Message: ${form.message}`
    )
    window.open(`https://wa.me/917646028228?text=${msg}`, '_blank')

    setLoading(false)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="text-center py-10">
        <div className="w-16 h-16 rounded-full bg-[var(--gold)]/15 flex items-center justify-center mx-auto mb-5 border border-[var(--gold)]/30">
          <span className="text-[var(--gold)] text-2xl">✦</span>
        </div>
        <h3 className="font-[var(--font-playfair)] text-2xl font-bold text-[var(--black)] mb-2">Inquiry Received!</h3>
        <div className="w-10 h-px bg-[var(--gold)] mx-auto mb-4" />
        <p className="text-[var(--black)]/55 text-sm leading-relaxed">Your inquiry has been sent via WhatsApp. We&apos;ll respond within minutes.</p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-6 text-xs text-[var(--gold)] tracking-widest uppercase hover:text-[var(--gold-dark)] transition-colors"
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
          required type="text" placeholder="Your Name *"
          value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="luxury-input"
        />
        <input
          required type="tel" placeholder="Mobile Number *"
          pattern="[0-9]{10}" title="Enter 10-digit mobile number"
          value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
          className="luxury-input"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <select value={form.event} onChange={(e) => setForm({ ...form, event: e.target.value })} className="luxury-input">
          <option value="">Event Type</option>
          <option value="Wedding">Wedding</option>
          <option value="Reception">Reception</option>
          <option value="Engagement">Engagement</option>
          <option value="Birthday Party">Birthday Party</option>
          <option value="Corporate Event">Corporate Event</option>
          <option value="Room Booking">Room Booking</option>
          <option value="Other">Other</option>
        </select>
        <input
          type="date" value={form.date}
          onChange={(e) => setForm({ ...form, date: e.target.value })}
          className="luxury-input"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          type="number" placeholder="Number of Guests"
          value={form.guests} onChange={(e) => setForm({ ...form, guests: e.target.value })}
          className="luxury-input"
        />
        <select value={form.food} onChange={(e) => setForm({ ...form, food: e.target.value })} className="luxury-input">
          <option value="">Food Preference</option>
          <option value="Veg">Veg</option>
          <option value="Non-Veg">Non-Veg</option>
          <option value="Both Veg & Non-Veg">Both Veg &amp; Non-Veg</option>
        </select>
      </div>

      <select value={form.budget} onChange={(e) => setForm({ ...form, budget: e.target.value })} className="luxury-input">
        <option value="">Budget Range (Optional)</option>
        <option value="₹85,000 – ₹1,50,000">₹85,000 – ₹1,50,000</option>
        <option value="₹1,50,000 – ₹2,50,000">₹1,50,000 – ₹2,50,000</option>
        <option value="₹2,50,000 – ₹4,00,000">₹2,50,000 – ₹4,00,000</option>
        <option value="₹4,00,000+">₹4,00,000+</option>
      </select>

      <textarea
        rows={3} placeholder="Additional requirements or message..."
        value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
        className="luxury-input resize-none"
      />

      <button
        type="submit" disabled={loading}
        className="btn-gold w-full justify-center text-sm disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
      >
        {loading ? 'Sending…' : '💬 Send Inquiry via WhatsApp'}
      </button>

      <div className="flex items-center justify-center gap-4 pt-1">
        <a href="tel:7646028228" className="flex items-center gap-1.5 text-xs text-[var(--black)]/50 hover:text-[var(--gold)] transition-colors">
          📞 <span className="font-semibold">7646028228</span>
        </a>
        <span className="text-[var(--black)]/20">|</span>
        <a href="tel:7070486987" className="flex items-center gap-1.5 text-xs text-[var(--black)]/50 hover:text-[var(--gold)] transition-colors">
          📞 <span className="font-semibold">7070486987</span>
        </a>
      </div>
    </form>
  )
}
