import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getPublishedBlogPost } from '@/src/lib/blog';
import MarkdownArticle from '@/src/lib/markdown';

export const dynamic = 'force-dynamic';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPublishedBlogPost(slug);
  if (!post) return { title: 'Blog | Codesstellar' };

  return {
    title: post.seoTitle || `${post.title} | Codesstellar`,
    description: post.seoDescription || post.excerpt,
    alternates: {
      canonical: `/blogs/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.publishedAt,
      images: post.image ? [post.image] : undefined,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPublishedBlogPost(slug);
  if (!post) notFound();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    author: {
      '@type': 'Organization',
      name: 'Codesstellar',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Codesstellar',
    },
  };

  return (
    <article className="pt-28 pb-24 bg-background min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="max-w-4xl mx-auto px-6">
        <Link href="/blogs" className="text-sm text-accent-primary hover:text-text-primary transition-colors">← Back to blog</Link>
        <div className="mt-10 mb-12">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-xs font-mono text-accent-primary border border-accent-primary/30 px-2 py-1 rounded">{post.tag}</span>
            <span className="text-sm text-text-secondary">{post.date}</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-display leading-tight mb-6">{post.title}</h1>
          <p className="text-xl text-text-secondary leading-relaxed">{post.excerpt}</p>
        </div>

        {post.image && (
          <div className="relative overflow-hidden rounded-2xl mb-12 aspect-[16/9] border border-border-subtle">
            <img src={post.image} alt={post.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </div>
        )}

        <div className="rounded-2xl border border-border-subtle bg-surface/70 p-6 md:p-10">
          <MarkdownArticle markdown={post.bodyMarkdown} />
        </div>
      </div>
    </article>
  );
}
