'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function DeletePostButton({ id, title }: { id: string; title: string }) {
  const [confirming, setConfirming] = useState(false)
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  async function handleDelete() {
    setLoading(true)
    await fetch(`/api/admin/blog/${id}`, { method: 'DELETE' })
    router.refresh()
  }

  if (confirming) {
    return (
      <div className="flex items-center gap-1">
        <button
          onClick={handleDelete}
          disabled={loading}
          className="text-xs bg-red-600 hover:bg-red-700 text-white px-2 py-1.5 rounded-lg disabled:opacity-60 font-semibold"
        >
          {loading ? '…' : 'Delete'}
        </button>
        <button
          onClick={() => setConfirming(false)}
          className="text-xs text-gray-500 hover:text-gray-700 px-2 py-1.5"
        >
          Cancel
        </button>
      </div>
    )
  }

  return (
    <button
      onClick={() => setConfirming(true)}
      title={`Delete "${title}"`}
      className="text-xs text-gray-400 hover:text-red-600 px-2 py-1.5 rounded border border-gray-200 hover:border-red-300 transition-colors"
    >
      Delete
    </button>
  )
}
