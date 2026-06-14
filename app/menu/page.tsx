'use client'
import Image from 'next/image'
import Link from 'next/link'

export default function MenuPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-[#5A0F0F] to-[#7B1818] py-12 px-4 text-center text-white">
        <p className="text-[#C9A84C] text-xs tracking-[0.35em] uppercase mb-2">Sayamwar Hall & Homestay</p>
        <h1 className="text-4xl font-bold mb-2">
          Catering <span className="text-[#C9A84C]">Menu</span>
        </h1>
        <p className="text-white/60 text-sm mb-6">Premium Banquet Catering Packages • Per Plate Pricing</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="/menu/sayamwar-menu.jpg"
            download="Sayamwar-Hall-Menu.jpg"
            className="inline-flex items-center justify-center gap-2 bg-[#C9A84C] hover:bg-[#E8C96A] text-[#3D0A0A] font-bold py-3 px-8 rounded-lg transition-colors"
          >
            ⬇ Download Menu
          </a>
          <a
            href="https://wa.me/917646028228?text=Hello!%20I%20want%20to%20know%20about%20catering%20packages"
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 border border-[#C9A84C] text-[#C9A84C] hover:bg-[#C9A84C] hover:text-[#3D0A0A] font-bold py-3 px-8 rounded-lg transition-colors"
          >
            💬 Enquire on WhatsApp
          </a>
        </div>
      </section>

      {/* Menu Image */}
      <section className="py-10 px-4 bg-[#F7F2EA] flex justify-center">
        <div className="w-full max-w-2xl">
          <div className="relative w-full shadow-2xl rounded-2xl overflow-hidden border border-[#C9A84C]/30">
            <Image
              src="/menu/sayamwar-menu.jpg"
              alt="Sayamwar Hall & Homestay Catering Menu — Veg Classic ₹999, Veg Premium ₹1199, Veg Royal ₹1399, Non-Veg Classic ₹1199, Non-Veg Premium ₹1499, Non-Veg Royal ₹1699"
              width={900}
              height={1260}
              className="w-full h-auto"
              priority
            />
          </div>

          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="/menu/sayamwar-menu.jpg"
              download="Sayamwar-Hall-Menu.jpg"
              className="inline-flex items-center justify-center gap-2 bg-[#7B1818] hover:bg-[#5A0F0F] text-white font-bold py-3 px-8 rounded-lg transition-colors"
            >
              ⬇ Download Menu
            </a>
            <a href="tel:7646028228"
              className="inline-flex items-center justify-center gap-2 bg-[#C9A84C] hover:bg-[#E8C96A] text-[#3D0A0A] font-bold py-3 px-8 rounded-lg transition-colors"
            >
              📞 Call 7646028228
            </a>
          </div>

          <p className="text-center text-gray-400 text-xs mt-3">
            Extra Menu Charge: <span className="font-semibold text-[#7B1818]">₹75 per person</span>
          </p>
        </div>
      </section>

      {/* Quick links */}
      <section className="py-8 px-4 bg-[#3D0A0A] text-center">
        <div className="flex flex-wrap justify-center gap-6 text-sm text-white/50">
          <Link href="/packages" className="hover:text-[#C9A84C] transition-colors">Event Packages</Link>
          <Link href="/banquet-hall-patna" className="hover:text-[#C9A84C] transition-colors">Banquet Hall</Link>
          <Link href="/wedding-venue-patna" className="hover:text-[#C9A84C] transition-colors">Wedding Venue</Link>
          <Link href="/contact" className="hover:text-[#C9A84C] transition-colors">Contact Us</Link>
        </div>
      </section>
    </>
  )
}
