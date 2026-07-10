'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-background relative pt-20 pb-8">
      {/* Top Border Gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-accent-primary/30 via-accent-secondary/30 to-accent-primary/30"></div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          {/* Col 1 */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex items-center">
              <img src="/assets/logo-full-white.png" alt="Codesstellar Logo" className="h-10 w-auto object-contain" />
            </Link>
            <p className="text-text-secondary text-sm leading-relaxed">
              Post-Quantum Cryptography (PQC)<br/>
              Blockchain + AI Security Infrastructure
            </p>
            <div className="flex gap-4 mt-2">
              {['Twitter', 'LinkedIn', 'GitHub', 'Telegram'].map((social) => (
                <a key={social} href="#" className="text-text-secondary hover:text-accent-primary transition-colors text-sm">
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* Col 2 */}
          <div>
            <h4 className="font-mono text-xs text-text-primary mb-6 uppercase tracking-wider">Technology</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-sm text-text-secondary hover:text-accent-primary transition-colors">PQC Blockchain</a></li>
              <li><a href="#" className="text-sm text-text-secondary hover:text-accent-primary transition-colors">AI Security</a></li>
              <li><a href="#" className="text-sm text-text-secondary hover:text-accent-primary transition-colors">Architecture</a></li>
              <li><a href="#" className="text-sm text-text-secondary hover:text-accent-primary transition-colors">Developer API</a></li>
            </ul>
          </div>

          {/* Col 3 */}
          <div>
            <h4 className="font-mono text-xs text-text-primary mb-6 uppercase tracking-wider">Company</h4>
            <ul className="space-y-4">
              <li><Link href="/case-studies" className="text-sm text-text-secondary hover:text-accent-secondary transition-colors">Case Studies</Link></li>
              <li><Link href="/blogs" className="text-sm text-text-secondary hover:text-accent-secondary transition-colors">Blog</Link></li>
              <li><Link href="/" className="text-sm text-text-secondary hover:text-accent-secondary transition-colors">About Us</Link></li>
              <li><Link href="/" className="text-sm text-text-secondary hover:text-accent-secondary transition-colors">Careers</Link></li>
            </ul>
          </div>

          {/* Col 4 */}
          <div>
            <h4 className="font-mono text-xs text-text-primary mb-6 uppercase tracking-wider">Build With Us</h4>
            <p className="text-sm text-text-secondary mb-4">Subscribe to our engineering newsletter for updates on PQC standards.</p>
            <form className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email address" 
                className="flex-1 bg-surface border border-border-subtle rounded px-3 py-2 text-sm text-text-primary focus:outline-none focus:border-accent-primary transition-colors"
              />
              <button 
                type="button"
                className="px-4 py-2 bg-text-primary text-background text-sm font-medium rounded hover:bg-accent-primary transition-colors"
              >
                Join
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Strip */}
        <div className="pt-8 border-t border-border-subtle flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-xs text-text-secondary">
            © 2026 Codesstellar · Post-Quantum Security Infrastructure
          </div>
          <div className="text-xs text-text-secondary">
            Delhi, IN · contact@codesstellar.com
          </div>
        </div>
      </div>
    </footer>
  );
}
