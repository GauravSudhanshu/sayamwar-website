import type { Metadata } from 'next'
import Image from 'next/image'
import AnimateOnScroll from '@/components/AnimateOnScroll'
import LeadForm from '@/components/LeadForm'
import RelatedPages from '@/components/RelatedPages'

export const metadata: Metadata = {
  title: 'Engagement Hall in Patna | Ring Ceremony Venue Danapur | Sayamwar Hall',
  description: 'Best engagement hall in Patna & Danapur. Beautiful ring ceremony & sagai venue for 50–300 guests. All-inclusive engagement packages from ₹85,000. Call 7646028228.',
  keywords: 'engagement hall patna, ring ceremony hall patna, sagai venue patna, engagement venue danapur, ring ceremony venue patna, engagement party hall patna, sagai hall near me patna',
  alternates: { canonical: 'https://sayamwar.com/engagement-hall-patna' },
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the cost of engagement hall in Patna?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Engagement hall packages at Sayamwar Hall in Patna start from ₹85,000 for up to 150 guests, and go up to ₹1,25,000 for up to 300 guests. Packages include AC hall, floral decoration, mandap, selfie point, DJ, and catering.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is included in the engagement package at Sayamwar Hall?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Engagement packages at Sayamwar Hall include AC hall, stage and mandap decoration, ring exchange setup, selfie point, DJ and sound system, catering, security/bouncer, and on-site guest rooms.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many guests can attend an engagement at Sayamwar Hall?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our AC hall comfortably accommodates 50 to 300 guests for engagement and ring ceremony events. The hall has professional lighting, a decorated stage, and complete sound system.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is catering available for engagement events in Patna?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We offer three catering menus — Shagun (₹999/plate veg), Vivah (₹1,199/plate veg), and Swayamvar (₹1,399/plate veg), with non-veg options also available. In-house catering with no outside setup charges.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where is the best engagement hall near me in Patna?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sayamwar Hall & Homestay is located at Gola Road, Adarsh Vihar Colony, Lane 5, near T Point, Danapur, Patna — just 5 minutes from Danapur railway station and 20 minutes from Patna Junction.',
      },
    },
  ],
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://sayamwar.com' },
    { '@type': 'ListItem', position: 2, name: 'Engagement Hall in Patna', item: 'https://sayamwar.com/engagement-hall-patna' },
  ],
}

const packages = [
  {
    name: 'Classic Engagement',
    price: '₹85,000',
    capacity: 'Up to 150 Guests',
    includes: [
      'AC Hall (Full Day)',
      'Stage & Mandap Decoration',
      'Ring Exchange Setup',
      'Selfie Point',
      'DJ & Sound System',
      'Veg Dinner Buffet',
      'Guard / Bouncer',
    ],
    popular: false,
  },
  {
    name: 'Grand Engagement',
    price: '₹1,25,000',
    capacity: 'Up to 300 Guests',
    includes: [
      'AC Hall (Full Day)',
      'Premium Floral Decoration',
      'Mandap & Ring Exchange Setup',
      'Selfie Point + Photo Booth',
      'Professional DJ & Lighting',
      'Veg + Non-Veg Buffet',
      'Live Snacks Counter',
      'Guard / Bouncer',
      '2 Guest Rooms Included',
    ],
    popular: true,
  },
]

const features = [
  { icon: '💍', title: 'Ring Exchange Setup', desc: 'Beautifully decorated ring exchange platform with floral arrangements and professional lighting.' },
  { icon: '🌸', title: 'Floral Mandap', desc: 'Custom-designed mandap with fresh flowers matching your colour theme.' },
  { icon: '📸', title: 'Selfie Point', desc: 'Instagrammable selfie zones with the couple\'s name and custom backdrop for memorable photos.' },
  { icon: '🎵', title: 'DJ & Music', desc: 'Professional DJ and complete sound system — pre-engagement music, entry songs, and full evening entertainment.' },
  { icon: '👨‍🍳', title: 'In-House Catering', desc: 'Full veg and non-veg buffet prepared by experienced chefs with live counters on request.' },
  { icon: '🛏️', title: 'On-Site Guest Rooms', desc: 'AC and non-AC rooms for the couple, parents, and out-of-town family — all under one roof.' },
]

