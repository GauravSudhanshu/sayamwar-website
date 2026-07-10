import type { Metadata } from 'next'
import Link from 'next/link'
import LeadForm from '@/components/LeadForm'

export const metadata: Metadata = {
  title: 'Corporate Event Hall in Patna | Conference & Annual Dinner Venue | Sayamwar Hall',
  description: 'Best corporate event hall in Patna & Danapur. AC hall for 50–300 attendees. Conferences, annual dinners, product launches, team events. In-house catering. Call 7646028228.',
  keywords: 'corporate event hall patna, corporate venue patna, conference hall patna, annual dinner venue patna, corporate event danapur, team outing venue patna, seminar hall patna, corporate party hall patna, event venue for companies patna, corporate gathering hall patna',
  alternates: { canonical: 'https://sayamwar.com/corporate-event-hall-patna' },
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://sayamwar.com' },
    { '@type': 'ListItem', position: 2, name: 'Corporate Event Hall in Patna', item: 'https://sayamwar.com/corporate-event-hall-patna' },
  ],
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the cost of corporate event hall in Patna?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Corporate event hall cost in Patna at Sayamwar Hall depends on the type of event. Annual dinners for 200 guests start from ₹1,00,000 (hall + stage + catering). Conferences and seminars for 50–100 guests start from ₹30,000. Call 7646028228 for a custom quote.',
      },
    },
    {
      '@type': 'Question',
      name: 'What types of corporate events can be held at Sayamwar Hall?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sayamwar Hall hosts annual company dinners, conferences, seminars, product launches, awards nights, team meetings, training workshops, and corporate get-togethers for 50 to 300 attendees.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is catering available for corporate events at Sayamwar Hall?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We offer corporate-friendly catering — tea & snacks (₹150–₹250/person), lunch buffet (₹500–₹800/person), and dinner buffet from ₹999/person. Custom menus can be arranged based on event type.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where is the corporate event hall in Patna located?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sayamwar Hall is at Gola Road, Adarsh Vihar Colony, Lane 5, near T Point, Danapur, Patna — 20 minutes from Patna Junction and 5 minutes from Danapur railway station. Easily accessible from Boring Road, Saguna More, and NH-30.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is there parking available for corporate event guests?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, Sayamwar Hall has ample free parking for 50+ vehicles within the premises — convenient for corporate guests arriving by car.',
      },
    },
  ],
}

const eventTypes = [
  { icon: '🎖️', label: 'Annual Dinners' },
  { icon: '📊', label: 'Conferences' },
  { icon: '🏆', label: 'Awards Nights' },
  { icon: '🚀', label: 'Product Launches' },
  { icon: '👥', label: 'Team Meetings' },
  { icon: '📚', label: 'Training Workshops' },
  { icon: '🤝', label: 'Business Gatherings' },
  { icon: '🎉', label: 'Company Parties' },
]

const features = [
  { icon: '❄️', title: 'Fully AC Hall', desc: 'Comfortable air-conditioned hall for 50–300 attendees in any season.' },
  { icon: '🎤', title: 'PA System & Stage', desc: 'Professional sound system, wireless mic, and elevated stage for presentations.' },
  { icon: '👨‍🍳', title: 'In-House Catering', desc: 'Tea, snacks, lunch, or dinner — customized menus for corporate groups.' },
  { icon: '🚗', title: 'Ample Parking', desc: 'Free parking for 50+ vehicles within the premises.' },
  { icon: '🛏️', title: 'On-Site Rooms', desc: 'Guest rooms for outstation employees — from ₹1,500/night.' },
  { icon: '📍', title: 'Central Location', desc: 'Gola Road, Danapur — 20 min from Patna Junction, near Boring Road.' },
]

const pricingItems = [
  { event: 'Half-Day Conference (4 hrs, 50 guests)', price: '₹30,000 – ₹50,000', note: 'Hall + PA system + tea/snacks' },
  { event: 'Full-Day Seminar (8 hrs, 100 guests)', price: '₹50,000 – ₹80,000', note: 'Hall + AV + lunch & tea breaks' },
  { event: 'Annual Dinner (200 guests)', price: '₹1,00,000 – ₹1,75,000', note: 'Hall + stage + DJ + dinner buffet' },
  { event: 'Awards Night (200 guests)', price: '₹1,50,000 – ₹2,00,000', note: 'Grand stage, lighting, catering' },
]

