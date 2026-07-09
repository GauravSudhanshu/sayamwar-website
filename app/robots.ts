import type { MetadataRoute } from 'next'

// AI/answer-engine crawlers explicitly welcomed for GEO (Generative Engine
// Optimization) — being citable in ChatGPT/Perplexity/Gemini answers is
// another discovery channel for a local business, same as Google search.
const aiCrawlers = [
  'GPTBot', 'ChatGPT-User', 'OAI-SearchBot',
  'PerplexityBot', 'Perplexity-User',
  'ClaudeBot', 'Claude-User', 'Claude-SearchBot', 'anthropic-ai',
  'Google-Extended', 'Applebot-Extended', 'Amazonbot', 'CCBot', 'meta-externalagent',
]

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/', disallow: ['/admin/', '/api/'] },
      ...aiCrawlers.map((userAgent) => ({ userAgent, allow: '/', disallow: ['/admin/', '/api/'] })),
    ],
    sitemap: 'https://sayamwar.com/sitemap.xml',
    host: 'https://sayamwar.com',
  }
}
