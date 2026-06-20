import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Banquet Hall in Danapur | Best Event Venue Near Danapur | Sayamwar Hall',
  description: 'Looking for a banquet hall in Danapur? Sayamwar Hall & Homestay is Danapur\'s top venue for weddings, receptions, birthdays & corporate events. AC hall for 200–300 guests. Call 7646028228.',
  keywords: 'banquet hall danapur, banquet hall near danapur, event hall danapur, wedding hall danapur, party hall danapur patna, banquet danapur bihar',
  alternates: { canonical: 'https://sayamwar.com/banquet-hall-danapur' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Which is the best banquet hall in Danapur?',
      acceptedAnswer: { '@type': 'Answer', text: 'Sayamwar Hall & Homestay on Gola Road, Danapur is the top-rated banquet hall in Danapur. It offers a fully AC hall for 200–300 guests with complete event services including catering, decoration, DJ, and parking.' },
    },
    {
      '@type': 'Question',
      name: 'How far is Sayamwar Hall from Danapur railway station?',
      acceptedAnswer: { '@type': 'Answer', text: 'Sayamwar Hall is located on Gola Road, Adarsh Vihar Colony, just 2–3 km from Danapur railway station — approximately 5–10 minutes by auto or cab.' },
    },
    {
      '@type': 'Question',
      name: 'What events can be held at Sayamwar Hall Danapur?',
      acceptedAnswer: { '@type': 'Answer', text: 'Sayamwar Hall hosts weddings, receptions, engagement ceremonies, birthday parties, corporate events, and social gatherings. The hall can accommodate 200–300 guests.' },
    },
    {
      '@type': 'Question',
      name: 'What is the package price for banquet hall in Danapur?',
      acceptedAnswer: { '@type': 'Answer', text: 'Sayamwar Hall offers event packages starting from ₹85,000. Packages include hall booking, decoration, catering, and DJ. Contact 7646028228 for a custom quote.' },
    },
  ],
}

const features = [
  { title: 'AC Banquet Hall', desc: 'Fully air-conditioned hall for 200–300 guests, perfect for any season.' },
  { title: 'Prime Danapur Location', desc: 'On Gola Road — easily accessible from Danapur, Patna Sahib, and Boring Road.' },
  { title: 'Complete Catering', desc: 'Veg & non-veg menus crafted for Bihari tastes. Custom menus on request.' },
  { title: 'Grand Stage Decoration', desc: 'Floral, LED, and themed decoration packages for every occasion.' },
  { title: 'DJ & Sound System', desc: 'Professional DJ setup with high-quality sound for a perfect celebration.' },
  { title: 'Ample Parking', desc: 'Spacious parking area for 50+ vehicles right on the premises.' },
]

