import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Rooms in Patna | Budget AC Rooms Near Danapur | Sayamwar Homestay',
  description: 'Looking for affordable rooms in Patna? Sayamwar Homestay in Danapur offers clean AC & non-AC rooms from ₹1,500/night. 24-hour check-in. Call 7646028228.',
  keywords: 'rooms in patna, budget rooms patna, ac rooms patna, homestay patna, rooms near danapur, cheap rooms patna, hotel rooms danapur patna, rooms for rent patna',
  alternates: { canonical: 'https://sayamwar.com/rooms-in-patna' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Where can I find budget rooms in Patna?',
      acceptedAnswer: { '@type': 'Answer', text: 'Sayamwar Homestay in Danapur, Patna offers budget rooms starting from ₹1,500 per night. All rooms include clean linen, attached bathroom, and 24-hour hot water. Located on Gola Road, Danapur — easily accessible from Patna Junction, Boring Road and Danapur railway station.' },
    },
    {
      '@type': 'Question',
      name: 'What is the price of rooms at Sayamwar Homestay Patna?',
      acceptedAnswer: { '@type': 'Answer', text: 'Sayamwar Homestay offers three room types: Standard Room at ₹1,500/night, Deluxe AC Room at ₹1,800/night, and Premium AC Suite at ₹2,500/night. All rooms include free Wi-Fi, parking, and 24-hour check-in.' },
    },
    {
      '@type': 'Question',
      name: 'Is 24-hour check-in available at Sayamwar Homestay?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes, Sayamwar Homestay is open 24 hours, 7 days a week. You can check in at any time — day or night. Call 7646028228 for late-night check-in arrangements.' },
    },
    {
      '@type': 'Question',
      name: 'Are AC rooms available in Danapur Patna?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes, Sayamwar Homestay offers fully air-conditioned Deluxe AC Rooms at ₹1,800/night and Premium AC Suites at ₹2,500/night in Danapur, Patna. Both include TV, free Wi-Fi, and attached bathroom.' },
    },
  ],
}

const rooms = [
  {
    name: 'Standard Room',
    price: '₹1,500',
    features: ['Ceiling Fan', 'Double Bed', 'TV', 'Attached Bathroom', 'Clean Linen', '24x7 Hot Water'],
  },
  {
    name: 'Deluxe AC Room',
    price: '₹1,800',
    badge: 'Most Popular',
    features: ['Air Conditioning', 'Double Bed', 'TV', 'Attached Bathroom', 'Free Wi-Fi', 'Room Service'],
  },
  {
    name: 'Premium AC Suite',
    price: '₹2,500',
    badge: 'Best Value',
    features: ['Air Conditioning', 'King Bed + Sofa', 'LED Ceiling', 'Attached Bathroom', 'Free Wi-Fi', 'Welcome Kit'],
  },
]

