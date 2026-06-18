import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { posts, getPostBySlug, type ContentBlock } from '../posts'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}
  return {
    title: `${post.title} | Sayamwar Hall Blog`,
    description: post.excerpt,
    keywords: post.keywords,
    alternates: { canonical: `https://sayamwar.com/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      images: [{ url: post.image, width: 1200, height: 630, alt: post.title }],
    },
  }
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })
}

function renderBlock(block: ContentBlock, index: number) {
  switch (block.type) {
    case 'h2':
      return (
        <h2 key={index} className="font-[var(--font-playfair)] text-2xl md:text-3xl font-bold text-[#3D0A0A] mt-10 mb-4 leading-snug">
          {block.text}
        </h2>
      )
    case 'h3':
      return (
        <h3 key={index} className="font-[var(--font-playfair)] text-xl font-bold text-[#5A0F0F] mt-7 mb-3">
          {block.text}
        </h3>
      )
    case 'p':
      return (
        <p key={index} className="text-gray-600 text-base leading-relaxed mb-4">
          {block.text}
        </p>
      )
    case 'ul':
      return (
        <ul key={index} className="space-y-2 mb-6 pl-1">
          {block.items.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-gray-600 text-base leading-relaxed">
              <span className="text-[#C9A84C] font-bold mt-0.5 flex-shrink-0">✦</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )
    case 'cta':
      return (
        <div key={index} className="my-10 bg-gradient-to-br from-[#5A0F0F] to-[#7B1818] rounded-2xl p-8 text-center">
          <p className="text-white/80 text-base mb-5 leading-relaxed">{block.text}</p>
          <Link href={block.href} className="inline-block bg-[#C9A84C] hover:bg-[#E8C96A] text-[#3D0A0A] font-bold py-3 px-8 rounded-lg transition-colors">
            {block.label} →
          </Link>
        </div>
      )
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  const related = posts.filter((p) => p.slug !== post.slug && p.category === post.category).slice(0, 2)
  const others = posts.filter((p) => p.slug !== post.slug).slice(0, 2 - related.length)
  const relatedPosts = [...related, ...others].slice(0, 2)

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    image: `https://sayamwar.com${post.image}`,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Organization',
      name: 'Sayamwar Hall & Homestay',
      url: 'https://sayamwar.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Sayamwar Hall & Homestay',
      logo: { '@type': 'ImageObject', url: 'https://sayamwar.com/logo.png' },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `https://sayamwar.com/blog/${post.slug}` },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />

      {/* Hero */}
      <section className="relative h-[420px] md:h-[520px] flex items-end overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A0303]/90 via-[#1A0303]/50 to-[#1A0303]/20" />
        <div className="relative z-10 px-6 pb-12 max-w-4xl mx-auto w-full">
          <div className="flex items-center gap-3 mb-4">
            <Link
              href="/blog"
              className="text-[#C9A84C] text-xs tracking-widest uppercase hover:text-white transition-colors"
            >
              ← Blog
            </Link>
            <span className="text-white/30">·</span>
            <span className="bg-[#C9A84C] text-[#3D0A0A] text-xs font-bold px-3 py-1 rounded-full">
              {post.category}
            </span>
          </div>
          <h1 className="font-[var(--font-playfair)] text-3xl md:text-5xl font-bold text-white leading-tight mb-4">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-white/50 text-sm">
            <span>{formatDate(post.date)}</span>
            <span>·</span>
            <span>{post.readTime}</span>
          </div>
        </div>
      </section>

      {/* Article body */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-3xl mx-auto">

          {/* Excerpt / lead */}
          <p className="font-[var(--font-playfair)] text-lg italic text-[#5A0F0F] leading-relaxed border-l-4 border-[#C9A84C] pl-5 mb-10">
            {post.excerpt}
          </p>

          {/* Content blocks */}
          <div>
            {post.content.map((block, i) => renderBlock(block, i))}
          </div>

          {/* Bottom share strip */}
          <div className="mt-14 pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">Published by</p>
              <p className="font-semibold text-[#3D0A0A]">Sayamwar Hall & Homestay</p>
              <p className="text-gray-400 text-xs">Gola Road, Danapur, Patna · 7646028228</p>
            </div>
            <a
              href={`https://wa.me/917646028228?text=Hello!%20I%20read%20your%20blog%20on%20${encodeURIComponent(post.title)}%20and%20want%20to%20inquire`}
              target="_blank" rel="noopener noreferrer"
              className="flex-shrink-0 px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg font-bold text-sm transition-colors"
            >
              💬 Enquire via WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Related posts */}
      {relatedPosts.length > 0 && (
        <section className="py-14 px-4 bg-[#FDF8F0]">
          <div className="max-w-5xl mx-auto">
            <p className="text-[#C9A84C] text-xs tracking-[0.3em] uppercase font-[var(--font-inter)] mb-6">Keep Reading</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedPosts.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 flex gap-5 p-5"
                >
                  <div className="relative w-24 h-24 rounded-xl overflow-hidden flex-shrink-0">
                    <Image src={p.image} alt={p.title} fill className="object-cover transition-transform duration-300 group-hover:scale-110" sizes="96px" />
                  </div>
                  <div className="flex flex-col justify-center">
                    <span className="text-[#C9A84C] text-xs uppercase tracking-wide font-semibold mb-1">{p.category}</span>
                    <h3 className="font-[var(--font-playfair)] text-base font-bold text-[#3D0A0A] leading-snug group-hover:text-[#7B1818] transition-colors">
                      {p.title}
                    </h3>
                    <span className="text-gray-400 text-xs mt-2">{p.readTime}</span>
                  </div>
                </Link>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link href="/blog" className="text-[#7B1818] font-bold text-sm hover:text-[#C9A84C] transition-colors">
                View All Articles →
              </Link>
            </div>
          </div>
        </section>
      )}
    </>
  )
}
