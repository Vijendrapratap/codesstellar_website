'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 h-[68px] transition-all duration-300 ${
          scrolled 
            ? 'bg-background/85 backdrop-blur-md border-b border-border-subtle' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
          <Link href="/" className="flex items-center" data-hover="HOME">
            <img src="/assets/logo-full.png" alt="Codesstellar Logo" className="h-8 md:h-10 w-auto object-contain" />
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <div className="relative group" data-hover="SERVICES">
              <button className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors py-6">
                Services
              </button>
              {/* Mega Menu */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-[600px] bg-surface border border-border-subtle rounded-xl p-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 shadow-2xl">
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xs font-mono text-accent-primary mb-4 uppercase tracking-wider">Core Tech</h3>
                    <ul className="space-y-3">
                      <li><a href="#" className="text-sm text-text-secondary hover:text-text-primary transition-colors">PQC Blockchain Infrastructure</a></li>
                      <li><a href="#" className="text-sm text-text-secondary hover:text-text-primary transition-colors">AI-Powered Security Audits</a></li>
                      <li><a href="#" className="text-sm text-text-secondary hover:text-text-primary transition-colors">Crypto-Agile Architecture</a></li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xs font-mono text-accent-secondary mb-4 uppercase tracking-wider">Build</h3>
                    <ul className="space-y-3">
                      <li><a href="#" className="text-sm text-text-secondary hover:text-text-primary transition-colors">Web3 & DApp Development</a></li>
                      <li><a href="#" className="text-sm text-text-secondary hover:text-text-primary transition-colors">Smart Contract Engineering</a></li>
                      <li><a href="#" className="text-sm text-text-secondary hover:text-text-primary transition-colors">Token Economy Design</a></li>
                    </ul>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-border-subtle flex items-center justify-between">
                  <span className="text-xs text-text-secondary">Trusted Partners</span>
                  <div className="flex gap-4 opacity-50">
                    <span className="text-xs font-mono">CoinMarketCap</span>
                    <span className="text-xs font-mono">Solana</span>
                  </div>
                </div>
              </div>
            </div>
            <Link href="/case-studies" className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors" data-hover="WORK">Case Studies</Link>
            <Link href="/blogs" className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors" data-hover="READ">Blogs</Link>
          </nav>

          <div className="hidden md:block">
            <Link 
              href="/build"
              className="px-5 py-2 rounded-full border border-accent-primary text-sm font-medium text-accent-primary hover:bg-accent-primary/10 transition-all duration-300 glow-effect inline-block"
              data-hover="BUILD"
            >
              Build With Us
            </Link>
          </div>

          <button 
            className="md:hidden text-text-primary"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-xl flex flex-col"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="p-6 flex justify-end">
              <button onClick={() => setMobileMenuOpen(false)} className="text-text-primary">
                <X size={24} />
              </button>
            </div>
            <div className="flex-1 flex flex-col justify-center px-8 gap-8">
              <Link
                href="/"
                className="text-4xl font-display font-bold text-text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/case-studies"
                className="text-4xl font-display font-bold text-text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                Case Studies
              </Link>
              <Link
                href="/blogs"
                className="text-4xl font-display font-bold text-text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                Blogs
              </Link>
              <Link 
                href="/build"
                className="mt-8 px-6 py-3 rounded-full bg-accent-primary text-background font-medium text-lg w-fit text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Build With Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
