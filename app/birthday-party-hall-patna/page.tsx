import type { Metadata } from 'next'
import Image from 'next/image'
import LeadForm from '@/components/LeadForm'
import AnimateOnScroll from '@/components/AnimateOnScroll'

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://sayamwar.com' },
    { '@type': 'ListItem', position: 2, name: 'Birthday Party Hall in Patna', item: 'https://sayamwar.com/birthday-party-hall-patna' },
  ],
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the cost of birthday party hall in Patna?',
      acceptedAnswer: { '@type': 'Answer', text: 'Birthday party hall packages at Sayamwar Hall start from ₹85,000 for up to 150 guests, and go up to ₹1,25,000 for up to 300 guests. Packages include AC hall, theme decoration, DJ, catering and more.' },
    },
    {
      '@type': 'Question',
      name: 'How many guests can attend a birthday party at Sayamwar Hall?',
      acceptedAnswer: { '@type': 'Answer', text: 'We host birthday parties for 50 to 300 guests in our AC banquet hall in Danapur, Patna. The hall features professional DJ, stage setup, selfie point, and custom theme decoration.' },
    },
    {
      '@type': 'Question',
      name: 'Can you arrange custom theme decoration for birthday parties?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes, we offer custom theme birthday decoration including Bollywood, Jungle Safari, Royal Gold, Retro, and Superhero themes. Selfie points, balloon setups and LED stage lighting are included.' },
    },
    {
      '@type': 'Question',
      name: 'Is food included in the birthday party package?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes, catering is included. You can choose from Shagun (₹999/plate veg), Vivah (₹1,199/plate veg), or Swayamvar (₹1,399/plate veg) menus with non-veg options also available.' },
    },
    {
      '@type': 'Question',
      name: 'Where is the birthday party hall near me in Patna?',
      acceptedAnswer: { '@type': 'Answer', text: 'Sayamwar Hall is at Gola Road, Adarsh Vihar Colony, Lane 5, near T Point, Danapur, Patna — easily accessible from Danapur, Boring Road, and Patna city centre.' },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Birthday Party Hall in Patna | From ₹85,000 | Danapur | Sayamwar Hall',
  description: 'Best birthday party hall in Patna & Danapur. Affordable packages from ₹85,000 with theme decor, cake, catering & DJ. 50–300 guests. Call 7646028228 to book.',
  keywords: 'birthday party hall patna, birthday venue danapur, birthday party hall danapur patna, kids birthday venue patna, birthday party venue near me patna, best birthday party venue patna, birthday celebration hall patna',
  alternates: { canonical: 'https://sayamwar.com/birthday-party-hall-patna' },
  openGraph: {
    title: 'Birthday Party Hall in Patna | From ₹85,000 | Sayamwar Hall Danapur',
    description: 'Best birthday party hall in Patna from ₹85,000. Theme decor, catering, DJ, 50–300 guests. Call 7646028228.',
    images: [{ url: '/venue-2.jpg', width: 1200, height: 630, alt: 'Birthday Party Hall Sayamwar Danapur Patna' }],
  },
}

const packages = [
  {
    name: 'Basic Birthday',
    price: '₹85,000',
    capacity: 'Up to 50 Guests',
    includes: ['AC Hall', 'Basic Decoration', 'Birthday Cake (1 kg)', 'Snacks & Tea', '2 Hours Slot', 'Sound System'],
  },
  {
    name: 'Premium Birthday',
    price: '₹1,00,000',
    capacity: 'Up to 150 Guests',
    includes: ['AC Hall', 'Theme Decoration', 'Birthday Cake (2 kg)', 'Dinner Buffet', '4 Hours Slot', 'DJ & Lighting', 'Photo Booth'],
    popular: true,
  },
  {
    name: 'Grand Birthday',
    price: '₹1,25,000',
    capacity: 'Up to 300 Guests',
    includes: ['AC Hall', 'Premium Theme Decor', 'Custom Birthday Cake', 'Full Dinner Buffet', 'Full Day Slot', 'Professional DJ', 'Photographer', 'Welcome Drink'],
  },
]

