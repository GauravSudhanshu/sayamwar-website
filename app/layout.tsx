import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FloatingButtons from '@/components/FloatingButtons'
import ExitIntentPopup from '@/components/ExitIntentPopup'
import ConversionTracker from '@/components/ConversionTracker'
import { SpeedInsights } from '@vercel/speed-insights/next'

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
  metadataBase: new URL('https://sayamwar.com'),
  title: 'Best Banquet Hall in Patna | Low Budget Banquet Near Me | Sayamwar Hall Danapur',
  description: 'Sayamwar Hall & Homestay — Best banquet hall in Patna & Danapur. Low budget banquet packages from ₹85,000. AC hall for 200–300 guests. Weddings, birthdays, receptions. Call 7646028228.',
  keywords: 'banquet hall in patna, banquet near me, best banquet in patna, low budget banquet patna, banquet hall danapur, wedding hall patna, birthday party hall patna, event hall near me, cheap banquet hall patna, banquet hall gola road patna',
  verification: { google: 'google6f2c00ffd72c34ef' },
  openGraph: {
    title: 'Best Banquet Hall in Patna | Low Budget | Sayamwar Hall Danapur',
    description: 'Best & affordable banquet hall in Patna, Danapur. Packages from ₹85,000. AC hall 200–300 guests. Call 7646028228.',
    type: 'website',
    images: [{ url: '/hero-bg.jpg', width: 1200, height: 630, alt: 'Sayamwar Hall & Homestay Patna' }],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'EventVenue',
  name: 'Sayamwar Hall & Homestay',
  description: 'Best banquet hall in Patna and Danapur for weddings, birthday parties, receptions, engagements and corporate events. Low budget packages starting from ₹85,000.',
  url: 'https://sayamwar.com',
  telephone: '+917646028228',
  priceRange: '₹₹',
  image: 'https://sayamwar.com/hero-bg.jpg',
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
      opens: '00:00',
      closes: '23:59',
    },
  ],
  sameAs: [
    'https://www.google.com/maps/place/Sayamwar+Hall+%26+Homestay/@25.6292816,85.0523556,17z',
    'https://www.facebook.com/profile.php?id=61590307323528',
    'https://www.instagram.com/sayamwar_hall_homestay/',
    'https://wa.me/917646028228',
    'https://sayamwar.com',
  ],
  hasMap: 'https://www.google.com/maps/place/Sayamwar+Hall+%26+Homestay/@25.6292816,85.0523556,17z',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    reviewCount: '17',
    bestRating: '5',
    worstRating: '1',
  },
  amenityFeature: [
    { '@type': 'LocationFeatureSpecification', name: 'Air Conditioning', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Parking', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Catering', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'DJ / Sound System', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Stage Decoration', value: true },
  ],
}

const orgJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Sayamwar Hall & Homestay',
  url: 'https://sayamwar.com',
  logo: 'https://sayamwar.com/logo.png',
  telephone: '+917646028228',
  email: 'care@sayamwar.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Gola Road, Adarsh Vihar Colony, Lane Number 5, near T Point, beside Hotel King Regency',
    addressLocality: 'Danapur, Patna',
    addressRegion: 'Bihar',
    postalCode: '801503',
    addressCountry: 'IN',
  },
  sameAs: [
    'https://www.google.com/maps/place/Sayamwar+Hall+%26+Homestay/@25.6292816,85.0523556,17z',
    'https://www.facebook.com/profile.php?id=61590307323528',
    'https://www.instagram.com/sayamwar_hall_homestay/',
    'https://wa.me/917646028228',
  ],
}

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Sayamwar Hall & Homestay',
  description: 'Best banquet hall and homestay in Patna & Danapur. Low budget event packages for weddings, receptions, birthdays, engagements and corporate events. AC hall for 200–300 guests. On-site guest rooms from ₹1,500/night.',
  url: 'https://sayamwar.com',
  telephone: '+917646028228',
  email: 'care@sayamwar.com',
  priceRange: '₹₹',
  image: [
    'https://sayamwar.com/hero-bg.jpg',
    'https://sayamwar.com/venue-4.jpg',
    'https://sayamwar.com/venue-5.jpg',
  ],
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Gola Road, Adarsh Vihar Colony, Lane Number 5, near T Point, beside Hotel King Regency',
    addressLocality: 'Danapur',
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
      opens: '00:00',
      closes: '23:59',
    },
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    reviewCount: '17',
    bestRating: '5',
    worstRating: '1',
  },
  review: [
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: 'Rajesh Kumar' },
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      reviewBody: 'Every detail was perfection. The décor, the food, the service — our guests are still talking about it. Best wedding venue in Danapur.',
      datePublished: '2025-11-10',
    },
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: 'Priya Singh' },
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      reviewBody: 'Best birthday venue in Danapur. The team went above and beyond. Absolutely memorable evening.',
      datePublished: '2025-12-05',
    },
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: 'Amit Sharma' },
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      reviewBody: 'Professional, punctual, and flawless execution. Our annual gathering was a grand success.',
      datePublished: '2026-01-15',
    },
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: 'Sunita Devi' },
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      reviewBody: 'The hall looked breathtaking. Premium décor and delicious food. Highly recommend to everyone looking for a banquet hall in Patna.',
      datePublished: '2026-02-20',
    },
  ],
  hasMap: 'https://www.google.com/maps/place/Sayamwar+Hall+%26+Homestay/@25.6292816,85.0523556,17z',
  sameAs: [
    'https://www.google.com/maps/place/Sayamwar+Hall+%26+Homestay/@25.6292816,85.0523556,17z',
    'https://www.facebook.com/profile.php?id=61590307323528',
    'https://www.instagram.com/sayamwar_hall_homestay/',
  ],
  areaServed: [
    { '@type': 'City', name: 'Patna' },
    { '@type': 'City', name: 'Danapur' },
    { '@type': 'Place', name: 'Bailey Road' },
    { '@type': 'Place', name: 'Saguna More' },
    { '@type': 'Place', name: 'Khagaul' },
    { '@type': 'Place', name: 'Phulwari Sharif' },
  ],
  keywords: 'banquet hall patna, wedding venue patna, birthday party hall patna, engagement hall patna, reception hall patna, cheap banquet hall patna, banquet hall danapur, rooms in patna',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} h-full`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[rgb(249,246,225)] font-[var(--font-inter)]">
        <Navbar />
        <main className="flex-1 pt-[72px]">{children}</main>
        <Footer className="pb-16 md:pb-0" />
        <FloatingButtons />
        <ExitIntentPopup />
        <ConversionTracker />
        <SpeedInsights />
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-VXSY95P5SF" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-VXSY95P5SF');
          gtag('config', 'AW-18212601463');
        `}</Script>
      </body>
    </html>
  )
}
