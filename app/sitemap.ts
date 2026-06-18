import type { MetadataRoute } from 'next'
import { posts } from './blog/posts'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://sayamwar.com'
  const pages = [
    '',
    '/rooms',
    '/rooms-in-patna',
    '/banquet-hall-patna',
    '/banquet-hall-danapur',
    '/cheap-banquet-hall-patna',
    '/birthday-party-hall-patna',
    '/wedding-venue-patna',
    '/gallery',
    '/packages',
    '/menu',
    '/contact',
    '/blog',
  ]

  const staticUrls: MetadataRoute.Sitemap = pages.map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: path === '' ? 1 : path === '/blog' ? 0.9 : 0.8,
  }))

  const blogUrls: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...staticUrls, ...blogUrls]
}
