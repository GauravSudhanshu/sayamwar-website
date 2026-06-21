import { SignJWT, jwtVerify } from 'jose'
import { cookies } from 'next/headers'

const secret = () =>
  new TextEncoder().encode(process.env.ADMIN_JWT_SECRET ?? 'dev-secret-change-in-production')

export async function createToken(): Promise<string> {
  return new SignJWT({ admin: true })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('7d')
    .sign(secret())
}

export async function verifyToken(token: string): Promise<boolean> {
  try {
    await jwtVerify(token, secret())
    return true
  } catch {
    return false
  }
}

export async function getAdminSession(): Promise<boolean> {
  const cookieStore = await cookies()
  const token = cookieStore.get('admin_token')?.value
  if (!token) return false
  return verifyToken(token)
}
