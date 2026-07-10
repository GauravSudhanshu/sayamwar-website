import type { Metadata } from 'next'
import Image from 'next/image'
import LeadForm from '@/components/LeadForm'
import AnimateOnScroll from '@/components/AnimateOnScroll'
import RelatedPages from '@/components/RelatedPages'

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://sayamwar.com' },
    { '@type': 'ListItem', position: 2, name: 'Wedding Venue in Patna', item: 'https://sayamwar.com/wedding-venue-patna' },
  ],
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the cost of wedding venue in Patna?',
      acceptedAnswer: { '@type': 'Answer', text: 'Wedding venue packages at Sayamwar Hall in Patna start from ₹1,51,000 (Silver Wedding, 100–150 guests) to ₹2,00,000 (Gold Wedding, 150–250 guests). Platinum packages for up to 300 guests are available on custom quote.' },
    },
    {
      '@type': 'Question',
      name: 'How many guests can the wedding hall accommodate?',
      acceptedAnswer: { '@type': 'Answer', text: 'Sayamwar Hall can accommodate 200 to 300 guests for weddings in a fully air-conditioned hall with professional stage setup, mandap, lighting, and DJ.' },
    },
    {
      '@type': 'Question',
      name: 'Is catering included in the wedding package?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes, catering is available as part of wedding packages. We offer three menus — Shagun (₹999/plate veg), Vivah (₹1,199/plate veg), and Swayamvar (₹1,399/plate veg) — with non-veg options also available.' },
    },
    {
      '@type': 'Question',
      name: 'Are rooms available for the wedding family?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes, all wedding packages include 2–6 on-site guest rooms. Additional AC and non-AC rooms are available from ₹1,500–₹2,500 per night for family and out-of-town guests.' },
    },
    {
      '@type': 'Question',
      name: 'Where is the best wedding venue in Danapur, Patna?',
      acceptedAnswer: { '@type': 'Answer', text: 'Sayamwar Hall & Homestay is at Gola Road, Adarsh Vihar Colony, Lane 5, near T Point, Danapur — 5 minutes from Danapur railway station and 20 minutes from Patna Junction.' },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Wedding Venue in Patna | Marriage Hall Danapur | From ₹1,51,000 | Sayamwar Hall',
  description: 'Best wedding venue in Patna & Danapur. Grand marriage hall for 200–300 guests. All-inclusive wedding packages from ₹1,51,000 with decor, catering, DJ & on-site rooms. Call 7646028228.',
  keywords: 'wedding venue patna, marriage hall patna, wedding hall danapur, shaadi hall patna, vivah venue patna, best wedding venue patna, wedding hall near me patna, affordable wedding venue patna, wedding reception venue patna, low budget wedding hall patna',
  alternates: { canonical: 'https://sayamwar.com/wedding-venue-patna' },
  openGraph: {
    title: 'Wedding Venue in Patna | Marriage Hall from ₹1,51,000 | Sayamwar Hall',
    description: 'Grand AC wedding hall for 200–300 guests in Danapur. All-inclusive packages with decor, catering, DJ & rooms from ₹1,51,000. Call 7646028228.',
    images: [{ url: '/gallery-indoor-mandap.jpg', width: 1200, height: 630, alt: 'Wedding Mandap at Sayamwar Hall Patna' }],
  },
}

const weddingFeatures = [
  { icon: '💒', title: 'Grand AC Hall', desc: 'Spacious hall for 200–300 guests with beautiful decor' },
  { icon: '🌸', title: 'Floral Decoration', desc: 'Fresh flower arrangements for mandap, stage & entrance' },
  { icon: '👨‍🍳', title: 'Wedding Catering', desc: 'Complete veg & non-veg wedding menu with live counters' },
  { icon: '🛏️', title: 'Guest Rooms', desc: 'AC & non-AC rooms for bride, groom & family on-site' },
  { icon: '🎵', title: 'DJ & Lighting', desc: 'Professional DJ, stage lighting & quality sound system' },
  { icon: '📸', title: 'Photography', desc: 'Professional photography & videography coordination' },
]

const packages = [
  {
    name: 'Silver Wedding',
    price: '₹1,51,000',
    capacity: '100–150 Guests',
    includes: ['Hall for 1 Day', 'Basic Flower Decor', 'Veg Dinner Buffet', 'Mandap Setup', '2 Guest Rooms'],
  },
  {
    name: 'Gold Wedding',
    price: '₹2,00,000',
    capacity: '150–250 Guests',
    includes: ['Hall for 2 Days', 'Premium Flower Decor', 'Veg + Non-Veg Buffet', 'Stage + Mandap Setup', '4 Guest Rooms', 'DJ + Sound', 'Baraat Welcome'],
    popular: true,
  },
  {
    name: 'Platinum Wedding',
    price: 'Custom Quote',
    capacity: 'Up to 300 Guests',
    includes: ['Hall for 3 Days', 'Royal Theme Decor', 'Full Wedding Catering', 'Complete Stage Setup', '6+ Guest Rooms', 'DJ + Lighting', 'Photographer', 'Welcome Drink'],
  },
]

