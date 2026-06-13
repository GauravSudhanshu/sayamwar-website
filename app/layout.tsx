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
  title: 'Best Banquet Hall in Patna | Low Budget Banquet Near Me | Sayamwar Hall Danapur',
  description: 'Sayamwar Hall & Homestay — Best banquet hall in Patna & Danapur. Low budget banquet packages from ₹85,000. AC hall for 200–300 guests. Weddings, birthdays, receptions. Call 9942972484.',
  keywords: 'banquet hall in patna, banquet near me, best banquet in patna, low budget banquet patna, banquet hall danapur, wedding hall patna, birthday party hall patna, event hall near me, cheap banquet hall patna, banquet hall gola road patna',
  icons: { icon: '/logo.jpg', apple: '/logo.jpg' },
  openGraph: {
    title: 'Best Banquet Hall in Patna | Low Budget | Sayamwar Hall Danapur',
    description: 'Best & affordable banquet hall in Patna, Danapur. Packages from ₹85,000. AC hall 200–300 guests. Call 9942972484.',
    type: 'website',
    images: [{ url: '/hero-bg.jpg', width: 1200, height: 630, alt: 'Sayamwar Hall & Homestay Patna' }],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'EventVenue',
  name: 'Sayamwar Hall & Homestay',
  description: 'Best banquet hall in Patna and Danapur for weddings, birthday parties, receptions, engagements and corporate events. Low budget packages starting from ₹85,000.',
  url: 'https://sayamwarhall.com',
  telephone: '+919942972484',
  priceRange: '₹₹',
  image: 'https://sayamwarhall.com/hero-bg.jpg',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Gola Road, Adarsh Vihar Colony, Lane Number 5, near T Point, beside Hotel King Regency',
    addressLocality: 'Danapur, Patna',
    addressRegion: 'Bihar',
    postalCode: '801503',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 25.6292816,
    longitude: 85.0523556,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
      opens: '09:00',
      closes: '21:00',
    },
  ],
  sameAs: [
    'https://www.google.com/maps/place/Sayamwar+Hall+%26+Homestay/@25.6292816,85.0523556,17z',
  ],
  hasMap: 'https://www.google.com/maps/place/Sayamwar+Hall+%26+Homestay/@25.6292816,85.0523556,17z',
  amenityFeature: [
    { '@type': 'LocationFeatureSpecification', name: 'Air Conditioning', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Parking', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Catering', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'DJ / Sound System', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Stage Decoration', value: true },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} h-full`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#F7F2EA] font-[var(--font-inter)]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  )
}
