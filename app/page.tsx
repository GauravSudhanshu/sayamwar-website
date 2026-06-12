import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import AnimateOnScroll from '@/components/AnimateOnScroll'
import Counter from '@/components/Counter'
import LeadForm from '@/components/LeadForm'

export const metadata: Metadata = {
  title: 'Sayamwar Hall & Homestay | Premier Banquet Hall in Danapur, Patna',
  description: 'Sayamwar Hall & Homestay — Danapur, Patna\'s finest banquet hall for weddings, birthdays & corporate events. 200–300 guest capacity. Luxury rooms. Call 9942972484.',
  alternates: { canonical: 'https://sayamwarhall.com/' },
}

const marqueeItems = ['Weddings', 'Birthday Celebrations', 'Receptions', 'Engagements', 'Corporate Events', 'Comfortable Stays', 'Intimate Gatherings', 'Grand Festivities']

const services = [
  {
    img: '/pkg-wedding.jpg', tag: 'Sacred Unions',
    title: 'Wedding Venue',
    desc: 'Every detail curated for the most important day of your life. Grand mandap, royal décor, and memories that last forever.',
    href: '/wedding-venue-patna', price: '₹1,51,000',
  },
  {
    img: '/venue-2.jpg', tag: 'Joyful Moments',
    title: 'Birthday Celebrations',
    desc: 'Custom themed celebrations bursting with joy — from intimate gatherings to grand parties for 300 guests.',
    href: '/birthday-party-hall-patna', price: 'From ₹85,000',
  },
  {
    img: '/venue-4.jpg', tag: 'Grand Events',
    title: 'Banquet Hall',
    desc: 'A majestic 300-guest AC hall with crystal chandeliers, LED ambience, and world-class catering.',
    href: '/banquet-hall-patna', price: 'Get Quote',
  },
  {
    img: '/venue-6.jpg', tag: 'Restful Stay',
    title: 'Rooms & Homestay',
    desc: 'Contemporary AC rooms with premium interiors — the perfect retreat for your event guests.',
    href: '/rooms', price: 'From ₹700/night',
  },
]

const whatsIncluded = [
  { icon: '🎭', label: 'Stage Decoration' },
  { icon: '🌿', label: 'Lawn Decoration' },
  { icon: '🕌', label: 'Mandap' },
  { icon: '📸', label: 'Selfie Point' },
  { icon: '🍽️', label: 'Food Counter Decor' },
  { icon: '💐', label: 'Var Badhu Mala' },
  { icon: '🌸', label: 'Samdhi Mala' },
  { icon: '🎊', label: 'Barat Mala' },
  { icon: '🎵', label: 'DJ' },
  { icon: '🛡️', label: 'Guard / Bouncer' },
  { icon: '☕', label: 'Night Coffee' },
  { icon: '🛏️', label: '4 Rooms Included' },
]

const reviews = [
  { name: 'Rajesh Kumar', event: 'Wedding', text: 'Every detail was perfection. The décor, the food, the service — our guests are still talking about it.', rating: 5 },
  { name: 'Priya Singh', event: 'Birthday Party', text: 'Best birthday venue in Danapur. The team went above and beyond. Absolutely memorable evening.', rating: 5 },
  { name: 'Amit Sharma', event: 'Corporate Event', text: 'Professional, punctual, and flawless execution. Our annual gathering was a grand success.', rating: 5 },
  { name: 'Sunita Devi', event: 'Reception', text: 'The hall looked breathtaking. Premium décor and delicious food. Highly recommend to everyone.', rating: 5 },
]

