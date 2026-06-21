'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import type { ContentBlock, AdminPost } from '@/lib/blog'

type BlockType = ContentBlock['type']

const BLOCK_LABELS: Record<BlockType, string> = {
  h2: 'Heading 2',
  h3: 'Heading 3',
  p: 'Paragraph',
  ul: 'Bullet List',
  cta: 'CTA Button',
}

// Editable block state — ui-friendly version of ContentBlock
type BlockState =
  | { type: 'h2'; text: string }
  | { type: 'h3'; text: string }
  | { type: 'p'; text: string }
  | { type: 'ul'; items: string } // newline-separated for textarea
  | { type: 'cta'; text: string; href: string; label: string }

function defaultBlock(type: BlockType): BlockState {
  if (type === 'ul') return { type: 'ul', items: '' }
  if (type === 'cta') return { type: 'cta', text: '', href: '', label: '' }
  return { type, text: '' } as BlockState
}

function blockToState(block: ContentBlock): BlockState {
  if (block.type === 'ul') return { type: 'ul', items: block.items.join('\n') }
  return block as BlockState
}

function stateToBlock(state: BlockState): ContentBlock {
  if (state.type === 'ul') return { type: 'ul', items: state.items.split('\n').map(s => s.trim()).filter(Boolean) }
  return state as ContentBlock
}

const CATEGORIES = ['Banquet Hall', 'Wedding', 'Birthday', 'Tips', 'Rooms & Stay']
const IMAGES = ['/venue-1.jpg', '/venue-2.jpg', '/venue-3.jpg', '/venue-4.jpg', '/venue-5.jpg', '/venue-6.jpg', '/venue-7.jpg', '/venue-8.jpg', '/pkg-wedding.jpg', '/pkg-reception.jpg', '/pkg-engagement.jpg', '/pkg-birthday.jpg', '/hero-bg.jpg']

interface Props {
  post?: AdminPost
}

