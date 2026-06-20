import type { Metadata } from 'next'
import LeadForm from '@/components/LeadForm'

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
  title: 'Birthday Party Hall in Patna | Danapur | Sayamwar Hall',
  description: 'Book the best birthday party hall in Patna & Danapur. Affordable packages, cake, decor, catering & DJ. Capacity 50–300 guests. Call 7646028228 to book.',
  keywords: 'birthday party hall patna, birthday venue danapur, birthday party hall danapur patna, kids birthday venue patna',
  alternates: { canonical: 'https://sayamwar.com/birthday-party-hall-patna' },
}

const packages = [
  {
    name: 'Basic Birthday',
    price: '₹85,000',
    capacity: 'Up to 50 Guests',
    includes: ['AC Hall', 'Basic Decoration', 'Birthday Cake (1kg)', 'Snacks & Tea', '2 Hours Slot', 'Basic Sound System'],
    color: '#E8C547',
  },
  {
    name: 'Premium Birthday',
    price: '₹1,00,000',
    capacity: 'Up to 150 Guests',
    includes: ['AC Hall', 'Theme Decoration', 'Birthday Cake (2kg)', 'Dinner Buffet', '4 Hours Slot', 'DJ & Lighting', 'Photo Booth'],
    color: '#C9A84C',
    popular: true,
  },
  {
    name: 'Grand Birthday',
    price: '₹1,25,000',
    capacity: 'Up to 300 Guests',
    includes: ['AC Hall', 'Premium Theme Decor', 'Custom Birthday Cake', 'Full Dinner Buffet', 'Full Day Slot', 'Professional DJ', 'Photographer', 'Welcome Drink'],
    color: '#C9A84C',
  },
]

export default function BirthdayPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <section className="bg-gradient-to-br from-[#5A0F0F] via-[#7B1818] to-[#9B2222] py-20 px-4 text-center text-white relative overflow-hidden">
        <div className="absolute top-4 left-8 text-6xl opacity-20">🎈</div>
        <div className="absolute top-8 right-12 text-5xl opacity-20">🎂</div>
        <div className="absolute bottom-8 left-16 text-5xl opacity-20">🎉</div>
        <div className="relative z-10">
          <p className="text-[#C9A84C] text-sm tracking-widest uppercase mb-3">Celebrate in Style</p>
          <h1 className="font-[var(--font-playfair)] text-4xl md:text-5xl font-bold mb-4">
            Birthday Party Hall in <span className="text-[#C9A84C]">Patna & Danapur</span>
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto mb-8">
            Make every birthday unforgettable! Spacious halls, stunning decor, delicious food, and great entertainment — all at one place.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/917646028228?text=Hello!%20I%20want%20to%20book%20a%20Birthday%20Party%20at%20Sayamwar%20Hall"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg font-bold transition-colors"
            >
              💬 Book via WhatsApp
            </a>
            <a href="tel:7646028228" className="px-6 py-3 bg-[#C9A84C] text-[#5A0F0F] rounded-lg font-bold hover:bg-[#E8C547] transition-colors">
              📞 7646028228
            </a>
          </div>
        </div>
      </section>

      {/* Why us for birthday */}
      <section className="py-14 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#7B1818] mb-10">Why Celebrate Here?</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {[
              { icon: '🎨', label: 'Custom Theme Decor' },
              { icon: '🎂', label: 'Birthday Cakes' },
              { icon: '🍽️', label: 'Catering & Buffet' },
              { icon: '🎵', label: 'DJ & Music' },
              { icon: '📸', label: 'Photography' },
              { icon: '🎁', label: 'Return Gifts Setup' },
            ].map((f) => (
              <div key={f.label} className="card-hover bg-white rounded-xl p-6 text-center shadow-sm border border-gray-100">
                <div className="text-4xl mb-3">{f.icon}</div>
                <p className="font-semibold text-[#7B1818] text-sm">{f.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-14 px-4 bg-[#FDF8F0]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#7B1818] mb-2">Birthday Packages</h2>
          <p className="text-center text-gray-500 mb-10 text-sm">All prices inclusive. Customization available.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`card-hover bg-white rounded-2xl shadow-md overflow-hidden border-2 ${pkg.popular ? 'border-[#C9A84C]' : 'border-gray-100'} relative`}
              >
                {pkg.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-[#C9A84C] text-[#5A0F0F] text-center text-xs font-bold py-1">
                    MOST POPULAR
                  </div>
                )}
                <div className={`${pkg.popular ? 'mt-6' : ''} p-6`}>
                  <h3 className="font-bold text-[#7B1818] text-xl mb-1">{pkg.name}</h3>
                  <p className="text-3xl font-bold text-[#C9A84C] mb-1">{pkg.price}</p>
                  <p className="text-gray-500 text-sm mb-5">{pkg.capacity}</p>
                  <ul className="space-y-2 mb-6">
                    {pkg.includes.map((item) => (
                      <li key={item} className="text-sm text-gray-600 flex gap-2">
                        <span className="text-green-500 font-bold">✓</span> {item}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={`https://wa.me/917646028228?text=Hello!%20I%20want%20to%20book%20${encodeURIComponent(pkg.name)}%20package%20for%20Birthday%20Party`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center w-full py-3 bg-[#7B1818] hover:bg-[#5A0F0F] text-white rounded-lg text-sm font-bold transition-colors"
                  >
                    Book This Package
                  </a>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-400 text-xs mt-6">* Prices are indicative. Contact us for custom quotes.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-[#FDF8F0]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-[#7B1818] text-center mb-10">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              { q: 'What is the cost of birthday party hall in Patna?', a: 'Birthday packages at Sayamwar Hall start from ₹85,000 for up to 150 guests, up to ₹1,25,000 for up to 300 guests — including AC hall, theme decoration, DJ, and catering.' },
              { q: 'How many guests can attend a birthday party here?', a: 'We comfortably host 50 to 300 guests in our AC hall with professional DJ, stage setup, selfie point, and custom theme decoration.' },
              { q: 'Can you arrange custom theme decoration?', a: 'Yes — Bollywood, Jungle Safari, Royal Gold, Retro, Superhero and more. Selfie points, balloon setups and LED stage lighting are all included.' },
              { q: 'Is food included in the birthday package?', a: 'Yes. Choose from Shagun (₹999/plate veg), Vivah (₹1,199/plate veg), or Swayamvar (₹1,399/plate veg). Non-veg options are also available.' },
              { q: 'Where is the birthday party hall near me in Patna?', a: 'Sayamwar Hall is at Gola Road, Adarsh Vihar Colony, Lane 5, near T Point, Danapur — accessible from Danapur, Boring Road, and Patna city centre.' },
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

      {/* Inquiry Form */}
      <section className="py-16 px-4 bg-gradient-to-br from-[#5A0F0F] to-[#7B1818]">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-white mb-2">Plan Your Birthday Party</h2>
          <p className="text-center text-white/60 mb-10 text-sm">Tell us your requirements and get a custom quote</p>
          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <LeadForm eventType="Birthday Party" />
          </div>
        </div>
      </section>
    </>
  )
}
