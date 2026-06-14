import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://sayamwar.com'
  const pages = ['', '/rooms', '/rooms-in-patna', '/banquet-hall-patna', '/banquet-hall-danapur', '/cheap-banquet-hall-patna', '/birthday-party-hall-patna', '/wedding-venue-patna', '/gallery', '/packages', '/menu', '/contact']
  return pages.map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: path === '' ? 1 : 0.8,
  }))
}