export default function HomePage() {
  return (
    <>
      {/* ══════════════════════════════════════
          HERO — Full screen cinematic
      ══════════════════════════════════════ */}
      <section className="relative h-screen min-h-[680px] flex items-center justify-center overflow-hidden -mt-[80px]">
        <Image src="/venue-5.jpg" alt="Sayamwar Hall" fill className="object-cover object-center" priority sizes="100vw" />
        {/* Deep luxury overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/55 to-black/85" />
        {/* Gold vignette sides */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black/40 to-transparent" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black/40 to-transparent" />

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <p className="anim-0 section-label mb-6">Danapur &nbsp;•&nbsp; Patna &nbsp;•&nbsp; Bihar</p>

          <h1 className="anim-1 font-[var(--font-playfair)] text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.08] mb-6">
            Where Celebrations<br />
            <span className="gold-shimmer">Become Memories</span>
          </h1>

          <div className="anim-2 flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-16 bg-[#C9A84C]/60" />
            <p className="text-white/60 text-sm tracking-[0.2em] uppercase">Sayamwar Hall &amp; Homestay</p>
            <div className="h-px w-16 bg-[#C9A84C]/60" />
          </div>

          <p className="anim-3 text-white/65 text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Patna&apos;s premier venue for weddings, birthday celebrations, receptions &amp; comfortable stays — crafted for the extraordinary.
          </p>

          <div className="anim-4 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/919942972484?text=Hello!%20I%20want%20to%20book%20an%20event%20at%20Sayamwar%20Hall"
              target="_blank" rel="noopener noreferrer" className="btn-gold text-sm">
              Book Your Event
            </a>
            <Link href="/packages" className="btn-outline text-sm">
              <span>View Packages</span>
            </Link>
            <a href="tel:9942972484" className="btn-outline text-sm">
              <span>📞 9942972484</span>
            </a>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <div className="w-px h-12 bg-gradient-to-b from-transparent via-[#C9A84C]/60 to-[#C9A84C]" />
          <div className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] animate-[pulseDot_1.5s_infinite]" />
        </div>
      </section>

      {/* ══════════════════════════════════════
          MARQUEE STRIP
      ══════════════════════════════════════ */}
      <div className="bg-[#C9A84C] py-4 overflow-hidden">
        <div className="marquee-track">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="flex items-center text-[#0C0806] font-[var(--font-playfair)] text-sm font-semibold tracking-widest uppercase mx-10 whitespace-nowrap">
              {item}
              <span className="ml-10 text-[#8B6914]">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* ══════════════════════════════════════
          INTRO — ABOUT
      ══════════════════════════════════════ */}
      <section className="py-28 px-6 bg-[#F7F2EA]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <AnimateOnScroll direction="left">
            <div className="grid grid-cols-2 gap-3">
              <div className="relative h-72 rounded overflow-hidden img-card col-span-2">
                <Image src="/venue-4.jpg" alt="Grand Banquet Hall" fill className="object-cover" sizes="600px" />
              </div>
              <div className="relative h-44 rounded overflow-hidden img-card">
                <Image src="/venue-3.jpg" alt="AC Room" fill className="object-cover" sizes="300px" />
              </div>
              <div className="relative h-44 rounded overflow-hidden img-card">
                <Image src="/venue-7.jpg" alt="Hall Interior" fill className="object-cover" sizes="300px" />
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll direction="right">
            <p className="section-label mb-4">About Sayamwar Hall</p>
            <h2 className="font-[var(--font-playfair)] text-4xl md:text-5xl font-bold text-[#0C0806] leading-tight mb-4">
              Danapur&apos;s Most<br /><span className="gold-shimmer">Loved Venue</span>
            </h2>
            <div className="gold-line-left mb-6" />
            <p className="text-[#0C0806]/60 text-base leading-relaxed mb-5">
              At Sayamwar Hall &amp; Homestay, we believe every celebration deserves perfection. Our grand AC banquet hall accommodates 200–300 guests with crystal chandeliers, custom LED ambience, and impeccable service.
            </p>
            <p className="text-[#0C0806]/60 text-base leading-relaxed mb-10">
              From intimate engagements to grand weddings, our expert team handles every detail — décor, catering, entertainment — so you can be present in every moment.
            </p>
            <div className="grid grid-cols-2 gap-5 mb-10">
              {[
                ['200+', 'Events Hosted'],
                ['300', 'Guest Capacity'],
                ['3', 'Food Menus'],
                ['5★', 'Google Rating'],
              ].map(([n, l]) => (
                <div key={l} className="border-l-2 border-[#C9A84C] pl-4">
                  <p className="font-[var(--font-playfair)] text-2xl font-bold text-[#0C0806]">{n}</p>
                  <p className="text-[#0C0806]/50 text-xs uppercase tracking-widest">{l}</p>
                </div>
              ))}
            </div>
            <a href="/packages" className="btn-gold text-sm">Explore Packages</a>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ══════════════════════════════════════
          SERVICES — alternating large cards
      ══════════════════════════════════════ */}
      <section className="bg-[#0C0806]">
        {services.map((s, i) => (
          <div key={s.href} className={`max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-0 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
            {/* Image */}
            <AnimateOnScroll direction={i % 2 === 0 ? 'left' : 'right'} className={`relative h-[420px] ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
              <div className="relative h-full w-full rounded-sm overflow-hidden img-card">
                <Image src={s.img} alt={s.title} fill className="object-cover" sizes="700px" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute top-5 left-5 bg-[#C9A84C] text-[#0C0806] text-xs font-bold uppercase tracking-widest px-3 py-1.5">
                  {s.tag}
                </div>
              </div>
            </AnimateOnScroll>

            {/* Text */}
            <AnimateOnScroll direction={i % 2 === 0 ? 'right' : 'left'} className={`px-0 lg:px-14 ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
              <p className="section-label mb-4">{s.tag}</p>
              <h3 className="font-[var(--font-playfair)] text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">{s.title}</h3>
              <div className="gold-line-left mb-6" />
              <p className="text-white/55 text-base leading-relaxed mb-8">{s.desc}</p>
              <p className="font-[var(--font-playfair)] text-2xl text-[#C9A84C] font-bold mb-8">{s.price}</p>
              <Link href={s.href} className="btn-gold text-sm">Explore →</Link>
            </AnimateOnScroll>
          </div>
        ))}
      </section>

      {/* ══════════════════════════════════════
          STATS
      ══════════════════════════════════════ */}
      <section className="bg-[#C9A84C] py-16 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { target: 200, suffix: '+', label: 'Events Hosted' },
            { target: 300, suffix: '+', label: 'Guest Capacity' },
            { target: 10,  suffix: '+', label: 'Room Options' },
            { target: 5,   suffix: '★', label: 'Google Rating' },
          ].map((s) => (
            <div key={s.label}>
              <p className="font-[var(--font-playfair)] text-4xl md:text-5xl font-bold text-[#0C0806]">
                <Counter target={s.target} suffix={s.suffix} />
              </p>
              <p className="text-[#0C0806]/65 text-xs uppercase tracking-widest mt-2">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════
          WHAT'S INCLUDED
      ══════════════════════════════════════ */}
      <section className="py-28 px-6 bg-[#0C0806]">
        <div className="max-w-5xl mx-auto">
          <AnimateOnScroll className="text-center mb-16">
            <p className="section-label mb-4">All Packages Include</p>
            <h2 className="font-[var(--font-playfair)] text-4xl md:text-5xl font-bold text-white">Everything Arranged</h2>
            <div className="gold-line" />
            <p className="text-white/40 text-sm mt-5 max-w-md mx-auto">Not a single detail left to chance — we handle it all so you celebrate freely</p>
          </AnimateOnScroll>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-px bg-[#C9A84C]/10">
            {whatsIncluded.map((item, i) => (
              <AnimateOnScroll key={item.label} delay={i * 50}>
                <div className="glass hover:bg-white/10 transition-all duration-400 p-7 text-center group">
                  <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                  <p className="text-white/70 text-xs uppercase tracking-widest group-hover:text-[#C9A84C] transition-colors">{item.label}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          GALLERY
      ══════════════════════════════════════ */}
      <section className="py-28 px-6 bg-[#F7F2EA]">
        <div className="max-w-6xl mx-auto">
          <AnimateOnScroll className="text-center mb-16">
            <p className="section-label mb-4">Our Venue</p>
            <h2 className="font-[var(--font-playfair)] text-4xl md:text-5xl font-bold text-[#0C0806]">A Glimpse of Grandeur</h2>
            <div className="gold-line" />
          </AnimateOnScroll>

          <div className="grid grid-cols-12 gap-3">
            <AnimateOnScroll className="col-span-12 md:col-span-7 row-span-2" direction="left">
              <div className="relative h-[500px] rounded overflow-hidden img-card">
                <Image src="/venue-5.jpg" alt="Sayamwar Hall Building" fill className="object-cover" sizes="700px" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <p className="section-label mb-1">Our Building</p>
                  <p className="font-[var(--font-playfair)] text-white text-xl font-bold">Sayamwar Hall &amp; Homestay</p>
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll className="col-span-12 md:col-span-5" delay={100}>
              <div className="relative h-60 rounded overflow-hidden img-card">
                <Image src="/venue-4.jpg" alt="Grand Banquet Hall" fill className="object-cover" sizes="500px" />
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll className="col-span-12 md:col-span-5" delay={200}>
              <div className="relative h-60 rounded overflow-hidden img-card">
                <Image src="/venue-2.jpg" alt="Birthday Setup" fill className="object-cover" sizes="500px" />
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll className="col-span-6 md:col-span-4" delay={150}>
              <div className="relative h-52 rounded overflow-hidden img-card">
                <Image src="/venue-6.jpg" alt="Premium Room" fill className="object-cover" sizes="400px" />
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll className="col-span-6 md:col-span-4" delay={200}>
              <div className="relative h-52 rounded overflow-hidden img-card">
                <Image src="/venue-7.jpg" alt="Hall Interior" fill className="object-cover" sizes="400px" />
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll className="col-span-12 md:col-span-4" delay={250}>
              <div className="relative h-52 rounded overflow-hidden img-card">
                <Image src="/venue-3.jpg" alt="AC Room" fill className="object-cover" sizes="400px" />
              </div>
            </AnimateOnScroll>
          </div>

          <AnimateOnScroll className="text-center mt-10">
            <Link href="/gallery" className="btn-gold text-sm">View Full Gallery →</Link>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ══════════════════════════════════════
          TESTIMONIALS
      ══════════════════════════════════════ */}
      <section className="py-28 px-6 bg-[#120E0A]">
        <div className="max-w-6xl mx-auto">
          <AnimateOnScroll className="text-center mb-16">
            <p className="section-label mb-4">Testimonials</p>
            <h2 className="font-[var(--font-playfair)] text-4xl md:text-5xl font-bold text-white">Voices of Our Guests</h2>
            <div className="gold-line" />
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reviews.map((r, i) => (
              <AnimateOnScroll key={r.name} delay={i * 120}>
                <div className="glass rounded p-8 hover:border-[#C9A84C]/40 transition-all duration-500 group">
                  <div className="flex items-center gap-1 mb-5">
                    {Array.from({ length: r.rating }).map((_, j) => (
                      <span key={j} className="text-[#C9A84C] text-sm">★</span>
                    ))}
                  </div>
                  <p className="font-[var(--font-playfair)] text-white/80 text-lg italic leading-relaxed mb-6">
                    &ldquo;{r.text}&rdquo;
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#C9A84C]/20 flex items-center justify-center text-[#C9A84C] font-bold font-[var(--font-playfair)]">
                      {r.name[0]}
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm">{r.name}</p>
                      <p className="text-white/40 text-xs uppercase tracking-widest">{r.event}</p>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          INQUIRY FORM
      ══════════════════════════════════════ */}
      <section className="py-28 px-6 bg-[#F7F2EA]">
        <div className="max-w-xl mx-auto">
          <AnimateOnScroll className="text-center mb-12">
            <p className="section-label mb-4">Get in Touch</p>
            <h2 className="font-[var(--font-playfair)] text-4xl md:text-5xl font-bold text-[#0C0806]">Begin Your Story</h2>
            <div className="gold-line" />
            <p className="text-[#0C0806]/50 text-sm mt-5">Tell us about your event and we&apos;ll respond on WhatsApp within minutes</p>
          </AnimateOnScroll>
          <AnimateOnScroll>
            <div className="bg-white rounded p-10 shadow-2xl border border-[#C9A84C]/10">
              <LeadForm />
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ══════════════════════════════════════
          MAP
      ══════════════════════════════════════ */}
      <section className="py-28 px-6 bg-[#0C0806]">
        <div className="max-w-5xl mx-auto">
          <AnimateOnScroll className="text-center mb-12">
            <p className="section-label mb-4">Find Us</p>
            <h2 className="font-[var(--font-playfair)] text-4xl font-bold text-white">Our Location</h2>
            <div className="gold-line" />
            <p className="text-white/40 text-sm mt-4">Danapur, Patna, Bihar</p>
          </AnimateOnScroll>
          <AnimateOnScroll>
            <div className="rounded overflow-hidden shadow-2xl border border-[#C9A84C]/20">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.85!2d85.0523556!3d25.6292816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed570055ae3209:0xecb1a935000a9895!2sSayamwar%20Hall%20%26%20Homestay!5e0!3m2!1sen!2sin!4v1749000000000!5m2!1sen!2sin"
                width="100%" height="400" style={{ border: 0 }} allowFullScreen loading="lazy"
                referrerPolicy="no-referrer-when-downgrade" title="Sayamwar Hall Location"
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <a href="tel:9942972484" className="btn-gold text-sm justify-center">📞 9942972484</a>
              <a href="https://wa.me/919942972484" target="_blank" rel="noopener noreferrer"
                className="btn-outline text-sm justify-center"><span>💬 WhatsApp Us</span></a>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  )
}
