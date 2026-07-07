import type { Metadata } from 'next'
import Image from 'next/image'
import AnimateOnScroll from '@/components/AnimateOnScroll'
import LeadForm from '@/components/LeadForm'
import RelatedPages from '@/components/RelatedPages'

export const metadata: Metadata = {
  title: 'Reception Hall in Patna | Wedding Reception Venue Danapur | Sayamwar Hall',
  description: 'Best reception hall in Patna & Danapur for wedding receptions. Grand stage, AC hall for 200–300 guests. All-inclusive reception packages from ₹1,00,000. Call 7646028228.',
  keywords: 'reception hall patna, wedding reception venue patna, reception party hall danapur, reception hall near me patna, wedding reception hall danapur, reception venue patna bihar',
  alternates: { canonical: 'https://sayamwar.com/reception-hall-patna' },
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the cost of reception hall in Patna?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Reception hall packages at Sayamwar Hall in Patna start from ₹1,00,000 for up to 200 guests. The Grand Reception package at ₹1,50,000 covers up to 300 guests with premium decoration, DJ, full dinner buffet, and 4 guest rooms.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is included in the reception package at Sayamwar Hall?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Reception packages include AC hall, grand stage setup with professional lighting, couple\'s entry arrangement, DJ and sound system, full dinner buffet, selfie zone, welcome drinks, security, and guest rooms.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many guests can attend a reception at Sayamwar Hall?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our AC hall can comfortably accommodate 200 to 300 guests for wedding reception events with a grand stage, professional lighting, complete sound system, and ample dining space.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is catering included in the reception package?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, catering is part of all reception packages. We offer Shagun (₹999/plate veg), Vivah (₹1,199/plate veg), and Swayamvar (₹1,399/plate veg) menus with non-veg options. Live counters can be added on request.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where is the best reception hall near me in Patna?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sayamwar Hall & Homestay is at Gola Road, Adarsh Vihar Colony, Lane 5, near T Point, Danapur, Patna — 5 minutes from Danapur railway station and 20 minutes from Patna Junction.',
      },
    },
  ],
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://sayamwar.com' },
    { '@type': 'ListItem', position: 2, name: 'Reception Hall in Patna', item: 'https://sayamwar.com/reception-hall-patna' },
  ],
}

const packages = [
  {
    name: 'Classic Reception',
    price: '₹1,00,000',
    capacity: 'Up to 200 Guests',
    includes: [
      'AC Hall (Full Evening)',
      'Stage & Backdrop Decoration',
      'Couple\'s Entry Setup',
      'DJ & Professional Lighting',
      'Veg Dinner Buffet',
      'Selfie Point',
      'Guard / Bouncer',
      'Night Coffee',
    ],
    popular: false,
  },
  {
    name: 'Grand Reception',
    price: '₹1,50,000',
    capacity: 'Up to 300 Guests',
    includes: [
      'AC Hall (Full Day + Evening)',
      'Premium Stage & Backdrop Setup',
      'Grand Couple\'s Entry Arrangement',
      'Professional DJ + Fog Machine',
      'Veg + Non-Veg Buffet',
      'Live Snacks Counter',
      'Selfie Zone + Cake Table Setup',
      'Welcome Drink for Guests',
      'Guard / Bouncer',
      '4 Guest Rooms Included',
    ],
    popular: true,
  },
]

const features = [
  { icon: '🎭', title: 'Grand Stage Setup', desc: 'Elevated, beautifully decorated stage with LED backdrop and professional lighting for the couple.' },
  { icon: '✨', title: 'Couple\'s Entry Arrangement', desc: 'Dramatic entry setup with DJ coordination, lighting effects, and petal shower on request.' },
  { icon: '🍽️', title: 'Full Dinner Buffet', desc: 'Complete veg and non-veg buffet with live counters — guests eat while the couple is on stage.' },
  { icon: '🎵', title: 'DJ & Sound System', desc: 'Professional DJ, wireless microphone, and complete PA system throughout the reception evening.' },
  { icon: '📸', title: 'Selfie Zone', desc: 'Custom selfie backdrop with the couple\'s name — the most-photographed spot at every reception.' },
  { icon: '🛏️', title: 'On-Site Guest Rooms', desc: '4 rooms included in Grand package. Additional AC & non-AC rooms available from ₹1,500/night.' },
]