export default function CorporateEventHallPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#3D0A0A] via-[#5A0F0F] to-[#7B1818] py-24 px-4 text-center text-white">
        <p className="text-[#C9A84C] text-xs tracking-[0.35em] uppercase mb-3">Danapur · Patna · Bihar</p>
        <h1 className="font-[var(--font-playfair)] text-4xl md:text-5xl font-bold mb-4 leading-tight">
          Corporate Event Hall in <span className="text-[#C9A84C]">Patna</span>
        </h1>
        <p className="text-white/70 text-lg max-w-2xl mx-auto mb-3">
          AC hall for 50–300 attendees — ideal for annual dinners, conferences, product launches, awards nights and team events in Danapur, Patna.
        </p>
        <p className="text-[#C9A84C] font-bold text-lg mb-8">Custom Packages · In-House Catering · Free Parking</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://wa.me/917646028228?text=Hello!%20I%20want%20to%20book%20a%20Corporate%20Event%20at%20Sayamwar%20Hall%2C%20Patna"
            target="_blank" rel="noopener noreferrer"
            className="px-7 py-3 bg-green-500 hover:bg-green-600 text-white rounded-xl font-bold transition-all hover:scale-105"
          >
            💬 WhatsApp for Quote
          </a>
          <a href="tel:7646028228" className="px-7 py-3 bg-[#C9A84C] text-[#3D0A0A] rounded-xl font-bold hover:bg-[#E8C547] transition-all hover:scale-105">
            📞 Call: 7646028228
          </a>
        </div>
      </section>

      {/* Event Types */}
      <section className="py-14 px-4 bg-[#FDF8F0]">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#7B1818] mb-3">Corporate Events We Host in Patna</h2>
          <p className="text-gray-500 text-sm mb-10">Flexible hall setup for every type of corporate event</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {eventTypes.map((e) => (
              <div key={e.label} className="bg-white rounded-xl p-5 shadow-sm border border-[#C9A84C]/15 hover:border-[#C9A84C]/40 hover:shadow-md transition-all">
                <div className="text-3xl mb-2">{e.icon}</div>
                <p className="font-semibold text-[#7B1818] text-sm">{e.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#7B1818] mb-3">
            Why Choose Sayamwar Hall for Corporate Events?
          </h2>
          <p className="text-center text-gray-500 text-sm mb-10 max-w-2xl mx-auto">
            Sayamwar Hall & Homestay is Patna&apos;s trusted <strong>corporate event hall</strong> — providing professional setup, in-house catering, and on-site rooms all at one location in Danapur.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <div key={f.title} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex gap-4 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                <span className="text-4xl flex-shrink-0">{f.icon}</span>
                <div>
                  <h3 className="font-bold text-[#7B1818] mb-1">{f.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 px-4 bg-[#7B1818]">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { n: '200+', l: 'Events Hosted' },
            { n: '300', l: 'Guest Capacity' },
            { n: '50+', l: 'Car Parking' },
            { n: '4.8★', l: 'Google Rating' },
          ].map((s) => (
            <div key={s.l}>
              <p className="font-bold text-[#C9A84C] text-3xl md:text-4xl">{s.n}</p>
              <p className="text-white/60 text-xs uppercase tracking-widest mt-1">{s.l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 px-4 bg-[#FDF8F0]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#7B1818] text-center mb-3">Corporate Event Pricing in Patna</h2>
          <p className="text-center text-gray-500 text-sm mb-10">Transparent pricing. Custom quotes available based on your event size.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {pricingItems.map((p) => (
              <div key={p.event} className="bg-white rounded-xl p-6 border border-[#C9A84C]/20 shadow-sm">
                <h3 className="font-bold text-[#7B1818] mb-1">{p.event}</h3>
                <p className="text-[#C9A84C] font-bold text-xl mb-1">{p.price}</p>
                <p className="text-gray-400 text-sm">{p.note}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-400 text-xs mt-6">* Prices are indicative. Final quote depends on headcount, duration, and requirements.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-[#7B1818] text-center mb-10">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqJsonLd.mainEntity.map((item) => (
              <details key={item.name} className="bg-[#FDF8F0] rounded-xl border border-[#C9A84C]/20 group">
                <summary className="px-6 py-4 font-semibold text-[#7B1818] cursor-pointer list-none flex justify-between items-center">
                  {item.name}
                  <span className="text-[#C9A84C] group-open:rotate-180 transition-transform duration-300 flex-shrink-0 ml-3">▼</span>
                </summary>
                <p className="px-6 pb-5 text-gray-600 text-sm leading-relaxed">{item.acceptedAnswer.text}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Internal links */}
      <section className="py-10 px-4 bg-[#FDF8F0] border-t border-[#C9A84C]/10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-500 text-sm mb-4">Also explore our event venues:</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link href="/banquet-hall-patna" className="text-[#7B1818] hover:text-[#C9A84C] font-medium transition-colors">Banquet Hall Patna</Link>
            <Link href="/wedding-venue-patna" className="text-[#7B1818] hover:text-[#C9A84C] font-medium transition-colors">Wedding Venue Patna</Link>
            <Link href="/birthday-party-hall-patna" className="text-[#7B1818] hover:text-[#C9A84C] font-medium transition-colors">Birthday Party Hall</Link>
            <Link href="/engagement-hall-patna" className="text-[#7B1818] hover:text-[#C9A84C] font-medium transition-colors">Engagement Hall</Link>
            <Link href="/rooms" className="text-[#7B1818] hover:text-[#C9A84C] font-medium transition-colors">Rooms in Patna</Link>
            <Link href="/packages" className="text-[#7B1818] hover:text-[#C9A84C] font-medium transition-colors">View All Packages</Link>
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="py-16 px-4 bg-gradient-to-br from-[#5A0F0F] to-[#7B1818]">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-white mb-2">
            Enquire for Corporate Event in Patna
          </h2>
          <p className="text-center text-white/60 mb-10 text-sm">Share event details — we&apos;ll respond on WhatsApp within minutes</p>
          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <LeadForm eventType="Corporate Event" />
          </div>
        </div>
      </section>
    </>
  )
}
