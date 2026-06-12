import type { Metadata } from 'next'
import Image from 'next/image'
import AnimateOnScroll from '@/components/AnimateOnScroll'
import LeadForm from '@/components/LeadForm'

export const metadata: Metadata = {
  title: 'Packages & Pricing | Sayamwar Hall & Homestay Patna',
  description: 'View all event packages at Sayamwar Hall & Homestay, Danapur Patna. Wedding ₹1,51,000 | Reception ₹1,00,000 | Birthday ₹85,000 | Engagement ₹85,000. Call 9942972484.',
  alternates: { canonical: 'https://sayamwarhall.com/packages' },
}

const rentalPackages = [
  {
    img: '/pkg-wedding.jpg',
    name: 'Wedding',
    price: '₹1,51,000',
    highlight: true,
    tag: 'Most Booked',
    desc: 'Complete wedding ceremony package with grand stage, mandap, full decor & catering.',
  },
  {
    img: '/pkg-reception.jpg',
    name: 'Reception',
    price: '₹1,00,000',
    highlight: false,
    tag: null,
    desc: 'Elegant reception setup with stage decoration, DJ, lighting & full food service.',
  },
  {
    img: '/pkg-engagement.jpg',
    name: 'Engagement',
    price: '₹85,000',
    highlight: false,
    tag: null,
    desc: 'Beautiful engagement ceremony with mandap, mala, decor & food arrangements.',
  },
  {
    img: '/pkg-birthday.jpg',
    name: 'Birthday',
    price: '₹85,000',
    highlight: false,
    tag: null,
    desc: 'Custom birthday celebration with theme decor, selfie point, DJ & catering.',
  },
]

const foodPackages = [
  {
    name: 'Shagun Package',
    icon: '🙏',
    color: 'from-[#5A0F0F] to-[#7B1818]',
    desc: 'Traditional auspicious menu — perfect for engagements & small ceremonies',
    vegPrice: '₹999',
    nonVegPrice: '₹1,151',
    items: [
      'Welcome Drink',
      'Starters (Veg & Non-Veg)',
      'Main Course (4 Sabzi)',
      'Dal & Rice',
      'Roti / Puri',
      'Sweet Dish',
      'Salad & Papad',
    ],
  },
  {
    name: 'Vivah Package',
    icon: '💒',
    color: 'from-[#7B1818] to-[#9B2222]',
    desc: 'Premium wedding feast — our most popular full-course marriage menu',
    vegPrice: '₹1,151',
    nonVegPrice: '₹1,351',
    items: [
      'Welcome Drink + Mocktail',
      'Live Snacks Counter',
      'Starters (Veg & Non-Veg)',
      'Main Course (6 Sabzi)',
      'Dal Makhani & Jeera Rice',
      'Naan / Tandoori Roti',
      '2 Sweet Dishes',
      'Ice Cream Counter',
      'Salad & Chutney Bar',
    ],
    popular: true,
  },
  {
    name: 'Swayamvar Package',
    icon: '👑',
    color: 'from-[#3D0A0A] to-[#5A0F0F]',
    desc: 'Royal grand feast — the ultimate premium experience for your special day',
    vegPrice: '₹1,351',
    nonVegPrice: '₹1,551',
    items: [
      'Royal Welcome Drink',
      'Live Starters Counter',
      'Veg & Non-Veg Starters',
      'Main Course (8 Sabzi)',
      'Dum Biryani / Pulao',
      'Dal & Multiple Bread Options',
      '3 Sweet Dishes',
      'Live Ice Cream Stall',
      'Salad, Papad & Pickle Bar',
      'Night Coffee / Chai Counter',
    ],
  },
]

