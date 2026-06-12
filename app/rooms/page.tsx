import type { Metadata } from 'next'
import Image from 'next/image'
import AnimateOnScroll from '@/components/AnimateOnScroll'
import LeadForm from '@/components/LeadForm'

export const metadata: Metadata = {
  title: 'Rooms in Danapur Patna | AC & Non-AC Rooms | Sayamwar Homestay',
  description: 'Book comfortable AC and Non-AC rooms at Sayamwar Homestay, Danapur, Patna. Clean, affordable rooms with all amenities. Call 9942972484 or WhatsApp to book.',
  keywords: 'rooms in danapur patna, homestay danapur, ac rooms patna, budget rooms danapur',
  alternates: { canonical: 'https://sayamwarhall.com/rooms' },
}

const rooms = [
  {
    img: '/venue-3.jpg',
    name: 'Deluxe AC Room',
    price: '₹1,200 / night',
    features: ['Air Conditioning', 'Double Bed', 'TV', 'Attached Bathroom', 'Free Wi-Fi', 'Room Service'],
    badge: 'Most Popular',
  },
  {
    img: '/venue-6.jpg',
    name: 'Premium AC Suite',
    price: '₹1,800 / night',
    features: ['Air Conditioning', 'King Bed + Sofa', 'LED Ceiling', 'Attached Bathroom', 'Free Wi-Fi', 'Welcome Kit'],
    badge: 'Best Value',
  },
  {
    img: '/venue-3.jpg',
    name: 'Standard Room',
    price: '₹700 / night',
    features: ['Ceiling Fan', 'Double Bed', 'TV', 'Attached Bathroom', 'Clean Linen', '24x7 Water'],
    badge: null,
  },
  {
    img: '/venue-6.jpg',
    name: 'Family Suite',
    price: '₹2,200 / night',
    features: ['2 Bedrooms', 'Living Area', 'AC', '2 Bathrooms', 'TV', 'Mini Kitchen'],
    badge: 'For Families',
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
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
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
            <a href="https://wa.me/919942972484?text=Hello!%20I%20want%20to%20book%20a%20room%20at%20Sayamwar%20Homestay"
              target="_blank" rel="noopener noreferrer"
              className="px-7 py-3 bg-green-500 hover:bg-green-600 text-white rounded-xl font-bold transition-all hover:scale-105">
              💬 Book via WhatsApp
            </a>
            <a href="tel:9942972484" className="px-7 py-3 bg-[#C9A227] text-[#3D0A0A] rounded-xl font-bold hover:bg-[#E8C547] transition-all hover:scale-105">
              📞 Call: 9942972484
            </a>
          </div>
        </div>
      </section>

      {/* Room Cards */}
      <section className="py-16 px-4 bg-[#FDF8F0]">
        <div className="max-w-6xl mx-auto">
          <AnimateOnScroll className="text-center mb-12">
            <p className="text-[#C9A227] text-xs tracking-[0.3em] uppercase font-[var(--font-inter)] mb-2">Accommodation</p>
            <h2 className="font-[var(--font-playfair)] text-4xl font-bold text-[#3D0A0A]">Choose Your Room</h2>
            <div className="gold-divider" />
          </AnimateOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {rooms.map((room, i) => (
              <AnimateOnScroll key={room.name} delay={i * 100}>
                <div className="card-hover bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 relative">
                  {room.badge && (
                    <div className="absolute top-3 right-3 z-10 bg-[#C9A227] text-[#3D0A0A] text-xs font-bold px-2 py-1 rounded-full">
                      {room.badge}
                    </div>
                  )}
                  <div className="relative h-48 img-card group overflow-hidden">
                    <Image src={room.img} alt={room.name} fill className="object-cover transition-transform duration-500 group-hover:scale-[1.07]" sizes="320px" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-[var(--font-playfair)] font-bold text-[#7B1818] text-lg mb-1">{room.name}</h3>
                    <p className="text-[#C9A227] font-bold text-xl mb-4">{room.price}</p>
                    <ul className="space-y-1.5 mb-5">
                      {room.features.map((f) => (
                        <li key={f} className="text-sm text-gray-600 flex items-center gap-2">
                          <span className="text-green-500">✓</span> {f}
                        </li>
                      ))}
                    </ul>
                    <a href={`https://wa.me/919942972484?text=Hello!%20I%20want%20to%20book%20${encodeURIComponent(room.name)}`}
                      target="_blank" rel="noopener noreferrer"
                      className="block text-center w-full py-2.5 bg-[#7B1818] hover:bg-[#5A0F0F] text-white rounded-xl text-sm font-bold transition-colors">
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
