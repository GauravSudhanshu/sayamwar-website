import Link from 'next/link'
import { getAdminPosts } from '@/lib/blog'
import { getInquiries } from '@/lib/inquiries'
import { posts as staticPosts } from '@/app/blog/posts'

export const dynamic = 'force-dynamic'

export default async function AdminDashboard() {
  const [adminPosts, inquiries] = await Promise.all([
    getAdminPosts(),
    getInquiries(),
  ])

  const totalPosts = staticPosts.length + adminPosts.length
  const totalInquiries = inquiries.length
  const newInquiries = inquiries.filter(i => i.status === 'new').length
  const recentInquiries = inquiries.slice(0, 5)

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-bold text-gray-900">Dashboard</h2>
        <p className="text-gray-500 text-sm mt-1">Overview of your website content and leads.</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: 'Total Inquiries', value: totalInquiries, color: 'text-blue-600', bg: 'bg-blue-50' },
          { label: 'New / Unread', value: newInquiries, color: 'text-red-600', bg: 'bg-red-50' },
          { label: 'Blog Posts', value: totalPosts, color: 'text-purple-600', bg: 'bg-purple-50' },
          { label: 'Admin Posts', value: adminPosts.length, color: 'text-green-600', bg: 'bg-green-50' },
        ].map(s => (
          <div key={s.label} className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm">
            <p className={`text-3xl font-bold ${s.color}`}>{s.value}</p>
            <p className="text-gray-500 text-xs mt-1 uppercase tracking-wide">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Quick actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Link
          href="/admin/inquiries"
          className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm hover:border-[#C9A84C] transition-colors group"
        >
          <div className="flex items-center justify-between mb-3">
            <p className="font-semibold text-gray-800">Inquiries</p>
            {newInquiries > 0 && (
              <span className="bg-red-100 text-red-700 text-xs font-bold px-2 py-0.5 rounded-full">
                {newInquiries} new
              </span>
            )}
          </div>
          <p className="text-gray-500 text-sm">View all form submissions from the website.</p>
          <p className="text-[#7B1818] text-sm font-semibold mt-3 group-hover:text-[#C9A84C] transition-colors">
            View all →
          </p>
        </Link>

        <Link
          href="/admin/blog"
          className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm hover:border-[#C9A84C] transition-colors group"
        >
          <div className="flex items-center justify-between mb-3">
            <p className="font-semibold text-gray-800">Blog Posts</p>
            <span className="text-gray-400 text-xs">{totalPosts} total</span>
          </div>
          <p className="text-gray-500 text-sm">Create and manage blog articles for SEO.</p>
          <p className="text-[#7B1818] text-sm font-semibold mt-3 group-hover:text-[#C9A84C] transition-colors">
            Manage posts →
          </p>
        </Link>
      </div>

      {/* Recent inquiries */}
      {recentInquiries.length > 0 && (
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
            <p className="font-semibold text-gray-800">Recent Inquiries</p>
            <Link href="/admin/inquiries" className="text-[#7B1818] text-xs font-semibold hover:text-[#C9A84C]">
              View all →
            </Link>
          </div>
          <div className="divide-y divide-gray-50">
            {recentInquiries.map(inq => (
              <div key={inq.id} className="px-5 py-3 flex items-center justify-between gap-4">
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-gray-800 truncate">{inq.name || '—'}</p>
                  <p className="text-xs text-gray-400">{inq.phone} · {inq.event || 'General'}</p>
                </div>
                <div className="flex items-center gap-2 flex-shrink-0">
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                    inq.status === 'new' ? 'bg-red-100 text-red-700' :
                    inq.status === 'contacted' ? 'bg-yellow-100 text-yellow-700' :
                    inq.status === 'booked' ? 'bg-green-100 text-green-700' :
                    'bg-gray-100 text-gray-500'
                  }`}>
                    {inq.status}
                  </span>
                  <span className="text-xs text-gray-400 hidden sm:block">
                    {new Date(inq.createdAt).toLocaleDateString('en-IN')}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {!process.env.KV_REST_API_URL && (
        <div className="bg-amber-50 border border-amber-200 rounded-xl px-5 py-4 text-sm text-amber-800">
          <p className="font-semibold mb-1">⚠️ Using in-memory storage (development mode)</p>
          <p>Data will be lost when the server restarts. Set up <strong>Vercel KV</strong> and add <code>KV_REST_API_URL</code> + <code>KV_REST_API_TOKEN</code> environment variables for persistent storage in production.</p>
        </div>
      )}
    </div>
  )
}
