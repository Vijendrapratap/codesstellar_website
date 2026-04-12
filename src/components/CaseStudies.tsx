import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

export default function CaseStudies() {
  const containerRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const studies = [
    {
      num: "01",
      title: "Enterprise L1 Migration",
      desc: "Migrating a top-10 blockchain to quantum-resistant signature schemes without network downtime.",
      tags: ["PQC", "Blockchain"],
      color: "primary"
    },
    {
      num: "02",
      title: "DeFi Anomaly Detection",
      desc: "Deploying transformer models to predict and halt smart contract exploits in real-time.",
      tags: ["AI", "Security"],
      color: "secondary"
    },
    {
      num: "03",
      title: "Crypto-Agile Wallet",
      desc: "Architecting a multi-signature wallet supporting both classical and post-quantum algorithms.",
      tags: ["Web3", "Architecture"],
      color: "primary"
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const sections = gsap.utils.toArray('.case-study');
      
      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1,
          snap: 1 / (sections.length - 1),
          end: () => "+=" + wrapperRef.current?.offsetWidth
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="h-screen w-full bg-background overflow-hidden relative border-b border-border-subtle">
      <div ref={wrapperRef} className="flex h-full w-[300vw]">
        {studies.map((study, i) => (
          <div key={i} className="case-study w-screen h-full flex flex-col md:flex-row">
            {/* Left Half */}
            <div className="w-full md:w-1/2 h-full p-12 md:p-24 flex flex-col justify-center relative border-r border-border-subtle">
              <div className="absolute top-12 left-12 text-[20vw] font-display font-bold leading-none opacity-[0.03] select-none pointer-events-none">
                {study.num}
              </div>
              
              <div className="relative z-10">
                <div className="flex gap-3 mb-8">
                  {study.tags.map((tag, j) => (
                    <span key={j} className={`text-xs font-mono px-3 py-1 rounded-full border ${study.color === 'primary' ? 'border-accent-primary text-accent-primary' : 'border-accent-secondary text-accent-secondary'}`}>
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-5xl md:text-7xl font-display mb-6">{study.title}</h3>
                <p className="text-xl text-text-secondary max-w-lg mb-12 leading-relaxed">
                  {study.desc}
                </p>
                
                <Link to="/case-studies" className="flex items-center gap-2 text-text-primary font-medium hover:gap-4 transition-all" data-hover="READ">
                  Read Case Study 
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </Link>
              </div>
            </div>
            
            {/* Right Half */}
            <div className="w-full md:w-1/2 h-full bg-surface relative overflow-hidden flex items-center justify-center">
              <div className={`absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,${study.color === 'primary' ? 'rgba(198,155,36,0.4)' : 'rgba(26,93,66,0.4)'},transparent_70%)]`}></div>
              
              <div className="w-80 h-80 md:w-96 md:h-96 rounded-3xl overflow-hidden relative shadow-2xl shadow-accent-primary/10 -rotate-6 hover:rotate-0 transition-transform duration-700 border border-border-subtle">
                <img 
                  src={`https://picsum.photos/seed/codesstellar${study.num}/800/800?blur=2`}
                  alt={study.title}
                  className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-background/80 via-transparent to-transparent"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
