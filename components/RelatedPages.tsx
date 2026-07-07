import Link from 'next/link'

interface RelatedPage {
  href: string
  label: string
}

export default function RelatedPages({ links }: { links: RelatedPage[] }) {
  return (
    <section className="py-10 px-4 bg-[var(--ivory)] border-t border-[var(--gold)]/10">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-[var(--black)]/40 text-xs uppercase tracking-widest mb-4">You May Also Be Looking For</p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="px-4 py-2 bg-white border border-[var(--gold)]/25 rounded-full text-sm font-semibold text-[var(--maroon)] hover:bg-[var(--gold)] hover:text-white hover:border-[var(--gold)] transition-colors"
            >
              {l.label} →
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