const includedServices = [
  { icon: '🎭', name: 'Stage Decoration' },
  { icon: '🌿', name: 'Lawn Decoration' },
  { icon: '🕌', name: 'Mandap' },
  { icon: '📸', name: 'Selfie Point' },
  { icon: '🍽️', name: 'Food Counter Decoration' },
  { icon: '💐', name: 'Var Badhu Mala' },
  { icon: '🌸', name: 'Samdhi Mala' },
  { icon: '🎊', name: 'Barat Mala' },
  { icon: '🎵', name: 'DJ' },
  { icon: '🛡️', name: 'Guard / Bouncer' },
  { icon: '☕', name: 'Night Coffee (Complimentary)' },
  { icon: '🛏️', name: '4 Rooms Included' },
]

export default function PackagesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#3D0A0A] via-[#5A0F0F] to-[#7B1818] py-20 px-4 text-center text-white">
        <AnimateOnScroll>
          <p className="text-[#C9A227] text-xs tracking-[0.35em] uppercase font-[var(--font-inter)] mb-3">Transparent Pricing</p>
          <h1 className="font-[var(--font-playfair)] text-4xl md:text-5xl font-bold mb-4">
            Packages &amp; <span className="text-[#C9A227]">Pricing</span>
          </h1>
          <div className="w-16 h-px bg-[#C9A227] mx-auto mb-5" />
          <p className="text-white/65 text-base max-w-xl mx-auto">
            All-inclusive packages — no hidden charges. Everything you need for a perfect celebration.
          </p>
        </AnimateOnScroll>
      </section>

      {/* ── RENTAL PACKAGES ── */}
      <section className="py-20 px-4 bg-[#FDF8F0]">
        <div className="max-w-6xl mx-auto">
          <AnimateOnScroll className="text-center mb-14">
            <p className="text-[#C9A227] text-xs tracking-[0.3em] uppercase font-[var(--font-inter)] mb-2">Hall Rental</p>
            <h2 className="font-[var(--font-playfair)] text-4xl font-bold text-[#3D0A0A]">Event Packages</h2>
            <div className="gold-divider" />
          </AnimateOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {rentalPackages.map((pkg, i) => (
              <AnimateOnScroll key={pkg.name} delay={i * 100}>
                <div className={`card-hover relative bg-white rounded-2xl overflow-hidden shadow-md border-2 ${pkg.highlight ? 'border-[#C9A227]' : 'border-gray-100'} flex flex-col h-full`}>
                  {pkg.tag && (
                    <div className="absolute top-0 left-0 right-0 z-10 bg-[#C9A227] text-[#3D0A0A] text-center text-xs font-bold py-1.5 font-[var(--font-inter)] tracking-wide">
                      ⭐ {pkg.tag}
                    </div>
                  )}
                  {/* Photo */}
                  <div className={`relative ${pkg.tag ? 'mt-7' : ''} h-52 img-card group overflow-hidden`}>
                    <Image
                      src={pkg.img}
                      alt={pkg.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.06]"
                      sizes="320px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A0303]/50 to-transparent" />
                    <div className="absolute bottom-3 left-4">
                      <p className="font-[var(--font-playfair)] text-white font-bold text-xl">{pkg.name}</p>
                    </div>
                  </div>

                  <div className="px-5 py-5 flex flex-col flex-1">
                    <p className="font-[var(--font-playfair)] text-3xl font-bold text-[#C9A227] text-center mb-2">{pkg.price}</p>
                    <p className="text-gray-500 text-sm text-center leading-relaxed mb-5 flex-1">{pkg.desc}</p>
                    <a
                      href={`https://wa.me/919942972484?text=Hello!%20I%20want%20to%20book%20the%20${encodeURIComponent(pkg.name)}%20package%20at%20Sayamwar%20Hall`}
                      target="_blank" rel="noopener noreferrer"
                      className="block text-center w-full py-3 bg-[#7B1818] hover:bg-[#5A0F0F] text-white rounded-xl text-sm font-bold transition-all hover:scale-105"
                    >
                      Book via WhatsApp →
                    </a>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          <AnimateOnScroll className="mt-6 text-center">
            <p className="text-gray-400 text-xs">* Prices are for hall rental. Food packages are additional. GST applicable.</p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ── WHAT'S INCLUDED ── */}
      <section className="py-20 px-4 bg-[#3D0A0A]">
        <div className="max-w-5xl mx-auto">
          <AnimateOnScroll className="text-center mb-14">
            <p className="text-[#C9A227] text-xs tracking-[0.3em] uppercase font-[var(--font-inter)] mb-2">Everything Arranged</p>
            <h2 className="font-[var(--font-playfair)] text-4xl font-bold text-white">What&apos;s Included</h2>
            <div className="gold-divider" />
            <p className="text-white/50 text-sm mt-4">All packages include these services — nothing extra to arrange</p>
          </AnimateOnScroll>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {includedServices.map((s, i) => (
              <AnimateOnScroll key={s.name} delay={i * 60}>
                <div className="bg-white/8 border border-white/10 rounded-2xl p-5 text-center hover:bg-white/14 hover:border-[#C9A227]/40 transition-all group">
                  <div className="text-3xl mb-2">{s.icon}</div>
                  <p className="text-white/80 text-sm font-medium group-hover:text-[#C9A227] transition-colors">{s.name}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOD PACKAGES ── */}
      <section className="py-20 px-4 bg-[#FDF8F0]">
        <div className="max-w-5xl mx-auto">
          <AnimateOnScroll className="text-center mb-14">
            <p className="text-[#C9A227] text-xs tracking-[0.3em] uppercase font-[var(--font-inter)] mb-2">Catering Menus</p>
            <h2 className="font-[var(--font-playfair)] text-4xl font-bold text-[#3D0A0A]">Food Packages</h2>
            <div className="gold-divider" />
            <p className="text-gray-400 text-sm mt-4">Choose the menu that suits your occasion</p>
          </AnimateOnScroll>

          {/* Quick rate table */}
          <AnimateOnScroll className="mb-10 overflow-x-auto">
            <table className="w-full max-w-2xl mx-auto bg-white rounded-2xl shadow-md border border-gray-100 text-sm">
              <thead>
                <tr className="bg-[#7B1818] text-white">
                  <th className="py-3 px-5 text-left font-[var(--font-playfair)] font-bold rounded-tl-2xl">Package</th>
                  <th className="py-3 px-5 text-center font-bold">🥦 Veg / Plate</th>
                  <th className="py-3 px-5 text-center font-bold rounded-tr-2xl">🍗 Non-Veg / Plate</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: 'Shagun Package', veg: '₹999', nonveg: '₹1,151' },
                  { name: 'Vivah Package',  veg: '₹1,151', nonveg: '₹1,351' },
                  { name: 'Swayamvar Package', veg: '₹1,351', nonveg: '₹1,551' },
                ].map((r, i) => (
                  <tr key={r.name} className={i % 2 === 0 ? 'bg-[#FDF8F0]' : 'bg-white'}>
                    <td className="py-3 px-5 font-semibold text-[#7B1818]">{r.name}</td>
                    <td className="py-3 px-5 text-center font-bold text-green-700">{r.veg}</td>
                    <td className="py-3 px-5 text-center font-bold text-red-700">{r.nonveg}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {foodPackages.map((pkg, i) => (
              <AnimateOnScroll key={pkg.name} delay={i * 120}>
                <div className={`card-hover relative bg-white rounded-2xl overflow-hidden shadow-md border-2 ${pkg.popular ? 'border-[#C9A227]' : 'border-gray-100'} flex flex-col h-full`}>
                  {pkg.popular && (
                    <div className="bg-[#C9A227] text-[#3D0A0A] text-center text-xs font-bold py-1.5 tracking-wide font-[var(--font-inter)]">
                      ⭐ MOST POPULAR
                    </div>
                  )}

                  {/* Card header */}
                  <div className={`bg-gradient-to-br ${pkg.color} p-6 text-center`}>
                    <div className="text-4xl mb-2">{pkg.icon}</div>
                    <h3 className="font-[var(--font-playfair)] text-xl font-bold text-white">{pkg.name}</h3>
                    <p className="text-white/60 text-xs mt-1">{pkg.desc}</p>
                  </div>

                  {/* Pricing */}
                  <div className="px-6 pt-5 pb-2 grid grid-cols-2 gap-3">
                    <div className="bg-green-50 border border-green-200 rounded-xl p-3 text-center">
                      <p className="text-green-700 text-[10px] font-bold uppercase tracking-wide mb-1">🥦 Veg</p>
                      <p className="font-[var(--font-playfair)] text-lg font-bold text-green-800">{pkg.vegPrice}</p>
                      <p className="text-green-600 text-[10px]">per plate</p>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-xl p-3 text-center">
                      <p className="text-red-700 text-[10px] font-bold uppercase tracking-wide mb-1">🍗 Non-Veg</p>
                      <p className="font-[var(--font-playfair)] text-lg font-bold text-red-800">{pkg.nonVegPrice}</p>
                      <p className="text-red-600 text-[10px]">per plate</p>
                    </div>
                  </div>

                  {/* Items */}
                  <div className="px-6 pb-6 flex flex-col flex-1">
                    <ul className="space-y-2 my-4 flex-1">
                      {pkg.items.map((item) => (
                        <li key={item} className="text-sm text-gray-600 flex items-center gap-2">
                          <span className="text-[#C9A227] font-bold">✦</span> {item}
                        </li>
                      ))}
                    </ul>
                    <a
                      href={`https://wa.me/919942972484?text=Hello!%20I%20want%20to%20book%20the%20${encodeURIComponent(pkg.name)}%20food%20package`}
                      target="_blank" rel="noopener noreferrer"
                      className="block text-center w-full py-3 border-2 border-[#7B1818] text-[#7B1818] hover:bg-[#7B1818] hover:text-white rounded-xl text-sm font-bold transition-all"
                    >
                      Book This Menu →
                    </a>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── ROOMS ── */}
      <section className="py-16 px-4 bg-[#5A0F0F]">
        <div className="max-w-4xl mx-auto">
          <AnimateOnScroll className="text-center mb-10">
            <p className="text-[#C9A227] text-xs tracking-[0.3em] uppercase font-[var(--font-inter)] mb-2">Stay With Us</p>
            <h2 className="font-[var(--font-playfair)] text-3xl font-bold text-white">Room Rates</h2>
            <div className="gold-divider" />
          </AnimateOnScroll>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              { name: 'Standard Room', price: '₹1,500 / night', note: 'Fan, Double Bed, Attached Bath' },
              { name: 'Deluxe AC Room', price: '₹1,800 / night', note: 'AC, Double Bed, TV, Wi-Fi' },
              { name: 'Premium AC Suite', price: '₹2,500 / night', note: 'AC, King Bed, Sofa, LED Ceiling' },
            ].map((r, i) => (
              <AnimateOnScroll key={r.name} delay={i * 100}>
                <div className="bg-white/8 border border-white/10 rounded-2xl p-6 text-center hover:bg-white/12 hover:border-[#C9A227]/50 transition-all">
                  <h3 className="font-[var(--font-playfair)] font-bold text-white text-lg mb-2">{r.name}</h3>
                  <p className="text-[#C9A227] font-bold text-2xl mb-2">{r.price}</p>
                  <p className="text-white/50 text-xs">{r.note}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA / FORM ── */}
      <section className="py-20 px-4 bg-[#FDF8F0]">
        <div className="max-w-2xl mx-auto">
          <AnimateOnScroll className="text-center mb-10">
            <p className="text-[#C9A227] text-xs tracking-[0.3em] uppercase font-[var(--font-inter)] mb-2">Get a Quote</p>
            <h2 className="font-[var(--font-playfair)] text-4xl font-bold text-[#3D0A0A]">Book Your Event</h2>
            <div className="gold-divider" />
            <p className="text-gray-400 text-sm mt-4">Tell us your requirements and we&apos;ll send a custom quote on WhatsApp</p>
          </AnimateOnScroll>
          <AnimateOnScroll>
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
              <LeadForm />
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  )
}
