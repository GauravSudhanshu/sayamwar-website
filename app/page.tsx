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
      name: 'What is the best banquet hall in Patna?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sayamwar Hall & Homestay in Danapur, Patna is one of the best banquet halls — a fully AC hall for 200–300 guests with crystal chandeliers, professional stage decoration, catering, DJ, and on-site rooms. Packages start from ₹85,000.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the cost of a banquet hall in Patna?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Banquet hall packages in Patna at Sayamwar Hall start at ₹85,000 for birthday and engagement events, and ₹1,51,000 for weddings. All packages are all-inclusive with no hidden charges.',
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
      name: 'How many guests can the hall accommodate?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sayamwar Hall can comfortably accommodate 200 to 300 guests in a fully air-conditioned setup with professional lighting and a complete sound system.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are rooms available at Sayamwar Hall for guests?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, Sayamwar Hall & Homestay has on-site AC and non-AC rooms starting from ₹1,500 per night. All wedding packages include 4 rooms. Additional rooms can be booked for out-of-town family and guests.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is catering included in the banquet packages?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, catering is available with all packages. Menus include Shagun (₹999/plate veg), Vivah (₹1,199/plate veg), and Swayamvar (₹1,399/plate veg), with non-veg options also available.',
      },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Best Banquet Hall in Patna | Banquet Near Me | Sayamwar Hall Danapur',
  description: 'Looking for banquet hall near you in Patna? Sayamwar Hall & Homestay, Danapur is Patna\'s best low budget banquet hall. Weddings from ₹1,51,000 | Birthday from ₹85,000. Call 7646028228.',
  keywords: 'banquet near me, banquet hall in patna, best banquet hall patna, low budget banquet patna, banquet hall danapur, wedding venue patna near me',
  alternates: { canonical: 'https://sayamwar.com/' },
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

