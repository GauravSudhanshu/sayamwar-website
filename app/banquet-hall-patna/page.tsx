import type { Metadata } from 'next'
import LeadForm from '@/components/LeadForm'

export const metadata: Metadata = {
  title: 'Best Banquet Hall in Patna | Low Budget | AC Hall for 300 Guests | Sayamwar Hall',
  description: 'Best banquet hall in Patna & Danapur. Low budget packages from ₹85,000. Fully AC hall for 200–300 guests. Best venue for weddings, birthdays & receptions near you. Call 7646028228.',
  keywords: 'best banquet hall in patna, banquet hall in patna, banquet near me patna, low budget banquet patna, top banquet hall patna, banquet hall danapur, cheap banquet hall patna, affordable banquet patna, wedding banquet hall patna, best banquet hall near me patna, banquet hall for 300 guests patna, ac banquet hall patna, banquet hall gola road patna',
  alternates: { canonical: 'https://sayamwar.com/banquet-hall-patna' },
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://sayamwar.com' },
    { '@type': 'ListItem', position: 2, name: 'Banquet Hall in Patna', item: 'https://sayamwar.com/banquet-hall-patna' },
  ],
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Which is the best banquet hall in Patna?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sayamwar Hall & Homestay in Danapur, Patna is one of the best banquet halls offering AC hall for 200–300 guests, full catering, stage decoration, DJ, and rooms — all at affordable prices starting from ₹85,000.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the cost of banquet hall in Patna?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Banquet hall cost in Patna at Sayamwar Hall starts from ₹85,000 for birthday and engagement events. Wedding packages start at ₹1,51,000. All packages are all-inclusive with no hidden charges.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is there a low budget banquet hall in Patna?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, Sayamwar Hall & Homestay offers low budget banquet hall options in Patna starting at ₹85,000. This includes stage decoration, lawn decoration, mandap, DJ, guard, food counter decor, and 4 rooms.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where is Sayamwar Hall located in Patna?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sayamwar Hall & Homestay is located at Gola Road, Adarsh Vihar Colony, Lane Number 5, near T Point, beside Hotel King Regency, Danapur, Patna, Bihar 801503.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the capacity of banquet hall in Patna at Sayamwar Hall?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sayamwar Hall can accommodate 200 to 300 guests comfortably in a fully air-conditioned setup with professional lighting and sound system.',
      },
    },
  ],
}

const events = [
  { icon: '💒', label: 'Weddings' },
  { icon: '💍', label: 'Engagements' },
  { icon: '🎂', label: 'Birthday Parties' },
  { icon: '👔', label: 'Corporate Events' },
  { icon: '🎓', label: 'Graduation Parties' },
  { icon: '👶', label: 'Baby Showers' },
  { icon: '🙏', label: 'Religious Functions' },
  { icon: '🎉', label: 'Social Gatherings' },
]

