"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Rocket } from 'lucide-react';
import { SERVICES } from '../lib/constants';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-500 border-b ${scrolled ? 'bg-stellar-void/80 backdrop-blur-xl border-white/5 py-4' : 'bg-transparent border-transparent py-6'}`}>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-center">

            {/* Logo */}
            <Link href="/" className="flex items-center group cursor-hover">
              <img src="/logo-full.png" alt="CodesStellar" className="h-12 w-auto object-contain" />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-12">
              <Link href="/" className="text-sm font-medium text-gray-400 hover:text-white transition-colors tracking-widest uppercase cursor-hover">Home</Link>

              <div className="relative group">
                <button className="text-sm font-medium text-gray-400 group-hover:text-white transition-colors tracking-widest uppercase flex items-center cursor-hover">
                  Services
                </button>
                {/* Dropdown */}
                <div className="absolute top-full right-0 mt-4 w-72 bg-[#0a0f0d] border border-white/10 rounded-xl shadow-2xl overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <div className="p-2">
                    {SERVICES.map(service => (
                      <Link
                        key={service.id}
                        href={`/services/${service.id}`}
                        className="block px-4 py-3 text-sm text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors cursor-hover flex items-center"
                      >
                        <service.icon className="w-4 h-4 mr-3 text-stellar-gold" />
                        {service.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <Link href="/contact" className="text-sm font-medium text-gray-400 hover:text-white transition-colors tracking-widest uppercase cursor-hover">Contact</Link>

              <Link href="/contact" className="px-6 py-2 rounded-full border border-stellar-gold/30 text-stellar-gold hover:bg-stellar-gold hover:text-stellar-green transition-all duration-300 text-xs font-bold uppercase tracking-widest cursor-hover">
                Start Project
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white p-2"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-stellar-void z-40 md:hidden pt-24 px-6"
          >
            <div className="flex flex-col space-y-8">
              <Link href="/" className="text-3xl font-bold text-white tracking-tighter">HOME</Link>
              <div className="space-y-4">
                <span className="text-stellar-gold text-xs font-bold tracking-widest uppercase mb-2 block">Services</span>
                {SERVICES.map(service => (
                  <Link
                    key={service.id}
                    href={`/services/${service.id}`}
                    className="block text-xl text-gray-400 hover:text-white transition-colors"
                  >
                    {service.title}
                  </Link>
                ))}
              </div>
              <Link href="/contact" className="text-3xl font-bold text-white tracking-tighter">CONTACT</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;