export default function WeddingVenuePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[var(--black-2)] via-[var(--maroon-dark)] to-[var(--maroon)] py-24 px-4 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80'%3E%3Ccircle cx='40' cy='40' r='2' fill='%23ffffff'/%3E%3C/svg%3E\")" }} />
        <div className="relative z-10 max-w-3xl mx-auto">
          <p className="section-label mb-3">Your Dream Wedding Awaits</p>
          <h1 className="font-[var(--font-playfair)] text-4xl md:text-6xl font-bold mb-4 leading-tight">
            Wedding Venue in <span className="text-[var(--gold)]">Patna</span>
            <br />
            <span className="text-3xl md:text-4xl text-white/75">Danapur&apos;s Most Loved Marriage Hall</span>
          </h1>
          <div className="gold-line mb-6" />
          <p className="text-white/65 text-lg max-w-2xl mx-auto mb-8">
            Create memories that last a lifetime — grand hall, stunning decor, wedding catering, DJ & on-site rooms, all at one place.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/917646028228?text=Hello!%20I%20want%20to%20enquire%20about%20Wedding%20at%20Sayamwar%20Hall"
              target="_blank" rel="noopener noreferrer"
              className="px-8 py-4 bg-green-500 hover:bg-green-600 text-white rounded-xl font-bold text-base transition-all hover:scale-105 inline-flex items-center justify-center gap-2"
            >
              ✅ Check Availability
            </a>
            <a href="tel:7646028228" className="btn-gold rounded-xl text-base px-8 py-4 justify-center">
              📞 7646028228
            </a>
          </div>
          <p className="text-white/40 text-xs mt-5">Packages from ₹1,51,000 · 200–300 Guests · AC Hall · Rooms Included</p>
        </div>
      </section>

      {/* Gallery strip */}
      <section className="py-10 px-4 bg-[var(--ivory)]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 auto-rows-[200px]">
            {[
              { src: '/gallery-indoor-mandap.jpg', label: 'Indoor Mandap Setup', span: 'col-span-2 row-span-2' },
              { src: '/gallery-mandap-hall.jpg', label: 'Mandap in Hall', span: '' },
              { src: '/gallery-selfie-point-1.jpg', label: 'Selfie Point Decor', span: '' },
              { src: '/gallery-outside-stage.jpg', label: 'Outdoor Stage', span: '' },
              { src: '/gallery-banquet-hall-main.jpg', label: 'Grand Banquet Hall', span: '' },
            ].map(p => (
              <div key={p.src} className={`relative rounded-2xl overflow-hidden shadow-md group ${p.span}`}>
                <Image src={p.src} alt={p.label} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(max-width: 768px) 50vw, 25vw" />
                <div className="overlay" />
                <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-white text-xs font-semibold">{p.label}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-5">
            <a href="/gallery" className="text-[var(--gold)] text-sm font-semibold hover:text-[var(--gold-dark)] transition-colors">
              View Full Gallery →
            </a>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <AnimateOnScroll className="text-center mb-10">
            <p className="section-label mb-2">What We Offer</p>
            <h2 className="font-[var(--font-playfair)] text-3xl font-bold text-[var(--black)]">Everything for Your Perfect Wedding</h2>
            <div className="gold-line mt-3" />
          </AnimateOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {weddingFeatures.map((f, i) => (
              <AnimateOnScroll key={f.title} delay={i * 80}>
                <div className="card-hover bg-[var(--ivory)] rounded-2xl p-6 border border-[var(--gold)]/10 flex gap-4">
                  <span className="text-4xl flex-shrink-0">{f.icon}</span>
                  <div>
                    <h3 className="font-bold text-[var(--maroon)] mb-1">{f.title}</h3>
                    <p className="text-[var(--black)]/55 text-sm">{f.desc}</p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-14 px-4 bg-[var(--ivory)]">
        <div className="max-w-5xl mx-auto">
          <AnimateOnScroll className="text-center mb-10">
            <p className="section-label mb-2">Pricing</p>
            <h2 className="font-[var(--font-playfair)] text-3xl font-bold text-[var(--black)]">Wedding Packages</h2>
            <div className="gold-line mt-3 mb-3" />
            <p className="text-[var(--black)]/50 text-sm">All-inclusive packages · Customization available</p>
          </AnimateOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {packages.map((pkg, i) => (
              <AnimateOnScroll key={pkg.name} delay={i * 100}>
                <div className={`card-hover bg-white rounded-2xl shadow-md overflow-hidden border-2 ${pkg.popular ? 'border-[var(--gold)]' : 'border-[var(--gold)]/10'} relative flex flex-col`}>
                  {pkg.popular && (
                    <div className="bg-[var(--gold)] text-white text-center text-xs font-bold py-1.5 tracking-wider">
                      ⭐ MOST POPULAR
                    </div>
                  )}
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="font-bold text-[var(--maroon)] text-xl mb-1">{pkg.name}</h3>
                    <p className="text-3xl font-bold text-[var(--gold)] mb-1">{pkg.price}</p>
                    <p className="text-[var(--black)]/45 text-sm mb-5">{pkg.capacity}</p>
                    <ul className="space-y-2 mb-6 flex-1">
                      {pkg.includes.map((item) => (
                        <li key={item} className="text-sm text-[var(--black)]/60 flex gap-2">
                          <span className="text-green-500 font-bold flex-shrink-0">✓</span> {item}
                        </li>
                      ))}
                    </ul>
                    <a
                      href={`https://wa.me/917646028228?text=Hello!%20I%20want%20to%20enquire%20about%20${encodeURIComponent(pkg.name)}%20wedding%20package`}
                      target="_blank" rel="noopener noreferrer"
                      className="block text-center w-full py-3 bg-[var(--maroon)] hover:bg-[var(--maroon-dark)] text-white rounded-xl text-sm font-bold transition-all hover:scale-[1.02]"
                    >
                      Enquire Now →
                    </a>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
          <p className="text-center text-[var(--black)]/35 text-xs mt-6">* All prices are indicative. Final quote depends on date, guest count, and requirements.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <AnimateOnScroll className="text-center mb-10">
            <p className="section-label mb-2">Common Questions</p>
            <h2 className="font-[var(--font-playfair)] text-3xl font-bold text-[var(--black)]">Wedding Venue FAQ</h2>
            <div className="gold-line mt-3" />
          </AnimateOnScroll>
          <div className="space-y-4">
            {[
              { q: 'What is the cost of wedding venue in Patna?', a: 'Wedding packages at Sayamwar Hall start from ₹1,51,000 (Silver, 100–150 guests) to ₹2,00,000 (Gold, 150–250 guests). Platinum packages for up to 300 guests are available on custom quote.' },
              { q: 'How many guests can the wedding hall accommodate?', a: 'Our AC wedding hall comfortably seats 200–300 guests with professional stage, mandap, lighting, and DJ included.' },
              { q: 'Is catering included in the wedding package?', a: 'Yes. We offer Shagun (₹999/plate veg), Vivah (₹1,199/plate veg), and Swayamvar (₹1,399/plate veg) menus, plus non-veg options.' },
              { q: 'Are rooms available for the wedding family?', a: 'Yes — all packages include 2–6 on-site rooms. Additional rooms from ₹1,500/night, keeping the whole family under one roof.' },
              { q: 'Where is the best wedding venue in Danapur, Patna?', a: 'Sayamwar Hall is at Gola Road, Adarsh Vihar Colony, Lane 5, near T Point, Danapur — 5 min from Danapur railway station and 20 min from Patna Junction.' },
            ].map((item) => (
              <details key={item.q} className="bg-[var(--ivory)] rounded-xl border border-[var(--gold)]/15 group">
                <summary className="px-6 py-4 font-semibold text-[var(--maroon)] cursor-pointer list-none flex justify-between items-center">
                  {item.q}
                  <span className="text-[var(--gold)] group-open:rotate-180 transition-transform duration-300 flex-shrink-0 ml-3 text-sm">▼</span>
                </summary>
                <p className="px-6 pb-5 text-[var(--black)]/60 text-sm leading-relaxed">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <RelatedPages links={[
        { href: '/reception-hall-patna', label: 'Reception Hall in Patna' },
        { href: '/engagement-hall-patna', label: 'Engagement Hall in Patna' },
        { href: '/rooms', label: 'Rooms in Patna' },
        { href: '/packages', label: 'Packages & Pricing' },
      ]} />

      {/* Inquiry Form */}
      <section className="py-16 px-4 bg-gradient-to-br from-[var(--maroon-dark)] to-[var(--maroon)]">
        <div className="max-w-2xl mx-auto">
          <AnimateOnScroll className="text-center mb-8">
            <p className="section-label mb-2">Free Quote — No Obligation</p>
            <h2 className="font-[var(--font-playfair)] text-3xl font-bold text-white">Plan Your Dream Wedding</h2>
            <p className="text-white/55 text-sm mt-3">Tell us your wedding date and we&apos;ll get back within the hour</p>
          </AnimateOnScroll>
          <AnimateOnScroll delay={100}>
            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <LeadForm eventType="Wedding" />
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  )
}