export default function BanquetHallDanpurPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#5A0F0F] to-[#7B1818] py-20 px-4 text-center text-white">
        <p className="text-[#C9A84C] text-xs tracking-[0.3em] uppercase mb-4">Danapur, Patna</p>
        <h1 className="font-[var(--font-playfair)] text-4xl md:text-5xl font-bold mb-4 leading-tight">
          Best Banquet Hall in <span className="text-[#C9A84C]">Danapur</span>
        </h1>
        <p className="text-white/70 text-lg max-w-2xl mx-auto mb-8">
          Sayamwar Hall & Homestay — Danapur's premier venue for weddings, receptions, birthdays and all celebrations. Fully AC hall for 200–300 guests, right on Gola Road.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="tel:7646028228" className="bg-[#C9A84C] hover:bg-[#E8C96A] text-[#3D0A0A] font-bold py-3 px-8 rounded-lg transition-colors">
            Call 7646028228
          </a>
          <a href="https://wa.me/917646028228" target="_blank" rel="noopener noreferrer"
            className="border border-[#C9A84C] text-[#C9A84C] hover:bg-[#C9A84C] hover:text-[#3D0A0A] font-bold py-3 px-8 rounded-lg transition-colors">
            WhatsApp Us
          </a>
        </div>
      </section>

      {/* Why Sayamwar for Danapur */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-[#7B1818] text-center mb-4">
            Why Sayamwar Hall is Danapur's Top Choice?
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Located in the heart of Danapur, Sayamwar Hall combines elegance, affordability and complete event services — everything you need for an unforgettable celebration.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <div key={f.title} className="bg-[#F7F2EA] rounded-xl p-6 border border-[#C9A84C]/20">
                <h3 className="font-bold text-[#7B1818] text-lg mb-2">{f.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location highlight */}
      <section className="py-16 px-4 bg-[#F7F2EA]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#7B1818] mb-6">
            Conveniently Located in Danapur
          </h2>
          <p className="text-gray-600 text-lg mb-4">
            Gola Road, Adarsh Vihar Colony, Lane 5 — near T Point, beside Hotel King Regency
          </p>
          <p className="text-gray-500 mb-8">
            Just minutes away from Danapur railway station, Boring Road, and Patna city centre. Easy to reach for guests coming from all parts of Patna and beyond.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
            {[
              { place: 'Danapur Station', time: '5 min' },
              { place: 'Patna Junction', time: '20 min' },
              { place: 'Boring Road', time: '15 min' },
            ].map((item) => (
              <div key={item.place} className="bg-white rounded-xl p-5 shadow-sm border border-[#C9A84C]/20">
                <p className="text-[#C9A84C] font-bold text-2xl">{item.time}</p>
                <p className="text-gray-600 text-sm mt-1">from {item.place}</p>
              </div>
            ))}
          </div>
          <a href="https://www.google.com/maps/place/Sayamwar+Hall+%26+Homestay/@25.6292816,85.0523556,17z"
            target="_blank" rel="noopener noreferrer"
            className="inline-block bg-[#7B1818] hover:bg-[#5A0F0F] text-white font-bold py-3 px-8 rounded-lg transition-colors">
            Get Directions on Google Maps
          </a>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#7B1818] mb-4">Transparent Pricing</h2>
          <p className="text-gray-600 mb-10">No hidden charges. What you see is what you pay.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { event: 'Wedding / Reception', price: '₹1,25,000 – ₹2,00,000', note: 'Full day booking' },
              { event: 'Engagement Ceremony', price: '₹85,000 – ₹1,25,000', note: 'Half / full day' },
              { event: 'Birthday Party', price: '₹85,000 – ₹1,00,000', note: 'Evening booking' },
              { event: 'Corporate Event', price: 'Custom Quote', note: 'Call for details' },
            ].map((p) => (
              <div key={p.event} className="bg-[#F7F2EA] rounded-xl p-6 border border-[#C9A84C]/20 text-left">
                <p className="font-bold text-[#7B1818] text-lg mb-1">{p.event}</p>
                <p className="text-[#C9A84C] font-bold text-xl mb-1">{p.price}</p>
                <p className="text-gray-500 text-sm">{p.note}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-500 text-sm mt-6">Prices vary based on date, guest count, and package selected. Call for exact quote.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-[#F7F2EA]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-[#7B1818] text-center mb-10">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {jsonLd.mainEntity.map((faq) => (
              <details key={faq.name} className="bg-white rounded-xl border border-[#C9A84C]/20 group">
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
        <h2 className="text-3xl font-bold mb-4">Book Danapur's Best Banquet Hall</h2>
        <p className="text-white/70 max-w-xl mx-auto mb-8">
          Dates fill up fast — especially weekends. Call or WhatsApp now to check availability and get a free quote.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="tel:7646028228" className="bg-[#C9A84C] hover:bg-[#E8C96A] text-[#3D0A0A] font-bold py-3 px-8 rounded-lg transition-colors">
            📞 Call 7646028228
          </a>
          <a href="https://wa.me/917646028228?text=Hello!%20I%20want%20to%20book%20banquet%20hall%20in%20Danapur"
            target="_blank" rel="noopener noreferrer"
            className="border border-[#C9A84C] text-[#C9A84C] hover:bg-[#C9A84C] hover:text-[#3D0A0A] font-bold py-3 px-8 rounded-lg transition-colors">
            💬 WhatsApp Now
          </a>
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-white/50">
          <Link href="/banquet-hall-patna" className="hover:text-[#C9A84C] transition-colors">Banquet Hall Patna</Link>
          <Link href="/wedding-venue-patna" className="hover:text-[#C9A84C] transition-colors">Wedding Venue Patna</Link>
          <Link href="/birthday-party-hall-patna" className="hover:text-[#C9A84C] transition-colors">Birthday Hall Patna</Link>
          <Link href="/packages" className="hover:text-[#C9A84C] transition-colors">View All Packages</Link>
        </div>
      </section>
    </>
  )
}
