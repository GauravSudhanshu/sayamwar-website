import type { Metadata } from 'next'
import Image from 'next/image'
import AnimateOnScroll from '@/components/AnimateOnScroll'

export const metadata: Metadata = {
  title: 'Gallery | Sayamwar Hall & Homestay Danapur Patna',
  description: 'View photos of Sayamwar Hall & Homestay — banquet hall, wedding setups, birthday decorations, AC rooms and more. Located in Danapur, Patna.',
  alternates: { canonical: 'https://sayamwarhall.com/gallery' },
}

const photos = [
  { src: '/venue-5.jpg', label: 'Our Building', category: 'Venue', span: 'col-span-2 row-span-2' },
  { src: '/venue-4.jpg', label: 'Grand Banquet Hall', category: 'Banquet Hall', span: '' },
  { src: '/venue-7.jpg', label: 'Hall Interior & Chandeliers', category: 'Banquet Hall', span: '' },
  { src: '/venue-1.jpg', label: 'Hall Lounge Area', category: 'Banquet Hall', span: '' },
  { src: '/venue-8.jpg', label: 'Event Hall', category: 'Banquet Hall', span: '' },
  { src: '/venue-2.jpg', label: 'Birthday Party Setup', category: 'Birthday Events', span: 'col-span-2' },
  { src: '/venue-3.jpg', label: 'Deluxe AC Room', category: 'Rooms', span: '' },
  { src: '/venue-6.jpg', label: 'Premium AC Room', category: 'Rooms', span: '' },
]

export default function GalleryPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-[#3D0A0A] via-[#5A0F0F] to-[#7B1818] py-20 px-4 text-center text-white">
        <p className="text-[#C9A227] text-xs tracking-[0.35em] uppercase font-[var(--font-inter)] mb-3">Our Venue</p>
        <h1 className="font-[var(--font-playfair)] text-4xl md:text-5xl font-bold mb-4">
          Photo <span className="text-[#C9A227]">Gallery</span>
        </h1>
        <div className="w-16 h-px bg-[#C9A227] mx-auto mb-4" />
        <p className="text-white/60 text-base max-w-xl mx-auto">
          A glimpse of the beautiful moments created at Sayamwar Hall & Homestay
        </p>
      </section>

      <section className="py-16 px-4 bg-[#FDF8F0]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 auto-rows-[220px]">
            {photos.map((p, i) => (
              <AnimateOnScroll key={p.src} delay={i * 80} className={p.span}>
                <div className="relative w-full h-full rounded-2xl overflow-hidden img-card group cursor-pointer shadow-md">
                  <Image
                    src={p.src}
                    alt={p.label}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.06]"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                  <div className="overlay" />
                  <div className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-[#C9A227] text-xs uppercase tracking-widest font-[var(--font-inter)]">{p.category}</span>
                    <span className="text-white font-[var(--font-playfair)] font-bold text-base">{p.label}</span>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          <AnimateOnScroll className="mt-14 bg-[#3D0A0A] rounded-3xl p-10 text-center">
            <p className="text-[#C9A227] text-xs tracking-widest uppercase font-[var(--font-inter)] mb-2">Visit Us</p>
            <h3 className="font-[var(--font-playfair)] text-2xl font-bold text-white mb-6">Schedule a Free Site Visit</h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/919942972484?text=Hello!%20I%20want%20to%20schedule%20a%20site%20visit%20to%20Sayamwar%20Hall"
                target="_blank" rel="noopener noreferrer"
                className="px-7 py-3 bg-green-500 hover:bg-green-600 text-white rounded-xl font-bold transition-all hover:scale-105"
              >
                💬 Schedule via WhatsApp
              </a>
              <a href="tel:9942972484" className="px-7 py-3 bg-[#C9A227] text-[#3D0A0A] rounded-xl font-bold hover:bg-[#E8C547] transition-all hover:scale-105">
                📞 Call: 9942972484
              </a>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  )
}
