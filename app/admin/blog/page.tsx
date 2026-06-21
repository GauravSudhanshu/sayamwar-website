import Link from 'next/link'
import { getAdminPosts } from '@/lib/blog'
import { posts as staticPosts } from '@/app/blog/posts'
import DeletePostButton from './_components/DeletePostButton'

export const dynamic = 'force-dynamic'

export default async function BlogAdminPage() {
  const adminPosts = await getAdminPosts()

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-gray-900">Blog Posts</h2>
          <p className="text-gray-500 text-sm mt-1">
            {staticPosts.length} static · {adminPosts.length} admin-created
          </p>
        </div>
        <Link
          href="/admin/blog/new"
          className="bg-[#7B1818] hover:bg-[#5A0F0F] text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
        >
          + New Post
        </Link>
      </div>

      {/* Admin-created posts */}
      {adminPosts.length > 0 && (
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="px-5 py-3 border-b border-gray-100 bg-gray-50">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Admin Posts</p>
          </div>
          <div className="divide-y divide-gray-50">
            {adminPosts.map(post => (
              <div key={post.id} className="px-5 py-4 flex items-center justify-between gap-4">
                <div className="min-w-0 flex-1">
                  <p className="font-semibold text-gray-800 truncate">{post.title}</p>
                  <div className="flex items-center gap-3 mt-1">
                    <span className="text-xs bg-[#C9A84C]/15 text-[#7B1818] font-semibold px-2 py-0.5 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-400">{post.date}</span>
                    <span className="text-xs text-gray-400">{post.readTime}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 flex-shrink-0">
                  <Link
                    href={`/blog/${post.slug}`}
                    target="_blank"
                    className="text-xs text-gray-400 hover:text-gray-600 px-2 py-1.5 rounded border border-gray-200 hover:border-gray-300 transition-colors"
                  >
                    View ↗
                  </Link>
                  <Link
                    href={`/admin/blog/${post.id}/edit`}
                    className="text-xs text-white bg-[#7B1818] hover:bg-[#5A0F0F] px-3 py-1.5 rounded-lg transition-colors font-semibold"
                  >
                    Edit
                  </Link>
                  <DeletePostButton id={post.id} title={post.title} />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Static posts (read-only) */}
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="px-5 py-3 border-b border-gray-100 bg-gray-50 flex items-center justify-between">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Static Posts (code)</p>
          <p className="text-xs text-gray-400">Edit in app/blog/posts.ts</p>
        </div>
        <div className="divide-y divide-gray-50">
          {staticPosts.map(post => (
            <div key={post.slug} className="px-5 py-4 flex items-center justify-between gap-4">
              <div className="min-w-0 flex-1">
                <p className="font-semibold text-gray-800 truncate">{post.title}</p>
                <div className="flex items-center gap-3 mt-1">
                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">{post.category}</span>
                  <span className="text-xs text-gray-400">{post.date}</span>
                </div>
              </div>
              <Link
                href={`/blog/${post.slug}`}
                target="_blank"
                className="text-xs text-gray-400 hover:text-gray-600 px-2 py-1.5 rounded border border-gray-200 hover:border-gray-300 transition-colors flex-shrink-0"
              >
                View ↗
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
