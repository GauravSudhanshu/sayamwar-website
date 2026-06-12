import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FloatingButtons from '@/components/FloatingButtons'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://sayamwarhall.com'),
  title: 'Sayamwar Hall & Homestay | Best Banquet Hall in Danapur, Patna',
  description: 'Book Sayamwar Hall & Homestay in Danapur, Patna for weddings, birthday parties, corporate events. AC banquet hall for 200–300 guests. Rooms available. Call 9942972484.',
  keywords: 'banquet hall patna, wedding venue patna, birthday party hall danapur, event hall patna, rooms in danapur, homestay patna',
  icons: { icon: '/logo.jpg', apple: '/logo.jpg' },
  openGraph: {
    title: 'Sayamwar Hall & Homestay | Banquet Hall in Danapur, Patna',
    description: 'Premium banquet hall and homestay in Danapur, Patna.',
    type: 'website',
    images: [{ url: '/logo.jpg', width: 1080, height: 1080, alt: 'Sayamwar Hall & Homestay' }],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-[#F7F2EA] font-[var(--font-inter)]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  )
}
