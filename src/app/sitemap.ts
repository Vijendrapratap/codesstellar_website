import type { MetadataRoute } from 'next';
import { fallbackBlogPosts } from '@/src/lib/fallback-posts';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://codesstellar.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/blogs', '/case-studies', '/build'].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: path === '' ? 'weekly' as const : 'monthly' as const,
    priority: path === '' ? 1 : 0.8,
  }));

  return [...routes, ...fallbackBlogPosts.map((post) => ({
    url: `${baseUrl}/blogs/${post.slug}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))];
}
