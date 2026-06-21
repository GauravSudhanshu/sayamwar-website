import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { getAllPosts } from '@/lib/blog'

export const revalidate = 300

export const metadata: Metadata = {
  title: 'Blog | Banquet Hall & Wedding Tips | Sayamwar Hall Patna',
  description: 'Expert tips on booking banquet halls in Patna, planning low budget weddings, birthday party ideas, and finding the best event venues in Danapur. From Sayamwar Hall & Homestay.',
  keywords: 'banquet hall patna blog, wedding tips patna, birthday party ideas patna, event planning patna, banquet hall guide',
  alternates: { canonical: 'https://sayamwar.com/blog' },
}

const categoryColors: Record<string, string> = {
  'Banquet Hall': 'bg-[#3D0A0A] text-[#C9A84C]',
  'Wedding': 'bg-[#5A0F0F] text-[#C9A84C]',
  'Birthday': 'bg-[#7B1818] text-white',
  'Tips': 'bg-[#C9A84C] text-[#3D0A0A]',
  'Rooms & Stay': 'bg-[#2D0707] text-[#C9A84C]',
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })
}

export default async function BlogPage() {
  const posts = await getAllPosts()
  const [featured, ...rest] = posts

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#3D0A0A] via-[#5A0F0F] to-[#7B1818] py-20 px-4 text-center text-white">
        <p className="text-[#C9A84C] text-xs tracking-[0.35em] uppercase mb-3">Sayamwar Hall & Homestay</p>
        <h1 className="font-[var(--font-playfair)] text-4xl md:text-5xl font-bold mb-4">
          Event Planning <span className="text-[#C9A84C]">Blog</span>
        </h1>
        <div className="w-16 h-px bg-[#C9A84C] mx-auto mb-5" />
        <p className="text-white/60 text-base max-w-xl mx-auto">
          Tips, guides and advice on banquet halls, weddings, birthday parties and stays in Patna & Danapur.
        </p>
      </section>

      <section className="py-16 px-4 bg-[#FDF8F0]">
        <div className="max-w-6xl mx-auto">

          {/* Featured post */}
          <div className="mb-14">
            <p className="text-[#C9A84C] text-xs tracking-[0.3em] uppercase font-[var(--font-inter)] mb-6">Featured Article</p>
            <Link href={`/blog/${featured.slug}`} className="group grid grid-cols-1 lg:grid-cols-2 gap-0 bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-72 lg:h-auto overflow-hidden">
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#1A0303]/20" />
              </div>
              <div className="p-8 lg:p-10 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span className={`text-xs font-bold px-3 py-1 rounded-full ${categoryColors[featured.category] ?? 'bg-gray-100 text-gray-600'}`}>
                    {featured.category}
                  </span>
                  <span className="text-gray-400 text-xs">{featured.readTime}</span>
                </div>
                <h2 className="font-[var(--font-playfair)] text-2xl lg:text-3xl font-bold text-[#3D0A0A] mb-4 leading-snug group-hover:text-[#7B1818] transition-colors">
                  {featured.title}
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">{featured.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 text-xs">{formatDate(featured.date)}</span>
                  <span className="text-[#7B1818] text-sm font-bold group-hover:text-[#C9A84C] transition-colors">
                    Read Article →
                  </span>
                </div>
              </div>
            </Link>
          </div>

          {/* Rest of posts */}
          <p className="text-[#C9A84C] text-xs tracking-[0.3em] uppercase font-[var(--font-inter)] mb-6">All Articles</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {rest.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
              >
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A0303]/50 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className={`text-xs font-bold px-3 py-1 rounded-full ${categoryColors[post.category] ?? 'bg-gray-100 text-gray-600'}`}>
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h2 className="font-[var(--font-playfair)] text-xl font-bold text-[#3D0A0A] mb-3 leading-snug group-hover:text-[#7B1818] transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-500 text-sm leading-relaxed mb-5 flex-1">{post.excerpt}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-3 text-xs text-gray-400">
                      <span>{formatDate(post.date)}</span>
                      <span>·</span>
                      <span>{post.readTime}</span>
                    </div>
                    <span className="text-[#7B1818] text-xs font-bold group-hover:text-[#C9A84C] transition-colors">
                      Read →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-[#3D0A0A] text-center">
        <p className="text-[#C9A84C] text-xs tracking-widest uppercase font-[var(--font-inter)] mb-3">Plan Your Event</p>
        <h2 className="font-[var(--font-playfair)] text-3xl font-bold text-white mb-4">Ready to Book Sayamwar Hall?</h2>
        <p className="text-white/50 text-sm max-w-md mx-auto mb-8">
          From weddings to birthday parties — get a free quote in minutes via WhatsApp.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://wa.me/917646028228?text=Hello!%20I%20want%20to%20inquire%20about%20Sayamwar%20Hall"
            target="_blank" rel="noopener noreferrer"
            className="px-7 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg font-bold transition-colors"
          >
            💬 WhatsApp for Free Quote
          </a>
          <a href="tel:7646028228" className="px-7 py-3 bg-[#C9A84C] text-[#3D0A0A] rounded-lg font-bold hover:bg-[#E8C96A] transition-colors">
            📞 7646028228
          </a>
        </div>
      </section>
    </>
  )
}
