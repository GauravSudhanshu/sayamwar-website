import type { Metadata } from 'next'
import LeadForm from '@/components/LeadForm'

export const metadata: Metadata = {
  title: 'Wedding Venue in Patna | Marriage Hall Danapur | Sayamwar Hall',
  description: 'Best wedding venue in Patna & Danapur. Grand marriage hall for 200-300 guests. Complete wedding packages with decor, catering & rooms. Call 7646028228.',
  keywords: 'wedding venue patna, marriage hall patna, wedding hall danapur, shaadi hall patna, vivah venue patna',
  alternates: { canonical: 'https://sayamwar.com/wedding-venue-patna' },
}

const weddingFeatures = [
  { icon: '💒', title: 'Grand Hall', desc: 'Spacious hall for 200–300 guests with beautiful decor' },
  { icon: '🌸', title: 'Floral Decoration', desc: 'Fresh flower arrangements for mandap, stage & entrance' },
  { icon: '👨‍🍳', title: 'Wedding Catering', desc: 'Complete veg & non-veg wedding menu with live counters' },
  { icon: '🛏️', title: 'Guest Rooms', desc: 'AC & non-AC rooms for bride, groom & family' },
  { icon: '🎵', title: 'DJ & Lighting', desc: 'Professional DJ, stage lighting & sound system' },
  { icon: '📸', title: 'Photography', desc: 'Professional photography & videography coordination' },
]

const packages = [
  {
    name: 'Silver Wedding',
    price: '₹1,25,000',
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
      <section className="bg-gradient-to-br from-[#3D0A0A] via-[#5A0F0F] to-[#7B1818] py-24 px-4 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80'%3E%3Ccircle cx='40' cy='40' r='2' fill='%23C9A227'/%3E%3C/svg%3E\")" }} />
        <div className="relative z-10">
          <p className="text-[#C9A227] text-sm tracking-widest uppercase mb-3">Your Dream Wedding Awaits</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Wedding Venue in <span className="text-[#C9A227]">Patna</span>
            <br />
            <span className="text-3xl md:text-4xl text-white/80">Danapur&apos;s Most Loved Marriage Hall</span>
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto mb-8">
            Create memories that last a lifetime. Our grand wedding venue offers everything you need for a perfect shaadi — from decor to catering to comfortable rooms.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/917646028228?text=Hello!%20I%20want%20to%20inquire%20about%20Wedding%20Venue%20at%20Sayamwar%20Hall"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-green-500 hover:bg-green-600 text-white rounded-lg font-bold text-lg transition-colors"
            >
              💬 Get Wedding Quote
            </a>
            <a href="tel:7646028228" className="px-8 py-4 bg-[#C9A227] text-[#5A0F0F] rounded-lg font-bold text-lg hover:bg-[#E8C547] transition-colors">
              📞 7646028228
            </a>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#7B1818] mb-10">Everything for Your Perfect Wedding</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {weddingFeatures.map((f) => (
              <div key={f.title} className="card-hover bg-white rounded-xl p-6 shadow-md border border-gray-100 flex gap-4">
                <span className="text-4xl">{f.icon}</span>
                <div>
                  <h3 className="font-bold text-[#7B1818] mb-1">{f.title}</h3>
                  <p className="text-gray-500 text-sm">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-14 px-4 bg-[#FDF8F0]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#7B1818] mb-2">Wedding Packages</h2>
          <p className="text-center text-gray-500 mb-10 text-sm">All-inclusive packages. Customization available for your needs.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`card-hover bg-white rounded-2xl shadow-md overflow-hidden border-2 ${pkg.popular ? 'border-[#C9A227]' : 'border-gray-100'} relative`}
              >
                {pkg.popular && (
                  <div className="bg-[#C9A227] text-[#5A0F0F] text-center text-xs font-bold py-1.5">
                    ⭐ MOST POPULAR
                  </div>
                )}
                <div className="p-6">
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
                    href={`https://wa.me/917646028228?text=Hello!%20I%20want%20to%20inquire%20about%20${encodeURIComponent(pkg.name)}%20wedding%20package`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center w-full py-3 bg-[#7B1818] hover:bg-[#5A0F0F] text-white rounded-lg text-sm font-bold transition-colors"
                  >
                    Enquire Now
                  </a>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-400 text-xs mt-6">* All prices are indicative. Final quote depends on date, guest count, and requirements.</p>
        </div>
      </section>

      {/* Inquiry */}
      <section className="py-16 px-4 bg-gradient-to-br from-[#5A0F0F] to-[#7B1818]">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-white mb-2">Plan Your Dream Wedding</h2>
          <p className="text-center text-white/60 mb-10 text-sm">Tell us your wedding date and we&apos;ll get back to you within the hour</p>
          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <LeadForm eventType="Wedding" />
          </div>
        </div>
      </section>
    </>
  )
}
