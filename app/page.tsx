"use client";

import React, { useRef, useState, useLayoutEffect, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, Bot, Code2, Blocks, ArrowUpRight, Smartphone } from 'lucide-react';
import { SERVICES } from '../lib/constants';
import { motion, useScroll, useTransform, useSpring, useVelocity } from 'framer-motion';

const Home: React.FC = () => {
    const containerRef = useRef(null);
    const { scrollY } = useScroll();

    // Parallax for Hero Text
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const opacityHero = useTransform(scrollY, [0, 400], [1, 0]);

    return (
        <div className="w-full bg-stellar-dark overflow-x-hidden" ref={containerRef}>

            {/* ----------------- GLOBAL ATMOSPHERE ----------------- */}
            <div className="fixed inset-0 bg-grid-tech pointer-events-none z-0 opacity-40"></div>

            {/* Ambient Green/Gold Glows */}
            <div className="fixed top-[-20%] left-[-10%] w-[800px] h-[800px] bg-stellar-green/20 rounded-full blur-[120px] pointer-events-none z-0 mix-blend-screen animate-pulse-slow"></div>
            <div className="fixed bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-stellar-gold/10 rounded-full blur-[100px] pointer-events-none z-0 mix-blend-screen"></div>

            {/* ----------------- HERO SECTION ----------------- */}
            <section className="relative h-screen flex flex-col justify-center items-center px-6 overflow-hidden border-b border-stellar-green/10">

                {/* Animated Rings Background */}
                <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
                    <div className="w-[40vw] h-[40vw] border border-stellar-green/30 rounded-full animate-[spin_20s_linear_infinite]"></div>
                    <div className="absolute w-[50vw] h-[50vw] border border-dashed border-stellar-gold/20 rounded-full animate-[spin_30s_linear_infinite_reverse]"></div>
                </div>

                <motion.div style={{ y: y1, opacity: opacityHero }} className="relative z-10 text-center">

                    <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-stellar-gold/20 bg-stellar-gold/5 backdrop-blur-md">
                        <div className="w-2 h-2 bg-stellar-gold rounded-full animate-pulse"></div>
                        <span className="text-stellar-gold font-mono text-xs tracking-widest uppercase">System Online</span>
                    </div>

                    <h1 className="text-[12vw] leading-[0.85] font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-gray-500 select-none">
                        CODES
                    </h1>
                    <h1 className="text-[12vw] leading-[0.85] font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-stellar-gold via-yellow-200 to-stellar-gold select-none relative z-10 -mt-2 md:-mt-6 pb-4">
                        STELLAR
                    </h1>

                    <p className="mt-8 text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        Forging the <span className="text-stellar-green font-bold">Post-Quantum</span> future with AI Agents,
                        Blockchain, and Immersive Digital Realities.
                    </p>

                    <div className="mt-12 flex flex-col md:flex-row gap-6 justify-center items-center">
                        <Link href="/contact" className="group relative px-10 py-4 bg-stellar-gold text-black font-bold uppercase tracking-widest text-sm overflow-hidden">
                            <span className="relative z-10 flex items-center gap-2 group-hover:text-white transition-colors">
                                Initialize Project <ArrowRight size={16} />
                            </span>
                            <div className="absolute inset-0 bg-stellar-green transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                        </Link>
                        <Link href="/services/software-development" className="text-gray-400 hover:text-white text-sm font-mono tracking-widest uppercase border-b border-transparent hover:border-stellar-gold transition-all">
                            Browse Protocols
                        </Link>
                    </div>
                </motion.div>

                {/* Scroll Hint */}
                <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
                    <span className="text-[10px] font-mono text-stellar-gold tracking-widest">SCROLL</span>
                    <div className="w-[1px] h-12 bg-gradient-to-b from-stellar-gold to-transparent"></div>
                </div>
            </section>

            {/* ----------------- SERVICES GRID (Green/Gold Theme) ----------------- */}
            <section className="py-32 px-6 md:px-12 relative z-10">
                <div className="max-w-[1600px] mx-auto">

                    <div className="mb-20 border-l-2 border-stellar-gold pl-6">
                        <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tight text-white mb-2">
                            Core <span className="text-stellar-green">Modules</span>
                        </h2>
                        <p className="text-gray-400 max-w-md">Advanced digital infrastructure for the modern enterprise.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                        {/* AI */}
                        <ServiceCard
                            className="md:col-span-2 bg-gradient-to-br from-[#0a1f16] to-stellar-panel border-stellar-green/20"
                            title="AI & Agents"
                            icon={<Bot className="text-stellar-green" />}
                            tags={['LLMs', 'Automation', 'Predictive']}
                            link="/services/ai-development"
                        >
                            <div className="absolute right-0 bottom-0 w-64 h-64 bg-stellar-green/10 rounded-full blur-[60px] group-hover:bg-stellar-green/20 transition-all"></div>
                        </ServiceCard>

                        {/* Blockchain */}
                        <ServiceCard
                            className="bg-stellar-panel border-white/10"
                            title="Blockchain"
                            icon={<Blocks className="text-stellar-gold" />}
                            tags={['Web3', 'DeFi', 'Smart Contracts']}
                            link="/services/blockchain"
                        />

                        {/* Mobile */}
                        <ServiceCard
                            className="bg-stellar-panel border-white/10"
                            title="Mobile Apps"
                            icon={<Smartphone className="text-blue-400" />}
                            tags={['iOS', 'Android', 'Flutter']}
                            link="/services/mobile-app"
                        />

                        {/* Software */}
                        <ServiceCard
                            className="md:col-span-2 bg-gradient-to-br from-[#1a1500] to-stellar-panel border-stellar-gold/20"
                            title="Custom Engineering"
                            icon={<Code2 className="text-stellar-gold" />}
                            tags={['Cloud', 'SaaS', 'Microservices']}
                            link="/services/software-development"
                        >
                            <div className="absolute right-0 bottom-0 w-64 h-64 bg-stellar-gold/10 rounded-full blur-[60px] group-hover:bg-stellar-gold/20 transition-all"></div>
                        </ServiceCard>

                    </div>
                </div>
            </section>

            {/* ----------------- VELOCITY PARALLAX FEATURED SECTION ----------------- */}
            <VelocityScrollSection />

            {/* ----------------- PROCESS ----------------- */}
            <section className="py-32 px-6 md:px-12 bg-stellar-dark relative border-t border-stellar-green/10">
                <div className="max-w-[1400px] mx-auto">
                    <div className="flex flex-col md:flex-row gap-16 items-start">
                        <div className="md:w-1/3 sticky top-32">
                            <h2 className="text-5xl font-bold uppercase tracking-tighter text-white mb-6">
                                The <span className="text-transparent bg-clip-text bg-gradient-to-r from-stellar-green to-stellar-gold">Protocol</span>
                            </h2>
                            <p className="text-gray-400 text-lg leading-relaxed mb-8">
                                We don't guess. We engineer outcomes through a rigorous, transparent process designed for speed and scalability.
                            </p>
                            <Link href="/contact" className="text-stellar-gold font-mono text-sm uppercase border-b border-stellar-gold pb-1 hover:text-white hover:border-white transition-colors">
                                Start Collaboration
                            </Link>
                        </div>

                        <div className="md:w-2/3 grid gap-8">
                            <ProcessStep number="01" title="Discovery" desc="Deep dive analysis of your requirements, market position, and technical constraints." />
                            <ProcessStep number="02" title="Architecture" desc="Designing scalable, secure systems using the latest cloud-native patterns." />
                            <ProcessStep number="03" title="Development" desc="Rapid agile sprints with continuous integration and automated testing." />
                            <ProcessStep number="04" title="Deployment" desc="Zero-downtime launch strategies and 24/7 performance monitoring." />
                        </div>
                    </div>
                </div>
            </section>

            {/* ----------------- CTA ----------------- */}
            <section className="py-32 relative overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-b from-stellar-dark via-stellar-green/10 to-stellar-dark"></div>
                <div className="relative z-10 text-center max-w-4xl px-4">
                    <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter mb-8">
                        Ready to <span className="text-stellar-gold">Ascend?</span>
                    </h2>
                    <p className="text-xl text-gray-400 mb-12">
                        Join the forward-thinking companies building the future with Codesstellar.
                    </p>
                    <Link href="/contact" className="inline-block px-12 py-5 bg-white text-black font-bold text-lg rounded-full hover:bg-stellar-gold hover:scale-105 transition-all shadow-[0_0_40px_rgba(255,255,255,0.2)]">
                        Initiate Contact
                    </Link>
                </div>
            </section>
        </div>
    );
};