const timeline = [
  { time: '6:00 PM', event: 'Guests arrive · Welcome drinks · Background music' },
  { time: '7:30 PM', event: 'Couple\'s grand entry · DJ + lighting intro' },
  { time: '7:30 – 9:00 PM', event: 'Stage time — family photos, blessings, gift exchange' },
  { time: '8:30 PM', event: 'Dinner buffet opens' },
  { time: '9:00 PM', event: 'Cake cutting ceremony' },
  { time: '10:30 PM', event: 'Event close · Guest farewells' },
]

export default function ReceptionHallPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* Hero */}
      <section className="relative py-28 px-4 text-center text-white overflow-hidden">
        <Image src="/pkg-reception.jpg" alt="Reception Hall in Patna" fill className="object-cover" sizes="100vw" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A0303]/75 via-[#1A0303]/65 to-[#1A0303]/85" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <p className="text-[#C9A84C] text-xs tracking-[0.35em] uppercase font-[var(--font-inter)] mb-3">Danapur · Patna · Bihar</p>
          <h1 className="font-[var(--font-playfair)] text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Reception Hall in <span className="text-[#C9A84C]">Patna</span>
            <br />
            <span className="text-2xl md:text-3xl text-white/80 font-normal">Wedding Reception Venue Danapur</span>
          </h1>
          <div className="w-16 h-px bg-[#C9A84C] mx-auto mb-5" />
          <p className="text-white/70 text-base md:text-lg max-w-xl mx-auto mb-3">
            A grand AC hall with stunning stage decoration, couple&apos;s entry setup, full dinner buffet, and DJ — everything for a perfect wedding reception in Patna.
          </p>
          <p className="text-[#C9A84C] font-bold text-lg mb-8">Packages From ₹1,00,000 · No Hidden Charges</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/917646028228?text=Hello!%20I%20want%20to%20book%20a%20Wedding%20Reception%20at%20Sayamwar%20Hall%2C%20Patna"
              target="_blank" rel="noopener noreferrer"
              className="px-7 py-3 bg-green-500 hover:bg-green-600 text-white rounded-xl font-bold transition-all hover:scale-105"
            >
              💬 Book via WhatsApp
            </a>
            <a href="tel:7646028228" className="px-7 py-3 bg-[#C9A84C] text-[#3D0A0A] rounded-xl font-bold hover:bg-[#E8C547] transition-all hover:scale-105">
              📞 Call: 7646028228
            </a>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-16 px-4 bg-[#FDF8F0]">
        <div className="max-w-4xl mx-auto text-center">
          <AnimateOnScroll>
            <p className="text-[#C9A84C] text-xs tracking-[0.35em] uppercase font-[var(--font-inter)] mb-3">Why Choose Sayamwar Hall</p>
            <h2 className="font-[var(--font-playfair)] text-3xl md:text-4xl font-bold text-[#3D0A0A] mb-4">
              Patna&apos;s Finest Reception Venue
            </h2>
            <div className="w-12 h-px bg-[#C9A84C] mx-auto mb-6" />
            <p className="text-gray-600 text-base leading-relaxed max-w-3xl mx-auto mb-8">
              Sayamwar Hall &amp; Homestay is the most sought-after <strong>reception hall in Patna</strong> for wedding receptions and post-wedding celebrations. Our <strong>reception venue in Danapur</strong> features a grand stage for the couple, professional DJ lighting, a complete dinner buffet for 200–300 guests, and on-site rooms — making it the best <strong>reception hall near you in Patna</strong>.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { n: '200+', l: 'Events Hosted' },
                { n: '300', l: 'Guest Capacity' },
                { n: '₹1L', l: 'Starts From' },
                { n: '4.8★', l: 'Google Rating' },
              ].map((s) => (
                <div key={s.l} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                  <p className="text-3xl font-bold text-[#C9A84C]">{s.n}</p>
                  <p className="text-gray-500 text-xs uppercase tracking-wide mt-1">{s.l}</p>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <AnimateOnScroll className="text-center mb-10">
            <h2 className="font-[var(--font-playfair)] text-3xl font-bold text-[#3D0A0A]">
              Everything for Your Perfect Reception
            </h2>
            <div className="w-12 h-px bg-[#C9A84C] mx-auto mt-4" />
          </AnimateOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <AnimateOnScroll key={f.title} delay={i * 80}>
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex gap-4 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                  <span className="text-4xl flex-shrink-0">{f.icon}</span>
                  <div>
                    <h3 className="font-bold text-[#7B1818] mb-1">{f.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Reception Timeline */}
      <section className="py-16 px-4 bg-[#3D0A0A]">
        <div className="max-w-3xl mx-auto">
          <AnimateOnScroll className="text-center mb-10">
            <p className="text-[#C9A84C] text-xs tracking-[0.35em] uppercase font-[var(--font-inter)] mb-3">Event Flow</p>
            <h2 className="font-[var(--font-playfair)] text-3xl font-bold text-white">
              Typical Reception Evening Schedule
            </h2>
            <div className="w-12 h-px bg-[#C9A84C] mx-auto mt-4" />
          </AnimateOnScroll>
          <div className="space-y-4">
            {timeline.map((t, i) => (
              <AnimateOnScroll key={t.time} delay={i * 80}>
                <div className="flex gap-5 items-start">
                  <div className="flex-shrink-0 w-24 text-right">
                    <span className="text-[#C9A84C] font-bold text-sm">{t.time}</span>
                  </div>
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div className="w-3 h-3 rounded-full bg-[#C9A84C] mt-0.5" />
                    {i < timeline.length - 1 && <div className="w-px flex-1 min-h-[32px] bg-[#C9A84C]/20 mt-1" />}
                  </div>
                  <p className="text-white/70 text-sm leading-relaxed pb-4">{t.event}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-16 px-4 bg-[#FDF8F0]">
        <div className="max-w-4xl mx-auto">
          <AnimateOnScroll className="text-center mb-12">
            <p className="text-[#C9A84C] text-xs tracking-[0.35em] uppercase font-[var(--font-inter)] mb-3">Transparent Pricing</p>
            <h2 className="font-[var(--font-playfair)] text-3xl md:text-4xl font-bold text-[#3D0A0A]">
              Reception Packages in Patna
            </h2>
            <div className="w-12 h-px bg-[#C9A84C] mx-auto mt-4 mb-4" />
            <p className="text-gray-500 text-sm">All-inclusive. No hidden charges. Customization available.</p>
          </AnimateOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {packages.map((pkg, i) => (
              <AnimateOnScroll key={pkg.name} delay={i * 120}>
                <div className={`bg-white rounded-2xl overflow-hidden shadow-md border-2 ${pkg.popular ? 'border-[#C9A84C]' : 'border-gray-100'} relative flex flex-col`}>
                  {pkg.popular && (
                    <div className="bg-[#C9A84C] text-[#3D0A0A] text-center text-xs font-bold py-1.5 tracking-wide">
                      ⭐ MOST POPULAR
                    </div>
                  )}
                  <div className="p-7 flex flex-col flex-1">
                    <h3 className="font-[var(--font-playfair)] font-bold text-[#7B1818] text-xl mb-1">{pkg.name}</h3>
                    <p className="text-3xl font-bold text-[#C9A84C] mb-1">{pkg.price}</p>
                    <p className="text-gray-500 text-sm mb-5">{pkg.capacity}</p>
                    <ul className="space-y-2.5 mb-7 flex-1">
                      {pkg.includes.map((item) => (
                        <li key={item} className="text-sm text-gray-600 flex gap-2.5">
                          <span className="text-green-500 font-bold flex-shrink-0">✓</span> {item}
                        </li>
                      ))}
                    </ul>
                    <a
                      href={`https://wa.me/917646028228?text=Hello!%20I%20want%20to%20book%20${encodeURIComponent(pkg.name)}%20at%20Sayamwar%20Hall%2C%20Patna`}
                      target="_blank" rel="noopener noreferrer"
                      className="block text-center w-full py-3 bg-[#7B1818] hover:bg-[#5A0F0F] text-white rounded-xl text-sm font-bold transition-colors"
                    >
                      Book via WhatsApp →
                    </a>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
          <AnimateOnScroll>
            <p className="text-center text-gray-400 text-xs mt-6">* Prices are indicative. Final quote based on date, guest count & requirements.</p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-[#FDF8F0]">
        <div className="max-w-3xl mx-auto">
          <AnimateOnScroll className="text-center mb-10">
            <h2 className="font-[var(--font-playfair)] text-3xl font-bold text-[#3D0A0A]">
              Frequently Asked Questions
            </h2>
            <div className="w-12 h-px bg-[#C9A84C] mx-auto mt-4" />
          </AnimateOnScroll>
          <div className="space-y-4">
            {[
              {
                q: 'What is the cost of reception hall in Patna?',
                a: 'Reception packages at Sayamwar Hall start from ₹1,00,000 for up to 200 guests (Classic) and ₹1,50,000 for up to 300 guests (Grand) — including stage decoration, DJ, dinner buffet, selfie zone, and security.',
              },
              {
                q: 'What is included in the reception package?',
                a: 'Our packages include AC hall, grand stage setup with LED lighting, couple\'s entry arrangement, DJ and sound system, full dinner buffet, selfie zone, night coffee, guard/bouncer, and 4 guest rooms in the Grand package.',
              },
              {
                q: 'How many guests can attend the reception?',
                a: 'Our AC hall comfortably seats 200–300 guests with a grand stage, professional lighting, DJ, and ample dining space for a formal reception dinner.',
              },
              {
                q: 'Is catering included in the reception package?',
                a: 'Yes — choose from Shagun (₹999/plate veg), Vivah (₹1,199/plate veg), or Swayamvar (₹1,399/plate veg). Non-veg options and live counters are available. In-house catering — no outside entry charges.',
              },
              {
                q: 'Where is the best reception hall near me in Patna?',
                a: 'Sayamwar Hall is at Gola Road, Adarsh Vihar Colony, Lane 5, near T Point, Danapur — 5 minutes from Danapur station and 20 minutes from Patna Junction. Easily accessible from Boring Road, Saguna More, and Patna city.',
              },
            ].map((item) => (
              <details key={item.q} className="bg-white rounded-xl shadow-sm border border-gray-100 group">
                <summary className="px-6 py-4 font-semibold text-[#7B1818] cursor-pointer list-none flex justify-between items-center">
                  {item.q}
                  <span className="text-[#C9A84C] group-open:rotate-180 transition-transform duration-300 flex-shrink-0 ml-3">▼</span>
                </summary>
                <p className="px-6 pb-5 text-gray-600 text-sm leading-relaxed">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <RelatedPages links={[
        { href: '/wedding-venue-patna', label: 'Wedding Venue in Patna' },
        { href: '/engagement-hall-patna', label: 'Engagement Hall in Patna' },
        { href: '/rooms-in-patna', label: 'Rooms in Patna' },
        { href: '/packages', label: 'Packages & Pricing' },
      ]} />

      {/* Lead Form */}
      <section className="py-16 px-4 bg-gradient-to-br from-[#5A0F0F] to-[#7B1818]">
        <div className="max-w-2xl mx-auto">
          <AnimateOnScroll className="text-center mb-10">
            <h2 className="font-[var(--font-playfair)] text-3xl font-bold text-white mb-2">
              Book Reception Hall in Patna
            </h2>
            <p className="text-white/60 text-sm">Share your details — we&apos;ll respond on WhatsApp within minutes</p>
          </AnimateOnScroll>
          <AnimateOnScroll>
            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <LeadForm eventType="Reception" />
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  )
}
