import type { Metadata } from 'next'
import AnimateOnScroll from '@/components/AnimateOnScroll'
import GalleryGrid from '@/components/GalleryGrid'

export const metadata: Metadata = {
  title: 'Gallery — Wedding & Banquet Hall Photos | Sayamwar Hall Danapur Patna',
  description: 'Browse real photos of Sayamwar Hall & Homestay — wedding mandap setups, stage decoration, banquet hall interior, birthday party setups, AC rooms, and outdoor lawn. Located in Danapur, Patna.',
  keywords: 'banquet hall photos patna, wedding hall photos danapur, sayamwar hall gallery, birthday party hall photos, event venue photos patna',
  alternates: { canonical: 'https://sayamwar.com/gallery' },
  openGraph: {
    title: 'Gallery — Wedding & Banquet Hall Photos | Sayamwar Hall Danapur Patna',
    description: 'Real photos of our banquet hall, wedding setups, stage decoration, AC rooms and outdoor lawn in Danapur, Patna.',
    images: [{ url: '/gallery-banquet-hall-main.jpg', width: 1200, height: 630, alt: 'Sayamwar Banquet Hall Interior' }],
  },
}

const photos = [
  { src: '/gallery-banquet-hall-main.jpg', label: 'Sayamwar Hall — Main Banquet', category: 'Banquet Hall', span: 'col-span-2 row-span-2' },
  { src: '/gallery-selfie-point-1.jpg', label: 'Floral Selfie Point', category: 'Decoration', span: '' },
  { src: '/gallery-selfie-point-2.jpg', label: 'Selfie Corner Setup', category: 'Decoration', span: '' },
  { src: '/gallery-indoor-mandap.jpg', label: 'Indoor Mandap Setup', category: 'Wedding', span: '' },
  { src: '/gallery-mandap-hall.jpg', label: 'Mandap in Banquet Hall', category: 'Wedding', span: '' },
  { src: '/gallery-banquet-interior.jpg', label: 'Banquet Hall Interior', category: 'Banquet Hall', span: 'col-span-2' },
  { src: '/gallery-lawn.jpg', label: 'Outdoor Lawn Area', category: 'Venue', span: '' },
  { src: '/gallery-outside-stage.jpg', label: 'Outdoor Stage Setup', category: 'Wedding', span: '' },
  { src: '/venue-5.jpg', label: 'Sayamwar Hall Building', category: 'Venue', span: 'col-span-2 row-span-2' },
  { src: '/venue-4.jpg', label: 'Grand Banquet Hall Setup', category: 'Banquet Hall', span: '' },
  { src: '/venue-7.jpg', label: 'Chandeliers & Hall Décor', category: 'Banquet Hall', span: '' },
  { src: '/venue-1.jpg', label: 'Hall Lounge & Seating', category: 'Banquet Hall', span: '' },
  { src: '/venue-8.jpg', label: 'Decorated Event Hall', category: 'Decoration', span: '' },
  { src: '/venue-2.jpg', label: 'Birthday Party Setup', category: 'Birthday', span: 'col-span-2' },
  { src: '/venue-3.jpg', label: 'Deluxe AC Room', category: 'Rooms', span: '' },
  { src: '/venue-6.jpg', label: 'Premium AC Guest Room', category: 'Rooms', span: '' },
]

export default function GalleryPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[var(--black-2)] via-[var(--maroon-dark)] to-[var(--maroon)] py-20 px-4 text-center text-white">
        <p className="section-label mb-3">Real Venue — Real Moments</p>
        <h1 className="font-[var(--font-playfair)] text-4xl md:text-5xl font-bold mb-4">
          Photo <span className="text-[var(--gold)]">Gallery</span>
        </h1>
        <div className="gold-line" />
        <p className="text-white/60 text-base max-w-xl mx-auto mt-4">
          Browse our banquet hall, wedding setups, stage decorations, AC rooms and outdoor venue in Danapur, Patna
        </p>
      </section>

      {/* Gallery with filters */}
      <section className="py-16 px-4 bg-[var(--ivory)]">
        <div className="max-w-6xl mx-auto">
          <GalleryGrid photos={photos} />
        </div>
      </section>

      {/* CTA strip */}
      <section className="py-14 px-4 bg-gradient-to-r from-[var(--maroon-dark)] to-[var(--maroon)]">
        <AnimateOnScroll className="max-w-3xl mx-auto text-center text-white">
          <h3 className="font-[var(--font-playfair)] text-2xl md:text-3xl font-bold mb-3">
            Like What You See?
          </h3>
          <p className="text-white/65 text-base mb-7">
            Check availability for your date — weddings from ₹1,51,000 · birthdays from ₹85,000
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/917646028228?text=Hello!%20I%20saw%20your%20gallery%20and%20want%20to%20enquire%20about%20booking%20Sayamwar%20Hall"
              target="_blank" rel="noopener noreferrer"
              className="px-8 py-3.5 bg-[var(--gold)] hover:bg-[var(--gold-dark)] text-white font-bold rounded-xl transition-all hover:scale-105 inline-flex items-center justify-center gap-2"
            >
              ✅ Check Availability
            </a>
            <a href="/contact" className="px-8 py-3.5 border border-white/30 hover:border-white text-white font-semibold rounded-xl transition-all hover:scale-105 inline-flex items-center justify-center">
              Get a Free Quote
            </a>
          </div>
        </AnimateOnScroll>
      </section>
    </>
  )
}
