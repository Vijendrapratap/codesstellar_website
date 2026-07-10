import Link from 'next/link';
import { getPublishedBlogPosts } from '@/src/lib/blog';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Blog | Codesstellar',
  description: 'Research and engineering notes on post-quantum cryptography, blockchain infrastructure, Web3 security, and crypto-agile architecture.',
};

export default async function BlogsPage() {
  const posts = await getPublishedBlogPosts();

  return (
    <div className="pt-20 min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <p className="text-sm font-mono text-accent-primary tracking-[0.2em] uppercase mb-4">Codesstellar Research / Field Notes</p>
        <h1 className="text-5xl md:text-7xl font-display mb-6">The systems that will outlive the hype.</h1>
        <p className="text-xl text-text-secondary max-w-3xl mb-12">
          Clear thinking on post-quantum cryptography, AI-assisted security, and the engineering decisions behind resilient Web3 infrastructure.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blogs/${post.slug}`} className="group rounded-2xl border border-border-subtle bg-surface/70 p-6 min-h-[300px] flex flex-col hover:border-accent-primary/60 hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center gap-4 mb-5">
                <span className="text-xs font-mono text-accent-primary border border-accent-primary/30 px-2 py-1 rounded">{post.tag}</span>
                <span className="text-sm text-text-secondary">{post.date}</span>
              </div>
              <h2 className="text-2xl font-display mb-4 group-hover:text-accent-primary transition-colors">{post.title}</h2>
              <p className="text-text-secondary leading-relaxed">{post.excerpt}</p>
              <span className="mt-auto pt-6 text-sm text-accent-primary opacity-0 group-hover:opacity-100 transition-opacity">Read field note →</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
