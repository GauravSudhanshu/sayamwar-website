import { kvGet, kvSet, kvDel, kvLPush, kvLRange, kvLRem } from './kv'
import { posts as staticPosts, type BlogPost, type ContentBlock } from '@/app/blog/posts'

export type { BlogPost, ContentBlock }

export interface AdminPost extends BlogPost {
  id: string
  source: 'admin'
  updatedAt: string
}

const POSTS_LIST = 'admin:posts:list'
const POST_KEY = (id: string) => `admin:post:${id}`

export async function getAdminPosts(): Promise<AdminPost[]> {
  try {
    const ids = await kvLRange<string>(POSTS_LIST, 0, -1)
    const posts = await Promise.all(ids.map(id => kvGet<AdminPost>(POST_KEY(id))))
    return posts.filter(Boolean) as AdminPost[]
  } catch {
    return []
  }
}

export async function getAdminPost(id: string): Promise<AdminPost | null> {
  try {
    return kvGet<AdminPost>(POST_KEY(id))
  } catch {
    return null
  }
}

export async function createAdminPost(data: Omit<AdminPost, 'id' | 'source' | 'updatedAt'>): Promise<AdminPost> {
  const id = `post_${Date.now()}`
  const post: AdminPost = {
    ...data,
    id,
    source: 'admin',
    updatedAt: new Date().toISOString(),
  }
  await kvSet(POST_KEY(id), post)
  await kvLPush(POSTS_LIST, id)
  return post
}

export async function updateAdminPost(id: string, data: Partial<Omit<AdminPost, 'id' | 'source'>>): Promise<AdminPost | null> {
  const existing = await getAdminPost(id)
  if (!existing) return null
  const updated: AdminPost = { ...existing, ...data, id, source: 'admin', updatedAt: new Date().toISOString() }
  await kvSet(POST_KEY(id), updated)
  return updated
}

export async function deleteAdminPost(id: string): Promise<void> {
  await kvDel(POST_KEY(id))
  await kvLRem(POSTS_LIST, id)
}

// Merges static posts + admin posts, sorted by date desc
export async function getAllPosts(): Promise<(BlogPost | AdminPost)[]> {
  const adminPosts = await getAdminPosts()
  const all = [...staticPosts, ...adminPosts]
  return all.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export async function getPostBySlugDynamic(slug: string): Promise<BlogPost | AdminPost | null> {
  const staticPost = staticPosts.find(p => p.slug === slug)
  if (staticPost) return staticPost
  const adminPosts = await getAdminPosts()
  return adminPosts.find(p => p.slug === slug) ?? null
}