export default function EngagementHallPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* Hero */}
      <section className="relative py-28 px-4 text-center text-white overflow-hidden">
        <Image src="/pkg-engagement.jpg" alt="Engagement Hall in Patna" fill className="object-cover" sizes="100vw" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A0303]/75 via-[#1A0303]/65 to-[#1A0303]/85" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <p className="text-[#C9A84C] text-xs tracking-[0.35em] uppercase font-[var(--font-inter)] mb-3">Danapur · Patna · Bihar</p>
          <h1 className="font-[var(--font-playfair)] text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Engagement Hall in <span className="text-[#C9A84C]">Patna</span>
            <br />
            <span className="text-2xl md:text-3xl text-white/80 font-normal">Ring Ceremony & Sagai Venue</span>
          </h1>
          <div className="w-16 h-px bg-[#C9A84C] mx-auto mb-5" />
          <p className="text-white/70 text-base md:text-lg max-w-xl mx-auto mb-3">
            A beautifully decorated AC hall for your ring ceremony in Danapur — with floral mandap, selfie point, DJ, and catering all arranged for you.
          </p>
          <p className="text-[#C9A84C] font-bold text-lg mb-8">Packages From ₹85,000 · No Hidden Charges</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/917646028228?text=Hello!%20I%20want%20to%20book%20an%20Engagement%20%2F%20Ring%20Ceremony%20at%20Sayamwar%20Hall%2C%20Patna"
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
              Patna&apos;s Best Engagement Hall
            </h2>
            <div className="w-12 h-px bg-[#C9A84C] mx-auto mb-6" />
            <p className="text-gray-600 text-base leading-relaxed max-w-3xl mx-auto mb-8">
              Sayamwar Hall &amp; Homestay is the most trusted <strong>engagement hall in Patna</strong> for ring ceremonies and sagai events. Our <strong>engagement venue in Danapur</strong> offers a fully air-conditioned hall for 50–300 guests, complete decoration, professional DJ, and all-inclusive catering — so your family can focus entirely on the celebration.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { n: '200+', l: 'Events Hosted' },
                { n: '300', l: 'Guest Capacity' },
                { n: '₹85K', l: 'Starts From' },
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
              Everything for Your Ring Ceremony in Patna
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

      {/* Packages */}
      <section className="py-16 px-4 bg-[#3D0A0A]">
        <div className="max-w-4xl mx-auto">
          <AnimateOnScroll className="text-center mb-12">
            <p className="text-[#C9A84C] text-xs tracking-[0.35em] uppercase font-[var(--font-inter)] mb-3">Transparent Pricing</p>
            <h2 className="font-[var(--font-playfair)] text-3xl md:text-4xl font-bold text-white">
              Engagement Packages in Patna
            </h2>
            <div className="w-12 h-px bg-[#C9A84C] mx-auto mt-4 mb-4" />
            <p className="text-white/50 text-sm">All-inclusive. No hidden charges. Customization available.</p>
          </AnimateOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {packages.map((pkg, i) => (
              <AnimateOnScroll key={pkg.name} delay={i * 120}>
                <div className={`bg-white rounded-2xl overflow-hidden border-2 ${pkg.popular ? 'border-[#C9A84C]' : 'border-white/10'} relative flex flex-col`}>
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
                      href={`https://wa.me/917646028228?text=Hello!%20I%20want%20to%20book%20${encodeURIComponent(pkg.name)}%20engagement%20package%20at%20Sayamwar%20Hall`}
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
            <p className="text-center text-white/30 text-xs mt-6">* Prices are indicative. Final quote based on date, guest count & requirements.</p>
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
                q: 'What is the cost of engagement hall in Patna?',
                a: 'Engagement packages at Sayamwar Hall start from ₹85,000 for up to 150 guests and go up to ₹1,25,000 for up to 300 guests — including AC hall, floral decoration, mandap, selfie point, DJ, catering, and security.',
              },
              {
                q: 'What is included in the engagement package?',
                a: 'Our all-inclusive engagement packages include AC hall, stage and mandap decoration, ring exchange setup, selfie point, DJ and sound system, dinner buffet, guard/bouncer, and on-site guest rooms in the Grand package.',
              },
              {
                q: 'How many guests can attend the engagement ceremony?',
                a: 'Sayamwar Hall comfortably accommodates 50 to 300 guests for ring ceremony and sagai events in a fully air-conditioned hall with professional lighting, stage setup, and complete sound system.',
              },
              {
                q: 'Is catering available for engagement events in Patna?',
                a: 'Yes — we offer Shagun (₹999/plate veg), Vivah (₹1,199/plate veg), and Swayamvar (₹1,399/plate veg) menus with non-veg options available. In-house catering with no outside setup or entry charges.',
              },
              {
                q: 'Where is the engagement hall near me in Patna?',
                a: 'Sayamwar Hall is at Gola Road, Adarsh Vihar Colony, Lane 5, near T Point, Danapur — 5 minutes from Danapur railway station and 20 minutes from Patna Junction. Easily accessible from Boring Road, Saguna More, and Patna city.',
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
        { href: '/reception-hall-patna', label: 'Reception Hall in Patna' },
        { href: '/rooms-in-patna', label: 'Rooms in Patna' },
        { href: '/packages', label: 'Packages & Pricing' },
      ]} />

      {/* Lead Form */}
      <section className="py-16 px-4 bg-gradient-to-br from-[#5A0F0F] to-[#7B1818]">
        <div className="max-w-2xl mx-auto">
          <AnimateOnScroll className="text-center mb-10">
            <h2 className="font-[var(--font-playfair)] text-3xl font-bold text-white mb-2">
              Book Engagement Hall in Patna
            </h2>
            <p className="text-white/60 text-sm">Share your details — we&apos;ll respond on WhatsApp within minutes</p>
          </AnimateOnScroll>
          <AnimateOnScroll>
            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <LeadForm eventType="Engagement" />
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  )
}
