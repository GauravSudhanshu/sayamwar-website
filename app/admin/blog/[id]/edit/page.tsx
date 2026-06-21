import { notFound } from 'next/navigation'
import { getAdminPost } from '@/lib/blog'
import PostEditor from '../../_components/PostEditor'

interface Props { params: Promise<{ id: string }> }

export default async function EditPostPage({ params }: Props) {
  const { id } = await params
  const post = await getAdminPost(id)
  if (!post) notFound()

  return (
    <div className="space-y-5">
      <div>
        <h2 className="text-xl font-bold text-gray-900">Edit Post</h2>
        <p className="text-gray-500 text-sm mt-1 truncate">{post.title}</p>
      </div>
      <PostEditor post={post} />
    </div>
  )
}