export default async function HomePage() {
  const posts = await getAllPosts()
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homeFaqJsonLd) }} />
      {/* ══════════════════════════════════════
          HERO — Full screen cinematic
      ══════════════════════════════════════ */}
      <section className="relative h-screen min-h-[620px] flex items-center justify-center overflow-hidden -mt-[72px]">
        <Image src="/hero-bg.jpg" alt="Sayamwar Hall" fill className="object-cover object-center" priority sizes="100vw" />
        {/* Deep luxury overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A0303]/80 via-[#1A0303]/55 to-[#1A0303]/85" />
        {/* Gold vignette sides */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#1A0303]/40 to-transparent" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#1A0303]/40 to-transparent" />

        <div className="relative z-10 text-center px-5 max-w-4xl mx-auto w-full">

          {/* Location tag */}
          <div className="anim-0 flex items-center justify-center gap-2 mb-5 md:mb-8">
            <div className="h-px w-6 md:w-10 bg-[#C9A84C]/50" />
            <p className="section-label tracking-[0.2em] md:tracking-[0.4em]">Danapur • Patna • Bihar</p>
            <div className="h-px w-6 md:w-10 bg-[#C9A84C]/50" />
          </div>

          {/* Main heading */}
          <h1 className="anim-1 font-[var(--font-playfair)] leading-[1.15] mb-4 md:mb-6">
            <span className="block text-xl sm:text-3xl md:text-4xl lg:text-5xl font-normal italic text-white/85 mb-1 md:mb-2">Where Celebrations</span>
            <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold gold-shimmer">Become Memories</span>
          </h1>

          {/* Brand name with ornamental lines */}
          <div className="anim-2 flex items-center justify-center gap-3 md:gap-5 mb-4 md:mb-8">
            <div className="h-px w-10 md:w-20 bg-gradient-to-r from-transparent to-[#C9A84C]/70" />
            <span className="text-[#C9A84C] text-[9px] md:text-[10px] tracking-[0.3em] md:tracking-[0.45em] uppercase font-[var(--font-inter)] font-semibold">Sayamwar Hall &amp; Homestay</span>
            <div className="h-px w-10 md:w-20 bg-gradient-to-l from-transparent to-[#C9A84C]/70" />
          </div>

          {/* Description — hidden on very small screens to keep hero clean */}
          <p className="anim-3 hidden sm:block font-[var(--font-playfair)] italic text-white/60 text-sm md:text-lg max-w-xl mx-auto mb-8 leading-relaxed">
            Patna&apos;s premier venue for weddings, birthday celebrations,<br className="hidden md:block" /> receptions &amp; comfortable stays — crafted for the extraordinary.
          </p>

          {/* CTA — mobile: 2 side-by-side buttons + text link below */}
          <div className="anim-4">
            {/* Mobile layout */}
            <div className="flex sm:hidden flex-col items-center gap-3">
              <div className="flex gap-3 w-full max-w-[280px]">
                <a href="https://wa.me/917646028228?text=Hello!%20I%20want%20to%20book%20an%20event%20at%20Sayamwar%20Hall"
                  target="_blank" rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center bg-[#C9A84C] hover:bg-[#E8C96A] text-[#3D0A0A] font-bold text-xs py-3 px-2 rounded tracking-wide transition-colors">
                  💬 Book Now
                </a>
                <a href="tel:7646028228"
                  className="flex-1 flex items-center justify-center border border-[#C9A84C]/70 text-white font-bold text-xs py-3 px-2 rounded tracking-wide hover:bg-[#C9A84C]/10 transition-colors">
                  📞 Call Us
                </a>
              </div>
              <Link href="/packages" className="text-[#C9A84C]/80 text-[10px] tracking-[0.25em] uppercase hover:text-[#C9A84C] transition-colors">
                View Packages →
              </Link>
            </div>
            {/* Desktop layout */}
            <div className="hidden sm:flex flex-row gap-4 justify-center">
              <a href="https://wa.me/917646028228?text=Hello!%20I%20want%20to%20book%20an%20event%20at%20Sayamwar%20Hall"
                target="_blank" rel="noopener noreferrer" className="btn-gold text-sm">
                Book Your Event
              </a>
              <Link href="/packages" className="btn-outline text-sm">
                <span>View Packages</span>
              </Link>
              <a href="tel:7646028228" className="btn-outline text-sm">
                <span>📞 7646028228</span>
              </a>
            </div>
          </div>
        </div>

        {/* Scroll cue — hidden on mobile (covered by floating button bar) */}
        <div className="hidden md:flex absolute bottom-10 left-1/2 -translate-x-1/2 flex-col items-center gap-2">
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
            <span key={i} className="flex items-center text-[#3D0A0A] font-[var(--font-playfair)] text-sm font-semibold tracking-widest uppercase mx-10 whitespace-nowrap">
              {item}
              <span className="ml-10 text-[#8B6914]">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* ══════════════════════════════════════
          INTRO — ABOUT
      ══════════════════════════════════════ */}
      <section className="py-14 md:py-28 px-6 bg-[#F7F2EA]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          <AnimateOnScroll direction="left">
            <div className="grid grid-cols-2 gap-3">
              <div className="relative h-48 sm:h-72 rounded overflow-hidden img-card col-span-2">
                <Image src="/venue-4.jpg" alt="Grand Banquet Hall" fill className="object-cover" sizes="600px" />
              </div>
              <div className="relative h-32 sm:h-44 rounded overflow-hidden img-card">
                <Image src="/venue-3.jpg" alt="AC Room" fill className="object-cover" sizes="300px" />
              </div>
              <div className="relative h-32 sm:h-44 rounded overflow-hidden img-card">
                <Image src="/venue-7.jpg" alt="Hall Interior" fill className="object-cover" sizes="300px" />
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll direction="right">
            <p className="section-label mb-4">About Sayamwar Hall</p>
            <h2 className="font-[var(--font-playfair)] text-3xl md:text-5xl font-bold text-[#3D0A0A] leading-tight mb-4">
              Danapur&apos;s Most<br /><span className="gold-shimmer">Loved Venue</span>
            </h2>
            <div className="gold-line-left mb-6" />
            <p className="text-[#3D0A0A]/60 text-base leading-relaxed mb-5">
              At Sayamwar Hall &amp; Homestay, we believe every celebration deserves perfection. Our grand AC banquet hall accommodates 200–300 guests with crystal chandeliers, custom LED ambience, and impeccable service.
            </p>
            <p className="text-[#3D0A0A]/60 text-base leading-relaxed mb-10">
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
                  <p className="font-[var(--font-playfair)] text-2xl font-bold text-[#3D0A0A]">{n}</p>
                  <p className="text-[#3D0A0A]/50 text-xs uppercase tracking-widest">{l}</p>
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
      <section className="bg-[#3D0A0A]">
        {services.map((s, i) => (
          <div key={s.href} className={`max-w-7xl mx-auto px-6 py-10 md:py-20 grid grid-cols-1 lg:grid-cols-2 gap-0 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
            {/* Image */}
            <AnimateOnScroll direction={i % 2 === 0 ? 'left' : 'right'} className={`relative h-[240px] sm:h-[320px] lg:h-[420px] ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
              <div className="relative h-full w-full rounded-sm overflow-hidden img-card">
                <Image src={s.img} alt={s.title} fill className="object-cover" sizes="700px" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A0303]/50 to-transparent" />
                <div className="absolute top-5 left-5 bg-[#C9A84C] text-[#3D0A0A] text-xs font-bold uppercase tracking-widest px-3 py-1.5">
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
              <p className="font-[var(--font-playfair)] text-4xl md:text-5xl font-bold text-[#3D0A0A]">
                <Counter target={s.target} suffix={s.suffix} />
              </p>
              <p className="text-[#3D0A0A]/65 text-xs uppercase tracking-widest mt-2">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════
          WHAT'S INCLUDED
      ══════════════════════════════════════ */}
      <section className="py-14 md:py-28 px-6 bg-[#3D0A0A]">
        <div className="max-w-5xl mx-auto">
          <AnimateOnScroll className="text-center mb-10 md:mb-16">
            <p className="section-label mb-6">All Packages Include</p>
            <h2 className="font-[var(--font-playfair)] text-4xl md:text-6xl font-bold text-white leading-tight">
              Everything <span className="gold-shimmer">Arranged</span>
            </h2>
            <div className="flex items-center justify-center gap-5 mt-7 mb-6">
              <div className="h-px w-20 bg-gradient-to-r from-transparent to-[#C9A84C]/60" />
              <span className="text-[#C9A84C] text-xl">✦</span>
              <div className="h-px w-20 bg-gradient-to-l from-transparent to-[#C9A84C]/60" />
            </div>
            <p className="font-[var(--font-playfair)] text-white/50 text-base italic max-w-lg mx-auto leading-relaxed">
              Not a single detail left to chance — we handle it all so you celebrate freely
            </p>
          </AnimateOnScroll>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-px bg-[#C9A84C]/10">
            {whatsIncluded.map((item, i) => (
              <AnimateOnScroll key={item.label} delay={i * 50}>
                <div className="glass hover:bg-white/10 transition-all duration-500 p-5 md:p-8 text-center group cursor-default">
                  <p className="text-[#C9A84C]/60 text-base mb-2 group-hover:text-[#C9A84C] transition-colors duration-300">✦</p>
                  <p className="font-[var(--font-playfair)] text-white font-semibold text-sm md:text-base leading-snug tracking-wide group-hover:text-[#C9A84C] transition-colors duration-300">{item.label}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          GALLERY
      ══════════════════════════════════════ */}
      <section className="py-14 md:py-28 px-6 bg-[#F7F2EA]">
        <div className="max-w-6xl mx-auto">
          <AnimateOnScroll className="text-center mb-10 md:mb-16">
            <p className="section-label mb-4">Our Venue</p>
            <h2 className="font-[var(--font-playfair)] text-4xl md:text-5xl font-bold text-[#3D0A0A]">A Glimpse of Grandeur</h2>
            <div className="gold-line" />
          </AnimateOnScroll>

          <div className="grid grid-cols-12 gap-3">
            <AnimateOnScroll className="col-span-12 md:col-span-7 row-span-2" direction="left">
              <div className="relative h-[260px] sm:h-[380px] md:h-[500px] rounded overflow-hidden img-card">
                <Image src="/venue-5.jpg" alt="Sayamwar Hall Building" fill className="object-cover" sizes="700px" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A0303]/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <p className="section-label mb-1">Our Building</p>
                  <p className="font-[var(--font-playfair)] text-white text-xl font-bold">Sayamwar Hall &amp; Homestay</p>
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll className="col-span-12 md:col-span-5" delay={100}>
              <div className="relative h-44 sm:h-60 rounded overflow-hidden img-card">
                <Image src="/venue-4.jpg" alt="Grand Banquet Hall" fill className="object-cover" sizes="500px" />
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll className="col-span-12 md:col-span-5" delay={200}>
              <div className="relative h-44 sm:h-60 rounded overflow-hidden img-card">
                <Image src="/venue-2.jpg" alt="Birthday Setup" fill className="object-cover" sizes="500px" />
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll className="col-span-6 md:col-span-4" delay={150}>
              <div className="relative h-36 sm:h-52 rounded overflow-hidden img-card">
                <Image src="/venue-6.jpg" alt="Premium Room" fill className="object-cover" sizes="400px" />
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll className="col-span-6 md:col-span-4" delay={200}>
              <div className="relative h-36 sm:h-52 rounded overflow-hidden img-card">
                <Image src="/venue-7.jpg" alt="Hall Interior" fill className="object-cover" sizes="400px" />
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll className="col-span-12 md:col-span-4" delay={250}>
              <div className="relative h-36 sm:h-52 rounded overflow-hidden img-card">
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
          BLOG PREVIEW
      ══════════════════════════════════════ */}
      <section className="py-14 md:py-28 px-6 bg-[#F7F2EA]">
        <div className="max-w-6xl mx-auto">
          <AnimateOnScroll className="text-center mb-10 md:mb-16">
            <p className="section-label mb-4">Tips & Guides</p>
            <h2 className="font-[var(--font-playfair)] text-4xl md:text-5xl font-bold text-[#3D0A0A]">From Our Blog</h2>
            <div className="gold-line" />
            <p className="text-[#3D0A0A]/50 text-sm mt-5 max-w-lg mx-auto">
              Expert advice on planning events, weddings, and stays in Patna & Danapur.
            </p>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {posts.slice(0, 3).map((post, i) => (
              <AnimateOnScroll key={post.slug} delay={i * 100}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-md border border-[#C9A84C]/10 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.06]"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A0303]/55 to-transparent" />
                    <div className="absolute top-4 left-4 bg-[#C9A84C] text-[#3D0A0A] text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                      {post.category}
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="font-[var(--font-playfair)] text-lg font-bold text-[#3D0A0A] leading-snug mb-3 group-hover:text-[#7B1818] transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-[#3D0A0A]/55 text-sm leading-relaxed mb-5 flex-1 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-[#C9A84C]/15">
                      <span className="text-[#3D0A0A]/40 text-xs">{post.readTime}</span>
                      <span className="text-[#C9A84C] text-xs font-bold group-hover:text-[#8B6914] transition-colors">
                        Read More →
                      </span>
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
      <section className="py-14 md:py-28 px-6 bg-[#2D0707]">
        <div className="max-w-6xl mx-auto">
          <AnimateOnScroll className="text-center mb-10 md:mb-16">
            <p className="section-label mb-4">Testimonials</p>
            <h2 className="font-[var(--font-playfair)] text-4xl md:text-5xl font-bold text-white">Voices of Our Guests</h2>
            <div className="gold-line" />
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reviews.map((r, i) => (
              <AnimateOnScroll key={r.name} delay={i * 120}>
                <div className="glass rounded p-5 md:p-8 hover:border-[#C9A84C]/40 transition-all duration-500 group">
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
      <section className="py-14 md:py-28 px-6 bg-[#F7F2EA]">
        <div className="max-w-xl mx-auto">
          <AnimateOnScroll className="text-center mb-8 md:mb-12">
            <p className="section-label mb-4">Get in Touch</p>
            <h2 className="font-[var(--font-playfair)] text-4xl md:text-5xl font-bold text-[#3D0A0A]">Begin Your Story</h2>
            <div className="gold-line" />
            <p className="text-[#3D0A0A]/50 text-sm mt-5">Tell us about your event and we&apos;ll respond on WhatsApp within minutes</p>
          </AnimateOnScroll>
          <AnimateOnScroll>
            <div className="bg-white rounded p-5 md:p-10 shadow-2xl border border-[#C9A84C]/10">
              <LeadForm />
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ══════════════════════════════════════
          MAP
      ══════════════════════════════════════ */}
      <section className="py-14 md:py-28 px-6 bg-[#3D0A0A]">
        <div className="max-w-5xl mx-auto">
          <AnimateOnScroll className="text-center mb-8 md:mb-12">
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
              <a href="tel:7646028228" className="btn-gold text-sm justify-center">📞 7646028228</a>
              <a href="https://wa.me/917646028228" target="_blank" rel="noopener noreferrer"
                className="btn-outline text-sm justify-center"><span>💬 WhatsApp Us</span></a>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  )
}
