import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import AnimateOnScroll from '@/components/AnimateOnScroll'
import Counter from '@/components/Counter'
import LeadForm from '@/components/LeadForm'
import { getAllPosts } from '@/lib/blog'

export const revalidate = 300

const homeFaqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the capacity of Sayamwar Hall?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sayamwar Hall can comfortably accommodate 200 to 300 guests in a fully air-conditioned setup with professional lighting and a complete sound system.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the cost of booking Sayamwar Hall?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Packages start at ₹85,000 for birthday and engagement events, and ₹1,51,000 for weddings. All packages are all-inclusive with decoration, DJ, catering, and 4 rooms included.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you provide catering services?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We offer three in-house catering menus: Shagun (₹999/plate veg), Vivah (₹1,199/plate veg), and Swayamvar (₹1,399/plate veg), with non-veg options also available.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are rooms available for wedding guests?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Sayamwar Hall & Homestay has on-site AC and non-AC rooms starting from ₹1,500/night. All wedding packages include 4 rooms. Additional rooms can be booked for out-of-town guests.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the booking process?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'WhatsApp or call us on 7646028228 to check your date availability. Confirm with an advance payment to lock in your date. We are open 24 hours, 7 days a week.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where is Sayamwar Hall located?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sayamwar Hall & Homestay is at Gola Road, Adarsh Vihar Colony, Lane 5, near T Point, beside Hotel King Regency, Danapur, Patna, Bihar 801503. Just 5 minutes from Danapur railway station.',
      },
    },
    {
      '@type': 'Question',
      name: 'What events can be held at Sayamwar Hall?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We host weddings, receptions, birthday parties, engagement ceremonies, corporate events, and private gatherings. The hall is available 24 hours, 7 days a week.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is parking available at Sayamwar Hall?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, ample parking is available on-site for guests. The venue is located on Gola Road, Danapur with easy access from Danapur railway station, Boring Road, and NH-30.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Sayamwar Hall easy to reach from Khagaul, Phulwari Sharif, Saguna More or Bailey Road?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Sayamwar Hall on Gola Road, Danapur is a short drive from Khagaul, Phulwari Sharif, Saguna More and Bailey Road — most guests from these areas reach us within 15–25 minutes.',
      },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Best Banquet Hall in Patna | Wedding Venue Danapur | Sayamwar Hall',
  description: 'Best banquet hall in Patna for weddings, birthdays & events. AC hall for 200–300 guests in Danapur. All-inclusive packages from ₹85,000. Rooms from ₹1,500/night. Call 7646028228.',
  keywords: 'best banquet hall in patna, wedding venue patna, marriage hall danapur, birthday party hall patna, banquet hall near me patna, event hall danapur patna, rooms near danapur',
  alternates: { canonical: 'https://sayamwar.com/' },
}

const marqueeItems = ['Weddings', 'Birthday Celebrations', 'Receptions', 'Engagements', 'Corporate Events', 'Comfortable Stays', 'Intimate Gatherings', 'Grand Festivities']

