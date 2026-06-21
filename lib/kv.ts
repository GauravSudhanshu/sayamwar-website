// Vercel KV when configured, in-memory fallback for local dev
// In-memory data is lost on server restart — set KV_REST_API_URL for persistence

const mem = new Map<string, unknown>()
const lists = new Map<string, unknown[]>()

const ok = () => !!process.env.KV_REST_API_URL

export async function kvGet<T>(key: string): Promise<T | null> {
  if (ok()) {
    const { kv } = await import('@vercel/kv')
    return kv.get<T>(key)
  }
  return (mem.get(key) as T) ?? null
}

export async function kvSet(key: string, value: unknown): Promise<void> {
  if (ok()) {
    const { kv } = await import('@vercel/kv')
    await kv.set(key, value)
  } else {
    mem.set(key, value)
  }
}

export async function kvDel(...keys: string[]): Promise<void> {
  if (ok()) {
    const { kv } = await import('@vercel/kv')
    await kv.del(...(keys as [string, ...string[]]))
  } else {
    keys.forEach(k => mem.delete(k))
  }
}

// List operations (newest first — lpush prepends)
export async function kvLPush(key: string, value: unknown): Promise<void> {
  if (ok()) {
    const { kv } = await import('@vercel/kv')
    await kv.lpush(key, value)
  } else {
    const list = lists.get(key) ?? []
    lists.set(key, [value, ...list])
  }
}

export async function kvLRange<T>(key: string, start: number, end: number): Promise<T[]> {
  if (ok()) {
    const { kv } = await import('@vercel/kv')
    return kv.lrange<T>(key, start, end)
  }
  const list = (lists.get(key) ?? []) as T[]
  return end === -1 ? list.slice(start) : list.slice(start, end + 1)
}

export async function kvLLen(key: string): Promise<number> {
  if (ok()) {
    const { kv } = await import('@vercel/kv')
    return kv.llen(key)
  }
  return (lists.get(key) ?? []).length
}

export async function kvLRem(key: string, value: string): Promise<void> {
  if (ok()) {
    const { kv } = await import('@vercel/kv')
    await kv.lrem(key, 0, value)
  } else {
    const list = (lists.get(key) ?? []) as string[]
    lists.set(key, list.filter(v => v !== value))
  }
}
