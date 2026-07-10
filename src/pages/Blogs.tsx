import Link from 'next/link';

export default function LegacyBlogsRedirect() {
  return (
    <div className="min-h-screen bg-background text-text-primary flex items-center justify-center px-6">
      <div className="max-w-xl text-center">
        <h1 className="text-4xl font-display mb-4">Codesstellar Blog</h1>
        <p className="text-text-secondary mb-8">The CMS-powered blog now lives at /blogs.</p>
        <Link href="/blogs" className="px-6 py-3 rounded-full bg-accent-primary text-background font-medium">
          Open Blog
        </Link>
      </div>
    </div>
  );
}
