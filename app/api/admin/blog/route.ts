import { NextResponse } from 'next/server'
import { getAdminSession } from '@/lib/auth'
import { getAdminPosts, createAdminPost } from '@/lib/blog'
import { revalidatePath } from 'next/cache'

export async function GET() {
  if (!(await getAdminSession())) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const posts = await getAdminPosts()
  return NextResponse.json(posts)
}

export async function POST(request: Request) {
  if (!(await getAdminSession())) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const data = await request.json()
  const post = await createAdminPost(data)
  revalidatePath('/blog')
  revalidatePath('/')
  return NextResponse.json(post, { status: 201 })
}
