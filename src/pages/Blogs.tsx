import BlogPreview from '../components/BlogPreview';

export default function Blogs() {
  return (
    <div className="pt-20 min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-5xl md:text-7xl font-display mb-6">Our Blog</h1>
        <p className="text-xl text-text-secondary max-w-2xl mb-12">Deep dives into post-quantum cryptography, AI security, and the future of blockchain infrastructure.</p>
      </div>
      <BlogPreview />
    </div>
  );
}
