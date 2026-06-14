'use client'
import { useState, useEffect } from 'react'

export default function ExitIntentPopup() {
  const [show, setShow] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    if (sessionStorage.getItem('exit_popup_seen')) return

    // Desktop: mouse leaves top of viewport
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 10 && !dismissed) {
        setShow(true)
        sessionStorage.setItem('exit_popup_seen', '1')
      }
    }

    // Mobile: show after 40 seconds on page
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

  if (!show) return null

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4" onClick={close}>
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      <div
        className="relative bg-white rounded-2xl shadow-2xl max-w-sm w-full overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top banner */}
        <div className="bg-gradient-to-r from-[#5A0F0F] to-[#7B1818] px-6 py-5 text-center">
          <p className="text-[#C9A84C] text-xs tracking-widest uppercase mb-1">Wait! Don&apos;t Miss Out</p>
          <h2 className="text-white font-bold text-xl leading-tight">Get a FREE Quote in 10 Minutes</h2>
          <p className="text-white/60 text-sm mt-1">Weddings • Birthdays • Engagements</p>
        </div>

        <div className="p-6 text-center">
          <p className="text-gray-600 text-sm mb-6">
            Our team responds instantly on WhatsApp. Tell us your event date and we&apos;ll send you the best package.
          </p>

          <div className="flex flex-col gap-3">
            <a
              href="https://wa.me/917646028228?text=Hello!%20I%20want%20a%20free%20quote%20for%20my%20event%20at%20Sayamwar%20Hall"
              target="_blank" rel="noopener noreferrer"
              onClick={close}
              className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-xl transition-colors"
            >
              💬 Get Free Quote on WhatsApp
            </a>
            <a
              href="tel:7646028228"
              onClick={close}
              className="flex items-center justify-center gap-2 bg-[#7B1818] hover:bg-[#5A0F0F] text-white font-bold py-3 px-6 rounded-xl transition-colors"
            >
              📞 Call 7646028228
            </a>
          </div>

          <button onClick={close} className="mt-4 text-gray-400 text-xs hover:text-gray-600 transition-colors">
            No thanks, I&apos;ll decide later
          </button>
        </div>
      </div>
    </div>
  )
}