// ----------------- SUB-COMPONENTS -----------------

const ServiceCard = ({ className, title, icon, tags, children, link }: any) => (
    <Link href={link} className={`group relative p-8 rounded-3xl border overflow-hidden hover:scale-[1.02] transition-transform duration-500 ${className}`}>
        {children}
        <div className="relative z-10 h-full flex flex-col justify-between">
            <div className="flex justify-between items-start mb-12">
                <div className="p-3 bg-black/20 rounded-xl backdrop-blur-sm border border-white/5">
                    {icon}
                </div>
                <ArrowUpRight className="text-gray-500 group-hover:text-white transition-colors" />
            </div>
            <div>
                <h3 className="text-3xl font-bold text-white mb-4">{title}</h3>
                <div className="flex flex-wrap gap-2">
                    {tags.map((tag: string) => (
                        <span key={tag} className="text-xs font-mono text-gray-400 bg-black/30 px-2 py-1 rounded border border-white/5">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    </Link>
);

const ProcessStep = ({ number, title, desc }: any) => (
    <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] hover:border-stellar-green/30 transition-all group">
        <div className="flex items-center gap-4 mb-4">
            <span className="font-mono text-stellar-gold text-sm">/// {number}</span>
            <h3 className="text-2xl font-bold text-white">{title}</h3>
        </div>
        <p className="text-gray-400 leading-relaxed pl-12 border-l border-white/10 group-hover:border-stellar-green/50 transition-colors">
            {desc}
        </p>
    </div>
);

// ----------------- VELOCITY PARALLAX SECTION (Horizontal Scroll) -----------------

const VelocityScrollSection = () => {
    const targetRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const [scrollRange, setScrollRange] = useState(0);
    const { scrollYProgress } = useScroll({ target: targetRef });

    // Robust width calculation to prevent blank spaces
    useLayoutEffect(() => {
        const element = contentRef.current;
        if (!element) return;

        const updateScrollRange = () => {
            if (contentRef.current) {
                const width = contentRef.current.scrollWidth;
                const viewportWidth = window.innerWidth;
                // Calculate exactly how much we need to translate to reach the end
                // We use Math.max to ensure non-negative if content is smaller than viewport
                const range = Math.max(0, width - viewportWidth + 100); // +100 padding for end card visibility
                setScrollRange(range);
            }
        };

        // Watch for any size changes (like images loading)
        const observer = new ResizeObserver(updateScrollRange);
        observer.observe(element);

        // Also update on window resize
        window.addEventListener('resize', updateScrollRange);

        // Initial call
        updateScrollRange();

        return () => {
            observer.disconnect();
            window.removeEventListener('resize', updateScrollRange);
        };
    }, [SERVICES]);

    // 1. Horizontal Scroll Logic
    // Map vertical scroll (0 to 1) to horizontal pixel shift (0 to -scrollRange)
    // We use pixels directly to match the scrollWidth calculation
    const x = useTransform(scrollYProgress, [0, 1], [0, -scrollRange]);

    // 2. Velocity Skew Logic
    const scrollVelocity = useVelocity(scrollYProgress);
    const skewVelocity = useSpring(scrollVelocity, { stiffness: 300, damping: 90 });
    const skew = useTransform(skewVelocity, [-1, 1], [-2, 2]); // Subtle skew

    // Projects Data
    const projects = SERVICES.flatMap(s => s.projects);

    return (
        <section ref={targetRef} className="relative h-[300vh] bg-stellar-dark">
            <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden border-y border-stellar-green/10 bg-[#050806]">

                {/* Background Tech Lines */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-[20%] left-0 w-full h-px bg-stellar-green/10"></div>
                    <div className="absolute bottom-[20%] left-0 w-full h-px bg-stellar-green/10"></div>
                </div>

                {/* Section Header */}
                <div className="absolute top-8 left-8 md:top-12 md:left-12 z-20 pointer-events-none mix-blend-difference">
                    <span className="text-stellar-gold font-mono text-xs tracking-widest uppercase mb-2 block">/// Archive_Access</span>
                    <h2 className="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter">
                        Featured <br /> Missions
                    </h2>
                </div>

                {/* The Moving Track */}
                <motion.div
                    ref={contentRef}
                    style={{ x }}
                    className="flex gap-8 md:gap-16 pl-[5vw] md:pl-[20vw] items-center w-max pr-20"
                >

                    {projects.map((project, idx) => (
                        <ParallaxCard key={idx} project={project} index={idx} skew={skew} />
                    ))}

                    {/* End Card / CTA */}
                    <div className="w-[300px] h-[400px] md:w-[400px] md:h-[500px] flex items-center justify-center shrink-0 border border-white/5 rounded-2xl bg-white/[0.02]">
                        <Link href="/contact" className="text-center group p-8">
                            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border border-stellar-gold/30 flex items-center justify-center mx-auto mb-6 group-hover:bg-stellar-gold group-hover:text-black transition-all duration-500">
                                <ArrowRight size={32} className="text-stellar-gold group-hover:text-black" />
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">View Full <br /> Archive</h3>
                            <p className="text-gray-500 text-sm">Explore all deployed projects</p>
                        </Link>
                    </div>

                </motion.div>

                {/* Progress Bar */}
                <div className="absolute bottom-0 left-0 h-1 bg-stellar-green/10 w-full">
                    <motion.div
                        className="h-full bg-stellar-gold"
                        style={{ scaleX: scrollYProgress, transformOrigin: "0%" }}
                    />
                </div>
            </div>
        </section>
    );
};

// Individual Card with Internal Parallax
const ParallaxCard = ({ project, index, skew }: any) => {
    return (
        <motion.div
            style={{ skewX: skew }}
            className="relative w-[85vw] md:w-[700px] h-[55vh] md:h-[550px] shrink-0 group perspective-1000"
        >
            <Link href={`/services/${SERVICES.find(s => s.projects.includes(project))?.id}`} className="block w-full h-full">

                {/* Main Container */}
                <div className="w-full h-full relative overflow-hidden rounded-xl border border-white/10 bg-stellar-panel group-hover:border-stellar-gold/50 transition-colors duration-500">

                    {/* Image with Parallax Scale Effect */}
                    <div className="absolute inset-0 overflow-hidden bg-stellar-dark">
                        <img
                            src={project.image}
                            alt={project.title}
                            loading="lazy"
                            className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-700 ease-out filter grayscale group-hover:grayscale-0 opacity-70 group-hover:opacity-100"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90 group-hover:opacity-60 transition-opacity"></div>
                    </div>

                    {/* Grid Overlay */}
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>

                    {/* Content Overlay */}
                    <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between z-20">

                        {/* Top Bar */}
                        <div className="flex justify-between items-start">
                            <span className="font-mono text-stellar-gold text-[10px] border border-stellar-gold/30 px-2 py-1 bg-black/60 backdrop-blur-md rounded uppercase tracking-wider">
                                Project // 0{index + 1}
                            </span>
                            <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                                <ArrowUpRight size={16} />
                            </div>
                        </div>

                        {/* Bottom Info */}
                        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                            <h3 className="text-3xl md:text-5xl font-bold text-white uppercase tracking-tighter leading-none mb-4 group-hover:text-stellar-gold transition-colors">
                                {project.title}
                            </h3>

                            <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-500 opacity-0 group-hover:opacity-100">
                                <p className="text-gray-300 text-sm md:text-base mb-6 line-clamp-2">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag: string) => (
                                        <span key={tag} className="text-[10px] font-bold text-black bg-white px-2 py-1 uppercase tracking-wider rounded-sm">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
};

export default Home;
