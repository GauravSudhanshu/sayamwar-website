import PostEditor from '../_components/PostEditor'

export default function NewPostPage() {
  return (
    <div className="space-y-5">
      <div>
        <h2 className="text-xl font-bold text-gray-900">New Blog Post</h2>
        <p className="text-gray-500 text-sm mt-1">Create a new article. It will appear on the public blog immediately.</p>
      </div>
      <PostEditor />
    </div>
  )
}
