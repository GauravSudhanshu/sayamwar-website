import { NextResponse } from 'next/server'
import { getAdminSession } from '@/lib/auth'
import { getAdminPost, updateAdminPost, deleteAdminPost } from '@/lib/blog'
import { revalidatePath } from 'next/cache'

interface Params { params: Promise<{ id: string }> }

export async function GET(_: Request, { params }: Params) {
  if (!(await getAdminSession())) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const { id } = await params
  const post = await getAdminPost(id)
  if (!post) return NextResponse.json({ error: 'Not found' }, { status: 404 })
  return NextResponse.json(post)
}

export async function PUT(request: Request, { params }: Params) {
  if (!(await getAdminSession())) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const { id } = await params
  const data = await request.json()
  const post = await updateAdminPost(id, data)
  if (!post) return NextResponse.json({ error: 'Not found' }, { status: 404 })
  revalidatePath('/blog')
  revalidatePath(`/blog/${post.slug}`)
  revalidatePath('/')
  return NextResponse.json(post)
}

export async function DELETE(_: Request, { params }: Params) {
  if (!(await getAdminSession())) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const { id } = await params
  const post = await getAdminPost(id)
  await deleteAdminPost(id)
  if (post) {
    revalidatePath('/blog')
    revalidatePath(`/blog/${post.slug}`)
    revalidatePath('/')
  }
  return NextResponse.json({ ok: true })
}