const services = [
  {
    img: '/pkg-wedding.jpg', tag: 'Sacred Unions',
    title: 'Wedding Venue Patna',
    desc: 'Grand AC hall for 200–300 guests with mandap, stage decoration, DJ, catering & 4 rooms. All-inclusive wedding packages from ₹1,51,000.',
    href: '/wedding-venue-patna', price: 'From ₹1,51,000',
  },
  {
    img: '/venue-2.jpg', tag: 'Joyful Moments',
    title: 'Birthday Party Hall',
    desc: 'Custom themed birthday setups for kids to adults — selfie point, DJ, decoration, catering & more for 200–300 guests.',
    href: '/birthday-party-hall-patna', price: 'From ₹85,000',
  },
  {
    img: '/gallery-banquet-hall-main.jpg', tag: 'Grand Events',
    title: 'Banquet Hall Patna',
    desc: 'Fully AC banquet hall in Danapur, Patna with crystal chandeliers, LED ambience, professional stage & world-class catering.',
    href: '/banquet-hall-patna', price: 'Get Free Quote',
  },
  {
    img: '/venue-6.jpg', tag: 'Restful Stay',
    title: 'Rooms Near Danapur',
    desc: 'AC & non-AC rooms from ₹1,500/night — attached bathroom, Wi-Fi, power backup, 5 min from Danapur railway station.',
    href: '/rooms', price: 'From ₹1,500/night',
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
  { icon: '🎵', label: 'DJ & Sound System' },
  { icon: '🛡️', label: 'Guard / Bouncer' },
  { icon: '☕', label: 'Night Coffee' },
  { icon: '🛏️', label: '4 Rooms Included' },
]

const reviews = [
  { name: 'Rajesh Kumar', event: 'Wedding', text: 'Every detail was perfection. The décor, the food, the service — our guests are still talking about it. Best wedding venue in Danapur.', rating: 5 },
  { name: 'Priya Singh', event: 'Birthday Party', text: 'Best birthday venue in Danapur. The team went above and beyond. Absolutely memorable evening for our daughter.', rating: 5 },
  { name: 'Amit Sharma', event: 'Corporate Event', text: 'Professional, punctual, and flawless execution. Our annual gathering was a grand success. Highly recommended.', rating: 5 },
  { name: 'Sunita Devi', event: 'Reception', text: 'The hall looked breathtaking. Premium décor and delicious food. Highly recommend to everyone looking for a banquet in Patna.', rating: 5 },
]

const faqs = [
  {
    q: 'What is the capacity of Sayamwar Hall?',
    a: 'Sayamwar Hall comfortably seats 200–300 guests in a fully air-conditioned hall with crystal chandeliers, LED ambience, and professional stage lighting.',
  },
  {
    q: 'What is the cost of booking the hall?',
    a: 'Packages start at ₹85,000 for birthday and engagement events. Wedding packages start at ₹1,51,000 — all-inclusive with decoration, DJ, catering, and 4 rooms. No hidden charges.',
  },
  {
    q: 'Do you provide catering services?',
    a: 'Yes. We offer three in-house menus — Shagun (₹999/plate veg), Vivah (₹1,199/plate veg), and Swayamvar (₹1,399/plate veg). Non-veg options available at ₹200 extra per plate.',
  },
  {
    q: 'Are rooms available for wedding guests?',
    a: 'Yes. We have Standard (₹1,500/night), Deluxe AC (₹1,800/night), and Premium Suite (₹2,500/night) rooms on-site. All wedding packages include 4 rooms.',
  },
  {
    q: 'What is the booking process?',
    a: 'WhatsApp or call us on 7646028228 to check your date availability. Confirm by paying an advance amount. We are open 24 hours, 7 days a week.',
  },
  {
    q: 'How far is Sayamwar Hall from Danapur railway station?',
    a: 'Just 5 minutes (2 km) from Danapur railway station. Located on Gola Road, Adarsh Vihar Colony — easily accessible from Patna Junction (25 min) and Patna Airport (30 min).',
  },
  {
    q: 'Is parking available?',
    a: 'Yes, ample free parking is available on-site for all guests. The venue is on Gola Road with easy vehicle access from NH-30, Boring Road, and Danapur station.',
  },
  {
    q: 'Is Sayamwar Hall easy to reach from Khagaul, Phulwari Sharif, Saguna More or Bailey Road?',
    a: 'Yes. We regularly host guests from Khagaul, Phulwari Sharif, Saguna More and Bailey Road — all within a 15–25 minute drive of our Gola Road location in Danapur.',
  },
  {
    q: 'Can you host corporate events and birthday parties?',
    a: 'Yes. We host weddings, receptions, engagements, birthday parties, corporate events, and private gatherings. The hall is available 24 hours with flexible booking slots.',
  },
]

export default async function HomePage() {
  const posts = await getAllPosts()
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homeFaqJsonLd) }} />

      {/* ══════════════════════════════════════
          HERO — SEO + Conversion focused
      ══════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden -mt-[72px]">
        <Image src="/hero-bg.jpg" alt="Best Banquet Hall in Patna — Sayamwar Hall Danapur" fill className="object-cover object-center" priority sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/55 to-black/80" />
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black/35 to-transparent" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black/35 to-transparent" />

        <div className="relative z-10 text-center px-5 max-w-5xl mx-auto w-full">

          {/* Location tag */}
          <div className="anim-0 flex items-center justify-center gap-2 mb-4 md:mb-6">
            <div className="h-px w-6 md:w-10 bg-[var(--gold)]/50" />
            <p className="section-label tracking-[0.2em] md:tracking-[0.4em]">Danapur • Patna • Bihar</p>
            <div className="h-px w-6 md:w-10 bg-[var(--gold)]/50" />
          </div>

          {/* Main SEO heading */}
          <h1 className="anim-1 font-[var(--font-playfair)] leading-[1.15] mb-4 md:mb-5">
            <span className="block text-2xl sm:text-3xl md:text-4xl font-normal text-white/90 mb-2">Best Banquet Hall &amp; Wedding Venue in Patna</span>
            <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold gold-shimmer">For Weddings & Events</span>
          </h1>

          {/* Key info strip */}
          <div className="anim-2 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 mb-4 md:mb-7 text-white/70 text-xs md:text-sm">
            <span>🏛️ AC Hall · 200–300 Guests</span>
            <span className="hidden sm:inline text-[var(--gold)]/50">|</span>
            <span>💒 Weddings from ₹1,51,000</span>
            <span className="hidden sm:inline text-[var(--gold)]/50">|</span>
            <span>🎂 Birthday from ₹85,000</span>
            <span className="hidden sm:inline text-[var(--gold)]/50">|</span>
            <span>🛏️ Rooms from ₹1,500/night</span>
          </div>

          {/* Brand */}
          <div className="anim-3 flex items-center justify-center gap-3 md:gap-5 mb-6 md:mb-8">
            <div className="h-px w-8 md:w-16 bg-gradient-to-r from-transparent to-[var(--gold)]/70" />
            <span className="text-[var(--gold)] text-[9px] md:text-[10px] tracking-[0.3em] md:tracking-[0.45em] uppercase font-semibold">Sayamwar Hall &amp; Homestay</span>
            <div className="h-px w-8 md:w-16 bg-gradient-to-l from-transparent to-[var(--gold)]/70" />
          </div>

          {/* CTAs */}
          <div className="anim-4">
            {/* Mobile */}
            <div className="flex sm:hidden flex-col items-center gap-3">
              <div className="flex gap-3 w-full max-w-[300px]">
                <a href="https://wa.me/917646028228?text=Hello!%20I%20want%20to%20check%20availability%20at%20Sayamwar%20Hall"
                  target="_blank" rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center bg-[var(--gold)] hover:bg-[var(--gold-light)] text-white font-bold text-xs py-3 px-2 rounded tracking-wide transition-colors">
                  ✅ Check Availability
                </a>
                <a href="tel:7646028228"
                  className="flex-1 flex items-center justify-center border border-[var(--gold)]/70 text-white font-bold text-xs py-3 px-2 rounded tracking-wide hover:bg-[var(--gold)]/10 transition-colors">
                  📞 Call Now
                </a>
              </div>
              <Link href="/packages" className="text-[var(--gold)]/80 text-[10px] tracking-[0.25em] uppercase hover:text-[var(--gold)] transition-colors">
                View Packages →
              </Link>
            </div>
            {/* Desktop */}
            <div className="hidden sm:flex flex-row gap-4 justify-center">
              <a href="https://wa.me/917646028228?text=Hello!%20I%20want%20to%20check%20availability%20at%20Sayamwar%20Hall"
                target="_blank" rel="noopener noreferrer" className="btn-gold text-sm">
                ✅ Check Availability
              </a>
              <a href="tel:7646028228" className="btn-outline text-sm">
                <span>📞 Call Now: 7646028228</span>
              </a>
              <Link href="/packages" className="btn-outline text-sm">
                <span>View Packages</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="hidden md:flex absolute bottom-10 left-1/2 -translate-x-1/2 flex-col items-center gap-2">
          <div className="w-px h-12 bg-gradient-to-b from-transparent via-[var(--gold)]/60 to-[var(--gold)]" />
          <div className="w-1.5 h-1.5 rounded-full bg-[var(--gold)] animate-[pulseDot_1.5s_infinite]" />
        </div>
      </section>

      {/* ══════════════════════════════════════
          MARQUEE STRIP
      ══════════════════════════════════════ */}
      <div className="bg-[var(--gold)] py-4 overflow-hidden">
        <div className="marquee-track">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="flex items-center text-white font-[var(--font-playfair)] text-sm font-semibold tracking-widest uppercase mx-10 whitespace-nowrap">
              {item}
              <span className="ml-10 text-white/50">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* ══════════════════════════════════════
          INTRO — ABOUT
      ══════════════════════════════════════ */}
      <section className="py-14 md:py-28 px-6 bg-[var(--ivory)]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          <AnimateOnScroll direction="left">
            <div className="grid grid-cols-2 gap-3">
              <div className="relative h-48 sm:h-72 rounded overflow-hidden img-card col-span-2">
                <Image src="/gallery-banquet-hall-main.jpg" alt="Best Banquet Hall in Patna — Sayamwar Hall" fill className="object-cover" sizes="600px" />
              </div>
              <div className="relative h-32 sm:h-44 rounded overflow-hidden img-card">
                <Image src="/gallery-indoor-mandap.jpg" alt="Indoor Mandap Setup — Sayamwar Hall" fill className="object-cover" sizes="300px" />
              </div>
              <div className="relative h-32 sm:h-44 rounded overflow-hidden img-card">
                <Image src="/venue-6.jpg" alt="AC Room — Sayamwar Hall Homestay" fill className="object-cover" sizes="300px" />
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll direction="right">
            <p className="section-label mb-4">About Sayamwar Hall</p>
            <h2 className="font-[var(--font-playfair)] text-3xl md:text-5xl font-bold text-[var(--black)] leading-tight mb-4">
              Patna&apos;s Most<br /><span className="gold-shimmer">Trusted Venue</span>
            </h2>
            <div className="gold-line-left mb-6" />
            <p className="text-[var(--black)]/60 text-base leading-relaxed mb-5">
              Sayamwar Hall &amp; Homestay is Danapur, Patna&apos;s most trusted banquet hall — a fully AC hall for 200–300 guests with crystal chandeliers, LED ambience, and all-inclusive packages that cover everything from decoration to catering.
            </p>
            <p className="text-[var(--black)]/60 text-base leading-relaxed mb-10">
              Conveniently located on Gola Road, 5 minutes from Danapur railway station and easily reachable from Bailey Road, Saguna More, Khagaul and Phulwari Sharif. Open 24 hours, 7 days. Over <strong>500 successful events</strong> hosted since inception.
            </p>
            <div className="grid grid-cols-2 gap-5 mb-10">
              {[
                ['500+', 'Events Hosted'],
                ['300', 'Guest Capacity'],
                ['3', 'Food Menus'],
                ['4.8★', 'Google Rating'],
              ].map(([n, l]) => (
                <div key={l} className="border-l-2 border-[var(--gold)] pl-4">
                  <p className="font-[var(--font-playfair)] text-2xl font-bold text-[var(--black)]">{n}</p>
                  <p className="text-[var(--black)]/50 text-xs uppercase tracking-widest">{l}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <a href="https://wa.me/917646028228?text=Hello!%20I%20want%20to%20book%20Sayamwar%20Hall" target="_blank" rel="noopener noreferrer" className="btn-gold text-sm">✅ Check Availability</a>
              <Link href="/packages" className="btn-outline text-sm"><span>View Packages</span></Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ══════════════════════════════════════
          SERVICES
      ══════════════════════════════════════ */}
      <section className="bg-[var(--black)]">
        {services.map((s, i) => (
          <div key={s.href} className={`max-w-7xl mx-auto px-6 py-10 md:py-20 grid grid-cols-1 lg:grid-cols-2 gap-0 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
            <AnimateOnScroll direction={i % 2 === 0 ? 'left' : 'right'} className={`relative h-[240px] sm:h-[320px] lg:h-[420px] ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
              <div className="relative h-full w-full rounded-sm overflow-hidden img-card">
                <Image src={s.img} alt={s.title} fill className="object-cover" sizes="700px" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute top-5 left-5 bg-[var(--gold)] text-white text-xs font-bold uppercase tracking-widest px-3 py-1.5">
                  {s.tag}
                </div>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll direction={i % 2 === 0 ? 'right' : 'left'} className={`px-0 lg:px-14 ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
              <p className="section-label mb-4">{s.tag}</p>
              <h3 className="font-[var(--font-playfair)] text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">{s.title}</h3>
              <div className="gold-line-left mb-6" />
              <p className="text-white/55 text-base leading-relaxed mb-8">{s.desc}</p>
              <p className="font-[var(--font-playfair)] text-2xl text-[var(--gold)] font-bold mb-8">{s.price}</p>
              <Link href={s.href} className="btn-gold text-sm">Explore →</Link>
            </AnimateOnScroll>
          </div>
        ))}
      </section>

      {/* ══════════════════════════════════════
          STATS — Trust bar
      ══════════════════════════════════════ */}
      <section className="bg-[var(--gold)] py-16 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { target: 500, suffix: '+', label: 'Events Hosted' },
            { target: 300, suffix: '+', label: 'Guest Capacity' },
            { target: 10,  suffix: '+', label: 'Room Options' },
          ].map((s) => (
            <div key={s.label}>
              <p className="font-[var(--font-playfair)] text-4xl md:text-5xl font-bold text-white">
                <Counter target={s.target} suffix={s.suffix} />
              </p>
              <p className="text-white/70 text-xs uppercase tracking-widest mt-2">{s.label}</p>
            </div>
          ))}
          <div>
            <p className="font-[var(--font-playfair)] text-4xl md:text-5xl font-bold text-white">4.8★</p>
            <p className="text-white/70 text-xs uppercase tracking-widest mt-2">Google Rating</p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          WHAT'S INCLUDED
      ══════════════════════════════════════ */}
      <section className="py-14 md:py-28 px-6 bg-[var(--black)]">
        <div className="max-w-5xl mx-auto">
          <AnimateOnScroll className="text-center mb-10 md:mb-16">
            <p className="section-label mb-6">All Packages Include</p>
            <h2 className="font-[var(--font-playfair)] text-4xl md:text-6xl font-bold text-white leading-tight">
              Everything <span className="gold-shimmer">Arranged</span>
            </h2>
            <div className="flex items-center justify-center gap-5 mt-7 mb-6">
              <div className="h-px w-20 bg-gradient-to-r from-transparent to-[var(--gold)]/60" />
              <span className="text-[var(--gold)] text-xl">✦</span>
              <div className="h-px w-20 bg-gradient-to-l from-transparent to-[var(--gold)]/60" />
            </div>
            <p className="font-[var(--font-playfair)] text-white/50 text-base italic max-w-lg mx-auto leading-relaxed">
              Not a single detail left to chance — we handle it all so you celebrate freely
            </p>
          </AnimateOnScroll>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-px bg-[var(--gold)]/10">
            {whatsIncluded.map((item, i) => (
              <AnimateOnScroll key={item.label} delay={i * 50}>
                <div className="glass hover:bg-white/10 transition-all duration-500 p-5 md:p-8 text-center group cursor-default">
                  <p className="text-[var(--gold)]/60 text-base mb-2 group-hover:text-[var(--gold)] transition-colors duration-300">✦</p>
                  <p className="font-[var(--font-playfair)] text-white font-semibold text-sm md:text-base leading-snug tracking-wide group-hover:text-[var(--gold)] transition-colors duration-300">{item.label}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          GALLERY PREVIEW
      ══════════════════════════════════════ */}
      <section className="py-14 md:py-28 px-6 bg-[var(--ivory)]">
        <div className="max-w-6xl mx-auto">
          <AnimateOnScroll className="text-center mb-10 md:mb-16">
            <p className="section-label mb-4">Our Venue</p>
            <h2 className="font-[var(--font-playfair)] text-4xl md:text-5xl font-bold text-[var(--black)]">A Glimpse of Grandeur</h2>
            <div className="gold-line" />
          </AnimateOnScroll>

          <div className="grid grid-cols-12 gap-3">
            <AnimateOnScroll className="col-span-12 md:col-span-7 row-span-2" direction="left">
              <div className="relative h-[260px] sm:h-[380px] md:h-[500px] rounded overflow-hidden img-card">
                <Image src="/gallery-banquet-hall-main.jpg" alt="Best Banquet Hall in Patna — Sayamwar Hall Interior" fill className="object-cover" sizes="700px" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <p className="section-label mb-1">Our Venue</p>
                  <p className="font-[var(--font-playfair)] text-white text-xl font-bold">Sayamwar Hall &amp; Homestay</p>
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll className="col-span-12 md:col-span-5" delay={100}>
              <div className="relative h-44 sm:h-60 rounded overflow-hidden img-card">
                <Image src="/gallery-indoor-mandap.jpg" alt="Indoor Mandap Setup — Wedding Venue Patna" fill className="object-cover" sizes="500px" />
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll className="col-span-12 md:col-span-5" delay={200}>
              <div className="relative h-44 sm:h-60 rounded overflow-hidden img-card">
                <Image src="/gallery-selfie-point-1.jpg" alt="Selfie Point — Banquet Hall Danapur" fill className="object-cover" sizes="500px" />
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll className="col-span-6 md:col-span-4" delay={150}>
              <div className="relative h-36 sm:h-52 rounded overflow-hidden img-card">
                <Image src="/gallery-outside-stage.jpg" alt="Outside Stage — Sayamwar Hall" fill className="object-cover" sizes="400px" />
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll className="col-span-6 md:col-span-4" delay={200}>
              <div className="relative h-36 sm:h-52 rounded overflow-hidden img-card">
                <Image src="/gallery-lawn.jpg" alt="Banquet Hall Lawn — Sayamwar Hall Patna" fill className="object-cover" sizes="400px" />
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll className="col-span-12 md:col-span-4" delay={250}>
              <div className="relative h-36 sm:h-52 rounded overflow-hidden img-card">
                <Image src="/venue-6.jpg" alt="AC Room — Sayamwar Homestay Danapur" fill className="object-cover" sizes="400px" />
              </div>
            </AnimateOnScroll>
          </div>

          <AnimateOnScroll className="text-center mt-10">
            <Link href="/gallery" className="btn-gold text-sm">View Full Gallery →</Link>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ══════════════════════════════════════
          BLOG PREVIEW
      ══════════════════════════════════════ */}
      <section className="py-14 md:py-28 px-6 bg-[var(--ivory)]">
        <div className="max-w-6xl mx-auto">
          <AnimateOnScroll className="text-center mb-10 md:mb-16">
            <p className="section-label mb-4">Tips & Guides</p>
            <h2 className="font-[var(--font-playfair)] text-4xl md:text-5xl font-bold text-[var(--black)]">From Our Blog</h2>
            <div className="gold-line" />
            <p className="text-[var(--black)]/50 text-sm mt-5 max-w-lg mx-auto">
              Expert advice on planning events, weddings, and stays in Patna &amp; Danapur.
            </p>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {posts.slice(0, 3).map((post, i) => (
              <AnimateOnScroll key={post.slug} delay={i * 100}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-md border border-[var(--gold)]/10 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image src={post.image} alt={post.title} fill className="object-cover transition-transform duration-500 group-hover:scale-[1.06]" sizes="(max-width: 768px) 100vw, 33vw" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
                    <div className="absolute top-4 left-4 bg-[var(--gold)] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                      {post.category}
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="font-[var(--font-playfair)] text-lg font-bold text-[var(--black)] leading-snug mb-3 group-hover:text-[var(--maroon)] transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-[var(--black)]/55 text-sm leading-relaxed mb-5 flex-1 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center justify-between pt-4 border-t border-[var(--gold)]/15">
                      <span className="text-[var(--black)]/40 text-xs">{post.readTime}</span>
                      <span className="text-[var(--gold)] text-xs font-bold group-hover:text-[var(--gold-dark)] transition-colors">Read More →</span>
                    </div>
                  </div>
                </Link>
              </AnimateOnScroll>
            ))}
          </div>

          <AnimateOnScroll className="text-center mt-10">
            <Link href="/blog" className="btn-gold text-sm">View All Articles →</Link>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ══════════════════════════════════════
          TESTIMONIALS
      ══════════════════════════════════════ */}
      <section className="py-14 md:py-28 px-6 bg-[var(--black-2)]">
        <div className="max-w-6xl mx-auto">
          <AnimateOnScroll className="text-center mb-10 md:mb-16">
            <p className="section-label mb-4">Trusted by Patna Families</p>
            <h2 className="font-[var(--font-playfair)] text-4xl md:text-5xl font-bold text-white">500+ Successful Events</h2>
            <div className="gold-line" />
            <p className="text-white/40 text-sm mt-4 max-w-md mx-auto">Real reviews from families who celebrated at Sayamwar Hall</p>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reviews.map((r, i) => (
              <AnimateOnScroll key={r.name} delay={i * 120}>
                <div className="glass rounded p-5 md:p-8 hover:border-[var(--gold)]/40 transition-all duration-500 group">
                  <div className="flex items-center gap-1 mb-3">
                    {Array.from({ length: r.rating }).map((_, j) => (
                      <span key={j} className="text-[var(--gold)] text-sm">★</span>
                    ))}
                    <span className="ml-2 text-white/30 text-xs">Google Review</span>
                  </div>
                  <p className="font-[var(--font-playfair)] text-white/80 text-lg italic leading-relaxed mb-6">
                    &ldquo;{r.text}&rdquo;
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[var(--gold)]/20 flex items-center justify-center text-[var(--gold)] font-bold font-[var(--font-playfair)]">
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
          <AnimateOnScroll className="text-center mt-10">
            <a
              href="https://www.google.com/maps/place/Sayamwar+Hall+%26+Homestay/@25.6292816,85.0523556,17z"
              target="_blank" rel="noopener noreferrer"
              className="btn-outline text-sm inline-flex"
            >
              <span>⭐ Read All Google Reviews</span>
            </a>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ══════════════════════════════════════
          INQUIRY FORM — Conversion focused
      ══════════════════════════════════════ */}
      <section className="py-14 md:py-28 px-6 bg-[var(--ivory)]">
        <div className="max-w-xl mx-auto">
          <AnimateOnScroll className="text-center mb-8 md:mb-12">
            <p className="section-label mb-4">Free Quote — No Obligation</p>
            <h2 className="font-[var(--font-playfair)] text-4xl md:text-5xl font-bold text-[var(--black)]">Check Availability</h2>
            <div className="gold-line" />
            <p className="text-[var(--black)]/50 text-sm mt-5">Fill in your event details — we&apos;ll reply on WhatsApp within minutes</p>
          </AnimateOnScroll>
          <AnimateOnScroll>
            <div className="bg-white rounded p-5 md:p-10 shadow-2xl border border-[var(--gold)]/10">
              <LeadForm />
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ══════════════════════════════════════
          FAQ SECTION
      ══════════════════════════════════════ */}
      <section className="py-14 md:py-28 px-6 bg-[var(--black)]">
        <div className="max-w-3xl mx-auto">
          <AnimateOnScroll className="text-center mb-10 md:mb-16">
            <p className="section-label mb-4">Common Questions</p>
            <h2 className="font-[var(--font-playfair)] text-4xl md:text-5xl font-bold text-white">
              Frequently Asked <span className="gold-shimmer">Questions</span>
            </h2>
            <div className="gold-line" />
          </AnimateOnScroll>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <AnimateOnScroll key={i} delay={i * 60}>
                <details className="group glass rounded border border-[var(--gold)]/10 hover:border-[var(--gold)]/30 transition-colors">
                  <summary className="flex items-center justify-between gap-4 p-5 md:p-6 cursor-pointer list-none">
                    <span className="font-[var(--font-playfair)] text-white font-semibold text-base leading-snug">{faq.q}</span>
                    <span className="text-[var(--gold)] text-lg flex-shrink-0 transition-transform duration-300 group-open:rotate-45">+</span>
                  </summary>
                  <div className="px-5 md:px-6 pb-5 pt-0">
                    <div className="h-px bg-[var(--gold)]/15 mb-4" />
                    <p className="text-white/60 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                </details>
              </AnimateOnScroll>
            ))}
          </div>

          <AnimateOnScroll className="text-center mt-10">
            <p className="text-white/40 text-sm mb-4">Still have questions?</p>
            <a href="https://wa.me/917646028228?text=Hello!%20I%20have%20a%20question%20about%20Sayamwar%20Hall"
              target="_blank" rel="noopener noreferrer"
              className="btn-gold text-sm">
              💬 Ask on WhatsApp
            </a>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ══════════════════════════════════════
          MAP
      ══════════════════════════════════════ */}
      <section className="py-14 md:py-28 px-6 bg-[var(--black)]">
        <div className="max-w-5xl mx-auto">
          <AnimateOnScroll className="text-center mb-8 md:mb-12">
            <p className="section-label mb-4">Find Us</p>
            <h2 className="font-[var(--font-playfair)] text-4xl font-bold text-white">Gola Road, Danapur, Patna</h2>
            <div className="gold-line" />
            <p className="text-white/40 text-sm mt-4">5 minutes from Danapur Railway Station · 25 minutes from Patna Junction</p>
          </AnimateOnScroll>
          <AnimateOnScroll>
            <div className="rounded overflow-hidden shadow-2xl border border-[var(--gold)]/20">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.85!2d85.0523556!3d25.6292816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed570055ae3209:0xecb1a935000a9895!2sSayamwar%20Hall%20%26%20Homestay!5e0!3m2!1sen!2sin!4v1749000000000!5m2!1sen!2sin"
                width="100%" height="400" style={{ border: 0 }} allowFullScreen loading="lazy"
                referrerPolicy="no-referrer-when-downgrade" title="Sayamwar Hall Location — Gola Road Danapur Patna"
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <a href="tel:7646028228" className="btn-gold text-sm justify-center">📞 Call: 7646028228</a>
              <a href="https://wa.me/917646028228?text=Hello!%20I%20want%20to%20book%20Sayamwar%20Hall" target="_blank" rel="noopener noreferrer"
                className="btn-outline text-sm justify-center"><span>💬 WhatsApp Booking</span></a>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  )
}
