import type { Metadata } from 'next'
import Image from 'next/image'
import AnimateOnScroll from '@/components/AnimateOnScroll'
import LeadForm from '@/components/LeadForm'

export const metadata: Metadata = {
  title: 'Rooms in Danapur Patna | AC & Non-AC Rooms | Sayamwar Homestay',
  description: 'Book comfortable AC and Non-AC rooms at Sayamwar Homestay, Danapur, Patna. Clean, affordable rooms with all amenities. Call 7646028228 or WhatsApp to book.',
  keywords: 'rooms in danapur patna, homestay danapur, ac rooms patna, budget rooms danapur',
  alternates: { canonical: 'https://sayamwar.com/rooms' },
}

const rooms = [
  {
    img: '/venue-3.jpg',
    name: 'Standard Room',
    price: '₹1,500 / night',
    features: ['Ceiling Fan', 'Double Bed', 'TV', 'Attached Bathroom', 'Clean Linen', '24x7 Water'],
    badge: null,
  },
  {
    img: '/venue-3.jpg',
    name: 'Deluxe AC Room',
    price: '₹1,800 / night',
    features: ['Air Conditioning', 'Double Bed', 'TV', 'Attached Bathroom', 'Free Wi-Fi', 'Room Service'],
    badge: 'Most Popular',
  },
  {
    img: '/venue-6.jpg',
    name: 'Premium AC Suite',
    price: '₹2,500 / night',
    features: ['Air Conditioning', 'King Bed + Sofa', 'LED Ceiling', 'Attached Bathroom', 'Free Wi-Fi', 'Welcome Kit'],
    badge: 'Best Value',
  },
]

const amenities = [
  '24/7 Hot Water', 'Free Parking', 'Daily Housekeeping', 'Room Service',
  'Free Wi-Fi', 'CCTV Security', 'Power Backup', 'Laundry Service',
]

export default function RoomsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-28 px-4 text-center text-white overflow-hidden">
        <Image src="/venue-6.jpg" alt="Rooms" fill className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A0303]/70 via-[#1A0303]/60 to-[#1A0303]/80" />
        <div className="relative z-10">
          <p className="text-[#C9A227] text-xs tracking-[0.35em] uppercase font-[var(--font-inter)] mb-3">Comfortable Stay</p>
          <h1 className="font-[var(--font-playfair)] text-4xl md:text-5xl font-bold mb-4">
            Rooms &amp; Homestay in <span className="text-[#C9A227]">Danapur, Patna</span>
          </h1>
          <div className="w-16 h-px bg-[#C9A227] mx-auto mb-6" />
          <p className="text-white/70 text-lg max-w-2xl mx-auto mb-8">
            Modern, clean, and affordable rooms — perfect for event guests, travelers, and business visitors.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/917646028228?text=Hello!%20I%20want%20to%20book%20a%20room%20at%20Sayamwar%20Homestay"
              target="_blank" rel="noopener noreferrer"
              className="px-7 py-3 bg-green-500 hover:bg-green-600 text-white rounded-xl font-bold transition-all hover:scale-105">
              💬 Book via WhatsApp
            </a>
            <a href="tel:7646028228" className="px-7 py-3 bg-[#C9A227] text-[#3D0A0A] rounded-xl font-bold hover:bg-[#E8C547] transition-all hover:scale-105">
              📞 Call: 7646028228
            </a>
          </div>
        </div>
      </section>

      {/* Room Cards */}
      <section className="py-20 px-4 bg-[#FDF8F0]">
        <div className="max-w-6xl mx-auto">
          <AnimateOnScroll className="text-center mb-14">
            <p className="text-[#C9A84C] text-xs tracking-[0.35em] uppercase font-[var(--font-inter)] mb-3">Accommodation</p>
            <h2 className="font-[var(--font-playfair)] text-4xl font-bold text-[#3D0A0A]">Choose Your Room</h2>
            <div className="gold-divider" />
            <p className="text-gray-500 text-sm mt-4 max-w-lg mx-auto">Each room is thoughtfully furnished for a restful, comfortable stay.</p>
          </AnimateOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {rooms.map((room, i) => (
              <AnimateOnScroll key={room.name} delay={i * 120}>
                <div className="group bg-white rounded-3xl overflow-hidden shadow-lg border border-[#E8D5A3]/40 hover:shadow-2xl hover:-translate-y-1 transition-all duration-400 relative flex flex-col">
                  {room.badge && (
                    <div className="absolute top-4 left-4 z-10 bg-[#C9A84C] text-[#3D0A0A] text-[10px] font-bold px-3 py-1 rounded-full tracking-widest uppercase shadow">
                      {room.badge}
                    </div>
                  )}
                  <div className="relative h-56 overflow-hidden">
                    <Image src={room.img} alt={room.name} fill className="object-cover transition-transform duration-600 group-hover:scale-[1.06]" sizes="420px" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#3D0A0A]/40 to-transparent" />
                  </div>
                  <div className="p-7 flex flex-col flex-1">
                    <h3 className="font-[var(--font-playfair)] font-bold text-[#7B1818] text-xl mb-1">{room.name}</h3>
                    <div className="flex items-baseline gap-1 mb-5">
                      <span className="text-[#C9A84C] font-bold text-2xl">{room.price.split('/')[0]}</span>
                      <span className="text-gray-400 text-sm">/ night</span>
                    </div>
                    <div className="w-8 h-px bg-[#C9A84C]/40 mb-5" />
                    <ul className="space-y-2 mb-7 flex-1">
                      {room.features.map((f) => (
                        <li key={f} className="text-sm text-gray-600 flex items-center gap-2.5">
                          <span className="w-4 h-4 rounded-full bg-[#C9A84C]/15 flex items-center justify-center text-[#C9A84C] text-[10px] flex-shrink-0">✓</span>
                          {f}
                        </li>
                      ))}
                    </ul>
                    <a href={`https://wa.me/917646028228?text=Hello!%20I%20want%20to%20book%20${encodeURIComponent(room.name)}`}
                      target="_blank" rel="noopener noreferrer"
                      className="block text-center w-full py-3 bg-[#7B1818] hover:bg-[#5A0F0F] text-white rounded-xl text-sm font-bold tracking-wide transition-colors shadow-sm">
                      Book This Room
                    </a>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="py-12 px-4 bg-[#3D0A0A]">
        <div className="max-w-4xl mx-auto text-center">
          <AnimateOnScroll>
            <h2 className="font-[var(--font-playfair)] text-2xl font-bold text-white mb-8">All Rooms Include</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {amenities.map((a) => (
                <div key={a} className="bg-white/8 border border-white/10 rounded-xl p-4 text-sm font-medium text-white/70 hover:bg-white/12 transition-colors">
                  ✅ {a}
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Form */}
      <section className="py-16 px-4 bg-[#FDF8F0]">
        <div className="max-w-2xl mx-auto">
          <AnimateOnScroll className="text-center mb-10">
            <h2 className="font-[var(--font-playfair)] text-3xl font-bold text-[#3D0A0A]">Book a Room</h2>
            <div className="gold-divider" />
          </AnimateOnScroll>
          <AnimateOnScroll>
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
              <LeadForm eventType="Room Booking" />
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  )
}
