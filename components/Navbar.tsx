'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'

const links = [
  { href: '/', label: 'Home' },
  { href: '/rooms', label: 'Rooms' },
  { href: '/banquet-hall-patna', label: 'Banquet Hall' },
  { href: '/birthday-party-hall-patna', label: 'Birthday' },
  { href: '/wedding-venue-patna', label: 'Wedding' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/packages', label: 'Packages' },
  { href: '/menu', label: 'Menu' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-500 ${
      scrolled
        ? 'bg-[#3D0A0A]/95 backdrop-blur-md border-b border-[#C9A84C]/20 shadow-xl'
        : 'bg-transparent border-b border-transparent'
    }`}
    style={{ backgroundColor: scrolled ? undefined : 'rgba(61,10,10,0.65)', backdropFilter: 'blur(8px)' }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-[80px]">

        {/* Logo + Name */}
        <Link href="/" className="flex items-center gap-3 flex-shrink-0">
          <div className="relative w-[80px] h-[72px] rounded-lg overflow-hidden border border-[#C9A84C]/60 bg-[#F7F2EA]">
            <Image src="/logo.png" alt="Sayamwar Hall & Homestay" fill className="object-contain" sizes="80px" priority />
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-[var(--font-playfair)] text-[#C9A84C] font-bold text-lg tracking-wide">Sayamwar</span>
            <span className="text-white/60 text-[10px] tracking-[0.25em] uppercase mt-0.5">Hall &amp; Homestay</span>
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-7">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="nav-link">
              {l.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a href="https://wa.me/917646028228" target="_blank" rel="noopener noreferrer"
            className="btn-gold text-sm py-2.5 px-5">
            Book Now
          </a>
        </div>

        {/* Mobile toggle */}
        <button className="lg:hidden flex flex-col gap-1.5 p-2" onClick={() => setOpen(!open)} aria-label="Menu">
          <span className={`block w-6 h-px bg-[#C9A84C] transition-all duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-px bg-white/60 transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-px bg-[#C9A84C] transition-all duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`lg:hidden overflow-hidden transition-all duration-500 ${open ? 'max-h-[500px]' : 'max-h-0'}`}>
        <div className="bg-[#3D0A0A]/98 border-t border-[#C9A84C]/20 px-6 py-6 space-y-4">
          {links.map((l) => (
            <Link key={l.href} href={l.href}
              className="block text-white/70 hover:text-[#C9A84C] text-sm uppercase tracking-widest transition-colors"
              onClick={() => setOpen(false)}>
              {l.label}
            </Link>
          ))}
          <div className="pt-4 flex flex-col gap-3">
            <a href="https://wa.me/917646028228" target="_blank" rel="noopener noreferrer" className="btn-gold justify-center text-sm">
              💬 Book via WhatsApp
            </a>
            <a href="tel:7646028228" className="btn-outline justify-center text-sm">
              <span>📞 7646028228</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
