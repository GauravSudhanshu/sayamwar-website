import type { MetadataRoute } from 'next'
import { posts } from './blog/posts'

const pagePriorities: Record<string, number> = {
  '': 1.0,
  '/banquet-hall-patna': 0.95,
  '/wedding-venue-patna': 0.95,
  '/birthday-party-hall-patna': 0.9,
  '/engagement-hall-patna': 0.9,
  '/reception-hall-patna': 0.9,
  '/cheap-banquet-hall-patna': 0.9,
  '/corporate-event-hall-patna': 0.85,
  '/banquet-hall-danapur': 0.85,
  '/blog': 0.85,
  '/rooms': 0.8,
  '/rooms-in-patna': 0.8,
  '/packages': 0.8,
  '/gallery': 0.7,
  '/menu': 0.6,
  '/contact': 0.7,
}

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://sayamwar.com'
  const pages = Object.keys(pagePriorities)

  const staticUrls: MetadataRoute.Sitemap = pages.map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: pagePriorities[path] ?? 0.7,
  }))

  const blogUrls: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...staticUrls, ...blogUrls]
}
