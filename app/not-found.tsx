import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-[#F7F2EA] px-6">
      <div className="text-center max-w-lg">
        <p className="section-label mb-4">404</p>
        <h1 className="font-[var(--font-playfair)] text-6xl md:text-8xl font-bold text-[#3D0A0A] mb-4">
          Oops.
        </h1>
        <div className="gold-line" />
        <p className="font-[var(--font-playfair)] text-xl text-[#3D0A0A]/60 italic mt-6 mb-3">
          This page doesn&apos;t exist.
        </p>
        <p className="text-[#3D0A0A]/45 text-sm mb-10">
          But a perfect celebration at Sayamwar Hall does. Let&apos;s take you back.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="btn-gold text-sm">← Back to Home</Link>
          <Link href="/packages" className="btn-outline text-sm"><span>View Packages</span></Link>
        </div>
        <div className="mt-10 flex flex-wrap justify-center gap-4 text-xs text-[#3D0A0A]/35">
          {[
            ['Banquet Hall', '/banquet-hall-patna'],
            ['Wedding Venue', '/wedding-venue-patna'],
            ['Birthday Party', '/birthday-party-hall-patna'],
            ['Rooms', '/rooms'],
            ['Contact', '/contact'],
          ].map(([label, href]) => (
            <Link key={href} href={href} className="hover:text-[#C9A84C] transition-colors">
              {label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
