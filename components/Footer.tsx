import Link from 'next/link'
import Image from 'next/image'

export default function Footer({ className = '' }: { className?: string }) {
  return (
    <footer className={`bg-[#270606] text-white border-t border-[#C9A84C]/15 ${className}`}>
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* Brand */}
        <div className="md:col-span-2">
          <Link href="/" className="inline-flex items-center gap-4 mb-6 group">
            <div className="relative w-20 h-20 rounded border border-[#C9A84C]/40 overflow-hidden bg-[#F7F2EA] flex-shrink-0">
              <Image src="/logo.png" alt="Sayamwar Hall & Homestay" fill className="object-contain" sizes="80px" />
            </div>
            <div>
              <p className="font-[var(--font-playfair)] text-[#C9A84C] font-bold text-xl leading-tight">Sayamwar Hall</p>
              <p className="text-white/40 text-xs tracking-[0.25em] uppercase mt-1">&amp; Homestay</p>
              <p className="text-white/25 text-[10px] tracking-widest mt-1">Celebrate • Stay • Memories</p>
            </div>
          </Link>
          <p className="text-white/40 text-sm leading-relaxed max-w-sm mb-6">
            Danapur, Patna&apos;s finest venue for weddings, birthday celebrations, corporate events, and comfortable stays. Every detail crafted for the extraordinary.
          </p>
          <div className="flex gap-3">
            <a href="https://wa.me/917646028228" target="_blank" rel="noopener noreferrer"
              className="btn-gold text-xs py-2 px-4">WhatsApp</a>
            <a href="tel:7646028228"
              className="btn-outline text-xs py-2 px-4"><span>Call Us</span></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <p className="section-label mb-6">Quick Links</p>
          <ul className="space-y-3">
            {[
              { href: '/rooms', label: 'Rooms & Homestay' },
              { href: '/banquet-hall-patna', label: 'Banquet Hall' },
              { href: '/birthday-party-hall-patna', label: 'Birthday Events' },
              { href: '/wedding-venue-patna', label: 'Wedding Venue' },
              { href: '/packages', label: 'Packages & Pricing' },
              { href: '/gallery', label: 'Gallery' },
              { href: '/blog', label: 'Blog & Tips' },
              { href: '/contact', label: 'Contact Us' },
            ].map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-white/45 hover:text-[#C9A84C] text-sm transition-colors duration-300 flex items-center gap-2 group">
                  <span className="w-0 group-hover:w-4 h-px bg-[#C9A84C] transition-all duration-300 inline-block" />
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p className="section-label mb-6">Contact</p>
          <div className="space-y-4 text-sm text-white/45">
            <a href="https://www.google.com/maps/place/Sayamwar+Hall+%26+Homestay/@25.6292816,85.0523556,17z/data=!3m1!4b1!4m6!3m5!1s0x39ed570055ae3209:0xecb1a935000a9895!8m2!3d25.6292768!4d85.0549305"
              target="_blank" rel="noopener noreferrer"
              className="flex items-start gap-3 hover:text-[#C9A84C] transition-colors">
              <span className="mt-0.5">📍</span>
              <span>Gola Road, Adarsh Vihar Colony, Lane 5,<br />near T Point, beside Hotel King Regency,<br />Patna, Bihar 801503</span>
            </a>
            <a href="tel:7646028228" className="flex items-center gap-3 hover:text-[#C9A84C] transition-colors">
              <span>📞</span> 7646028228
            </a>
            <a href="tel:7070486987" className="flex items-center gap-3 hover:text-[#C9A84C] transition-colors">
              <span>📞</span> 7070486987
            </a>
            <a href="https://wa.me/917646028228" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-3 hover:text-[#C9A84C] transition-colors">
              <span>💬</span> WhatsApp Us
            </a>
            <div className="flex items-center gap-3">
              <span>🕐</span> Open 24 Hours, 7 Days
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5 py-5 px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-white/25 text-xs">© {new Date().getFullYear()} Sayamwar Hall &amp; Homestay. All rights reserved.</p>
          <p className="text-white/20 text-xs">Gola Road, Adarsh Vihar Colony, Patna, Bihar 801503</p>
        </div>
      </div>
    </footer>
  )
}
