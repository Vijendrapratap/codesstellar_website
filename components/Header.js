"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[var(--background)]/80 backdrop-blur-md border-b border-white/10' : 'bg-transparent'}`}>
            <div className="container flex items-center justify-between h-20">
                <Link href="/" className="flex items-center gap-2">
                    {/* Placeholder for Logo - using Image 0 */}
                    <div className="relative w-10 h-10">
                        <Image
                            src="/assets/uploaded_image_0_1766144146154.png"
                            alt="Codesstellar Logo"
                            fill
                            className="object-contain"
                        />
                    </div>
                    <span className="text-xl font-bold font-outfit tracking-wide">CODESSTELLAR</span>
                </Link>

                <nav className="hidden md:flex items-center gap-8">
                    <Link href="#services" className="text-sm font-medium hover:text-[var(--primary)] transition-colors">Services</Link>
                    <Link href="#technologies" className="text-sm font-medium hover:text-[var(--primary)] transition-colors">Technologies</Link>
                    <Link href="#about" className="text-sm font-medium hover:text-[var(--primary)] transition-colors">About</Link>
                    <Link href="#contact" className="px-5 py-2.5 rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-white text-sm font-semibold hover:opacity-90 transition-opacity">
                        Get Started
                    </Link>
                </nav>
            </div>
        </header>
    );
}
