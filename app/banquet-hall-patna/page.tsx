import type { Metadata } from 'next'
import LeadForm from '@/components/LeadForm'

export const metadata: Metadata = {
  title: 'Banquet Hall in Patna | Sayamwar Hall Danapur | 200-300 Guests',
  description: 'Best banquet hall in Patna & Danapur for weddings, engagements, corporate events. Capacity 200-300 guests. AC hall, catering, decor. Call 9942972484 for booking.',
  keywords: 'banquet hall patna, banquet hall danapur, event hall patna, party hall patna, wedding hall danapur',
  alternates: { canonical: 'https://sayamwarhall.com/banquet-hall-patna' },
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
      <section className="bg-gradient-to-br from-[#5A0F0F] to-[#7B1818] py-20 px-4 text-center text-white">
        <p className="text-[#C9A227] text-sm tracking-widest uppercase mb-3">Premier Venue</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Banquet Hall in <span className="text-[#C9A227]">Patna & Danapur</span>
        </h1>
        <p className="text-white/70 text-lg max-w-2xl mx-auto mb-4">
          Spacious, elegantly designed banquet hall for 200–300 guests. Perfect for every occasion.
        </p>
        <p className="text-[#C9A227] font-bold mb-8">AC Hall | Catering | Decor | Parking</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://wa.me/919942972484?text=Hello!%20I%20want%20to%20book%20Banquet%20Hall%20at%20Sayamwar"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg font-bold transition-colors"
          >
            💬 Check Availability
          </a>
          <a href="tel:9942972484" className="px-6 py-3 bg-[#C9A227] text-[#5A0F0F] rounded-lg font-bold hover:bg-[#E8C547] transition-colors">
            📞 9942972484
          </a>
        </div>
      </section>

      {/* Hall Features */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#7B1818] mb-10">Hall Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: '👥', title: 'Capacity: 200–300 Guests', desc: 'Spacious hall accommodating all group sizes comfortably' },
              { icon: '❄️', title: 'Fully Air Conditioned', desc: 'Powerful central AC system for guest comfort in all seasons' },
              { icon: '✨', title: 'Professional Decoration', desc: 'Customizable decor themes for your specific event style' },
              { icon: '👨‍🍳', title: 'In-House Catering', desc: 'Veg & non-veg multi-cuisine menu by experienced chefs' },
              { icon: '🎵', title: 'Sound & Lighting', desc: 'Professional sound system and LED stage lighting included' },
              { icon: '🚗', title: 'Ample Parking', desc: 'Free parking for 50+ vehicles within premises' },
            ].map((f) => (
              <div key={f.title} className="flex gap-4 bg-white rounded-xl p-5 shadow-sm border border-gray-100 card-hover">
                <span className="text-3xl">{f.icon}</span>
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
          <h2 className="text-2xl font-bold text-white mb-8">We Host All Types of Events</h2>
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

      {/* Booking form */}
      <section className="py-16 px-4 bg-gradient-to-br from-[#5A0F0F] to-[#7B1818]">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-white mb-2">Check Availability & Get Quote</h2>
          <p className="text-center text-white/60 mb-10 text-sm">Submit your details and we&apos;ll respond on WhatsApp within minutes</p>
          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <LeadForm />
          </div>
        </div>
      </section>
    </>
  )
}