export default function BirthdayPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[var(--black-2)] via-[var(--maroon-dark)] to-[var(--maroon)] py-20 px-4 text-center text-white relative overflow-hidden">
        <div className="absolute top-4 left-8 text-6xl opacity-15 select-none">🎈</div>
        <div className="absolute top-8 right-12 text-5xl opacity-15 select-none">🎂</div>
        <div className="absolute bottom-8 left-16 text-5xl opacity-15 select-none">🎉</div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <p className="section-label mb-3">Celebrate in Style</p>
          <h1 className="font-[var(--font-playfair)] text-4xl md:text-5xl font-bold mb-4">
            Birthday Party Hall in <span className="text-[var(--gold)]">Patna & Danapur</span>
          </h1>
          <div className="gold-line mb-5" />
          <p className="text-white/65 text-lg max-w-2xl mx-auto mb-8">
            Make every birthday unforgettable — spacious hall, stunning theme decor, delicious food, DJ & music, all at one place.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/917646028228?text=Hello!%20I%20want%20to%20book%20a%20Birthday%20Party%20at%20Sayamwar%20Hall"
              target="_blank" rel="noopener noreferrer"
              className="px-8 py-4 bg-green-500 hover:bg-green-600 text-white rounded-xl font-bold text-base transition-all hover:scale-105 inline-flex items-center justify-center gap-2"
            >
              ✅ Check Availability
            </a>
            <a href="tel:7646028228" className="btn-gold rounded-xl text-base px-8 py-4 justify-center">
              📞 7646028228
            </a>
          </div>
          <p className="text-white/40 text-xs mt-5">Packages from ₹85,000 · Up to 300 Guests · AC Hall · Theme Decor</p>
        </div>
      </section>

      {/* Gallery strip */}
      <section className="py-10 px-4 bg-[var(--ivory)]">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 auto-rows-[180px]">
            {[
              { src: '/venue-2.jpg', label: 'Birthday Party Setup', span: 'col-span-2 row-span-2' },
              { src: '/gallery-selfie-point-1.jpg', label: 'Selfie Point' },
              { src: '/gallery-selfie-point-2.jpg', label: 'Selfie Corner' },
              { src: '/gallery-banquet-interior.jpg', label: 'Banquet Hall Interior' },
              { src: '/gallery-banquet-hall-main.jpg', label: 'Grand Hall' },
            ].map(p => (
              <div key={p.src} className={`relative rounded-2xl overflow-hidden shadow-md group ${'span' in p ? p.span : ''}`}>
                <Image src={p.src} alt={p.label} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(max-width: 768px) 50vw, 25vw" />
                <div className="overlay" />
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

      {/* Why us */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <AnimateOnScroll className="text-center mb-10">
            <p className="section-label mb-2">All Included</p>
            <h2 className="font-[var(--font-playfair)] text-3xl font-bold text-[var(--black)]">Why Celebrate Here?</h2>
            <div className="gold-line mt-3" />
          </AnimateOnScroll>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {[
              { icon: '🎨', label: 'Custom Theme Decor' },
              { icon: '🎂', label: 'Birthday Cakes' },
              { icon: '🍽️', label: 'Catering & Buffet' },
              { icon: '🎵', label: 'DJ & Music' },
              { icon: '📸', label: 'Photography' },
              { icon: '🎁', label: 'Return Gifts Setup' },
            ].map((f, i) => (
              <AnimateOnScroll key={f.label} delay={i * 70}>
                <div className="card-hover bg-[var(--ivory)] rounded-2xl p-6 text-center border border-[var(--gold)]/10">
                  <div className="text-4xl mb-3">{f.icon}</div>
                  <p className="font-semibold text-[var(--maroon)] text-sm">{f.label}</p>
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
            <h2 className="font-[var(--font-playfair)] text-3xl font-bold text-[var(--black)]">Birthday Packages</h2>
            <div className="gold-line mt-3 mb-3" />
            <p className="text-[var(--black)]/50 text-sm">All prices inclusive · Customization available</p>
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
                      href={`https://wa.me/917646028228?text=Hello!%20I%20want%20to%20book%20${encodeURIComponent(pkg.name)}%20for%20Birthday%20Party`}
                      target="_blank" rel="noopener noreferrer"
                      className="block text-center w-full py-3 bg-[var(--maroon)] hover:bg-[var(--maroon-dark)] text-white rounded-xl text-sm font-bold transition-all hover:scale-[1.02]"
                    >
                      Book This Package →
                    </a>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
          <p className="text-center text-[var(--black)]/35 text-xs mt-6">* Prices are indicative. Contact us for custom quotes.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <AnimateOnScroll className="text-center mb-10">
            <p className="section-label mb-2">Common Questions</p>
            <h2 className="font-[var(--font-playfair)] text-3xl font-bold text-[var(--black)]">Birthday Party FAQ</h2>
            <div className="gold-line mt-3" />
          </AnimateOnScroll>
          <div className="space-y-4">
            {[
              { q: 'What is the cost of birthday party hall in Patna?', a: 'Birthday packages at Sayamwar Hall start from ₹85,000 for up to 150 guests, up to ₹1,25,000 for up to 300 guests — including AC hall, theme decoration, DJ, and catering.' },
              { q: 'How many guests can attend a birthday party here?', a: 'We comfortably host 50 to 300 guests in our AC hall with professional DJ, stage setup, selfie point, and custom theme decoration.' },
              { q: 'Can you arrange custom theme decoration?', a: 'Yes — Bollywood, Jungle Safari, Royal Gold, Retro, Superhero and more. Selfie points, balloon setups and LED stage lighting are all included.' },
              { q: 'Is food included in the birthday package?', a: 'Yes. Choose from Shagun (₹999/plate veg), Vivah (₹1,199/plate veg), or Swayamvar (₹1,399/plate veg). Non-veg options are also available.' },
              { q: 'Where is the birthday party hall near me in Patna?', a: 'Sayamwar Hall is at Gola Road, Adarsh Vihar Colony, Lane 5, near T Point, Danapur — accessible from Danapur, Boring Road, and Patna city centre.' },
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

      {/* Inquiry Form */}
      <section className="py-16 px-4 bg-gradient-to-br from-[var(--maroon-dark)] to-[var(--maroon)]">
        <div className="max-w-2xl mx-auto">
          <AnimateOnScroll className="text-center mb-8">
            <p className="section-label mb-2">Free Quote — No Obligation</p>
            <h2 className="font-[var(--font-playfair)] text-3xl font-bold text-white">Plan Your Birthday Party</h2>
            <p className="text-white/55 text-sm mt-3">Tell us your requirements and get a custom quote within the hour</p>
          </AnimateOnScroll>
          <AnimateOnScroll delay={100}>
            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <LeadForm eventType="Birthday Party" />
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  )
}