export default function RoomsInPatnaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#5A0F0F] to-[#7B1818] py-20 px-4 text-center text-white">
        <p className="text-[#C9A84C] text-xs tracking-[0.3em] uppercase mb-4">Danapur, Patna</p>
        <h1 className="font-[var(--font-playfair)] text-4xl md:text-5xl font-bold mb-4 leading-tight">
          Affordable Rooms in <span className="text-[#C9A84C]">Patna</span>
        </h1>
        <p className="text-white/70 text-lg max-w-2xl mx-auto mb-3">
          Sayamwar Homestay — Clean, comfortable AC & non-AC rooms in Danapur, Patna. Starting ₹1,500/night. Open 24 hours.
        </p>
        <p className="text-[#C9A84C] font-semibold mb-8">Free Parking • Free Wi-Fi • 24-Hour Check-in</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="tel:7646028228" className="bg-[#C9A84C] hover:bg-[#E8C96A] text-[#3D0A0A] font-bold py-3 px-8 rounded-lg transition-colors">
            📞 Call 7646028228
          </a>
          <a href="https://wa.me/917646028228?text=Hello!%20I%20want%20to%20book%20a%20room%20at%20Sayamwar%20Homestay%20Patna"
            target="_blank" rel="noopener noreferrer"
            className="border border-[#C9A84C] text-[#C9A84C] hover:bg-[#C9A84C] hover:text-[#3D0A0A] font-bold py-3 px-8 rounded-lg transition-colors">
            💬 WhatsApp to Book
          </a>
        </div>
      </section>

      {/* Room Cards */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-[#7B1818] text-center mb-4">Room Types & Pricing</h2>
          <p className="text-gray-500 text-center mb-12">All rooms include attached bathroom, clean linen, and 24-hour hot water.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {rooms.map((room) => (
              <div key={room.name} className="bg-[#F7F2EA] rounded-2xl p-7 border border-[#C9A84C]/20 relative flex flex-col">
                {'badge' in room && room.badge && (
                  <span className="absolute -top-3 left-5 bg-[#C9A84C] text-[#3D0A0A] text-xs font-bold px-3 py-1 rounded-full">
                    {room.badge}
                  </span>
                )}
                <h3 className="font-bold text-[#7B1818] text-xl mb-2">{room.name}</h3>
                <p className="text-[#C9A84C] font-bold text-3xl mb-1">{room.price}</p>
                <p className="text-gray-400 text-sm mb-5">per night</p>
                <ul className="space-y-2 mb-7 flex-1">
                  {room.features.map((f) => (
                    <li key={f} className="text-sm text-gray-600 flex items-center gap-2">
                      <span className="text-[#C9A84C]">✓</span> {f}
                    </li>
                  ))}
                </ul>
                <a
                  href={`https://wa.me/917646028228?text=Hello!%20I%20want%20to%20book%20${encodeURIComponent(room.name)}%20at%20Sayamwar%20Homestay%20Patna`}
                  target="_blank" rel="noopener noreferrer"
                  className="block text-center w-full py-3 bg-[#7B1818] hover:bg-[#5A0F0F] text-white rounded-xl text-sm font-bold transition-colors"
                >
                  Book This Room
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 bg-[#F7F2EA]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#7B1818] text-center mb-12">Why Stay at Sayamwar Homestay?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { icon: '🕐', title: 'Open 24 Hours', desc: 'Check in anytime — day or night. No restrictions on arrival time.' },
              { icon: '📍', title: 'Prime Location', desc: 'Gola Road, Danapur — 5 min from Danapur station, 20 min from Patna Junction.' },
              { icon: '🅿️', title: 'Free Parking', desc: 'Spacious parking available for cars and two-wheelers at no extra charge.' },
              { icon: '💰', title: 'Best Price', desc: 'Rooms from ₹1,500/night — the most affordable clean stay near Patna.' },
              { icon: '📶', title: 'Free Wi-Fi', desc: 'High-speed Wi-Fi in all rooms. Ideal for business travelers and students.' },
              { icon: '🎉', title: 'Event Guests Welcome', desc: 'Attending a wedding or event nearby? Book rooms alongside the banquet hall.' },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-6 border border-[#C9A84C]/20 flex gap-4">
                <span className="text-3xl flex-shrink-0">{item.icon}</span>
                <div>
                  <p className="font-bold text-[#7B1818] mb-1">{item.title}</p>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-[#7B1818] text-center mb-10">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {jsonLd.mainEntity.map((faq) => (
              <details key={faq.name} className="bg-[#F7F2EA] rounded-xl border border-[#C9A84C]/20 group">
                <summary className="p-5 font-semibold text-[#7B1818] cursor-pointer list-none flex justify-between items-center">
                  {faq.name}
                  <span className="text-[#C9A84C] group-open:rotate-180 transition-transform duration-300 flex-shrink-0 ml-3">▼</span>
                </summary>
                <p className="px-5 pb-5 text-gray-600 text-sm leading-relaxed">{faq.acceptedAnswer.text}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gradient-to-br from-[#5A0F0F] to-[#7B1818] text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Book Your Room in Patna Today</h2>
        <p className="text-white/70 max-w-xl mx-auto mb-8">
          Clean, safe, and affordable — Sayamwar Homestay is the best budget stay in Danapur, Patna. Call now to check availability.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <a href="tel:7646028228" className="bg-[#C9A84C] hover:bg-[#E8C96A] text-[#3D0A0A] font-bold py-3 px-8 rounded-lg transition-colors">
            📞 Call 7646028228
          </a>
          <a href="https://wa.me/917646028228?text=Hello!%20I%20want%20to%20book%20a%20room%20at%20Sayamwar%20Homestay%20Patna"
            target="_blank" rel="noopener noreferrer"
            className="border border-[#C9A84C] text-[#C9A84C] hover:bg-[#C9A84C] hover:text-[#3D0A0A] font-bold py-3 px-8 rounded-lg transition-colors">
            💬 WhatsApp Now
          </a>
        </div>
        <div className="flex flex-wrap justify-center gap-6 text-sm text-white/50">
          <Link href="/rooms" className="hover:text-[#C9A84C] transition-colors">View All Rooms</Link>
          <Link href="/banquet-hall-danapur" className="hover:text-[#C9A84C] transition-colors">Banquet Hall Danapur</Link>
          <Link href="/contact" className="hover:text-[#C9A84C] transition-colors">Contact Us</Link>
        </div>
      </section>
    </>
  )
}
