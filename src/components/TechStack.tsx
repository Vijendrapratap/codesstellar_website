'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function TechStack() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const bands = gsap.utils.toArray('.tech-band');
      
      bands.forEach((band: any) => {
        gsap.fromTo(band,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            scrollTrigger: {
              trigger: band,
              start: "top 80%",
              toggleActions: "play none none reverse"
            }
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-32 bg-background relative border-t border-border-subtle">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-24">
          <h2 className="text-4xl md:text-5xl font-display mb-4">The Architecture</h2>
          <p className="text-text-secondary text-lg max-w-2xl">A layered approach to security that is practical today and designed to evolve as standards and threats change.</p>
        </div>

        <div className="space-y-0">
          {/* Band 1 */}
          <div className="tech-band flex flex-col md:flex-row border-t border-border-subtle py-16 group">
            <div className="w-full md:w-1/3 mb-8 md:mb-0">
              <div className="text-sm font-mono text-accent-primary mb-2">LAYER 01</div>
              <h3 className="text-3xl font-display group-hover:text-accent-primary transition-colors">Blockchain Layer</h3>
            </div>
            <div className="w-full md:w-2/3 flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-1">
                <p className="text-lg text-text-secondary leading-relaxed">
                  Crypto inventory, key lifecycle design, and standards-aligned choices for key establishment and digital signatures. We plan hybrid transitions where they reduce migration risk.
                </p>
              </div>
              <div className="w-full md:w-1/2 aspect-video md:aspect-square max-w-md rounded-3xl overflow-hidden relative border border-border-subtle opacity-80 group-hover:opacity-100 transition-all duration-500 shadow-xl shadow-accent-primary/5">
                <div className="w-full h-full bg-[#040A07] relative overflow-hidden flex items-center justify-center group-hover:scale-105 transition-transform duration-700">
                  {/* Grid */}
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
                  {/* Glowing orb */}
                  <div className="absolute w-64 h-64 bg-[#C69B24]/10 rounded-full blur-3xl"></div>
                  {/* Logo network */}
                  <svg width="100%" height="100%" viewBox="0 0 200 200" fill="none" className="relative z-10">
                    <path d="M100 40 L160 100 L100 160 L40 100 Z" stroke="#1A5D42" strokeWidth="1" strokeDasharray="4 4" className="animate-[spin_20s_linear_infinite] origin-center"/>
                    <path d="M100 60 L140 100 L100 140 L60 100 Z" stroke="#C69B24" strokeWidth="1" className="animate-[spin_15s_linear_infinite_reverse] origin-center"/>
                    {/* Central Logo */}
                    <g transform="translate(84, 84)">
                      <path d="M16 2L2 10V22L16 30L30 22V10L16 2Z" stroke="#C69B24" strokeWidth="2"/>
                      <circle cx="16" cy="16" r="4" fill="#C69B24"/>
                    </g>
                    {/* Connecting lines */}
                    <line x1="100" y1="100" x2="150" y2="50" stroke="#1A5D42" strokeWidth="1"/>
                    <line x1="100" y1="100" x2="50" y2="150" stroke="#1A5D42" strokeWidth="1"/>
                    <circle cx="150" cy="50" r="3" fill="#1A5D42"/>
                    <circle cx="50" cy="150" r="3" fill="#1A5D42"/>
                  </svg>
                </div>
                <div className="absolute inset-0 bg-gradient-to-tr from-background via-background/40 to-transparent pointer-events-none"></div>
                <div className="absolute bottom-6 left-6 w-12 h-12 rounded-xl bg-background/80 backdrop-blur-md flex items-center justify-center border border-border-subtle">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C69B24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Band 2 */}
          <div className="tech-band flex flex-col md:flex-row border-t border-border-subtle py-16 md:pl-12 group">
            <div className="w-full md:w-1/3 mb-8 md:mb-0">
              <div className="text-sm font-mono text-accent-secondary mb-2">LAYER 02</div>
              <h3 className="text-3xl font-display group-hover:text-accent-secondary transition-colors">AI Layer</h3>
            </div>
            <div className="w-full md:w-2/3 flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-1">
                <p className="text-lg text-text-secondary leading-relaxed">
                  AI-assisted security workflows that group alerts, map dependencies, summarize research, and help experts prioritize what deserves review.
                </p>
              </div>
              <div className="w-full md:w-1/2 aspect-video md:aspect-square max-w-md rounded-3xl overflow-hidden relative border border-border-subtle opacity-80 group-hover:opacity-100 transition-all duration-500 shadow-xl shadow-accent-secondary/5">
                <div className="w-full h-full bg-[#040A07] relative overflow-hidden flex items-center justify-center group-hover:scale-105 transition-transform duration-700">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(26,93,66,0.2),transparent_70%)]"></div>
                  {/* Data streams */}
                  <div className="absolute inset-0 flex justify-around items-center opacity-20">
                    {[...Array(10)].map((_, i) => (
                      <div key={i} className="w-[1px] h-full bg-gradient-to-b from-transparent via-[#4ADE80] to-transparent animate-pulse" style={{ animationDelay: `${i * 0.2}s` }}></div>
                    ))}
                  </div>
                  <svg width="100%" height="100%" viewBox="0 0 200 200" fill="none" className="relative z-10">
                    {/* Radar sweep */}
                    <circle cx="100" cy="100" r="60" stroke="#1A5D42" strokeWidth="1" strokeDasharray="2 6"/>
                    <circle cx="100" cy="100" r="40" stroke="#4ADE80" strokeWidth="0.5" className="animate-ping" style={{ animationDuration: '3s' }}/>
                    {/* Central Logo */}
                    <g transform="translate(84, 84)">
                      <path d="M16 2L2 10V22L16 30L30 22V10L16 2Z" stroke="#4ADE80" strokeWidth="1.5"/>
                      <circle cx="16" cy="16" r="4" fill="#1A5D42"/>
                    </g>
                  </svg>
                </div>
                <div className="absolute inset-0 bg-gradient-to-tr from-background via-background/40 to-transparent pointer-events-none"></div>
                <div className="absolute bottom-6 left-6 w-12 h-12 rounded-xl bg-background/80 backdrop-blur-md flex items-center justify-center border border-border-subtle">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1A5D42" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 12h4l3-9 5 18 3-9h5"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Band 3 */}
          <div className="tech-band flex flex-col md:flex-row border-t border-b border-border-subtle py-16 md:pl-24 group">
            <div className="w-full md:w-1/3 mb-8 md:mb-0">
              <div className="text-sm font-mono text-text-primary mb-2">LAYER 03</div>
              <h3 className="text-3xl font-display group-hover:text-text-primary transition-colors">Application Layer</h3>
            </div>
            <div className="w-full md:w-2/3 flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-1">
                <p className="text-lg text-text-secondary leading-relaxed">
                  Smart contracts, DApps, APIs, and integrations designed with clear verification boundaries and upgrade paths.
                </p>
              </div>
              <div className="w-full md:w-1/2 aspect-video md:aspect-square max-w-md rounded-3xl overflow-hidden relative border border-border-subtle opacity-80 group-hover:opacity-100 transition-all duration-500 shadow-xl shadow-white/5">
                <div className="w-full h-full bg-[#040A07] relative overflow-hidden flex items-center justify-center group-hover:scale-105 transition-transform duration-700">
                  {/* Isometric grid of logos */}
                  <div className="absolute inset-0 flex flex-wrap gap-6 p-8 items-center justify-center opacity-30 transform rotate-12 scale-125">
                    {[...Array(15)].map((_, i) => (
                      <svg key={i} width="32" height="32" viewBox="0 0 32 32" fill="none" className={`transition-all duration-1000 ${i % 4 === 0 ? 'opacity-100 scale-110' : 'opacity-40'}`}>
                        <path d="M16 2L2 10V22L16 30L30 22V10L16 2Z" stroke="#1A5D42" strokeWidth="1"/>
                        <circle cx="16" cy="16" r="4" fill={i % 3 === 0 ? "#C69B24" : "#1A5D42"}/>
                      </svg>
                    ))}
                  </div>
                  {/* Glass overlay with main logo */}
                  <div className="relative z-10 w-32 h-32 border border-white/10 bg-white/5 backdrop-blur-md rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(198,155,36,0.15)]">
                    <svg width="48" height="48" viewBox="0 0 32 32" fill="none">
                      <path d="M16 2L2 10V22L16 30L30 22V10L16 2Z" stroke="#C69B24" strokeWidth="2"/>
                      <circle cx="16" cy="16" r="4" fill="#C69B24"/>
                    </svg>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-tr from-background via-background/40 to-transparent pointer-events-none"></div>
                <div className="absolute bottom-6 left-6 w-12 h-12 rounded-xl bg-background/80 backdrop-blur-md flex items-center justify-center border border-border-subtle">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F0F4FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                    <line x1="8" y1="21" x2="16" y2="21"></line>
                    <line x1="12" y1="17" x2="12" y2="21"></line>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
