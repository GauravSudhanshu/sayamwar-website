import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Cheap Banquet Hall in Patna | Low Budget Event Hall | Sayamwar Hall',
  description: 'Looking for a cheap banquet hall in Patna? Sayamwar Hall offers low budget packages from ₹85,000 for 200–300 guests. AC hall, catering, decoration included. Call 7646028228.',
  keywords: 'cheap banquet hall patna, low budget banquet patna, affordable banquet hall patna, budget event hall patna, low cost wedding hall patna, sasta banquet hall patna',
  alternates: { canonical: 'https://sayamwar.com/cheap-banquet-hall-patna' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the cheapest banquet hall in Patna?',
      acceptedAnswer: { '@type': 'Answer', text: 'Sayamwar Hall & Homestay in Danapur, Patna offers one of the most affordable banquet packages in Patna starting from ₹85,000. This includes AC hall for 200–300 guests, basic decoration, and catering.' },
    },
    {
      '@type': 'Question',
      name: 'What is included in the low budget banquet package?',
      acceptedAnswer: { '@type': 'Answer', text: 'Our budget packages include: AC banquet hall for up to 300 guests, stage decoration, basic catering (veg menu), DJ & sound system, and parking. Call 7646028228 for full package details.' },
    },
    {
      '@type': 'Question',
      name: 'Can I get a banquet hall in Patna under ₹1 lakh?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes! Sayamwar Hall offers birthday and engagement event packages starting from ₹85,000 — well under ₹1 lakh. These include hall, decoration, and basic catering for up to 200 guests.' },
    },
    {
      '@type': 'Question',
      name: 'Is a low budget banquet hall good for weddings?',
      acceptedAnswer: { '@type': 'Answer', text: 'Absolutely. At Sayamwar Hall, even our budget packages include a fully decorated AC hall with professional stage setup, catering, and DJ. You get a premium experience at an affordable price.' },
    },
    {
      '@type': 'Question',
      name: 'How do I book a cheap banquet hall in Patna?',
      acceptedAnswer: { '@type': 'Answer', text: 'Simply call or WhatsApp us at 7646028228. Share your event date and guest count, and we will send you the best available package within your budget. Booking confirmation is done with a small advance.' },
    },
  ],
}

const packages = [
  {
    name: 'Birthday / Engagement',
    price: '₹85,000',
    priceEnd: '₹1,00,000',
    includes: ['AC hall for up to 200 guests', 'Basic stage decoration', 'Veg catering menu', 'DJ & sound system', 'Parking'],
    highlight: false,
  },
  {
    name: 'Wedding / Reception',
    price: '₹1,25,000',
    priceEnd: '₹2,00,000',
    includes: ['AC hall for 200–300 guests', 'Grand floral decoration', 'Veg & non-veg catering', 'DJ & sound system', 'Parking + CCTV'],
    highlight: true,
  },
]

export default function CheapBanquetHallPatnaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#5A0F0F] to-[#7B1818] py-20 px-4 text-center text-white">
        <p className="text-[#C9A84C] text-xs tracking-[0.3em] uppercase mb-4">Affordable • Quality • Memorable</p>
        <h1 className="font-[var(--font-playfair)] text-4xl md:text-5xl font-bold mb-4 leading-tight">
          Cheap Banquet Hall in <span className="text-[#C9A84C]">Patna</span>
        </h1>
        <p className="text-white/70 text-lg max-w-2xl mx-auto mb-6">
          Premium celebrations don't have to cost a fortune. Sayamwar Hall offers low budget banquet packages from ₹85,000 — AC hall, decoration, catering & DJ included.
        </p>
        <p className="text-[#C9A84C] font-bold text-2xl mb-8">Starting from ₹85,000 only</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="tel:7646028228" className="bg-[#C9A84C] hover:bg-[#E8C96A] text-[#3D0A0A] font-bold py-3 px-8 rounded-lg transition-colors">
            Call 7646028228
          </a>
          <a href="https://wa.me/917646028228?text=Hello!%20I%20want%20to%20know%20about%20low%20budget%20banquet%20packages"
            target="_blank" rel="noopener noreferrer"
            className="border border-[#C9A84C] text-[#C9A84C] hover:bg-[#C9A84C] hover:text-[#3D0A0A] font-bold py-3 px-8 rounded-lg transition-colors">
            WhatsApp for Quote
          </a>
        </div>
      </section>

      {/* Value proposition */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#7B1818] mb-4">
            Why Choose Sayamwar Hall for a Low Budget Event?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-12">
            We believe every family deserves a beautiful celebration — regardless of budget. That's why we've designed packages that give you a premium experience at honest prices.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '❄️', title: 'AC Hall', desc: '200–300 guests in cool comfort' },
              { icon: '🎨', title: 'Decoration', desc: 'Stage & floral setup included' },
              { icon: '🍽️', title: 'Catering', desc: 'Veg & non-veg menus' },
              { icon: '🎵', title: 'DJ & Sound', desc: 'Professional audio setup' },
            ].map((item) => (
              <div key={item.title} className="bg-[#F7F2EA] rounded-xl p-6 border border-[#C9A84C]/20">
                <p className="text-4xl mb-3">{item.icon}</p>
                <p className="font-bold text-[#7B1818] text-lg mb-1">{item.title}</p>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-16 px-4 bg-[#F7F2EA]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#7B1818] text-center mb-4">Our Budget Packages</h2>
          <p className="text-gray-600 text-center mb-10">Transparent pricing. No hidden charges.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {packages.map((pkg) => (
              <div key={pkg.name} className={`rounded-2xl p-8 border-2 ${pkg.highlight ? 'border-[#C9A84C] bg-[#7B1818] text-white' : 'border-[#C9A84C]/30 bg-white'}`}>
                <p className={`text-sm font-semibold uppercase tracking-widest mb-2 ${pkg.highlight ? 'text-[#C9A84C]' : 'text-[#7B1818]'}`}>{pkg.name}</p>
                <p className={`text-3xl font-bold mb-1 ${pkg.highlight ? 'text-[#C9A84C]' : 'text-[#7B1818]'}`}>{pkg.price}</p>
                <p className={`text-sm mb-6 ${pkg.highlight ? 'text-white/60' : 'text-gray-500'}`}>to {pkg.priceEnd}</p>
                <ul className="space-y-3">
                  {pkg.includes.map((item) => (
                    <li key={item} className={`flex items-center gap-3 text-sm ${pkg.highlight ? 'text-white/80' : 'text-gray-600'}`}>
                      <span className="text-[#C9A84C]">✓</span> {item}
                    </li>
                  ))}
                </ul>
                <a href="tel:7646028228"
                  className={`mt-8 block text-center font-bold py-3 px-6 rounded-lg transition-colors ${pkg.highlight ? 'bg-[#C9A84C] text-[#3D0A0A] hover:bg-[#E8C96A]' : 'bg-[#7B1818] text-white hover:bg-[#5A0F0F]'}`}>
                  Book This Package
                </a>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-500 text-sm mt-6">Prices vary based on date & guest count. Call for exact quote.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-[#7B1818] text-center mb-10">
            Frequently Asked Questions
          </h2>
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
        <h2 className="text-3xl font-bold mb-4">Get Your Free Quote Today</h2>
        <p className="text-white/70 max-w-xl mx-auto mb-8">
          Tell us your date, event type, and guest count — we'll send you the best package within your budget. No obligation.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="tel:7646028228" className="bg-[#C9A84C] hover:bg-[#E8C96A] text-[#3D0A0A] font-bold py-3 px-8 rounded-lg transition-colors">
            📞 Call 7646028228
          </a>
          <a href="https://wa.me/917646028228?text=Hello!%20I%20want%20a%20low%20budget%20banquet%20package%20in%20Patna"
            target="_blank" rel="noopener noreferrer"
            className="border border-[#C9A84C] text-[#C9A84C] hover:bg-[#C9A84C] hover:text-[#3D0A0A] font-bold py-3 px-8 rounded-lg transition-colors">
            💬 WhatsApp for Quote
          </a>
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-white/50">
          <Link href="/banquet-hall-patna" className="hover:text-[#C9A84C] transition-colors">Banquet Hall Patna</Link>
          <Link href="/banquet-hall-danapur" className="hover:text-[#C9A84C] transition-colors">Banquet Hall Danapur</Link>
          <Link href="/wedding-venue-patna" className="hover:text-[#C9A84C] transition-colors">Wedding Venue Patna</Link>
          <Link href="/packages" className="hover:text-[#C9A84C] transition-colors">View All Packages</Link>
        </div>
      </section>
    </>
  )
}
