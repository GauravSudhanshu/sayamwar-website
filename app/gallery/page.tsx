import type { Metadata } from 'next'
import AnimateOnScroll from '@/components/AnimateOnScroll'
import GalleryGrid from '@/components/GalleryGrid'

export const metadata: Metadata = {
  title: 'Gallery | Sayamwar Hall & Homestay Danapur Patna',
  description: 'View photos of Sayamwar Hall & Homestay — banquet hall, wedding setups, birthday decorations, AC rooms and more. Located in Danapur, Patna.',
  alternates: { canonical: 'https://sayamwar.com/gallery' },
}

const photos = [
  { src: '/gallery-banquet-hall-main.jpg', label: 'Sayamwar Hall — Banquet Hall', category: 'Banquet Hall', span: 'col-span-2 row-span-2' },
  { src: '/gallery-selfie-point-1.jpg', label: 'Selfie Point', category: 'Décor', span: '' },
  { src: '/gallery-selfie-point-2.jpg', label: 'Selfie Corner Setup', category: 'Décor', span: '' },
  { src: '/gallery-indoor-mandap.jpg', label: 'Indoor Mandap Setup', category: 'Wedding', span: '' },
  { src: '/gallery-mandap-hall.jpg', label: 'Mandap in Hall', category: 'Wedding', span: '' },
  { src: '/gallery-banquet-interior.jpg', label: 'Banquet Hall Interior', category: 'Banquet Hall', span: 'col-span-2' },
  { src: '/gallery-lawn.jpg', label: 'Banquet Hall Lawn', category: 'Venue', span: '' },
  { src: '/gallery-outside-stage.jpg', label: 'Outside Stage', category: 'Venue', span: '' },
]

export default function GalleryPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-[var(--black-2)] via-[var(--maroon-dark)] to-[var(--maroon)] py-20 px-4 text-center text-white">
        <p className="section-label mb-3">Our Venue</p>
        <h1 className="font-[var(--font-playfair)] text-4xl md:text-5xl font-bold mb-4">
          Photo <span className="text-[var(--gold)]">Gallery</span>
        </h1>
        <div className="gold-line" />
        <p className="text-white/60 text-base max-w-xl mx-auto">
          A glimpse of the beautiful moments created at Sayamwar Hall &amp; Homestay
        </p>
      </section>

      <section className="py-16 px-4 bg-[var(--ivory)]">
        <div className="max-w-6xl mx-auto">
          <GalleryGrid photos={photos} />

          <AnimateOnScroll className="mt-14 bg-[var(--black)] rounded-3xl p-10 text-center">
            <p className="section-label mb-2">Visit Us</p>
            <h3 className="font-[var(--font-playfair)] text-2xl font-bold text-white mb-6">Schedule a Free Site Visit</h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/917646028228?text=Hello!%20I%20want%20to%20schedule%20a%20site%20visit%20to%20Sayamwar%20Hall"
                target="_blank" rel="noopener noreferrer"
                className="px-7 py-3 bg-green-500 hover:bg-green-600 text-white rounded-xl font-bold transition-all hover:scale-105"
              >
                💬 Schedule via WhatsApp
              </a>
              <a href="tel:7646028228" className="btn-gold rounded-xl">
                📞 Call: 7646028228
              </a>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  )
}
