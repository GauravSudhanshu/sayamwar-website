'use client'
import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import AnimateOnScroll from './AnimateOnScroll'

interface Photo {
  src: string
  label: string
  category: string
  span: string
}

const FILTER_ORDER = ['All', 'Wedding', 'Banquet Hall', 'Decoration', 'Venue', 'Rooms', 'Birthday']

export default function GalleryGrid({ photos }: { photos: Photo[] }) {
  const [activeFilter, setActiveFilter] = useState('All')
  const [selected, setSelected] = useState<number | null>(null)

  // derive the categories that actually have photos
  const categories = ['All', ...FILTER_ORDER.slice(1).filter(c => photos.some(p => p.category === c))]

  const filtered = activeFilter === 'All' ? photos : photos.filter(p => p.category === activeFilter)

  const close = useCallback(() => setSelected(null), [])
  const prev = useCallback(() => setSelected(i => i !== null ? (i - 1 + filtered.length) % filtered.length : null), [filtered.length])
  const next = useCallback(() => setSelected(i => i !== null ? (i + 1) % filtered.length : null), [filtered.length])

  useEffect(() => {
    if (selected === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [selected, close, prev, next])

  // reset lightbox when filter changes
  useEffect(() => { setSelected(null) }, [activeFilter])

  return (
    <>
      {/* Filter tabs */}
      <div className="flex flex-wrap gap-2 justify-center mb-8">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveFilter(cat)}
            className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-widest transition-all duration-300 border ${
              activeFilter === cat
                ? 'bg-[var(--gold)] text-white border-[var(--gold)] shadow-md'
                : 'bg-white text-[var(--black)]/60 border-[var(--gold)]/30 hover:border-[var(--gold)] hover:text-[var(--gold)]'
            }`}
          >
            {cat}
            <span className="ml-1.5 opacity-60 font-normal">
              ({cat === 'All' ? photos.length : photos.filter(p => p.category === cat).length})
            </span>
          </button>
        ))}
      </div>

      {/* Grid — masonry spans for All, uniform grid for filtered */}
      <div className={
        activeFilter === 'All'
          ? 'grid grid-cols-2 md:grid-cols-4 gap-3 auto-rows-[220px]'
          : 'grid grid-cols-2 md:grid-cols-3 gap-3 auto-rows-[240px]'
      }>
        {filtered.map((p, i) => (
          <AnimateOnScroll
            key={p.src}
            delay={i * 60}
            className={activeFilter === 'All' ? p.span : ''}
          >
            <div
              className="relative w-full h-full rounded-2xl overflow-hidden img-card group cursor-pointer shadow-md"
              onClick={() => setSelected(i)}
              role="button"
              aria-label={`View ${p.label}`}
            >
              <Image
                src={p.src}
                alt={p.label}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-[1.06]"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              <div className="overlay" />
              <div className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-[var(--gold)] text-xs uppercase tracking-widest font-[var(--font-inter)]">{p.category}</span>
                <span className="text-white font-[var(--font-playfair)] font-bold text-base">{p.label}</span>
              </div>
            </div>
          </AnimateOnScroll>
        ))}
      </div>

      {/* Lightbox */}
      {selected !== null && (
        <div
          className="fixed inset-0 z-[9999] bg-black/92 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
        >
          <button
            className="absolute top-5 right-5 text-white/60 hover:text-white transition-colors w-10 h-10 flex items-center justify-center text-3xl leading-none"
            onClick={close} aria-label="Close"
          >×</button>

          <button
            className="absolute left-3 md:left-8 text-white/60 hover:text-white transition-colors w-12 h-12 flex items-center justify-center text-4xl"
            onClick={(e) => { e.stopPropagation(); prev() }} aria-label="Previous image"
          >‹</button>

          <div
            className="relative w-full max-w-4xl"
            style={{ aspectRatio: '4/3', maxHeight: '82vh' }}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={filtered[selected].src}
              alt={filtered[selected].label}
              fill className="object-contain" sizes="100vw" priority
            />
          </div>

          <button
            className="absolute right-3 md:right-8 text-white/60 hover:text-white transition-colors w-12 h-12 flex items-center justify-center text-4xl"
            onClick={(e) => { e.stopPropagation(); next() }} aria-label="Next image"
          >›</button>

          <div className="absolute bottom-5 left-0 right-0 text-center pointer-events-none">
            <p className="text-[var(--gold)] text-xs uppercase tracking-widest mb-1">{filtered[selected].category}</p>
            <p className="text-white font-[var(--font-playfair)] font-bold text-lg">{filtered[selected].label}</p>
            <p className="text-white/35 text-xs mt-1">{selected + 1} / {filtered.length}</p>
          </div>
        </div>
      )}
    </>
  )
}
