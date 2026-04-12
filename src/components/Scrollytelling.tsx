import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

export default function Scrollytelling() {
  const containerRef = useRef<HTMLDivElement>(null);
  const act1Ref = useRef<HTMLDivElement>(null);
  const act2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Act 1: The Problem
      const act1Tl = gsap.timeline({
        scrollTrigger: {
          trigger: act1Ref.current,
          start: "top top",
          end: "+=200%",
          pin: true,
          scrub: 1,
        }
      });

      act1Tl
        .to(".beat-1", { opacity: 0, scale: 1.1, filter: "blur(10px)", duration: 1 })
        .fromTo(".beat-2", { opacity: 0, scale: 0.9, filter: "blur(10px)" }, { opacity: 1, scale: 1, filter: "blur(0px)", duration: 1 }, "-=0.5")
        .to(".beat-2", { opacity: 0, scale: 1.1, filter: "blur(10px)", duration: 1 })
        .fromTo(".beat-3", { opacity: 0, scale: 0.9, filter: "blur(10px)" }, { opacity: 1, scale: 1, filter: "blur(0px)", duration: 1 }, "-=0.5");

      // Act 2: What We Do
      const act2Tl = gsap.timeline({
        scrollTrigger: {
          trigger: act2Ref.current,
          start: "top top",
          end: "+=300%",
          pin: true,
          scrub: 1,
        }
      });

      const beats = gsap.utils.toArray('.act2-beat');
      beats.forEach((beat: any, i) => {
        if (i > 0) {
          act2Tl.fromTo(beat, 
            { opacity: 0, y: 100 }, 
            { opacity: 1, y: 0, duration: 1 }
          );
        }
        if (i < beats.length - 1) {
          act2Tl.to(beat, { opacity: 0, y: -100, duration: 1 });
        }
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="bg-background text-text-primary">
      {/* ACT 1: THE PROBLEM */}
      <section ref={act1Ref} className="h-screen w-full relative flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay pointer-events-none"></div>
        
        <div className="beat-1 absolute inset-0 flex flex-col items-center justify-center px-6 text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-display mb-6">In 5–10 years, quantum computers will break today's encryption.</h2>
          <p className="text-text-secondary text-lg">RSA, ECC, AES — the algorithms protecting your data — are obsolete.</p>
        </div>

        <div className="beat-2 absolute inset-0 flex flex-col items-center justify-center px-6 text-center max-w-4xl mx-auto opacity-0">
          <h2 className="text-4xl md:text-6xl font-display text-accent-tertiary">Every transaction. Every credential. Every system.</h2>
        </div>

        <div className="beat-3 absolute inset-0 flex flex-col items-center justify-center px-6 text-center max-w-4xl mx-auto opacity-0">
          <h2 className="text-4xl md:text-6xl font-display text-gradient-primary">Unless you build quantum-resistant from the ground up.</h2>
        </div>
      </section>

      {/* ACT 2: WHAT WE DO */}
      <section ref={act2Ref} className="h-screen w-full relative overflow-hidden bg-surface">
        <div className="absolute inset-0 max-w-7xl mx-auto px-6 flex items-center">
          
          <div className="act2-beat absolute inset-x-6 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="flex-1">
              <div className="text-sm font-mono text-accent-primary mb-4">01 / PQC BLOCKCHAIN</div>
              <h3 className="text-4xl md:text-5xl font-display mb-6">CRYSTALS-Kyber + Dilithium</h3>
              <p className="text-xl text-text-secondary">We don't retrofit quantum safety. We architect it at Layer 0.</p>
            </div>
            <div className="flex-1 h-64 md:h-96 border border-border-subtle rounded-3xl overflow-hidden relative shadow-2xl shadow-accent-primary/5">
              <img src="https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&w=1000&q=80" alt="Blockchain Structure" className="w-full h-full object-cover mix-blend-luminosity opacity-80" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-tr from-background via-transparent to-transparent"></div>
            </div>
          </div>

          <div className="act2-beat absolute inset-x-6 flex flex-col md:flex-row items-center justify-between gap-12 opacity-0 translate-y-[100px]">
            <div className="flex-1 h-64 md:h-96 border border-border-subtle rounded-3xl overflow-hidden relative shadow-2xl shadow-accent-secondary/5 p-6 flex flex-col justify-end">
              <img src="https://images.unsplash.com/photo-1620825937374-87fc7d62828e?auto=format&fit=crop&w=1000&q=80" alt="AI Network" className="absolute inset-0 w-full h-full object-cover mix-blend-luminosity opacity-40" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
              <div className="relative z-10 font-mono text-sm text-accent-secondary w-full">
                <p className="mb-2">&gt; Initializing AI Agents...</p>
                <p className="mb-2">&gt; Scanning chain state...</p>
                <p className="text-accent-tertiary">&gt; Anomaly detected at block #89210</p>
                <p className="text-accent-primary">&gt; Threat mitigated. State secured.</p>
              </div>
            </div>
            <div className="flex-1">
              <div className="text-sm font-mono text-accent-secondary mb-4">02 / AI-POWERED DETECTION</div>
              <h3 className="text-4xl md:text-5xl font-display mb-6">AI agents monitoring chain state 24/7.</h3>
              <p className="text-xl text-text-secondary">Fault prediction before breach.</p>
            </div>
          </div>

          <div className="act2-beat absolute inset-x-6 flex flex-col items-center justify-center text-center gap-12 opacity-0 translate-y-[100px]">
            <div className="text-sm font-mono text-text-primary mb-4">03 / WEB3 & DAPP ENGINEERING</div>
            <h3 className="text-4xl md:text-5xl font-display mb-12 max-w-3xl">50+ protocols shipped. From DeFi to GameFi to enterprise chains.</h3>
            <div className="flex gap-8 opacity-50">
              <span className="text-xl font-display font-bold">CoinMarketCap</span>
              <span className="text-xl font-display font-bold">Solana</span>
              <span className="text-xl font-display font-bold">CoinGecko</span>
            </div>
          </div>

          <div className="act2-beat absolute inset-x-6 flex flex-col items-center justify-center text-center gap-8 opacity-0 translate-y-[100px]">
            <h3 className="text-5xl md:text-6xl font-display mb-8">Ready to build quantum-safe infrastructure?</h3>
            <div className="flex gap-4">
              <Link to="/build" className="px-8 py-4 bg-accent-primary text-background font-medium rounded-full hover:bg-opacity-90 transition-all">
                Start a Project
              </Link>
              <Link to="/case-studies" className="px-8 py-4 border border-border-subtle text-text-primary font-medium rounded-full hover:bg-surface transition-all">
                See Our Work
              </Link>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
