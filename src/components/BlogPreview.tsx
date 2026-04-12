export default function BlogPreview() {
  const posts = [
    {
      title: "NIST Finalizes Post-Quantum Cryptography Standards: What It Means for Web3",
      excerpt: "An in-depth analysis of FIPS 203, 204, and 205 and their immediate implications for blockchain state transitions and wallet architectures.",
      tag: "RESEARCH",
      date: "Oct 12, 2025",
      image: "https://picsum.photos/seed/quantum/800/600?blur=2"
    },
    {
      title: "The Crypto-Agility Imperative in Smart Contract Design",
      tag: "ENGINEERING",
      date: "Sep 28, 2025"
    },
    {
      title: "AI-Driven Threat Modeling for Cross-Chain Bridges",
      tag: "SECURITY",
      date: "Sep 15, 2025"
    }
  ];

  return (
    <section className="py-32 bg-surface border-t border-border-subtle">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-display">Insights from the quantum frontier</h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Featured Post */}
          <div className="w-full lg:w-[60%] group cursor-pointer" data-hover="READ">
            <div className="relative overflow-hidden rounded-2xl mb-6 aspect-[16/9]">
              <img 
                src={posts[0].image} 
                alt={posts[0].title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-60"></div>
            </div>
            <div className="flex items-center gap-4 mb-4">
              <span className="text-xs font-mono text-accent-primary border border-accent-primary/30 px-2 py-1 rounded">{posts[0].tag}</span>
              <span className="text-sm text-text-secondary">{posts[0].date}</span>
            </div>
            <h3 className="text-3xl font-display mb-4 group-hover:text-accent-primary transition-colors">{posts[0].title}</h3>
            <p className="text-text-secondary text-lg leading-relaxed">{posts[0].excerpt}</p>
          </div>

          {/* Smaller Posts */}
          <div className="w-full lg:w-[40%] flex flex-col gap-8">
            {posts.slice(1).map((post, i) => (
              <div key={i} className="group cursor-pointer flex-1 flex flex-col justify-center border-l-2 border-border-subtle hover:border-accent-primary pl-8 transition-colors" data-hover="READ">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-xs font-mono text-accent-secondary border border-accent-secondary/30 px-2 py-1 rounded">{post.tag}</span>
                  <span className="text-sm text-text-secondary">{post.date}</span>
                </div>
                <h3 className="text-2xl font-display group-hover:text-accent-secondary transition-colors">{post.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
