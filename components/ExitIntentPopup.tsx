'use client'
import { useState, useEffect } from 'react'

export default function ExitIntentPopup() {
  const [show, setShow] = useState(false)
  const [dismissed, setDismissed] = useState(false)
  const [eventDate, setEventDate] = useState('')
  const [guests, setGuests] = useState('')

  useEffect(() => {
    if (sessionStorage.getItem('exit_popup_seen')) return

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 10 && !dismissed) {
        setShow(true)
        sessionStorage.setItem('exit_popup_seen', '1')
      }
    }

    const timer = setTimeout(() => {
      if (!dismissed && !sessionStorage.getItem('exit_popup_seen')) {
        setShow(true)
        sessionStorage.setItem('exit_popup_seen', '1')
      }
    }, 40000)

    document.addEventListener('mouseleave', handleMouseLeave)
    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave)
      clearTimeout(timer)
    }
  }, [dismissed])

  const close = () => {
    setShow(false)
    setDismissed(true)
  }

  const handleWhatsApp = () => {
    const dateText = eventDate ? `Event Date: ${eventDate}` : 'Event Date: Not decided yet'
    const guestText = guests ? `Number of Guests: ${guests}` : 'Number of Guests: Not sure yet'
    const msg = encodeURIComponent(
      `Hello! I want a free quote for my event at Sayamwar Hall & Homestay.\n${dateText}\n${guestText}`
    )
    window.open(`https://wa.me/917646028228?text=${msg}`, '_blank')
    close()
  }

  if (!show) return null

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4" onClick={close} role="dialog" aria-modal="true" aria-labelledby="exit-popup-title">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      <div
        className="relative bg-white rounded-2xl shadow-2xl max-w-sm w-full overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top banner */}
        <div className="bg-gradient-to-r from-[#5A0F0F] to-[#7B1818] px-6 py-5 text-center">
          <p className="text-[#C9A84C] text-xs tracking-widest uppercase mb-1">Wait! Don&apos;t Miss Out</p>
          <h2 id="exit-popup-title" className="text-white font-bold text-xl leading-tight">Get a FREE Quote in 10 Minutes</h2>
          <p className="text-white/60 text-sm mt-1">Weddings • Birthdays • Engagements</p>
        </div>

        <div className="p-6">
          <p className="text-gray-600 text-sm text-center mb-4">
            Share your event details and we&apos;ll send you the best package instantly on WhatsApp.
          </p>

          <div className="space-y-3 mb-5">
            <div>
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">
                Event Date
              </label>
              <input
                type="date"
                value={eventDate}
                onChange={(e) => setEventDate(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#7B1818]"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">
                Number of Guests
              </label>
              <input
                type="number"
                placeholder="e.g. 200"
                min="1"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#7B1818]"
              />
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <button
              onClick={handleWhatsApp}
              className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-xl transition-colors w-full"
            >
              💬 Get Free Quote on WhatsApp
            </button>
            <a
              href="tel:7646028228"
              onClick={close}
              className="flex items-center justify-center gap-2 bg-[#7B1818] hover:bg-[#5A0F0F] text-white font-bold py-3 px-6 rounded-xl transition-colors"
            >
              📞 Call 7646028228
            </a>
          </div>

          <button onClick={close} aria-label="Close popup" className="mt-4 w-full text-gray-400 text-xs hover:text-gray-600 transition-colors">
            No thanks, I&apos;ll decide later
          </button>
        </div>
      </div>
    </div>
  )
}
