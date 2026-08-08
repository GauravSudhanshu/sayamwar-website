'use client'
import { useEffect } from 'react'

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

export function trackLead(eventName: string, params: Record<string, string> = {}) {
  if (typeof window === 'undefined' || !window.gtag) return
  window.gtag('event', eventName, {
    event_category: 'lead',
    page_path: window.location.pathname,
    ...params,
  })
}

// Fires a Google Ads conversion. Callers must only invoke this after a
// confirmed successful submission — never on page load, click, or failure.
export function trackAdsConversion(sendTo: string) {
  if (typeof window === 'undefined' || !window.gtag) {
    console.warn('[ads-conversion] skipped: gtag not available')
    return
  }
  console.log('[ads-conversion] firing', sendTo)
  window.gtag('event', 'conversion', { send_to: sendTo })
}

// Fires a GA4 event whenever a visitor clicks any WhatsApp (wa.me) or tel: link
// anywhere on the site, without needing to instrument every CTA individually.
export default function ConversionTracker() {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const link = (e.target as HTMLElement)?.closest('a')
      const href = link?.getAttribute('href') || ''
      if (href.includes('wa.me')) {
        trackLead('whatsapp_click')
      } else if (href.startsWith('tel:')) {
        trackLead('phone_click')
      }
    }
    document.addEventListener('click', handleClick, true)
    return () => document.removeEventListener('click', handleClick, true)
  }, [])

  return null
}
