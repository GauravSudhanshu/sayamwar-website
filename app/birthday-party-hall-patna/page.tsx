import type { Metadata } from 'next'
import LeadForm from '@/components/LeadForm'

export const metadata: Metadata = {
  title: 'Birthday Party Hall in Patna | Danapur | Sayamwar Hall',
  description: 'Book the best birthday party hall in Patna & Danapur. Affordable packages, cake, decor, catering & DJ. Capacity 50–300 guests. Call 7646028228 to book.',
  keywords: 'birthday party hall patna, birthday venue danapur, birthday party hall danapur patna, kids birthday venue patna',
  alternates: { canonical: 'https://sayamwarhall.com/birthday-party-hall-patna' },
}

const packages = [
  {
    name: 'Basic Birthday',
    price: '₹8,000',
    capacity: 'Up to 50 Guests',
    includes: ['Hall Decoration', 'Birthday Cake (1kg)', 'Snacks & Tea', '2 Hours Slot', 'Basic Sound System'],
    color: '#E8C547',
  },
  {
    name: 'Premium Birthday',
    price: '₹18,000',
    capacity: 'Up to 150 Guests',
    includes: ['Theme Decoration', 'Birthday Cake (2kg)', 'Dinner Buffet', '4 Hours Slot', 'DJ & Lighting', 'Photo Booth'],
    color: '#C9A227',
    popular: true,
  },
  {
    name: 'Grand Birthday',
    price: '₹35,000',
    capacity: 'Up to 300 Guests',
    includes: ['Premium Theme Decor', 'Custom Birthday Cake', 'Full Dinner Buffet', 'Full Day Slot', 'Professional DJ', 'Photographer', 'Welcome Drink'],
    color: '#C9A227',
  },
]

export default function BirthdayPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-[#5A0F0F] via-[#7B1818] to-[#9B2222] py-20 px-4 text-center text-white relative overflow-hidden">
        <div className="absolute top-4 left-8 text-6xl opacity-20">🎈</div>
        <div className="absolute top-8 right-12 text-5xl opacity-20">🎂</div>
        <div className="absolute bottom-8 left-16 text-5xl opacity-20">🎉</div>
        <div className="relative z-10">
          <p className="text-[#C9A227] text-sm tracking-widest uppercase mb-3">Celebrate in Style</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Birthday Party Hall in <span className="text-[#C9A227]">Patna & Danapur</span>
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
            <a href="tel:7646028228" className="px-6 py-3 bg-[#C9A227] text-[#5A0F0F] rounded-lg font-bold hover:bg-[#E8C547] transition-colors">
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
                className={`card-hover bg-white rounded-2xl shadow-md overflow-hidden border-2 ${pkg.popular ? 'border-[#C9A227]' : 'border-gray-100'} relative`}
              >
                {pkg.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-[#C9A227] text-[#5A0F0F] text-center text-xs font-bold py-1">
                    MOST POPULAR
                  </div>
                )}
                <div className={`${pkg.popular ? 'mt-6' : ''} p-6`}>
                  <h3 className="font-bold text-[#7B1818] text-xl mb-1">{pkg.name}</h3>
                  <p className="text-3xl font-bold text-[#C9A227] mb-1">{pkg.price}</p>
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