export default function PostEditor({ post }: Props) {
  const router = useRouter()
  const isEdit = !!post

  const [title, setTitle] = useState(post?.title ?? '')
  const [slug, setSlug] = useState(post?.slug ?? '')
  const [excerpt, setExcerpt] = useState(post?.excerpt ?? '')
  const [date, setDate] = useState(post?.date ?? new Date().toISOString().slice(0, 10))
  const [readTime, setReadTime] = useState(post?.readTime ?? '5 min read')
  const [category, setCategory] = useState(post?.category ?? 'Tips')
  const [image, setImage] = useState(post?.image ?? '/venue-4.jpg')
  const [keywords, setKeywords] = useState(post?.keywords ?? '')
  const [blocks, setBlocks] = useState<BlockState[]>(
    post?.content.map(blockToState) ?? [{ type: 'p', text: '' }]
  )
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')

  function autoSlug(t: string) {
    return t.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
  }

  function updateBlock(i: number, update: Partial<BlockState>) {
    setBlocks(prev => prev.map((b, idx) => idx === i ? { ...b, ...update } as BlockState : b))
  }

  function addBlock(type: BlockType) {
    setBlocks(prev => [...prev, defaultBlock(type)])
  }

  function removeBlock(i: number) {
    setBlocks(prev => prev.filter((_, idx) => idx !== i))
  }

  function moveBlock(i: number, dir: -1 | 1) {
    setBlocks(prev => {
      const arr = [...prev]
      const j = i + dir
      if (j < 0 || j >= arr.length) return arr
      ;[arr[i], arr[j]] = [arr[j], arr[i]]
      return arr
    })
  }

  async function handleSave() {
    if (!title || !slug) { setError('Title and slug are required.'); return }
    setSaving(true)
    setError('')

    const payload = {
      title, slug, excerpt, date, readTime, category, image, keywords,
      content: blocks.map(stateToBlock),
    }

    const res = await fetch(
      isEdit ? `/api/admin/blog/${post.id}` : '/api/admin/blog',
      {
        method: isEdit ? 'PUT' : 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      }
    )

    if (res.ok) {
      router.push('/admin/blog')
      router.refresh()
    } else {
      const data = await res.json().catch(() => ({}))
      setError(data.error ?? 'Failed to save. Try again.')
      setSaving(false)
    }
  }

  const inputCls = 'w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-[#7B1818] focus:ring-2 focus:ring-[#7B1818]/10'

  return (
    <div className="space-y-6 max-w-3xl">
      {/* Meta fields */}
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 space-y-4">
        <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">Post Details</h3>

        <div>
          <label className="block text-xs text-gray-500 mb-1">Title *</label>
          <input
            value={title}
            onChange={e => {
              setTitle(e.target.value)
              if (!isEdit) setSlug(autoSlug(e.target.value))
            }}
            placeholder="e.g. Best Banquet Hall in Patna – 2025 Guide"
            className={inputCls}
          />
        </div>

        <div>
          <label className="block text-xs text-gray-500 mb-1">Slug (URL) *</label>
          <div className="flex items-center gap-2">
            <span className="text-gray-400 text-xs">/blog/</span>
            <input
              value={slug}
              onChange={e => setSlug(e.target.value)}
              placeholder="best-banquet-hall-patna"
              className={inputCls}
            />
          </div>
        </div>

        <div>
          <label className="block text-xs text-gray-500 mb-1">Excerpt</label>
          <textarea
            value={excerpt}
            onChange={e => setExcerpt(e.target.value)}
            rows={2}
            placeholder="Short summary shown on blog listing page..."
            className={`${inputCls} resize-none`}
          />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <div>
            <label className="block text-xs text-gray-500 mb-1">Date</label>
            <input type="date" value={date} onChange={e => setDate(e.target.value)} className={inputCls} />
          </div>
          <div>
            <label className="block text-xs text-gray-500 mb-1">Read Time</label>
            <input value={readTime} onChange={e => setReadTime(e.target.value)} placeholder="5 min read" className={inputCls} />
          </div>
          <div>
            <label className="block text-xs text-gray-500 mb-1">Category</label>
            <select value={category} onChange={e => setCategory(e.target.value)} className={inputCls}>
              {CATEGORIES.map(c => <option key={c}>{c}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-xs text-gray-500 mb-1">Image</label>
            <select value={image} onChange={e => setImage(e.target.value)} className={inputCls}>
              {IMAGES.map(img => <option key={img} value={img}>{img}</option>)}
            </select>
          </div>
        </div>

        <div>
          <label className="block text-xs text-gray-500 mb-1">Keywords (comma-separated, for SEO)</label>
          <input
            value={keywords}
            onChange={e => setKeywords(e.target.value)}
            placeholder="banquet hall patna, best banquet patna..."
            className={inputCls}
          />
        </div>
      </div>

      {/* Content blocks */}
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 space-y-3">
        <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">Content</h3>

        {blocks.map((block, i) => (
          <div key={i} className="border border-gray-200 rounded-lg overflow-hidden">
            {/* Block header */}
            <div className="flex items-center gap-2 px-3 py-2 bg-gray-50 border-b border-gray-200">
              <select
                value={block.type}
                onChange={e => {
                  const newType = e.target.value as BlockType
                  setBlocks(prev => prev.map((b, idx) => idx === i ? defaultBlock(newType) : b))
                }}
                className="text-xs border border-gray-200 rounded px-2 py-1 focus:outline-none focus:border-[#7B1818] bg-white"
              >
                {(Object.keys(BLOCK_LABELS) as BlockType[]).map(t => (
                  <option key={t} value={t}>{BLOCK_LABELS[t]}</option>
                ))}
              </select>
              <div className="flex items-center gap-1 ml-auto">
                <button onClick={() => moveBlock(i, -1)} disabled={i === 0} className="w-6 h-6 text-gray-400 hover:text-gray-700 disabled:opacity-30 text-xs">↑</button>
                <button onClick={() => moveBlock(i, 1)} disabled={i === blocks.length - 1} className="w-6 h-6 text-gray-400 hover:text-gray-700 disabled:opacity-30 text-xs">↓</button>
                <button onClick={() => removeBlock(i)} className="w-6 h-6 text-red-400 hover:text-red-600 text-xs ml-1">×</button>
              </div>
            </div>

            {/* Block content */}
            <div className="p-3">
              {(block.type === 'h2' || block.type === 'h3' || block.type === 'p') && (
                <textarea
                  rows={block.type === 'p' ? 3 : 1}
                  value={(block as { text: string }).text}
                  onChange={e => updateBlock(i, { text: e.target.value })}
                  placeholder={block.type === 'p' ? 'Paragraph text...' : 'Heading text...'}
                  className="w-full text-sm border-0 focus:outline-none resize-none placeholder-gray-300"
                />
              )}
              {block.type === 'ul' && (
                <div>
                  <p className="text-xs text-gray-400 mb-1">One item per line</p>
                  <textarea
                    rows={4}
                    value={block.items}
                    onChange={e => updateBlock(i, { items: e.target.value })}
                    placeholder={'Item one\nItem two\nItem three'}
                    className="w-full text-sm border-0 focus:outline-none resize-none placeholder-gray-300"
                  />
                </div>
              )}
              {block.type === 'cta' && (
                <div className="space-y-2">
                  <input value={block.text} onChange={e => updateBlock(i, { text: e.target.value })} placeholder="CTA descriptive text..." className={`${inputCls} text-xs`} />
                  <div className="grid grid-cols-2 gap-2">
                    <input value={block.href} onChange={e => updateBlock(i, { href: e.target.value })} placeholder="Link (e.g. /packages)" className={`${inputCls} text-xs`} />
                    <input value={block.label} onChange={e => updateBlock(i, { label: e.target.value })} placeholder="Button label" className={`${inputCls} text-xs`} />
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}

        {/* Add block */}
        <div className="flex flex-wrap gap-2 pt-1">
          {(Object.keys(BLOCK_LABELS) as BlockType[]).map(type => (
            <button
              key={type}
              onClick={() => addBlock(type)}
              className="text-xs border border-dashed border-gray-300 text-gray-500 hover:border-[#7B1818] hover:text-[#7B1818] px-3 py-1.5 rounded-lg transition-colors"
            >
              + {BLOCK_LABELS[type]}
            </button>
          ))}
        </div>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 text-sm px-4 py-3 rounded-lg">
          {error}
        </div>
      )}

      {/* Save */}
      <div className="flex items-center gap-3">
        <button
          onClick={handleSave}
          disabled={saving}
          className="bg-[#7B1818] hover:bg-[#5A0F0F] text-white font-semibold px-6 py-2.5 rounded-lg text-sm transition-colors disabled:opacity-60"
        >
          {saving ? 'Saving…' : isEdit ? 'Save Changes' : 'Publish Post'}
        </button>
        <button
          onClick={() => router.push('/admin/blog')}
          className="text-gray-500 hover:text-gray-700 text-sm transition-colors"
        >
          Cancel
        </button>
      </div>
    </div>
  )
}