export default function BanquetHallPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <section className="bg-gradient-to-br from-[#5A0F0F] to-[#7B1818] py-20 px-4 text-center text-white">
        <p className="text-[#C9A84C] text-sm tracking-widest uppercase mb-3">Danapur · Patna · Bihar</p>
        <h1 className="font-[var(--font-playfair)] text-4xl md:text-5xl font-bold mb-4">
          Best Banquet Hall in <span className="text-[#C9A84C]">Patna</span>
        </h1>
        <p className="text-white/80 text-lg max-w-2xl mx-auto mb-2">
          Low budget banquet hall near you — AC hall for 200–300 guests with full decoration, catering & DJ.
        </p>
        <p className="text-[#C9A84C] font-bold mb-8">Packages Starting ₹85,000 · No Hidden Charges</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://wa.me/917646028228?text=Hello!%20I%20want%20to%20book%20Banquet%20Hall%20at%20Sayamwar"
            target="_blank" rel="noopener noreferrer"
            className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg font-bold transition-colors"
          >
            💬 Check Availability
          </a>
          <a href="tel:7646028228" className="px-6 py-3 bg-[#C9A84C] text-[#5A0F0F] rounded-lg font-bold hover:bg-[#E8C547] transition-colors">
            📞 7646028228
          </a>
        </div>
      </section>

      {/* Why choose us — keyword-rich */}
      <section className="py-14 px-4 bg-[#FDF8F0]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#7B1818] mb-4">Why Sayamwar Hall is Patna&apos;s Best Banquet?</h2>
          <p className="text-gray-600 text-base leading-relaxed max-w-3xl mx-auto mb-8">
            Sayamwar Hall &amp; Homestay is the most trusted <strong>banquet hall in Patna</strong> for weddings, birthday parties, receptions and engagements. Located on Gola Road, Danapur — just minutes from Patna city — we offer the <strong>best banquet hall near you</strong> with complete event management at <strong>low budget prices</strong>. Our all-inclusive packages mean no surprises — everything from stage decoration to DJ is covered.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
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
        </div>
      </section>

      {/* Hall Features */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#7B1818] mb-10">
            Banquet Hall Highlights — Patna&apos;s Top Venue
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: '👥', title: 'Capacity: 200–300 Guests', desc: 'Spacious banquet hall in Patna accommodating all group sizes — from intimate gatherings to grand weddings.' },
              { icon: '❄️', title: 'Fully Air Conditioned Hall', desc: 'Powerful central AC keeps guests comfortable in every season — a premium feature in Patna banquets.' },
              { icon: '✨', title: 'Professional Decoration', desc: 'Customizable stage, lawn & mandap decor themes for weddings, birthdays and receptions in Patna.' },
              { icon: '👨‍🍳', title: 'In-House Catering', desc: 'Veg & non-veg multi-cuisine menu by experienced chefs. Food packages from ₹999/plate.' },
              { icon: '🎵', title: 'DJ, Sound & Lighting', desc: 'Professional DJ, sound system and LED stage lighting included — no extra cost.' },
              { icon: '🚗', title: 'Free Ample Parking', desc: 'Free parking for 50+ vehicles within premises — rare convenience in Patna banquet venues.' },
            ].map((f) => (
              <div key={f.title} className="flex gap-4 bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                <span className="text-3xl flex-shrink-0">{f.icon}</span>
                <div>
                  <h3 className="font-bold text-[#7B1818] mb-1">{f.title}</h3>
                  <p className="text-gray-500 text-sm">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events Hosted */}
      <section className="py-12 px-4 bg-[#7B1818]">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-2">All Types of Events in Patna</h2>
          <p className="text-white/60 text-sm mb-8">Your banquet hall near Patna for every occasion</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {events.map((e) => (
              <div key={e.label} className="bg-white/10 rounded-xl p-4 hover:bg-white/20 transition-colors">
                <div className="text-3xl mb-2">{e.icon}</div>
                <div className="text-white text-sm font-medium">{e.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ — for SEO */}
      <section className="py-16 px-4 bg-[#FDF8F0]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-[#7B1818] text-center mb-10">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {[
              {
                q: 'Which is the best banquet hall in Patna?',
                a: 'Sayamwar Hall & Homestay in Danapur is one of the best banquet halls in Patna — offering AC hall for 200–300 guests, complete decoration, DJ, catering and 4 rooms in every package.',
              },
              {
                q: 'What is the cost of banquet hall in Patna?',
                a: 'Banquet hall cost at Sayamwar Hall starts from ₹85,000 for birthday and engagement packages. Wedding packages start at ₹1,51,000. All prices are all-inclusive with no hidden charges.',
              },
              {
                q: 'Is there a low budget banquet hall in Patna?',
                a: 'Yes! Sayamwar Hall offers the most affordable low budget banquet in Patna starting at just ₹85,000 — including stage decoration, mandap, DJ, bouncer, night coffee and 4 rooms.',
              },
              {
                q: 'Where is the banquet hall near me in Patna?',
                a: 'Sayamwar Hall is located on Gola Road, Adarsh Vihar Colony, Lane 5, near T Point, Danapur, Patna — easily accessible from Danapur Cantonment, Saguna More and Patna city.',
              },
              {
                q: 'How many guests can the banquet hall in Patna accommodate?',
                a: 'Our banquet hall in Patna comfortably seats 200–300 guests in a fully AC environment with professional sound, lighting and stage setup.',
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

      {/* Booking form */}
      <section className="py-16 px-4 bg-gradient-to-br from-[#5A0F0F] to-[#7B1818]">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-white mb-2">Book Banquet Hall in Patna</h2>
          <p className="text-center text-white/60 mb-10 text-sm">Submit your details — we respond on WhatsApp within minutes</p>
          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <LeadForm />
          </div>
        </div>
      </section>
    </>
  )
}
